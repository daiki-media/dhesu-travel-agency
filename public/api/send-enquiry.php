<?php
// Receives the contact and package enquiry forms and mails them over
// authenticated SMTP. Credentials live outside the web root, never in git.

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('Expires: 0');
header('X-Robots-Tag: noindex');

function respond(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

$configPath = getenv('DHESU_MAIL_CONFIG') ?: dirname(__DIR__, 2) . '/dhesu-mail-config.php';
if (!is_file($configPath)) {
    error_log('send-enquiry: missing config at ' . $configPath);
    respond(500, ['ok' => false, 'error' => 'Mail is not configured']);
}
$config = require $configPath;

// Browsers always send Origin on a fetch POST; bare scripts usually do not.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!in_array($origin, $config['allowed_origins'], true)) {
    respond(403, ['ok' => false, 'error' => 'Forbidden']);
}

$input = json_decode((string) file_get_contents('php://input', false, null, 0, 20000), true);
if (!is_array($input)) {
    respond(400, ['ok' => false, 'error' => 'Invalid request']);
}

// Honeypot (real visitors never see the field) and a minimum fill time. Bots
// get a fake success so they do not adapt.
if (!empty($input['website']) || (int) ($input['elapsed'] ?? 0) < 2500) {
    respond(200, ['ok' => true]);
}

function clean(mixed $value, int $max): string
{
    $value = is_scalar($value) ? (string) $value : '';
    $value = preg_replace('/[\x00-\x09\x0B-\x1F\x7F]/u', '', $value) ?? '';
    return mb_substr(trim($value), 0, $max);
}

function oneLine(string $value): string
{
    return trim(preg_replace('/\s+/u', ' ', $value) ?? '');
}

$name = oneLine(clean($input['name'] ?? '', 120));
$email = oneLine(clean($input['email'] ?? '', 200));
$phone = oneLine(clean($input['phone'] ?? '', 40));
$topic = oneLine(clean($input['topic'] ?? '', 150));
$source = in_array($input['form'] ?? '', ['contact', 'package'], true) ? $input['form'] : 'contact';

if ($name === '' || ($email === '' && $phone === '')) {
    respond(422, ['ok' => false, 'error' => 'Please give your name and a phone number or email.']);
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please check your email address.']);
}

$details = [];
foreach (array_slice(is_array($input['details'] ?? null) ? $input['details'] : [], 0, 20, true) as $label => $value) {
    $details[oneLine(clean($label, 60))] = clean($value, 3000);
}

$links = preg_match_all('~https?://|www\.~i', implode(' ', $details));
if ($links > 2) {
    respond(422, ['ok' => false, 'error' => 'Please remove the links from your message.']);
}

// Per IP: 5 sends per 10 minutes. Site-wide: 30 per hour, so a bot spread
// over many IPs cannot burn the mailbox's sending reputation.
function overLimit(string $key, int $max, int $window): bool
{
    $file = sys_get_temp_dir() . '/dhesu-enquiry-' . hash('sha256', $key);
    $now = time();
    $recent = array_filter(
        is_file($file) ? (json_decode((string) file_get_contents($file), true) ?: []) : [],
        fn($t) => is_int($t) && $t > $now - $window
    );
    if (count($recent) >= $max) return true;
    $recent[] = $now;
    @file_put_contents($file, json_encode(array_values($recent)), LOCK_EX);
    return false;
}

if (overLimit('ip:' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'), 5, 600)) {
    respond(429, ['ok' => false, 'error' => 'Too many enquiries. Please try again in a few minutes.']);
}
if (overLimit('global', 30, 3600)) {
    error_log('send-enquiry: site-wide hourly limit reached');
    respond(429, ['ok' => false, 'error' => 'We are receiving a lot of enquiries. Please try WhatsApp instead.']);
}

$label = $source === 'package' ? 'Package enquiry' : 'Website enquiry';
$subject = $label . ($topic !== '' ? ': ' . $topic : '') . ' from ' . $name;

$lines = [
    $label . ' from dhesu.com',
    str_repeat('-', 40),
    'Name: ' . $name,
    'Email: ' . ($email ?: '-'),
    'Phone: ' . ($phone ?: '-'),
];
if ($topic !== '') {
    $lines[] = ($source === 'package' ? 'Package: ' : 'Destination: ') . $topic;
}
foreach ($details as $key => $value) {
    if ($key === '') continue;
    $lines[] = $key . ': ' . ($value !== '' ? $value : '-');
}
$lines[] = '';
$lines[] = 'Sent ' . gmdate('Y-m-d H:i') . ' UTC from ' . ($_SERVER['HTTP_REFERER'] ?? 'dhesu.com');
$body = implode("\r\n", $lines);

try {
    smtpSend($config, $subject, $body, $email !== '' ? ['email' => $email, 'name' => $name] : null);
} catch (Throwable $e) {
    error_log('send-enquiry: ' . $e->getMessage());
    respond(502, ['ok' => false, 'error' => 'We could not send your enquiry right now.']);
}

respond(200, ['ok' => true]);

function encodeHeader(string $text): string
{
    return preg_match('/[^\x20-\x7E]/', $text) ? '=?UTF-8?B?' . base64_encode($text) . '?=' : $text;
}

function smtpSend(array $c, string $subject, string $body, ?array $replyTo): void
{
    $socket = @stream_socket_client(
        'ssl://' . $c['host'] . ':' . $c['port'],
        $errno,
        $errstr,
        15,
        STREAM_CLIENT_CONNECT,
        stream_context_create(['ssl' => ['peer_name' => $c['host']]])
    );
    if (!$socket) {
        throw new RuntimeException("connect failed: $errstr ($errno)");
    }
    stream_set_timeout($socket, 15);

    $expect = function (array $codes) use ($socket): void {
        $reply = '';
        while (($line = fgets($socket, 515)) !== false) {
            $reply .= $line;
            if (isset($line[3]) && $line[3] === ' ') break;
        }
        if (!in_array((int) substr($reply, 0, 3), $codes, true)) {
            throw new RuntimeException('SMTP: ' . trim($reply));
        }
    };
    $send = function (string $line, array $codes) use ($socket, $expect): void {
        fwrite($socket, $line . "\r\n");
        $expect($codes);
    };

    $expect([220]);
    $send('EHLO dhesu.com', [250]);
    $send('AUTH LOGIN', [334]);
    $send(base64_encode($c['username']), [334]);
    $send(base64_encode($c['password']), [235]);
    $send('MAIL FROM:<' . $c['from'] . '>', [250]);
    foreach (array_merge($c['to'], $c['cc']) as $rcpt) {
        $send('RCPT TO:<' . $rcpt . '>', [250, 251]);
    }
    $send('DATA', [354]);

    $headers = [
        'Date: ' . date('r'),
        'From: ' . encodeHeader($c['from_name']) . ' <' . $c['from'] . '>',
        'To: ' . implode(', ', $c['to']),
    ];
    if ($c['cc']) {
        $headers[] = 'Cc: ' . implode(', ', $c['cc']);
    }
    if ($replyTo) {
        $headers[] = 'Reply-To: ' . encodeHeader($replyTo['name']) . ' <' . $replyTo['email'] . '>';
    }
    $headers[] = 'Subject: ' . encodeHeader($subject);
    $headers[] = 'Message-ID: <' . bin2hex(random_bytes(12)) . '@dhesu.com>';
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'Content-Transfer-Encoding: base64';

    $message = implode("\r\n", $headers) . "\r\n\r\n" . chunk_split(base64_encode($body), 76, "\r\n");
    fwrite($socket, $message . ".\r\n");
    $expect([250]);
    $send('QUIT', [221]);
    fclose($socket);
}

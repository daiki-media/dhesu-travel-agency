<?php
// Copy to /home/dhesuhol/dhesu-mail-config.php on the server (one level ABOVE
// the dhesu.com folder, so it is never web-accessible) and fill in the password.

return [
    'host' => 'mail.dhesu.com',
    'port' => 465,
    'username' => 'noreply@dhesu.com',
    'password' => 'CHANGE_ME',
    'from' => 'noreply@dhesu.com',
    'from_name' => 'Dhesu Website',
    'to' => ['info@travel.dhesu.com', 'tours@travel.dhesu.com'],
    'cc' => ['seo@daikimedia.com'],
    'allowed_origins' => ['https://dhesu.com'],
];

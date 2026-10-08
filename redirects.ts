// Not applied by `output: "export"` — only `next dev` and a real Next server.
// On the static host the same redirects live in public/.htaccess (RewriteRule
// lines under "Legacy URLs"); add new entries in both places.

export interface Redirect {
  source: string;
  destination: string;
  permanent: boolean;
}

export const REDIRECTS: Redirect[] = [
  { source: "/contact", destination: "/contact-us", permanent: true },
];

// Trailing slash on the destination keeps it to one hop under trailingSlash.
export function toNextRedirects(): Redirect[] {
  return REDIRECTS.map(({ source, destination, permanent }) => ({
    source,
    destination: `${destination}/`,
    permanent,
  }));
}

export default REDIRECTS;

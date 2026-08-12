/**
 * Canonical origin for the site.
 *
 * dhesu.com is the production domain; other hosts (e.g. the dhesuholidays.com
 * preview) intentionally serve canonical tags pointing back here so search
 * engines consolidate on one domain. Everything that emits an absolute URL —
 * `metadataBase`, sitemap.xml, robots.txt and the JSON-LD — reads this constant,
 * so moving domains is a one-line change instead of a hunt through three files.
 */
export const SITE_URL = "https://dhesu.com";

/** Absolute URL for a site-relative path, matching the trailingSlash: true build. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}`;
  if (clean === "/") return `${SITE_URL}/`;
  // Files (e.g. /images/x.jpg) keep their extension; routes get a trailing slash.
  return `${SITE_URL}${clean}${/\.[a-z0-9]+$/i.test(clean) ? "" : "/"}`;
}

/**
 * Custom `next/image` loader for the static export.
 *
 * `output: "export"` disables the built-in optimizer, so instead of shipping the
 * multi-megabyte originals we point every request at the WebP variants written
 * by `scripts/optimize-images.mjs`. Widths must match WIDTH_LADDER in that
 * script (and `images.deviceSizes` / `images.imageSizes` in next.config.ts).
 */
const WIDTHS = [256, 384, 640, 828, 1200, 1920];

/** Formats we do not re-encode — served straight from `public/`. */
const PASS_THROUGH = /\.(svg|gif|ico|webp|avif)$/i;

type LoaderArgs = { src: string; width: number; quality?: number };

export default function imageLoader({ src, width, quality }: LoaderArgs): string {
  // Remote images keep using their own CDN transform.
  if (/^https?:\/\//.test(src)) {
    const url = new URL(src);
    if (url.hostname.endsWith("unsplash.com")) {
      url.searchParams.set("w", String(width));
      url.searchParams.set("q", String(quality ?? 72));
      url.searchParams.set("fm", "webp");
      url.searchParams.set("auto", "format");
    }
    return url.toString();
  }

  if (PASS_THROUGH.test(src)) return src;

  // Snap to the smallest generated rung that still covers the request.
  const rung = WIDTHS.find((w) => w >= width) ?? WIDTHS[WIDTHS.length - 1];
  const stem = src.replace(/^\//, "").replace(/\.[^./]+$/, "");
  return `/_img/${stem}/${rung}.webp`;
}

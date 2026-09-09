/**
 * Points the <img> tags in CMS article HTML at the WebP variants.
 *
 * The CMS stores content images as root-relative paths into this repo's
 * public/images tree (e.g. `/images/blog/<slug>/dry-season-beach-boats.jpg`)
 * and `blogs.content` is injected as-is, so nothing renders them through
 * next/image any more. Two things then go wrong without this pass:
 *
 *   * `scripts/optimize-images.mjs` writes a `_img` twin for every source, and
 *     `scripts/postbuild.mjs` deletes each original whose twin shipped — so the
 *     .jpg the CMS points at is not in the export at all, and 404s;
 *   * even where it survived, the export would serve a multi-megabyte original
 *     rather than the WebP ladder every other image on the site uses.
 *
 * Build-time only, like the rest of the CMS path. Anything that is not a
 * root-relative `/images/...` raster — a remote URL, an SVG, an already
 * optimized `_img` path — is left exactly as the CMS wrote it.
 */
import imageLoader from "@/src/lib/image-loader";

/** Offered to the browser. Every entry must be a rung of WIDTH_LADDER. */
const SRCSET_WIDTHS = [640, 828, 1200, 1920];

/** Used for `src`, which is what a browser without srcset support takes. */
const DEFAULT_WIDTH = 1200;

/**
 * The article column is `max-w-6xl` (1152px) less its `px-6` gutters, so an
 * in-article image is 1104px at most and full-bleed-minus-gutters below that.
 */
const SIZES = "(min-width: 1152px) 1104px, calc(100vw - 3rem)";

/** Attributes only added when the CMS has not already set them. */
function addIfAbsent(attrs: string, name: string, value: string): string {
  return new RegExp(`\s${name}\s*=`, "i").test(attrs) ? "" : ` ${name}="${value}"`;
}

export function optimizeContentImages(html: string): string {
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    const src = tag.match(/\ssrc\s*=\s*"([^"]*)"/i)?.[1];
    if (!src || !src.startsWith("/images/")) return tag;

    const optimized = imageLoader({ src, width: DEFAULT_WIDTH });
    // Pass-through formats (svg, gif, an already-webp source) come back
    // unchanged — there are no generated variants to build a srcset from.
    if (optimized === src) return tag;

    const srcset = SRCSET_WIDTHS.map(
      (width) => `${imageLoader({ src, width })} ${width}w`
    ).join(", ");

    const attrs = tag
      .replace(/^<img\b/i, "")
      .replace(/\/?>$/, "")
      .replace(/\ssrc\s*=\s*"[^"]*"/i, ` src="${optimized}"`);

    return (
      `<img${attrs}` +
      addIfAbsent(attrs, "srcset", srcset) +
      addIfAbsent(attrs, "sizes", SIZES) +
      // next/image lazy-loaded these before the CMS migration; a bare <img>
      // does not, and every one of them sits below the fold.
      addIfAbsent(attrs, "loading", "lazy") +
      addIfAbsent(attrs, "decoding", "async") +
      ">"
    );
  });
}

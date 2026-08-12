import { absoluteUrl } from "@/src/data/site";
import imageLoader from "@/src/lib/image-loader";

/** Fields whose values schema.org expects to be resolvable URLs. */
const URL_FIELDS = new Set(["url", "item", "logo", "image", "sameAs", "@id"]);

/** Width used for images referenced from structured data (og/rich-result size). */
const SCHEMA_IMAGE_WIDTH = 1200;

/**
 * Point image URLs at the generated WebP variants.
 *
 * The original JPEG/PNGs are stripped from the export (scripts/postbuild.mjs),
 * because nothing renders them any more — so a schema `image` of
 * `/images/gallery/12930.jpg` would 404 for the crawler that follows it.
 */
function resolveImage(value: string): string {
  if (!value.startsWith("/images/")) return value;
  return absoluteUrl(imageLoader({ src: value, width: SCHEMA_IMAGE_WIDTH }));
}

/**
 * Rewrite site-relative URLs to absolute ones.
 *
 * JSON-LD has no notion of a document base, so a relative `"item": "/tours/india"`
 * is not resolved — consumers drop it. Much of the tour data was authored with
 * relative paths, so this normalises them at render time rather than requiring
 * every call site to remember.
 */
function absolutize(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(absolutize);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, val]) => [
        key,
        URL_FIELDS.has(key) && typeof val === "string" && val.startsWith("/")
          ? key === "image" || key === "logo"
            ? resolveImage(val)
            : absoluteUrl(val)
          : absolutize(val),
      ])
    );
  }
  return value;
}

/**
 * Renders a schema.org JSON-LD block.
 *
 * Server component by design — the payload is baked into the static HTML so
 * search crawlers and AI agents see it without executing any JavaScript, and it
 * costs nothing on the client.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Escaping `<` guards against a `</script>` sequence inside any string
      // field terminating the block early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(absolutize(data)).replace(/</g, "\\u003c"),
      }}
    />
  );
}

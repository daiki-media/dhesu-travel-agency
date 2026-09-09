/**
 * Build-time client for the Laravel CMS at cms.dhesu.com.
 *
 * The site is a static export, so every one of these calls runs on the build
 * machine during `next build` and never in a browser. That is what makes it
 * safe to read CMS_API_KEY here — it is a build secret, and nothing in this
 * module may be imported from a client component.
 *
 * Failures throw. An unreachable CMS or a bad key must stop the build rather
 * than quietly ship an empty /blog and drop six indexed pages off the site.
 */

/** `next dev`. Never true during `next build`, which runs in production mode. */
const DEV = process.env.NODE_ENV === "development";

const CMS_ORIGIN = "https://cms.dhesu.com";
const API_BASE = `${CMS_ORIGIN}/api`;

export type BlogSummary = {
  id: number;
  title: string;
  slug: string;
  /** Author display name, not the id. */
  author: string;
  /** Category display name, not the id. */
  category: string;
  /** Path relative to the CMS public dir, e.g. "blogs/uluwatu-coastline.jpg". */
  featuredImage: string | null;
  featuredImageAlt: string | null;
  meta_title: string | null;
  meta_description: string | null;
  read_time: number;
  created_at: string;
  updated_at: string;
};

export type BlogPost = BlogSummary & {
  /** The article body as HTML. See src/lib/blog-content.ts for its shape. */
  content: string;
  status: string;
};

/** Absolute URL for a `featuredImage` path as the CMS stores it. */
export function cmsImageUrl(path: string): string {
  return `${CMS_ORIGIN}/${path.replace(/^\/+/, "")}`;
}

/** Stand-in hero for a post published without a featured image. */
export const BLOG_FALLBACK_IMAGE = cmsImageUrl("blogs/content-images/blog-fallback-img.webp");

function apiKey(): string {
  const key = process.env.CMS_API_KEY;
  if (!key) {
    throw new Error(
      "CMS_API_KEY is not set. The blog is built from cms.dhesu.com, so the " +
        "key must be present in the build environment (repository secret " +
        "CMS_API_KEY). Refusing to build a blog with no posts.",
    );
  }
  return key;
}

async function getJson<T>(path: string): Promise<T> {
  const url = `${API_BASE}${path}`;
  // Read the key outside the try: a missing key is a configuration error and
  // should say so, not be reported as an unreachable host.
  const key = apiKey();

  let response: Response;
  try {
    response = await fetch(url, {
      headers: { "X-API-Key": key, Accept: "application/json" },
      // Build: force-cache is required, or an uncached fetch makes every
      // route that reaches this bail out of static generation under
      // output: "export". scripts/clear-cms-cache.mjs drops the entries
      // beforehand so a rebuild cannot serve last build's post list.
      // Dev: nothing is prerendered, so skip the cache and always ask the CMS.
      cache: DEV ? "no-store" : "force-cache",
    });
  } catch (cause) {
    throw new Error(`CMS request failed: ${url} could not be reached.`, { cause });
  }

  if (!response.ok) {
    const hint =
      response.status === 401
        ? " CMS_API_KEY is missing or wrong."
        : response.status === 429
          ? " The API is rate limited to 60 requests/minute per IP."
          : "";
    throw new Error(`CMS request failed: ${url} returned ${response.status}.${hint}`);
  }

  return (await response.json()) as T;
}

function fetchBlogList(): Promise<BlogSummary[]> {
  return getJson<BlogSummary[]>("/blogs").then((posts) => {
    if (!Array.isArray(posts) || posts.length === 0) {
      throw new Error(
        "CMS returned no published blog posts. Refusing to build an empty " +
          "/blog index over the top of live, indexed pages.",
      );
    }
    return posts;
  });
}

// One list fetch per build process, reused by the index, every article page and
// the sitemap. The API allows 60 requests a minute; calling it once per page
// would start eating into that as the post count grows.
let listPromise: Promise<BlogSummary[]> | null = null;

/** Every published post, newest first. Excludes `content`. */
export function getBlogList(): Promise<BlogSummary[]> {
  // The dev server is one long-lived process, so memoizing would pin the list
  // to whatever the CMS held when it started. Refetch instead.
  if (DEV) return fetchBlogList();
  listPromise ??= fetchBlogList();
  return listPromise;
}

/** One post, including its `content` HTML. */
export function getBlogPost(slug: string): Promise<BlogPost> {
  return getJson<BlogPost>(`/blogs/${slug}`);
}

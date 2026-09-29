// Build-time only: reads CMS_API_KEY, so never import this from a client component.

const DEV = process.env.NODE_ENV === "development";

const CMS_ORIGIN = "https://cms.dhesu.com";
const API_BASE = `${CMS_ORIGIN}/api`;

export type BlogSummary = {
  id: number;
  title: string;
  slug: string;
  author: string;
  category: string;
  featuredImage: string | null;
  featuredImageAlt: string | null;
  meta_title: string | null;
  meta_description: string | null;
  read_time: number;
  created_at: string;
  updated_at: string;
};

export type BlogPost = BlogSummary & {
  content: string;
  status: string;
};

export function cmsImageUrl(path: string): string {
  return `${CMS_ORIGIN}/${path.replace(/^\/+/, "")}`;
}

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

const MAX_ATTEMPTS = 5;
const RETRY_DELAY_MS = 2000;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let queue: Promise<unknown> = Promise.resolve();

function getJson<T>(path: string): Promise<T> {
  const result = queue.then(() => request<T>(path));
  queue = result.catch(() => undefined);
  return result;
}

async function request<T>(path: string): Promise<T> {
  const url = `${API_BASE}${path}`;
  const key = apiKey();

  let response: Response;
  for (let attempt = 1; ; attempt++) {
    try {
      response = await fetch(url, {
        headers: {
          "X-API-Key": key,
          Accept: "application/json",
          // Changes the request so React's fetch memo can't replay the failure.
          ...(attempt > 1 ? { "X-Attempt": String(attempt) } : {}),
        },
        // force-cache is required for static export.
        cache: DEV ? "no-store" : "force-cache",
      });
    } catch (cause) {
      if (attempt < MAX_ATTEMPTS) {
        await sleep(RETRY_DELAY_MS * attempt);
        continue;
      }
      throw new Error(`CMS request failed: ${url} could not be reached.`, { cause });
    }

    const transient = response.status >= 500 || response.status === 429;
    if (!transient || attempt >= MAX_ATTEMPTS) break;
    await sleep(RETRY_DELAY_MS * attempt);
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

let listPromise: Promise<BlogSummary[]> | null = null;

export function getBlogList(): Promise<BlogSummary[]> {
  if (DEV) return fetchBlogList();
  listPromise ??= fetchBlogList();
  return listPromise;
}

export function getBlogPost(slug: string): Promise<BlogPost> {
  return getJson<BlogPost>(`/blogs/${slug}`);
}

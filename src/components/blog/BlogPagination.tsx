import Link from "next/link";

export function pageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

function pageNumbers(page: number, totalPages: number): (number | "gap")[] {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

  const window = new Set([1, totalPages, page, page - 1, page + 1]);
  const out: (number | "gap")[] = [];
  let previous = 0;
  for (let n = 1; n <= totalPages; n++) {
    if (!window.has(n)) continue;
    if (previous && n - previous > 1) out.push("gap");
    out.push(n);
    previous = n;
  }
  return out;
}

const base =
  "inline-flex h-10 min-w-10 items-center justify-center rounded-full px-4 text-sm font-semibold transition-colors";

export default function BlogPagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Blog pagination" className="mt-12 flex justify-center">
      <ul className="flex flex-wrap items-center gap-2">
        <li>
          {page > 1 ? (
            <Link
              href={pageHref(page - 1)}
              rel="prev"
              className={`${base} border border-gray-200 text-teal-navy hover:border-primary hover:text-primary-dark`}
            >
              ← Previous
            </Link>
          ) : (
            <span className={`${base} border border-gray-100 text-gray-300`}>← Previous</span>
          )}
        </li>

        {pageNumbers(page, totalPages).map((entry, i) =>
          entry === "gap" ? (
            <li key={`gap-${i}`} className="px-1 text-gray-400">
              …
            </li>
          ) : (
            <li key={entry}>
              {entry === page ? (
                <span aria-current="page" className={`${base} bg-primary text-white`}>
                  {entry}
                </span>
              ) : (
                <Link
                  href={pageHref(entry)}
                  className={`${base} border border-gray-200 text-teal-navy hover:border-primary hover:text-primary-dark`}
                >
                  {entry}
                </Link>
              )}
            </li>
          ),
        )}

        <li>
          {page < totalPages ? (
            <Link
              href={pageHref(page + 1)}
              rel="next"
              className={`${base} border border-gray-200 text-teal-navy hover:border-primary hover:text-primary-dark`}
            >
              Next →
            </Link>
          ) : (
            <span className={`${base} border border-gray-100 text-gray-300`}>Next →</span>
          )}
        </li>
      </ul>
    </nav>
  );
}

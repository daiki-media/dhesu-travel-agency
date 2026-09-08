export interface BlogTableProps {
  headers: string[];
  rows: React.ReactNode[][];
  caption?: string;
  labelColumn?: number;
}

const CELL =
  "block px-5 py-3.5 align-top text-[15px] leading-relaxed " +
  "before:mb-1 before:block before:font-primary before:text-[11px] before:font-semibold before:uppercase before:tracking-[0.14em] before:text-primary before:content-[attr(data-label)] " +
  "md:table-cell md:border-t md:border-gray-100 md:px-6 md:py-4 md:text-[14.5px] md:before:hidden";

const CELL_LABEL =
  "border-b border-gray-100 bg-gray-50/70 font-semibold text-teal-navy md:border-b-0 md:bg-transparent";

export default function BlogTable({
  headers,
  rows,
  caption,
  labelColumn = 0,
}: BlogTableProps) {
  return (
    <figure className="my-1">
      <table className="block w-full border-collapse text-left md:table md:overflow-hidden md:rounded-2xl md:border md:border-gray-200">
        <thead className="hidden md:table-header-group">
          <tr className="bg-teal-navy">
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-6 py-4 font-primary text-xs font-semibold uppercase tracking-[0.12em] text-white"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="block space-y-4 md:table-row-group md:space-y-0">
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`block overflow-hidden rounded-2xl border border-gray-200 bg-white md:table-row md:rounded-none md:border-0 md:transition-colors md:hover:bg-teal-light/30 ${
                i % 2 === 1 ? "md:bg-gray-50/60" : "md:bg-white"
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  // Read on mobile by ::before; ignored once the table is a table.
                  data-label={headers[j]}
                  className={[CELL, j === labelColumn ? CELL_LABEL : "text-gray-600"].join(
                    " ",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {caption && (
        <figcaption className="mt-3 text-xs leading-relaxed text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

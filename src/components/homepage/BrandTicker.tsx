import { company } from "@/src/data/company";

// The sheet lists "industry credentials (IATA, PATA, MATTA)" as the first thing
// to check in a travel agency, so the ticker carries Dhesu's real
// accreditations from src/data/company.ts instead of decorative badges.
const badges = [
  ...company.accreditations.map((a) => ({ main: a.abbr, sub: a.name })),
  { main: "Since 1988", sub: "30+ years of holidays for Malaysian travellers" },
  { main: "Ready-Made & Customized", sub: "Set itineraries or fully tailored trips" },
];

function Badge({ main, sub }: { main: string; sub: string }) {
  return (
    <div className="flex items-center justify-center mx-6 shrink-0 w-56 h-24 text-primary-dark select-none">
      <div className="text-center border border-primary/30 rounded px-4 py-3 w-full">
        <p className="font-primary text-lg font-black tracking-wide leading-none">{main}</p>
        <p className="text-[10px] tracking-wide opacity-80 mt-1.5 leading-snug whitespace-normal">
          {sub}
        </p>
      </div>
    </div>
  );
}

export default function BrandTicker() {
  const doubled = [...badges, ...badges];

  return (
    <section
      className="py-10 bg-white border-y border-gray-100 overflow-hidden"
      aria-label="Accreditations"
    >
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((b, i) => (
            <Badge key={i} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}

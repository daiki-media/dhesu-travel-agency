"use client";

const brands = [
  {
    top: "OUTDOOR ADVENTURE",
    main: "Wanderlust",
    sub: "Travel is to discover",
    bottom: "EXPLORE THE ELEMENT",
    type: "script",
  },
  {
    top: "• OUTDOOR ADVENTURE •",
    main: "MOUNTAIN",
    sub: "• EXTREME CLIMBING •",
    bottom: "",
    type: "badge",
  },
  {
    top: "OUTDOOR ADVENTURE",
    main: "JEFFERSON",
    sub: "THE GREATE OUTDOOR",
    bottom: "BLUELAKE — MOUNT KILIMANJARO —",
    type: "tall",
  },
  {
    top: "TAKE RISK ENJOY IT",
    main: "LIFE\nIS AN",
    sub: "Adventure",
    bottom: "IN FORGIVENESS",
    type: "adventure",
  },
  {
    top: "• OUTDOOR ADVENTURE •",
    main: "MOUNTAIN",
    sub: "• EXTREME CLIMBING •",
    bottom: "",
    type: "badge",
  },
  {
    top: "TAKE RISK ENJOY IT",
    main: "LIFE\nIS AN",
    sub: "Adventure",
    bottom: "IN FORGIVENESS",
    type: "adventure",
  },
  {
    top: "OUTDOOR ADVENTURE",
    main: "Wanderlust",
    sub: "Travel is to discover",
    bottom: "EXPLORE THE ELEMENT",
    type: "script",
  },
  {
    top: "• OUTDOOR ADVENTURE •",
    main: "EXPLORE",
    sub: "Greater Atlas",
    bottom: "",
    type: "explore",
  },
];

function BrandCard({ brand }: { brand: (typeof brands)[0] }) {
  return (
    <div className="flex items-center justify-center mx-8 shrink-0 w-44 h-28 text-primary select-none">
      {brand.type === "script" && (
        <div className="text-center border border-primary/30 rounded px-3 py-2 w-full">
          <p className="text-[7px] tracking-[3px] uppercase opacity-70">{brand.top}</p>
          <div className="flex items-center gap-1 my-0.5 justify-center">
            <span className="text-[7px] tracking-wider opacity-50">✕</span>
            <span className="text-[8px] tracking-[2px] uppercase opacity-60">TRADE MARK</span>
            <span className="text-[7px] tracking-wider opacity-50">✕</span>
          </div>
          <p className="font-dancing text-2xl font-bold leading-none">{brand.main}</p>
          <p className="text-[8px] italic tracking-wide opacity-80 mt-0.5">{brand.sub}</p>
          <p className="text-[6px] tracking-[2px] uppercase opacity-50 mt-1">{brand.bottom}</p>
        </div>
      )}
      {(brand.type === "badge" || brand.type === "explore") && (
        <div className="text-center">
          <p className="text-[7px] tracking-[2px] uppercase opacity-60 mb-1">{brand.top}</p>
          <div className="relative flex items-center justify-center">
            {/* Mountain SVG */}
            <svg width="52" height="38" viewBox="0 0 52 38" fill="none" className="text-primary">
              <path d="M8 36 L26 6 L44 36 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12" />
              <path d="M0 36 L18 10 L36 36 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
              <path d="M22 16 L26 10 L30 16" stroke="currentColor" strokeWidth="1" fill="currentColor" />
            </svg>
          </div>
          <p className="text-base font-black tracking-[3px] leading-none mt-1">
            {brand.main}
          </p>
          <p className="text-[7px] tracking-[2px] opacity-60 mt-1">{brand.sub}</p>
        </div>
      )}
      {brand.type === "tall" && (
        <div className="text-center">
          <p className="text-[6px] tracking-[2px] uppercase opacity-60">{brand.top}</p>
          <p className="text-xl font-black tracking-[3px] leading-none mt-1">{brand.main}</p>
          <p className="font-dancing text-lg leading-none">{brand.sub}</p>
          <p className="text-[6px] tracking-[1px] opacity-50 mt-0.5">{brand.bottom}</p>
        </div>
      )}
      {brand.type === "adventure" && (
        <div className="text-center">
          <p className="text-[7px] tracking-[2px] uppercase opacity-60">{brand.top}</p>
          <p className="text-xs font-black tracking-[4px] mt-1">
            {brand.main.split("\n").map((l, i) => (
              <span key={i} className="block">{l}</span>
            ))}
          </p>
          <p className="font-dancing text-2xl font-bold leading-none mt-0.5">{brand.sub}</p>
          <p className="text-[6px] tracking-[2px] opacity-50 mt-1">{brand.bottom}</p>
        </div>
      )}
    </div>
  );
}

export default function BrandTicker() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((brand, i) => (
            <BrandCard key={i} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}

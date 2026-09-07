import { Compass, BadgeDollarSign, LifeBuoy, Clock, MapPin } from "lucide-react";
import { company } from "@/src/data/company";

// The parts of the Holiday Idea homepage sheet that argue for booking with an
// agency: the "what travellers want" table, the 30+ years and philosophy
// passages, the "what to look for" checklist and the 2026 booking note. Copy
// is verbatim; only the layout is the homepage's.

const iconClass = "text-white";
const whyAgency = [
  {
    icon: <Compass size={22} className={iconClass} />,
    want: "Confidence in an unfamiliar destination",
    how: "Curated itineraries built from decades of on-ground experience, not guesswork",
  },
  {
    icon: <BadgeDollarSign size={22} className={iconClass} />,
    want: "Value for money",
    how: "Negotiated group rates and package pricing that's often difficult to replicate booking piece by piece",
  },
  {
    icon: <LifeBuoy size={22} className={iconClass} />,
    want: "Support when plans change",
    how: "A real person to call if a flight is delayed or an itinerary needs adjusting",
  },
  {
    icon: <Clock size={22} className={iconClass} />,
    want: "Time saved",
    how: "A ready-made itinerary instead of dozens of hours comparing hotels, transport, and activities individually",
  },
  {
    icon: <MapPin size={22} className={iconClass} />,
    want: "Local, on-ground knowledge",
    how: "Insight into which experiences are genuinely worth including and which are overrated",
  },
];

const whatToCheck = [
  {
    check: "Industry credentials (IATA, PATA, MATTA)",
    why: "Confirms the agency operates under recognised industry standards and accountability",
  },
  {
    check: "Years in operation",
    why: "A longer track record generally signals consistent, reliable service through changing market conditions",
  },
  {
    check: "Transparency in pricing",
    why: "Clear, itemised quotes without hidden fees reflect a trustworthy booking process",
  },
  {
    check: "Range of destination expertise",
    why: "Broad coverage suggests genuine on-ground relationships, not just resold third-party packages",
  },
  {
    check: "Physical office and contact channels",
    why: "A real, reachable presence adds accountability beyond a purely online storefront",
  },
];

export default function WhyChooseDhesu() {
  return (
    <section id="why-choose-dhesu" className="py-12 lg:py-16 bg-pattern scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12" data-reveal>
          <p className="font-secondary text-primary-dark text-2xl md:text-3xl mb-2">
            Why Book With Dhesu
          </p>
          <h2 className="font-primary text-4xl md:text-5xl font-bold text-teal-navy mb-4 max-w-4xl mx-auto leading-tight">
            Why Malaysian Travellers Still Choose a Travel Agency in 2026
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[15px] md:text-base leading-relaxed">
            Booking flights and hotels online has never been easier, yet thousands of
            Malaysians still choose to book their holidays through an established travel
            agency every year. The reasons tend to be consistent, whichever destination
            they&apos;re headed to.
          </p>
        </div>

        {/* What travellers want / how an agency delivers it */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {whyAgency.map((row, i) => (
            <div
              key={row.want}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              data-reveal
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <div className="w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300 mb-5">
                {row.icon}
              </div>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.18em] font-semibold mb-1.5">
                What travellers want
              </p>
              <h3 className="font-primary font-bold text-teal-navy text-base leading-snug mb-3">
                {row.want}
              </h3>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.18em] font-semibold mb-1.5">
                How an agency delivers it
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">{row.how}</p>
            </div>
          ))}
        </div>

        {/* Experience, value and trust, philosophy */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8" data-reveal="left">
            <div>
              <h3 className="font-primary font-bold text-teal-navy text-2xl leading-snug mb-3">
                30+ Years of Experience, Built One Trip at a Time
              </h3>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                {company.tradingName} has been offering travel and tours for individuals and
                families (including a minimum of two persons) since {company.foundedYear}.
                Daily there are possibilities of travelling to many places on various holidays
                like cultural tours, beach holiday, honeymoon tour, pilgrimage and adventure
                tour. This is not just any other firm which recently started giving travel
                services, but it has earned its entire reputation through travel and tour
                business.
              </p>
            </div>
            <div>
              <h3 className="font-primary font-bold text-teal-navy text-2xl leading-snug mb-3">
                A Philosophy Built Around Value and Trust
              </h3>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                Consistency in the approach has been one of the hallmarks of the agency all
                along &ndash; the best selection of travel services available at truly
                competitive prices with accountability attached. In an industry in which
                budget-only OTAs and unlicensed travel agencies have increasingly begun to
                dominate, this combination of proven credentials, experience on the ground,
                and price clarity is the reason travelers keep coming back.
              </p>
            </div>
          </div>

          <aside
            className="lg:col-span-5 bg-teal-navy text-white rounded-2xl p-8 lg:p-10"
            data-reveal="right"
          >
            <p className="text-white/60 text-xs uppercase tracking-[0.18em] font-semibold mb-4">
              Our philosophy
            </p>
            <p className="font-secondary text-3xl md:text-4xl leading-snug mb-6">
              &ldquo;{company.philosophy}&rdquo;
            </p>
            <p className="text-white/70 text-sm">
              Since {company.foundedYear} &middot;{" "}
              {company.accreditations
                .slice(0, 3)
                .map((a) => a.abbr)
                .join(" · ")}
            </p>
          </aside>
        </div>

        {/* What to look for when comparing agencies */}
        <div className="mt-16">
          <div className="max-w-3xl mb-10" data-reveal>
            <h3 className="font-primary font-bold text-teal-navy text-2xl md:text-3xl leading-snug mb-3">
              What to Look For When Comparing Travel Agencies
            </h3>
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              Not all travel agencies offer the same level of service, and it&apos;s worth
              knowing what to check before committing to one, regardless of who you
              ultimately book with.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8">
            {whatToCheck.map((row, i) => (
              <li
                key={row.check}
                className="border-t-2 border-primary/30 pt-5"
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <span className="font-primary font-bold text-primary text-sm tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-primary font-bold text-teal-navy text-base mt-2 mb-2 leading-snug">
                  {row.check}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{row.why}</p>
              </li>
            ))}
          </ol>

          <div
            className="mt-12 bg-white rounded-2xl p-6 md:p-8 border-l-4 border-primary max-w-4xl"
            data-reveal
          >
            <p className="font-primary font-semibold text-teal-navy text-lg mb-2">
              A Note on Booking Confidence in 2026
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              As a result of continued strong demand for travel in South East Asia and even
              internationally, there may be times when popular travel locations and travel
              windows are booked even farther ahead than travelers anticipate. Booking through a
              reputable agency provides access to up-to-date information and connections that
              may be the determining factor in booking your ideal travel schedule rather than
              having to settle for less than ideal travel plans. This is especially important
              during periods of high demand, such as school holidays and major festivals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

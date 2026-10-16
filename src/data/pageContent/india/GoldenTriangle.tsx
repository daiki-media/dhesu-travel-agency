"use client";

import Link from "next/link";
import CtaSection from "@/src/components/CtaSection";
import { Bullet, DataTable, INLINE_LINK, Section } from "@/src/data/guides/primitives";

const BODY = "text-gray-600 text-[15px] leading-relaxed";
const H3 = "font-primary font-bold text-[#1a1a1a] text-xl mt-12 mb-5";

const packages: [string, string, string, string, string][] = [
  ["5 Days Delhi Agra Jaipur + Taj Mahal", "/tours/india/north-india/5-day-golden-triangle/", "5D4N", "RM1,388", "First-timers, short on leave"],
  ["5 Days Golden Triangle (Muslim Friendly)", "/tours/india/north-india/5-day-golden-triangle-muslim/", "5D4N", "RM1,388", "Halal meals included"],
  ["7 Days Golden Triangle + Amritsar Golden Temple", "/tours/india/north-india/7-day-golden-triangle-amritsar/", "7D6N", "RM1,888", "Best seller, adds Punjab"],
  ["7 Days Golden Triangle Comfort", "/tours/india/north-india/7-day-golden-triangle-comfort/", "7D6N", "RM2,388", "2 nights in each city"],
  ["9 Days Golden Triangle + Shimla", "/tours/india/north-india/9-day-golden-triangle-shimla/", "9D8N", "RM2,598", "Hill resort and toy train"],
  ["10 Days Golden Triangle + Manali", "/tours/india/north-india/10-day-golden-triangle-manali/", "10D9N", "RM2,988", "Himalayas after the cities"],
  ["8 Days Golden Triangle + Kashmir", "/tours/india/north-india/8-day-golden-triangle-kashmir/", "8D7N", "RM3,688", "Houseboat and Gulmarg"],
  ["9 Days Golden Triangle + Best of Kashmir", "/tours/india/north-india/9-day-golden-triangle-best-kashmir/", "9D8N", "RM3,998", "Premium, full Kashmir"],
];

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className={INLINE_LINK}>
    {children}
  </Link>
);

export function GoldenTriangleBody() {
  return (
    <>
      <div className="space-y-5">
        <p className={BODY}>
          Dhesu has been arranging this circuit for Malaysian travellers since 1988. Every package is a
          100% private tour, with English-speaking guides, hotel stays, return airport transfers and
          routes planned around Delhi’s traffic. We are a licensed Malaysian agency (KKKP 1439),
          registered with MATTA and IATA, so you deal with a real team in Kuala Lumpur rather than an
          online middleman.
        </p>
        <p className="font-primary font-bold text-teal-navy text-[15px]">
          From RM1,388 per person (twin sharing) | 5 to 10 days | Private tour | Daily departures
        </p>
      </div>

      <Section label="Packages" heading="Golden Triangle Packages at a Glance">
        <DataTable
          headers={["Package", "Duration", "From (per person)", "Best for"]}
          rows={packages.map(([name, href, duration, price, bestFor]) => [
            <L key={href} href={href}>
              {name}
            </L>,
            duration,
            price,
            bestFor,
          ])}
        />
      </Section>

      <Section label="Choose" heading="Which Golden Triangle Itinerary Suits You?">
        <div className="space-y-5">
          <p className={BODY}>
            <strong>If you have a long weekend plus a few days of leave,</strong> the{" "}
            <L href="/tours/india/north-india/5-day-golden-triangle/">
              5 day Delhi Agra Jaipur package with a Taj Mahal sunrise
            </L>{" "}
            covers Old and New Delhi, the Taj Mahal and Amber Fort in Jaipur, with an English-speaking
            guide throughout. Muslim travellers can take the same route on the{" "}
            <L href="/tours/india/north-india/5-day-golden-triangle-muslim/">
              5 day Golden Triangle with halal meals included
            </L>
            . Our wider{" "}
            <L href="/muslim-friendly-holiday-travel-guide/">Muslim-friendly holiday guide</L> explains
            how we plan prayer-friendly itineraries.
          </p>
          <p className={BODY}>
            <strong>If you want a slower pace,</strong> the{" "}
            <L href="/tours/india/north-india/7-day-golden-triangle-comfort/">
              7 day comfort Golden Triangle with two nights in each city
            </L>{" "}
            leaves time for the Taj Mahal sunrise without early-morning rushing between cities. The{" "}
            <L href="/tours/india/north-india/7-day-golden-triangle-amritsar/">
              7 day tour that adds the Golden Temple in Amritsar
            </L>{" "}
            is our best seller for travellers who want a spiritual stop alongside the monuments.
          </p>
          <p className={BODY}>
            <strong>If you want cities and mountains in one trip,</strong> the{" "}
            <L href="/tours/india/north-india/9-day-golden-triangle-shimla/">
              9 day Golden Triangle with a Shimla hill resort and toy train ride
            </L>{" "}
            and the{" "}
            <L href="/tours/india/north-india/10-day-golden-triangle-manali/">
              10 day Golden Triangle with Manali and Rohtang Pass
            </L>{" "}
            add the Himalayan foothills. If you would rather spend more time in the hills alone, our{" "}
            <L href="/tours/india/north-india/9-day-shimla-manali/">9 day Shimla and Manali tour</L>{" "}
            covers Himachal in depth.
          </p>
          <p className={BODY}>
            <strong>If Kashmir is on your list,</strong> the{" "}
            <L href="/tours/india/north-india/8-day-golden-triangle-kashmir/">
              8 day Golden Triangle with a Dal Lake houseboat and Gulmarg cable car
            </L>{" "}
            and the{" "}
            <L href="/tours/india/north-india/9-day-golden-triangle-best-kashmir/">
              9 day extended Kashmir version
            </L>{" "}
            are the options. Our{" "}
            <L href="/blog/kashmir-trip-cost-from-malaysia/">Kashmir trip cost guide for Malaysians</L>{" "}
            breaks down what to budget.
          </p>
        </div>

        <h3 className={H3}>What Makes the Golden Triangle Different</h3>
        <ul className="space-y-4">
          <Bullet>
            <strong>The Taj Mahal at two moments:</strong> sunrise brings soft light and thinner crowds.
            For a sunset view, Mehtab Bagh on the opposite bank of the Yamuna frames the Taj across the
            water. The Taj is closed on Fridays, so plan your Agra day around that.
          </Bullet>
          <Bullet>
            <strong>Inlay work in marble:</strong> Agra’s craftsmen still set semi-precious stones into
            marble using the same technique as the Taj Mahal. Ask your guide about a workshop visit.
          </Bullet>
          <Bullet>
            <strong>Agra Fort and the Baby Taj:</strong> Agra Fort is a UNESCO site, and the
            Itmad-ud-Daulah tomb is often called the Baby Taj. Both sit within easy reach of the main
            monument.
          </Bullet>
          <Bullet>
            <strong>Fatehpur Sikri:</strong> this abandoned Mughal capital lies between Agra and Jaipur
            and makes a good stop on the drive.
          </Bullet>
          <Bullet>
            <strong>Old Delhi:</strong> Jama Masjid, the lanes of Chandni Chowk and its street food. New
            Delhi adds Humayun’s Tomb, Qutub Minar and India Gate.
          </Bullet>
          <Bullet>
            <strong>The Pink City:</strong> Jaipur was painted pink in the 1870s to welcome a royal
            visitor. Amber Fort, the City Palace, Hawa Mahal, Jantar Mantar and Jal Mahal are the
            highlights.
          </Bullet>
          <Bullet>
            <strong>Jaipur shopping:</strong> block-print textiles, blue pottery, silver jewellery and
            embroidered leather shoes called juttis.
          </Bullet>
          <Bullet>
            <strong>What to eat:</strong> chaat and butter chicken in Delhi, petha sweets in Agra, and
            dal baati churma in Jaipur.
          </Bullet>
        </ul>

        <h3 className={H3}>Best Time to Visit</h3>
        <DataTable
          minWidth={480}
          headers={["Season", "Months", "What to expect"]}
          rows={[
            ["Cool season", "October to March", "Best sightseeing weather, with cold nights and fog in December and January"],
            ["Hot season", "April to June", "Often above 40°C, so start early and rest at midday"],
            ["Monsoon", "July to September", "Humid with showers, fewer crowds, greener scenery"],
          ]}
        />
        <p className={`${BODY} mt-5`}>
          Two practical notes: winter fog can delay flights and trains, so leave a buffer at the end of
          your trip. Delhi’s air quality is often poor in November, which can affect photos and comfort.
        </p>

        <h3 className={H3}>Planning Tips for Malaysian Travellers</h3>
        <ul className="space-y-4">
          <Bullet>
            <strong>Muslim travellers:</strong> Old Delhi around Jama Masjid has many halal eateries. Our{" "}
            <L href="/muslim-friendly-holiday-travel-guide/">Muslim-friendly holiday travel guide</L>{" "}
            explains how we plan prayer-friendly days.
          </Bullet>
          <Bullet>
            <strong>Dress and temples:</strong> cover shoulders and knees at religious sites, and carry
            socks because you remove shoes.
          </Bullet>
          <Bullet>
            <strong>Early starts:</strong> most itineraries leave early for the sunrise Taj visit, so pack
            light layers.
          </Bullet>
        </ul>
      </Section>

      <Section label="Route" heading="What the Golden Triangle Route Covers">
        <ul className="space-y-4">
          <Bullet>
            <strong>Delhi:</strong> Old Delhi’s lanes and markets, plus the monuments of New Delhi.
          </Bullet>
          <Bullet>
            <strong>Agra:</strong> the Taj Mahal at sunrise, the headline moment of every package.
          </Bullet>
          <Bullet>
            <strong>Jaipur:</strong> Amber Fort, the City Palace and the bazaars of the Pink City.
          </Bullet>
        </ul>
        <p className={`${BODY} mt-5`}>
          Longer packages add Amritsar, Shimla, Manali or Kashmir after the three core cities.
        </p>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Section label="Inclusions" heading="What’s Included">
          <ul className="space-y-4">
            <Bullet>Hotel accommodation for the full stay</Bullet>
            <Bullet>Daily breakfast</Bullet>
            <Bullet>Private vehicle with English-speaking driver guide</Bullet>
            <Bullet>Return airport transfers</Bullet>
            <Bullet>Taj Mahal sunrise and Amber Fort sightseeing (as listed per package)</Bullet>
          </ul>
        </Section>
        <Section label="Exclusions" heading="What’s Not Included">
          <ul className="space-y-4">
            <Bullet>International flights</Bullet>
            <Bullet>India visa fee (a 30-day e-Visa applies)</Bullet>
            <Bullet>Travel insurance (ETIQA 6 to 10 days: RM60)</Bullet>
            <Bullet>Entrance fees, unless stated</Bullet>
            <Bullet>Lunches and dinners, unless stated</Bullet>
            <Bullet>Personal expenses and optional tour tips</Bullet>
          </ul>
        </Section>
      </div>

      <Section label="Pricing" heading="Hotel Options and Group Pricing">
        <p className={BODY}>
          Hotel tiers run from 3-star to 5-star, and the per-person price drops as the group grows,
          because the vehicle cost is shared. Families and groups of 4 or 8 adults usually pay less per
          person than a couple. Share your dates and group size through our{" "}
          <L href="/custom-itinerary-request/">custom itinerary request</L> for a tailored quote, or
          check <L href="/promotions/">current promotions</L> for live offers. For school break and
          December trips, the{" "}
          <L href="/year-end-holiday-travel-deals-2026/">year-end holiday deals page</L> and{" "}
          <L href="/school-holiday-travel-deals-2026/">school holiday travel deals</L> list the busiest
          windows. Book early for these.
        </p>
      </Section>

      <Section label="Why Dhesu" heading="Why Book Your Golden Triangle Tour with Dhesu">
        <ul className="space-y-4">
          <Bullet>
            <strong>Licensed and accredited:</strong> KKKP 1439, MATTA, IATA and PATA, operating since
            1988. You can read <L href="/about-us/">more about our history and credentials</L>, or see{" "}
            <L href="/why-book-with-a-travel-agent-2026/">
              why Malaysians still book through a travel agent
            </L>
            .
          </Bullet>
          <Bullet>
            <strong>100% private tours:</strong> your own vehicle and guide on your dates, with no group
            to wait for.
          </Bullet>
          <Bullet>
            <strong>Visa guidance:</strong> we walk you through the India e-Visa documents with every
            booking.
          </Bullet>
          <Bullet>
            <strong>A real team to call:</strong> if a flight is delayed, your guide waits. If plans
            change, we adapt on the ground.
          </Bullet>
        </ul>
      </Section>
    </>
  );
}

export function GoldenTriangleClosing() {
  return (
    <CtaSection
      heading="Plan Your Golden Triangle Trip"
      body={
        <>
          Tell us your dates and group size for a confirmed quote.
          <span className="block mt-6 text-base italic text-white/60">
            Looking beyond the Golden Triangle? Browse{" "}
            <Link href="/tours/india/all-packages/" className="underline underline-offset-4 hover:text-white">
              all India tour packages from Malaysia
            </Link>
            , including{" "}
            <Link href="/tours/india/kerala/" className="underline underline-offset-4 hover:text-white">
              Kerala
            </Link>{" "}
            and{" "}
            <Link href="/tours/india/varanasi/" className="underline underline-offset-4 hover:text-white">
              Varanasi
            </Link>
            .
          </span>
        </>
      }
      actions={[
        { label: "Get a free quote", href: "/contact-us/#free-quote" },
        { label: "WhatsApp us on +6019 336 4465", href: "https://wa.me/60193364465" },
      ]}
      image="/images/gallery/16336.jpg"
    />
  );
}

"use client";

import { whatsappHref, whatsappDisplay } from "@/src/lib/whatsapp";
import Link from "next/link";
import CtaSection from "@/src/components/CtaSection";
import { Bullet, DataTable, INLINE_LINK, Section } from "@/src/data/guides/primitives";

const BODY = "text-gray-600 text-[15px] leading-relaxed";

const H3 = "font-primary font-bold text-[#1a1a1a] text-xl mt-12 mb-5";

const SKI_CABLE_CAR = "/tours/india/kashmir/5-day-ski-resort-cable-car/";
const SKI_TAJ_MAHAL = "/tours/india/kashmir/5-day-ski-taj-mahal/";

// DHE-04 price table, row for row: name, package page, days, from, hotel tier,
// includes. The copy's link cells are placeholders, so a row links only where a
// package page with the same package exists; rows 2, 5, 6 and 7 have none yet.
const packages: [string, string | null, string, string, string, string][] = [
  ["1. 4D Kashmir Super Saver", "/tours/india/kashmir/4-day-super-saver/", "4D / 3N", "From RM1,088", "Standard 3-Star / Deluxe Houseboat", "2N Srinagar hotel, 1N Dal Lake houseboat, daily breakfast & dinner, Shikara ride, private AC vehicle & driver"],
  ["2. 5D Kashmir Valley & Gulmarg Snow", null, "5D / 4N", "From RM1,388", "3-Star / 4-Star & Deluxe Houseboat", "Srinagar, Gulmarg & Pahalgam day trips, 1N houseboat, daily halal meals, Shikara ride, private transfers"],
  ["3. 5D Kashmir Ski Resort & Cable Car", SKI_CABLE_CAR, "5D / 4N", "From RM1,688", "4-Star Ski Resort & Deluxe Houseboat", "2N Gulmarg resort, 1N Srinagar hotel, 1N houseboat, Gondola Phase 1 ticket, daily meals, private 4x4/heated transfer"],
  ["4. 5D Kashmir Ski & Taj Mahal Combo", SKI_TAJ_MAHAL, "5D / 4N", "From RM1,888", "4-Star Hotels & Deluxe Houseboat", "Srinagar, Gulmarg snow excursion, Agra Taj Mahal guided tour, daily meals, private transfers (excludes domestic flight)"],
  ["5. 6D Classic Kashmir & Sonamarg", null, "6D / 5N", "From RM1,688", "4-Star Hotels & Super Deluxe Houseboat", "Srinagar Mughal Gardens, Gulmarg, Pahalgam, Sonamarg excursion, 1N houseboat, daily meals, private transport"],
  ["6. 7D Kashmir & Golden Triangle", null, "7D / 6N", "From RM2,188", "4-Star Hotels & Deluxe Houseboat", "Srinagar, Gulmarg, Delhi, Agra (Taj Mahal) & Jaipur sightseeing, daily halal meals, private vehicle & guide"],
  ["7. 8D Complete Kashmir & North India", null, "8D / 7N", "From RM2,488", "4-Star Hotels & Super Deluxe Houseboat", "Srinagar, Gulmarg, Pahalgam, Sonamarg + Delhi & Agra, daily meals, Shikara ride, private transfers"],
  ["8. 12D Grand Himalayan Kashmir & Ladakh", "/tours/india/kashmir/12-day-srinagar-leh-road-trip/", "12D / 11N", "From RM3,688", "4-Star / Boutique Hotels & Houseboat", "Extended Kashmir Valley + Leh-Ladakh overland/flight circuit, daily meals, permits, private SUV & guide"],
];

// DHE-12 will supply verified traveller reviews. Until then the list is empty
// and the section renders nothing; the container stays ready for them.
type Testimonial = { name: string; travelled: string; packageName: string; quote: string };
const testimonials: Testimonial[] = [];

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className={INLINE_LINK}>
    {children}
  </Link>
);

export function KashmirBody() {
  return (
    <>
      <div className="space-y-5">
        <p className={BODY}>
          Dhesu has been sending Malaysians to Kashmir since 1988. We work with trusted houseboat
          owners and English-speaking guides who know the valley, and we arrange your airport
          transfers. We are licensed in Malaysia (KKKP 1439) and accredited by IATA, PATA and MATTA.
        </p>
        <p className="font-primary font-bold text-teal-navy text-[15px]">
          From RM1,088 per person | 4 to 12 days | Private tours | 8 packages
        </p>
      </div>

      <Section
        label="Snow Season"
        heading="Kashmir Snow Season Packages: December 2026 to February 2027"
      >
        <div className="space-y-5">
          <p className={BODY}>
            Winter transforms the Kashmir Valley into one of Asia&apos;s premier snow destinations
            for Malaysian travellers, with peak snowfall across Gulmarg, Pahalgam, and Sonamarg
            running from December 2026 through February 2027. Because the Malaysian year-end school
            holidays fall between 5 December and 31 December 2026, early booking is recommended to
            secure heated hotels, Dal Lake cedar houseboats, and peak-date land transport.
          </p>
          <p className={BODY}>
            In Gulmarg, visitors can ride the Gulmarg Gondola (Phase 1 to Kongdoori and Phase 2 to
            Apharwat Peak, weather permitting) for panoramic Himalayan snow views, beginner ski
            lessons, snowboarding, and snow sledging.
          </p>
        </div>
        <h3 className={H3}>Featured Snow Season Itineraries</h3>
        <ul className="space-y-4">
          <Bullet>
            <strong>
              <L href={SKI_CABLE_CAR}>5D Kashmir Ski Resort &amp; Gulmarg Cable Car Package</L>
            </strong>
            : Focused on Srinagar houseboat stays, two nights in Gulmarg with Gondola ride
            inclusions, and private heated transport.
          </Bullet>
          <Bullet>
            <strong>
              <L href={SKI_TAJ_MAHAL}>5D Kashmir Ski &amp; Taj Mahal Combo Package</L>
            </strong>
            : Pairs Gulmarg snow activities and Srinagar sightseeing with a private Agra excursion to
            visit the Taj Mahal.
          </Bullet>
        </ul>
        <h3 className={H3}>What to Pack for Kashmir Winter (December–February)</h3>
        <p className={`${BODY} mb-5`}>
          Daytime temperatures range from 2°C to 8°C and drop below freezing at night (-2°C to -8°C
          in Gulmarg):
        </p>
        <ul className="space-y-4">
          <Bullet>Thermal base layers (top and bottom) and fleece mid-layers</Bullet>
          <Bullet>Waterproof windbreaker or down winter jacket</Bullet>
          <Bullet>
            Waterproof snow boots with good grip (snow boots and heavy coats can also be rented
            locally in Tangmarg on the way up to Gulmarg)
          </Bullet>
          <Bullet>
            Woollen beanie, scarf, waterproof gloves, sunglasses (to prevent snow glare), and
            high-SPF sunscreen/lip balm
          </Bullet>
        </ul>
      </Section>

      <Section label="Packages" heading="Kashmir Package Prices from Malaysia">
        <p className={`${BODY} mb-6`}>
          Compare all 8 private Kashmir tour packages from Malaysia below. Rates are
          land-arrangement starting prices per person based on twin sharing (international flights
          from Kuala Lumpur to Srinagar/Delhi excluded unless specified).
        </p>
        <DataTable
          headers={["Package Name", "Days", "From (RM)", "Hotel Tier", "Includes"]}
          rows={packages.map(([name, href, days, price, tier, includes]) => [
            href ? (
              <L key={name} href={href}>
                {name}
              </L>
            ) : (
              name
            ),
            days,
            price,
            tier,
            includes,
          ])}
        />
        {/* The copy's "(confirm exact seasonal surcharges and tier rates with
            client)" is a note to the team, not page text. */}
        <p className={`${BODY} mt-5`}>
          Note: Prices valid for travel until 31 Mar 2027, subject to availability.
        </p>
      </Section>

      {testimonials.length > 0 && (
        <Section label="Reviews" heading="Traveller Testimonials">
          <ul className="space-y-6">
            {testimonials.map((t) => (
              <li key={t.name + t.travelled}>
                <p className={BODY}>&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-2 font-primary font-bold text-teal-navy text-[15px]">
                  {t.name}, {t.travelled}, {t.packageName}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section label="Choose" heading="Which Kashmir Package Suits You?">
        <div className="space-y-5">
          <p className={BODY}>
            <strong>For a first taste on a budget:</strong> the{" "}
            <L href="/tours/india/kashmir/4-day-super-saver/">4 day Super Saver</L> covers a Dal Lake
            houseboat stay, the Mughal gardens and Srinagar sightseeing with an English-speaking guide.
            If you are working out what a full trip costs, our{" "}
            <L href="/blog/kashmir-trip-cost-from-malaysia/">
              Kashmir trip cost breakdown for Malaysians
            </L>{" "}
            shows where the money goes.
          </p>
          <p className={BODY}>
            <strong>For snow and adventure:</strong> the{" "}
            <L href="/tours/india/kashmir/5-day-ski-resort-cable-car/">
              5 day Kashmir ski resort and cable car package
            </L>{" "}
            puts Gulmarg’s gondola, a houseboat night and the saffron fields into five days. If you also
            want the Taj Mahal, the{" "}
            <L href="/tours/india/kashmir/5-day-ski-taj-mahal/">
              5 day Kashmir ski resort and Taj Mahal combination
            </L>{" "}
            adds a stop in Agra.
          </p>
          <p className={BODY}>
            <strong>For shopping and variety:</strong> the{" "}
            <L href="/tours/india/kashmir/5-day-paradise-delhi-shopping/">
              5 day Kashmir and Delhi bazaar shopping package
            </L>{" "}
            pairs the valley with Delhi’s markets. Travellers who want a longer North India loop can
            combine Kashmir with the{" "}
            <L href="/tours/india/golden-triangle/">Delhi Agra Jaipur Golden Triangle</L>.
          </p>
          <p className={BODY}>
            <strong>For a slower, premium trip:</strong> the{" "}
            <L href="/tours/india/kashmir/7-day-exclusive-escape/">7 day Exclusive Kashmir Escape</L> is
            a private tour with a night in Gulmarg and time in the Pahalgam valley. The{" "}
            <L href="/tours/india/kashmir/6-day-best-of-kashmir-taj/">
              6 day Best of Kashmir with a Taj Mahal sunrise
            </L>{" "}
            is a good middle option.
          </p>
          <p className={BODY}>
            <strong>For Kashmir with a spiritual stop:</strong> the{" "}
            <L href="/tours/india/kashmir/7-day-varanasi-kashmir/">7 day Varanasi and Kashmir package</L>{" "}
            includes domestic flights and ends with the Ganga Aarti. You can read more on our{" "}
            <L href="/tours/india/varanasi/">Varanasi tour packages page</L>.
          </p>
          <p className={BODY}>
            <strong>For the road trip of a lifetime:</strong> the{" "}
            <L href="/tours/india/kashmir/12-day-srinagar-leh-road-trip/">
              12 day Srinagar to Leh road trip
            </L>{" "}
            follows the highway over the Himalayan passes to Pangong Lake. Ladakh sits at high altitude,
            so read our{" "}
            <L href="/blog/ladakh-altitude-sickness-guide/">
              guide to avoiding altitude sickness in Ladakh
            </L>{" "}
            before you book.
          </p>
        </div>
      </Section>

      <Section label="Highlights" heading="What Makes Kashmir Different">
        <p className={`${BODY} mb-5`}>
          Kashmir doesn’t feel like the rest of India. Here are the things travellers remember most:
        </p>
        <ul className="space-y-4">
          <Bullet>
            <strong>Dal Lake at dawn:</strong> the lake wakes up early. Vendors paddle shikaras loaded
            with flowers and vegetables through the floating market, and mist sits on the water until
            the sun clears the mountains.
          </Bullet>
          <Bullet>
            <strong>The Mughal gardens:</strong> Shalimar Bagh, Nishat Bagh and Chashme Shahi are laid
            out in terraces above the lake. They are at their best when the chinar trees turn red and
            gold in autumn.
          </Bullet>
          <Bullet>
            <strong>Gulmarg’s gondola:</strong> this is one of the highest cable cars in the world. In
            winter it carries skiers to the upper slopes. In summer it opens up views across the
            meadows.
          </Bullet>
          <Bullet>
            <strong>Saffron country:</strong> the crocus fields flower only briefly, usually from late
            October to mid-November, and the harvest is picked by hand.
          </Bullet>
          <Bullet>
            <strong>Kashmiri food and drink:</strong> try kahwa (green tea with saffron and almonds),
            noon chai (a pink salted tea) and the slow-cooked dishes of the wazwan feast.
          </Bullet>
          <Bullet>
            <strong>Pahalgam’s valleys:</strong> pine forests, the Lidder River and quiet trails make a
            calm contrast to Srinagar.
          </Bullet>
        </ul>
      </Section>

      <Section label="When to Go" heading="Best Time to Visit Kashmir">
        <DataTable
          minWidth={480}
          headers={["Season", "Months", "What to expect"]}
          rows={[
            ["Spring", "March to April", "Tulip blooms in Srinagar, cool days"],
            ["Summer", "May to August", "Green meadows, Gulmarg and Pahalgam at their best"],
            ["Autumn", "September to November", "Golden chinar leaves, saffron bloom"],
            ["Winter", "December to February", "Snow, skiing in Gulmarg, very cold nights"],
          ]}
        />
        <p className={`${BODY} mt-5`}>
          Malaysian school holidays and year-end are popular windows. See the{" "}
          <L href="/school-holiday-travel-deals-2026/">school holiday travel deals</L> and{" "}
          <L href="/year-end-holiday-travel-deals-2026/">year-end holiday deals</L> for the busiest
          dates, and book early.
        </p>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Section label="Inclusions" heading="What’s Included">
          <ul className="space-y-4">
            <Bullet>Hotel or houseboat accommodation as listed per package</Bullet>
            <Bullet>Daily breakfast</Bullet>
            <Bullet>Private vehicle with English-speaking guide</Bullet>
            <Bullet>Airport transfers</Bullet>
            <Bullet>Sightseeing listed in each itinerary</Bullet>
            <Bullet>Domestic flights, on the Varanasi + Kashmir package only</Bullet>
          </ul>
        </Section>
        <Section label="Exclusions" heading="What’s Not Included">
          <ul className="space-y-4">
            <Bullet>International flights (and domestic flights on packages that do not list them)</Bullet>
            <Bullet>India e-Visa fee (a 30-day e-Visa applies)</Bullet>
            <Bullet>Travel insurance (ETIQA 6 to 10 days: RM60)</Bullet>
            <Bullet>Entrance fees, unless stated</Bullet>
            <Bullet>Lunches and dinners, unless stated</Bullet>
            <Bullet>Personal expenses and tips</Bullet>
          </ul>
        </Section>
      </div>

      <Section label="Getting There" heading="Kashmir Trip Package from KL: Flights and Routing">
        <div className="space-y-5">
          <p className={BODY}>
            There is no nonstop flight from Kuala Lumpur to Srinagar, so every Kashmir trip package
            from KL starts with a connection. Most travellers fly to Delhi first, which takes around
            five and a half hours, then take a short domestic hop of about an hour and a half into
            Srinagar. Add the layover and it usually works out to 10 to 14 hours in total, door to
            door. Mumbai and Chennai also work as connecting points, but Delhi is the common choice.
            Air India and IndiGo both cover the whole route themselves.
          </p>
          <p className={BODY}>
            Flights are not part of the package price, apart from the domestic legs on the{" "}
            <L href="/tours/india/kashmir/7-day-varanasi-kashmir/">7 day Varanasi and Kashmir package</L>.
            What the packages do cover starts when you land: airport transfers, a private vehicle and
            an English-speaking guide. Tell the team your travel dates before you book tickets, and
            they can plan day one around your arrival time.
          </p>
        </div>
      </Section>

      <Section label="Tips" heading="Planning Tips for Malaysian Travellers">
        <ul className="space-y-4">
          <Bullet>
            <strong>Muslim travellers:</strong> Kashmir is a Muslim-majority region, and halal food and
            prayer facilities are easy to find. Our{" "}
            <L href="/muslim-friendly-holiday-travel-guide/">Muslim-friendly holiday travel guide</L>{" "}
            explains how we plan these trips.
          </Bullet>
          <Bullet>
            <strong>Couples:</strong> a houseboat night on Dal Lake is a favourite. Our{" "}
            <L href="/honeymoon-holiday-guide-2026/">honeymoon holiday guide</L> shows how we plan
            romantic stays.
          </Bullet>
          <Bullet>
            <strong>Families and groups:</strong> a private vehicle means you set the pace. For larger
            parties, see <L href="/group-incentive-travel-packages/">group travel packages</L>.
          </Bullet>
          <Bullet>
            <strong>Warm clothing:</strong> pack layers in every season. Evenings are cold even in
            summer.
          </Bullet>
        </ul>
      </Section>
    </>
  );
}

export function KashmirClosing() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <Section label="Why Dhesu" heading="Why Book with Dhesu">
              <ul className="space-y-4">
                <Bullet>
                  Licensed and accredited since 1988 (KKKP 1439, IATA, PATA, MATTA). Read{" "}
                  <L href="/about-us/">more about Dhesu Travel</L>.
                </Bullet>
                <Bullet>Private tours, with your own vehicle and guide.</Bullet>
                <Bullet>
                  Visa guidance on every booking. See{" "}
                  <L href="/why-book-with-a-travel-agent-2026/">
                    why Malaysians still book through a travel agent
                  </L>
                  .
                </Bullet>
                <Bullet>
                  Live offers on our <L href="/promotions/">promotions page</L>.
                </Bullet>
              </ul>
            </Section>
          </div>
        </div>
      </section>
      <CtaSection
        heading="Plan Your Kashmir Trip"
        body={
          <>
            Tell us your dates and group size.
            <span className="block mt-6 text-base italic text-white/60">
              Browse{" "}
              <Link href="/tours/india/all-packages/" className="underline underline-offset-4 hover:text-white">
                all India tour packages from Malaysia
              </Link>
              , or explore the{" "}
              <Link
                href="/tours/india/north-india/9-day-shimla-manali/"
                className="underline underline-offset-4 hover:text-white"
              >
                Shimla and Manali mountain tour
              </Link>
              .
            </span>
          </>
        }
        actions={[
          { label: "Request a free quote", href: "/contact-us/" },
          { label: `WhatsApp us on ${whatsappDisplay}`, href: whatsappHref("tours") },
        ]}
        image="/images/gallery/14620.jpg"
      />
    </>
  );
}

"use client";

import { whatsappHref, whatsappDisplay } from "@/src/lib/whatsapp";
import Link from "next/link";
import CtaSection from "@/src/components/CtaSection";
import { Bullet, DataTable, INLINE_LINK, Section } from "@/src/data/guides/primitives";

const BODY = "text-gray-600 text-[15px] leading-relaxed";

const packages: [string, string, string, string, string, string][] = [
  ["4 Days Kashmir Super Saver", "/tours/india/kashmir/4-day-super-saver/", "4D3N", "RM1,088", "RM435", "Dal Lake houseboat, Mughal Gardens"],
  ["5 Days Kashmir Ski Resort & Cable Car", "/tours/india/kashmir/5-day-ski-resort-cable-car/", "5D4N", "RM2,388", "RM955", "Gulmarg gondola, Pahalgam saffron fields"],
  ["5 Days Kashmir + Delhi Bazaar Shopping", "/tours/india/kashmir/5-day-paradise-delhi-shopping/", "5D4N", "RM2,588", "RM1,035", "Houseboat, saffron fields, Delhi markets"],
  ["5 Days Kashmir Ski Resort + Taj Mahal", "/tours/india/kashmir/5-day-ski-taj-mahal/", "5D4N", "RM2,798", "RM1,119", "Gulmarg skiing, Taj Mahal"],
  ["6 Days Best of Kashmir + Taj Mahal", "/tours/india/kashmir/6-day-best-of-kashmir-taj/", "6D5N", "RM3,118", "RM1,247", "Houseboat, Gulmarg, Taj Mahal sunrise"],
  ["7 Days Exclusive Kashmir Escape", "/tours/india/kashmir/7-day-exclusive-escape/", "7D6N", "RM3,288", "RM1,315", "Gulmarg overnight, Pahalgam, private tour"],
  ["7 Days Varanasi + Kashmir", "/tours/india/kashmir/7-day-varanasi-kashmir/", "7D6N", "RM4,688", "RM1,875", "Ganga Aarti, domestic flights included"],
  ["12 Days Srinagar to Leh Road Trip", "/tours/india/kashmir/12-day-srinagar-leh-road-trip/", "12D11N", "RM5,988", "RM2,395", "Himalayan passes, Pangong Lake"],
];

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

      <Section label="Packages" heading="Kashmir Packages at a Glance">
        <DataTable
          headers={["Package", "Days", "From (per person)", "Saving per couple", "Highlights"]}
          rows={packages.map(([name, href, days, price, saving, highlights]) => [
            <L key={href} href={href}>
              {name}
            </L>,
            days,
            price,
            saving,
            highlights,
          ])}
        />
      </Section>

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

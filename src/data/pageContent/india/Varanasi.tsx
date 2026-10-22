"use client";

import { whatsappHref, whatsappDisplay } from "@/src/lib/whatsapp";
import Link from "next/link";
import CtaSection from "@/src/components/CtaSection";
import { Bullet, DataTable, INLINE_LINK, Section } from "@/src/data/guides/primitives";

const BODY = "text-gray-600 text-[15px] leading-relaxed";

const packages: [string, string, string, string, string, string][] = [
  ["3 Days Varanasi: Sunrise, Sunset & Ganga Aarti", "/tours/india/north-india/3-day-varanasi-ganga-aarti/", "3D2N", "RM698", "RM279", "Aarti, sunrise boat ride, temples"],
  ["4 Days Best of Varanasi", "/tours/india/north-india/4-day-varanasi-best/", "4D3N", "RM1,288", "RM515", "Triveni Sangam Prayagraj, Sarnath"],
  ["4 Days Varanasi + Domestic Flights", "/tours/india/north-india/4-day-varanasi-flights/", "4D3N", "RM1,588", "RM635", "Flights included, ghats, rituals"],
  ["5 Days Best of Varanasi + Ayodhya", "/tours/india/north-india/5-day-varanasi-ayodhya/", "5D4N", "RM1,588", "RM635", "Ayodhya Ram Mandir, Guptar Ghat"],
  ["6 Days India’s Sacred Triangle", "/tours/india/north-india/6-day-sacred-triangle/", "6D5N", "RM2,488", "RM995", "Ayodhya, Varanasi, Rishikesh ashrams"],
  ["11 Days Sacred Trails of India", "/tours/india/north-india/11-day-sacred-trails/", "11D10N", "RM3,888", "RM1,555", "Varanasi, Rishikesh, Amritsar"],
  ["7 Days Varanasi + Kashmir", "/tours/india/kashmir/7-day-varanasi-kashmir/", "7D6N", "RM4,688", "RM1,875", "Ganga Aarti, Dal Lake, flights included"],
];

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className={INLINE_LINK}>
    {children}
  </Link>
);

export function VaranasiBody() {
  return (
    <>
      <div className="space-y-5">
        <p className={BODY}>
          Dhesu has been guiding Malaysians here since 1988, with English-speaking guides, well-timed
          boat rides and airport transfers handled with care. We are licensed in Malaysia (KKKP 1439)
          and accredited by IATA, PATA and MATTA.
        </p>
        <p className="font-primary font-bold text-teal-navy text-[15px]">
          From RM698 per person | 3 to 11 days | 7 packages
        </p>
      </div>

      <Section label="Packages" heading="Varanasi Packages at a Glance">
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

      <Section label="Choose" heading="Which Varanasi Package Suits You?">
        <div className="space-y-5">
          <p className={BODY}>
            <strong>If you only have a long weekend,</strong> the{" "}
            <L href="/tours/india/north-india/3-day-varanasi-ganga-aarti/">3 day Varanasi package</L>{" "}
            covers the evening Ganga Aarti, a sunrise boat ride, the ghats and the main temples. It is
            the lowest-priced way in.
          </p>
          <p className={BODY}>
            <strong>If you want Prayagraj and Sarnath too,</strong> the{" "}
            <L href="/tours/india/north-india/4-day-varanasi-best/">4 day Best of Varanasi</L> adds the
            Triveni Sangam at Prayagraj and the Buddhist site of Sarnath. If you would rather skip the
            long road transfers, the{" "}
            <L href="/tours/india/north-india/4-day-varanasi-flights/">
              4 day package with domestic flights included
            </L>{" "}
            saves time.
          </p>
          <p className={BODY}>
            <strong>If Ayodhya is on your list,</strong> the{" "}
            <L href="/tours/india/north-india/5-day-varanasi-ayodhya/">
              5 day Varanasi and Ayodhya package
            </L>{" "}
            includes the Ram Mandir and Guptar Ghat. Add Rishikesh and you have the{" "}
            <L href="/tours/india/north-india/6-day-sacred-triangle/">
              6 day Sacred Triangle of Ayodhya, Varanasi and Rishikesh
            </L>
            .
          </p>
          <p className={BODY}>
            <strong>If you want the full pilgrimage,</strong> the{" "}
            <L href="/tours/india/north-india/11-day-sacred-trails/">11 day Sacred Trails of India</L>{" "}
            adds the Golden Temple in Amritsar with an expert spiritual guide. Buddhist travellers may
            prefer our{" "}
            <L href="/tours/india/north-india/11-day-buddhist-pilgrimage/">
              11 day Buddhist pilgrimage through North India
            </L>
            .
          </p>
          <p className={BODY}>
            <strong>If you want something lighter at the end,</strong> the{" "}
            <L href="/tours/india/kashmir/7-day-varanasi-kashmir/">
              7 day Varanasi and Kashmir combination
            </L>{" "}
            pairs the ghats with a Dal Lake houseboat and the Gulmarg gondola. See more on our{" "}
            <L href="/tours/india/kashmir/">Kashmir tour packages page</L>.
          </p>
        </div>
      </Section>

      <Section label="Highlights" heading="What Makes Varanasi Unforgettable">
        <ul className="space-y-4">
          <Bullet>
            <strong>The ghats:</strong> more than 80 stone stairways run down to the river. Each has its
            own character: bathing, laundry, yoga, music and ritual all happen side by side.
          </Bullet>
          <Bullet>
            <strong>Dawn on the river:</strong> a boat at sunrise shows you the whole waterfront at once,
            lit gold, with pilgrims offering prayers in the water.
          </Bullet>
          <Bullet>
            <strong>The evening Ganga Aarti:</strong> priests lift towering brass lamps in unison at
            Dashashwamedh Ghat while bells, conch shells and chanting fill the air. Arrive early for a
            good spot.
          </Bullet>
          <Bullet>
            <strong>Sarnath:</strong> about 10 km from the city, this is where the Buddha gave his first
            teaching. The Dhamek Stupa and the quiet gardens feel a world away from the bustle.
          </Bullet>
          <Bullet>
            <strong>Banarasi silk:</strong> the city’s weavers are famous for brocade saris and scarves.
            A short visit to a weaving workshop is a fine way to spend an afternoon.
          </Bullet>
          <Bullet>
            <strong>The food:</strong> kachori and jalebi for breakfast, creamy lassi in clay cups and
            sweet Banarasi paan. The food is mostly vegetarian.
          </Bullet>
        </ul>
      </Section>

      <Section label="Extend" heading="Beyond Varanasi: Ayodhya, Prayagraj and Rishikesh">
        <p className={`${BODY} mb-5`}>Many travellers extend the trip into a wider spiritual circuit:</p>
        <DataTable
          minWidth={480}
          headers={["Place", "Why go"]}
          rows={[
            ["Prayagraj", "The Triveni Sangam, where the Ganga and Yamuna meet, is one of Hinduism’s holiest bathing spots"],
            ["Ayodhya", "The Ram Mandir and the Guptar Ghat on the Sarayu River"],
            ["Rishikesh", "Riverside ashrams, yoga and a quieter Ganga"],
            ["Amritsar", "The Golden Temple and its famous community kitchen"],
          ]}
        />
        <p className={`${BODY} mt-5`}>
          If pilgrimage appeals to you beyond India, read our{" "}
          <L href="/blog/muktinath-yatra-guide-from-malaysia/">
            Muktinath Yatra guide for Malaysian travellers
          </L>
          .
        </p>
      </Section>

      <Section label="When to Go" heading="Best Time to Visit Varanasi">
        <p className={BODY}>
          The most comfortable season is <strong>October to March</strong>, with cooler days for
          walking the ghats. Winter mornings can be foggy, which sometimes delays flights, so leave some
          buffer if you are connecting. <strong>April to June</strong> is very hot, and during the{" "}
          <strong>monsoon (July to September)</strong> the river rises and some ghats flood. Year-end
          and school holiday trips fall in the best weather. Check{" "}
          <L href="/year-end-holiday-travel-deals-2026/">year-end holiday travel deals</L> and book
          early.
        </p>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Section label="Inclusions" heading="What’s Included">
          <ul className="space-y-4">
            <Bullet>Hotel accommodation as listed per package</Bullet>
            <Bullet>Daily breakfast</Bullet>
            <Bullet>English-speaking guide and private vehicle</Bullet>
            <Bullet>Airport transfers</Bullet>
            <Bullet>Sunrise boat ride, Ganga Aarti and sightseeing as listed per itinerary</Bullet>
            <Bullet>Domestic flights, on the packages that list them</Bullet>
          </ul>
        </Section>
        <Section label="Exclusions" heading="What’s Not Included">
          <ul className="space-y-4">
            <Bullet>International flights</Bullet>
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
            <strong>Respect at the ghats:</strong> dress modestly, remove shoes at temples and ask your
            guide before taking photos, especially near the cremation ghats.
          </Bullet>
          <Bullet>
            <strong>Families and groups:</strong> a family pilgrimage works well as a private tour. See
            our <L href="/group-incentive-travel-packages/">group travel packages</L>.
          </Bullet>
          <Bullet>
            <strong>Dietary needs:</strong> Varanasi is largely vegetarian, so tell us early if you need
            halal meals. Our{" "}
            <L href="/muslim-friendly-holiday-travel-guide/">Muslim-friendly holiday travel guide</L>{" "}
            covers how we plan around this.
          </Bullet>
          <Bullet>
            <strong>Pace yourself:</strong> the city is crowded and noisy. Early starts and a rest in the
            afternoon make it easier.
          </Bullet>
        </ul>
      </Section>
    </>
  );
}

export function VaranasiClosing() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <Section label="Why Dhesu" heading="Why Book with Dhesu">
              <ul className="space-y-4">
                <Bullet>
                  Licensed and accredited since 1988 (KKKP 1439, IATA, PATA, MATTA). Learn{" "}
                  <L href="/about-us/">more about Dhesu Travel</L>.
                </Bullet>
                <Bullet>Guides who time the boat ride and the aarti well.</Bullet>
                <Bullet>Visa guidance and airport transfers on every booking.</Bullet>
                <Bullet>
                  Current offers on our <L href="/promotions/">promotions page</L>.
                </Bullet>
              </ul>
            </Section>
          </div>
        </div>
      </section>
      <CtaSection
        heading="Plan Your Varanasi Trip"
        body={
          <>
            Tell us your dates and group size.
            <span className="block mt-6 text-base italic text-white/60">
              Looking at other parts of India? Browse{" "}
              <Link href="/tours/india/all-packages/" className="underline underline-offset-4 hover:text-white">
                all India tour packages from Malaysia
              </Link>
              , the{" "}
              <Link href="/tours/india/golden-triangle/" className="underline underline-offset-4 hover:text-white">
                Golden Triangle
              </Link>{" "}
              or{" "}
              <Link href="/tours/india/kerala/" className="underline underline-offset-4 hover:text-white">
                Kerala
              </Link>
              .
            </span>
          </>
        }
        actions={[
          { label: "Request a free quote", href: "/contact-us/" },
          { label: `WhatsApp us on ${whatsappDisplay}`, href: whatsappHref("tours") },
        ]}
        image="/images/gallery/14014.jpg"
      />
    </>
  );
}

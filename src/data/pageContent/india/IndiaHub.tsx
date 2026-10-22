"use client";

import { whatsappHref } from "@/src/lib/whatsapp";
import Link from "next/link";
import CtaSection from "@/src/components/CtaSection";
import { Bullet, DataTable, INLINE_LINK, Section, TripRows } from "@/src/data/guides/primitives";

const BODY = "text-gray-600 text-[15px] leading-relaxed";

const packages: [string, string, string, string, string][] = [
  ["5 Days Golden Triangle", "/tours/india/north-india/5-day-golden-triangle/", "First trip to India", "Delhi, Agra, Jaipur, Taj Mahal", "RM1,388"],
  ["9 Days Shimla Manali", "/tours/india/north-india/9-day-shimla-manali/", "Hills and snow", "Shimla, Manali, mountain roads", "See package page"],
  ["11 Days Buddhist Pilgrimage", "/tours/india/north-india/11-day-buddhist-pilgrimage/", "Pilgrims", "Buddhist sites across North India", "See package page"],
  ["3 Days Varanasi Ganga Aarti", "/tours/india/north-india/3-day-varanasi-ganga-aarti/", "Spiritual short break", "Dawn boat ride, evening Ganga Aarti", "See package page"],
  ["3 Days Amritsar", "/tours/india/north-india/3-day-amritsar-golden-temple/", "Culture and faith", "Golden Temple, Wagah Border", "RM398"],
  ["3 Days Chennai Super Saver", "/tours/india/south-india/3-day-chennai-super-saver/", "Budget city break", "Chennai, Mahabalipuram temples", "RM398"],
  ["3 Days Bangalore Highlights", "/tours/india/south-india/3-day-bangalore-highlights/", "Easy first trip", "Lalbagh, Bangalore Palace, Tipu Sultan Fort", "RM498"],
  ["3 Days Hyderabad Heritage", "/tours/india/south-india/3-day-hyderabad-heritage/", "Food and history", "Charminar, Golconda Fort", "RM498"],
  ["3 Days Shirdi Pilgrimage", "/tours/india/west-india/3-day-shirdi-pilgrimage/", "Devotional trip", "Sai Baba Temple, Shani Shingnapur", "RM588"],
];

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className={INLINE_LINK}>
    {children}
  </Link>
);

export function IndiaHubBody() {
  return (
    <>
      <div className="space-y-5">
        <p className={BODY}>
          Dhesu has been arranging India trips for Malaysian travellers since 1988. Every package comes
          with an English-speaking guide and airport transfers, and you can change the hotels, pace and
          activities to suit your group. Short city breaks start from RM398 per person, and flights from
          Kuala Lumpur take around 4 to 6 hours depending on where you land.
        </p>
        <p className="font-primary font-bold text-[15px]">
          <L href="/tours/india/all-packages/">Browse all India packages</L>
          <span className="text-gray-400"> | </span>
          <L href="/contact-us/#free-quote">Get a free quote</L>
        </p>
      </div>

      <Section label="Packages" heading="Popular India tour packages from Malaysia">
        <DataTable
          headers={["Package", "Best for", "You'll see", "From (per person)"]}
          rows={packages.map(([name, href, bestFor, see, price]) => [
            <L key={href} href={href}>
              {name}
            </L>,
            bestFor,
            see,
            price,
          ])}
        />
        <p className={`${BODY} mt-5`}>
          Want something that isn&rsquo;t listed?{" "}
          <L href="/custom-itinerary-request/">Request a custom itinerary</L> and we&rsquo;ll build it
          around your dates.
        </p>
      </Section>

      <Section label="Destinations" heading="Where to go in India">
        <div className="space-y-5">
          <p className={BODY}>
            <strong>
              <L href="/tours/india/golden-triangle/">Golden Triangle</L>.
            </strong>{" "}
            Delhi&rsquo;s old lanes, Jaipur&rsquo;s forts and bazaars, and the{" "}
            <L href="/tours/india/taj-mahal/">Taj Mahal</L> at first light. Most first timers start
            here, and it works well in five days.
          </p>
          <p className={BODY}>
            <strong>
              <L href="/tours/india/kashmir/">Kashmir</L>.
            </strong>{" "}
            Dal Lake houseboats, the meadows of Gulmarg in summer and proper snow in winter. Wondering
            what it costs? Our{" "}
            <L href="/blog/kashmir-trip-cost-from-malaysia/">Kashmir trip cost guide for Malaysians</L>{" "}
            breaks it down. Thinking of going higher? Read how to{" "}
            <L href="/blog/ladakh-altitude-sickness-guide/">avoid altitude sickness in Ladakh</L> first.
          </p>
          <p className={BODY}>
            <strong>
              <L href="/tours/india/kerala/">Kerala</L>.
            </strong>{" "}
            Backwaters, tea hills in Munnar and a pace that finally slows down. If a night on a
            houseboat is the plan, the{" "}
            <L href="/blog/kerala-houseboat-guide/">Kerala houseboat guide for Malaysian families</L>{" "}
            covers what to expect.
          </p>
          <p className={BODY}>
            <strong>
              <L href="/tours/india/north-india/">North India</L>.
            </strong>{" "}
            Shimla&rsquo;s hill station, Manali&rsquo;s snow fields, Haridwar and Rishikesh on the Ganga.
          </p>
          <p className={BODY}>
            <strong>
              <L href="/tours/india/varanasi/">Varanasi</L>.
            </strong>{" "}
            One of the oldest living cities in the world. Heavy on the senses, and hard to forget.
          </p>
          <p className={BODY}>
            <strong>
              <L href="/tours/india/south-india/">South India</L>.
            </strong>{" "}
            Temples, Mysore&rsquo;s palace and hill stations reached by toy train. Quieter than the
            north.
          </p>
          <p className={BODY}>
            <strong>
              <L href="/tours/india/east-india/">East India</L> and{" "}
              <L href="/tours/india/west-india/">West India</L>.
            </strong>{" "}
            Kolkata&rsquo;s colonial architecture on one side, Mumbai, Shirdi and Goa on the other.
          </p>
        </div>
      </Section>

      <Section label="Travel Info" heading="India travel information for Malaysians">
        <TripRows
          rows={[
            {
              label: "Visa",
              detail:
                "Malaysians need a visa for India. Right now the High Commission of India in Kuala Lumpur offers a free 30-day, double-entry e-Tourist visa, applied for online, valid until 31 December 2026. Apply before you fly.",
            },
            {
              label: "Best time to go",
              detail:
                "October to March for most of India, especially the Golden Triangle. May to October for the Himalayan hills. Kerala is fine for most of the year.",
            },
            {
              label: "Flight time from KL",
              detail: "About 4 hours to South India and around 5.5 to 6 hours to Delhi.",
            },
            {
              label: "How many days",
              detail:
                "3 days for a single city, 5 to 7 for one region, 10 or more for a proper first look, and 14 plus if you want north and south together.",
            },
            {
              label: "Itinerary styles",
              detail:
                "City breaks, heritage circuits, hill stations, backwater holidays, pilgrimages, honeymoon and group trips.",
            },
          ]}
        />
      </Section>

      <Section label="Choose" heading="Which India trip suits you">
        <ul className="space-y-4">
          <Bullet>
            <strong>First timers:</strong> the{" "}
            <L href="/tours/india/golden-triangle/">Golden Triangle</L> is the easy start.
          </Bullet>
          <Bullet>
            <strong>Couples and honeymooners:</strong> Kerala and Kashmir. Our{" "}
            <L href="/honeymoon-holiday-guide-2026/">honeymoon holiday guide</L> has more ideas.
          </Bullet>
          <Bullet>
            <strong>Pilgrims:</strong> Varanasi, Amritsar, Shirdi and the Buddhist circuit.
          </Bullet>
          <Bullet>
            <strong>Muslim travellers:</strong> read our{" "}
            <L href="/muslim-friendly-holiday-travel-guide/">Muslim-friendly holiday guide</L>, then
            tell us your needs when you enquire.
          </Bullet>
          <Bullet>
            <strong>Companies and big groups:</strong> see{" "}
            <L href="/group-incentive-travel-packages/">group and incentive travel</L>.
          </Bullet>
          <Bullet>
            <strong>Families on school breaks:</strong> check{" "}
            <L href="/school-holiday-travel-deals-2026/">school holiday deals</L> and{" "}
            <L href="/year-end-holiday-travel-deals-2026/">year-end deals</L>.
          </Bullet>
        </ul>
        <p className={`${BODY} mt-5`}>
          Not sure where to begin? Our{" "}
          <L href="/tours/india/india-tour-travel-guide-2026/">India travel guide 2026</L> explains how
          the regions differ and how much time each one needs.
        </p>
      </Section>

      <Section label="Why Dhesu" heading="Why book India with Dhesu">
        <p className={BODY}>
          India is the kind of place where local knowledge saves you a lot of trouble. Which guide knows
          the history, which hotel actually faces the river, which route skips the worst of the traffic.
          We&rsquo;ve been sending Malaysians there since 1988, and we&rsquo;re IATA, PATA and MATTA
          accredited and licensed by the Ministry of Tourism Malaysia (KKKP 1439). If something changes
          mid-trip, there&rsquo;s a real team you can call. You can read more about{" "}
          <L href="/why-book-with-a-travel-agent-2026/">why book with a travel agent</L> or{" "}
          <L href="/about-us/">who we are</L>.
        </p>
      </Section>
    </>
  );
}

export function IndiaHubClosing() {
  return (
    <CtaSection
      heading="Plan Your India Trip"
      body="Ready to plan? Get your India quote or message us on WhatsApp."
      actions={[
        { label: "Get your India quote", href: "/contact-us/#free-quote" },
        { label: "WhatsApp", href: whatsappHref("tours") },
      ]}
      image="/images/gallery/12336.jpg"
    />
  );
}

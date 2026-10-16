"use client";

import Link from "next/link";
import Button from "@/src/components/Button";
import CtaSection from "@/src/components/CtaSection";
import { Bullet, DataTable, INLINE_LINK, Section, TripRows } from "@/src/data/guides/primitives";

const BODY = "text-gray-600 text-[15px] leading-relaxed";
const CTA_LINK = "underline underline-offset-4 hover:text-white";

const packages: [string, string, string, string, string][] = [
  ["4 Days Nepal Super Saver", "/tours/nepal/kathmandu/4-day-super-saver/", "Best value", "Pashupatinath, Swayambhunath, Nagarkot views", "RM888"],
  ["4 Days Himalayan Villa", "/tours/nepal/nagarkot/4-day-himalayan-villa/", "Scenic stay", "Nagarkot village stay, sunrise over the peaks", "RM1,388"],
  ["5 Days Himalayan Villa", "/tours/nepal/nagarkot/5-day-himalayan-villa/", "Slower pace", "Extended Nagarkot stay, Kathmandu heritage", "RM1,588"],
  ["6 Days Best of Nepal", "/tours/nepal/kathmandu-pokhara/6-day-best-of-nepal/", "Most popular", "Kathmandu, Nagarkot, Pokhara, Sarangkot sunrise", "RM1,988"],
  ["6 Days Best of Nepal, Muslim Friendly", "/tours/nepal/kathmandu-pokhara/6-day-muslim-friendly/", "Muslim travellers", "Private guide, Phewa Lake, Nagarkot sunrise", "RM2,088"],
];

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className={INLINE_LINK}>
    {children}
  </Link>
);

const Place = ({ href, name, children }: { href: string; name: string; children: React.ReactNode }) => (
  <p className={BODY}>
    <Link href={href} className={INLINE_LINK}>
      <strong>{name}</strong>
    </Link>
    <strong>.</strong> {children}
  </p>
);

export function NepalHubBody() {
  return (
    <>
      <div className="space-y-6">
        <p className={BODY}>
          Dhesu has been arranging Nepal holidays for Malaysian travellers since 1988. Every package
          includes airport transfers and an on-ground team we trust, and prices start from RM888 per
          person. It&apos;s about 4.5 to 5 hours from Kuala Lumpur, so a long weekend is realistic.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tours/nepal/all-packages/">
            <Button variant="dark" showArrow>
              Browse all Nepal packages
            </Button>
          </Link>
          <Link href="/contact-us/#free-quote">
            <Button variant="light" showArrow>
              Get a free quote
            </Button>
          </Link>
        </div>
      </div>

      <Section label="Packages" heading="Popular Nepal tour packages from Malaysia">
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
          Private and group trips are available too.{" "}
          <L href="/custom-itinerary-request/">Request a custom itinerary</L>.
        </p>
      </Section>

      <Section label="Destinations" heading="Where to go in Nepal">
        <div className="space-y-5">
          <Place href="/tours/nepal/kathmandu/" name="Kathmandu">
            Durbar Square, Boudhanath Stupa, Pashupatinath and the Monkey Temple at Swayambhunath.
            Noisy, crowded and brilliant. Every trip starts here.
          </Place>
          <Place href="/tours/nepal/pokhara/" name="Pokhara">
            Boating on Phewa Lake and sunrise from Sarangkot. A calm town and the starting point for the
            big treks.
          </Place>
          <Place href="/tours/nepal/kathmandu-pokhara/" name="Kathmandu and Pokhara">
            The classic pairing, and the one most people book.
          </Place>
          <Place href="/tours/nepal/nagarkot/" name="Nagarkot">
            A hill station at 2,200 metres with a wide Himalayan view. Stay the night for sunrise.
          </Place>
          <Place href="/tours/nepal/chitwan/" name="Chitwan">
            Jeep safaris, canoe trips on the Rapti River and Tharu villages. A different Nepal
            altogether.
          </Place>
          <Place href="/tours/nepal/muktinath/" name="Muktinath">
            A sacred shrine at 3,800 metres, reached by a short flight from Pokhara. Planning a
            pilgrimage? Read our{" "}
            <L href="/blog/muktinath-yatra-guide-from-malaysia/">Muktinath Yatra guide from Malaysia</L>{" "}
            first.
          </Place>
          <Place href="/tours/nepal/lumbini/" name="Lumbini">
            The birthplace of the Buddha, with the Maya Devi Temple and monasteries built by Buddhist
            countries around the world.
          </Place>
          <Place href="/tours/nepal/muslim-friendly/" name="Muslim Friendly Nepal">
            Halal dining guidance, prayer-time awareness and a Muslim-aware private guide on every
            itinerary.
          </Place>
        </div>
      </Section>

      <Section label="Travel Info" heading="Nepal travel information for Malaysians">
        <TripRows
          rows={[
            {
              label: "Visa",
              detail:
                "Malaysians can get a visa on arrival at Kathmandu airport. At the time of writing, the Malaysian foreign ministry lists fees of USD 30 for 15 days, USD 50 for 30 days and USD 125 for 90 days. We guide you through the documents with every package, and you should confirm current fees before flying.",
            },
            {
              label: "Best time to go",
              detail:
                "October to December has the clearest air and best mountain views. March to May is the second best window, with rhododendrons in bloom. June to September is monsoon, so mountains are often hidden, but Kathmandu and Chitwan are still enjoyable and cheaper.",
            },
            { label: "Flight time from KL", detail: "About 4.5 to 5 hours direct." },
            {
              label: "How many days",
              detail:
                "4 days covers the Kathmandu Valley. 6 to 8 days is the sweet spot for Kathmandu and Pokhara, with Nagarkot or Chitwan added if you can. A fully guided Everest Base Camp trek takes about 14 days.",
            },
            {
              label: "Itinerary styles",
              detail:
                "Temple and culture breaks, Himalayan sunrise stays, Kathmandu and Pokhara circuits, jungle safaris, pilgrimages and Muslim-friendly trips.",
            },
          ]}
        />
      </Section>

      <Section label="Who It Suits" heading="Who Nepal suits">
        <ul className="space-y-4">
          <Bullet>
            <strong>Couples:</strong> the Himalayan villa stays in Nagarkot are built for sunrise and
            slow mornings.
          </Bullet>
          <Bullet>
            <strong>Families:</strong> Kathmandu, Pokhara and Chitwan give kids a lot to look at without
            much hiking.
          </Bullet>
          <Bullet>
            <strong>Pilgrims:</strong> Muktinath for Hindus and Buddhists, Lumbini for Buddhists.
          </Bullet>
          <Bullet>
            <strong>Muslim travellers:</strong> book the{" "}
            <L href="/tours/nepal/kathmandu-pokhara/6-day-muslim-friendly/">6 Days Muslim Friendly Nepal</L>{" "}
            trip or read our <L href="/muslim-friendly-holiday-travel-guide/">Muslim-friendly holiday guide</L>.
          </Bullet>
          <Bullet>
            <strong>Light adventurers:</strong> a three-day walk into the Annapurna foothills needs no
            climbing experience.
          </Bullet>
        </ul>
        <p className={`${BODY} mt-6`}>
          Not sure how to combine everything?{" "}
          <L href="/tours/nepal/nepal-tour-travel-guide-2026/">Nepal travel guide 2026</L> walks through
          the options.
        </p>
      </Section>

      <Section label="Why Dhesu" heading="Why book Nepal with Dhesu">
        <p className={BODY}>
          Mountain weather changes fast. Flights to Pokhara and Lukla are sometimes delayed, and trekking
          needs proper permits, teahouse bookings and an acclimatisation plan. We&apos;ve been arranging
          Nepal trips since 1988, we&apos;re IATA, PATA and MATTA accredited, and we&apos;re licensed by
          the Ministry of Tourism Malaysia (KKKP 1439). You can read more about{" "}
          <L href="/why-book-with-a-travel-agent-2026/">why book with a travel agent</L>, or ask about{" "}
          <L href="/school-holiday-travel-deals-2026/">school holiday deals</L> and{" "}
          <L href="/year-end-holiday-travel-deals-2026/">year-end deals</L>.
        </p>
      </Section>
    </>
  );
}

export function NepalHubClosing() {
  return (
    <CtaSection
      heading="Plan Your Nepal Trip"
      body={
        <>
          The mountains are waiting.{" "}
          <Link href="/contact-us/#free-quote" className={CTA_LINK}>
            Get your Nepal quote
          </Link>{" "}
          or message us on{" "}
          <a href="https://wa.me/60193364465" target="_blank" rel="noopener noreferrer" className={CTA_LINK}>
            WhatsApp
          </a>
          .
        </>
      }
      actions={[
        { label: "Get your Nepal quote", href: "/contact-us/#free-quote" },
        { label: "WhatsApp us on +6019 336 4465", href: "https://wa.me/60193364465" },
      ]}
      image="/images/gallery/38.jpg"
    />
  );
}

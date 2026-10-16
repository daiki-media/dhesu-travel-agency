"use client";

import Link from "next/link";
import Button from "@/src/components/Button";
import CtaSection from "@/src/components/CtaSection";
import { Bullet, DataTable, INLINE_LINK, Section, TripRows } from "@/src/data/guides/primitives";

const BODY = "text-gray-600 text-[15px] leading-relaxed";
const CTA_LINK = "underline underline-offset-4 hover:text-white";

const packages: [string, string, string, string, string][] = [
  ["3 Days Kandy and Colombo", "/tours/sri-lanka/kandy/3-day-kandy-colombo/", "Short break", "Temple of the Tooth Relic, Kandy cultural show, Colombo city tour", "RM888"],
  ["4 Days Little England", "/tours/sri-lanka/nuwara-eliya/4-day-little-england/", "Hill country", "Tea plantations, Horton Plains, Kandy, scenic train views", "RM1,288"],
  ["4 Days Beautiful Sri Lanka, Muslim Friendly", "/tours/sri-lanka/nuwara-eliya/4-day-muslim-friendly/", "Muslim travellers", "Halal meals, Kandy, Nuwara Eliya, beach and hill resort", "RM1,288"],
  ["5 Days Sri Lankan Adventure", "/tours/sri-lanka/sigiriya/5-day-sri-lankan-adventure/", "Most popular", "Sigiriya Rock, Dambulla Cave Temple, Kandy, Colombo", "RM1,688"],
  ["6 Days Best of Sri Lanka", "/tours/sri-lanka/kataragama/6-day-central-south/", "Culture plus coast", "Cultural Triangle, tea hills, south coast", "RM2,098"],
  ["6 Days Wildlife Safari", "/tours/sri-lanka/yala-national-park/6-day-wildlife-safari/", "Wildlife lovers", "Yala National Park safaris", "See package page"],
];

const seasons: [string, string, string][] = [
  ["Colombo, Galle and the south and west beaches (Bentota, Hikkaduwa, Mirissa)", "December to March", "The southwest monsoon runs roughly May to September, with rough seas and heavy rain."],
  ["Kandy and the hill country (Nuwara Eliya, Ella)", "January to April", "Driest and clearest. Showers can happen in any month, and Nuwara Eliya is cool, so pack a layer. April is busy around the Sinhala and Tamil New Year."],
  ["Cultural Triangle (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura)", "February to September", "Hot in the middle of the year, so climb Sigiriya early. Most of the rain falls from October to January."],
  ["Yala and Kataragama", "February to July", "Water sources shrink in the dry season, which makes wildlife easier to spot. Confirm park opening dates, because sections sometimes close for a few weeks in the dry season."],
  ["East coast (Trincomalee, Pasikudah, Arugam Bay)", "May to September", "Dry and sunny while the west gets its monsoon."],
  ["Jaffna and the north", "February to September", "Wettest from October to January."],
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

export function SriLankaHubBody() {
  return (
    <>
      <div className="space-y-6">
        <p className={BODY}>
          Dhesu has arranged Sri Lanka holidays for Malaysian travellers since 1988. Every package runs as
          a 100% private tour with an English-speaking guide and airport transfers, so you set the pace.
          Trips start from RM888 per person, and Malaysians can currently get the Sri Lanka ETA free of
          charge.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tours/sri-lanka/all-packages/">
            <Button variant="dark" showArrow>
              Browse all Sri Lanka packages
            </Button>
          </Link>
          <Link href="/contact-us/#free-quote">
            <Button variant="light" showArrow>
              Get a free quote
            </Button>
          </Link>
        </div>
      </div>

      <Section label="Packages" heading="Popular Sri Lanka tour packages from Malaysia">
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
          Want to change something, or build a trip from scratch?{" "}
          <L href="/custom-itinerary-request/">Request a custom itinerary</L>.
        </p>
      </Section>

      <Section label="Destinations" heading="Where to go in Sri Lanka">
        <div className="space-y-5">
          <Place href="/tours/sri-lanka/kandy/" name="Kandy">
            The last royal capital, set around a lake in the hills. The Temple of the Sacred Tooth Relic
            draws pilgrims from across the Buddhist world, and the evening Kandyan dance show is worth the
            ticket. Pinnawala Elephant Orphanage is nearby.
          </Place>
          <Place href="/tours/sri-lanka/sigiriya/" name="Sigiriya">
            A 5th-century palace on top of a 200-metre rock, with old frescoes and water gardens still
            intact. Pair it with the Dambulla Cave Temple and the ruins at Polonnaruwa.
          </Place>
          <Place href="/tours/sri-lanka/nuwara-eliya/" name="Nuwara Eliya">
            At 1,868 metres it&apos;s properly cool, with tea estates on every hillside and colonial
            bungalows left over from the British days. The train ride through the hills is the part
            everyone photographs.
          </Place>
          <Place href="/tours/sri-lanka/colombo/" name="Colombo">
            Dutch colonial streets, temples, spice markets and a seafront promenade. Most trips begin or
            end here.
          </Place>
          <Place href="/tours/sri-lanka/yala-national-park/" name="Yala National Park">
            Dawn and dusk jeep safaris often turn up leopards, elephants, crocodiles and peacocks. Beaches
            on the south coast are close by.
          </Place>
          <Place href="/tours/sri-lanka/kataragama/" name="Kataragama">
            One of the island&apos;s holiest towns, respected by Buddhists, Hindus and Muslims, at the
            edge of Yala.
          </Place>
          <Place href="/tours/sri-lanka/jaffna/" name="Jaffna">
            The Tamil north, with a Dutch fort, Nallur Kovil and the sacred island of Nainativu. It feels
            closer to Tamil Nadu than to Colombo.
          </Place>
        </div>
      </Section>

      <Section label="Best Time" heading="Best time to visit Sri Lanka from Malaysia">
        <p className={`${BODY} mb-6`}>
          Sri Lanka has two monsoons, and they hit different coasts at different times. So there&apos;s
          no single best month for the whole island. It depends on where you&apos;re going. If you only
          want one safe window for a first trip, pick December to March. The west, south and hills are
          all at their best then, so one itinerary can cover most of the island.
        </p>
        <DataTable headers={["Where", "Best months", "Good to know"]} rows={seasons} />
        <p className={`${BODY} mt-5`}>Whale watching off Mirissa runs roughly November to April.</p>

        <h3 className="font-primary font-bold text-[#1a1a1a] text-xl mt-12 mb-5">
          A quick way to read the calendar
        </h3>
        <ul className="space-y-4">
          <Bullet>
            <strong>December to March:</strong> the best all-round window, and also peak season. Flights
            and hotels fill early, so book ahead. Check our{" "}
            <L href="/school-holiday-travel-deals-2026/">school holiday deals</L> and{" "}
            <L href="/year-end-holiday-travel-deals-2026/">year-end deals</L>.
          </Bullet>
          <Bullet>
            <strong>April to June:</strong> hot and humid, with the New Year rush in mid-April. Hill
            country and Yala still work well.
          </Bullet>
          <Bullet>
            <strong>July to September:</strong> the east coast and the Cultural Triangle are at their
            best. The southwest is wet.
          </Bullet>
          <Bullet>
            <strong>October to November:</strong> the wettest transition period for much of the island,
            and usually the cheapest.
          </Bullet>
        </ul>
      </Section>

      <Section label="Travel Info" heading="Sri Lanka travel information for Malaysians">
        <TripRows
          rows={[
            {
              label: "Visa",
              detail:
                "Malaysians need an ETA before arrival. Since 25 May 2026 it has been free for Malaysian nationals, valid for 30 days with double entry. Apply on the official Sri Lanka ETA portal only. Staying longer than 30 days means applying for an extension and paying the fee. Rules can change, so check before you fly.",
            },
            {
              label: "Best time to go",
              detail:
                "December to March for the beaches and hills, February to July for Yala. The full breakdown is above.",
            },
            { label: "Flight time from KL", detail: "About 3.5 hours to Colombo." },
            {
              label: "How many days",
              detail: "3 to 4 days for one region, 6 to 7 days for the sweet spot, 9 to 12 days for the full island.",
            },
            {
              label: "Itinerary styles",
              detail:
                "Culture and heritage, hill country and tea trains, wildlife safaris, beach add-ons, pilgrimage routes and Muslim-friendly trips.",
            },
          ]}
        />
      </Section>

      <Section label="Trip Length" heading="How many days do you need in Sri Lanka">
        <ul className="space-y-4">
          <Bullet>
            <strong>3 to 4 days.</strong> Kandy and Colombo, or one focused region. Good if you want to go
            deeper in one area.
          </Bullet>
          <Bullet>
            <strong>6 to 7 days.</strong> Enough for culture, tea hills and either the south coast or
            Yala. Most first timers are happiest with about a week. See the{" "}
            <L href="/tours/sri-lanka/sigiriya/5-day-sri-lankan-adventure/">5 Days Sri Lankan Adventure</L>{" "}
            or the <L href="/tours/sri-lanka/kataragama/6-day-central-south/">6 Days Best of Sri Lanka</L>.
          </Bullet>
          <Bullet>
            <strong>9 to 12 days.</strong> North and south, from Jaffna to Yala, with the hills and the
            Cultural Triangle in between.
          </Bullet>
        </ul>
        <p className={`${BODY} mt-6`}>
          Unsure how to combine everything?{" "}
          <L href="/tours/sri-lanka/sri-lanka-tour-travel-guide-2026/">Sri Lanka travel guide 2026</L>{" "}
          walks through how each leg fits together.
        </p>
      </Section>

      <Section label="Who It Suits" heading="Who Sri Lanka suits">
        <ul className="space-y-4">
          <Bullet>
            <strong>Families:</strong> short distances between sights, so kids don&apos;t spend the whole
            trip in a car.
          </Bullet>
          <Bullet>
            <strong>Couples and honeymooners:</strong> tea hill stays and beach add-ons. Our{" "}
            <L href="/honeymoon-holiday-guide-2026/">honeymoon holiday guide</L> has more ideas.
          </Bullet>
          <Bullet>
            <strong>Wildlife lovers:</strong> Yala for leopards and elephants. Take a look at the{" "}
            <L href="/tours/sri-lanka/yala-national-park/6-day-wildlife-safari/">6 Days Wildlife Safari</L>.
          </Bullet>
          <Bullet>
            <strong>Pilgrims:</strong> the Temple of the Tooth in Kandy and Kataragama.
          </Bullet>
          <Bullet>
            <strong>Muslim travellers:</strong>{" "}
            <L href="/tours/sri-lanka/muslim-friendly/">Muslim Friendly Sri Lanka</L> trips include halal
            meals. Our <L href="/muslim-friendly-holiday-travel-guide/">Muslim-friendly holiday guide</L>{" "}
            explains how we plan them.
          </Bullet>
          <Bullet>
            <strong>Companies and big groups:</strong> see{" "}
            <L href="/group-incentive-travel-packages/">group and incentive travel</L>.
          </Bullet>
        </ul>
      </Section>

      <Section label="Why Dhesu" heading="Why book Sri Lanka with Dhesu">
        <p className={BODY}>
          Sri Lanka rewards people who know where to stay, when to arrive and which roads to take. Our
          ground team knows which rooms face the lake and which face the car park. Every package is a 100%
          private tour, so you get your own vehicle, your own schedule and your own pace. We&apos;re IATA,
          PATA and MATTA accredited and licensed by the Ministry of Tourism Malaysia (KKKP 1439), and
          there&apos;s a real team to call if plans change mid-trip. Read more about{" "}
          <L href="/why-book-with-a-travel-agent-2026/">why book with a travel agent</L> or{" "}
          <L href="/about-us/">who we are</L>.
        </p>
      </Section>
    </>
  );
}

export function SriLankaHubClosing() {
  return (
    <CtaSection
      heading="Plan Your Sri Lanka Trip"
      body={
        <>
          Tell us which part of Sri Lanka calls to you.{" "}
          <Link href="/contact-us/#free-quote" className={CTA_LINK}>
            Get your Sri Lanka quote
          </Link>{" "}
          or message us on{" "}
          <a href="https://wa.me/60193364465" target="_blank" rel="noopener noreferrer" className={CTA_LINK}>
            WhatsApp
          </a>
          .
        </>
      }
      actions={[
        { label: "Get your Sri Lanka quote", href: "/contact-us/#free-quote" },
        { label: "WhatsApp us on +6019 336 4465", href: "https://wa.me/60193364465" },
      ]}
      image="/images/gallery/666.jpg"
    />
  );
}

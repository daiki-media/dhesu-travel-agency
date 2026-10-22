"use client";

import { whatsappHref, whatsappDisplay } from "@/src/lib/whatsapp";
import Link from "next/link";
import CtaSection from "@/src/components/CtaSection";
import { Bullet, DataTable, INLINE_LINK, Section } from "@/src/data/guides/primitives";

const BODY = "text-gray-600 text-[15px] leading-relaxed";

const packages: [string, string, string, string, string][] = [
  ["3 Days Kerala Culture & Kathakali", "/tours/india/kerala/3-day-culture-kathakali/", "3D2N", "RM598", "Kathakali, Fort Kochi, spice markets"],
  ["4 Days Explore Kerala", "/tours/india/kerala/4-day-explore/", "4D3N", "RM988", "Alleppey backwaters, spice plantations"],
  ["5 Days Cochin, Alleppey & Coimbatore", "/tours/india/kerala/5-day-cochin-alleppey-coimbatore/", "5D4N", "RM1,388", "Backwaters cruise, temples"],
  ["5 Days Kerala: Most Important Places", "/tours/india/kerala/5-day-most-important-places/", "5D4N", "RM1,488", "Kovalam sunset, Trivandrum"],
  ["6 Days Kerala + Backwaters Overnight Cruise", "/tours/india/kerala/6-day-backwaters-overnight/", "6D5N", "RM1,688", "Overnight houseboat, Munnar"],
  ["6 Days Kerala + Thekkady", "/tours/india/kerala/6-day-beautiful-thekkady/", "6D5N", "RM1,928", "Periyar Tiger Reserve, lake cruise"],
  ["8 Days Best of Kerala", "/tours/india/kerala/8-day-best-of/", "8D7N", "RM2,398", "Munnar, Thekkady, Kovalam"],
  ["8 Days Complete Kerala Circuit", "/tours/india/kerala/8-day-complete-circuit/", "8D7N", "RM2,398", "Ayurvedic experience, wildlife"],
  ["9 Days Kerala + Kanyakumari", "/tours/india/kerala/9-day-kanyakumari/", "9D8N", "RM2,788", "Kanyakumari sunrise, houseboat"],
];

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className={INLINE_LINK}>
    {children}
  </Link>
);

export function KeralaBody() {
  return (
    <>
      <div className="space-y-5">
        <p className={BODY}>
          Dhesu has arranged Kerala holidays for Malaysian travellers since 1988. Every package is a
          100% private tour with English-speaking guides, hotel stays and airport transfers handled.
          We are licensed in Malaysia (KKKP 1439) and registered with MATTA and IATA.
        </p>
        <p className="font-primary font-bold text-teal-navy text-[15px]">
          From RM598 per person (twin sharing) | 3 to 9 days | Private tour | Daily departures
        </p>
      </div>

      <Section label="Packages" heading="Kerala Packages at a Glance">
        <DataTable
          headers={["Package", "Duration", "From (per person)", "Highlights"]}
          rows={packages.map(([name, href, duration, price, highlights]) => [
            <L key={href} href={href}>
              {name}
            </L>,
            duration,
            price,
            highlights,
          ])}
        />
      </Section>

      <Section label="Choose" heading="Which Kerala Itinerary Suits You?">
        <div className="space-y-5">
          <p className={BODY}>
            <strong>For a short break,</strong> the{" "}
            <L href="/tours/india/kerala/3-day-culture-kathakali/">
              3 day Kerala package with a Kathakali performance and Fort Kochi heritage walk
            </L>{" "}
            is the lowest-priced way in. The{" "}
            <L href="/tours/india/kerala/4-day-explore/">4 day Explore Kerala tour</L> adds the
            Alleppey backwaters and a spice plantation visit.
          </p>
          <p className={BODY}>
            <strong>For the backwaters experience,</strong> the{" "}
            <L href="/tours/india/kerala/6-day-backwaters-overnight/">
              6 day tour with an overnight houseboat cruise and Munnar tea estates
            </L>{" "}
            is the one to pick. If you are travelling with children or parents, our{" "}
            <L href="/blog/kerala-houseboat-guide/">Kerala houseboat guide for Malaysian families</L>{" "}
            explains what to expect on board.
          </p>
          <p className={BODY}>
            <strong>For wildlife and hills,</strong> the{" "}
            <L href="/tours/india/kerala/6-day-beautiful-thekkady/">6 day Kerala and Thekkady package</L>{" "}
            includes the Periyar Tiger Reserve and a Periyar Lake cruise alongside Munnar and Alleppey.
          </p>
          <p className={BODY}>
            <strong>For the full state,</strong> choose between the{" "}
            <L href="/tours/india/kerala/8-day-best-of/">
              8 day Best of Kerala covering Munnar, Thekkady and Kovalam
            </L>
            , the{" "}
            <L href="/tours/india/kerala/8-day-complete-circuit/">
              8 day complete circuit with an Ayurvedic experience
            </L>
            , or the{" "}
            <L href="/tours/india/kerala/9-day-kanyakumari/">
              9 day tour that ends at Kanyakumari for sunrise
            </L>
            .
          </p>
          <p className={BODY}>
            <strong>Pairing Kerala with North India?</strong> Many travellers do the South on one trip
            and the <L href="/tours/india/golden-triangle/">Delhi Agra Jaipur Golden Triangle</L> on
            another.
          </p>
        </div>

        <h3 className="font-primary font-bold text-[#1a1a1a] text-xl mt-12 mb-5">
          What Makes Kerala Different
        </h3>
        <ul className="space-y-4">
          <Bullet>
            <strong>Kettuvallam houseboats:</strong> these converted rice barges are woven from coconut
            fibre and bamboo. They drift through the Vembanad Lake and the canals around Alleppey.
          </Bullet>
          <Bullet>
            <strong>Kumarakom:</strong> a quieter stretch of the backwaters with a bird sanctuary, good
            for early-morning birdwatching.
          </Bullet>
          <Bullet>
            <strong>Munnar&rsquo;s tea country:</strong> rolling estates, the tea museum and Eravikulam
            National Park, home to the Nilgiri tahr, a mountain goat. The rare neelakurinji flower
            blooms there only every 12 years.
          </Bullet>
          <Bullet>
            <strong>Periyar and the spice hills:</strong> Thekkady has boat cruises on Periyar Lake and
            plantations growing cardamom, pepper and cinnamon.
          </Bullet>
          <Bullet>
            <strong>Fort Kochi:</strong> Chinese fishing nets, St Francis Church, Jew Town and the
            Paradesi Synagogue show how many cultures have passed through.
          </Bullet>
          <Bullet>
            <strong>Kathakali and Kalaripayattu:</strong> classical dance-drama with elaborate makeup,
            and one of the oldest martial arts in the world. Both are performed in Kochi.
          </Bullet>
          <Bullet>
            <strong>Kanyakumari:</strong> the southern tip where the Arabian Sea, Bay of Bengal and
            Indian Ocean meet, with a famous sunrise and the Vivekananda Rock Memorial.
          </Bullet>
          <Bullet>
            <strong>What to eat:</strong> appam with stew, fish molee, pearl spot fish cooked in banana
            leaf and a sadya feast served on a banana leaf. The coconut and curry-leaf flavours will
            feel familiar to Malaysian palates.
          </Bullet>
          <Bullet>
            <strong>Ayurveda:</strong> massage and wellness treatments are a major draw, and the monsoon
            months are traditionally favoured for them.
          </Bullet>
          <Bullet>
            <strong>The boat race:</strong> the Nehru Trophy snake boat race on Punnamada Lake, usually
            in August, is a spectacle if your dates match.
          </Bullet>
        </ul>

        <h3 className="font-primary font-bold text-[#1a1a1a] text-xl mt-12 mb-5">
          Best Time to Visit
        </h3>
        <DataTable
          minWidth={480}
          headers={["Season", "Months", "What to expect"]}
          rows={[
            ["Cool and dry", "October to March", "The most pleasant weather and peak season, so book early"],
            ["Hot and humid", "April to May", "Warm days, good for wildlife near the lakes, quieter hills"],
            ["Monsoon", "June to August", "Heavy rain, lush scenery, lower prices and Ayurveda season"],
            ["Return rains", "October to November", "Some showers, but the countryside is green"],
          ]}
        />
        <p className={`${BODY} mt-5`}>
          If your trip includes Munnar and Thekkady, the hills are cooler, so carry a light jacket even
          in peak season.
        </p>

        <h3 className="font-primary font-bold text-[#1a1a1a] text-xl mt-12 mb-5">
          Planning Tips for Malaysian Travellers
        </h3>
        <ul className="space-y-4">
          <Bullet>
            <strong>Muslim travellers:</strong> Kerala has a large Muslim community and halal food is
            easy to find, especially Malabar-style dishes. See our{" "}
            <L href="/muslim-friendly-holiday-travel-guide/">Muslim-friendly holiday travel guide</L>.
          </Bullet>
          <Bullet>
            <strong>Families and seniors:</strong> distances are manageable, and a houseboat is
            relaxing. Our{" "}
            <L href="/blog/kerala-houseboat-guide/">Kerala houseboat guide for Malaysian families</L>{" "}
            covers what to expect on board.
          </Bullet>
          <Bullet>
            <strong>Couples:</strong> a houseboat night is the classic romantic moment. Our{" "}
            <L href="/honeymoon-holiday-guide-2026/">honeymoon holiday guide</L> shows how we plan these
            trips.
          </Bullet>
          <Bullet>
            <strong>Mosquito and sun protection:</strong> pack repellent and a hat, especially near the
            water.
          </Bullet>
        </ul>
      </Section>

      <Section label="Highlights" heading="What Kerala Offers">
        <ul className="space-y-4">
          <Bullet>
            <strong>Alleppey backwaters:</strong> houseboat and village life on the water
          </Bullet>
          <Bullet>
            <strong>Munnar:</strong> tea estates and cool hill air
          </Bullet>
          <Bullet>
            <strong>Fort Kochi:</strong> Portuguese churches, Chinese fishing nets and spice warehouses
          </Bullet>
          <Bullet>
            <strong>Thekkady:</strong> Periyar Tiger Reserve and lake cruise
          </Bullet>
          <Bullet>
            <strong>Kovalam and Trivandrum:</strong> beach sunsets and city sights
          </Bullet>
          <Bullet>
            <strong>Culture and wellness:</strong> Kathakali performances, Keralan seafood and Ayurvedic
            massage
          </Bullet>
        </ul>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Section label="Inclusions" heading="What’s Included">
          <ul className="space-y-4">
            <Bullet>Hotel accommodation for the full stay</Bullet>
            <Bullet>Daily breakfast</Bullet>
            <Bullet>Private vehicle with English-speaking driver guide</Bullet>
            <Bullet>Return airport transfers</Bullet>
            <Bullet>
              Sightseeing listed in each itinerary, such as the backwaters cruise or Kathakali show
            </Bullet>
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
          Hotel tiers run from 3-star to 5-star, and the per-person price falls as your group grows. For
          couples, the <L href="/honeymoon-holiday-guide-2026/">honeymoon holiday guide</L> shows how we
          plan romantic itineraries. Large families can also ask about{" "}
          <L href="/group-incentive-travel-packages/">group travel packages</L>. For an exact price, send
          your dates and group size via a{" "}
          <L href="/custom-itinerary-request/">custom itinerary request</L>, or check{" "}
          <L href="/promotions/">current promotions</L>. For school holidays and year-end travel, see the{" "}
          <L href="/year-end-holiday-travel-deals-2026/">year-end holiday travel deals</L>.
        </p>
      </Section>

      <Section label="Why Dhesu" heading="Why Book Your Kerala Tour with Dhesu">
        <ul className="space-y-4">
          <Bullet>
            <strong>Licensed and accredited:</strong> KKKP 1439, MATTA, IATA and PATA, since 1988. Read
            more <L href="/about-us/">about Dhesu Travel</L>.
          </Bullet>
          <Bullet>
            <strong>100% private tours:</strong> your dates, your pace, your own vehicle and guide.
          </Bullet>
          <Bullet>
            <strong>Visa guidance:</strong> we help with the India e-Visa documents on every booking.
          </Bullet>
          <Bullet>
            <strong>A real team to call:</strong> reachable throughout your trip, with a local point of
            contact on the ground.
          </Bullet>
        </ul>
      </Section>
    </>
  );
}

export function KeralaClosing() {
  return (
    <CtaSection
      heading="Plan Your Kerala Trip"
      body={
        <>
          Tell us your dates and group size for a confirmed quote.
          <span className="block mt-6 text-base italic text-white/60">
            Exploring more of India? See{" "}
            <Link href="/tours/india/all-packages/" className="underline underline-offset-4 hover:text-white">
              all India tour packages from Malaysia
            </Link>
            , including{" "}
            <Link href="/tours/india/kashmir/" className="underline underline-offset-4 hover:text-white">
              Kashmir
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
        { label: `WhatsApp us on ${whatsappDisplay}`, href: whatsappHref("tours") },
      ]}
      image="/images/gallery/16301.jpg"
    />
  );
}

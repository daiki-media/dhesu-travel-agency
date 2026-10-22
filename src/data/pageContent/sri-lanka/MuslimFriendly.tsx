"use client";

import { whatsappHref } from "@/src/lib/whatsapp";
import Link from "next/link";
import CtaSection from "@/src/components/CtaSection";
import { Bullet, DataTable, INLINE_LINK, Section } from "@/src/data/guides/primitives";

const BODY = "text-gray-600 text-[15px] leading-relaxed";
const H3 = "font-primary font-bold text-[#1a1a1a] text-xl mb-5";

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className={INLINE_LINK}>
    {children}
  </Link>
);

export function SriLankaMuslimFriendlyBody() {
  return (
    <>
      <div className="space-y-5">
        <p className={BODY}>
          Our Muslim friendly Sri Lanka tour from Malaysia is the 4 Days Beautiful Sri Lanka package.
          It&rsquo;s a 100% private tour with halal meals planned into the itinerary, prayer times kept
          in the schedule, and a mix of heritage in Kandy and cool air in Nuwara Eliya. Prices start
          from RM1,288 per person on twin sharing, and flights from Kuala Lumpur to Colombo take around
          3.5 hours.
        </p>
        <p className="font-primary font-bold text-teal-navy text-[15px]">
          <L href="/tours/sri-lanka/nuwara-eliya/4-day-muslim-friendly/">
            View the 4 Days Muslim Friendly Sri Lanka package
          </L>{" "}
          | <L href="/contact-us/#free-quote">Get a free quote</L>
        </p>
      </div>

      <Section label="Overview" heading="The package at a glance">
        <DataTable
          minWidth={480}
          headers={[]}
          rows={[
            ["Duration", "4 days, 3 nights"],
            ["Route", "Colombo, Kandy, Nuwara Eliya"],
            ["From", "RM1,288 per person (twin sharing, 3-star)"],
            ["Guide and vehicle", "Private vehicle and English-speaking guide"],
            ["Meals", "Daily breakfast and halal lunches on Days 2 and 3"],
            ["Extras", "Return airport transfers, prayer times and qiblat guidance for your dates"],
          ]}
        />
      </Section>

      <Section label="Itinerary" heading="Itinerary highlights">
        <div className="space-y-5">
          <p className={BODY}>
            <strong>Day 1, Arrive in Colombo.</strong> Your private driver collects you from
            Bandaranaike International Airport and takes you to your hotel in{" "}
            <L href="/tours/sri-lanka/colombo/">Colombo, the city where most Sri Lanka trips begin</L>.
            The evening is free. Galle Road and the area around Pettah Bazaar have halal dining, and
            Galle Face Green is a nice place for an easy walk.
          </p>
          <p className={BODY}>
            <strong>Day 2, Colombo, then Kandy.</strong> A morning city tour covers Gangaramaya Temple,
            Independence Square and Pettah Bazaar. Lunch is halal. In the afternoon you drive to{" "}
            <L href="/tours/sri-lanka/kandy/">Kandy, the last royal capital set around its lake</L>,
            stopping at the Pinnawala Elephant Orphanage on the way, where the elephants head down to
            the river for their daily bath.
          </p>
          <p className={BODY}>
            <strong>Day 3, Kandy, then Nuwara Eliya.</strong> Start with the Temple of the Sacred Tooth
            Relic and a walk around Kandy Lake. After a halal lunch you take the mountain road up to{" "}
            <L href="/tours/sri-lanka/nuwara-eliya/">Nuwara Eliya&rsquo;s tea country</L>, with a stop
            at Ramboda Falls.
          </p>
          <p className={BODY}>
            <strong>Day 4, Nuwara Eliya and departure.</strong> A tea estate visit and a stop at Gregory
            Lake. After that you head down the mountains to Colombo airport, with photo stops on the
            way. Nuwara Eliya to the airport is a long drive, so choose a late flight home.
          </p>
        </div>
      </Section>

      <Section label="Inclusions" heading="What’s included and what’s not">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className={H3}>Included</h3>
            <ul className="space-y-4">
              <Bullet>3 nights in hotels</Bullet>
              <Bullet>Daily breakfast</Bullet>
              <Bullet>Halal lunches on Days 2 and 3, as listed in the itinerary</Bullet>
              <Bullet>Return airport transfers</Bullet>
              <Bullet>100% private tour with a private vehicle and English-speaking guide</Bullet>
              <Bullet>Prayer times and qiblat guidance for your travel dates</Bullet>
            </ul>
          </div>
          <div>
            <h3 className={H3}>Not included</h3>
            <ul className="space-y-4">
              <Bullet>International flights</Bullet>
              <Bullet>Travel insurance</Bullet>
              <Bullet>Entrance fees to temples and sites</Bullet>
              <Bullet>Dinners, and any lunches not listed in the itinerary</Bullet>
              <Bullet>Personal expenses and optional tips</Bullet>
            </ul>
          </div>
        </div>
      </Section>

      <Section label="Hotels" heading="Where you’ll stay">
        <p className={`${BODY} mb-5`}>
          You spend one night each in Colombo, Kandy and Nuwara Eliya.
        </p>
        <DataTable
          headers={["Hotel level", "What you get", "From (per person, twin sharing)"]}
          rows={[
            ["3 star", "3-star hotels throughout, or similar", "RM1,288"],
            [
              "4 star (most chosen)",
              "4-star hotels throughout, with pool and mountain or city views, or similar",
              "RM1,588",
            ],
            ["5 star", "5-star hotels throughout, or similar", "RM1,988"],
          ]}
        />
        <p className={`${BODY} mt-5`}>
          Nuwara Eliya sits at about 1,900 metres, so evenings are cold. Pack a warm layer, even if
          Colombo feels tropical.
        </p>
      </Section>

      <Section label="Halal Food" heading="Halal food in Sri Lanka">
        <p className={BODY}>
          Halal food is widely available in Colombo, Kandy and Galle, and it&rsquo;s especially easy
          around Galle Road and Pettah. Our ground team works with restaurants that look after Muslim
          guests regularly, and you get a list for each stop. In the hill country the choice of
          restaurants is smaller, which is why lunch on Day 3 is arranged in advance. If this is your
          first Muslim-friendly trip with an agent,{" "}
          <L href="/muslim-friendly-holiday-travel-guide/">
            the checklist we use when planning Muslim-friendly holidays
          </L>{" "}
          shows what we confirm before booking.
        </p>
      </Section>

      <Section label="Prayer" heading="Prayer times, mosques and qiblat">
        <p className={BODY}>
          Sri Lanka runs on UTC+5:30. You get Subuh to Isyak prayer times for your travel dates with
          your booking confirmation, and your guide plans the day around them. Your hotel list shows
          the nearest masjid for each stay, and the hotels can show you the qiblat direction. In
          Colombo, the red-and-white Jami Ul-Alfar Mosque stands in Pettah, close to the bazaar. Ask
          your guide about a stop.
        </p>
      </Section>

      <Section label="Who It Suits" heading="Who this trip suits">
        <div className="space-y-5">
          <p className={BODY}>
            Families do well on this route. The stops are short, the Pinnawala elephants are a hit with
            children, and the cool hill weather is a nice change at the end. Couples can use it as a
            compact honeymoon, and the{" "}
            <L href="/honeymoon-holiday-guide-2026/">
              honeymoon destination ideas we&rsquo;ve put together for Malaysian couples
            </L>{" "}
            are useful if you want to add a beach stay afterwards. It also suits first timers who want
            Colombo, Kandy and the hills in four days without feeling rushed, and friends or colleagues
            travelling together can{" "}
            <L href="/group-incentive-travel-packages/">
              put together a private group or incentive trip
            </L>{" "}
            on the same route.
          </p>
          <p className={BODY}>
            If you&rsquo;d rather see leopards than tea estates, this isn&rsquo;t the right package, and
            the{" "}
            <L href="/tours/sri-lanka/yala-national-park/6-day-wildlife-safari/">
              6 Days Wildlife Safari in Yala National Park
            </L>{" "}
            fits better. Sigiriya also isn&rsquo;t on this route, but it is on the{" "}
            <L href="/tours/sri-lanka/sigiriya/5-day-sri-lankan-adventure/">
              5 Days Sri Lankan Adventure
            </L>
            .
          </p>
        </div>
      </Section>

      <Section label="Before You Book" heading="Good to know before you book">
        <DataTable
          minWidth={480}
          headers={[]}
          rows={[
            [
              "Visa",
              "Malaysians need an ETA before arrival. Since 25 May 2026 it has been free for Malaysian nationals, valid for 30 days with double entry. Apply on the official Sri Lanka ETA portal. Confirm before you fly.",
            ],
            [
              "Best time to go",
              <>
                December to April for Colombo, Kandy and the hills, with January to April the clearest
                for Nuwara Eliya. April is busy because of the New Year holidays. The southwest monsoon
                runs roughly May to September. If you plan to add wildlife or beaches later, the{" "}
                <L href="/tours/sri-lanka/sri-lanka-tour-travel-guide-2026/">
                  Sri Lanka planning guide that shows how each region combines
                </L>{" "}
                helps you work out how many extra days you&rsquo;d need.
              </>,
            ],
            ["Flight time from KL", "About 3.5 hours to Colombo."],
            [
              "Drive days",
              "Days 2 and 4 are the longest drives. Your private vehicle lets you stop when you need to.",
            ],
          ]}
        />
      </Section>

      <Section label="Customise" heading="Make it your own">
        <div className="space-y-5">
          <p className={BODY}>
            Four days is tight, and plenty of people stretch it. You can{" "}
            <L href="/custom-itinerary-request/">ask for a custom itinerary built around your dates</L>{" "}
            to add Sigiriya or a south coast stay. The{" "}
            <L href="/tours/sri-lanka/nuwara-eliya/4-day-little-england/">
              4 Days Little England covers a similar hill country route with Horton Plains and scenic
              train views
            </L>
            , and the{" "}
            <L href="/tours/sri-lanka/kataragama/6-day-central-south/">
              6 Days Best of Sri Lanka adds the Cultural Triangle and the south coast
            </L>
            . If you do add days, tell us your halal and prayer needs at the start, and we&rsquo;ll
            advise what can be arranged.
          </p>
          <p className={BODY}>
            Hari Raya dates fill fast, so it&rsquo;s worth looking early at the{" "}
            <L href="/raya-holiday-travel-deals-2026/">Raya holiday packages from Malaysia</L>. And if
            you&rsquo;re still comparing destinations, the{" "}
            <L href="/tours/nepal/muslim-friendly/">
              6-day Muslim-friendly Nepal tour with mountain scenery
            </L>{" "}
            starts from RM2,088 per person. Prefer to see every option first? The{" "}
            <L href="/tours/sri-lanka/">other Sri Lanka tour packages from Malaysia</L> are all in one
            place.
          </p>
        </div>
      </Section>
    </>
  );
}

export function SriLankaMuslimFriendlyClosing() {
  return (
    <CtaSection
      heading="Tell us your dates and group size, and we’ll send a confirmed quote."
      body="Get your Sri Lanka quote or message us on WhatsApp."
      actions={[
        { label: "Get your Sri Lanka quote", href: "/contact-us/#free-quote" },
        { label: "WhatsApp", href: whatsappHref("tours") },
      ]}
      image="/images/gallery/424.jpg"
    />
  );
}

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

export function NepalMuslimFriendlyBody() {
  return (
    <>
      <div className="space-y-5">
        <p className={BODY}>
          Our Muslim friendly Nepal tour from Malaysia is the 6 Days Best of Nepal, planned around
          prayer times and halal dining. You get a private vehicle and a Muslim-aware guide, so
          you&rsquo;re never chasing a coach timetable. The route covers Kathmandu, Bhaktapur, Nagarkot
          and Pokhara, and prices start from RM2,088 per person on twin sharing. Flights from Kuala
          Lumpur take about 4.5 to 5 hours.
        </p>
        <p className="font-primary font-bold text-teal-navy text-[15px]">
          <L href="/tours/nepal/kathmandu-pokhara/6-day-muslim-friendly/">
            View the 6 Days Muslim Friendly Nepal package
          </L>{" "}
          | <L href="/contact-us/#free-quote">Get a free quote</L>
        </p>
      </div>

      <Section label="Overview" heading="The package at a glance">
        <DataTable
          minWidth={480}
          headers={[]}
          rows={[
            ["Duration", "6 days, 5 nights"],
            ["Route", "Kathmandu, Bhaktapur, Nagarkot, Pokhara"],
            ["From", "RM2,088 per person (twin sharing, 3-star)"],
            ["Guide and vehicle", "Private vehicle with a Muslim-aware guide"],
            ["Meals", "Daily breakfast, plus a list of halal restaurants for lunch and dinner"],
            ["Extras", "Prayer times and qiblat guidance for your dates, return airport transfers"],
          ]}
        />
      </Section>

      <Section label="Itinerary" heading="Itinerary highlights">
        <div className="space-y-5">
          <p className={BODY}>
            <strong>Day 1, Arrive in Kathmandu.</strong> A driver meets you at Tribhuvan International
            Airport and takes you to your hotel in{" "}
            <L href="/tours/nepal/kathmandu/">the Kathmandu Valley</L>. The evening is free on purpose.
            Thamel is close by, and that&rsquo;s where you&rsquo;ll find Indian and Middle Eastern
            restaurants with halal kitchens.
          </p>
          <p className={BODY}>
            <strong>Day 2, Kathmandu&rsquo;s UNESCO sites.</strong> A full day with your private guide.
            You&rsquo;ll walk the kora around Boudhanath Stupa with pilgrims and monks, climb to
            Swayambhunath (the Monkey Temple), and see Pashupatinath from the riverbank viewpoint,
            which is how non-Hindu visitors see it. Durbar Square finishes the day. Prayer breaks are
            written into the schedule, not squeezed around it.
          </p>
          <p className={BODY}>
            <strong>Day 3, Bhaktapur and Nagarkot.</strong> Morning in medieval Bhaktapur, with its
            Durbar Square and Pottery Square. After lunch you drive up to{" "}
            <L href="/tours/nepal/nagarkot/">
              Nagarkot, the hill station with the wide Himalayan view
            </L>
            , for sunset and a night in a mountain lodge.
          </p>
          <p className={BODY}>
            <strong>Day 4, Nagarkot sunrise, then Pokhara.</strong> Up before dawn to watch the
            Himalayan arc turn gold. Then you travel to{" "}
            <L href="/tours/nepal/pokhara/">the lakeside town of Pokhara</L> for a boat ride on Phewa
            Lake and a halal dinner by the water.
          </p>
          <p className={BODY}>
            <strong>Day 5, Sarangkot and the lakeside.</strong> An early drive up Sarangkot for sunrise
            over the Annapurna range, then a boat across Phewa Lake to the World Peace Stupa. The rest
            of the day is easy, and the lakeside is flat and walkable.
          </p>
          <p className={BODY}>
            <strong>Day 6, Departure.</strong> Transfer to the airport for your flight home or onward.
          </p>
        </div>
      </Section>

      <Section label="Inclusions" heading="What’s included and what’s not">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className={H3}>Included</h3>
            <ul className="space-y-4">
              <Bullet>5 nights in hotels across Kathmandu, Nagarkot and Pokhara</Bullet>
              <Bullet>Daily breakfast</Bullet>
              <Bullet>Private vehicle and a Muslim-aware guide</Bullet>
              <Bullet>Return airport transfers</Bullet>
              <Bullet>Halal restaurant recommendations</Bullet>
              <Bullet>Prayer times and qiblat guidance for your travel dates</Bullet>
            </ul>
          </div>
          <div>
            <h3 className={H3}>Not included</h3>
            <ul className="space-y-4">
              <Bullet>International flights</Bullet>
              <Bullet>Nepal visa on arrival (USD 30 for 15 days)</Bullet>
              <Bullet>Travel insurance</Bullet>
              <Bullet>Entrance fees to temples and sites</Bullet>
              <Bullet>Lunches and dinners</Bullet>
              <Bullet>Personal expenses and optional tips</Bullet>
            </ul>
          </div>
        </div>
        <p className={`${BODY} mt-8`}>
          Lunches and dinners are paid separately, so it&rsquo;s worth budgeting for them. Eating at
          the halal restaurants on your list is usually inexpensive in Nepal.
        </p>
      </Section>

      <Section label="Hotels" heading="Where you’ll stay">
        <DataTable
          headers={["Hotel level", "What you get", "From (per person, twin sharing)"]}
          rows={[
            [
              "3 star",
              "3-star hotel in Kathmandu, Nagarkot mountain lodge, 3-star Pokhara lakeside hotel, or similar",
              "RM2,088",
            ],
            [
              "4 star (most chosen)",
              "4-star Kathmandu, Nagarkot resort, 4-star Pokhara lakeside, or similar",
              "RM2,488",
            ],
            [
              "5 star",
              "5-star Kathmandu, premium Nagarkot, 5-star Pokhara lakeside, or similar",
              "RM3,088",
            ],
          ]}
        />
        <p className={`${BODY} mt-5`}>
          Every hotel is picked for how close it is to halal food and how easy it is to work out the
          qiblat direction, and breakfast is halal-compliant. Nagarkot sits at about 2,200 metres, so
          evenings are cold even when Kathmandu feels warm. Pack a jacket.
        </p>
      </Section>

      <Section label="Halal Food" heading="Halal food in Nepal">
        <p className={BODY}>
          In Kathmandu, Thamel and Lazimpat have Indian and Middle Eastern restaurants with halal
          kitchens, and our team knows which ones are reliable. Pokhara&rsquo;s lakeside has halal and
          vegetarian options too. You get a list of verified places for each stop, so you aren&rsquo;t
          searching on your phone when you&rsquo;re hungry. At a mountain lodge in Nagarkot the menu is
          usually smaller, so tell us your needs early and we&rsquo;ll arrange it ahead of time. Halal
          availability changes a lot from one country to the next, and{" "}
          <L href="/muslim-friendly-holiday-travel-guide/">
            the checklist we use when planning Muslim-friendly holidays
          </L>{" "}
          shows what we confirm before anything is booked.
        </p>
      </Section>

      <Section label="Prayer" heading="Prayer times, mosques and qiblat">
        <p className={BODY}>
          Nepal runs on UTC+5:45. We send Subuh to Isyak prayer times for your exact travel dates with
          your booking confirmation, and your guide plans the sightseeing around them. Your hotel list
          shows the nearest masjid for each stay, and hotels can show you the qiblat direction on
          request.
        </p>
      </Section>

      <Section label="Who It Suits" heading="Who this trip suits">
        <div className="space-y-5">
          <p className={BODY}>
            Families and multi-generation groups get the most out of this one. There&rsquo;s very
            little walking, Pokhara is flat, and the private vehicle means you can stop whenever
            someone needs a rest. Couples tend to remember the Nagarkot sunrise and the boat on Phewa
            Lake longest, and if you&rsquo;re planning this as a honeymoon, the{" "}
            <L href="/honeymoon-holiday-guide-2026/">
              honeymoon destination ideas we&rsquo;ve put together for Malaysian couples
            </L>{" "}
            can help you decide what else to add. First timers like that it covers the classic circuit
            without any trekking, and bigger groups of friends or colleagues can{" "}
            <L href="/group-incentive-travel-packages/">
              arrange a private group or incentive trip along the same route
            </L>
            .
          </p>
          <p className={BODY}>
            It isn&rsquo;t the right fit if you want to trek towards Annapurna or Everest Base Camp, or
            if you&rsquo;d rather have every meal included. For the trekking side of the country, the{" "}
            <L href="/tours/nepal/">full range of Nepal tour packages from Malaysia</L> is a better
            place to start.
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
              "Malaysians can get a visa on arrival at Kathmandu airport. The package page lists USD 30 for 15 days, and longer stays cost more. We guide you through the documents. Confirm before flying.",
            ],
            [
              "Best time to go",
              <>
                October to December has the clearest skies, and March to May is the second best
                window. June to September is monsoon, when the mountains are often hidden. The{" "}
                <L href="/tours/nepal/nepal-tour-travel-guide-2026/">
                  planning guide to Nepal for Malaysian travellers
                </L>{" "}
                goes into more detail on each season.
              </>,
            ],
            ["Flight time from KL", "About 4.5 to 5 hours direct."],
            [
              "Altitude",
              "Nagarkot is about 2,200 metres. Most people feel fine, but go slowly on the first evening.",
            ],
          ]}
        />
      </Section>

      <Section label="Customise" heading="Make it your own">
        <div className="space-y-5">
          <p className={BODY}>
            If six days feels too tight or too loose, we can reshape the route. Add a night, spend less
            time in Nagarkot and more in Pokhara, or{" "}
            <L href="/custom-itinerary-request/">ask for a custom itinerary built around your dates</L>.
            The same circuit is also sold as the{" "}
            <L href="/tours/nepal/kathmandu-pokhara/6-day-best-of-nepal/">
              standard 6 Days Best of Nepal package
            </L>{" "}
            for people who don&rsquo;t need the Muslim-friendly arrangements built in, and travellers
            who want more time often look at the{" "}
            <L href="/tours/nepal/lumbini/8-day-birthplace-of-buddha/">
              8 Days Best of Nepal, which adds Lumbini, the birthplace of the Buddha
            </L>
            . Whichever you pick, tell us your halal and prayer needs when you enquire, and we&rsquo;ll
            advise what can be arranged.
          </p>
          <p className={BODY}>
            Flights and hotels fill quickly around Hari Raya, so it pays to look early at the{" "}
            <L href="/raya-holiday-travel-deals-2026/">Raya holiday packages from Malaysia</L>. And if
            you&rsquo;re still deciding between countries, the{" "}
            <L href="/tours/sri-lanka/muslim-friendly/">Muslim-friendly Sri Lanka tour</L> is shorter
            at 4 days and starts from RM1,288 per person.
          </p>
        </div>
      </Section>
    </>
  );
}

export function NepalMuslimFriendlyClosing() {
  return (
    <CtaSection
      heading="Tell us your dates, group size and any specific requirements."
      body="Get your Nepal quote or message us on WhatsApp."
      actions={[
        { label: "Get your Nepal quote", href: "/contact-us/#free-quote" },
        { label: "WhatsApp", href: whatsappHref("tours") },
      ]}
      image="/images/gallery/20.jpg"
    />
  );
}

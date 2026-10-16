"use client";

import Link from "next/link";
import CtaSection from "@/src/components/CtaSection";
import { Bullet, INLINE_LINK, Section, TripRows } from "@/src/data/guides/primitives";

const BODY = "text-gray-600 text-[15px] leading-relaxed";

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className={INLINE_LINK}>
    {children}
  </Link>
);

export function ChinaHubBody() {
  return (
    <>
      <div className="space-y-5">
        <p className={BODY}>
          That&rsquo;s where we come in. Dhesu has planned holidays for Malaysian travellers since 1988.
          Tell us your dates, your budget and how much walking your group can handle, and we&rsquo;ll
          build a China itinerary around it, with flights, hotels, guides and transfers handled by one
          team.
        </p>
        <p className="font-primary font-bold text-[15px]">
          <L href="/contact-us/#free-quote">Get a free China quote</L>
          <span className="text-gray-400"> | </span>
          <L href="/custom-itinerary-request/">Request a custom itinerary</L>
        </p>
      </div>

      <Section label="Destinations" heading="Where to go in China">
        <div className="space-y-5">
          <p className={BODY}>
            <strong>Beijing.</strong> The Great Wall, the Forbidden City, Tiananmen Square and the
            Temple of Heaven. This is imperial China, and it&rsquo;s the classic first stop.
          </p>
          <p className={BODY}>
            <strong>Shanghai.</strong> The Bund at night, the Pudong skyline, Yu Garden and some of the
            best food in the country. Shanghai feels like the future, and it sits well next to
            Beijing&rsquo;s history.
          </p>
          <p className={BODY}>
            <strong>Xi&rsquo;an.</strong> Home of the Terracotta Army, with an intact city wall you can
            cycle along. The Muslim Quarter is also one of the most famous food streets in China, which
            makes Xi&rsquo;an popular with Malaysian Muslim travellers.
          </p>
          <p className={BODY}>
            <strong>Zhangjiajie.</strong> Towering sandstone pillars, glass bridges and Tianmen
            Mountain. It&rsquo;s the landscape that inspired the floating mountains in the film Avatar.
          </p>
          <p className={BODY}>
            <strong>Chengdu and Chongqing.</strong> Pandas, hotpot and a slower, more relaxed pace in
            Chengdu. Chongqing adds steep streets, river views and a spectacular skyline at night.
          </p>
        </div>
      </Section>

      <Section label="Travel Info" heading="China travel information for Malaysians">
        <TripRows
          rows={[
            {
              label: "Visa",
              detail:
                "China and Malaysia have a mutual visa waiver in effect from 17 July 2025. Malaysian ordinary passport holders can stay up to 30 days for tourism, family visits and business, with a maximum of 90 days in any 180. Policies can change, so confirm before you book.",
            },
            {
              label: "Best time to go",
              detail:
                "April to May and September to October are the most comfortable for most cities. Summer is hot and busy. Northern winters are very cold, though that suits snow lovers.",
            },
            {
              label: "Flight time from KL",
              detail:
                "Roughly 4 hours to Guangzhou, 5 hours to Shanghai and 6 hours to Beijing. Exact times vary by airline and route.",
            },
            {
              label: "Itinerary styles",
              detail:
                "One-city breaks, two-city highlights, multi-city circuits, nature and scenery routes, and family trips.",
            },
            {
              label: "Who it suits",
              detail:
                "First timers who want a guided start, families, friend groups and anyone who likes food and history in equal measure.",
            },
          ]}
        />
      </Section>

      <Section label="Trip Length" heading="How many days do you need for China">
        <ul className="space-y-4">
          <Bullet>
            <strong>5 to 6 days, one city.</strong> Beijing alone fills this comfortably, with the Great
            Wall and the main palaces.
          </Bullet>
          <Bullet>
            <strong>8 to 9 days, two cities.</strong> The sweet spot for most first timers. Beijing and
            Xi&rsquo;an, or Beijing and Shanghai, which are about 4.5 hours apart by high-speed train.
          </Bullet>
          <Bullet>
            <strong>12 days or more, multi-city.</strong> Add Zhangjiajie, Chengdu or Chongqing and you
            start seeing how different the regions really are.
          </Bullet>
        </ul>
        <p className={`${BODY} mt-5`}>
          Want help picking? Our{" "}
          <L href="/tours/china/china-tour-travel-guide-2026/">China travel guide 2026</L> explains
          which cities to combine and what each route needs.
        </p>
      </Section>

      <Section label="Holidays" heading="Planning China around a holiday">
        <p className={BODY}>
          Many Malaysians travel in the school breaks and over year-end, and flights fill up early. Look
          at our <L href="/school-holiday-travel-deals-2026/">school holiday deals</L> and{" "}
          <L href="/year-end-holiday-travel-deals-2026/">year-end deals</L> to plan ahead. Travelling
          with colleagues? See <L href="/group-incentive-travel-packages/">group and incentive travel</L>.
          Short on days? Add a stop in <L href="/tours/hong-kong/">Hong Kong</L>.
        </p>
      </Section>

      <Section label="Why Dhesu" heading="Why book China with Dhesu">
        <p className={BODY}>
          China looks simple online and gets complicated fast. Train tickets, entry slots at popular
          sites, apps you need on your phone, and which hotels are actually near what you came to see.
          We&rsquo;re licensed by the Ministry of Tourism Malaysia (KKKP 1439) and accredited by IATA,
          PATA and MATTA, and you get one point of contact from first enquiry to the flight home. Read
          more about <L href="/why-book-with-a-travel-agent-2026/">why book with a travel agent</L>.
        </p>
      </Section>
    </>
  );
}

export function ChinaHubClosing() {
  return (
    <CtaSection
      heading="Plan Your China Trip"
      body="Tell us which part of China you want to see. Get your China quote or message us on WhatsApp."
      actions={[
        { label: "Get your China quote", href: "/contact-us/#free-quote" },
        { label: "WhatsApp", href: "https://wa.me/60193364465" },
      ]}
      image="/images/guides/shanghai-pudong.jpg"
    />
  );
}

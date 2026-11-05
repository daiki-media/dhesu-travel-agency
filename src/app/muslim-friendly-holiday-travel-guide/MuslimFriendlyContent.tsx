"use client";

import { whatsappHref, whatsappDisplay } from "@/src/lib/whatsapp";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PackageCard, SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import AllPagesHero from "@/src/components/AllPagesHero";
import Button from "@/src/components/Button";
import CtaSection from "@/src/components/CtaSection";
import LinkedFaqSection from "@/src/components/LinkedFaqSection";
import type { LinkedFaq } from "@/src/data/linkedFaq";
import type { TourPackage } from "@/src/data/tourPages/types";

/** One row of the copy's package table, rendered as a standard package card. */
export type MuslimFriendlyPackage = {
  name: string;
  /** Where the package name links (the name column of the copy). */
  nameHref: string;
  duration: string;
  price: string;
  inclusions: string;
  /** The "Direct Package Link" column of the copy. */
  packageHref: string;
  /** Card photo and tag, from the package or hub the row links to. */
  image: string;
  tag: string;
  tagColor: TourPackage["tagColor"];
};

/**
 * A copy row in the shape PackageCard reads. The card links to
 * /tours/{slug}/{pkg.slug}, so the "Direct Package Link" is split into those
 * two parts; the key inclusions go in `blurb`, the card's one-paragraph slot,
 * so they stay the copy's sentence word for word.
 */
function toCard(pkg: MuslimFriendlyPackage): { card: TourPackage; slug: string } {
  const [slug, ...rest] = pkg.packageHref.replace(/^\/tours\/|\/$/g, "").split("/");
  return {
    slug,
    card: {
      id: pkg.packageHref + pkg.name,
      slug: rest.join("/"),
      name: pkg.name,
      blurb: pkg.inclusions,
      duration: pkg.duration,
      price: pkg.price,
      priceNote: "Starting Price (MYR)",
      tag: pkg.tag,
      tagColor: pkg.tagColor,
      image: pkg.image,
    },
  };
}

const PHOTO = {
  hero: "/images/tour-types/mosque-night-istanbul.jpg",
  heroAlt: "A large mosque lit up at dusk above the water in Istanbul",
  prayer: "/images/tour-types/abu-dhabi-grand-mosque.jpg",
  prayerAlt: "The white domes of Sheikh Zayed Grand Mosque in Abu Dhabi",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BODY = "text-gray-600 text-[15px] leading-relaxed";

// ─── Copy ──────────────────────────────────────────────────────────────────────

const whyReasons: { lead: string; text: string }[] = [
  {
    lead: "Full Regulatory Accreditation (MOTAC Licence KKKP 1439):",
    text: "Operating continuously since 1988, Dhesu Travel is fully licensed by the Ministry of Tourism, Arts and Culture Malaysia (MOTAC). Our long-standing footprint ensures complete regulatory compliance, financial safety, and vetted service delivery.",
  },
  {
    lead: "Strict Halal Meal Protocols:",
    text: "We do not rely on generic assumptions. All restaurants and meal stops are selected using a strict vetting process. We prioritize establishments with recognized halal certifications, Muslim-owned kitchens, or dedicated seafood and vegetarian culinary setups prepared strictly free of alcohol and cross-contamination.",
  },
  {
    lead: "Dedicated Daily Prayer Breaks:",
    text: "Our daily itineraries are constructed around Solat schedules. Tours incorporate scheduled intervals for Subuh, Zohor, Asar, Maghrib, and Isyak at scenic local mosques, established Islamic cultural centers, or quiet, clean resting facilities with accessible wudhu amenities.",
  },
  {
    lead: "Coordinated Friday Jumu'ah Planning:",
    text: "For tours running over a Friday, travel schedules are calibrated so male congregants can fulfill Jumu'ah obligations alongside local communities at historic urban or regional masjids, providing an authentic connection with regional Muslim heritage.",
  },
  {
    lead: "Experienced Muslim-Aware Field Guides:",
    text: "Our on-the-ground drivers and tour directors are educated on Islamic dietary laws, prayer window constraints, and family privacy preferences, avoiding rushed itineraries or unvetted detour stops.",
  },
];

type BudgetPackage = {
  heading: string;
  lead: string;
  /** A bullet with an optional bold lead-in, e.g. "Delhi:". */
  points: { lead?: string; text: string }[];
};

const budgetTiers: { heading: string; text: string; packages: BudgetPackage[] }[] = [
  {
    heading: "Value Escapes (Under RM 1,500 per person)",
    text: "Our entry-tier packages are built for budget-conscious travellers, students, and young couples seeking international experiences without sacrificing dining peace of mind or spiritual comfort.",
    packages: [
      {
        heading: "Kashmir 4-Day Super Saver (From RM 1,088)",
        lead: "A concise, scenery-packed escape taking you directly to the jewel of Jammu & Kashmir. Highlights include:",
        points: [
          { text: "Staying on a traditional carved-wood cedar houseboat on the waters of Dal Lake." },
          { text: "Sunset Shikara boat rides with designated stops near waterfront prayer spots." },
          {
            text: "Day trips to Gulmarg's meadows, offering panoramic Himalayan views and accessible halal Kashmiri Wazwan dining.",
          },
        ],
      },
      {
        heading: "Sri Lanka Nuwara Eliya Highlands 4-Day Tour (From RM 1,420)",
        lead: "Designed to showcase Sri Lanka's cool interior mountains and lush Ceylon tea terraces:",
        points: [
          {
            text: "Tour through Colombo's Pettah quarter, home to the historical Red Mosque (Jami Ul-Alfar).",
          },
          {
            text: "Scenic mountain climbing to Nuwara Eliya, complete with visits to halal-friendly colonial dining spots.",
          },
          {
            text: "Visits to cascading waterfalls, botanical parks, and spice gardens with scheduled prayer breaks.",
          },
        ],
      },
      {
        heading: "Classic Bali Cultural Getaway (From RM 1,290)",
        lead: "A tropical island retreat structured around cultural sights and vetted eateries:",
        points: [
          {
            text: "Private transport through Ubud’s handicraft villages, rice terraces, and river valleys.",
          },
          {
            text: "Dining exclusively arranged at vetted halal Balinese warungs specializing in halal Bebek Betutu and grilled Jimbaran seafood.",
          },
          { text: "Daily itineraries adapted around sunset Maghrib viewpoints." },
        ],
      },
    ],
  },
  {
    heading: "Mid-Range Journeys (RM 1,500 to RM 3,000 per person)",
    text: "Our mid-tier packages balance leisure time, premium accommodation, and in-depth cultural exploration for families and small private groups.",
    packages: [
      {
        heading: "North India 5-Day Golden Triangle Muslim Circuit (From RM 1,650)",
        lead: "A classic route through India's Mughal architecture and historical heritage:",
        points: [
          {
            lead: "Delhi:",
            text: "Guided walk through Old Delhi, visiting the 17th-century Jama Masjid, followed by lunch in the historic culinary quarter of Nizamuddin.",
          },
          {
            lead: "Agra:",
            text: "Sunrise admission to the Taj Mahal and exploration of the red-sandstone Agra Fort, pausing for Zohor prayer intervals.",
          },
          {
            lead: "Jaipur:",
            text: "Visit the Amber Fort, City Palace, and local Jaipur textile bazaars, with dining coordinated at Muslim-owned hospitality partners.",
          },
        ],
      },
      {
        heading: "Nepal Kathmandu & Pokhara 6-Day Muslim-Friendly Expedition (From RM 2,180)",
        lead: "A serene mountain experience offering fresh Himalayan air and cross-cultural perspectives:",
        points: [
          {
            text: "Exploration of Kathmandu’s heritage squares, including visits to the Nepali Jame Masjid on Durbar Marg.",
          },
          { text: "Highway transit along the Trishuli River with vetted halal meal points." },
          {
            text: "Lakeside relaxation in Pokhara and dawn vistas of the Annapurna Range from Sarangkot.",
          },
        ],
      },
    ],
  },
  {
    heading: "Premium & Extended Horizons (RM 3,000+ per person)",
    text: "Designed for bucket-list journeys, multi-generational groups, and seasonal expeditions, these tours offer upgraded boutique lodging, private logistics, and comprehensive pacing.",
    packages: [
      {
        heading: "Grand Kashmir, Sonamarg & Ladakh Overland 7-Day Tour (From RM 3,450)",
        lead: "An immersive, trans-Himalayan route navigating mountain passes and ancient trading routes:",
        points: [
          {
            text: "Extended luxury houseboat lodging in Srinagar with private cooks serving hot halal meals.",
          },
          {
            text: "Glacial excursions into Sonamarg (\"Meadow of Gold\") and Pahalgam's Betaab Valley.",
          },
          {
            text: "Cultural exploration of Ladakh's Muslim communities, visiting historic high-altitude mosques in Leh alongside dramatic alpine vistas.",
          },
        ],
      },
    ],
  },
];

const highlights: { heading: string; text: string }[] = [
  {
    heading: "India: Mughal History and Himalayan Panoramas",
    text: "India features an expansive Islamic heritage dating back centuries. Our Muslim friendly tour packages across North India combine UNESCO World Heritage sites with practical logistical support. From the grandeur of the Mughal emperors in Delhi and Agra to the mountain tranquility of Srinagar, travellers experience rich cultural ties. Kashmiri cuisine, renowned for Rogan Josh, Gushtaba, and Yakhni, is inherently halal, allowing travellers to dine with confidence.",
  },
  {
    heading: "Sri Lanka: Coastal Splendour and Mountain Retreats",
    text: "Sri Lanka's close proximity to Malaysia makes it a preferred choice for short getaways. The island's long-established Sri Lankan Moor community ensures halal food stalls, restaurants, and mosques are readily accessible throughout coastal cities and high-elevation central hills. Our itineraries link Kandy's cultural sites with Nuwara Eliya's cool hills, incorporating comfortable wudhu stops and visits to prominent regional masjids.",
  },
  {
    heading: "Indonesia: Seamless Hospitality and Island Beauty",
    text: "For travelers seeking tropical comfort, Indonesia remains an easy, welcoming choice. Beyond major resort enclaves, our Bali Muslim holiday packages highlight quiet countryside villas, family-run halal establishments, and natural attractions such as Ulun Danu Beratan and Mount Batur, organized with privacy and relaxation in mind.",
  },
  {
    heading: "Nepal: Himalayan Majesty with Spiritual Consideration",
    text: "While primarily known for Hindu and Buddhist heritage, Nepal's capital of Kathmandu and the valley of Pokhara host active, welcoming Muslim communities. Dhesu Travel works closely with vetted local suppliers to ensure prayer facilities are mapped alongside nature treks, paragliding excursions, and boating outings on Phewa Lake.",
  },
];

// ─── Building blocks ───────────────────────────────────────────────────────────

function Section({
  label,
  heading,
  children,
  className = "",
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel text={label} />
          <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-6 max-w-3xl">
            {heading}
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary" aria-hidden />
      <span className={BODY}>{children}</span>
    </li>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function MuslimFriendlyContent({
  faqs,
  packages,
}: {
  faqs: LinkedFaq[];
  packages: MuslimFriendlyPackage[];
}) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <AllPagesHero
        image={PHOTO.hero}
        imageAlt={PHOTO.heroAlt}
        eyebrow="Tour Types"
        // DHS-T3: the h1 is the SEO sheet's; the DHS-T4 headline stays as a
        // sub-heading paragraph.
        title="Muslim-Friendly Tour Packages from Malaysia"
        subheading="Muslim-Friendly Tour Packages Hub: Verified Itineraries, Halal Dining, and Prayer Schedules"
        intro={
          <>
            Planning a vacation that balances spiritual obligations with seamless travel logistics
            should never feel complicated. Finding reputable halal cuisine, locating clean prayer
            facilities during long transits, and coordinating Friday Jumu&apos;ah prayers often
            require hours of meticulous research.
          </>
        }
      />

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="pt-12 lg:pt-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <p className={`${BODY} max-w-3xl`}>
            At Dhesu Travel, we design itineraries specifically tailored to the lifestyle of Muslim
            holidaymakers. Whether you are seeking snow-capped peaks in Kashmir, serene tea
            plantations in Sri Lanka, or private family villas in Bali, our Muslim travel packages
            provide end-to-end comfort, safety, and cultural enrichment.
          </p>
        </div>
      </section>

      {/* ── PACKAGES WITH PRICES ──────────────────────────────────────────── */}
      <Section
        label="Packages"
        heading="Muslim-Friendly Tour Packages with Prices"
        className="bg-white"
      >
        <p className={`${BODY} max-w-3xl mb-8`}>
          The table below highlights our most popular packages, featuring confirmed
          land-arrangement pricing, destinations, trip durations, and core package inclusions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {packages.map((pkg, i) => {
            const { card, slug } = toCard(pkg);
            return (
              <PackageCard key={card.id} pkg={card} index={i} slug={slug} nameHref={pkg.nameHref} />
            );
          })}
        </div>
      </Section>

      {/* ── WHY DHESU ─────────────────────────────────────────────────────── */}
      <Section
        label="Why Dhesu"
        heading="Why Malaysians Choose Dhesu as a Muslim-Friendly Travel Agency"
        className="bg-teal-light/40"
      >
        <p className={`${BODY} max-w-3xl mb-8`}>
          Navigating international travel requires trust, reliability, and precision. Dhesu Travel
          has served generations of Malaysian travellers, building a reputation anchored on
          operational integrity and attentive service.
        </p>
        <ul className="space-y-4 max-w-3xl">
          {whyReasons.map((reason) => (
            <Bullet key={reason.lead}>
              <strong>{reason.lead}</strong> {reason.text}
            </Bullet>
          ))}
        </ul>
        <div className="mt-10">
          <Link href="/contact-us/">
            <Button variant="light" showArrow>
              Contact Us
            </Button>
          </Link>
        </div>
      </Section>

      {/* ── BY BUDGET ─────────────────────────────────────────────────────── */}
      <Section label="By Budget" heading="Muslim-Friendly Packages by Budget" className="bg-white">
        <p className={`${BODY} max-w-3xl`}>
          Understanding trip expenses upfront allows you to plan your family getaways,
          anniversaries, or solo adventures with absolute clarity. Our packages fall into three
          distinct budgetary brackets.
        </p>
        <div className="mt-10 space-y-12">
          {budgetTiers.map((tier) => (
            <div key={tier.heading}>
              <h3 className="font-primary font-bold text-[#1a1a1a] text-xl md:text-2xl leading-snug mb-3 max-w-3xl">
                {tier.heading}
              </h3>
              <p className={`${BODY} max-w-3xl mb-6`}>{tier.text}</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {tier.packages.map((pkg) => (
                  <div
                    key={pkg.heading}
                    className="rounded-2xl border border-gray-200 bg-white p-6"
                  >
                    <h4 className="font-primary font-bold text-[#1a1a1a] text-lg leading-snug mb-3">
                      {pkg.heading}
                    </h4>
                    <p className={`${BODY} mb-4`}>{pkg.lead}</p>
                    <ul className="space-y-3">
                      {pkg.points.map((point) => (
                        <Bullet key={point.text}>
                          {point.lead && (
                            <>
                              <strong>{point.lead}</strong>{" "}
                            </>
                          )}
                          {point.text}
                        </Bullet>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── DESTINATION HIGHLIGHTS ────────────────────────────────────────── */}
      <Section
        label="Where It Works"
        heading="In-Depth Muslim-Friendly Destination Highlights"
        className="bg-teal-light/40"
      >
        <p className={`${BODY} max-w-3xl mb-8`}>
          Choosing the right destination involves matching regional conditions with your
          group&apos;s personal expectations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {highlights.map((item) => (
            <div key={item.heading}>
              <h3 className="font-primary font-bold text-[#1a1a1a] text-xl leading-snug mb-3">
                {item.heading}
              </h3>
              <p className={BODY}>{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PLANNING COMPANION ────────────────────────────────────────────── */}
      <Section label="Planning" heading="Planning Companion" className="bg-white">
        <p className={`${BODY} max-w-3xl`}>
          If you are evaluating options across different parts of Asia, our dedicated travel guide
          compares flight times, seasonal weather, and local facilities. We offer a complete
          destination guide to discover top-rated Muslim-friendly tour packages from Malaysia and
          make an informed choice for your next family holiday.
        </p>
      </Section>

      {/* ── PLATE BEFORE THE FAQ ──────────────────────────────────────────── */}
      <section className="pb-12 lg:pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="relative h-64 md:h-96 overflow-hidden rounded-2xl"
          >
            <Image
              src={PHOTO.prayer}
              alt={PHOTO.prayerAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <LinkedFaqSection faqs={faqs} heading="Frequently Asked Questions" />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      {/* Heading and body as the page had them before the DHS-T4 copy; the
          copy's own "Plan Your Trip" is the primary action. */}
      <CtaSection
        heading="Plan Your Muslim-Friendly Holiday"
        body={
          <>
            Tell us where you’d like to go, your dates and who is travelling.{" "}
            <Link href="/contact-us/" className="text-white underline underline-offset-4 hover:text-white/80">
              Request a free quote
            </Link>{" "}
            or{" "}
            <a href={whatsappHref("tours")} target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 hover:text-white/80">
              WhatsApp us on {whatsappDisplay}
            </a>
            .
          </>
        }
        actions={[
          { label: "Plan Your Trip", href: "/contact-us/" },
          { label: `WhatsApp us on ${whatsappDisplay}`, href: whatsappHref("tours") },
        ]}
      />
    </>
  );
}

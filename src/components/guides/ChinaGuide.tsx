"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";

/**
 * Body copy is taken verbatim from
 * content-document/destinations-in-asia/China Tour Packages From Malaysia_
 * Major Cities & the Great Wall.docx — the draft's own order, headings and
 * wording. The opening paragraph is not repeated here; it is the hero lead,
 * set as `intro` on src/data/destinationDetail/china.ts.
 *
 * Shape follows BaliGuide.tsx in this folder: same section devices, same type
 * sizes, same spacing. China has no packages on the site yet, so no prices,
 * durations or package names are invented beyond what the draft itself gives.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/terracotta-army.jpg";
const PHOTO_ALT = "The excavated pits of the Terracotta Army at Xi'an";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const categories = [
  {
    category: "Imperial History",
    destinations: "Beijing",
    knownFor: "The Great Wall, Forbidden City, Tiananmen Square",
  },
  {
    category: "Modern Skyline & Commerce",
    destinations: "Shanghai",
    knownFor: "The Bund, futuristic architecture, shopping",
  },
  {
    category: "Ancient Heritage",
    destinations: "Xi'an",
    knownFor: "Terracotta Warriors, ancient city walls",
  },
  {
    category: "Natural Landscapes",
    destinations: "Zhangjiajie",
    knownFor: "Dramatic sandstone pillar mountains, glass bridges",
  },
  {
    category: "Southwestern Culture",
    destinations: "Chengdu, Chongqing",
    knownFor: "Panda conservation, spicy cuisine, riverside cityscapes",
  },
  {
    category: "Northern Frontier",
    destinations: "Harbin",
    knownFor: "Winter ice festivals, distinctive Russian-influenced architecture",
  },
];

const itineraries = [
  {
    focus: "Beijing only",
    duration: "4–5 days",
    suits: "First-time visitors focused on the Great Wall and imperial history",
  },
  {
    focus: "Beijing + Xi'an",
    duration: "6–7 days",
    suits: "Travellers wanting to combine imperial history with ancient archaeology",
  },
  {
    focus: "Beijing + Shanghai",
    duration: "6–7 days",
    suits: "Travellers wanting both historical and modern China in one trip",
  },
  {
    focus: "Multi-city (Beijing, Xi'an, Zhangjiajie, Shanghai)",
    duration: "9+ days",
    suits: "Comprehensive itinerary combining history, nature, and modern city life",
  },
];

const included = [
  "Domestic transport between cities (often high-speed rail or domestic flights, given China's scale)",
  "Accommodation matched to your selected package tier",
  "Entrance fees to major sites, including the Great Wall and Terracotta Warriors",
  "Guided sightseeing with English-speaking guides at key historical sites",
  "A structured, adjustable multi-city itinerary",
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("china", "china-tour-travel-guide-2026");

/** Section wrapper: label, heading, then the body. */
function Section({
  label,
  heading,
  children,
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
    >
      <SectionLabel text={label} />
      <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-6">
        {heading}
      </h2>
      {children}
    </motion.div>
  );
}

/** List item marked with a short rule rather than an icon tile. */
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary" aria-hidden />
      <span className="text-gray-600 text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

export default function ChinaGuide() {
  return (
    <>
      <Section label="At a Glance" heading="China's major destination categories">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 pr-6 w-1/4">
                  Category
                </th>
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 pr-6">
                  Key destinations
                </th>
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3">
                  Known for
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((row) => (
                <tr key={row.category} className="border-b border-gray-200">
                  <td className="py-5 pr-6 font-primary font-bold text-[#1a1a1a] text-[15px] align-top">
                    {row.category}
                  </td>
                  <td className="py-5 pr-6 text-gray-600 text-[15px] leading-relaxed align-top">
                    {row.destinations}
                  </td>
                  <td className="py-5 text-gray-600 text-[15px] leading-relaxed align-top">
                    {row.knownFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Beijing" heading="Beijing: the Great Wall and imperial capital">
        <p className="text-gray-600 leading-relaxed">
          Beijing is undoubtedly the place where you need to start from when it comes to
          planning your first trip to China, due to its most iconic landmark, the Great Wall of
          China, the landmark that truly stands out from the rest of the world&rsquo;s
          landmarks and it is an awesome thing to see yourself walking on the Great Wall.
        </p>
      </Section>

      <Section label="Shanghai" heading="Shanghai: China's modern face">
        <p className="text-gray-600 leading-relaxed">
          Shanghai offers a complete contrast from Beijing in terms of its modernization, as it
          features China&rsquo;s future-oriented skyline with high-tech buildings that overlook
          the Huangpu River and historic Bund district. For tourists who are looking for a
          modern city experience, Shanghai with all its opportunities for shopping,
          sightseeing, and eating out is a better choice.
        </p>
      </Section>

      <Section label="Xi'an" heading="Xi'an: home of the Terracotta Warriors">
        <p className="text-gray-600 leading-relaxed">
          Xi&apos;an is a very unique city in Chinese history as one of the ancient capitals of
          the nation, and is best known to the rest of the world because of the Terracotta
          Warriors thousands of full-sized clay soldiers that were found buried in the tomb of
          China&rsquo;s first emperor.
        </p>
      </Section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="relative h-64 md:h-80 overflow-hidden rounded-2xl"
      >
        <Image
          src={PHOTO}
          alt={PHOTO_ALT}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </motion.div>

      <Section label="Zhangjiajie" heading="Zhangjiajie: China's otherworldly landscapes">
        <p className="text-gray-600 leading-relaxed">
          Zhangjiajie is one of the locations in China where those looking for scenic views and
          not the cityscape would get a great experience with the tallest sandstone pillars in
          China, which are said to have been an inspiration behind the floating mountains in
          the film Avatar. This place has become very popular with travelers as part of their
          itinerary of China.
        </p>
      </Section>

      <Section label="Southwest" heading="Chengdu and Chongqing: southwestern culture">
        <p className="text-gray-600 leading-relaxed">
          Chengdu is best known internationally for its panda conservation centres, offering
          visitors a chance to see giant pandas up close in a research-focused setting. Nearby
          Chongqing, a dramatic riverside megacity built across steep hillsides, adds a
          distinctive urban landscape alongside the region&rsquo;s famously spicy Sichuan
          cuisine.
        </p>
      </Section>

      <Section label="Visa" heading="Visa requirements for Malaysian travellers">
        <p className="text-gray-600 leading-relaxed">
          Malaysian passport holders who wish to enter into China for leisure do not need to
          get visas, since both countries have visa exemption policy for citizens of the other
          country. Nonetheless, one is advised to find out from Chinese immigration authorities
          or travel agencies whether there are any changes in visa regulations since these keep
          on varying from time to time.
        </p>
      </Section>

      <Section label="Suggested Routes" heading="Suggested itinerary combinations">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 pr-6 w-1/4">
                  Package focus
                </th>
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 pr-6">
                  Typical duration
                </th>
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3">
                  Best suited for
                </th>
              </tr>
            </thead>
            <tbody>
              {itineraries.map((row) => (
                <tr key={row.focus} className="border-b border-gray-200">
                  <td className="py-5 pr-6 font-primary font-bold text-[#1a1a1a] text-[15px] align-top">
                    {row.focus}
                  </td>
                  <td className="py-5 pr-6 text-gray-600 text-[15px] leading-relaxed align-top">
                    {row.duration}
                  </td>
                  <td className="py-5 text-gray-600 text-[15px] leading-relaxed align-top">
                    {row.suits}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Inclusions" heading="What's typically included in a China package">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="When to Go" heading="Best time to visit China">
        <p className="text-gray-600 leading-relaxed">
          China&rsquo;s size means climate varies significantly by region and season. Spring
          (April to May) and autumn (September to October) generally offer the most comfortable
          travel conditions across most of the country&rsquo;s popular destinations, avoiding
          both summer&rsquo;s intense heat in cities like Xi&apos;an and winter&rsquo;s cold in
          the north, though Harbin&rsquo;s winter ice festival is a notable seasonal exception
          worth planning around specifically.
        </p>
      </Section>

      <Section label="Good to Know" heading="Language and practical travel considerations">
        <p className="text-gray-600 leading-relaxed">
          There is great variation in the level of English language fluency in China, where the
          knowledge of English is higher in big cosmopolitan cities such as Shanghai and
          tourist spots in Beijing, and lower in small cities or even locally. The inclusion of
          guides fluent in English in your travel plans is important, especially to those
          places not very cosmopolitan. It is also important to consider the fact that some
          apps or websites used by westerners are blocked in China.
        </p>
      </Section>

      <Section label="Food" heading="Chinese cuisine across regions">
        <p className="text-gray-600 leading-relaxed">
          Like the geography of China itself, Chinese food is diverse. Different regions have
          their own cuisines that can easily catch visitors by surprise in terms of their
          variety from one another when compared to the concept of &ldquo;Chinese food&rdquo;
          that travelers might expect. In Beijing, for example, there is the roasted duck while
          Sichuan has its own well-known hot foods based in Chengdu and Chongqing. Shanghai
          also has its unique flavors which are less spicy but somewhat sweet.
        </p>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Plan your China adventure"
        body="From the Great Wall to the Terracotta Warriors to Zhangjiajie&rsquo;s otherworldly landscapes, a consultant can help you build the right multi-city itinerary. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}

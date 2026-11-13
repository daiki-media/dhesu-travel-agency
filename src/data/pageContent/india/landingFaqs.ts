import type { FaqAnswer } from "@/src/data/linkedFaq";

type LandingFaq = { question: string; answer: FaqAnswer };

export const goldenTriangleFaqs: LandingFaq[] = [
  {
    question: "How many days do I need for the Golden Triangle?",
    answer:
      "Five days is the minimum for Delhi, Agra and Jaipur without rushing. Seven days adds a second night in each city or a stop such as Amritsar. Nine to ten days lets you add Shimla or Manali.",
  },
  {
    question: "Do Malaysians need a visa for India?",
    answer:
      "Yes. A 30-day e-Visa applies, and the visa fee is not included in the package price. We guide you through the documents when you book.",
  },
  {
    question: "What is the best time to visit the Golden Triangle?",
    answer:
      "October to March is the most comfortable, with cooler weather for sightseeing. April to June gets very hot, so plan for early starts if you travel then.",
  },
  {
    question: "Is the Taj Mahal sunrise included?",
    answer:
      "Yes, the Taj Mahal sunrise is part of the main Golden Triangle packages. Check the itinerary of your chosen package for the exact day.",
  },
  {
    question: "Are Muslim-friendly options available?",
    answer: "Yes. The 5 day Muslim Friendly package includes halal meals.",
  },
  {
    question: "Can I customize a package?",
    answer:
      "Yes. Hotel category, trip length, activities and pace can all be adjusted. Send us a custom itinerary request.",
  },
  {
    question: "How much does a Golden Triangle tour from Malaysia cost?",
    answer:
      "Packages start from RM1,388 per person for 5 days and go up to RM3,998 for the 9 day Golden Triangle with Kashmir. Price depends on hotel tier, group size and travel dates.",
  },
];

export const kashmirFaqs: LandingFaq[] = [
  {
    question: "How many days do I need for Kashmir?",
    answer:
      "Four days covers Srinagar and a houseboat stay. Five to seven days adds Gulmarg and Pahalgam. Twelve days lets you continue by road to Leh.",
  },
  {
    question: "Do Malaysians need a visa?",
    answer:
      "Yes. A 30-day e-Visa applies, and the fee is not included in the package price. We guide you through the documents.",
  },
  {
    question: "Is Kashmir safe for tourists?",
    answer:
      "Conditions in the region can change. Check the latest travel advisory from Malaysia’s Ministry of Foreign Affairs before you book, and speak to our team about conditions on your travel dates.",
  },
  {
    question: "Is there a Kashmir package with flights included?",
    answer: "The 7 day Varanasi and Kashmir package includes domestic flights.",
  },
  {
    question: "How do I fly from Kuala Lumpur to Srinagar?",
    answer:
      "There is no nonstop flight, so you connect through Delhi, Mumbai or Chennai, with Delhi the most common. Expect roughly 10 to 14 hours in total, including the layover. Flights are not in the package price, so send us your dates and we will plan the land part around your arrival.",
  },
  {
    question: "Is Kashmir snow season good for Malaysians?",
    answer: [
      "Yes, and for many Malaysians it is their first real snow. It usually settles from late December to February, with January often the heaviest, mostly around Gulmarg and the ",
      {
        text: "5 day Kashmir ski resort and cable car package",
        href: "/tours/india/kashmir/5-day-ski-resort-cable-car/",
      },
      ". Snow is the draw then, but the ",
      { text: "best time to visit Kashmir", href: "/blog/best-time-to-visit-kashmir/" },
      " depends on whether you want ski slopes, tulips or golden chinar leaves.",
    ],
  },
  {
    question: "Can I skip the Taj Mahal and just do Kashmir?",
    answer: "Yes. The Super Saver, Ski Resort and Exclusive Escape packages are Kashmir only.",
  },
  {
    question: "Can I customize my Kashmir trip?",
    answer: "Yes. Send a custom itinerary request with your dates and group size.",
  },
  {
    question: "How much does a Kashmir tour from Malaysia cost?",
    answer:
      "Packages start from RM1,088 per person for 4 days and run up to RM5,988 for the 12 day road trip to Leh.",
  },
  // DHE-04: the two FAQs of the snow-season copy, as written.
  {
    question: "How much is a Kashmir trip from Malaysia?",
    answer: [
      "A 4-day private land package in Kashmir starts from RM1,088 per person (twin sharing), while 5-day to 8-day snow and multi-city packages typically range from RM1,388 to RM2,488 per person depending on hotel tier and season, excluding return international flights from Kuala Lumpur. For a full breakdown of flight fares, Gondola tickets, seasonal budgets, and visa fees, read our guide on ",
      { text: "Kashmir trip cost from Malaysia", href: "/blog/kashmir-trip-cost-from-malaysia/" },
      ".",
    ],
  },
  {
    question: "Is Kashmir safe and open for Malaysian tourists in 2026?",
    answer:
      "Yes, the main tourist circuit in the Kashmir Valley—including Srinagar, Dal Lake, Gulmarg, Pahalgam, and Sonamarg—is open to international and Malaysian travellers in 2026, with regular daily flights operating from New Delhi and Mumbai into Srinagar Airport. Before travelling, Malaysian citizens should check the latest travel advisories issued by the Ministry of Foreign Affairs Malaysia (Wisma Putra) and register their itinerary via the e-Konsular portal. While local tourist zones maintain visible security and Dhesu Travel operates with vetted local drivers and licensed guides, travellers should follow local weather and road advisories, especially during heavy winter snowfall.",
  },
];

export const varanasiFaqs: LandingFaq[] = [
  {
    question: "How many days do I need for Varanasi?",
    answer:
      "Three days covers the aarti, a boat ride and the ghats. Four to five days adds Sarnath, Prayagraj or Ayodhya.",
  },
  {
    question: "Do Malaysians need a visa for India?",
    answer:
      "Yes. A 30-day e-Visa applies, and the fee is not included in the package price. We guide you through the documents.",
  },
  {
    question: "Is the Ganga Aarti included?",
    answer: "Yes. It features in every Varanasi package listed above.",
  },
  {
    question: "Which package includes domestic flights?",
    answer: "The 4 day Varanasi package with domestic flights, and the 7 day Varanasi and Kashmir package.",
  },
  {
    question: "Is Varanasi suitable for seniors?",
    answer:
      "Many travellers of all ages visit. The ghats involve steps and uneven ground, so tell us about mobility needs and we will plan the pace accordingly.",
  },
  {
    question: "Can I add Ayodhya or Rishikesh?",
    answer:
      "Yes. The 5 day and 6 day packages already include them, and other itineraries can be customized through a custom itinerary request.",
  },
  {
    question: "How much does a Varanasi tour from Malaysia cost?",
    answer:
      "Packages start from RM698 per person for 3 days and run up to RM4,688 for the 7 day Varanasi and Kashmir combination.",
  },
];

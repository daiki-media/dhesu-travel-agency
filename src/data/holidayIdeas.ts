// The themed and seasonal pages. Images are each page's own Open Graph image
// so the homepage carousel and the page a card opens onto match.
export type HolidayIdea = {
  label: string;
  href: string;
  image: string;
  blurb: string;
};

export const holidayIdeas: HolidayIdea[] = [
  {
    label: "Muslim-Friendly Tours",
    href: "/muslim-friendly-holiday-travel-guide",
    image: "/images/tour-types/mosque-night-istanbul.jpg",
    blurb: "Halal-conscious itineraries with prayer-friendly scheduling.",
  },
  {
    label: "Group & Incentive Travel",
    href: "/group-incentive-travel-packages",
    image: "/images/tour-types/resort-grounds.jpg",
    blurb: "Corporate packages that reward and build teams.",
  },
  {
    label: "Star Cruise Packages",
    href: "/star-cruise-holiday-guide-2026",
    image: "/images/tour-types/cruise-approaching-port.jpg",
    blurb: "Cabin, meals and entertainment in one price.",
  },
  {
    label: "School Holiday Deals 2026",
    href: "/school-holiday-travel-deals-2026",
    image: "/images/seasonal/theme-park-family.jpg",
    blurb: "Family packages while availability lasts.",
  },
  {
    label: "Year-End Deals 2026",
    href: "/year-end-holiday-travel-deals-2026",
    image: "/images/seasonal/winter-ice-festival.jpg",
    blurb: "Malaysia's busiest travel window, planned early.",
  },
  {
    label: "Raya Holiday Packages",
    href: "/raya-holiday-travel-deals-2026",
    image: "/images/seasonal/ortakoy-mosque.jpg",
    blurb: "Festive travel made Muslim-friendly.",
  },
  {
    label: "Current Promotions",
    href: "/promotions",
    image: "/images/tour-types/theme-beach-relaxation.jpg",
    blurb: "Travel package deals from Malaysia.",
  },
];

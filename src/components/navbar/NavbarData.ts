export interface NavItem {
  label: string;
  href: string;
}

export interface NavColumn {
  heading: string;
  items: NavItem[];
}

export interface NavLink {
  label: string;
  href: string;
  columns?: NavColumn[]; // multi-column mega-menu
  simple?: NavItem[];    // single-column dropdown
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },

  {
    label: "Destinations",
    href: "/tours",
    columns: [
      {
        heading: "Southeast Asia",
        items: [
          { label: "Bali", href: "/tours/bali" },
          { label: "Indonesia", href: "/tours/indonesia" },
          { label: "Thailand", href: "/tours/thailand" },
          { label: "Vietnam", href: "/tours/vietnam" },
          { label: "Cambodia", href: "/tours/cambodia" },
          { label: "Malaysia", href: "/tours/malaysia" },
          { label: "Philippines", href: "/tours/philippines" },
          { label: "Laos", href: "/tours/laos" },
          { label: "All Southeast Asia", href: "/tours/southeast-asia" },
        ],
      },
      {
        heading: "South Asia",
        items: [
          { label: "India", href: "/tours/india" },
          { label: "Sri Lanka", href: "/tours/sri-lanka" },
          { label: "Nepal", href: "/tours/nepal" },
          { label: "Bhutan", href: "/tours/bhutan" },
          { label: "Maldives", href: "/tours/maldives" },
        ],
      },
      {
        heading: "Middle East & Africa",
        items: [
          { label: "Dubai & UAE", href: "/tours/dubai-uae" },
          { label: "Egypt", href: "/tours/egypt" },
          { label: "Africa", href: "/tours/africa" },
          { label: "Turkey & Greece", href: "/tours/turkey-greece" },
        ],
      },
      {
        heading: "Far East & Pacific",
        items: [
          { label: "China", href: "/tours/china" },
          { label: "South Korea", href: "/tours/south-korea" },
          { label: "Japan", href: "/tours/japan" },
          { label: "Australia", href: "/tours/australia" },
        ],
      },
      {
        heading: "Europe & Americas",
        items: [
          { label: "Europe", href: "/tours/europe" },
          { label: "Canada", href: "/tours/canada" },
        ],
      },
    ],
  },

  {
    label: "Tour Packages",
    href: "/tours",
    columns: [
      {
        heading: "By Interest",
        items: [
          { label: "Honeymoon Packages", href: "/tours/honeymoon-packages" },
          { label: "Muslim Friendly Tours", href: "/tours/muslim-friendly-tours" },
          { label: "Group Tours", href: "/tours/group-tours" },
          { label: "All-Inclusive Holidays", href: "/tours/all-inclusive-holidays" },
          { label: "Incentive Travel", href: "/incentive-travel" },
        ],
      },
      {
        heading: "Popular Bali Tours",
        items: [
          { label: "3D Bali Super Saver", href: "/tours/bali/3-day-bali-super-saver" },
          { label: "4D Best of Bali", href: "/tours/bali/4-day-best-of-bali" },
          { label: "4D Bali Honeymoon Villa", href: "/tours/bali/4-day-bali-honeymoon-pool-villa" },
          { label: "5D Bali Bliss", href: "/tours/bali/5-day-bali-bliss" },
          { label: "4D Gates of Heaven", href: "/tours/bali/4-day-gates-of-heaven" },
          { label: "View All Bali Tours", href: "/tours/bali" },
        ],
      },
      {
        heading: "Popular India Tours",
        items: [
          { label: "Golden Triangle", href: "/tours/india/golden-triangle" },
          { label: "Kerala", href: "/tours/india/kerala" },
          { label: "Kashmir", href: "/tours/india/kashmir" },
          { label: "Spiritual India", href: "/tours/india/spiritual-india" },
          { label: "9D Shimla Manali", href: "/tours/india/north-india/9-day-shimla-manali" },
          { label: "View All India Tours", href: "/tours/india" },
        ],
      },
      {
        heading: "Popular Indonesia Tours",
        items: [
          { label: "Yogyakarta Best Seller", href: "/tours/indonesia/yogyakarta/4-day-yogyakarta-best-seller" },
          { label: "Bromo Sunrise", href: "/tours/indonesia/surabaya-bromo/4-day-bromo-sunrise" },
          { label: "Lake Toba", href: "/tours/indonesia/medan-lake-toba/3-day-lake-toba" },
          { label: "Lombok Island", href: "/tours/indonesia/lombok/3-day-lombok-island" },
          { label: "Jakarta Bandung Whoosh", href: "/tours/indonesia/jakarta-bandung/4-day-whoosh-bullet-train" },
          { label: "View All Indonesia", href: "/tours/indonesia" },
        ],
      },
    ],
  },

  {
    label: "Blog",
    href: "/blog",
    simple: [
      { label: "All Articles", href: "/blog" },
      { label: "Best Time to Visit Bali", href: "/blog/best-time-to-visit-bali-from-malaysia" },
      { label: "Bali vs Thailand Honeymoon", href: "/blog/bali-vs-thailand-honeymoon" },
      { label: "India Visa for Malaysians", href: "/blog/india-visa-for-malaysians" },
      { label: "Things to Do in Cappadocia", href: "/blog/things-to-do-in-cappadocia" },
      { label: "Sri Lanka 7-Day Itinerary", href: "/blog/sri-lanka-7-day-itinerary" },
      { label: "Nepal Trekking Guide", href: "/blog/nepal-trekking-guide-for-malaysians" },
    ],
  },

  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];
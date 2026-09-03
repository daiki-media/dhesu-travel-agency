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
          { label: "Bali & Indonesia", href: "/tours/indonesia" },
          { label: "Vietnam", href: "/tours/vietnam" },
          { label: "Cambodia", href: "/tours/cambodia" },
          { label: "Malaysia", href: "/tours/malaysia" },
          { label: "Laos", href: "/tours/laos" },
          { label: "Thailand", href: "/tours/thailand" },
          {
            label: "Phuket & Krabi",
            href: "/tours/thailand/phuket-krabi-holiday-guide-2026",
          },
          { label: "Myanmar", href: "/tours/myanmar" },
        ],
      },
      {
        heading: "South Asia",
        items: [
          { label: "India", href: "/tours/india" },
          { label: "Sri Lanka", href: "/tours/sri-lanka" },
          { label: "Nepal", href: "/tours/nepal" },
          { label: "Bhutan", href: "/tours/bhutan" },
        ],
      },
      // These three columns were placeholders for destinations with no page.
      // The Holiday Idea plan built them as standalone package pages rather
      // than /tours/* hubs, so they point there.
      {
        heading: "Far East & Pacific",
        items: [
          { label: "China", href: "/tours/china" },
          { label: "Hong Kong", href: "/tours/hong-kong" },
          { label: "Australia", href: "/tours/australia" },
        ],
      },
      {
        heading: "Middle East & Beyond",
        items: [
          { label: "Dubai", href: "/tours/dubai" },
          { label: "Mauritius", href: "/tours/mauritius" },
          { label: "Europe", href: "/tours/europe" },
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
          { label: "Muslim Friendly — Nepal", href: "/tours/nepal/muslim-friendly" },
          { label: "Muslim Friendly — Sri Lanka", href: "/tours/sri-lanka/muslim-friendly" },
          { label: "Romantic Pool Villa Escape", href: "/tours/indonesia/bali/4-day-romantic-escape-pool-villa" },
          { label: "Buddhist Pilgrimage", href: "/tours/india/north-india/11-day-buddhist-pilgrimage" },
          { label: "Wildlife Safari", href: "/tours/sri-lanka/yala-national-park/6-day-wildlife-safari" },
        ],
      },
      {
        heading: "Popular Bali Tours",
        items: [
          {
            label: "Bali Holiday Guide",
            href: "/tours/indonesia/bali-holiday-travel-guide-2026",
          },
          { label: "3D Bali Super Saver", href: "/tours/indonesia/bali/3-day-super-saver" },
          { label: "4D Best of Bali", href: "/tours/indonesia/bali/4-day-best-of-bali" },
          { label: "4D Romantic Pool Villa", href: "/tours/indonesia/bali/4-day-romantic-escape-pool-villa" },
          { label: "5D Bali Bliss", href: "/tours/indonesia/bali/5-day-bliss-temples-highlands-sunset" },
          { label: "4D Gates of Heaven", href: "/tours/indonesia/bali/4-day-gates-of-heaven" },
          { label: "View All Bali Tours", href: "/tours/indonesia/bali" },
        ],
      },
      {
        heading: "Popular India Tours",
        items: [
          { label: "Golden Triangle", href: "/tours/india/golden-triangle" },
          { label: "Kerala", href: "/tours/india/kerala" },
          { label: "Kashmir", href: "/tours/india/kashmir" },
          { label: "Varanasi", href: "/tours/india/varanasi" },
          { label: "9D Shimla Manali", href: "/tours/india/north-india/9-day-shimla-manali" },
          { label: "View All India Tours", href: "/tours/india" },
        ],
      },
      {
        heading: "Popular Indonesia Tours",
        items: [
          { label: "Yogyakarta Best Seller", href: "/tours/indonesia/yogyakarta/4-day-best-seller-borobudur" },
          { label: "Bromo Sunrise", href: "/tours/indonesia/surabaya-bromo/4-day-bromo-sunrise-adventure" },
          { label: "Lake Toba", href: "/tours/indonesia/medan-lake-toba/3-day-lake-toba" },
          { label: "Lombok Island", href: "/tours/indonesia/lombok/3-day-lombok-island" },
          { label: "Jakarta Bandung Whoosh", href: "/tours/indonesia/jakarta-bandung/4-day-whoosh-bullet-train" },
          { label: "View All Indonesia", href: "/tours/indonesia" },
        ],
      },
      {
        heading: "By Type & Season",
        items: [
          // The honeymoon row in the content sheet was split into one guide per
          // destination; this links the comparison page that weighs them up.
          {
            label: "Honeymoon Ideas",
            href: "/tours/mauritius/honeymoon-holiday-guide-2026",
          },
          {
            label: "Muslim-Friendly Tours",
            href: "/muslim-friendly-holiday-travel-guide/",
          },
          {
            label: "Group & Incentive Travel",
            href: "/group-incentive-travel-packages/",
          },
          {
            label: "Star Cruise Packages",
            href: "/star-cruise-holiday-guide-2026/",
          },
          {
            label: "School Holiday Deals",
            href: "/school-holiday-travel-deals-2026/",
          },
          {
            label: "Year-End Holiday Deals",
            href: "/year-end-holiday-travel-deals-2026/",
          },
          {
            label: "Raya Holiday Deals",
            href: "/raya-holiday-travel-deals-2026/",
          },
        ],
      },
    ],
  },

  // Restored: /blog and its six article routes now exist.
  // Labels here are shortened for menu width — the full SEO titles live in
  // src/data/pageSeo.ts and are what the pages themselves render.
  {
    label: "Blog",
    href: "/blog",
    simple: [
      {
        label: "Best Time to Visit Bali",
        href: "/blog/best-time-to-visit-bali-2026/",
      },
      {
        label: "Visa Guide for Malaysians",
        href: "/blog/malaysia-travel-visa-guide-2026/",
      },
      {
        label: "Budget Family Travel Tips",
        href: "/blog/budget-family-travel-tips-2026/",
      },
      {
        label: "Tropical Packing Guide",
        href: "/blog/tropical-holiday-packing-guide/",
      },
      { label: "Halal Travel Guide", href: "/blog/halal-travel-guide-malaysia/" },
      {
        label: "Solo vs Group Travel",
        href: "/blog/solo-vs-group-travel-guide/",
      },
      { label: "All Articles", href: "/blog/" },
    ],
  },

  {
    label: "About Us",
    href: "/about-us",
    simple: [
      { label: "About Dhesu Travel", href: "/about-us" },
      {
        label: "Why Book With a Travel Agent",
        href: "/why-book-with-a-travel-agent-2026/",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    simple: [
      { label: "Contact Us", href: "/contact" },
      { label: "Request a Custom Itinerary", href: "/custom-itinerary-request/" },
      { label: "Current Promotions", href: "/promotions/" },
    ],
  },
];
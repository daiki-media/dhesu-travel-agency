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
      // {
      //   heading: "Middle East & Africa",
      //   items: [
      //     // { label: "Dubai & UAE", href: "/tours/dubai-uae" },
      //     // { label: "Egypt", href: "/tours/egypt" },
      //     // { label: "Africa", href: "/tours/africa" },
      //     // { label: "Turkey & Greece", href: "/tours/turkey-greece" },
      //   ],
      // },
      // {
      //   heading: "Far East & Pacific",
      //   items: [
      //     // { label: "China", href: "/tours/china" },
      //     // { label: "South Korea", href: "/tours/south-korea" },
      //     // { label: "Japan", href: "/tours/japan" },
      //     // { label: "Australia", href: "/tours/australia" },
      //   ],
      // },
      // {
      //   heading: "Europe & Americas",
      //   items: [
      //     // { label: "Europe", href: "/tours/europe" },
      //     // { label: "Canada", href: "/tours/canada" },
      //   ],
      // },
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
    ],
  },

  // NOTE: a "Blog" menu previously lived here, but /blog and its article pages
  // were never built. Restore this block once real articles exist.

  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];
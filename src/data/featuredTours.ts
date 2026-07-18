// Flagship packages surfaced on the homepage. Every `href` below points at a
// real generated route, and prices are taken from each package's quickFacts.

export interface FeaturedTour {
  name: string;
  location: string;
  href: string;
  duration: string;
  groupSize: string;
  price: string;
  originalPrice: string;
  image: string;
  badge: string;
}

export const featuredTours: FeaturedTour[] = [
  {
    name: "4 Days Best of Bali",
    location: "Bali, Indonesia",
    href: "/tours/indonesia/bali/4-day-best-of-bali",
    duration: "4 Days / 3 Nights",
    groupSize: "100% Private",
    price: "RM988",
    originalPrice: "RM1,238",
    image: "/images/gallery/16473.png",
    badge: "Bestseller",
  },
  {
    name: "3 Days Hanoi & Halong Bay",
    location: "North Vietnam",
    href: "/tours/vietnam/north-vietnam/3-day-hanoi-halong-bay-super-saver",
    duration: "3 Days / 2 Nights",
    groupSize: "100% Private",
    price: "RM688",
    originalPrice: "RM860",
    image: "/images/gallery/16404.jpg",
    badge: "Super Saver",
  },
  {
    name: "5 Days Golden Triangle",
    location: "North India",
    href: "/tours/india/north-india/5-day-golden-triangle",
    duration: "5 Days / 4 Nights",
    groupSize: "100% Private",
    price: "RM1,388",
    originalPrice: "RM1,666",
    image: "/images/gallery/12300.jpg",
    badge: "Popular",
  },
  {
    name: "3 Days Angkor & Khmer Empire",
    location: "Siem Reap, Cambodia",
    href: "/tours/cambodia/siem-reap/3-day-angkor-khmer-empire",
    duration: "3 Days / 2 Nights",
    groupSize: "100% Private",
    price: "RM888",
    originalPrice: "RM1,066",
    image: "/images/gallery/14632.jpg",
    badge: "",
  },
  {
    name: "5 Days Sri Lankan Adventure",
    location: "Sigiriya, Sri Lanka",
    href: "/tours/sri-lanka/sigiriya/5-day-sri-lankan-adventure",
    duration: "5 Days / 4 Nights",
    groupSize: "100% Private",
    price: "RM1,688",
    originalPrice: "RM2,026",
    image: "/images/gallery/87.jpg",
    badge: "",
  },
  {
    name: "6 Days Best of Nepal",
    location: "Kathmandu & Pokhara",
    href: "/tours/nepal/kathmandu-pokhara/6-day-best-of-nepal",
    duration: "6 Days / 5 Nights",
    groupSize: "100% Private",
    price: "RM1,988",
    originalPrice: "RM2,386",
    image: "/images/gallery/43.jpg",
    badge: "",
  },
  {
    name: "3 Days Best of KK & Kundasang",
    location: "Sabah, Malaysia",
    href: "/tours/malaysia/sabah/3-day-best-of-kk-kundasang",
    duration: "3 Days / 2 Nights",
    groupSize: "100% Private",
    price: "RM1,098",
    originalPrice: "RM1,373",
    image: "/images/gallery/14253.jpg",
    badge: "",
  },
  {
    name: "6 Days Kingdom of Happiness",
    location: "Paro & Thimphu, Bhutan",
    href: "/tours/bhutan/paro-thimphu/6-day-kingdom-of-happiness",
    duration: "6 Days / 5 Nights",
    groupSize: "100% Private",
    price: "RM4,488",
    originalPrice: "RM5,386",
    image: "/images/gallery/16215.jpg",
    badge: "Featured",
  },
];

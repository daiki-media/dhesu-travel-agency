// Real destinations that have live hub pages under /tours/[slug].
// `tourCount` reflects the number of package pages actually generated for each
// destination — keep it in sync when packages are added or removed.

export interface Destination {
  slug: string;
  name: string;
  region: string;
  href: string;
  image: string;
  tourCount: number;
  fromPrice: string;
  blurb: string;
}

export const destinations: Destination[] = [
  {
    slug: "indonesia",
    name: "Bali & Indonesia",
    region: "Southeast Asia",
    href: "/tours/indonesia",
    image: "/images/gallery/12615.jpg",
    tourCount: 27,
    fromPrice: "RM398",
    blurb: "Uluwatu sunsets, Ubud rice terraces, Borobudur at sunrise and Nusa Penida's sea cliffs.",
  },
  {
    slug: "india",
    name: "India",
    region: "South Asia",
    href: "/tours/india",
    image: "/images/gallery/14634.png",
    tourCount: 63,
    fromPrice: "RM1,388",
    blurb: "Golden Triangle, Kerala backwaters, Kashmir valleys and the temple trails of the south.",
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    region: "Southeast Asia",
    href: "/tours/vietnam",
    image: "/images/gallery/14885.jpg",
    tourCount: 19,
    fromPrice: "RM688",
    blurb: "Halong Bay karsts, Hoi An lanterns, Sapa terraces and Phu Quoc's island beaches.",
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    region: "South Asia",
    href: "/tours/sri-lanka",
    image: "/images/gallery/87.jpg",
    tourCount: 12,
    fromPrice: "RM1,688",
    blurb: "Sigiriya rock fortress, Kandy's tooth temple, hill country tea estates and Yala safaris.",
  },
  {
    slug: "nepal",
    name: "Nepal",
    region: "South Asia",
    href: "/tours/nepal",
    image: "/images/gallery/43.jpg",
    tourCount: 8,
    fromPrice: "RM1,988",
    blurb: "Kathmandu's temple squares, Pokhara lakes, Nagarkot sunrises and Chitwan safaris.",
  },
  {
    slug: "cambodia",
    name: "Cambodia",
    region: "Southeast Asia",
    href: "/tours/cambodia",
    image: "/images/gallery/16458.jpg",
    tourCount: 5,
    fromPrice: "RM888",
    blurb: "Angkor Wat at sunrise, the Khmer Empire's temple cities and the Tonle Sap lake villages.",
  },
  {
    slug: "bhutan",
    name: "Bhutan",
    region: "South Asia",
    href: "/tours/bhutan",
    image: "/images/gallery/16220.jpg",
    tourCount: 4,
    fromPrice: "RM4,488",
    blurb: "Tiger's Nest monastery, Paro and Thimphu valleys, and the Himalayan kingdom of happiness.",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    region: "Southeast Asia",
    href: "/tours/malaysia",
    image: "/images/gallery/12139.jpg",
    tourCount: 4,
    fromPrice: "RM1,098",
    blurb: "Wild Borneo — Kota Kinabalu, Kundasang highlands, Mari Mari village and island snorkelling.",
  },
  {
    slug: "laos",
    name: "Laos",
    region: "Southeast Asia",
    href: "/tours/laos",
    image: "/images/gallery/16469.jpg",
    tourCount: 1,
    fromPrice: "RM1,288",
    blurb: "Luang Prabang's alms giving, Vientiane's stupas and the sacred Laos rail journey.",
  },
];

export const totalTours = destinations.reduce((sum, d) => sum + d.tourCount, 0);

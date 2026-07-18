// Single source of truth for Dhesu's corporate + contact details.
// Sourced from holidayidea.com.my (the live promo site) and the legacy
// dhesu.travel / holidayidea contact pages.

export const company = {
  legalName: "DHESU Travel & Tours (M) Sdn Bhd",
  tradingName: "Dhesu Travel & Tours",
  companyNo: "171323K",
  licenseNo: "KKKP 1439",
  foundedYear: 1988,

  philosophy:
    "We aim to offer our customers the widest range of travel services at highly competitive prices.",

  address: {
    line1: "Level 2 & 3, Wisma Dhesu",
    line2: "No. 5, Jalan Bangsar Utama 3",
    city: "Kuala Lumpur",
    postcode: "59000",
    country: "Malaysia",
    full: "Level 2 & 3, Wisma Dhesu, No. 5, Jalan Bangsar Utama 3, 59000 Kuala Lumpur, Malaysia",
    lat: 3.1279205,
    lng: 101.6771962,
  },

  phones: [
    { label: "Office", display: "+603 2287 5525", tel: "+60322875525" },
    { label: "Mobile", display: "+6019 336 4465", tel: "+60193364465" },
    { label: "Mobile", display: "+6019 263 8877", tel: "+60192638877" },
  ],

  whatsapp: [
    { display: "+6019 336 4465", number: "60193364465" },
    { display: "+6019 263 8877", number: "60192638877" },
  ],

  emails: [
    { label: "General enquiries", address: "info@dhesu.travel" },
    { label: "Tours & bookings", address: "tours@dhesu.travel" },
  ],

  hours: [
    { days: "Monday – Friday", time: "9.00 am – 5.30 pm", closed: false },
    { days: "Saturday", time: "9.00 am – 1.00 pm", closed: false },
    { days: "Sunday", time: "Closed", closed: true },
    { days: "Public Holidays", time: "Closed", closed: true },
  ],

  socials: {
    facebook: "https://www.facebook.com/holidayidea",
  },

  // Industry bodies Dhesu is accredited with.
  accreditations: [
    {
      abbr: "IATA",
      name: "International Air Transport Association",
      description:
        "The governing travel trade body internationally — accredited for airline ticketing.",
    },
    {
      abbr: "PATA",
      name: "Pacific Area Travel Association",
      description:
        "Membership of the leading Asia-Pacific travel and tourism association.",
    },
    {
      abbr: "MATTA",
      name: "Malaysian Association of Tour & Travel Agents",
      description:
        "Member of Malaysia's national association of licensed tour and travel agents.",
    },
    {
      abbr: "KKKP 1439",
      name: "Ministry of Tourism Malaysia",
      description:
        "Licensed for Inbound Tours, Outbound Tours and Airline Ticketing.",
    },
  ],
} as const;

export type Company = typeof company;

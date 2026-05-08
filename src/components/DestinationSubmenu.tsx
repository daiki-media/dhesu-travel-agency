"use client"
import React from "react";
import { motion } from "framer-motion";

interface DestinationLink {
  name: string;
  url: string;
}

interface DestinationCategory {
  title: string;
  url?: string;
  destinations: DestinationLink[];
}

const destinationData: DestinationCategory[] = [
  {
    title: "South Korea",
    destinations: [
      { name: "Seoul", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Seoul&c=98" },
      { name: "Busan", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Busan&c=98" },
      { name: "Jeju Island", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Jeju Island&c=98" }
    ]
  },
  {
    title: "Africa",
    destinations: [
      { name: "Kenya", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Kenya&c=94" },
      { name: "South Africa", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=South Africa&c=94" }
    ]
  },
  {
    title: "Cambodia",
    destinations: [
      { name: "Siem Reap", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Siem Reap&c=75" },
      { name: "Phnom Penh", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Phnom Penh&c=75" }
    ]
  },
  {
    title: "Europe & Canada",
    destinations: [
      { name: "London Paris Amsterdam", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=London Paris Amsterdam&c=92" },
      { name: "Prague Vienna Budapest", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Prague Vienna Budapest&c=92" },
      { name: "Venice Rome Florence", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Venice Rome Florence&c=92" },
      { name: "Zurich Lucerne Bern", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Zurich Lucerne Bern&c=92" },
      { name: "Brussels", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Brussels&c=92" },
      { name: "Frankfurt", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Frankfurt&c=92" },
      { name: "Innsbruck", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Innsbruck&c=92" },
      { name: "Banff National Park", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Banff National Park&c=92" },
      { name: "Jasper National Park", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Jasper National Park&c=92" }
    ]
  },
  {
    title: "India",
    destinations: [
      { name: "Kerala", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Kerala&c=6" },
      { name: "South India", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=South India&c=6" },
      { name: "North India", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=North India&c=6" },
      { name: "East India", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=East India&c=6" },
      { name: "Delhi Agra Jaipur", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Delhi Agra Jaipur&c=6" },
      { name: "Taj Mahal", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Taj Mahal&c=6" },
      { name: "Kashmir", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Kashmir&c=6" },
      { name: "West India", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=West India&c=6" },
      { name: "Varanasi", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Varanasi&c=6" }
    ]
  },
  {
    title: "Indonesia",
    destinations: [
      { name: "Medan", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Medan&c=7" },
      { name: "Lombok", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Lombok&c=7" },
      { name: "Surabaya / Bromo", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Surabaya / Bromo&c=7" },
      { name: "Yogyakarta", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Yogyakarta&c=7" },
      { name: "Padang", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Padang&c=7" },
      { name: "Jakarta / Bandung", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Jakarta / Bandung&c=7" },
      { name: "Bali Special", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Bali Special&c=7" },
      { name: "Aceh", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Aceh&c=7" }
    ]
  },
  {
    title: "Thailand",
    destinations: [
      { name: "Phuket", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Phuket&c=21" },
      { name: "Krabi", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Krabi&c=21" },
      { name: "Bangkok", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Bangkok&c=21" },
      { name: "Chiang Mai", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Chiang Mai&c=21" }
    ]
  },
  {
    title: "Vietnam",
    destinations: [
      { name: "North Vietnam", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=North Vietnam | Hanoi, Halong Bay, Sapa&c=20" },
      { name: "South Vietnam", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=South Vietnam | Ho Chi Minh, Dalat, Mui Ne&c=20" },
      { name: "Central Vietnam", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Central Vietnam | Danang, Hue, Hoi An&c=20" },
      { name: "Phu Quoc", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Phu Quoc&c=20" },
      { name: "Nha Trang", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Nha Trang&c=20" }
    ]
  },
  {
    title: "Maldives & Nepal",
    destinations: [
      { name: "Maldives", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Maldives&c=73" },
      { name: "Kathmandu", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Kathmandu&c=25" },
      { name: "Pokhara", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Pokhara&c=25" },
      { name: "Nagarkot", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Nagarkot&c=25" },
      { name: "Chitwan National Park", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Chitwan National Park&c=25" }
    ]
  },
  {
    title: "Turkey & Greece",
    destinations: [
      { name: "Istanbul", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Istanbul&c=87" },
      { name: "Cappadocia", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Cappadocia&c=87" },
      { name: "Pamukkale", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Pamukkale&c=87" },
      { name: "Bursa", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Bursa&c=87" },
      { name: "Athens", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Athens&c=87" },
      { name: "Santorini", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Santorini&c=87" }
    ]
  },
  {
    title: "UAE (Dubai/Abu Dhabi)",
    destinations: [
      { name: "Dubai", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Dubai&c=86" },
      { name: "Abu Dhabi", url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Abu Dhabi&c=86" }
    ]
  }
];

export default function DestinationSubmenu() {
  // Balanced columns logic for 4 columns
  const columns = [[], [], [], []] as DestinationCategory[][];
  let currentColumn = 0;
  
  destinationData.forEach((cat) => {
    columns[currentColumn].push(cat);
    currentColumn = (currentColumn + 1) % 4;
  });

  return (
    <div className="w-full bg-light rounded-main shadow-xl overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 p-8 lg:p-12">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="space-y-8">
              {column.map((category) => (
                <div key={category.title} className="space-y-3">
                  <a
                    href={category.url || `https://www.holidayidea.com.my/promo/search-travel.php?s=${encodeURIComponent(category.title)}`}
                    className="text-xs font-black text-primary tracking-wider border-l-4 border-primary pl-3 uppercase block transition-all hover:translate-x-1 hover:text-primarydark"
                  >
                    {category.title}
                  </a>
                  <ul className="space-y-2 ml-4">
                    {category.destinations.map((dest) => (
                      <li key={dest.name}>
                        <a
                          href={dest.url}
                          className="text-sm font-medium text-muted hover:text-primarydark transition-all flex items-center gap-2 group/item"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover/item:opacity-100 transition-all duration-200" />
                          {dest.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="gradient py-6 px-8 border-t border-border flex justify-center rounded-b-main">
          <a
            href="https://www.holidayidea.com.my/promo/search-travel.php"
            className="group flex items-center gap-2 text-xs font-bold text-light hover: uppercase tracking-wider transition-all duration-300"
          >
            BROWSE ALL GLOBAL DESTINATIONS
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
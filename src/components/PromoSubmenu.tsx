// components/PromoSubmenu.tsx
import Link from "next/link";
import { motion } from "framer-motion";

interface PromoItem {
  name: string;
  url: string;
  description?: string;
}

const promoData: PromoItem[] = [
  { name: "Sri Lanka Travel Deals", url: "https://www.holidayidea.com.my/srilanka", description: "Discover the pearl of the Indian Ocean" },
  { name: "India Travel Deals!", url: "https://www.holidayidea.com.my/india", description: "Explore incredible India" },
  { name: "Spiritual India Trips", url: "https://www.holidayidea.com.my/SpiritualIndia", description: "Journey to spiritual enlightenment" },
  { name: "BALI Travel Deals!", url: "https://www.holidayidea.com.my/BALI", description: "Paradise awaits in Bali" },
  { name: "Iconic Asean Trips", url: "https://www.holidayidea.com.my/IconicAsean", description: "Discover Southeast Asia's wonders" },
  { name: "Explore The Himalayas", url: "https://www.holidayidea.com.my/himalayas", description: "Majestic mountain adventures" }
];

export default function PromoSubmenu() {
  return (
    <div className="w-full bg-light rounded-main shadow-xl overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 lg:p-10">
          {promoData.map((promo, idx) => (
            <Link
              key={idx}
              href={promo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/promo block p-4 rounded-lg hover:bg-primarydark/10 transition-all duration-300 border border-transparent hover:border-border"
            >
              <div className="font-semibold text-foreground group-hover/promo:text-primary transition-colors mb-1">
                {promo.name}
              </div>
              {promo.description && (
                <p className="text-sm text-muted group-hover/promo:text-foreground transition-colors">
                  {promo.description}
                </p>
              )}
              <div className="mt-2 flex items-center gap-1 text-xs text-primary opacity-0 group-hover/promo:opacity-100 transition-opacity duration-300">
                <span>View Deal</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="gradient py-4 px-8 border-t border-border flex justify-center rounded-b-main">
          <Link
            href="https://www.holidayidea.com.my/promo"
            className="group flex items-center gap-2 text-sm font-bold text-light uppercase tracking-wider transition-all duration-300"
          >
            View All Promotions
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
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
          </Link>
        </div>
      </div>
    </div>
  );
}
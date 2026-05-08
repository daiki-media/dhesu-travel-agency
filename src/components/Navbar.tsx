import { Phone, MessageCircle, MapPin, Tag, Calendar, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DestinationSubmenu from "./DestinationSubmenu";
import PromoSubmenu from "./PromoSubmenu";


export default function Navbar() {
  return (
    <header className="relative z-[100] w-full bg-/0 shadow-lg">
      <div className="container mx-auto flex items-center justify-between gap-8">
        <Link className="flex-shrink-0" href="/">
          <Image
            src="/images/dhesu_logos.png"
            alt="dhesu logo"
            height={60}
            width={120}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          
            <div className="group/nav-item relative">
                <button className="text-dark font-semibold flex items-center gap-2 py-8 hover:text-primarydark transition-colors duration-300">
                    <MapPin size={18} className="text-primary"/>
                    BY DESTINATION
                    <ChevronDown size={14} className="group-hover/nav-item:rotate-180 transition-transform duration-300" />
                </button>
                
                <div className="
                    absolute left-1/2 -translate-x-1/2 top-full 
                    w-screen max-w-[1200px]
                    overflow-hidden 
                    max-h-0 opacity-0 invisible 
                    group-hover/nav-item:max-h-[1000px] 
                    group-hover/nav-item:opacity-100 
                    group-hover/nav-item:visible 
                    transition-all duration-500 ease-in-out 
                    z-[110]
                ">
                    <DestinationSubmenu />
                </div>
            </div>
            <div className="group/nav-item relative">
                <button className="text-dark font-semibold flex items-center gap-2 py-8 hover:text-primarydark transition-colors duration-300">
                    <Tag size={18} className="text-primary"/>
                    LATEST PROMO
                    <ChevronDown size={14} className="group-hover/nav-item:rotate-180 transition-transform duration-300" />
                </button>
                
                <div className="
                    absolute left-1/2 -translate-x-1/2 top-full 
                    w-screen max-w-[1200px]
                    overflow-hidden 
                    max-h-0 opacity-0 invisible 
                    group-hover/nav-item:max-h-[1000px] 
                    group-hover/nav-item:opacity-100 
                    group-hover/nav-item:visible 
                    transition-all duration-500 ease-in-out 
                    z-[110]
                ">
                <PromoSubmenu />
            </div>
            </div>
          <Link 
            href="#" 
            className="text-dark font-semibold flex items-center gap-2 hover:text-primarydark transition-colors duration-300"
          >
            <Calendar size={18} className="text-primary"/>
            PLAN MY TRIP
          </Link>
        </nav>

        {/* Contact info (WhatsApp) */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/60193364465"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-semibold shadow-md hover:shadow-lg"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
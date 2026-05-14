"use client";
import { useState, useEffect } from "react";
import Button from "../Button";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Plane,
  Globe,
} from "lucide-react";
import Image from "next/image";
const navLinks = [
  { label: "Home", href: "/", active: true, dropdown: [] },
  { label: "About Us", href: "/about", active: false, dropdown: [] },
  {
    label: "Destination",
    href: "/destination",
    active: false,
    dropdown: ["Popular Destination", "Destination Details"],
  },
  {
    label: "Service",
    href: "/service",
    active: false,
    dropdown: ["Tour Service", "Hotel Service", "Travel Insurance"],
  },
  {
    label: "Activities",
    href: "/activities",
    active: false,
    dropdown: ["Hiking", "Cruises", "Wildlife", "Walking", "Camping"],
  },
  {
    label: "Pages",
    href: "/pages",
    active: false,
    dropdown: [
      "Shop",
      "Gallery",
      "Our Tour",
      "Tour Details",
      "Resort Page",
      "Resort Details",
      "Tour Guider",
      "Tour Guider Details",
      "Faq Page",
      "Price Package",
      "Error Page",
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    active: false,
    dropdown: ["Blog Grid", "Blog Details"],
  },
  { label: "Contact Us", href: "/contact", active: false, dropdown: [] },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="flex items-center">
        {/* Logo block with diagonal clip */}
        <div className="bg-primary-dark px-5 py-4 h-full ml-auto"
          style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)", paddingLeft: "120px", minWidth: "320px",}} >

            <Link href="/">
              <Image
                src="/images/dhesu-logo2.png"
                alt="dhesu logo"
                height={100}
                width={150}
                priority
                className="object-contain"
              />
            </Link>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6 px-8 flex-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                href={link.href}
                className={`flex items-center gap-0.5 text-[14.5px] font-medium py-1 transition-colors duration-200
                  ${
                    link.active
                      ? "text-primary border-b-2 border-primary pb-0"
                      : "text-gray-700 hover:text-primary"
                  }`}
              >
                {link.label}
                {link.dropdown.length > 0 && (
                  <ChevronDown
                    size={13}
                    className="ml-0.5 transition-transform duration-200 group-hover:rotate-180"
                  />
                )}
              </Link>

              {link.dropdown.length > 0 && (
                <div className="absolute top-full left-0 min-w-[210px] bg-white shadow-2xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-3 group-hover:translate-y-1 z-50 border-t-2 border-primary">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="flex items-center justify-between px-5 py-2.5 text-[13.5px] text-gray-600 hover:text-primary hover:bg-teal-light transition-colors duration-150"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Book Now */}
        <div className="mr-8">
         <Button variant="dark" showArrow>Explore Tours</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto mr-4 p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 py-4 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.label}>
              <button
                className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-primary border-b border-gray-50 text-left"
                onClick={() =>
                  setMobileDropdown(mobileDropdown === link.label ? null : link.label)
                }
              >
                <span className={link.active ? "text-primary font-semibold" : ""}>
                  {link.label}
                </span>
                {link.dropdown.length > 0 && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      mobileDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {mobileDropdown === link.label && link.dropdown.length > 0 && (
                <div className="pl-4 pb-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block py-2 text-sm text-gray-500 hover:text-primary"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="mt-4 w-full flex items-center justify-center gap-2 bg-primary-dark text-white px-6 py-3 rounded-full font-semibold">
            Book Now <ArrowRight size={13} />
          </button>
        </div>
      )}
    </nav>
  );
}

"use client";
import {
  Globe,
  Plane,
  MessageCircle,
  ChevronRight,
  Send,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { InstagramIcon, YouTubeIcon, XIcon, FacebookIcon } from "@/src/components/icons/SocialIcons";
import Image from "next/image";
import Link from "next/link";

const quickLinks = ["Home", "About us", "Our Service", "Terms of Service", "Tour Booking Now"];

const instagramPhotos = [
  "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=300&auto=format&fit=crop",
];

const socials = [
  { icon: <InstagramIcon size={16} />, href: "#" },
  { icon: <FacebookIcon size={16} />, href: "#" },
  { icon: <XIcon size={16} />, href: "#" },
  { icon: <YouTubeIcon size={16} />, href: "#" },
];

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-white pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
                  <Link href="/">
                    <Image
                      src="/images/dhesu-logo2.png"
                      alt="dhesu logo"
                      height={100}
                      width={150}
                      priority
                      className="object-contain rounded"
                    />
                  </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Rapidiously myocardinate cross-platform intellectual capital model. Appropriately
                create interactive infrastructures
              </p>
              <div className="flex gap-2.5">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="w-9 h-9 rounded-full border border-primary/40 text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-teal-navy text-lg mb-5">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-gray-500 hover:text-primary text-sm transition-colors duration-200 group"
                    >
                      <ChevronRight
                        size={9}
                        className="text-primary/70 group-hover:translate-x-1 transition-transform"
                      />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-bold text-teal-navy text-lg mb-5">Address</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-light flex items-center justify-center shrink-0">
                    <Phone size={13} className="text-primary" />
                  </div>
                  <div className="text-gray-500 text-sm leading-relaxed">
                    <p>+01 234 567 890</p>
                    <p>+09 876 543 210</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-light flex items-center justify-center shrink-0">
                    <  Send size={13} className="text-primary" />
                  </div>
                  <div className="text-gray-500 text-sm leading-relaxed">
                    <p>mailinfo00@tourm.com</p>
                    <p>support24@tourm.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-light flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-primary" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    789 Inner Lane, Holy park,
                    <br />
                    California, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram Post */}
            <div>
              <h4 className="font-bold text-teal-navy text-lg mb-5">Instagram Post</h4>
              <div className="grid grid-cols-3 gap-2">
                {instagramPhotos.map((src, i) => (
                  <a key={i} href="#" className="relative overflow-hidden rounded-lg aspect-square group">
                    <Image
                      src={src}
                      alt={`Instagram ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-400 group-hover:scale-110"
                      sizes="80px"
                    />
                    <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 py-8 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white">
          <p>© 2024 Tourm. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

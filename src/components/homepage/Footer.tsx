"use client";
import { MessageCircle, ChevronRight, Send, Phone, MapPin } from "lucide-react";
import { FacebookIcon } from "@/src/components/icons/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/src/data/company";
import { destinations } from "@/src/data/destinations";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "All Destinations", href: "/tours" },
  { label: "Bali & Indonesia", href: "/tours/indonesia" },
  { label: "India Tours", href: "/tours/india" },
  { label: "Contact Us", href: "/contact" },
];

// Real destination photography, each linking to its live hub page.
const footerDestinations = destinations.slice(0, 6);

// Only Facebook and WhatsApp are confirmed Dhesu channels — add the rest here
// once the real handles are known rather than linking to "#".
const socials = [
  { icon: <FacebookIcon size={16} />, href: company.socials.facebook, label: "Facebook" },
  {
    icon: <MessageCircle size={16} />,
    href: `https://wa.me/${company.whatsapp[0].number}`,
    label: "WhatsApp",
  },
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
                      src="/images/dhesu_logos.png"
                      alt="dhesu logo"
                      height={111}
                      width={260}
                      priority
                      className="h-14 w-auto object-contain rounded"
                    />
                  </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 mt-4">
                {company.philosophy} Licensed by the Ministry of Tourism Malaysia and accredited
                by IATA, PATA and MATTA since {company.foundedYear}.
              </p>
              <div className="flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Dhesu on ${s.label}`}
                    className="w-9 h-9 rounded-full border border-primary/40 text-primary flex items-center justify-center hover:bg-primary-dark hover:text-white hover:border-primary transition-all duration-300"
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
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-gray-500 hover:text-primary-dark text-sm transition-colors duration-200 group"
                    >
                      <ChevronRight
                        size={9}
                        className="text-primary/70 group-hover:translate-x-1 transition-transform"
                      />
                      {link.label}
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
                  <div className="w-8 h-8 rounded-full bg-primary-dark/10 flex items-center justify-center shrink-0">
                    <Phone size={13} className="text-primary-dark" />
                  </div>
                  <div className="text-gray-500 text-sm leading-relaxed">
                    {company.phones.map((p) => (
                      <p key={p.tel}>
                        <a href={`tel:${p.tel}`} className="hover:text-primary-dark transition-colors">
                          {p.display}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-dark/10 flex items-center justify-center shrink-0">
                    <  Send size={13} className="text-primary-dark" />
                  </div>
                  <div className="text-gray-500 text-sm leading-relaxed">
                    {company.emails.map((em) => (
                      <p key={em.address}>
                        <a
                          href={`mailto:${em.address}`}
                          className="hover:text-primary-dark transition-colors"
                        >
                          {em.address}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-dark/10 flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-primary-dark" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {company.address.line1},
                    <br />
                    {company.address.line2},
                    <br />
                    {company.address.postcode} {company.address.city}, {company.address.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram Post */}
            <div>
              <h4 className="font-bold text-teal-navy text-lg mb-5">Top Destinations</h4>
              <div className="grid grid-cols-3 gap-2">
                {footerDestinations.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={dest.href}
                    aria-label={`${dest.name} tours`}
                    className="relative overflow-hidden rounded-lg aspect-square group"
                  >
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-400 group-hover:scale-110"
                      sizes="80px"
                    />
                    <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 py-8 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white">
          <p>
            © {new Date().getFullYear()} {company.legalName} ({company.companyNo}) ·{" "}
            {company.licenseNo}. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="/tours" className="hover:text-primary transition-colors">Destinations</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

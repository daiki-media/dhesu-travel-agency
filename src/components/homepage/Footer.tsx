import { MessageCircle, ChevronRight, Send, Phone, MapPin, Clock } from "lucide-react";
import { FacebookIcon } from "@/src/components/icons/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/src/data/company";
import { destinations } from "@/src/data/destinations";
import { holidayIdeas } from "@/src/data/holidayIdeas";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Why Book With an Agent", href: "/why-book-with-a-travel-agent-2026" },
  { label: "All Destinations", href: "/tours" },
  { label: "Travel Blog", href: "/blog" },
  { label: "Current Promotions", href: "/promotions" },
  { label: "Contact Us", href: "/contact" },
];

// The theme and seasonal pages, from the same list that drives the homepage
// Holiday Ideas carousel, plus the custom itinerary form.
const holidayIdeaLinks = [
  ...holidayIdeas.map(({ label, href }) => ({ label, href })),
  { label: "Request a Custom Itinerary", href: "/custom-itinerary-request" },
];

// Every destination hub as a text link: real anchor text on every page, and
// no image requests for the footer.
const destinationLinks = destinations.map((d) => ({ label: d.name, href: d.href }));

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

const openHours = company.hours.filter((h) => !h.closed);

function FooterHeading({ children }: { children: string }) {
  return (
    <h3 className="relative font-primary font-bold text-teal-navy text-lg pb-3 mb-5">
      {children}
      <span className="absolute left-0 bottom-0 h-[2px] w-8 bg-primary" aria-hidden />
    </h3>
  );
}

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-dark text-sm transition-colors duration-200 group py-0.5"
          >
            <ChevronRight
              size={12}
              className="text-primary/70 shrink-0 group-hover:translate-x-1 transition-transform"
            />
            <span>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-full bg-primary-dark/10 flex items-center justify-center shrink-0 text-primary-dark">
        {icon}
      </div>
      <div className="text-gray-500 text-sm leading-relaxed pt-1.5 min-w-0">{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Main footer */}
      <div className="pt-14 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Twelve tracks so each column gets the width its content needs:
              the brand block is widest, the short link list narrowest. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
            {/* Brand */}
            <div className="md:col-span-2 lg:col-span-3 lg:pr-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/dhesu_logos.png"
                  alt="dhesu logo"
                  height={111}
                  width={260}
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed mt-5 mb-6 max-w-sm">
                {company.philosophy} Licensed by the Ministry of Tourism Malaysia and accredited
                by IATA, PATA and MATTA since {company.foundedYear}.
              </p>

              {/* Accreditation chips: the trust signals the sheet says to check. */}
              <ul className="flex flex-wrap gap-2 mb-6" aria-label="Accreditations">
                {company.accreditations.map((a) => (
                  <li
                    key={a.abbr}
                    className="text-[11px] font-semibold tracking-wide text-teal-navy bg-gray-100 rounded-full px-3 py-1"
                    title={a.name}
                  >
                    {a.abbr}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Dhesu on ${s.label}`}
                    className="w-10 h-10 rounded-full border border-primary/40 text-primary flex items-center justify-center hover:bg-primary-dark hover:text-white hover:border-primary transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <FooterHeading>Quick Links</FooterHeading>
              <LinkList links={quickLinks} />
            </div>

            {/* Holiday Ideas */}
            <div className="lg:col-span-2">
              <FooterHeading>Holiday Ideas</FooterHeading>
              <LinkList links={holidayIdeaLinks} />
            </div>

            {/* Destinations */}
            <div className="lg:col-span-2">
              <FooterHeading>Destinations</FooterHeading>
              <LinkList links={destinationLinks} />
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <FooterHeading>Get in Touch</FooterHeading>
              <div className="flex flex-col gap-4">
                <ContactRow icon={<Phone size={15} />}>
                  {company.phones.map((p) => (
                    <p key={p.tel}>
                      <a
                        href={`tel:${p.tel}`}
                        className="inline-block py-0.5 hover:text-primary-dark transition-colors"
                      >
                        {p.display}
                      </a>
                    </p>
                  ))}
                </ContactRow>
                <ContactRow icon={<Send size={15} />}>
                  {company.emails.map((em) => (
                    <p key={em.address}>
                      <a
                        href={`mailto:${em.address}`}
                        className="inline-block py-0.5 hover:text-primary-dark transition-colors break-all"
                      >
                        {em.address}
                      </a>
                    </p>
                  ))}
                </ContactRow>
                <ContactRow icon={<MapPin size={15} />}>
                  <p>
                    {company.address.line1},
                    <br />
                    {company.address.line2},
                    <br />
                    {company.address.postcode} {company.address.city}, {company.address.country}
                  </p>
                </ContactRow>
                <ContactRow icon={<Clock size={15} />}>
                  {openHours.map((h) => (
                    <p key={h.days}>
                      <span className="text-teal-navy font-medium">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </ContactRow>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/90">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {company.legalName} ({company.companyNo}) ·{" "}
            {company.licenseNo}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/tours" className="hover:text-white transition-colors">Destinations</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

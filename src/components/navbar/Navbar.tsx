"use client";
import { useState, useEffect, useRef } from "react";
import Button from "@/src/components/Button";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { navLinks, NavLink } from "./NavbarData";

// ─── Mega-menu (multi-column) ────────────────────────────────────────────────
function MegaMenu({ link }: { link: NavLink }) {
  if (!link.columns) return null;
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-sm py-6 px-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-3 group-hover:translate-y-1 z-50 border-t-2 border-primary min-w-max">
      <div className="flex gap-8">
        {link.columns.map((col) => (
          <div key={col.heading} className="min-w-[160px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-3 pb-1 border-b border-gray-100">
              {col.heading}
            </p>
            <ul className="space-y-0.5">
              {col.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-1.5 text-[13px] text-gray-600 hover:text-primary hover:pl-1 transition-all duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Simple dropdown ─────────────────────────────────────────────────────────
function SimpleDropdown({ link }: { link: NavLink }) {
  if (!link.simple) return null;
  return (
    <div className="absolute top-full left-0 min-w-[210px] bg-white shadow-2xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-3 group-hover:translate-y-1 z-50 border-t-2 border-primary">
      {link.simple.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center px-5 py-2.5 text-[13.5px] text-gray-600 hover:text-primary hover:bg-teal-light transition-colors duration-150"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

// ─── Mobile accordion item ───────────────────────────────────────────────────
function MobileNavItem({
  link,
  isOpen,
  onToggle,
  onClose,
}: {
  link: NavLink;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const hasChildren = !!(link.columns || link.simple);

  // Flatten all child items for mobile
  const allChildren: { label: string; href: string }[] = link.columns
    ? link.columns.flatMap((col) =>
        [{ label: `— ${col.heading} —`, href: "" }, ...col.items]
      )
    : link.simple ?? [];

  return (
    <div>
      <button
        className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-primary border-b border-gray-50 text-left"
        onClick={hasChildren ? onToggle : onClose}
      >
        {hasChildren ? (
          <span className="text-[14px] font-medium">{link.label}</span>
        ) : (
          <Link
            href={link.href}
            className="text-[14px] font-medium w-full text-left"
            onClick={onClose}
          >
            {link.label}
          </Link>
        )}
        {hasChildren && (
          <ChevronDown
            size={14}
            className={`transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {isOpen && hasChildren && (
        <div className="pl-4 pb-2 pt-1 space-y-0.5">
          {allChildren.map((item, i) =>
            item.href === "" ? (
              <p
                key={i}
                className="text-[10px] font-bold uppercase tracking-widest text-primary mt-3 mb-1"
              >
                {item.label.replace(/^— |—$/g, "").trim()}
              </p>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="block py-1.5 text-[13px] text-gray-500 hover:text-primary"
                onClick={onClose}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="flex md:items-center">
        <div
          className="px-5 py-4 h-full md:pl-[120px] md:pr-[50px]"
          style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
        >
          <Link href="/">
            <Image
              src="/images/dhesu_logos.png"
              alt="dhesu logo"
              height={111}
              width={260}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6 px-8 flex-1 justify-center">
          {navLinks.map((link) => {
            const hasMega = !!link.columns;
            const hasSimple = !!link.simple;
            const hasDropdown = hasMega || hasSimple;

            return (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-0.5 text-[14.5px] font-medium py-1 transition-colors duration-200 text-gray-700 hover:text-primary"
                >
                  {link.label}
                  {hasDropdown && (
                    <ChevronDown
                      size={13}
                      className="ml-0.5 transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {hasMega && <MegaMenu link={link} />}
                {hasSimple && <SimpleDropdown link={link} />}
              </div>
            );
          })}
        </div>

        {/* Plan My Trip CTA */}
        <div className="mr-8 lg:mr-20 hidden md:block flex-shrink-0">
          <a href="/plan-my-trip">
          <Button variant="dark" showArrow>
            Plan My Trip
          </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto mr-4 p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 py-4 shadow-lg max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <MobileNavItem
              key={link.label}
              link={link}
              isOpen={mobileDropdown === link.label}
              onToggle={() =>
                setMobileDropdown(
                  mobileDropdown === link.label ? null : link.label
                )
              }
              onClose={closeMobile}
            />
          ))}

          <div className="text-center mt-5">
            <a href="/plan-my-trip">
              <Button showArrow variant="dark">
                Plan My Trip
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
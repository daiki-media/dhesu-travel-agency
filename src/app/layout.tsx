import type { Metadata } from "next";
import { Manrope, Montez } from "next/font/google";
import JsonLd from "@/src/components/JsonLd";
import { SITE_URL } from "@/src/data/site";
import { organisationSchema, websiteSchema } from "@/src/data/structuredData";
import "./index.css";

// Body + headings. No `weight` on purpose — that would pull a separate static
// file (and @font-face block) per weight; the variable font covers 400-800 in
// one request.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

// Decorative script used for section eyebrows (`.font-secondary`).
const montez = Montez({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Daily Customized & Ready Made Holidays Worldwide. Have a Chat Online Now | Dhesu",
  description: "With 30years of experience this award winning Travel Agent offers the widest choice of holidays, including ground only holidays, all inclusive holidays, group holidays and incentive travel plans for co. Let Us Plan Your Vacation For You. Book Flights, Hotels, Tours & Incentive Trips With Us.",
  verification: {
    google: "aNPzTbZC9UPNAfmwNW82oVD0WbtQ25f9tMNMYHlcBtU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `suppressHydrationWarning` covers the `data-reveal` attribute that the
    // inline script below stamps on <html> before React hydrates. It has to be
    // set pre-paint (otherwise revealed content flashes in and back out) and it
    // must NOT be server-rendered (otherwise the hidden state would stick with
    // JavaScript disabled) — so a mismatch here is intentional. This suppresses
    // only this element's own attributes, not the tree beneath it.
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Some gallery/feature photography still comes from Unsplash; opening
            the TLS connection up front saves ~390 ms before the first of them
            can start downloading. */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Drives the `[data-reveal]` scroll animations (see index.css). Inline
            and synchronous so the hidden start state is set before the first
            paint — no flash of already-visible content. It replaces
            framer-motion on the marketing sections, which lets them stay server
            components; React then has far less to hydrate on mobile. If
            IntersectionObserver is unavailable it bails out and the content
            simply renders visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document,r=d.documentElement;if(!('IntersectionObserver' in window))return;r.setAttribute('data-reveal','on');var io=new IntersectionObserver(function(es){for(var i=0;i<es.length;i++){if(es[i].isIntersecting){es[i].target.setAttribute('data-revealed','');io.unobserve(es[i].target);}}},{rootMargin:'0px 0px -80px 0px'});function s(){var n=d.querySelectorAll('[data-reveal]');for(var i=0;i<n.length;i++)io.observe(n[i]);}if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',s);else s();})();`,
          }}
        />
      </head>
      <body className={`${manrope.variable} ${montez.variable}`}>
        {/* Site-wide identity for search engines and AI agents. */}
        <JsonLd data={[organisationSchema, websiteSchema]} />
        {children}
      </body>
    </html>
  );
}
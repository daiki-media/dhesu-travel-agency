import type { Metadata } from "next";
import { Manrope, Montez } from "next/font/google";
import JsonLd from "@/src/components/JsonLd";
import { SITE_URL } from "@/src/data/site";
import { graph, organisationSchema, websiteSchema } from "@/src/data/structuredData";
import "./index.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WCP9T6ZT');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document,r=d.documentElement;if(!('IntersectionObserver' in window))return;r.setAttribute('data-reveal','on');var io=new IntersectionObserver(function(es){for(var i=0;i<es.length;i++){if(es[i].isIntersecting){es[i].target.setAttribute('data-revealed','');io.unobserve(es[i].target);}}},{rootMargin:'0px 0px -80px 0px'});function s(){var n=d.querySelectorAll('[data-reveal]');for(var i=0;i<n.length;i++)io.observe(n[i]);}if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',s);else s();})();`,
          }}
        />
      </head>
      <body className={`${manrope.variable} ${montez.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCP9T6ZT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <JsonLd data={graph([organisationSchema, websiteSchema])} />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Manrope, Montez } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/src/components/JsonLd";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/Footer";
import { SITE_URL } from "@/src/data/site";
import { graph, organisationSchema, websiteSchema } from "@/src/data/structuredData";
import { getBlogList } from "@/src/lib/cms";
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

/**
 * Menu label for a post.
 *
 * The dropdown is a narrow single column, so it takes the title up to the first
 * colon — the SEO titles carry a subtitle after it that would wrap badly.
 */
function menuLabel(title: string): string {
  return title.split(":")[0].trim();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The Blog dropdown lists the newest posts from the CMS. Navbar is a client
  // component, so the fetch happens here and the result is passed down. The
  // list is fetched once per build and shared with /blog, the article pages,
  // the sitemap and llms.txt.
  const blogArticles = (await getBlogList()).slice(0, 6).map((post) => ({
    label: menuLabel(post.title),
    href: `/blog/${post.slug}/`,
  }));

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${manrope.variable} ${montez.variable}`}>
        {/* Reveal-on-scroll bootstrap. beforeInteractive because index.css only
            hides revealable elements under html[data-reveal="on"] — setting the
            attribute any later would paint the content, then hide it. */}
        <Script
          id="reveal-bootstrap"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document,r=d.documentElement;if(!('IntersectionObserver' in window))return;r.setAttribute('data-reveal','on');var io=new IntersectionObserver(function(es){for(var i=0;i<es.length;i++){if(es[i].isIntersecting){es[i].target.setAttribute('data-revealed','');io.unobserve(es[i].target);}}},{rootMargin:'0px 0px -80px 0px'});function s(){var n=d.querySelectorAll('[data-reveal]');for(var i=0;i<n.length;i++)io.observe(n[i]);}if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',s);else s();})();`,
          }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WCP9T6ZT');`,
          }}
        />
        {/* End Google Tag Manager */}
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
        {/* Site chrome is identical on every route, so it lives here rather
            than being repeated in each page. */}
        <TopBar />
        <Navbar blogArticles={blogArticles} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
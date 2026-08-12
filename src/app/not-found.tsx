import Link from "next/link";
import Button from "@/src/components/Button";

// Popular destinations to help the user navigate
const suggestedLinks = [
  { label: "India Tours", href: "/tours/india" },
  { label: "Thailand", href: "/tours/thailand" },
  { label: "Sri Lanka", href: "/tours/sri-lanka" },
  { label: "Nepal", href: "/tours/nepal" },
];

export default function NotFound() {
  return (
    <main className="bg-white min-h-[80vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ─────────────────────────────────────────────────── */}
          <div>
            {/* Section label */}
            <div className="animate-fade-up flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-primary">
                Page Not Found
              </span>
            </div>

            {/* 404 headline */}
            <h1
              style={{ "--d": "80ms" } as React.CSSProperties}
              className="animate-fade-up font-primary font-bold text-[#1a1a1a] text-8xl md:text-[140px] leading-none mb-0 select-none"
            >
              404
            </h1>

            <h2
              style={{ "--d": "180ms" } as React.CSSProperties}
              className="animate-fade-up font-primary font-bold text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-4"
            >
              Looks like this page{" "}
              <span className="text-primary">went on holiday</span> without us.
            </h2>

            <p
              style={{ "--d": "280ms" } as React.CSSProperties}
              className="animate-fade-up text-gray-500 text-lg leading-relaxed mb-10 max-w-md"
            >
              The link you followed may be broken, or the page may have moved.
              Let us help you find your next adventure.
            </p>

            {/* CTAs */}
            <div
              style={{ "--d": "380ms" } as React.CSSProperties}
              className="animate-fade-up flex flex-wrap gap-4 mb-14"
            >
              <Link href="/">
                <Button variant="dark" showArrow size="lg">
                  Back to Home
                </Button>
              </Link>
              <Link href="/tours">
                <Button variant="light" showArrow size="lg">
                  View All Tours
                </Button>
              </Link>
            </div>

            {/* Suggested destinations */}
            <div className="animate-fade-up" style={{ "--d": "500ms" } as React.CSSProperties}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Popular Destinations
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-600 bg-gray-50 hover:bg-red-50 hover:text-primary border border-gray-100 hover:border-red-100 px-4 py-2 rounded-full transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: visual ───────────────────────────────────────────────── */}
          <div
            style={{ "--d": "200ms" } as React.CSSProperties}
            className="animate-fade-up hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[480px] aspect-square">
              {/* Decorative background circle */}
              <div className="absolute inset-0 rounded-full bg-red-50 opacity-60" />

              {/* Dashed orbit ring */}
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-red-200 animate-spin-slow" />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12">
                {/* Plane icon */}
                <div className="animate-float mb-6">
                  <svg
                    className="w-20 h-20 text-primary mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>

                <p className="font-primary font-bold text-[#1a1a1a] text-xl mb-2">
                  Lost in transit?
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Every great journey has a wrong turn. Let us reroute you to
                  your dream destination.
                </p>
              </div>

              {/* Floating destination pills */}
              {[
                { label: "Bali", top: "8%", left: "60%", delay: 0 },
                { label: "Nepal", top: "22%", left: "5%", delay: 0.4 },
                { label: "Paris", top: "72%", left: "10%", delay: 0.8 },
                { label: "Dubai", top: "80%", left: "62%", delay: 1.2 },
              ].map((pill) => (
                <span
                  key={pill.label}
                  style={{ top: pill.top, left: pill.left, "--d": `${600 + pill.delay * 1000}ms` } as React.CSSProperties}
                  className="animate-fade-up absolute bg-white border border-gray-100 shadow-md text-xs font-semibold text-gray-700 px-3 py-1.5 rounded-full font-primary"
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
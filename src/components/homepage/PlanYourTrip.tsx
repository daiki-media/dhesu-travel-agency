import Image from "next/image";
import Link from "next/link";
import Button from "@/src/components/Button";
import { Search, FileText, SlidersHorizontal, ShieldCheck, Headset } from "lucide-react";

// "How the Planning Process Works" from the Holiday Idea sheet, verbatim.
const iconClass = "text-white transition-transform duration-300 group-hover:rotate-360";
const steps = [
  {
    icon: <Search size={22} className={iconClass} />,
    title: "Browse or enquire",
    desc: "Explore packages by destination, or reach out directly with a general idea of where you'd like to go.",
  },
  {
    icon: <FileText size={22} className={iconClass} />,
    title: "Get a tailored quote",
    desc: "A consultant reviews your travel dates, group size, and preferences to put together pricing and options.",
  },
  {
    icon: <SlidersHorizontal size={22} className={iconClass} />,
    title: "Refine the details",
    desc: "Adjust hotel categories, add or remove activities, and confirm your final itinerary.",
  },
  {
    icon: <ShieldCheck size={22} className={iconClass} />,
    title: "Book with confidence",
    desc: "Confirm your trip with a licensed, IATA-registered agency backing the arrangements.",
  },
  {
    icon: <Headset size={22} className={iconClass} />,
    title: "Travel with support",
    desc: "Access on-ground assistance and a point of contact throughout your trip.",
  },
];

export default function PlanYourTrip() {
  return (
    <section className="py-12 sm:py-12 lg:py-16 md:py-12 lg:py-16 xl:py-28 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* Left Image Gallery - Completely responsive layout */}
          <div className="relative w-full" data-reveal="left">
            {/* Mobile Layout (Stacked vertically) */}
            <div className="block lg:hidden space-y-4">
              {/* Main Image - Full width on mobile */}
              <div className="relative w-full h-[280px] sm:h-[350px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/gallery/14620.jpg"
                  alt="Mountain hiker"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </div>

              {/* Two smaller images - Grid on mobile */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg group">
                  <Image
                    src="https://images.unsplash.com/photo-1472745433479-4556f22e32c2?q=80&w=500&auto=format&fit=crop"
                    alt="Kayaking"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg group">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500&auto=format&fit=crop"
                    alt="Friends traveling"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Layout (Original design) */}
            <div className="hidden lg:flex lg:gap-6 h-[520px] items-center">
              <div className="relative w-[50%] h-full overflow-hidden rounded-t-full rounded-bl-full shadow-xl">
                <Image
                  src="/images/gallery/14620.jpg"
                  alt="Mountain hiker"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="30vw"
                />
              </div>
              <div className="flex flex-col gap-6 w-[50%]">
                <div className="relative overflow-hidden rounded-t-full rounded-br-full aspect-[1.1/1] shadow-lg group">
                  <Image
                    src="https://images.unsplash.com/photo-1472745433479-4556f22e32c2?q=80&w=500&auto=format&fit=crop"
                    alt="Kayaking"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="20vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-b-full rounded-tl-full aspect-[1.1/1] shadow-lg group">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500&auto=format&fit=crop"
                    alt="Friends traveling"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="20vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Fully responsive */}
          <div className="text-center lg:text-left" data-reveal="right">
            <p className="font-secondary text-primary-dark text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3">
              Plan Your Trip With Us
            </p>
            <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-navy leading-tight mb-3 sm:mb-4 md:mb-5">
              What &ldquo;Customized&rdquo;
              <br className="hidden sm:block" />
              <span className="inline-block sm:block">Actually Means</span>
            </h2>
            {/* "What Customized Actually Means" from the sheet, verbatim. */}
            <p className="text-gray-500 leading-relaxed mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base max-w-2xl lg:max-w-full mx-auto lg:mx-0">
              There is an often held misunderstanding that when traveling through travel
              agencies, all packages must be inflexible and standardized. But the reality is
              that many of the itineraries offered act as a solid base for customization
              depending on your budget and the size of your group, accommodation level,
              activities, and even the speed at which you travel may be altered. And this is
              just one of the biggest benefits over creating your own DIY itinerary.
            </p>

            <h3 className="font-primary font-bold text-teal-navy text-lg sm:text-xl mb-4 sm:mb-5">
              How the planning process works
            </h3>

            {/* Step list */}
            <ol className="flex flex-col gap-4 sm:gap-5 mb-7 sm:mb-8 md:mb-9">
              {steps.map((s, idx) => (
                <li
                  key={s.title}
                  className="flex items-start gap-3 sm:gap-4 group text-left"
                  data-reveal
                  style={{ "--reveal-delay": `${300 + idx * 100}ms` } as React.CSSProperties}
                >
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary-dark flex items-center justify-center shrink-0 shadow-md group-hover:bg-primary transition-colors duration-300 group">
                    {s.icon}
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-primary-dark text-[10px] font-bold flex items-center justify-center shadow">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-teal-navy text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">
                      {s.title}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/tours" className="w-full sm:w-auto">
                <Button variant="dark" showArrow size="lg" className="w-full sm:w-auto">
                  Explore Tours
                </Button>
              </Link>
              <Link href="/contact-us#free-quote" className="w-full sm:w-auto">
                <Button variant="light" showArrow size="lg" className="w-full sm:w-auto">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

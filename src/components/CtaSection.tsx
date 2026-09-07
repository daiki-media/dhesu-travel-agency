import Image from "next/image";
import Link from "next/link";
import Button from "@/src/components/Button";
import { company } from "@/src/data/company";

export type CtaAction = { label: string; href: string };

/** tel:, mailto:, wa.me and on-page anchors are not routes, so they skip Link. */
const isRoute = (href: string) => href.startsWith("/");

/**
 * The closing call to action that follows the FAQ on almost every page.
 *
 * `band` is the house treatment: a full-bleed teal-navy section, optionally
 * over a photo, centred on the page. `card` is the same block for narrow
 * containers - the destination guides render inside a ~700px reading column,
 * so the band becomes a rounded teal card. Same palette, type scale and
 * spacing either way, so the two read as one pattern.
 *
 * With no `actions`, the CTA falls back to the contact pair (WhatsApp and
 * email) used on the company pages.
 */
export default function CtaSection({
  eyebrow,
  heading,
  body,
  actions,
  image,
  imageAlt = "",
  showAddress = true,
  variant = "band",
}: {
  eyebrow?: string;
  heading: string;
  body: React.ReactNode;
  actions?: CtaAction[];
  image?: string;
  imageAlt?: string;
  showAddress?: boolean;
  variant?: "band" | "card";
}) {
  const buttons = actions?.length ? (
    actions.map((action, i) =>
      isRoute(action.href) ? (
        <Link key={action.href + action.label} href={action.href}>
          <Button variant={i === 0 ? "light" : "transparent"} showArrow size="lg">
            {action.label}
          </Button>
        </Link>
      ) : (
        <a
          key={action.href + action.label}
          href={action.href}
          {...(action.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={`btn-base ${
            i === 0 ? "btn-light" : "btn-transparent"
          } px-8 py-3.5 text-base font-primary`}
        >
          <span className="btn-content">{action.label}</span>
        </a>
      )
    )
  ) : (
    <>
      <a
        href={`https://wa.me/${company.whatsapp[0].number}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-base btn-light px-8 py-3.5 text-base font-primary"
      >
        <span className="btn-content">WhatsApp {company.whatsapp[0].display}</span>
      </a>
      <a
        href={`mailto:${company.emails[1].address}`}
        className="btn-base btn-transparent px-8 py-3.5 text-base font-primary"
      >
        <span className="btn-content">{company.emails[1].address}</span>
      </a>
    </>
  );

  const inner = (
    <>
      {eyebrow && (
        <p className="font-secondary text-white/80 text-2xl md:text-3xl mb-2">{eyebrow}</p>
      )}
      <h2
        className={`font-primary font-bold text-white leading-tight mb-4 ${
          variant === "card" ? "text-2xl md:text-3xl" : "text-3xl md:text-5xl"
        }`}
      >
        {heading}
      </h2>
      <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">{body}</p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">{buttons}</div>
      {showAddress && (
        <p className="text-white/50 text-sm mt-10">{company.address.full}</p>
      )}
    </>
  );

  if (variant === "card") {
    return (
      <div
        className="relative overflow-hidden rounded-2xl bg-teal-navy px-6 py-12 lg:px-12 text-center"
        data-reveal
      >
        {image && (
          <>
            <div className="absolute inset-0">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
            </div>
            <div className="absolute inset-0 bg-teal-navy/85" />
          </>
        )}
        <div className="relative z-10">{inner}</div>
      </div>
    );
  }

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-teal-navy">
      {image && (
        <>
          <div className="absolute inset-0">
            <Image src={image} alt={imageAlt} fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-teal-navy/85" />
        </>
      )}
      <div
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center"
        data-reveal
      >
        {inner}
      </div>
    </section>
  );
}

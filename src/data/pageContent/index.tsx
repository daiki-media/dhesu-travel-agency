import type { ReactNode } from "react";
import { ChinaHubBody, ChinaHubClosing } from "./china/ChinaHub";
import { IndiaHubBody, IndiaHubClosing } from "./india/IndiaHub";
import { GoldenTriangleBody, GoldenTriangleClosing } from "./india/GoldenTriangle";
import { KashmirBody, KashmirClosing } from "./india/Kashmir";
import { KeralaBody, KeralaClosing } from "./india/Kerala";
import { VaranasiBody, VaranasiClosing } from "./india/Varanasi";
import { NepalHubBody, NepalHubClosing } from "./nepal/NepalHub";
import { NepalMuslimFriendlyBody, NepalMuslimFriendlyClosing } from "./nepal/MuslimFriendly";
import { SriLankaHubBody, SriLankaHubClosing } from "./sri-lanka/SriLankaHub";
import {
  SriLankaMuslimFriendlyBody,
  SriLankaMuslimFriendlyClosing,
} from "./sri-lanka/MuslimFriendly";

// Approved SEO copy for a hub (key "india") or landing page (key "india/kerala").
// When present, it replaces the template's stock sections on that page.
export interface PageContent {
  body: ReactNode;
  closing?: ReactNode;
  faqHeading?: string;
}

const FAQ = "Frequently Asked Questions";

const pageContent: Record<string, PageContent> = {
  india: { body: <IndiaHubBody />, closing: <IndiaHubClosing />, faqHeading: FAQ },
  china: { body: <ChinaHubBody />, closing: <ChinaHubClosing />, faqHeading: FAQ },
  nepal: { body: <NepalHubBody />, closing: <NepalHubClosing />, faqHeading: "Nepal tour package FAQs" },
  "sri-lanka": { body: <SriLankaHubBody />, closing: <SriLankaHubClosing />, faqHeading: FAQ },
  "india/kerala": { body: <KeralaBody />, closing: <KeralaClosing />, faqHeading: FAQ },
  "india/golden-triangle": {
    body: <GoldenTriangleBody />,
    closing: <GoldenTriangleClosing />,
    faqHeading: FAQ,
  },
  "india/kashmir": { body: <KashmirBody />, closing: <KashmirClosing />, faqHeading: FAQ },
  "india/varanasi": { body: <VaranasiBody />, closing: <VaranasiClosing />, faqHeading: FAQ },
  "nepal/muslim-friendly": {
    body: <NepalMuslimFriendlyBody />,
    closing: <NepalMuslimFriendlyClosing />,
    faqHeading: FAQ,
  },
  "sri-lanka/muslim-friendly": {
    body: <SriLankaMuslimFriendlyBody />,
    closing: <SriLankaMuslimFriendlyClosing />,
    faqHeading: "Muslim friendly Sri Lanka tour FAQs",
  },
};

export function getPageContent(key: string): PageContent | undefined {
  return pageContent[key];
}

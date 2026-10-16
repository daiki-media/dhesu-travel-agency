export type FaqPart = string | { text: string; href: string };

export type LinkedFaq = { question: string; answer: FaqPart[] };

export const faqPlainText = (parts: FaqPart[]) =>
  parts.map((p) => (typeof p === "string" ? p : p.text)).join("");

export const linkedFaqsAsText = (faqs: LinkedFaq[]) =>
  faqs.map((f) => ({ question: f.question, answer: faqPlainText(f.answer) }));

export type FaqPart = string | { text: string; href: string };

export type LinkedFaq = { question: string; answer: FaqPart[] };

/** An FAQ answer: plain text, or text with inline links. */
export type FaqAnswer = string | FaqPart[];

export const faqPlainText = (parts: FaqPart[]) =>
  parts.map((p) => (typeof p === "string" ? p : p.text)).join("");

/** The answer as plain text, e.g. for FAQPage markup. */
export const faqAnswerText = (answer: FaqAnswer) =>
  typeof answer === "string" ? answer : faqPlainText(answer);

export const linkedFaqsAsText = (faqs: LinkedFaq[]) =>
  faqs.map((f) => ({ question: f.question, answer: faqPlainText(f.answer) }));

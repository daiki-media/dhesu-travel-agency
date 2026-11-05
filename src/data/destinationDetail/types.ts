/**
 * Shared types for the destination landing-page files.
 *
 * Kept separate from ./index.ts because that module imports every destination
 * file; a destination importing back from it would close the cycle.
 */

/**
 * The source draft's own hyperlink inside a landing page's `intro`.
 *
 * The drafts link a phrase in their opening paragraph, but `intro` has to stay
 * a plain string — these are `.ts` data modules, so they cannot hold JSX, and
 * the string is reused as prose elsewhere. So the page records which substring
 * the draft linked and where it points, and the hero linkifies it at render
 * time.
 */
export interface IntroLink {
  /** The anchor text, exactly as it appears in `intro`. */
  text: string;
  /** Where it points now, after remapping off the old holidayidea.com.my URL. */
  href: string;
  /**
   * Which occurrence of `text` to link, 1-based. Only needed when the anchor
   * phrase appears more than once in the intro; defaults to the first.
   */
  occurrence?: number;
}

/**
 * A sentence that links a planning guide to its destination hub, e.g.
 * "Ready to book? See our Nepal tour packages from Malaysia." (DHS-T3 sheet).
 * Stored like `intro` + `introLink`: the sentence as a plain string and the
 * phrase inside it that carries the link.
 */
export interface HubLine {
  /** The whole sentence, exactly as the SEO sheet gives it. */
  text: string;
  /** The anchor phrase inside `text` and the hub it points to. */
  link: IntroLink;
}

/**
 * Optional guide-page fields added for DHS-T3. Region pages leave them out
 * and render exactly as before.
 */
export interface GuidePageExtras {
  /**
   * The guide's earlier creative headline line, kept visible under the h1 as
   * a sub-heading (a paragraph, not a heading) now that the h1 is the SEO one.
   */
  subheading?: string;
  /** The "Ready to book?" sentence linking the guide to its hub. */
  hubLine?: HubLine;
}

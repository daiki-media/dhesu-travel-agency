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

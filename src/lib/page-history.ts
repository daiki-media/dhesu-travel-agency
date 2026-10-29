/**
 * Remembers the previous dhesu.com page in this browser tab, so an enquiry can
 * say which page the visitor came from.
 *
 * document.referrer is not enough: Next.js moves between pages without a full
 * reload, and the browser does not update the referrer on those moves.
 * Paths only (no query strings), kept in sessionStorage for this tab.
 */

const CURRENT = "dhesu:currentPath";
const PREVIOUS = "dhesu:previousPath";

function storage(): Storage | null {
  try {
    return window.sessionStorage;
  } catch {
    // Private mode or storage blocked.
    return null;
  }
}

/** Call on every page view with the new pathname. */
export function recordPageView(pathname: string) {
  const s = storage();
  if (!s) return;
  const current = s.getItem(CURRENT);
  if (current && current !== pathname) {
    s.setItem(PREVIOUS, current);
  } else if (!current) {
    // First page in this tab: a full page load from another dhesu.com page
    // still sets the referrer, so use it if it is ours.
    try {
      const ref = new URL(document.referrer);
      if (ref.origin === window.location.origin && ref.pathname !== pathname) {
        s.setItem(PREVIOUS, ref.pathname);
      }
    } catch {
      // No referrer.
    }
  }
  s.setItem(CURRENT, pathname);
}

/** The dhesu.com path the visitor was on before this one, or "". */
export function previousPath(): string {
  const s = storage();
  const previous = s?.getItem(PREVIOUS) ?? "";
  return previous && previous !== window.location.pathname ? previous : "";
}

export type PageTrackingContext = {
  destination?: string;
  package_name?: string;
};

/**
 * The destination and package of the page the visitor is on, from the
 * `<TrackingContext>` marker the tour routes render. Empty on pages that are
 * not about one destination (home, blog, contact), so GA4 shows "(not set)"
 * there instead of a wrong value.
 */
export function pageTrackingContext(): PageTrackingContext {
  if (typeof document === "undefined") return {};
  const marker = document.querySelector<HTMLElement>("[data-tracking-context]");
  const context: PageTrackingContext = {};
  const destination = marker?.dataset.destination?.trim();
  const packageName = marker?.dataset.packageName?.trim();
  if (destination) context.destination = destination.slice(0, 100);
  if (packageName) context.package_name = packageName.slice(0, 100);
  return context;
}

/**
 * Marks which destination and package the page is about, so the WhatsApp and
 * enquiry events can send them to GA4 (read by `pageTrackingContext()`).
 *
 * The values come from the route's own data rather than from scraping the H1,
 * so a reworded headline never changes how leads are grouped in reports.
 * Pages without a destination simply don't render this.
 */
export default function TrackingContext({
  destination,
  packageName,
}: {
  destination?: string;
  packageName?: string;
}) {
  return (
    <div
      hidden
      data-tracking-context=""
      data-destination={destination || undefined}
      data-package-name={packageName || undefined}
    />
  );
}

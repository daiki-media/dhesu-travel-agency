"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { recordPageView } from "@/src/lib/page-history";

/** Records each page view so enquiries can report the previous page (D03). */
export default function PageHistoryTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) recordPageView(pathname);
  }, [pathname]);

  return null;
}

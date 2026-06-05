import type { PackageDetailData } from "@/src/components/tours/TourPackageDetailTemplate";

import chennaiSuperSaver from "./india-package-detail-chennai-super-saver.json";

/**
 * Registry of individual tour package detail pages.
 *
 * The key is the FULL route path after `/tours/`, i.e. `{destination}/{packageSlug}`.
 * Package slugs are two levels deep (e.g. "south-india/3-day-chennai-super-saver"),
 * so a key looks like "india/south-india/3-day-chennai-super-saver".
 *
 * To add a package: create its JSON file, add one import above and one line below.
 */
export const tourPackages: Record<string, PackageDetailData> = {
  "india/south-india/3-day-chennai-super-saver": chennaiSuperSaver as PackageDetailData,
};

export const tourPackageSlugs = Object.keys(tourPackages);

/** Look up a package by its full route path, e.g. "india/south-india/3-day-chennai-super-saver". */
export function getTourPackage(fullPath: string): PackageDetailData | undefined {
  return tourPackages[fullPath];
}

export type { PackageDetailData } from "@/src/components/tours/TourPackageDetailTemplate";

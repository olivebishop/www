/**
 * Geographic HTML meta helpers — depends on geo only (not seo) to avoid circular imports.
 */

import type { Metadata } from "next";
import { geoEntity, geoLocation, geoServiceAreas } from "@/lib/geo";

const geoPosition = `${geoLocation.latitude};${geoLocation.longitude}`;
const icbm = `${geoLocation.latitude}, ${geoLocation.longitude}`;

/** HTML meta tags for geographic discovery (search + maps-adjacent signals). */
export function getGeoMetadataExtras(): Pick<Metadata, "other"> & { abstract?: string } {
  return {
    abstract: geoEntity.summary,
    other: {
      "geo.region": geoLocation.countryCode,
      "geo.placename": `${geoLocation.locality}, ${geoLocation.country}`,
      "geo.position": geoPosition,
      ICBM: icbm,
      "content-language": "en",
      "geo.service": geoServiceAreas.slice(0, 6).join(", "),
    },
  };
}

/** Extra keywords for geographic + generative discovery. */
export const geoKeywords = [
  "Next.js developer Kenya",
  "freelance developer Nairobi",
  "remote React developer Africa",
  "hire software engineer Kenya",
  "SaaS developer East Africa",
  "web developer for startups worldwide",
] as const;

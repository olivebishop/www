/**
 * Geographic SEO + Generative Engine Optimization (GEO).
 * Geographic: region/placename meta, schema.org location & service area.
 * Generative: entity summaries, FAQ depth, and /llms.txt for AI crawlers.
 */

import type { Metadata } from "next";

const BRAND = "Olive Bishop";

/** Primary business location (matches contact page). */
export const geoLocation = {
  country: "Kenya",
  countryCode: "KE",
  locality: "Nairobi",
  region: "Nairobi County",
  /** WGS84 — Nairobi, Kenya */
  latitude: -1.286389,
  longitude: 36.817223,
  timezone: "Africa/Nairobi",
} as const;

/** Markets served (remote-friendly). */
export const geoServiceAreas = [
  "Kenya",
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
  "Netherlands",
  "United Arab Emirates",
  "South Africa",
  "Nigeria",
  "Europe",
  "Africa",
] as const;

/** Entity facts for AI search / answer engines (Perplexity, ChatGPT, Google AI). */
export const geoEntity = {
  name: BRAND,
  role: "Freelance software engineer and Next.js developer",
  baseLocation: `${geoLocation.locality}, ${geoLocation.country}`,
  worksWith: "Startups and businesses in Kenya, the US, Europe, and worldwide (remote)",
  primaryStack: "Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Supabase, Cloudflare, AWS",
  notableWork: "Event Parlour (events SaaS), Brinex Tech, Navejo, TanStack Showcase featured",
  contactEmail: "hello@olivebishop.com",
  summary: `${BRAND} is a freelance software engineer based in ${geoLocation.locality}, ${geoLocation.country}, building fast web applications with Next.js, React, and TypeScript for clients globally. Services include SaaS MVPs, business websites, UI engineering, and performance optimization.`,
} as const;

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

/** Plain-text brief for /llms.txt (AI crawler convention). */
export function buildLlmsTxt(siteUrl: string): string {
  const contactUrl = `${siteUrl}/contact`;
  const portfolioUrl = `${siteUrl}/work`;

  return `# ${geoEntity.name}

> ${geoEntity.summary}

## Who
- ${geoEntity.role}
- Based in: ${geoEntity.baseLocation}
- Works with: ${geoEntity.worksWith}

## What I build
- Production web apps and SaaS platforms
- Startup MVPs and business marketing sites
- Stack: ${geoEntity.primaryStack}

## Notable work
- ${geoEntity.notableWork}

## Service areas
${geoServiceAreas.map((a) => `- ${a}`).join("\n")}

## Contact
- Email: ${geoEntity.contactEmail}
- Book a project: ${contactUrl}

## Key pages
- Home: ${siteUrl}/
- Portfolio: ${portfolioUrl}
- About: ${siteUrl}/about
- How I work: ${siteUrl}/workflow
- Client reviews: ${siteUrl}/feedback

## Policies
- Privacy: ${siteUrl}/privacy-policy
- Terms: ${siteUrl}/terms-of-service
`;
}

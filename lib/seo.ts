/** Base site copy for SEO & GEO — titles, social cards, geography, and AI entity signals. */

import type { Metadata } from "next";
import { geoKeywords, getGeoMetadataExtras } from "@/lib/site-meta";

const DEFAULT_SITE_URL = "https://olivebishop.com";

/** Served from `app/opengraph-image.png` (also used as `app/twitter-image.png`). */
export const OG_IMAGE_PATH = "/opengraph-image.png";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

export const TWITTER_HANDLE = "@olivebishop_dev" as const;

/** Safe origin for metadata, JSON-LD, and loaders. Malformed env (spaces, no scheme) must not crash the Worker. */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const u = new URL(candidate);
    if (u.protocol !== "http:" && u.protocol !== "https:") return DEFAULT_SITE_URL;
    return u.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = resolveSiteUrl();

export const seo = {
  brand: "Olive Bishop",

  defaultTitle:
    "Olive Bishop — Freelance Next.js & React Developer | Fast Web Apps & SaaS",
  defaultDescription:
    "Olive Bishop is a freelance software engineer who builds fast, accessible web applications with Next.js, React, and TypeScript. Serving startups and businesses worldwide — from MVPs to production-grade SaaS. View projects and book a call.",

  homeTitle: "Freelance Next.js & React Developer for Hire",
  homeDescription:
    "Hire Olive Bishop — a freelance software engineer specializing in Next.js, React, and TypeScript. High-performance web apps, startup MVPs, and SaaS frontends shipped on time. Explore the portfolio and start your project today.",

  aboutTitle: "About Olive Bishop — Software Engineer & Web Developer",
  aboutDescription:
    "Olive Bishop is a software engineer based in Kenya working with clients globally. Stack: Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Cloudflare, and AWS. Product-minded delivery from concept to launch.",

  workTitle: "Portfolio — Web Apps, SaaS & Client Projects",
  workDescription:
    "Real projects shipped for real businesses: Event Parlour (events SaaS), Brinex Tech, Navejo (bookmark workspace), and more. Next.js, React, TypeScript — see the code, the results, and the business impact.",

  contactTitle: "Hire Olive Bishop — Book a Project or Consultation",
  contactDescription:
    "Ready to build? Tell Olive about your product, timeline, and budget. Fast responses for freelance web development, SaaS builds, MVP sprints, and ongoing collaborations.",

  workflowTitle: "How I Work — Discovery, Design, Build & Launch",
  workflowDescription:
    "Olive Bishop's project workflow: from discovery and UX research to design, development, testing, and deployment. A clear, repeatable process for client web projects.",

  bookmarksTitle: "Developer Bookmarks — Tools, UI Inspiration & Resources",
  bookmarksDescription:
    "Curated developer tools, UI inspiration, and frontend resources Olive Bishop uses daily — Mobbin, design galleries, component libraries, performance tools, and more.",

  feedbackTitle: "Client Reviews — Verified Google Feedback",
  feedbackDescription:
    "Read verified Google reviews from Olive Bishop's clients. Real ratings, honest feedback, and social proof from businesses who hired a Next.js developer.",
} as const;

const defaultOgImageAlt = `${seo.brand} — Next.js and React developer for hire`;

/** Absolute OG/Twitter image URL — required for reliable X (Twitter) card previews. */
export function getOgImageUrl(): string {
  return `${siteUrl}${OG_IMAGE_PATH}`;
}

export function getDefaultOgImage(alt: string = defaultOgImageAlt) {
  const absoluteUrl = getOgImageUrl();
  return {
    url: absoluteUrl,
    secureUrl: absoluteUrl,
    width: OG_WIDTH,
    height: OG_HEIGHT,
    alt,
    type: "image/png" as const,
  };
}

/** Shared Open Graph + Twitter/X metadata so every route ships a large image card. */
export function buildPageMetadata(options: {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
}): Metadata {
  const { title, description, path, imageAlt } = options;
  const fullTitle = title.includes(seo.brand) ? title : `${title} | ${seo.brand}`;
  const ogImage = getDefaultOgImage(imageAlt);
  const canonicalPath = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const pageUrl = canonicalPath === "/" ? siteUrl : `${siteUrl}${canonicalPath}`;

  return {
    title,
    description,
    keywords: [...geoKeywords],
    ...getGeoMetadataExtras(),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: pageUrl,
      siteName: `${seo.brand} — Web development`,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
      images: [
        {
          url: ogImage.url,
          secureUrl: ogImage.secureUrl,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
          type: ogImage.type,
        },
      ],
    },
  };
}

/** Root layout defaults — same image contract as `buildPageMetadata`. */
export function getRootSocialMetadata(): Pick<Metadata, "openGraph" | "twitter"> {
  const ogImage = getDefaultOgImage();
  return {
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: `${seo.brand} — Web development`,
      title: seo.defaultTitle,
      description: seo.defaultDescription,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.defaultTitle,
      description: seo.defaultDescription,
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
      images: [
        {
          url: ogImage.url,
          secureUrl: ogImage.secureUrl,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
          type: ogImage.type,
        },
      ],
    },
  };
}

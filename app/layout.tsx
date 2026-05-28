import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/shared/navbar";
import GrainOverlay from "@/components/shared/grain-overlay";
import ViewportEdgeFade from "@/components/shared/viewport-edge-fade";
import Footer from "@/components/shared/footer";
import { StructuredData } from "@/components/shared/structured-data";
import Preloader from "@/components/shared/preloader";
import { Toaster } from "sonner";
import { seo, siteUrl } from "@/lib/seo";

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../public/Fonts/WEB/fonts/CabinetGrotesk-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-cabinet-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: seo.brand,
  title: {
    default: seo.defaultTitle,
    template: `%s | ${seo.brand}`,
  },
  description: seo.defaultDescription,
  keywords: [
    "Olive Bishop",
    "hire Next.js developer",
    "hire React developer",
    "freelance web developer",
    "freelance software engineer",
    "Next.js consultant",
    "React TypeScript developer for hire",
    "full stack web developer",
    "web app development services",
    "custom web application developer",
    "SaaS frontend engineer",
    "startup MVP developer",
    "Cloudflare Pages Next.js",
    "high performance web apps",
    "accessible web design",
    "UI/UX engineer",
    "production React apps",
    "Tailwind CSS developer",
    "headless CMS integration",
    "API-first web development",
    "remote web developer",
    "Kenya software engineer",
  ],
  authors: [{ name: "Olive Bishop" }],
  creator: "Olive Bishop",
  publisher: "Olive Bishop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${seo.brand} — Web development`,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${seo.brand} — Next.js and React developer for hire`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    creator: "@olivebishop_dev",
    site: "@olivebishop_dev",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(cabinetGrotesk.variable, geist.variable)} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <StructuredData />
        <Preloader />
        <GrainOverlay />
        <ViewportEdgeFade />
        <Navigation />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

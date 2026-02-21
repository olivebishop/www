import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/shared/navbar";
import GrainOverlay from "@/components/shared/grain-overlay";
import Footer from "@/components/shared/footer";
import { StructuredData } from "@/components/shared/structured-data";
import Preloader from "@/components/shared/preloader";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://olivebishop.com'),
  title: {
    default: "Olive Bishop - Software Engineer & Digital Events Curator",
    template: "%s | Olive Bishop"
  },
  description: "Portfolio of Olive Bishop - Software Engineer, Digital Events Curator, and Mobile Photographer. Specializing in Next.js, React, TypeScript, and modern web development. Creator of Event Parlour and featured on TanStack Showcase.",
  keywords: [
    "Olive Bishop",
    "Software Engineer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Digital Events Curator",
    "Mobile Photographer",
    "Event Parlour",
    "Portfolio",
    "Frontend Developer",
    "Full Stack Developer"
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
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://olivebishop.com',
    siteName: "Olive Bishop Portfolio",
    title: "Olive Bishop - Software Engineer & Digital Events Curator",
    description: "Portfolio of Olive Bishop - Software Engineer, Digital Events Curator, and Mobile Photographer. Specializing in Next.js, React, TypeScript, and modern web development.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Olive Bishop Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olive Bishop - Software Engineer & Digital Events Curator",
    description: "Portfolio of Olive Bishop - Software Engineer, Digital Events Curator, and Mobile Photographer.",
    creator: "@olivebishop_dev",
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
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://olivebishop.com',
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
    <html lang="en" className={cn(cabinetGrotesk.className, geist.variable)}>
      <body className="antialiased">
        <StructuredData />
        <Preloader />
        <GrainOverlay />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

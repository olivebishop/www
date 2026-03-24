import type { Metadata } from "next";
import { About } from "@/components/shared/about-us";
import { seo } from "@/lib/seo";

const fullTitle = `${seo.aboutTitle} | ${seo.brand}`;

export const metadata: Metadata = {
  title: seo.aboutTitle,
  description: seo.aboutDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: fullTitle,
    description: seo.aboutDescription,
    url: "/about",
  },
  twitter: {
    title: fullTitle,
    description: seo.aboutDescription,
  },
};

export default function Page() {
  return <About />;
}

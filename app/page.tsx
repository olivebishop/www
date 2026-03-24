import type { Metadata } from "next";
import Home from "@/components/shared/home";
import { seo } from "@/lib/seo";

const fullTitle = `${seo.homeTitle} | ${seo.brand}`;

export const metadata: Metadata = {
  title: seo.homeTitle,
  description: seo.homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: fullTitle,
    description: seo.homeDescription,
    url: "/",
  },
  twitter: {
    title: fullTitle,
    description: seo.homeDescription,
  },
};

export default function HomePage() {
  return <Home />;
}

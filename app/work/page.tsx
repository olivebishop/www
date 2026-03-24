import type { Metadata } from "next";
import { Work } from "@/components/shared/work";
import { seo } from "@/lib/seo";

const fullTitle = `${seo.workTitle} | ${seo.brand}`;

export const metadata: Metadata = {
  title: seo.workTitle,
  description: seo.workDescription,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: fullTitle,
    description: seo.workDescription,
    url: "/work",
  },
  twitter: {
    title: fullTitle,
    description: seo.workDescription,
  },
};

export default function Page() {
  return <Work />;
}

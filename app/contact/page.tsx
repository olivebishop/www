import type { Metadata } from "next";
import { Contact } from "@/components/shared/contact-us";
import { seo } from "@/lib/seo";

const fullTitle = `${seo.contactTitle} | ${seo.brand}`;

export const metadata: Metadata = {
  title: seo.contactTitle,
  description: seo.contactDescription,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: fullTitle,
    description: seo.contactDescription,
    url: "/contact",
  },
  twitter: {
    title: fullTitle,
    description: seo.contactDescription,
  },
};

export default function ContactPage() {
  return <Contact />;
}

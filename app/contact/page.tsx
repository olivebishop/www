import type { Metadata } from "next";
import { Contact } from "@/components/shared/contact-us";
import { buildPageMetadata, seo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: seo.contactTitle,
  description: seo.contactDescription,
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}

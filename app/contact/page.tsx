import type { Metadata } from "next";
import { Contact } from "@/components/shared/contact-us";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Olive Bishop - Software Engineer, Digital Events Curator, and Mobile Photographer. Available for collaborations and projects.",
  openGraph: {
    title: "Contact Olive Bishop",
    description: "Get in touch with Olive Bishop - Software Engineer, Digital Events Curator, and Mobile Photographer.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
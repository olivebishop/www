import type { Metadata } from "next";
import Testimonials from "@/components/shared/testimonials";
import { seo } from "@/lib/seo";

const fullTitle = `${seo.feedbackTitle} | ${seo.brand}`;

export const metadata: Metadata = {
  title: seo.feedbackTitle,
  description: seo.feedbackDescription,
  alternates: {
    canonical: "/feedback",
  },
  openGraph: {
    title: fullTitle,
    description: seo.feedbackDescription,
    url: "/feedback",
  },
  twitter: {
    title: fullTitle,
    description: seo.feedbackDescription,
  },
};

export default function FeedbackPage() {
  return <Testimonials />;
}

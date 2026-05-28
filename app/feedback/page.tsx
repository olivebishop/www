import type { Metadata } from "next";
import Testimonials from "@/components/shared/testimonials";
import { buildPageMetadata, seo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: seo.feedbackTitle,
  description: seo.feedbackDescription,
  path: "/feedback",
});

export default function FeedbackPage() {
  return <Testimonials />;
}

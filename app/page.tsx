import type { Metadata } from "next";
import Home from "@/components/shared/home";
import Testimonials from "@/components/shared/testimonials";
import { buildPageMetadata, seo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: seo.homeTitle,
  description: seo.homeDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Home />
      <Testimonials />
    </>
  );
}

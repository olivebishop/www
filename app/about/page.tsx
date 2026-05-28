import type { Metadata } from "next";
import { About } from "@/components/shared/about-us";
import { buildPageMetadata, seo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: seo.aboutTitle,
  description: seo.aboutDescription,
  path: "/about",
});

export default function Page() {
  return <About />;
}

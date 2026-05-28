import type { Metadata } from "next";
import { Work } from "@/components/shared/work";
import { buildPageMetadata, seo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: seo.workTitle,
  description: seo.workDescription,
  path: "/work",
});

export default function WorkPage() {
  return <Work />;
}

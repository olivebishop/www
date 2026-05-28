import type { Metadata } from "next";
import { Bookmarks } from "@/components/shared/bookmarks";
import { buildPageMetadata, seo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: seo.bookmarksTitle,
  description: seo.bookmarksDescription,
  path: "/bookmarks",
});

export default function BookmarksPage() {
  return <Bookmarks />;
}

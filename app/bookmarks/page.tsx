import type { Metadata } from "next";
import { Bookmarks } from "@/components/shared/bookmarks";
import { seo } from "@/lib/seo";

const fullTitle = `${seo.bookmarksTitle} | ${seo.brand}`;

export const metadata: Metadata = {
  title: seo.bookmarksTitle,
  description: seo.bookmarksDescription,
  alternates: {
    canonical: "/bookmarks",
  },
  openGraph: {
    title: fullTitle,
    description: seo.bookmarksDescription,
    url: "/bookmarks",
  },
  twitter: {
    title: fullTitle,
    description: seo.bookmarksDescription,
  },
};

export default function Page() {
  return <Bookmarks />;
}

import type { Metadata } from "next";
import { Bookmarks } from "@/components/shared/bookmarks";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "A curated collection of useful tools and resources for web development and design.",
  openGraph: {
    title: "Bookmarks - Olive Bishop",
    description: "A curated collection of useful tools and resources for web development and design.",
    url: "/bookmarks",
  },
};

export default function Page() {
  return <Bookmarks />;
}

import type { Metadata } from "next";
import { Bookmarks } from "@/components/shared/bookmarks";

export const metadata: Metadata = {
  title: "Bookmarks",
  description:
    "Curated tools, design inspiration (Landbook, Mobbin, paywalls, ecommerce UI), and dev resources.",
  openGraph: {
    title: "Bookmarks - Olive Bishop",
    description:
      "Curated tools, design inspiration, and dev resources — ecommerce UI, galleries, app UX, and more.",
    url: "/bookmarks",
  },
};

export default function Page() {
  return <Bookmarks />;
}

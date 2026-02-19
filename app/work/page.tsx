import type { Metadata } from "next";
import { Work } from "@/components/shared/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected works by Olive Bishop including Event Parlour, Brinex Tech, and Sol of African. Also featuring mobile photography portfolio showcasing moments captured on phone.",
  openGraph: {
    title: "Work - Olive Bishop Portfolio",
    description: "Selected works by Olive Bishop including Event Parlour, Brinex Tech, and mobile photography.",
    url: "/work",
  },
};

export default function Page() {
  return <Work />;
}
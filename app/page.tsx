import type { Metadata } from "next";
import Home from "@/components/shared/home";

export const metadata: Metadata = {
  title: "Home",
  description: "Olive Bishop - Software Engineer, Digital Events Curator, and Mobile Photographer. Specializing in Next.js, React, TypeScript, and modern web development. Creator of Event Parlour and featured on TanStack Showcase.",
  openGraph: {
    title: "Olive Bishop - Software Engineer & Digital Events Curator",
    description: "Portfolio of Olive Bishop - Software Engineer, Digital Events Curator, and Mobile Photographer.",
    url: "/",
  },
};

export default function HomePage() {
  return <Home />;
}
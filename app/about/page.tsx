import type { Metadata } from "next";
import { About } from "@/components/shared/about-us";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Olive Bishop - Software Engineer specializing in Next.js, React, TypeScript, Docker, AWS, and modern web technologies. Featured on TanStack Showcase for Event Parlour project.",
  openGraph: {
    title: "About Olive Bishop - Software Engineer",
    description: "Learn about Olive Bishop - Software Engineer specializing in Next.js, React, TypeScript, and modern web technologies.",
    url: "/about",
  },
};

export default function Page() {
  return <About />;
}
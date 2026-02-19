import type { Metadata } from "next";
import { Workflow } from "@/components/shared/workflow";

export const metadata: Metadata = {
  title: "Workflow",
  description: "Olive Bishop's design process - Learn, Think, Create. A solution-based design approach focusing on UX architecture, visual concepts, interactions, development, and testing.",
  openGraph: {
    title: "Workflow - Olive Bishop Design Process",
    description: "Olive Bishop's design process - Learn, Think, Create. A solution-based design approach.",
    url: "/workflow",
  },
};

export default function Page() {
  return <Workflow />;
}
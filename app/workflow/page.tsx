import type { Metadata } from "next";
import { Workflow } from "@/components/shared/workflow";
import { seo } from "@/lib/seo";

const fullTitle = `${seo.workflowTitle} | ${seo.brand}`;

export const metadata: Metadata = {
  title: seo.workflowTitle,
  description: seo.workflowDescription,
  alternates: {
    canonical: "/workflow",
  },
  openGraph: {
    title: fullTitle,
    description: seo.workflowDescription,
    url: "/workflow",
  },
  twitter: {
    title: fullTitle,
    description: seo.workflowDescription,
  },
};

export default function Page() {
  return <Workflow />;
}

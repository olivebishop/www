import type { Metadata } from "next";
import { Workflow } from "@/components/shared/workflow";
import { buildPageMetadata, seo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: seo.workflowTitle,
  description: seo.workflowDescription,
  path: "/workflow",
});

export default function WorkflowPage() {
  return <Workflow />;
}

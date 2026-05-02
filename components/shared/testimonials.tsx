import { getCachedTestimonials } from "@/lib/testimonials/cache";
import TestimonialsClient, { type TestimonialItem } from "./testimonials-client";

export default async function Testimonials() {
  const rows = await getCachedTestimonials();
  const items: TestimonialItem[] = rows.map((r) => ({
    id: r.id,
    name: r.name,
    role: r.role,
    company: r.company,
    content: r.content,
    companyUrl: r.company_url,
    rating: r.rating,
  }));
  return <TestimonialsClient items={items} />;
}

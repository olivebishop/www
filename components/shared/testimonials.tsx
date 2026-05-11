import { getGoogleReviews } from "@/lib/google-reviews";
import TestimonialsClient from "./testimonials-client";

export default async function Testimonials() {
  const summary = await getGoogleReviews();
  return <TestimonialsClient summary={summary} reviews={summary?.reviews ?? []} />;
}

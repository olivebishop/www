import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { TESTIMONIALS_CACHE_PROFILE, TESTIMONIALS_CACHE_TAG } from "./constants";
import { listTestimonials } from "./db";

export { TESTIMONIALS_CACHE_PROFILE, TESTIMONIALS_CACHE_TAG } from "./constants";

/**
 * Cached testimonial list (Next.js Cache Components: `"use cache"` + `cacheTag`).
 * Invalidate with `revalidateTag(TESTIMONIALS_CACHE_TAG, TESTIMONIALS_CACHE_PROFILE)` after writes.
 *
 * @see https://nextjs.org/docs/app/api-reference/directives/use-cache
 */
export async function getCachedTestimonials() {
  "use cache";
  cacheTag(TESTIMONIALS_CACHE_TAG);
  cacheLife(TESTIMONIALS_CACHE_PROFILE);
  return listTestimonials();
}

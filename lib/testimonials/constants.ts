/** Tag shared by `cacheTag` / `revalidateTag` for testimonial list invalidation. */
export const TESTIMONIALS_CACHE_TAG = "testimonials" as const;

/** Must match `cacheLife(...)` on the cached read — required as 2nd arg to `revalidateTag` in Next.js 16+. */
export const TESTIMONIALS_CACHE_PROFILE = "hours" as const;

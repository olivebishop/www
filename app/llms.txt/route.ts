import { buildLlmsTxt } from "@/lib/geo";
import { siteUrl } from "@/lib/seo";

/** Machine-readable site summary for AI crawlers (GEO). */
export function GET(): Response {
  return new Response(buildLlmsTxt(siteUrl), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

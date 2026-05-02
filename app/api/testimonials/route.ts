import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { insertTestimonial } from "@/lib/testimonials/db";
import {
  TESTIMONIALS_CACHE_PROFILE,
  TESTIMONIALS_CACHE_TAG,
} from "@/lib/testimonials/cache";

function normalizeUrl(raw: string | undefined): string | null {
  if (!raw || !raw.trim()) return null;
  const t = raw.trim();
  try {
    const u = new URL(t.includes("://") ? t : `https://${t}`);
    return u.toString();
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const role = typeof body.role === "string" ? body.role.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const content = typeof body.content === "string" ? body.content.trim() : "";
    const companyUrl = normalizeUrl(
      typeof body.companyUrl === "string" ? body.companyUrl : undefined,
    );
    const rawRating = body.rating;
    const rating =
      typeof rawRating === "number" && Number.isInteger(rawRating)
        ? rawRating
        : typeof rawRating === "string" && /^\d+$/.test(rawRating.trim())
          ? Number.parseInt(rawRating.trim(), 10)
          : NaN;

    if (!name || !role || !company || !content) {
      return NextResponse.json(
        { error: "Name, role, company, and testimonial text are required." },
        { status: 400 },
      );
    }
    if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Please choose a star rating from 1 to 5." },
        { status: 400 },
      );
    }
    if (content.length < 20) {
      return NextResponse.json(
        { error: "Please write at least a few sentences (20+ characters)." },
        { status: 400 },
      );
    }
    if (name.length > 120 || role.length > 120 || company.length > 200 || content.length > 4000) {
      return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
    }

    const { id } = await insertTestimonial({
      name,
      role,
      company,
      content,
      companyUrl,
      rating,
    });

    revalidateTag(TESTIMONIALS_CACHE_TAG, TESTIMONIALS_CACHE_PROFILE);

    return NextResponse.json({ ok: true, id }, { status: 201 });
  } catch (e) {
    console.error("testimonials POST", e);
    return NextResponse.json({ error: "Could not save testimonial." }, { status: 500 });
  }
}

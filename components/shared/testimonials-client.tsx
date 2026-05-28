"use client";

import { motion } from "motion/react";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { GoogleLogo } from "./icons";
import type { GoogleReviewItem, GoogleReviewsSummary } from "@/types/google-reviews";

const GOOGLE_STAR_FILLED = "#FBBC04";
const GOOGLE_STAR_EMPTY = "rgba(255,255,255,0.15)";

function GoogleStar({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[14px] w-[14px] sm:h-4 sm:w-4"
      aria-hidden
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill={filled ? GOOGLE_STAR_FILLED : GOOGLE_STAR_EMPTY}
        stroke={filled ? GOOGLE_STAR_FILLED : GOOGLE_STAR_EMPTY}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarRow({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const n = Math.min(5, Math.max(1, Math.round(rating)));
  return (
    <div
      className={`inline-flex items-center ${size === "lg" ? "gap-1" : "gap-0.5"}`}
      aria-label={`${n} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <GoogleStar key={i} filled={i < n} />
      ))}
    </div>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "G";
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2);
}

function ReviewCard({ review, index }: { review: GoogleReviewItem; index: number }) {
  return (
    <motion.article
      key={review.id}
      className="group relative overflow-hidden border border-white/[0.08] bg-[#0c0c0c] p-0 flex flex-col transition-all duration-300 hover:border-white/[0.14]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="px-6 pt-6 pb-0 sm:px-8 sm:pt-8">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <GoogleLogo className="h-[18px] w-[18px] shrink-0" />
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white/40">
              Google review
            </span>
          </div>
          <StarRow rating={review.rating} />
        </div>
      </div>

      <div className="px-6 pt-5 pb-6 sm:px-8 sm:pb-8 flex-1 flex flex-col">
        <p className="body-base text-white/80 leading-[1.85] flex-1">
          &ldquo;{review.text}&rdquo;
        </p>

        <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
          {review.profilePhotoUrl ? (
            <img
              src={review.profilePhotoUrl}
              alt=""
              className="h-10 w-10 shrink-0 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[0.8125rem] font-medium text-white/60">
              {initials(review.authorName)}
            </div>
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="text-[0.9375rem] font-medium text-white/90 tracking-[-0.01em] truncate">
                {review.authorName}
              </p>
              <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-[#4285F4]" />
            </div>
            {review.relativeTimeDescription ? (
              <p className="mt-0.5 text-[0.8125rem] text-white/40">
                {review.relativeTimeDescription}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function SummaryCard({ summary }: { summary: GoogleReviewsSummary }) {
  return (
    <motion.div
      className="border border-white/[0.08] bg-[#0c0c0c] px-6 py-5 sm:px-7 sm:py-6 flex flex-col gap-4"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.35 }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06]">
          <GoogleLogo className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-white/90">{summary.placeName}</p>
          <p className="text-[0.75rem] text-white/40">Google Business Profile</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {typeof summary.rating === "number" ? (
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold tracking-tight text-white/95">
              {summary.rating.toFixed(1)}
            </span>
            <div className="flex flex-col gap-0.5">
              <StarRow rating={summary.rating} size="lg" />
              <span className="text-[0.6875rem] text-white/35">
                {typeof summary.userRatingsTotal === "number"
                  ? `${summary.userRatingsTotal} reviews`
                  : "Google reviews"}
              </span>
            </div>
          </div>
        ) : null}
      </div>

      {summary.placeUrl ? (
        <a
          href={summary.placeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-[#8AB4F8] transition-colors hover:text-[#AECBFA]"
        >
          View on Google Maps
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ) : null}
    </motion.div>
  );
}

export default function TestimonialsClient({
  reviews,
  summary,
}: {
  reviews: GoogleReviewItem[];
  summary: GoogleReviewsSummary | null;
}) {
  const reviewsWithWrittenFeedback = reviews.filter((r) => r.text.trim().length > 0);

  return (
    <motion.section
      id="testimonials"
      className="py-24 sm:py-28 md:py-32 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
        <motion.div
          className="mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.div
                className="flex items-center gap-2.5 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GoogleLogo className="h-4 w-4" />
                <p className="section-label">Google reviews</p>
              </motion.div>
              <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                What clients say on{" "}
                Google
              </motion.h2>
              <motion.p
                className="mt-4 body-base text-foreground/50 max-w-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Verified reviews pulled live from the Google Business profile
                &mdash; unedited and public.
              </motion.p>
            </div>

            {summary ? <SummaryCard summary={summary} /> : null}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviewsWithWrittenFeedback.length > 0 ? (
            reviewsWithWrittenFeedback.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))
          ) : (
            <div className="md:col-span-2 lg:col-span-3 border border-white/[0.08] bg-[#0c0c0c] p-8 sm:p-10 text-center text-white/50">
              <GoogleLogo className="mx-auto h-8 w-8 mb-4 opacity-40" />
              <p className="max-w-md mx-auto">
                Add your public Google reviews in{" "}
                <code className="text-white/60">data/google-reviews.curated.ts</code>.
              </p>
              {summary?.placeUrl ? (
                <a
                  href={summary.placeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-[#8AB4F8] hover:text-[#AECBFA]"
                >
                  Read reviews on Google Maps
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

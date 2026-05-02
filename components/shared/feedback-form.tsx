"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { HugeiconsArrowUpRight } from "./icons";

export type FeedbackFormProps = {
  variant?: "dark" | "light";
  onSubmitted?: () => void;
};

export function FeedbackForm({ variant = "dark", onSubmitted }: FeedbackFormProps) {
  const isLight = variant === "light";
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  const labelClass = isLight
    ? "mb-2 block text-sm font-medium text-gray-700"
    : "mb-2 block text-[0.6875rem] uppercase tracking-[0.12em] text-white/45";

  const optionalSpan = isLight
    ? "text-gray-400 normal-case tracking-normal font-normal"
    : "text-white/25 normal-case tracking-normal";

  const inputClass = isLight
    ? "w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/15"
    : "w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30";

  const helperClass = isLight ? "text-gray-500" : "text-white/35";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim() || !company.trim() || !content.trim()) {
      toast.error("Please fill in every required field.");
      return;
    }
    if (content.trim().length < 20) {
      toast.error("A few more sentences help — at least 20 characters.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          role: role.trim(),
          company: company.trim(),
          companyUrl: companyUrl.trim() || undefined,
          content: content.trim(),
          rating,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(typeof data.error === "string" ? data.error : "Something went wrong.");
        return;
      }
      toast.success(
        "Thank you — your testimonial is live with the others on the homepage.",
      );
      setName("");
      setRole("");
      setCompany("");
      setCompanyUrl("");
      setContent("");
      setRating(5);
      onSubmitted?.();
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 sm:space-y-7"
      initial={isLight ? false : { opacity: 0, y: 24 }}
      animate={isLight ? false : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="How you would like to appear"
            disabled={submitting}
            autoComplete="name"
          />
        </div>
        <div>
          <label className={labelClass}>Role *</label>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={inputClass}
            placeholder="Founder, CEO…"
            disabled={submitting}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Company *</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass}
          placeholder="Company or project name"
          disabled={submitting}
        />
      </div>

      <div>
        <label className={labelClass}>
          Company website <span className={optionalSpan}>(optional)</span>
        </label>
        <input
          value={companyUrl}
          onChange={(e) => setCompanyUrl(e.target.value)}
          className={inputClass}
          placeholder="https://…"
          disabled={submitting}
          inputMode="url"
        />
      </div>

      <div>
        <label id="feedback-rating-label" className={labelClass}>
          Overall experience *
        </label>
        <p className={cn("mb-3 text-[0.8125rem]", helperClass)}>
          1–5 stars — same signal visitors see on the testimonial cards.
        </p>
        <div
          className="inline-flex flex-wrap items-center gap-2"
          role="group"
          aria-labelledby="feedback-rating-label"
        >
          <div className="flex items-center gap-0.5 sm:gap-1">
            {[1, 2, 3, 4, 5].map((value) => {
              const active = value <= rating;
              return (
                <button
                  key={value}
                  type="button"
                  disabled={submitting}
                  onClick={() => setRating(value)}
                  className={cn(
                    "rounded-lg p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50",
                    isLight
                      ? "hover:bg-gray-100 focus-visible:ring-black/20"
                      : "hover:bg-white/5 focus-visible:ring-primary/45",
                  )}
                  aria-label={`Rate ${value} out of 5 stars`}
                >
                  <Star
                    className={cn(
                      "h-7 w-7 sm:h-8 sm:w-8",
                      active
                        ? "fill-primary stroke-primary"
                        : isLight
                          ? "fill-transparent stroke-neutral-300"
                          : "fill-transparent stroke-white/35",
                    )}
                    strokeWidth={1.35}
                  />
                </button>
              );
            })}
          </div>
          <span
            className={cn(
              "pl-0.5 text-sm font-medium tabular-nums sm:pl-1",
              isLight ? "text-gray-600" : "text-white/50",
            )}
          >
            {rating} / 5
          </span>
        </div>
      </div>

      <div>
        <label className={labelClass}>Client feedback *</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className={cn(inputClass, "min-h-[160px] resize-y leading-relaxed")}
          placeholder="What we built together, how seamless it felt, and how it changed your digital presence or brand — in your own words."
          disabled={submitting}
        />
        <p className={cn("mt-2 text-[0.8125rem]", helperClass)}>{content.length} characters (min 20)</p>
      </div>

      {isLight ? (
        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? (
            "Sending…"
          ) : (
            <>
              Submit testimonial
              <HugeiconsArrowUpRight className="h-5 w-5" />
            </>
          )}
        </button>
      ) : (
        <motion.button
          type="submit"
          disabled={submitting}
          className="cta-primary w-full justify-center disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
          whileHover={{ scale: submitting ? 1 : 1.03 }}
          whileTap={{ scale: submitting ? 1 : 0.98 }}
        >
          {submitting ? "Sending…" : "Submit testimonial"}
          <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.button>
      )}
    </motion.form>
  );
}

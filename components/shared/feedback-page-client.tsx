"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FeedbackDrawer } from "@/components/shared/feedback-drawer";
import { HugeiconsArrowUpRight } from "./icons";

export function FeedbackPageClient() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,color-mix(in_oklch,var(--primary)_22%,transparent),transparent_55%),radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(255,125,72,0.08),transparent_50%),radial-gradient(ellipse_50%_35%_at_0%_80%,rgba(255,125,72,0.06),transparent_45%)] opacity-45"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl flex-col items-center justify-center px-5 pb-24 pt-28 text-center sm:px-8 sm:pt-32 md:min-h-[calc(100vh-6rem)] md:px-12 md:pb-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex max-w-2xl flex-col items-center"
        >
          <p className="section-label mb-4">Testimonials</p>
          <h1 className="font-display text-[2rem] font-normal leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Words from <span className="text-primary">you</span>, for the next founder on the
            homepage.
          </h1>
          <p className="body-lg mt-6 max-w-xl leading-[1.65] text-foreground/50">
            Same kind of honest client feedback as the quotes below — vision, how the process felt,
            and what changed for your brand or users. Open the form when you&apos;re ready.
          </p>

          <motion.button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="cta-primary mt-10 justify-center sm:mt-12"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Share your testimonial
            <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>

          <Link
            href="/#testimonials"
            className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
          >
            Words from founders
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>

      <FeedbackDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}

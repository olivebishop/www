"use client";

import { motion } from "motion/react";
import { FeedbackForm } from "@/components/shared/feedback-form";

export function FeedbackDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-3 top-3 z-[70] h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] overflow-y-auto rounded-2xl border border-black/10 bg-white font-body shadow-2xl sm:right-4 sm:top-4 sm:h-[calc(100%-2rem)] sm:w-[calc(100%-2rem)] md:w-[680px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="feedback-drawer-title"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-gray-100 bg-white px-7 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7">
          <div>
            <h2
              id="feedback-drawer-title"
              className="font-display text-2xl font-semibold text-gray-900"
            >
              Client feedback
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Your testimonial appears on the homepage with the others.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full p-2 text-black transition-colors hover:bg-gray-100"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-7 py-6 sm:px-10 sm:py-7 md:px-12 md:py-8">
          <FeedbackForm variant="light" onSubmitted={onClose} />
        </div>
      </motion.div>
    </>
  );
}

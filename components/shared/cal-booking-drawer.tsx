'use client';

import { motion } from 'motion/react';

interface CalBookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalBookingDrawer({ isOpen, onClose }: CalBookingDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
        onClick={onClose}
      />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed right-3 sm:right-4 top-3 sm:top-4 h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] md:w-[680px] bg-white z-[80] flex flex-col rounded-2xl border border-black/10 shadow-2xl overflow-hidden"
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 px-7 py-5 sm:px-10 sm:py-6 flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-gray-900">Book a Free Strategy Call</h2>
            <p className="text-sm text-gray-500 mt-1">Get clear next steps to launch or improve your website.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-black hover:bg-gray-100 transition-colors"
            aria-label="Close call booking drawer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 min-h-0 p-3 sm:p-4 bg-gray-50">
          <iframe
            title="Book a 30 minute call with Olive Bishop"
            src="https://cal.com/olivebishop/30min?embed=true"
            className="w-full h-full border border-gray-200 rounded-xl bg-white"
            loading="eager"
          />
        </div>
      </motion.div>
    </>
  );
}

interface CalBookingPreloadProps {
  enabled: boolean;
}

export function CalBookingPreload({ enabled }: CalBookingPreloadProps) {
  if (!enabled) return null;

  return (
    <div className="fixed -left-[9999px] -top-[9999px] w-px h-px overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
      <iframe
        title="Preload call booking"
        src="https://cal.com/olivebishop/30min?embed=true"
        className="w-px h-px border-0"
        loading="eager"
        tabIndex={-1}
      />
    </div>
  );
}

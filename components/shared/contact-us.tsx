'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { HugeiconsArrowUpRight, HugeiconsCopy01 } from './icons';
import ProjectDrawer from './project-drawer';
import { CalBookingDrawer, CalBookingPreload } from './cal-booking-drawer';

const socials = [
  { name: 'Twitter/X', href: 'https://x.com/olivebishop_dev' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/olivebishop/' },
  { name: 'GitHub', href: 'https://github.com/olivebishop' },
  { name: 'Instagram', href: 'https://www.instagram.com/rhymer_ke/' },
];

export function Contact() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [callDrawerOpen, setCallDrawerOpen] = useState(false);
  const [shouldPreloadCal, setShouldPreloadCal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      ?.writeText('hello@olivebishop.com')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      {/* Image Section - Left Side - Hidden on small devices */}
      <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-0 lg:h-screen relative">
        <Image
          src="/images/contact.png"
          alt="Do hello before you go"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content - Right Side */}
      <div className="w-full lg:w-1/2">
        <div className="px-5 sm:px-8 md:px-14 lg:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-40 max-w-2xl mx-auto lg:mx-0">
          {/* Label */}
          <motion.p
            className="section-label mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Get in touch
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.03em] leading-[1.12] mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Let&apos;s make{' '}
            <span className="text-primary">something</span>{' '}
            <span className="hidden sm:inline"><br /></span>
            great together.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="body-base sm:body-lg text-foreground/50 leading-[1.7] mb-8 sm:mb-12 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Have a project in mind, want to collaborate, or just want to say hello? 
            I&apos;d love to hear from you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full sm:w-auto">
              <motion.button
                onClick={() => setDrawerOpen(true)}
                className="cta-primary w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
                <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>

            <div className="w-full sm:w-auto">
              <motion.button
                onClick={() => setCallDrawerOpen(true)}
                onMouseEnter={() => setShouldPreloadCal(true)}
                onFocus={() => setShouldPreloadCal(true)}
                onTouchStart={() => setShouldPreloadCal(true)}
                className="cta-secondary w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Call
                <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mb-8 sm:mb-12 grid grid-cols-3 gap-4 sm:gap-10 font-body"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <p className="font-display text-xl sm:text-3xl font-bold text-foreground tracking-[-0.02em]">24h</p>
              <p className="text-[0.75rem] sm:text-[0.8125rem] text-foreground/40 mt-1">Response time</p>
            </div>
            <div>
              <p className="font-display text-xl sm:text-3xl font-bold text-foreground tracking-[-0.02em]">5+</p>
              <p className="text-[0.75rem] sm:text-[0.8125rem] text-foreground/40 mt-1">Projects delivered</p>
            </div>
            <div>
              <p className="font-display text-xl sm:text-3xl font-bold text-primary tracking-[-0.02em]">100%</p>
              <p className="text-[0.75rem] sm:text-[0.8125rem] text-foreground/40 mt-1">Client satisfaction</p>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="h-px bg-border mb-8 sm:mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Email Section */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-3">
              Email
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="mailto:hello@olivebishop.com"
                className="text-base sm:text-xl md:text-2xl font-medium tracking-[-0.02em] hover:text-primary transition-colors truncate"
              >
                hello@olivebishop.com
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="p-1.5 rounded border border-foreground/10 hover:border-primary hover:text-primary transition-colors flex-shrink-0"
                aria-label="Copy email address"
              >
                <HugeiconsCopy01 className="w-4 h-4" />
              </button>
              {copied && (
                <motion.span
                  className="text-[0.8125rem] text-foreground/40 flex-shrink-0"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Copied!
                </motion.span>
              )}
            </div>
          </motion.div>

          {/* Based In */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-3">
              Based in
            </p>
            <p className="text-base sm:text-xl md:text-2xl font-medium tracking-[-0.02em]">
              Nairobi, Kenya
            </p>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-4">
              Socials
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 border border-foreground/10 text-[0.8125rem] sm:text-sm text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 rounded-sm tracking-[-0.01em]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.name}
                  <HugeiconsArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Drawer */}
      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>

      {/* Call Drawer */}
      <AnimatePresence>
        <CalBookingDrawer isOpen={callDrawerOpen} onClose={() => setCallDrawerOpen(false)} />
      </AnimatePresence>

      {/* Cal preloader: warm iframe before drawer opens */}
      <CalBookingPreload enabled={shouldPreloadCal && !callDrawerOpen} />
    </div>
  );
}

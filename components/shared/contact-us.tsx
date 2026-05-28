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

const ease = [0.16, 1, 0.3, 1] as const;

const imageSpacerCol =
  'hidden lg:col-span-5 lg:col-start-1 xl:col-span-6';

const contentCol =
  'lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7';

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
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Slanted image — left half of viewport, aligned with site grid */}
      <motion.div
        className="pointer-events-none absolute z-0 max-lg:inset-x-0 max-lg:top-0 max-lg:h-[min(44vh,19rem)] lg:bottom-0 lg:left-0 lg:top-0 lg:h-full lg:w-[min(54vw,42rem)]"
        style={{
          clipPath: 'polygon(0 12%, 100% 0, 100% 100%, 0 100%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease }}
        aria-hidden
      >
        <div className="absolute inset-0 lg:hidden" style={{ clipPath: 'inherit' }}>
          <Image
            src="/images/contact.png"
            alt=""
            fill
            priority
            className="object-cover object-[center_20%]"
            sizes="100vw"
            quality={90}
          />
        </div>
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ clipPath: 'polygon(0 0, 84% 0, 100% 100%, 0 100%)' }}
        >
          <Image
            src="/images/contact.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="54vw"
            quality={90}
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/25 via-background/60 to-background lg:hidden"
          style={{ clipPath: 'inherit' }}
        />
        <div
          className="absolute inset-0 hidden bg-gradient-to-l from-background from-20% via-background/55 via-50% to-transparent lg:block"
          style={{ clipPath: 'polygon(0 0, 84% 0, 100% 100%, 0 100%)' }}
        />
      </motion.div>

      {/* Hero — same shell as About / Work */}
      <section className="relative z-10 px-5 pb-12 pt-[max(5.5rem,min(36vh,16rem))] sm:px-8 sm:pb-14 sm:pt-[max(6rem,min(38vh,17rem))] md:px-16 md:pb-16 lg:min-h-[min(100vh,52rem)] lg:pb-20 lg:pt-32 xl:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
            <div className={imageSpacerCol} aria-hidden />

            <div
              className={`${contentCol} flex flex-col justify-center lg:min-h-[calc(100vh-11rem)] lg:py-8`}
            >
              <motion.p
                className="section-label mb-5 sm:mb-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                Contact
              </motion.p>

              <motion.h1
                className="font-display text-[clamp(2rem,5.5vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.03em] text-foreground"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.06, ease }}
              >
                Let&apos;s build something worth shipping.
              </motion.h1>

              <motion.p
                className="body-base mt-5 max-w-xl leading-[1.7] text-foreground/55 sm:body-lg"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12, ease }}
              >
                Taking 1–2 new system builds per month. Tell me what you&apos;re working on — I&apos;ll
                reply within 24 hours with honest thoughts, not a sales script.
              </motion.p>

              <motion.div
                className="cta-row cta-row--align-start mt-8 w-full sm:mt-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease }}
              >
                <motion.button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="cta-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start a Project
                  <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setCallDrawerOpen(true)}
                  onMouseEnter={() => setShouldPreloadCal(true)}
                  onFocus={() => setShouldPreloadCal(true)}
                  onTouchStart={() => setShouldPreloadCal(true)}
                  className="cta-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Call
                  <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Details — same column width as hero for alignment */}
      <section className="relative z-10 px-5 pb-24 sm:px-8 md:px-16 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
            <div className={imageSpacerCol} aria-hidden />

            <div className={contentCol}>
              <motion.div
                className="border-t border-white/10 py-10 sm:py-12"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease }}
              >
                <p className="section-label mb-4">Email</p>
                <div className="flex flex-wrap items-end gap-3 sm:gap-4">
                  <a
                    href="mailto:hello@olivebishop.com"
                    className="font-display text-[clamp(1.5rem,4vw,2.75rem)] leading-none tracking-[-0.03em] text-foreground transition-opacity hover:opacity-80"
                  >
                    hello@olivebishop.com
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="mb-1 inline-flex items-center gap-1.5 text-[0.8125rem] text-foreground/40 transition-colors hover:text-foreground"
                    aria-label="Copy email address"
                  >
                    <HugeiconsCopy01 className="h-3.5 w-3.5" />
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="grid gap-8 border-t border-white/10 py-10 sm:grid-cols-2 sm:gap-12 sm:py-12"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease }}
              >
                <div>
                  <p className="section-label mb-2">Based in</p>
                  <p className="text-lg font-medium tracking-[-0.02em] text-foreground sm:text-xl">
                    Nairobi, Kenya
                  </p>
                  <p className="mt-1.5 text-sm text-foreground/40">EAT (UTC+3)</p>
                </div>
                <div>
                  <p className="section-label mb-2">Working with</p>
                  <p className="text-sm leading-relaxed text-foreground/50">
                    Founders and teams across Africa, the US, and Europe — async-friendly, flexible
                    on call times.
                  </p>
                </div>
              </motion.div>

              <motion.nav
                className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-10 sm:pt-12"
                aria-label="Social links"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
              >
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-foreground/45 transition-colors hover:text-foreground"
                  >
                    {social.name}
                    <HugeiconsArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </motion.nav>
            </div>
          </div>
        </div>
      </section>

      <span className="sr-only">Do hello before you go — contact page portrait</span>

      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>

      <AnimatePresence>
        <CalBookingDrawer isOpen={callDrawerOpen} onClose={() => setCallDrawerOpen(false)} />
      </AnimatePresence>

      <CalBookingPreload enabled={shouldPreloadCal && !callDrawerOpen} />
    </div>
  );
}

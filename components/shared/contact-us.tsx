'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { HugeiconsArrowUpRight, HugeiconsCopy01 } from './icons';
import ProjectDrawer from './project-drawer';

const socials = [
  { name: 'Twitter/X', href: 'https://x.com/olivebishop_dev' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/olivebishop/' },
  { name: 'GitHub', href: 'https://github.com/olivebishop' },
  { name: 'Instagram', href: 'https://www.instagram.com/rhymer_ke/' },
];

export function Contact() {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
        <div className="px-6 sm:px-10 md:px-14 lg:px-16 py-24 sm:py-28 md:py-32 lg:py-40 max-w-2xl">
          {/* Label */}
          <motion.p
            className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Get in touch
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Let&apos;s make{' '}
            <em className="text-primary not-italic">something</em>
            <br />
            great together.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-10 sm:mb-12 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Have a project in mind, want to collaborate, or just want to say hello? 
            I&apos;d love to hear from you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-14 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-foreground text-background text-xs sm:text-sm font-medium tracking-wide uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
              <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            <motion.a
              href="https://cal.com/olivebishop/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border border-foreground/20 text-foreground text-xs sm:text-sm font-medium tracking-wide uppercase rounded-sm hover:bg-foreground hover:text-background transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
              <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="h-px bg-border mb-10 sm:mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Email Section */}
          <motion.div
            className="mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Email
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@olivebishop.com"
                className="text-lg sm:text-xl md:text-2xl font-medium hover:text-primary transition-colors"
              >
                hello@olivebishop.com
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="p-1.5 rounded border border-foreground/10 hover:border-primary hover:text-primary transition-colors"
                aria-label="Copy email address"
              >
                <HugeiconsCopy01 className="w-4 h-4" />
              </button>
              {copied && (
                <motion.span
                  className="text-xs text-muted-foreground"
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
            className="mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Based in
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-medium">
              Nairobi, Kenya
            </p>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Socials
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-foreground/10 text-sm text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 rounded-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.name}
                  <HugeiconsArrowUpRight className="w-3.5 h-3.5" />
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
    </div>
  );
}

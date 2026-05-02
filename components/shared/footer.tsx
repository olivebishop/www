"use client";

import Link from "next/link";
import { useState } from "react";
import { HugeiconsCopy01 } from "./icons";
import { ScrambleText } from "@/components/ui/scramble-text";

/**
 * No `new Date()` here — Cache Components prerender flags that on client modules.
 * Override per deploy: set `NEXT_PUBLIC_COPYRIGHT_YEAR` (e.g. `2027`) in Vercel env.
 */
const COPYRIGHT_YEAR =
  typeof process.env.NEXT_PUBLIC_COPYRIGHT_YEAR === "string" &&
  /^\d{4}$/.test(process.env.NEXT_PUBLIC_COPYRIGHT_YEAR.trim())
    ? process.env.NEXT_PUBLIC_COPYRIGHT_YEAR.trim()
    : "2026";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      ?.writeText("hello@olivebishop.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  return (
    <footer className="relative bg-white text-black">
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6">
          <nav className="flex flex-wrap items-center gap-5 sm:gap-6 md:gap-8 text-[0.9375rem] text-black tracking-[-0.01em]">
            <Link href="/work" className="hover:text-primary transition-colors">
              <ScrambleText text="Work" duration={1000} delay={0} />
            </Link>
            <Link href="/workflow" className="hover:text-primary transition-colors">
              <ScrambleText text="Workflow" duration={1000} delay={200} />
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              <ScrambleText text="About" duration={1000} delay={400} />
            </Link>
            <Link href="/bookmarks" className="hover:text-primary transition-colors">
              <ScrambleText text="Bookmarks" duration={1000} delay={500} />
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              <ScrambleText text="Contact" duration={1000} delay={600} />
            </Link>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="mailto:hello@olivebishop.com"
              className="text-[0.8125rem] sm:text-sm md:text-[0.9375rem] text-black/80 hover:text-primary transition-colors tracking-[-0.01em]"
            >
              hello@olivebishop.com
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="p-1 rounded border border-black/10 hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
              aria-label="Copy email address"
            >
              <HugeiconsCopy01 className="w-4 h-4" />
            </button>
            {copied && (
              <span className="text-[0.8125rem] text-black/50">
                Copied
              </span>
            )}
          </div>
        </div>

        <div className="h-px bg-black/10 w-full" />
      </div>

      <div className="px-5 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-[-0.02em]">
              Olive Bishop
            </h2>
            <p className="text-[0.9375rem] text-black/70 max-w-md leading-[1.7]">
              Focusing on creating visual experiences that feel purposeful, elegant and approachable
            </p>
            <p className="text-[0.8125rem] text-black/50">
              ©{COPYRIGHT_YEAR} Olive Bishop. All rights reserved.
              <span className="text-black/25 mx-1.5" aria-hidden>
                ·
              </span>
              <Link
                href="/feedback"
                className="text-black/35 hover:text-black/55 transition-colors underline-offset-2 hover:underline"
              >
                Client testimonial
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[0.8125rem] font-medium text-black uppercase tracking-[0.12em]">
              Legal
            </h3>
            <ul className="space-y-2.5 text-[0.9375rem]">
              <li>
                <Link href="/privacy-policy" className="text-black/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-black/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-black/70 hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[0.8125rem] font-medium text-black uppercase tracking-[0.12em]">
              Pages
            </h3>
            <ul className="space-y-2.5 text-[0.9375rem]">
              <li>
                <Link href="/" className="text-black/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-black/70 hover:text-primary transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/bookmarks" className="text-black/70 hover:text-primary transition-colors">
                  Bookmarks
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[0.8125rem] font-medium text-black uppercase tracking-[0.12em]">
              Socials
            </h3>
            <ul className="space-y-2.5 text-[0.9375rem]">
              <li>
                <a
                  href="https://www.instagram.com/rhymer_ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/olivebishop_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-primary transition-colors"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/olivebishop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/olivebishop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative px-5 sm:px-8 md:px-12 lg:px-16 py-6 md:py-8 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <div
            className="font-display text-[10rem] sm:text-[15rem] md:text-[20rem] lg:text-[25rem] xl:text-[30rem] font-bold text-black/5 select-none whitespace-nowrap"
            style={{
              filter: "blur(60px)",
              lineHeight: "0.8",
              letterSpacing: "-0.02em",
              transform: "translateY(30%)",
            }}
          >
            Olive Bishop
          </div>
        </div>
      </div>
    </footer>
  );
}

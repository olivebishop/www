'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HugeiconsCopy01 } from './icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      ?.writeText('olivehendrilgen1@gmail.com')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  return (
    <footer className="relative bg-white text-black">
      {/* Top Navigation and Contact Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 mb-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-black">
            <Link href="/work" className="hover:text-primary transition-colors">
              Work
            </Link>
            <Link href="/workflow" className="hover:text-primary transition-colors">
              Workflow
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Email */}
          <div className="flex items-center gap-2">
            <a 
              href="mailto:olivehendrilgen1@gmail.com" 
              className="text-xs sm:text-sm md:text-base text-black hover:text-primary transition-colors"
            >
              olivehendrilgen1@gmail.com
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
              <span className="text-xs text-black/60">
                Copied
              </span>
            )}
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px bg-black/10 w-full" />
      </div>

      {/* Main Footer Content - Three Column Layout */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Left Column - Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              Olive Bishop
            </h2>
            <p className="text-sm sm:text-base text-black/80 max-w-md">
              Focusing on creating visual experiences that feel purposeful, elegant and approachable
            </p>
            <p className="text-xs sm:text-sm text-black/60">
              ©{currentYear} Olive Bishop. All rights reserved.
            </p>
          </div>

          {/* Middle Column - Legal */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-medium text-black uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="#" className="text-black/80 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black/80 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black/80 hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle Column - Pages */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-medium text-black uppercase tracking-wider">
              Pages
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/" className="text-black/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-black/80 hover:text-primary transition-colors">
                  Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Socials */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-medium text-black uppercase tracking-wider">
              Socials
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a 
                  href="https://www.instagram.com/rhymer_ke/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black/80 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/olivebishop_dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black/80 hover:text-primary transition-colors"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/olivebishop/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black/80 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/olivebishop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black/80 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section with Stylistic Elements */}
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-6 md:py-8 overflow-hidden">
        {/* Large Blurred Brand Text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <div 
            className="text-[10rem] sm:text-[15rem] md:text-[20rem] lg:text-[25rem] xl:text-[30rem] font-bold text-black/5 select-none whitespace-nowrap"
            style={{
              filter: 'blur(60px)',
              lineHeight: '0.8',
              letterSpacing: '-0.02em',
              transform: 'translateY(30%)',
            }}
          >
            Olive Bishop
          </div>
        </div>
      </div>
    </footer>
  );
}

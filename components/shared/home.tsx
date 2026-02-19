'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import Brands from './brands';
import { HugeiconsGithub, HugeiconsInstagram, HugeiconsNewTwitter, HugeiconsLinkedin02 } from './icons';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const elements = heroRef.current.querySelectorAll('.parallax');
        elements.forEach((el, i) => {
          const speed = 0.1 + (i * 0.05);
          (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 sm:pt-28 md:pt-32"
      >
        {/* Background Circle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full border border-border/50" />
        </div>

        {/* Horizontal Line */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-border/50" />

        {/* Number Indicators */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-8 md:px-16 pointer-events-none">
          {['01', '02', '03', '04', '05', '06', '07', '08', '09'].map((num) => (
            <span key={num} className="text-xs text-muted-foreground font-light">{num}</span>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8">
          {/* Name + Image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
            {/* Left Name - hidden on small screens */}
            <h1 className="hero-name text-foreground parallax hidden md:block">Olive</h1>
            
            {/* Center Image */}
            <div className="relative mx-4 md:mx-6 lg:mx-8 px-2 sm:px-4 md:px-8 lg:px-12">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-muted rounded-sm overflow-hidden shadow-2xl">
                <Image 
                  src="/images/hero.jpeg" 
                  alt="Portfolio Preview" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                  priority
                />
              </div>
            </div>
            
            {/* Right Name - hidden on small screens */}
            <h1 className="hero-name text-foreground parallax hidden md:block">Bishop</h1>
          </div>
        </div>

        {/* Social Links */}
        <div className="absolute left-4 sm:left-8 md:left-16 bottom-8 sm:bottom-16 md:bottom-32">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4">
            IAM SOCIAL :)
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="https://github.com/olivebishop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              aria-label="GitHub"
            >
              <HugeiconsGithub className="w-4 h-4 sm:w-5 sm:h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
            <a 
              href="https://www.instagram.com/rhymer_ke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              aria-label="Instagram"
            >
              <HugeiconsInstagram className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
            <a 
              href="https://x.com/olivebishop_dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              aria-label="Twitter"
            >
              <HugeiconsNewTwitter className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/olivebishop/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <HugeiconsLinkedin02 className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>

        {/* Services & Interactive Elements */}
        <div className="absolute right-4 sm:right-8 md:right-16 bottom-8 sm:bottom-16 md:bottom-32 text-right">
          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
            <Sparkles className="text-primary w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider -rotate-12 origin-bottom-left">
              Click click
            </div>
          </div>
          <ul className="space-y-1 text-xs sm:text-sm text-foreground">
            <li>Software engineer</li>
            <li>Digital Events Curator</li>
            <li>Mobile photographer</li>
          </ul>
        </div>

      </section>

      {/* Brands Section */}
      <Brands />

      {/* Selected Works Section */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="px-6 sm:px-8 md:px-16 mb-8 sm:mb-12 flex items-baseline justify-between gap-4">
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Selected works
            </p>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground/80 max-w-xs">
              A snapshot of products and collaborations I&apos;ve been building recently.
            </p>
          </div>
          <a
            href="/work"
            className="hidden sm:inline-flex text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors"
          >
            View all work +
          </a>
        </div>

        <div className="space-y-10 sm:space-y-16 px-6 sm:px-8 md:px-16">
          {/* Project 1: Event Parlour */}
          <article className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border/60 bg-background/60 backdrop-blur-sm">
            <div className="relative h-64 sm:h-80 md:h-[420px] lg:h-[70vh] overflow-hidden group bg-muted/30">
              <Image 
                src="/images/project2 .png" 
                alt="Event Parlour" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-3 sm:gap-4">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Startup project
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
                Event Parlour
              </h3>
              <p className="text-sm sm:text-base text-foreground/80">
                Event and ticketing platform helping creators run digital and in-person experiences.
              </p>
              <p className="text-xs sm:text-sm text-foreground/70 max-w-md">
                Built with Next.js, Supabase, Drizzle ORM, Resend, Google Analytics, and Paystack.
              </p>
              <a 
                href="https://eventparlour.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium link-underline hover:text-primary transition-colors text-foreground mt-2"
              >
                Visit website +
              </a>
            </div>
          </article>

          {/* Project 2: Brinex */}
          <article className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border/60 bg-background/60 backdrop-blur-sm">
            <div className="order-2 lg:order-1 p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-3 sm:gap-4">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Freelance
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground">
                Brinex Tech
              </h3>
              <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-muted-foreground mb-1">
                Brand / Company website
              </p>
              <p className="text-sm sm:text-base text-foreground/80 max-w-md">
                A clean, responsive marketing site for a technology company, focused on clarity and trust.
              </p>
              <p className="text-xs sm:text-sm text-foreground/70 max-w-md">
                Built with Next.js, SEO best practices, responsive layout, and subtle motion to highlight key sections.
              </p>
              <a 
                href="https://www.brinex-tech.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium link-underline hover:text-primary transition-colors mt-2"
              >
                Visit website +
              </a>
            </div>
            <div className="relative order-1 lg:order-2 h-64 sm:h-80 md:h-[420px] lg:h-[70vh] overflow-hidden group bg-muted/30">
              <Image 
                src="/images/project1.png" 
                alt="Brinex Tech" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
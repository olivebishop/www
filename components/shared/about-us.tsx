'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  TeenyiconsNextjsSolid,
  LogosVercel,
  DeviconReactWordmark,
  MaterialIconThemeDocker,
  CibTypescript,
  DeviconPlainJavascript,
  LineiconsAws,
  StreamlineLogosFigmaLogoBlock,
  DeviconMotion,
  CibCcStripe,
  LineiconsPostgresql,
  LineiconsSupabase,
} from './icons';

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        {/* Portrait Image */}
        <div className="relative h-[50vh] sm:h-[60vh] md:h-screen w-full order-1 md:order-1">
          <Image 
            src="/images/about.jpeg" 
            alt="Olive Bishop" 
            fill
            className="object-cover grayscale"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

        {/* Content */}
        <div className="bg-background p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-2 min-h-[50vh] sm:min-h-[60vh] md:min-h-0">
          <div className="reveal opacity-0">
            <h1 className="display-large mb-6 sm:mb-8">O.B.</h1>
            <h2 className="page-title mb-8 sm:mb-10 lg:mb-12">a bit about myself</h2>

            {/* Technologies */}
            <div className="mt-8 sm:mt-12">
              <p className="section-label mb-4">Technologies</p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                  <TeenyiconsNextjsSolid className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-sm sm:text-base font-medium">Next.js</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                  <LogosVercel className="w-20 sm:w-24 h-auto" />
                </div>
                <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                  <DeviconReactWordmark className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-sm sm:text-base font-medium">React</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                  <MaterialIconThemeDocker className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-sm sm:text-base font-medium">Docker</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                  <CibTypescript className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-sm sm:text-base font-medium">TypeScript</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                  <DeviconPlainJavascript className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-sm sm:text-base font-medium">JavaScript</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                  <LineiconsAws className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-sm sm:text-base font-medium">AWS</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                  <StreamlineLogosFigmaLogoBlock className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-sm sm:text-base font-medium">Figma</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                  <DeviconMotion className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-sm sm:text-base font-medium">Motion</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                  <CibCcStripe className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-sm sm:text-base font-medium">Stripe</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                  <LineiconsPostgresql className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-sm sm:text-base font-medium">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                  <LineiconsSupabase className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-sm sm:text-base font-medium">Supabase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-8 md:px-16 py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto reveal opacity-0">
          <p className="section-label mb-4">Achievements</p>
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl">
              Event Parlour listed on TanStack Showcase
            </h3>
            <p className="text-sm sm:text-base text-foreground/80 max-w-xl">
              Event Parlour, the event and ticketing platform I&apos;m building, is featured on the official TanStack Showcase as a production use case for TanStack Query and TanStack Table.
            </p>
            <a
              href="https://tanstack.com/showcase/3c337dc8-cc31-40ee-adfc-413e9bdf041b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-foreground hover:text-primary transition-colors link-underline"
            >
              View on TanStack Showcase
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
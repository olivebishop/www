'use client';
import { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <section className="flex-1 flex flex-col items-center justify-center px-8 md:px-16 py-32">
        {/* Main Heading */}
        <div className="text-center max-w-5xl mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight">
            Let's make <em>something</em>
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight">
            great!
          </h1>
        </div>

        {/* Book Olive Button */}
        <div className="mb-12">
          <a 
            href="https://cal.com/olivebishop/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-foreground/20 text-sm uppercase tracking-widest hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 text-foreground"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Book Olive
            <ArrowUpRight size={16} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
          </a>
        </div>

        {/* Email */}
        <div className="text-center mb-8">
          <a 
            href="mailto:olivehendrilgen1@gmail.com"
            className="text-4xl md:text-6xl lg:text-7xl text-primary link-underline hover:opacity-80 transition-opacity"
          >
            olivehendrilgen1@gmail.com
          </a>
        </div>

        {/* Collaboration Text */}
        <div className="flex items-center gap-4">
          <span className="text-3xl md:text-5xl">for</span>
          <span className="inline-block w-24 md:w-32 h-px bg-border" />
          <span className="text-lg md:text-xl italic text-muted-foreground">wonderfull</span>
          <span className="text-3xl md:text-5xl">collaborations.</span>
          <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary" />
        </div>
      </section>

    </div>
  );
}

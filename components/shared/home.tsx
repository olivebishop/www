'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Play, Sparkles } from 'lucide-react';

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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
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
        <div className="relative z-10 w-full px-4">
          {/* Name */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            <h1 className="hero-name text-foreground parallax">Olive</h1>
            
            {/* Center Portfolio Preview */}
            <div className="relative mx-4 md:mx-8 w-48 md:w-64 h-64 md:h-80 animate-float">
              <div className="absolute inset-0 bg-muted rounded-sm overflow-hidden shadow-2xl">
                <Image 
                  src="/images/hero.jpeg" 
                  alt="Portfolio Preview" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-40 bg-muted-foreground/20 rounded-sm overflow-hidden shadow-xl">
                <Image 
                  src="/images/about.jpeg" 
                  alt="Portfolio Preview" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-28 h-36 bg-muted rounded-sm overflow-hidden shadow-xl">
                <Image 
                  src="/images/hero.jpeg" 
                  alt="Portfolio Preview" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <h1 className="hero-name text-foreground parallax">Bishop</h1>
          </div>
        </div>

        {/* Play Showreel Button */}
        <div className="absolute left-8 md:left-16 bottom-32">
          <button className="flex items-center gap-3 group">
            <span className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <Play size={16} className="group-hover:text-primary-foreground transition-colors" />
            </span>
            <span className="text-xs uppercase tracking-widest text-foreground">
              Play<br />Showreel
            </span>
          </button>
        </div>

        {/* Services & Interactive Elements */}
        <div className="absolute right-8 md:right-16 bottom-32 text-right">
          <div className="flex items-start gap-4 mb-4">
            <Sparkles className="text-primary w-8 h-8" />
            <div className="text-xs text-muted-foreground uppercase tracking-wider -rotate-12 origin-bottom-left">
              Click click
            </div>
          </div>
          <ul className="space-y-1 text-sm text-foreground">
            <li>Art direction</li>
            <li>Digital production</li>
            <li>Branding</li>
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 py-6 flex justify-between items-center">
          <button className="text-xs uppercase tracking-wider text-foreground hover:text-primary transition-colors">
            In red
          </button>
          
          <div className="flex gap-8">
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-sm link-underline text-foreground hover:text-primary transition-colors">
              Dribbble
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-sm link-underline text-foreground hover:text-primary transition-colors">
              Behance
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm link-underline text-foreground hover:text-primary transition-colors">
              Twitter
            </a>
          </div>
          
          <button className="text-xs uppercase tracking-wider text-primary">
            In Light
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted">
        <div className="px-8 md:px-16">
          <p className="text-xs uppercase tracking-widest text-center mb-12 text-muted-foreground">My main services</p>
          
          <div className="space-y-4 overflow-hidden">
            <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
              <span className="section-title italic">Art direction</span>
              <span className="text-2xl text-muted-foreground/50">&&</span>
              <span className="section-title">Product design</span>
              <span className="text-2xl text-muted-foreground/50">&&</span>
              <span className="section-title italic">Visual design</span>
            </div>
            <div className="flex items-center gap-8 whitespace-nowrap animate-marquee-reverse">
              <span className="section-title">Mobile & web design</span>
              <span className="text-2xl text-muted-foreground/50">&&</span>
              <span className="section-title italic">Interaction design</span>
              <span className="text-2xl text-muted-foreground/50">&&</span>
              <span className="section-title">Animation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="py-24 bg-background">
        <div className="px-8 md:px-16 mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Selected works</p>
        </div>

        {/* Project 1: Cure */}
        <div className="grid md:grid-cols-2 gap-0 mb-0">
          <div className="relative h-[60vh] md:h-[80vh] overflow-hidden group">
            <Image 
              src="/images/about.jpeg" 
              alt="Cure Project" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="bg-primary text-primary-foreground p-8 md:p-16 flex flex-col justify-center">
            <h3 className="text-6xl md:text-8xl mb-4">Cure</h3>
            <p className="text-lg mb-6 opacity-90">Boutique promo website</p>
          </div>
        </div>

        {/* Project 2: Rafal Bojar */}
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-[60vh] md:h-[80vh] overflow-hidden group order-2 md:order-1">
            <Image 
              src="/images/hero.jpeg" 
              alt="Rafal Bojar Project" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="bg-background p-8 md:p-16 flex flex-col justify-center order-1 md:order-2">
            <div className="text-8xl md:text-9xl text-muted-foreground/30 mb-4">R.</div>
            <h3 className="text-4xl md:text-5xl mb-4">Rafal Bojar</h3>
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
              Art direction / Interface design / Interaction design
            </p>
            <p className="text-foreground/80 mb-8 max-w-md">
              Folio of a polish photographer and videographer, who loves to create visual stories.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-primary transition-colors">
              Check full case +
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-background text-center">
        <div className="px-8 md:px-16">
          <a href="#" className="display-large text-foreground hover:text-primary transition-colors duration-500">
            All cases here
          </a>
          <div className="w-64 h-px bg-border mx-auto mt-4" />
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-sm text-muted-foreground">
            Special thanks to <a href="#" className="link-underline hover:text-primary transition-colors">Romain Avalle</a>
          </p>
          <p className="text-sm text-muted-foreground">for development.</p>
        </div>
      </section>
    </div>
  );
}
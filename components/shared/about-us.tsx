'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

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

  const clients = [
    'Lime', 'MixPanel', 'Bloom', 'Johnson & Johnson', 
    'Google', 'Adobe', 'Nike', 'ESPN', 'GoDaddy', 'UN'
  ];

  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen grid md:grid-cols-2">
        {/* Portrait Image */}
        <div className="relative h-[50vh] md:h-screen">
          <Image 
            src="/images/about.jpeg" 
            alt="Olive Bishop" 
            fill
            className="object-cover grayscale"
          />
        </div>

        {/* Content */}
        <div className="bg-background p-8 md:p-16 flex flex-col justify-center">
          <div className="reveal opacity-0">
            <h1 className="display-large mb-8">O.B.</h1>
            <h2 className="text-4xl md:text-6xl mb-8">a bit about myself</h2>
            
            <div className="space-y-6 max-w-lg">
              <p className="text-2xl md:text-3xl">
                Just about <span className="text-sm uppercase tracking-wider block mt-2 text-muted-foreground">What I do</span>
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                My experience, awards collaborations, and own vibes, for sure!
              </p>
            </div>

            <button className="mt-12 flex items-center gap-3 group">
              <span className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-primary-foreground transition-colors">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </span>
              <span className="text-xs uppercase tracking-widest text-foreground">showreel</span>
            </button>
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-24 bg-muted">
        <div className="px-8 md:px-16">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-12 reveal opacity-0">Collaborations</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <div 
                key={client} 
                className="reveal opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-xl md:text-2xl text-muted-foreground hover:text-foreground transition-colors cursor-default">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-32 bg-background">
        <div className="px-8 md:px-16">
          <div className="text-center mb-16 reveal opacity-0">
            <h2 className="text-6xl md:text-8xl">So, no more words</h2>
          </div>

          <div className="relative max-w-2xl mx-auto reveal opacity-0 aspect-video">
            <Image 
              src="/images/hero.jpeg" 
              alt="Creative" 
              fill
              className="object-cover rounded-sm"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl md:text-2xl text-foreground/80 mb-2">
                  let's make <span className="inline-block w-16 h-px bg-border mx-2" /> a wonderful
                </p>
                <p className="text-xl md:text-2xl">
                  <span className="text-primary">website</span> <span className="inline-block w-16 h-px bg-border mx-2" /> together
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 reveal opacity-0">
            <button className="px-8 py-4 border border-foreground/20 rounded-full text-sm uppercase tracking-widest hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 text-foreground">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
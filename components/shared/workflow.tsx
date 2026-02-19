'use client';
import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export function Workflow() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current) {
        const scrollY = window.scrollY;
        circleRef.current.style.transform = `rotate(${scrollY * 0.1}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 py-32">
        {/* Smiley Icon */}
        <div className="mb-8">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-foreground">
            <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="17" cy="20" r="2" fill="currentColor"/>
            <circle cx="31" cy="20" r="2" fill="currentColor"/>
            <path d="M16 30C16 30 19 34 24 34C29 34 32 30 32 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Main Title */}
        <div className="text-center max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-4">
            It's all about my <span className="inline-flex items-center mx-4">
              <ArrowRight className="w-12 h-12 md:w-16 md:h-16" />
            </span> <em>design</em>
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight">
            <em>process</em>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-12 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">*how</p>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">the magic</p>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">happens</p>
        </div>

        {/* Process Steps */}
        <div className="mt-16 flex items-center gap-8 md:gap-16">
          <div className="text-center">
            <span className="text-primary text-sm">A.</span>
            <span className="text-3xl md:text-5xl ml-2">Learn</span>
          </div>
          <div className="text-center">
            <span className="text-primary text-sm">B.</span>
            <span className="text-3xl md:text-5xl ml-2">Think</span>
          </div>
          <div className="text-center">
            <span className="text-primary text-sm">C.</span>
            <span className="text-3xl md:text-5xl ml-2">Create</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-24">
          <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
            Scroll down for more
            <ArrowDown size={14} />
          </button>
        </div>
      </section>

      {/* Learn Section */}
      <section className="py-32 px-8 md:px-16 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-primary text-sm">A.</span>
              <h2 className="text-6xl md:text-8xl mt-2">Learn</h2>
              <span className="text-muted-foreground text-lg">01</span>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-4">Briefing</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>Research</li>
                  <li>Project Goals</li>
                  <li>Target Audience</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl mb-4">Market</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>Problem</li>
                  <li>User Needs</li>
                  <li>Product Objectives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Think Section */}
      <section className="py-32 px-8 md:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm">B.</span>
              <h2 className="text-6xl md:text-8xl mt-2">Think</h2>
              <span className="text-muted-foreground text-lg">02</span>
            </div>
            
            <div className="relative">
              {/* Rotating Circle with Ideas */}
              <div 
                ref={circleRef}
                className="relative w-64 h-64 mx-auto"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text className="text-xs fill-muted-foreground uppercase tracking-widest">
                    <textPath href="#circlePath">
                      idea • idea • idea • idea • idea • idea • idea • idea •
                    </textPath>
                  </text>
                </svg>
                
                {/* Center Arrow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowDown className="w-12 h-12 text-foreground" />
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-sm uppercase tracking-widest text-primary mb-2">It's all about</p>
                <h3 className="text-4xl">thinking process</h3>
                <SparkleIcon className="w-6 h-6 text-primary inline-block ml-2" />
              </div>
              
              <p className="text-foreground/80 mt-8 text-center max-w-md mx-auto">
                My ultimate goal with every project is to come up with a solution-based design approach 
                to help my clients solve real cases and achieve business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Create Section */}
      <section className="py-32 px-8 md:px-16 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-primary text-sm">C.</span>
              <h2 className="text-6xl md:text-8xl mt-2">Create</h2>
              <span className="text-muted-foreground text-lg">03</span>
            </div>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl mb-4">Visual strategy</h3>
                <p className="text-foreground/80 leading-relaxed">
                  To succeed, every digital product has to be aesthetically appealing, functional, 
                  robust, distinctive and memorable. To ensure that the right balance of these 
                  components is maintained I always stay in close contact with the client and 
                  address every project holistically.
                </p>
              </div>
              
              <div>
                <h3 className="text-3xl mb-4">product creation stage</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  {['UX architecture', 'Visual concepts', 'Interactions', 'Development', 'Testing'].map((item) => (
                    <span key={item} className="px-4 py-2 border border-border rounded-full text-sm text-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-32 px-8 md:px-16 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl mb-8">Implementation</h2>
          <span className="text-muted-foreground text-lg">04</span>
          
          <div className="mt-16">
            <p className="text-2xl md:text-3xl mb-4">
              Communication with the client
            </p>
            <p className="text-xl text-muted-foreground">during the whole process</p>
          </div>
          
          <div className="flex justify-center gap-8 mt-12">
            {[1, 2, 3, 4].map((i) => (
              <ArrowDown key={i} className="w-6 h-6 text-muted-foreground" />
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-32 px-8 md:px-16 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl mb-8">
            Long-lasting<br />Collaboration
          </h2>
          
          <p className="text-2xl md:text-3xl text-foreground/80 mb-8">
            Trustful partner for you<br />and your business
          </p>
          
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            I truly believe in the power of a strong business relationship and years-long collaboration. 
            Success is not a 1-day phenomenon it takes a lot of time and joint effort.
          </p>
        </div>
      </section>
    </div>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}
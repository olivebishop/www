'use client';
import { useState } from 'react';
import Image from 'next/image';
import { HugeiconsArrowUpRight } from './icons';

interface Project {
  id: number;
  name: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  { id: 1, name: 'Event Parlour', image: '/images/project2 .png', url: 'https://eventparlour.com/' },
  { id: 2, name: 'Brinex Tech', image: '/images/project1.png', url: 'https://brinex-tech.com/' },
  { id: 3, name: 'Sol of African', image: '/images/sol.png', url: 'https://www.thesolofafrican.com/' },
];

export function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-12 px-8 md:px-16">
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Selected work
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl">
            A few projects I&apos;ve worked on
          </h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground font-light">
                  {String(project.id).padStart(2, '0')}
                </span>
                
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-5xl md:text-7xl lg:text-8xl transition-all duration-500 ${
                    hoveredProject === project.id 
                      ? 'text-primary' 
                      : hoveredProject !== null 
                        ? 'text-muted-foreground/30' 
                        : 'text-foreground'
                  }`}
                >
                  {project.name}
                </a>
              </div>

              {/* Connector Line */}
              {index % 2 === 0 && index < projects.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 w-16 h-px bg-border" />
              )}

              {/* Project Image on Hover */}
              <div 
                className={`fixed pointer-events-none z-50 w-64 h-80 overflow-hidden rounded-sm shadow-2xl transition-all duration-500 ${
                  hoveredProject === project.id 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) ${hoveredProject === project.id ? 'scale(1)' : 'scale(0.95)'}`,
                }}
              >
                <Image 
                  src={project.image} 
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Phone Photography */}
      <section className="pb-24 px-8 md:px-16">
        <div className="max-w-5xl mb-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Phone photography
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Moments captured on my phone
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {[
            '/images/photography/image0.jpeg',
            '/images/photography/image1.jpeg',
            '/images/photography/image2.jpeg',
            '/images/photography/image6.jpeg',
            '/images/photography/image7.jpeg',
            '/images/photography/image8.jpeg',
            '/images/photography/image9.jpeg',
          ].map((src, index) => (
            <div
              key={src}
              className="relative aspect-[3/4] bg-muted overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Phone photography ${index + 1}`}
                fill
                className="object-cover transition-all duration-500 saturate-0 group-hover:saturate-100 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* X Thread CTA */}
        <div className="max-w-5xl border-t border-border/40 pt-8 mt-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            More context
          </p>
          <a
            href="https://x.com/olivebishop_dev/status/1999532067701359103?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm md:text-base text-foreground hover:text-primary transition-colors link-underline"
          >
            Read the X thread about this work
            <HugeiconsArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
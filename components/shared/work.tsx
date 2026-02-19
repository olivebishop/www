'use client';
import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, name: 'Limnia', image: '/images/hero.jpeg' },
  { id: 2, name: 'Dennis Berti', image: '/images/about.jpeg' },
  { id: 3, name: 'Epicurrence', image: '/images/hero.jpeg' },
  { id: 4, name: 'Max Shkret', image: '/images/about.jpeg' },
  { id: 5, name: 'Adobe editorial kit', image: '/images/hero.jpeg' },
  { id: 6, name: 'Cure', image: '/images/about.jpeg' },
];

export function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Projects Grid */}
      <section className="min-h-screen py-32 px-8 md:px-16">
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
                  href="#"
                  className={`text-5xl md:text-7xl lg:text-8xl transition-all duration-500 ${
                    hoveredProject === project.id 
                      ? 'text-primary' 
                      : hoveredProject !== null 
                        ? 'text-muted-foreground/30' 
                        : 'text-primary'
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

        {/* Scroll Indicator */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            scroll down for all cases
          </p>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-8 md:px-16 border-t border-border">
        <div className="flex justify-center gap-12">
          <a 
            href="https://dribbble.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm link-underline text-foreground hover:text-primary transition-colors"
          >
            Dribbble
          </a>
          <a 
            href="https://behance.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm link-underline text-foreground hover:text-primary transition-colors"
          >
            Behance
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm link-underline text-foreground hover:text-primary transition-colors"
          >
            Twitter
          </a>
        </div>
      </section>
    </div>
  );
}
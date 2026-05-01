'use client';
import { motion } from 'motion/react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  project?: string;
  companyUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Micheal',
    role: 'Founder',
    company: 'Sol of African',
    content: 'The redesign transformed our digital presence. Olive understood our vision and brought it to life with beautiful, functional design.',
    project: 'Sol of African',
    companyUrl: 'https://www.thesolofafrican.com/'
  },
  {
    id: 2,
    name: 'Brian',
    role: 'CEO',
    company: 'Brinex Tech',
    content: 'Working with Olive was seamless. The website perfectly captures our brand identity and has significantly improved our online presence.',
    project: 'Brinex Tech',
    companyUrl: 'https://brinex-tech.com/'
  },
];

export default function Testimonials() {
  return (
    <motion.section 
      id="testimonials"
      className="py-24 sm:py-28 md:py-32 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
        {/* Header */}
        <motion.div 
          className="mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="section-label mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Testimonials
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Words from <em className="text-primary">founders</em>
          </motion.h2>
          <motion.p 
            className="mt-4 body-base text-foreground/50 max-w-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Real feedback from founders I&apos;ve partnered with. You&apos;re not alone — others have trusted me with their vision too.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#101010] p-7 sm:p-9 flex flex-col gap-6 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,125,72,0.16)_0%,rgba(255,125,72,0.07)_24%,rgba(255,125,72,0.02)_42%,transparent_58%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_82%,rgba(255,125,72,0.08)_0%,transparent_36%)]" />
              <div className="relative flex items-center gap-2.5">
                <span className="h-px w-8 bg-primary/55" />
                <span className="text-[0.6875rem] uppercase tracking-[0.12em] text-white/55 font-medium">Client feedback</span>
              </div>
              <p className="relative body-base text-white/85 leading-[1.85] flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="relative pt-5 border-t border-white/10 flex items-center gap-3">
                <div>
                  <p className="text-[0.9375rem] font-medium text-white tracking-[-0.01em]">{testimonial.name}</p>
                  <p className="text-[0.8125rem] text-white/55 mt-1.5">
                    <span className="text-white/65">{testimonial.role}</span>
                    <span className="mx-1.5 text-white/30">at</span>
                    {testimonial.companyUrl ? (
                      <a
                        href={testimonial.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/55 hover:text-white/75 no-underline hover:underline underline-offset-2 transition-colors"
                      >
                        {testimonial.company}
                      </a>
                    ) : (
                      testimonial.company
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

'use client';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  project?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Micheal',
    role: 'FOUNDER AND CEO',
    company: 'Sol of African',
    content: 'The redesign transformed our digital presence. Olive understood our vision and brought it to life with beautiful, functional design.',
    project: 'Sol of African'
  },
  {
    id: 2,
    name: 'brian',
    role: 'CEO',
    company: 'Brinex Tech',
    content: 'Working with Olive was seamless. The website perfectly captures our brand identity and has significantly improved our online presence.',
    project: 'Brinex Tech'
  },
];

export default function Testimonials() {
  return (
    <motion.section 
      id="testimonials"
      className="py-20 sm:py-24 md:py-32 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16">
        {/* Header */}
        <motion.div 
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4"
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
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="border border-border/60 bg-background/60 backdrop-blur-sm p-6 sm:p-8 flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ borderColor: 'rgba(var(--primary), 0.3)', scale: 1.02 }}
            >
              <Quote className="w-8 h-8 text-primary/50 mb-2" />
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="pt-4 border-t border-border/40">
                <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
                {testimonial.project && (
                  <p className="text-xs text-primary mt-1">{testimonial.project}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

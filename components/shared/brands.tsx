'use client';
import { brands } from "@/data/brands";
import { motion } from 'motion/react';

export default function Brands() {
  // Double the brands array for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <motion.section 
      className="py-8 sm:py-10 overflow-hidden bg-background"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 sm:gap-12">
          {/* Left text */}
          <motion.p 
            className="text-muted-foreground text-xs sm:text-sm tracking-wide flex-shrink-0 max-w-[140px] sm:max-w-none leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Brands and companies I have worked with
          </motion.p>

          {/* Marquee Container */}
          <div className="relative flex-1 overflow-hidden">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling brands */}
            <div className="flex gap-8 sm:gap-12 items-center animate-marquee">
              {duplicatedBrands.map((brand, index) => (
                <motion.span
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 text-foreground/80 text-sm sm:text-base font-medium tracking-tight whitespace-nowrap"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {brand.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

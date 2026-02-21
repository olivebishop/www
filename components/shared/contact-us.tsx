'use client';
import { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      {/* Main Content */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-24 sm:py-32 w-full">
        {/* Main Heading */}
        <motion.div 
          className="text-center max-w-3xl sm:max-w-4xl md:max-w-5xl mb-12 sm:mb-16 px-2 sm:px-4 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="page-title leading-tight break-words">
            Let&apos;s make <em className="text-primary">something</em> great!
          </h1>
        </motion.div>

        {/* Book Olive Button */}
        <motion.div 
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 200 }}
        >
          <motion.a 
            href="https://cal.com/olivebishop/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 border border-foreground/20 text-xs sm:text-sm uppercase tracking-widest hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 text-foreground font-normal"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Olive
            <motion.div
              animate={{ 
                x: isHovered ? 4 : 0, 
                y: isHovered ? -4 : 0 
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Email */}
        <motion.div 
          className="text-center mb-6 sm:mb-8 px-2 sm:px-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="mailto:olivehendrilgen1@gmail.com"
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-primary link-underline hover:opacity-80 transition-opacity break-all sm:break-words font-normal"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            olivehendrilgen1@gmail.com
          </motion.a>
        </motion.div>

        {/* Collaboration Text */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            for
          </motion.span>
          <motion.span 
            className="inline-block w-12 sm:w-16 md:w-24 lg:w-32 h-px bg-border"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span 
            className="text-sm sm:text-base md:text-lg lg:text-xl italic text-muted-foreground font-normal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2, type: 'spring', stiffness: 200 }}
          >
            wonderfull
          </motion.span>
          <motion.span 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            collaborations.
          </motion.span>
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatDelay: 3,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary flex-shrink-0" />
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}

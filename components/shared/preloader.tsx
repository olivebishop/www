'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const greetings = ['Jambo,', 'Holla,', 'Bonjour,', 'Nǐ hǎo'];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'in' | 'out' | 'hide'>('initial');

  useEffect(() => {
    // Prevent body scroll during preloader
    document.body.style.overflowY = 'hidden';

    // Phase 1: Show container (immediate, duration: 0)
    const timer0 = setTimeout(() => {
      setAnimationPhase('in');
    }, 0);

    // Phase 2: Animate text in (delay: 1s, duration: 1.5s, stagger: 0.4s)
    // Phase 3: Animate text out (duration: 1s, stagger: 0.2s) - starts after text in completes
    // Total: 1s delay + 1.5s duration + (3 * 0.4s stagger) = ~3.7s for all text in
    // Then 1s duration + (3 * 0.2s stagger) = ~1.6s for all text out
    // Preloader collapse starts 2s before text out ends (overlap)
    
    const timer1 = setTimeout(() => {
      // Enable body scroll after text animation starts
      document.body.style.overflowY = 'scroll';
    }, 2000);

    const timer2 = setTimeout(() => {
      setAnimationPhase('out');
    }, 2500); // Start text out after text in completes (1s delay + 1.5s duration)

    // Phase 4: Hide preloader (starts overlapping with text out)
    const timer3 = setTimeout(() => {
      setAnimationPhase('hide');
    }, 3000); // Start collapse slightly before text out completes

    // Phase 5: Remove from DOM
    const timer4 = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // Total: ~4.5s

    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      // Restore body overflow on cleanup
      document.body.style.overflowY = '';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          className="preloader fixed inset-0 z-[55] flex items-center justify-center overflow-hidden bg-black"
          initial={{ height: '100vh' }}
          animate={
            animationPhase === 'hide'
              ? { height: '0vh' }
              : { height: '100vh' }
          }
          exit={{ height: '0vh' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="texts-container flex items-center justify-center gap-[5px] sm:gap-[14px] md:gap-[18px] lg:gap-[24px] xl:gap-[28px] overflow-hidden text-[#e4ded7]"
            style={{
              fontFamily: 'var(--font-cabinet-grotesk), sans-serif',
              fontSize: 'clamp(1rem, 3.5vw, 4.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              padding: '10px 0',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: animationPhase !== 'initial' ? 1 : 0 }}
            transition={{ duration: 0 }}
          >
            {greetings.map((greeting, index) => (
              <motion.span
                key={greeting}
                className="inline-block whitespace-nowrap"
                initial={{ y: 70, opacity: 0 }}
                animate={
                  animationPhase === 'in'
                    ? {
                        y: 0,
                        opacity: 1,
                      }
                    : animationPhase === 'out'
                      ? {
                          y: 70,
                          opacity: 0,
                        }
                      : {
                          y: 70,
                          opacity: 0,
                        }
                }
                transition={{
                  duration: animationPhase === 'in' ? 1.5 : 1,
                  delay: animationPhase === 'in' ? 1 + index * 0.4 : index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {greeting}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

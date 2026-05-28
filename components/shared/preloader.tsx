'use client';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const greetings = ['Jambo,', 'Holla,', 'Bonjour,', 'Nǐ hǎo'];
const PRELOADER_SEEN_KEY = 'olivebishop-portfolio-preloader-seen';

function subscribePreloader() {
  return () => {};
}

function getPreloaderSnapshot() {
  try {
    return !localStorage.getItem(PRELOADER_SEEN_KEY);
  } catch {
    return false;
  }
}

function getPreloaderServerSnapshot() {
  return false;
}

export default function Preloader() {
  const shouldShow = useSyncExternalStore(
    subscribePreloader,
    getPreloaderSnapshot,
    getPreloaderServerSnapshot,
  );
  const [finished, setFinished] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'in' | 'out' | 'hide'>('initial');

  const isLoading = shouldShow && !finished;

  useEffect(() => {
    if (!shouldShow) return;

    document.body.style.overflowY = 'hidden';

    const timer0 = setTimeout(() => {
      setAnimationPhase('in');
    }, 0);

    const timer1 = setTimeout(() => {
      document.body.style.overflowY = 'scroll';
    }, 1500);

    const timer2 = setTimeout(() => {
      setAnimationPhase('out');
    }, 2000);

    const timer3 = setTimeout(() => {
      setAnimationPhase('hide');
    }, 2400);

    const timer4 = setTimeout(() => {
      try {
        localStorage.setItem(PRELOADER_SEEN_KEY, '1');
      } catch {
        // ignore storage errors
      }
      setFinished(true);
    }, 3500);

    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      document.body.style.overflowY = '';
    };
  }, [shouldShow]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          className="preloader fixed inset-0 z-[55] flex items-center justify-center overflow-hidden bg-black will-change-transform"
          initial={{ height: '100vh' }}
          animate={
            animationPhase === 'hide'
              ? { height: '0vh' }
              : { height: '100vh' }
          }
          exit={{ height: '0vh' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="texts-container flex items-center justify-center gap-[5px] sm:gap-[14px] md:gap-[18px] lg:gap-[24px] xl:gap-[28px] overflow-hidden text-[#e4ded7] will-change-transform"
            style={{
              fontFamily: 'var(--font-cabinet-grotesk), system-ui, sans-serif',
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
                className="inline-block whitespace-nowrap will-change-transform"
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
                  duration: animationPhase === 'in' ? 1.2 : 0.8,
                  delay: animationPhase === 'in' ? 0.6 + index * 0.3 : index * 0.15,
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

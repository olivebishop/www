'use client';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  characters?: string;
}

const defaultCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export function ScrambleText({ 
  text, 
  className = '', 
  duration = 2000,
  delay = 0,
  characters = defaultCharacters 
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let frameId: number;
    let startTime: number;
    let currentIndex = 0;

    const startAnimation = () => {
      startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        if (progress < 1) {
          const newText = text.split('').map((char, index) => {
            if (index <= currentIndex) {
              return text[index];
            }
            if (char === ' ') return ' ';
            return characters[Math.floor(Math.random() * characters.length)];
          }).join('');
          
          setDisplayText(newText);
          
          if (progress > (currentIndex + 1) / text.length) {
            currentIndex++;
          }
          
          frameId = requestAnimationFrame(animate);
        } else {
          setDisplayText(text);
          setIsScrambling(false);
        }
      };
      
      frameId = requestAnimationFrame(animate);
    };

    timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [text, duration, delay, characters]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText || text}
    </motion.span>
  );
}

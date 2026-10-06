import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number; // Duration in ms per character (default: 52ms, within 45-65ms)
  delay?: number; // Initial delay in ms before typing starts (default: 150ms)
  cursorColor?: string;
  accentPeriod?: boolean;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className = '',
  speed = 52,
  delay = 150,
  cursorColor = '#00DF5E',
  accentPeriod = true,
  onComplete,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [displayedLength, setDisplayedLength] = useState<number>(() =>
    shouldReduceMotion ? text.length : 0
  );
  const [showCursor, setShowCursor] = useState<boolean>(() => !shouldReduceMotion);
  const [isFinished, setIsFinished] = useState<boolean>(() => !!shouldReduceMotion);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // If user prefers reduced motion, show text immediately with no cursor animation
    if (shouldReduceMotion) {
      setDisplayedLength(text.length);
      setShowCursor(false);
      setIsFinished(true);
      if (onCompleteRef.current) {
        onCompleteRef.current();
      }
      return;
    }

    // Reset state on text change or new mount
    setDisplayedLength(0);
    setShowCursor(true);
    setIsFinished(false);

    let currentIndex = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let finishTimeoutId: ReturnType<typeof setTimeout> | null = null;
    let removeCursorTimeoutId: ReturnType<typeof setTimeout> | null = null;

    const startTimeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        currentIndex += 1;
        setDisplayedLength(currentIndex);

        if (currentIndex >= text.length) {
          if (intervalId) clearInterval(intervalId);

          // Once typing is complete, keep cursor briefly, then fade it out smoothly
          finishTimeoutId = setTimeout(() => {
            setShowCursor(false);
            removeCursorTimeoutId = setTimeout(() => {
              setIsFinished(true);
              if (onCompleteRef.current) {
                onCompleteRef.current();
              }
            }, 350);
          }, 450);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeoutId);
      if (intervalId) clearInterval(intervalId);
      if (finishTimeoutId) clearTimeout(finishTimeoutId);
      if (removeCursorTimeoutId) clearTimeout(removeCursorTimeoutId);
    };
  }, [text, speed, delay, shouldReduceMotion]);

  // Convert string to array of characters
  const characters = Array.from(text);

  return (
    <span className={`inline relative ${className}`} aria-label={text}>
      {characters.map((char, index) => {
        const isTyped = index < displayedLength;
        const isLastTypedChar = index === displayedLength - 1;
        const isPeriod = accentPeriod && char === '.' && index === characters.length - 1;

        return (
          <React.Fragment key={index}>
            <span
              className={`transition-opacity duration-75 ${
                isTyped ? 'opacity-100' : 'opacity-0 select-none pointer-events-none'
              } ${isPeriod ? 'text-[#00DF5E]' : ''}`}
              aria-hidden={!isTyped}
            >
              {char}
            </span>

            {/* Cursor anchored right after the last revealed character */}
            {isLastTypedChar && !isFinished && (
              <motion.span
                animate={
                  showCursor
                    ? { opacity: [1, 0.15, 1] }
                    : { opacity: 0 }
                }
                transition={
                  showCursor
                    ? {
                        duration: 0.65,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                    : {
                        duration: 0.3,
                        ease: 'easeOut',
                      }
                }
                style={{ backgroundColor: cursorColor }}
                className="inline-block w-[2.5px] sm:w-[3px] h-[0.82em] ml-[2px] -mb-[0.04em] align-middle rounded-full pointer-events-none"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        );
      })}

      {/* Initial cursor before typing starts */}
      {displayedLength === 0 && !isFinished && (
        <motion.span
          animate={
            showCursor
              ? { opacity: [1, 0.15, 1] }
              : { opacity: 0 }
          }
          transition={{
            duration: 0.65,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ backgroundColor: cursorColor }}
          className="inline-block w-[2.5px] sm:w-[3px] h-[0.82em] ml-[2px] -mb-[0.04em] align-middle rounded-full pointer-events-none"
          aria-hidden="true"
        />
      )}
    </span>
  );
};

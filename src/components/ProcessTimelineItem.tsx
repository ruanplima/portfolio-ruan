import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ProcessStep } from '../types';
import { DEFAULT_EASE } from './animations';

export interface ProcessTimelineItemProps {
  step: ProcessStep;
  index: number;
  totalSteps: number;
  isLeft: boolean;
}

export const ProcessTimelineItem: React.FC<ProcessTimelineItemProps> = ({
  step,
  index,
  totalSteps,
  isLeft,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const itemRef = useRef<HTMLDivElement>(null);

  // Activates marker and card highlight when scrolled into view
  const isInView = useInView(itemRef, {
    margin: '-20% 0px -20% 0px',
    amount: 0.25,
  });

  // Entrance animations for desktop & mobile
  const xOffset = isLeft ? -28 : 28;
  const initialMotion = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 0, x: isLeft ? -24 : 24, y: 24 };

  const animateMotion = isInView
    ? { opacity: 1, x: 0, y: 0 }
    : shouldReduceMotion
    ? { opacity: 1 }
    : initialMotion;

  return (
    <div
      ref={itemRef}
      className="relative mb-14 sm:mb-20 lg:mb-24 last:mb-0 w-full"
    >
      {/* 1. NODE / MARKER ON THE VERTICAL TIMELINE */}
      {/* Mobile: Left aligned at left-5 sm:left-7. Desktop: Centered at lg:left-1/2 */}
      <div
        className={`absolute z-20 top-6 sm:top-8 -translate-y-1/2 flex items-center justify-center transition-all duration-300
          left-5 sm:left-7 -translate-x-1/2
          lg:left-1/2 lg:-translate-x-1/2`}
        aria-hidden="true"
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: isInView ? 1.08 : 1,
                }
          }
          transition={{ duration: 0.35, ease: DEFAULT_EASE }}
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs sm:text-sm transition-all duration-300 ${
            isInView
              ? 'border-[#00DF5E] bg-[#16231a] text-[#00DF5E] shadow-lg shadow-[#00DF5E]/20'
              : 'border-[#333333] bg-[#1a1a1a] text-[#F9F9F9]/50 hover:border-[#F9F9F9]/40'
          }`}
        >
          <span>{step.number}</span>

          {/* Active pulse aura */}
          {isInView && !shouldReduceMotion && (
            <span className="absolute inset-0 rounded-full border border-[#00DF5E] opacity-40 animate-ping pointer-events-none" />
          )}
        </motion.div>
      </div>

      {/* 2. HORIZONTAL CONNECTOR BARS */}
      {/* Mobile connector: from marker (left-5/7) to card (left-12/16) */}
      <div
        className={`lg:hidden absolute top-6 sm:top-8 -translate-y-1/2 left-5 sm:left-7 w-7 sm:w-9 h-[2px] transition-colors duration-300 pointer-events-none ${
          isInView ? 'bg-[#00DF5E]/70' : 'bg-[#333333]'
        }`}
        aria-hidden="true"
      />

      {/* Desktop connector: connects card edge to central marker */}
      {isLeft ? (
        <div
          className={`hidden lg:block absolute top-6 sm:top-8 -translate-y-1/2 right-1/2 w-10 sm:w-12 h-[2px] transition-colors duration-300 pointer-events-none ${
            isInView ? 'bg-[#00DF5E]/70' : 'bg-[#333333]'
          }`}
          aria-hidden="true"
        />
      ) : (
        <div
          className={`hidden lg:block absolute top-6 sm:top-8 -translate-y-1/2 left-1/2 w-10 sm:w-12 h-[2px] transition-colors duration-300 pointer-events-none ${
            isInView ? 'bg-[#00DF5E]/70' : 'bg-[#333333]'
          }`}
          aria-hidden="true"
        />
      )}

      {/* 3. PROCESS CARD CONTAINER */}
      {/* Mobile: Full-width with left padding (pl-12 sm:pl-16).
          Desktop: 50% width, positioned left or right with margin-auto */}
      <div
        className={`w-full pl-12 sm:pl-16
          lg:pl-0 lg:w-[calc(50%-3rem)]
          ${isLeft ? 'lg:mr-auto' : 'lg:ml-auto'}`}
      >
        <motion.div
          initial={initialMotion}
          animate={animateMotion}
          transition={{
            duration: 0.6,
            delay: shouldReduceMotion ? 0 : 0.05,
            ease: DEFAULT_EASE,
          }}
          className={`relative rounded-2xl border p-6 sm:p-8 lg:p-9 transition-all duration-300 overflow-hidden ${
            isInView
              ? 'bg-[#1a1a1a] border-[#00DF5E]/50 shadow-xl shadow-black/40'
              : 'bg-[#181818] border-[#333333] hover:border-[#333333]/90'
          }`}
        >
          {/* Subtle Ambient Watermark Step Number */}
          <div
            className="absolute top-2 right-4 text-5xl sm:text-7xl font-mono font-black select-none pointer-events-none transition-colors duration-300"
            style={{
              color: isInView ? 'rgba(0, 223, 94, 0.08)' : 'rgba(255, 255, 255, 0.03)',
            }}
            aria-hidden="true"
          >
            {step.number}
          </div>


          {/* Step Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F9F9F9] tracking-tight mb-3 relative z-10">
            {step.title}
            <span className="text-[#00DF5E]">.</span>
          </h2>

          {/* Step Description */}
          <p className="text-sm sm:text-base text-[#F9F9F9]/75 leading-relaxed mb-6 relative z-10">
            {step.description}
          </p>

          {/* Deliverable Box */}
          <div className="p-4 rounded-xl bg-[#202020] border border-[#333333] mb-6 relative z-10">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#00DF5E] block mb-1">
              Entregável consolidado:
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#F9F9F9] leading-snug">
              {step.deliverable}
            </p>
          </div>

          {/* Activities / Deliverables Checklist */}
          <div className="pt-5 border-t border-[#333333]/80 relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/50 block mb-3.5">
              Atividades e entregas executadas:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {step.details.map((detail, dIdx) => (
                <div
                  key={dIdx}
                  className="p-3 rounded-lg bg-[#191919] border border-[#333333]/60 flex items-start gap-2.5"
                >
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 transition-colors duration-300 ${
                      isInView ? 'text-[#00DF5E]' : 'text-[#00DF5E]/60'
                    }`}
                  />
                  <span className="text-xs sm:text-sm text-[#F9F9F9]/90 leading-snug">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';
import { ProcessStep } from '../types';
import { ProcessTimelineItem } from './ProcessTimelineItem';

export interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

/**
 * Timeline vertical interativa que acompanha o scroll do usuário.
 * Desktop: Disposição alternada (esquerda / direita) com linha central.
 * Mobile: Linha à esquerda e todos os processos alinhados à direita.
 */
export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  steps,
  className = '',
}) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Vincula o progresso da linha ao scroll real da seção no viewport
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 70%'],
  });

  // Easing suave e contínuo para o traçado da linha
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div
      ref={timelineRef}
      className={`relative w-full max-w-6xl mx-auto ${className}`}
      role="region"
      aria-label="Linha do tempo do processo de desenvolvimento"
    >
      {/* 1. LINHA BASE (Camada 1: Trajetória completa em #333333) */}
      <div
        className="absolute top-6 sm:top-8 bottom-6 sm:bottom-8 w-[2px] bg-[#333333] pointer-events-none
          left-5 sm:left-7 -translate-x-1/2
          lg:left-1/2 lg:-translate-x-1/2"
        aria-hidden="true"
      />

      {/* 2. LINHA DE PROGRESSO (Camada 2: Preenchimento dinâmico em #00DF5E acompanhando scroll) */}
      <motion.div
        style={{
          scaleY: shouldReduceMotion ? 1 : scaleY,
          transformOrigin: 'top',
        }}
        className="absolute top-6 sm:top-8 bottom-6 sm:bottom-8 w-[2px] bg-[#00DF5E] z-10 pointer-events-none
          left-5 sm:left-7 -translate-x-1/2
          lg:left-1/2 lg:-translate-x-1/2 shadow-[0_0_8px_rgba(0,223,94,0.35)]"
        aria-hidden="true"
      />

      {/* 3. ITENS DO PROCESSO MAPEADOS DINAMICAMENTE */}
      <div className="relative z-10">
        {steps.map((step, index) => {
          // No desktop, alterna: par = esquerda, ímpar = direita
          const isLeft = index % 2 === 0;

          return (
            <ProcessTimelineItem
              key={step.number}
              step={step}
              index={index}
              totalSteps={steps.length}
              isLeft={isLeft}
            />
          );
        })}
      </div>
    </div>
  );
};

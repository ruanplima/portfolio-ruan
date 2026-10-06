import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Plus } from 'lucide-react';
import { FaqItem, FAQS } from '../../data/portfolioData';

export interface InteractiveAccordionProps {
  items?: FaqItem[];
  defaultOpenId?: string | null;
  className?: string;
}

/**
 * Interactive Accordion com animações refinadas, números circulares dinâmicos,
 * rotação do indicador '+', underline interativo e transições suaves via Motion.
 * Mantém apenas uma pergunta aberta por vez e suporta acessibilidade completa.
 */
export const InteractiveAccordion: React.FC<InteractiveAccordionProps> = ({
  items = FAQS,
  defaultOpenId = '01',
  className = '',
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className={`w-full divide-y divide-[#333333] border-y border-[#333333] ${className}`}
      role="region"
      aria-label="Perguntas Frequentes"
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        const isHovered = hoveredId === item.id;

        return (
          <div
            key={item.id}
            className="relative group transition-colors duration-200"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Linha de progresso / Underline ativo do item aberto */}
            <motion.div
              initial={false}
              animate={{
                scaleX: isOpen ? 1 : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                ease: 'easeOut',
              }}
              style={{ transformOrigin: 'left' }}
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00DF5E] pointer-events-none z-10"
              aria-hidden="true"
            />

            {/* Cabeçalho / Botão disparador da pergunta */}
            <button
              type="button"
              id={`faq-trigger-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              onClick={() => handleToggle(item.id)}
              className="w-full py-4 sm:py-6 md:py-7 px-2 sm:px-3 flex items-center justify-between text-left cursor-pointer focus:outline-none focus-visible:bg-[#202020]/50 transition-colors"
            >
              <div className="flex flex-1 min-w-0 pr-3 sm:pr-4">
                {/* Título da pergunta com leve transição de posição e cor */}
                <motion.span
                  animate={{
                    x: shouldReduceMotion ? 0 : isHovered || isOpen ? 4 : 0,
                  }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className={`text-base sm:text-lg md:text-xl font-bold tracking-tight transition-colors duration-200 leading-snug flex-1 ${
                    isOpen
                      ? 'text-[#F9F9F9]'
                      : 'text-[#F9F9F9]/80 group-hover:text-[#F9F9F9]'
                  }`}
                >
                  {item.question}
                </motion.span>
              </div>

              {/* Indicador '+' que rotaciona 45 graus para virar 'x' */}
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                  isOpen
                    ? 'border-[#00DF5E]/50 bg-[#00DF5E]/10 text-[#00DF5E]'
                    : 'border-[#333333] bg-[#1e1e1e] text-[#F9F9F9]/60 group-hover:text-[#F9F9F9] group-hover:border-[#F9F9F9]/30'
                }`}
              >
                <motion.span
                  animate={{ rotate: shouldReduceMotion ? 0 : isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="inline-flex items-center justify-center leading-none"
                  aria-hidden="true"
                >
                  <Plus className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </motion.span>
              </div>
            </button>

            {/* Conteúdo animado da resposta */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  animate={{
                    height: 'auto',
                    opacity: 1,
                  }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{
                    height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.25, ease: 'easeOut' },
                  }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={shouldReduceMotion ? { y: 0 } : { y: -6 }}
                    animate={{ y: 0 }}
                    exit={shouldReduceMotion ? { y: 0 } : { y: -6 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="px-2 sm:px-3 pb-5 sm:pb-7 pt-1 text-sm sm:text-base text-[#F9F9F9]/75 leading-relaxed font-normal"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default InteractiveAccordion;

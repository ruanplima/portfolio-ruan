import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { HelpCircle, ArrowUpRight } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { InteractiveAccordion } from '../components/ui/interactive-accordion';
import { PROCESS_STEPS, FAQS, PERSONAL_INFO } from '../data/portfolioData';
import { usePageMeta } from '../hooks/usePageMeta';
import { RevealOnScroll, DEFAULT_EASE } from '../components/animations';

export const ProcessPage: React.FC = () => {
  usePageMeta(
    'Processo de Desenvolvimento — Ruan Pinheiro',
    'Conheça as 6 etapas do processo de desenvolvimento web de Ruan Pinheiro: Entendimento, Planejamento, Design, Desenvolvimento, Refinamento e Publicação.',
  );

  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Processo' }]} />

        {/* Header with progressive sequence */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: DEFAULT_EASE }}
            className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-3"
          >
            METODOLOGIA DE TRABALHO // PROCESSO
          </motion.span>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: DEFAULT_EASE }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F9F9F9] tracking-tight leading-[1.08] mb-6"
          >
            Do primeiro alinhamento até a publicação em produção
            <span className="text-[#00DF5E]">.</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: DEFAULT_EASE }}
            className="text-lg sm:text-xl text-[#F9F9F9]/75 font-normal leading-relaxed"
          >
            Um fluxo transparente e previsível em 6 etapas, planejado para
            eliminar ruídos de comunicação, cumprir prazos com precisão e
            entregar produtos com qualidade comprovada.
          </motion.p>
        </div>

        {/* 6 Steps Interactive Vertical Timeline tracking scroll */}
        <ProcessTimeline steps={PROCESS_STEPS} className="mb-24 sm:mb-32" />

        {/* FAQs sobre o processo with Reveal */}
        <RevealOnScroll className="p-5 sm:p-12 rounded-2xl border border-[#333333] bg-[#1a1a1a] mb-20">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00DF5E] uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" /> DÚVIDAS FREQUENTES
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-[#F9F9F9] mb-6 sm:mb-8">
            Perguntas comuns sobre como funciona o projeto
          </h2>

          <InteractiveAccordion items={FAQS} defaultOpenId="01" />
        </RevealOnScroll>

        {/* Bottom CTA with Reveal */}
        <RevealOnScroll>
          <div className="text-center max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-[#F9F9F9]">
              Pronto para iniciar o passo 01 do seu projeto?
            </h3>
            <p className="text-sm text-[#F9F9F9]/70">
              Vamos alinhar objetivos, referências e prazos em uma conversa
              rápida e direta.
            </p>
            <div className="pt-2">
              <Link
                to="/contato"
                className="px-6 py-3.5 rounded-xl bg-[#00DF5E] text-[#171717] font-semibold text-sm inline-flex items-center gap-2 hover:bg-[#00DF5E]/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 active:scale-[0.98] shadow-md shadow-[#00DF5E]/10"
              >
                <span>Entrar em contato com Ruan</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

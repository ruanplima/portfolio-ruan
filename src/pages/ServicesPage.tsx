import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import {
  Globe,
  PanelsTopLeft,
  Code2,
  Workflow,
  Check,
  ArrowUpRight,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProjectEstimator } from '../components/ProjectEstimator';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { usePageMeta } from '../hooks/usePageMeta';
import { RevealOnScroll, DEFAULT_EASE } from '../components/animations';

export const ServicesPage: React.FC = () => {
  usePageMeta(
    'Serviços de Desenvolvimento Web — Ruan Pinheiro',
    'Conheça os serviços de desenvolvimento web oferecidos por Ruan Pinheiro: Sites Institucionais, Landing Pages de Alta Conversão, Aplicações Web e Automações com n8n.',
  );

  const shouldReduceMotion = useReducedMotion();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-7 h-7 text-[#00DF5E]" />;
      case 'PanelsTopLeft':
        return <PanelsTopLeft className="w-7 h-7 text-[#00DF5E]" />;
      case 'Code2':
        return <Code2 className="w-7 h-7 text-[#00DF5E]" />;
      case 'Workflow':
        return <Workflow className="w-7 h-7 text-[#00DF5E]" />;
      default:
        return <Globe className="w-7 h-7 text-[#00DF5E]" />;
    }
  };

  const getWhatsAppServiceInquiry = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Olá, Ruan! Vi o serviço de "${serviceTitle}" no seu portfólio e gostaria de entender prazos e investimento para minha demanda.`,
    );
    return `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Serviços' }]} />

        {/* Header with progressive sequence */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: DEFAULT_EASE }}
            className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-3"
          >
            SOLUÇÕES & ENTREGAS // SERVIÇOS
          </motion.span>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: DEFAULT_EASE }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F9F9F9] tracking-tight leading-[1.08] mb-6"
          >
            Serviços desenhados para elevar o posicionamento da sua marca
            <span className="text-[#00DF5E]">.</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: DEFAULT_EASE }}
            className="text-lg sm:text-xl text-[#F9F9F9]/75 font-normal leading-relaxed"
          >
            Do design institucional a aplicações interativas e automações de
            processos técnicos. Cada entrega inclui código fonte limpo,
            otimização extrema e suporte no lançamento.
          </motion.p>
        </div>

        {/* Detailed Services Grid with Scroll Reveal */}
        <div className="space-y-8 mb-24">
          {SERVICES.map((service, index) => (
            <RevealOnScroll key={service.id} delay={0.05 * index}>
              <div className="p-5 sm:p-10 rounded-2xl border border-[#333333] bg-[#1a1a1a] hover:border-[#00DF5E]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start hover:shadow-lg hover:shadow-black/30">
                {/* Left Column: Title & Overview */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-[#222222] border border-[#333333]">
                      {getIcon(service.icon)}
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F9F9F9] mb-2 tracking-tight">
                    {service.title}
                  </h2>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-4">
                    {service.subtitle}
                  </span>

                  <p className="text-sm sm:text-base text-[#F9F9F9]/75 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="p-3 rounded-xl border border-[#333333] bg-[#202020] inline-flex items-center gap-2 text-xs font-medium text-[#F9F9F9] mb-6">
                    <Clock className="w-4 h-4 text-[#00DF5E]" />
                    <span>
                      Prazo estimado:{' '}
                      <strong className="text-[#00DF5E]">
                        {service.estimatedTimeline}
                      </strong>
                    </span>
                  </div>

                  <div>
                    <a
                      href={getWhatsAppServiceInquiry(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00DF5E] text-[#171717] font-semibold text-xs sm:text-sm hover:bg-[#00DF5E]/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 active:scale-[0.98] shadow-md shadow-[#00DF5E]/10"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#171717]" />
                      <span>Solicitar proposta</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Detailed Deliverables */}
                <div className="lg:col-span-7 bg-[#202020] p-4 sm:p-8 rounded-xl border border-[#333333]">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/60 mb-4">
                    O que está incluso nesta entrega:
                  </h3>
                  <ul className="space-y-3.5">
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-[#F9F9F9]/90"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#00DF5E]/10 border border-[#00DF5E]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#00DF5E]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-[#333333] flex items-center justify-between text-xs font-mono text-[#F9F9F9]/50">
                    <span>Garantia de entrega</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Scope Estimator Simulator with Reveal */}

        {/* Bottom CTA with Reveal */}
        <RevealOnScroll>
          <div className="p-5 sm:p-12 rounded-2xl border border-[#333333] bg-[#1a1a1a] text-center">
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#F9F9F9] mb-3">
              Precisa de um formato personalizado para sua empresa?
            </h2>
            <p className="text-sm sm:text-base text-[#F9F9F9]/70 max-w-xl mx-auto mb-6 sm:mb-8">
              Se sua demanda envolve uma combinação de serviços ou um escopo
              contínuo, entre em contato para desenharmos uma proposta técnica
              sob medida.
            </p>
            <Link
              to="/contato"
              className="px-4 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#00DF5E] text-[#171717] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap hover:bg-[#00DF5E]/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 active:scale-[0.98] shadow-md shadow-[#00DF5E]/10"
            >
              <span className="sm:hidden">Falar sobre meu projeto</span>
              <span className="hidden sm:inline">
                Falar com Ruan sobre seu projeto
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

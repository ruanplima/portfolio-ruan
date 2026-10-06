import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePageMeta } from '../hooks/usePageMeta';
import { FadeUp, RevealOnScroll, DEFAULT_EASE } from '../components/animations';

export const AboutPage: React.FC = () => {
  usePageMeta(
    'Sobre Mim — Ruan Pinheiro',
    'Conheça a abordagem, trajetória profissional e princípios de desenvolvimento web de Ruan Pinheiro. Foco em interfaces modernas, design editorial e performance extrema.'
  );

  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Sobre' }]} />

        {/* Header with progressive entrance */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: DEFAULT_EASE }}
            className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-3"
          >
            PERFIL PROFISSIONAL // SOBRE
          </motion.span>
          
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: DEFAULT_EASE }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F9F9F9] tracking-tight leading-[1.08] mb-6"
          >
            Construindo soluções web onde a engenharia encontra o design editorial<span className="text-[#00DF5E]">.</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: DEFAULT_EASE }}
            className="text-lg sm:text-xl text-[#F9F9F9]/75 font-normal leading-relaxed"
          >
            Desenvolvedor web focado em criar experiências digitais rápidas, modernas e pensadas minuciosamente para atender aos objetivos do seu negócio.
          </motion.p>
        </div>

        {/* Main Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Biography & Approach */}
          <div className="lg:col-span-7 space-y-6">
            <FadeUp delay={0.2}>
              <div className="p-8 rounded-2xl border border-[#333333] bg-[#1a1a1a]">
                <h2 className="text-xl sm:text-2xl font-bold text-[#F9F9F9] mb-4">
                  Quem sou e como trabalho
                </h2>
                <div className="space-y-4 text-base text-[#F9F9F9]/80 leading-relaxed">
                  <p>
                    Sou <strong>Ruan Pinheiro</strong>, desenvolvedor web. Meu trabalho une desenvolvimento front-end moderno, estruturação de dados e experiência do usuário (UX/UI) para transformar ideias em produtos digitais que realmente façam sentido.
                  </p>
                  <p>
                    Não acredito em layouts genéricos ou cópias de templates. Cada empresa ou profissional possui uma proposta de valor única, e a interface digital precisa espelhar esse nível de autoridade e cuidado desde o primeiro segundo de carregamento.
                  </p>
                  <p>
                    Minha abordagem valoriza o <strong>Minimalismo Sofisticado (Quiet Luxury Tech)</strong>: muito respiro visual, hierarquia tipográfica assertiva e código enxuto com foco em velocidade de abertura em redes móveis e SEO técnico de alta qualidade.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Filosofia de desenvolvimento com Scroll Reveal */}
            <RevealOnScroll delay={0.1}>
              <div className="p-8 rounded-2xl border border-[#333333] bg-[#1a1a1a]">
                <h2 className="text-xl sm:text-2xl font-bold text-[#F9F9F9] mb-4">
                  Princípios inegociáveis
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00DF5E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F9F9F9] block text-sm">Sem inchaço de dependências</strong>
                      <span className="text-xs sm:text-sm text-[#F9F9F9]/70">
                        Evito bibliotecas desnecessárias que aumentam o bundle e deixam o site lento. Apenas ferramentas essenciais como React, TypeScript e Tailwind CSS.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00DF5E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F9F9F9] block text-sm">Mobile First de verdade</strong>
                      <span className="text-xs sm:text-sm text-[#F9F9F9]/70">
                        Mais de 80% do tráfego web ocorre no smartphone. O layout mobile não é uma versão encolhida, mas desenhado com ergonomia de toque e fluidez nativa.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00DF5E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F9F9F9] block text-sm">Alinhamento direto e sem intermediários</strong>
                      <span className="text-xs sm:text-sm text-[#F9F9F9]/70">
                        Você conversa diretamente com quem escreve o código. Menos burocracia, mais agilidade nas alterações e total clareza em cada etapa.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Spec Card & Quick facts */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28, ease: DEFAULT_EASE }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 rounded-2xl border border-[#333333] bg-[#1a1a1a]">
              <div className="flex items-center gap-3 pb-6 border-b border-[#333333] mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#222222] border border-[#00DF5E]/40 flex items-center justify-center font-bold text-sm text-[#00DF5E]">
                  RP
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F9F9F9]">Ruan Pinheiro</h3>
                  <span className="text-xs font-mono text-[#F9F9F9]/50">Ficha Técnica & Atuação</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-[11px] font-mono text-[#F9F9F9]/40 block uppercase">Função Principal</span>
                  <span className="text-[#F9F9F9] font-medium">Desenvolvedor Web</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-[#F9F9F9]/40 block uppercase">Especialidades</span>
                  <span className="text-[#F9F9F9] font-medium">Sites Institucionais, Landing Pages, Aplicações React e Automações n8n</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-[#F9F9F9]/40 block uppercase">Localização</span>
                  <span className="text-[#F9F9F9] font-medium">{PERSONAL_INFO.location}</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-[#F9F9F9]/40 block uppercase">Disponibilidade</span>
                  <span className="text-[#00DF5E] font-medium flex items-center gap-1.5 pt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#00DF5E] animate-pulse" />
                    Aceitando novos projetos e contratos sob medida
                  </span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#333333]">
                <Link
                  to="/contato"
                  className="w-full py-3 rounded-xl bg-[#00DF5E] text-[#171717] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#00DF5E]/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 active:scale-[0.98] shadow-md shadow-[#00DF5E]/10"
                >
                  <span>Iniciar conversa com Ruan</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Links rápidos */}
            <div className="p-6 rounded-2xl border border-[#333333] bg-[#1a1a1a] flex flex-col gap-2">
              <Link
                to="/projetos"
                className="flex items-center justify-between text-xs sm:text-sm font-medium text-[#F9F9F9]/80 hover:text-[#00DF5E] transition-colors p-2.5 rounded-lg hover:bg-[#222222]"
              >
                <span>Ver projetos entregues</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicos"
                className="flex items-center justify-between text-xs sm:text-sm font-medium text-[#F9F9F9]/80 hover:text-[#00DF5E] transition-colors p-2.5 rounded-lg hover:bg-[#222222]"
              >
                <span>Conhecer serviços oferecidos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/processo"
                className="flex items-center justify-between text-xs sm:text-sm font-medium text-[#F9F9F9]/80 hover:text-[#00DF5E] transition-colors p-2.5 rounded-lg hover:bg-[#222222]"
              >
                <span>Entender o processo de 6 etapas</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

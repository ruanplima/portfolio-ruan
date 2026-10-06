import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Cpu,
  Code2,
  Zap,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DEFAULT_EASE } from './animations';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'architecture' | 'performance' | 'code'
  >('architecture');
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: DEFAULT_EASE,
      },
    },
  };

  return (
    <section className="hero-section relative min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-4.5rem)] lg:h-[calc(100dvh-4.5rem)] lg:max-h-[calc(100dvh-4.5rem)] flex flex-col justify-center overflow-hidden border-b border-[#333333]/50">
      {/* Subtle background architectural grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#F9F9F9 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="hero-content max-w-7xl mx-auto px-5 sm:px-8 relative z-10 w-full py-6 sm:py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy with Stagger Container */}
          <motion.div
            variants={containerVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            animate={shouldReduceMotion ? false : 'show'}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Status indicator & Kicker */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 lg:mb-4"
            >
              <div className="">
                <span className="">
                  <span className=""></span>
                  <span className=""></span>
                </span>
                <span className=""></span>
              </div>
              <span className=""></span>
            </motion.div>

            {/* Display Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem] font-extrabold tracking-tight text-[#F9F9F9] leading-[1.1] mb-3 sm:mb-4 lg:mb-4">
              Transformo ideias em <br className="hidden sm:block" />
              <span className="relative inline-block text-[#F9F9F9]">
                experiências digitais
                <motion.span
                  initial={shouldReduceMotion ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    ease: 'easeOut',
                  }}
                  style={{ transformOrigin: 'left' }}
                  className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-[4px] bg-[#00DF5E]/60 rounded-full pointer-events-none"
                  aria-hidden="true"
                />
              </span>
              <span className="text-[#00DF5E]">.</span>
            </h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-[#F9F9F9]/75 font-normal leading-relaxed max-w-xl mb-5 sm:mb-6 lg:mb-6"
            >
              Desenvolvimento de sites e aplicações web com foco rigoroso em
              design, performance e resultado real para o seu negócio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                to="/contato"
                className="group px-5 py-3 rounded-xl bg-[#00DF5E] text-[#171717] font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-[#00DF5E]/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#00DF5E]/10"
              >
                <span>Vamos conversar</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/projetos"
                className="group px-5 py-3 rounded-xl border border-[#333333] bg-[#1e1e1e] hover:bg-[#252525] text-[#F9F9F9] font-medium text-xs sm:text-sm inline-flex items-center gap-2 hover:border-[#F9F9F9]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Ver projetos</span>
                <ArrowRight className="w-4 h-4 text-[#00DF5E] transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            {/* Quick highlight points */}
            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 lg:mt-6 xl:mt-8 pt-5 sm:pt-6 border-t border-[#333333]/70 grid grid-cols-3 gap-3 text-left"
            >
              <div className="min-w-0">
                <span className="block text-xl sm:text-2xl font-bold text-[#F9F9F9] tracking-tight">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-[#F9F9F9]/60 font-medium leading-tight">
                  Design
                  <br className="sm:hidden" /> Responsivo
                </span>
              </div>
              <div className="min-w-0">
                <span className="block text-xl sm:text-2xl font-bold text-[#00DF5E] tracking-tight">
                  &lt; 1.0s
                </span>
                <span className="text-[11px] sm:text-xs text-[#F9F9F9]/60 font-medium leading-tight">
                  Tempo de
                  <br className="sm:hidden" /> carregamento
                </span>
              </div>
              <div className="min-w-0">
                <span className="block text-xl sm:text-2xl font-bold text-[#F9F9F9] tracking-tight">
                  Core
                </span>
                <span className="text-[11px] sm:text-xs text-[#F9F9F9]/60 font-medium leading-tight">
                  Web Vitals
                  <br className="sm:hidden" /> otimizados
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Architectural Visual Component (Minimal & Tech) */}
          <motion.div
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ duration: 0.55, delay: 0.18, ease: DEFAULT_EASE }}
            className="lg:col-span-5"
          >
            <div className="rounded-xl border border-[#333333] bg-[#1b1b1b] shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="px-3.5 py-2.5 bg-[#202020] border-b border-[#333333] flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00DF5E]/70" />
                  <span className="text-xs font-mono text-[#F9F9F9]/50 ml-1.5">
                    ruan.dev
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00DF5E] animate-pulse" />
                  <span className="text-[11px] font-mono text-[#00DF5E]">
                    ativo
                  </span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-[#333333] bg-[#181818] text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`flex-1 py-2 px-2.5 flex items-center justify-center gap-1.5 transition-colors border-r border-[#333333] ${
                    activeTab === 'architecture'
                      ? 'bg-[#1b1b1b] text-[#00DF5E] border-b-2 border-b-[#00DF5E]'
                      : 'text-[#F9F9F9]/60 hover:text-[#F9F9F9] hover:bg-[#202020]'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Arquitetura</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('performance')}
                  className={`flex-1 py-2 px-2.5 flex items-center justify-center gap-1.5 transition-colors border-r border-[#333333] ${
                    activeTab === 'performance'
                      ? 'bg-[#1b1b1b] text-[#00DF5E] border-b-2 border-b-[#00DF5E]'
                      : 'text-[#F9F9F9]/60 hover:text-[#F9F9F9] hover:bg-[#202020]'
                  }`}
                >
                  <Gauge className="w-3.5 h-3.5" />
                  <span>Performance</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('code')}
                  className={`flex-1 py-2 px-2.5 flex items-center justify-center gap-1.5 transition-colors ${
                    activeTab === 'code'
                      ? 'bg-[#1b1b1b] text-[#00DF5E] border-b-2 border-b-[#00DF5E]'
                      : 'text-[#F9F9F9]/60 hover:text-[#F9F9F9] hover:bg-[#202020]'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Código</span>
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-4 sm:p-5 min-h-[260px] sm:min-h-[270px] flex flex-col justify-between">
                {activeTab === 'architecture' && (
                  <div className="space-y-2.5 animate-in fade-in duration-200">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#F9F9F9]/50">
                      Fluxo de Engenharia & Design
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 rounded border border-[#333333] bg-[#222222] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded bg-[#171717] border border-[#333333] flex items-center justify-center text-[11px] font-bold text-[#00DF5E]">
                            01
                          </span>
                          <div>
                            <span className="text-xs font-semibold text-[#F9F9F9] block">
                              Design Editorial & UX
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded border border-[#333333] bg-[#222222] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded bg-[#171717] border border-[#333333] flex items-center justify-center text-[11px] font-bold text-[#00DF5E]">
                            02
                          </span>
                          <div>
                            <span className="text-xs font-semibold text-[#F9F9F9] block">
                              Componentização Reativa
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded border border-[#333333] bg-[#222222] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded bg-[#171717] border border-[#333333] flex items-center justify-center text-[11px] font-bold text-[#00DF5E]">
                            03
                          </span>
                          <div>
                            <span className="text-xs font-semibold text-[#F9F9F9] block">
                              Integração & Deploy
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'performance' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#F9F9F9]/50">
                        Auditoria Lighthouse & Core Vitals
                      </span>
                      <span className="text-xs font-bold text-[#00DF5E] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 100 / 100
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-2.5 rounded border border-[#333333] bg-[#222222]">
                        <span className="text-[10px] text-[#F9F9F9]/60 block font-mono">
                          LCP (Pintura Maior)
                        </span>
                        <span className="text-lg font-bold text-[#00DF5E]">
                          0.8s
                        </span>
                        <span className="text-[10px] text-[#F9F9F9]/40 block">
                          Excelente (&lt; 2.5s)
                        </span>
                      </div>
                      <div className="p-2.5 rounded border border-[#333333] bg-[#222222]">
                        <span className="text-[10px] text-[#F9F9F9]/60 block font-mono">
                          CLS (Estabilidade)
                        </span>
                        <span className="text-lg font-bold text-[#00DF5E]">
                          0.00
                        </span>
                        <span className="text-[10px] text-[#F9F9F9]/40 block">
                          Zero salto visual
                        </span>
                      </div>
                      <div className="p-2.5 rounded border border-[#333333] bg-[#222222]">
                        <span className="text-[10px] text-[#F9F9F9]/60 block font-mono">
                          INP (Interação)
                        </span>
                        <span className="text-lg font-bold text-[#00DF5E]">
                          18ms
                        </span>
                        <span className="text-[10px] text-[#F9F9F9]/40 block">
                          Resposta imediata
                        </span>
                      </div>
                      <div className="p-2.5 rounded border border-[#333333] bg-[#222222]">
                        <span className="text-[10px] text-[#F9F9F9]/60 block font-mono">
                          SEO Score
                        </span>
                        <span className="text-lg font-bold text-[#00DF5E]">
                          100%
                        </span>
                        <span className="text-[10px] text-[#F9F9F9]/40 block">
                          HTML semântico
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="space-y-2 font-mono text-xs animate-in fade-in duration-200">
                    <div className="text-[10px] text-[#F9F9F9]/40 flex items-center justify-between">
                      <span>src/components/Experience.tsx</span>
                      <span className="text-[#00DF5E]">TypeScript</span>
                    </div>

                    <pre className="p-2.5 rounded bg-[#161616] border border-[#333333] text-[#F9F9F9]/90 text-[10px] sm:text-[11px] leading-relaxed overflow-x-auto">
                      <code>
                        <span className="text-[#00DF5E]">interface</span>{' '}
                        ProjectProps &#123;{'\n'}
                        {'  '}client:{' '}
                        <span className="text-[#F9F9F9]">string</span>;{'\n'}
                        {'  '}focus:{' '}
                        <span className="text-[#00DF5E]">
                          'design' | 'performance'
                        </span>
                        ;{'\n'}
                        &#125;{'\n\n'}
                        <span className="text-[#00DF5E]">
                          export const
                        </span>{' '}
                        deliver = (props: ProjectProps) =&gt; &#123;{'\n'}
                        {'  '}
                        <span className="text-[#00DF5E]">return</span> &#123;
                        {'\n'}
                        {'    '}status:{' '}
                        <span className="text-[#00DF5E]">
                          'pronto_para_conversão'
                        </span>
                        ,{'\n'}
                        {'    '}coreWebVitals:{' '}
                        <span className="text-[#00DF5E]">100</span>,{'\n'}
                        {'  '}&#125;;{'\n'}
                        &#125;;
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

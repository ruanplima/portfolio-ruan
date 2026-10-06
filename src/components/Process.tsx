import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PROCESS_STEPS, PERSONAL_INFO } from '../data/portfolioData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="processo" className="py-24 sm:py-32 border-b border-[#333333]/50 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#333333] bg-[#1c1c1c] text-xs font-mono uppercase tracking-wider text-[#00DF5E] mb-4">
              05 // METODOLOGIA
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F9F9F9] tracking-tight">
              Como funciona o desenvolvimento<span className="text-[#00DF5E]">.</span>
            </h2>
          </div>
          <p className="text-base text-[#F9F9F9]/60 max-w-md">
            Um processo estruturado em 5 etapas claras para garantir previsibilidade, prazo e qualidade impecável do início ao lançamento.
          </p>
        </div>

        {/* Timeline Desktop Horizontal / Mobile Vertical */}
        <div className="relative mb-14">
          
          {/* Connector Line Desktop */}
          <div className="hidden lg:block absolute top-6 left-8 right-8 h-0.5 bg-[#333333] z-0" />

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#202020] border-[#00DF5E] shadow-xl shadow-[#00DF5E]/5'
                      : 'bg-[#1a1a1a] border-[#333333] hover:border-[#F9F9F9]/40'
                  }`}
                >
                  <div>
                    {/* Step Number Circle */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm border transition-colors ${
                        isActive
                          ? 'bg-[#00DF5E] text-[#171717] border-[#00DF5E]'
                          : 'bg-[#222222] text-[#F9F9F9] border-[#333333]'
                      }`}>
                        {step.number}
                      </div>

                      {isActive && (
                        <span className="text-[10px] font-mono text-[#00DF5E] uppercase tracking-wider">
                          selecionado
                        </span>
                      )}
                    </div>

                    <h3 className={`text-xl font-bold mb-2 transition-colors ${
                      isActive ? 'text-[#00DF5E]' : 'text-[#F9F9F9]'
                    }`}>
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#F9F9F9]/70 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#333333]/80">
                    <span className="text-[11px] font-mono text-[#F9F9F9]/50 block mb-1">
                      Entregável:
                    </span>
                    <span className="text-xs text-[#F9F9F9] font-medium leading-snug block">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Breakdown Card of Selected Step */}
        <div className="p-8 rounded-2xl border border-[#333333] bg-[#1a1a1a] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-[#00DF5E] bg-[#00DF5E]/10 px-2 py-0.5 rounded">
                Etapa {PROCESS_STEPS[activeStepIndex].number}
              </span>
              <h4 className="text-xl font-bold text-[#F9F9F9]">
                Detalhes de {PROCESS_STEPS[activeStepIndex].title}
              </h4>
            </div>

            <p className="text-sm text-[#F9F9F9]/70 mb-4 max-w-2xl">
              Nesta fase, o foco é a garantia de qualidade e alinhamento contínuo:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROCESS_STEPS[activeStepIndex].details.map((detail, i) => (
                <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#F9F9F9]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#00DF5E] shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#333333] lg:pl-8 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded bg-[#00DF5E] text-[#171717] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 hover:bg-[#00DF5E]/90 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#171717]" />
              <span>Iniciar projeto com Ruan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

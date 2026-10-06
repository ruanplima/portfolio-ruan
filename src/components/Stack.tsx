import React, { useState } from 'react';
import { Code, Server, Wrench, CheckCircle2, Terminal } from 'lucide-react';
import { TECH_CATEGORIES } from '../data/portfolioData';

export const Stack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(TECH_CATEGORIES[0].category);

  const getCategoryIcon = (category: string) => {
    if (category.includes('FRONT-END')) {
      return <Code className="w-5 h-5 text-[#00DF5E]" />;
    }
    if (category.includes('BACK-END')) {
      return <Server className="w-5 h-5 text-[#00DF5E]" />;
    }
    return <Wrench className="w-5 h-5 text-[#00DF5E]" />;
  };

  return (
    <section id="tecnologias" className="py-24 sm:py-32 border-b border-[#333333]/50 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#333333] bg-[#1c1c1c] text-xs font-mono uppercase tracking-wider text-[#00DF5E] mb-4">
            04 // TECNOLOGIAS & FERRAMENTAS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F9F9F9] tracking-tight mb-4">
            Domínio técnico orientado a estabilidade e performance<span className="text-[#00DF5E]">.</span>
          </h2>
          <p className="text-base text-[#F9F9F9]/70 max-w-2xl leading-relaxed">
            Ferramentas selecionadas para garantir velocidade de carregamento, facilidade de manutenção futura e uma experiência de usuário sem atritos.
          </p>
        </div>

        {/* 3 Categories Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((catGroup) => (
            <div
              key={catGroup.category}
              className="p-7 sm:p-8 rounded-2xl border border-[#333333] bg-[#1a1a1a] hover:border-[#00DF5E]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#333333]/70 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#222222] border border-[#333333]">
                      {getCategoryIcon(catGroup.category)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#F9F9F9] tracking-tight">
                        {catGroup.category}
                      </h3>
                      <span className="text-[11px] font-mono text-[#00DF5E]">
                        {catGroup.items.length} tecnologias
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#F9F9F9]/60 leading-relaxed mb-6">
                  {catGroup.description}
                </p>

                {/* Items List */}
                <div className="space-y-3">
                  {catGroup.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3.5 rounded-xl border border-[#333333]/70 bg-[#202020] hover:bg-[#252525] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-[#F9F9F9] flex items-center gap-1.5">
                          {item.name}
                          {item.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00DF5E]" title="Foco principal" />
                          )}
                        </span>
                        <span className="text-[10px] font-mono text-[#00DF5E] bg-[#00DF5E]/10 px-2 py-0.5 rounded border border-[#00DF5E]/20">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#F9F9F9]/60 leading-snug">
                        {item.experience}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="pt-6 mt-6 border-t border-[#333333] flex items-center justify-between text-[11px] font-mono text-[#F9F9F9]/40">
                <span>Padrões modernos</span>
                <span className="text-[#00DF5E]">Testado em produção</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Server, Wrench, Layers, CheckCircle2, Terminal, ArrowUpRight, Cpu } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { TECH_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';
import { usePageMeta } from '../hooks/usePageMeta';

export const StackPage: React.FC = () => {
  usePageMeta(
    'Stack Tecnológica & Ferramentas — Ruan Pinheiro',
    'Conheça o ecossistema técnico de Ruan Pinheiro: Frontend (React, TypeScript, Tailwind), Backend & Integrações (Node.js, REST APIs, n8n), Ferramentas e Workflow de Deploy.'
  );

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('front')) {
      return <Code className="w-6 h-6 text-[#00DF5E]" />;
    }
    if (category.toLowerCase().includes('back')) {
      return <Server className="w-6 h-6 text-[#00DF5E]" />;
    }
    if (category.toLowerCase().includes('ferramentas')) {
      return <Wrench className="w-6 h-6 text-[#00DF5E]" />;
    }
    return <Layers className="w-6 h-6 text-[#00DF5E]" />;
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Stack' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-3">
            TECNOLOGIAS & FERRAMENTAS // STACK
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F9F9F9] tracking-tight leading-[1.08] mb-6">
            Ferramentas selecionadas por estabilidade, velocidade e longevidade<span className="text-[#00DF5E]">.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#F9F9F9]/75 font-normal leading-relaxed">
            Não sigo tendências passageiras ou bibliotecas que deixam o projeto pesado. Cada tecnologia da stack é escolhida para garantir carregamento instantâneo, manutenibilidade simples e excelente experiência de uso.
          </p>
        </div>

        {/* Tech Categories Grid (4 Categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {TECH_CATEGORIES.map((catGroup) => (
            <div
              key={catGroup.category}
              className="p-8 rounded-2xl border border-[#333333] bg-[#1a1a1a] hover:border-[#00DF5E]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#333333]/70 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-[#222222] border border-[#333333]">
                      {getCategoryIcon(catGroup.category)}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#F9F9F9] tracking-tight">
                        {catGroup.category}
                      </h2>
                      <span className="text-xs font-mono text-[#00DF5E]">
                        {catGroup.items.length} tecnologias dominadas
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#F9F9F9]/70 leading-relaxed mb-6">
                  {catGroup.description}
                </p>

                {/* Items List */}
                <div className="space-y-3">
                  {catGroup.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-4 rounded-xl border border-[#333333]/70 bg-[#202020] hover:bg-[#252525] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-bold text-[#F9F9F9] flex items-center gap-2">
                          {item.name}
                          {item.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00DF5E]" title="Especialidade central" />
                          )}
                        </span>
                        <span className="text-[10px] font-mono text-[#00DF5E] bg-[#00DF5E]/10 px-2.5 py-0.5 rounded border border-[#00DF5E]/20">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#F9F9F9]/60 leading-relaxed">
                        {item.experience}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer tag */}
              <div className="pt-6 mt-6 border-t border-[#333333] flex items-center justify-between text-xs font-mono text-[#F9F9F9]/40">
                <span>Padrões de engenharia limpa</span>
                <span className="text-[#00DF5E]">100% tipado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Por que esta stack? */}
        <div className="p-8 sm:p-12 rounded-2xl border border-[#333333] bg-[#161616] mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-2">
            CRITÉRIOS TÉCNICOS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F9F9F9] mb-6">
            Por que escolher React, TypeScript e Tailwind CSS para seu projeto?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#F9F9F9]/80 leading-relaxed">
            <div className="space-y-2">
              <strong className="text-sm text-[#F9F9F9] block">1. Segurança com TypeScript</strong>
              <p>
                Eliminação de erros silenciosos em tempo de desenvolvimento. Código robusto que previne falhas em formulários, APIs e regras de negócio.
              </p>
            </div>
            <div className="space-y-2">
              <strong className="text-sm text-[#F9F9F9] block">2. Tailwind CSS sem Inchaço</strong>
              <p>
                Apenas as classes CSS estritamente utilizadas são exportadas para a produção. Zero arquivos CSS desnecessários ou folhas pesadas de 500kb.
              </p>
            </div>
            <div className="space-y-2">
              <strong className="text-sm text-[#F9F9F9] block">3. Escalabilidade Garantida</strong>
              <p>
                O projeto nasce modular. No futuro, adicionar novas páginas, novos recursos ou mudar o layout é um processo direto e sem refatorações dolorosas.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-[#F9F9F9]">
            Quer saber se sua stack atual é compatível?
          </h3>
          <p className="text-xs sm:text-sm text-[#F9F9F9]/70">
            Fique à vontade para enviar as especificações do seu projeto para uma avaliação técnica sem compromisso.
          </p>
          <div>
            <Link
              to="/contato"
              className="px-6 py-3 rounded-xl bg-[#00DF5E] text-[#171717] font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-[#00DF5E]/90 transition-colors"
            >
              <span>Conversar com Ruan</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ProjectEstimator: React.FC = () => {
  const [projectType, setProjectType] = useState<'Landing Page' | 'Site Institucional' | 'Aplicação Web' | 'Automação'>('Landing Page');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Design Responsivo Sob Medida',
    'Otimização de Carregamento & SEO'
  ]);
  const [timeframe, setTimeframe] = useState<'Imediato (1-2 semanas)' | 'Planejado (3-4 semanas)' | 'Flexível'>('Imediato (1-2 semanas)');

  const featureOptions = [
    'Design Responsivo Sob Medida',
    'Otimização de Carregamento & SEO',
    'Integração Direta com WhatsApp',
    'Formulários Dinâmicos com Validação',
    'Automações com n8n / Webhooks',
    'Integração com APIs Externas',
    'Painel / Dashboard Interativo'
  ];

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const generateWhatsAppScopeMessage = () => {
    const text = `Olá, Ruan! Simulei o escopo do meu projeto no seu portfólio:
- Tipo: ${projectType}
- Recursos selecionados: ${selectedFeatures.join(', ')}
- Prazo pretendido: ${timeframe}

Gostaria de agendar uma conversa para alinharmos os detalhes e um orçamento formal!`;

    return `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 sm:py-28 border-b border-[#333333]/50 bg-[#151515] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#333333] bg-[#1c1c1c] text-xs font-mono uppercase tracking-wider text-[#00DF5E] mb-3">
            FERRAMENTA // ESTIMADOR DE ESCOPO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F9F9F9] tracking-tight mb-3">
            Planeje o formato ideal para a sua demanda<span className="text-[#00DF5E]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F9F9F9]/70">
            Selecione o tipo de projeto e os recursos essenciais para gerar um resumo personalizado e iniciar a conversa com agilidade.
          </p>
        </div>

        {/* Interactive Estimator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Project Type */}
            <div className="p-6 rounded-2xl border border-[#333333] bg-[#1a1a1a]">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/60 mb-3">
                1. Tipo de Projeto
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(['Landing Page', 'Site Institucional', 'Aplicação Web', 'Automação'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`p-3 rounded-xl text-xs font-semibold text-center transition-all ${
                      projectType === type
                        ? 'bg-[#00DF5E] text-[#171717] shadow-md shadow-[#00DF5E]/10'
                        : 'bg-[#222222] border border-[#333333] text-[#F9F9F9]/80 hover:bg-[#282828] hover:text-[#F9F9F9]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Features Needed */}
            <div className="p-6 rounded-2xl border border-[#333333] bg-[#1a1a1a]">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/60 mb-3">
                2. Recursos & Integrações Necessárias
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map((feat) => {
                  const isSelected = selectedFeatures.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`p-3 rounded-xl text-xs text-left flex items-center justify-between border transition-all ${
                        isSelected
                          ? 'bg-[#222222] border-[#00DF5E] text-[#F9F9F9]'
                          : 'bg-[#1e1e1e] border-[#333333] text-[#F9F9F9]/70 hover:border-[#333333]'
                      }`}
                    >
                      <span>{feat}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ml-2 ${
                        isSelected ? 'bg-[#00DF5E] text-[#171717]' : 'border border-[#333333]'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeframe */}
            <div className="p-6 rounded-2xl border border-[#333333] bg-[#1a1a1a]">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/60 mb-3">
                3. Expectativa de Prazo
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {(['Imediato (1-2 semanas)', 'Planejado (3-4 semanas)', 'Flexível'] as const).map((tf) => (
                  <button
                    key={tf}
                    type="button"
                    onClick={() => setTimeframe(tf)}
                    className={`p-3 rounded-xl text-xs text-center border transition-all ${
                      timeframe === tf
                        ? 'bg-[#222222] border-[#00DF5E] text-[#00DF5E] font-medium'
                        : 'bg-[#1e1e1e] border-[#333333] text-[#F9F9F9]/70 hover:border-[#F9F9F9]/30'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Scope Summary Card (Right) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl border border-[#00DF5E]/40 bg-[#1b1b1b] shadow-2xl flex flex-col justify-between sticky top-28">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#333333] mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#00DF5E]">
                  Resumo do Escopo
                </span>
                <span className="text-xs font-mono text-[#F9F9F9]/50">
                  Estimativa prévia
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs text-[#F9F9F9]/50 block">Modalidade:</span>
                  <span className="text-lg font-bold text-[#F9F9F9]">{projectType}</span>
                </div>

                <div>
                  <span className="text-xs text-[#F9F9F9]/50 block mb-1">Recursos Selecionados ({selectedFeatures.length}):</span>
                  <ul className="space-y-1">
                    {selectedFeatures.map((f, i) => (
                      <li key={i} className="text-xs text-[#F9F9F9]/80 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#00DF5E]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <span className="text-xs text-[#F9F9F9]/50 block">Cronograma ideal:</span>
                  <span className="text-sm font-semibold text-[#00DF5E]">{timeframe}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#333333] space-y-3">
              <a
                href={generateWhatsAppScopeMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded bg-[#00DF5E] text-[#171717] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#00DF5E]/90 transition-all active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Enviar este briefing no WhatsApp</span>
              </a>
              <span className="text-[11px] text-center block text-[#F9F9F9]/50">
                Sem compromisso • Resposta ágil diretamente de Ruan
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

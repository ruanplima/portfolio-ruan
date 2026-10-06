import React from 'react';
import { Layers, ShieldCheck, Compass, Terminal, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 border-b border-[#333333]/50 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#333333] bg-[#1c1c1c] text-xs font-mono uppercase tracking-wider text-[#00DF5E] mb-4">
            01 // SOBRE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F9F9F9] tracking-tight">
            Design, técnica e propósito em cada linha de código<span className="text-[#00DF5E]">.</span>
          </h2>
        </div>

        {/* Editorial 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Statement (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xl sm:text-2xl text-[#F9F9F9] font-medium leading-relaxed">
              Sou desenvolvedor web focado na criação de experiências digitais modernas, funcionais e pensadas para cada projeto.
            </p>
            <p className="text-base sm:text-lg text-[#F9F9F9]/70 leading-relaxed">
              Meu trabalho une desenvolvimento, interface e experiência do usuário para transformar ideias em produtos digitais que realmente façam sentido — sem excessos, sem clichês e com foco em resultados mensuráveis.
            </p>
            <p className="text-base sm:text-lg text-[#F9F9F9]/70 leading-relaxed">
              Acredito que um website de alto padrão não deve apenas ser visualmente marcante: ele precisa carregar instantaneamente, funcionar com precisão cirúrgica em qualquer dispositivo e transmitir autoridade imediata para quem acessa.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00DF5E] hover:underline underline-offset-4"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Conversar diretamente com Ruan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Pillars Cards (Right) */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="p-6 rounded-xl border border-[#333333] bg-[#1a1a1a] hover:border-[#00DF5E]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#222222] border border-[#333333] text-[#00DF5E]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9F9F9] mb-1">
                    Design Editorial & Usabilidade
                  </h3>
                  <p className="text-sm text-[#F9F9F9]/70 leading-relaxed">
                    Prioridade para hierarquia tipográfica, respiração visual e fluxo de leitura intuitivo. O usuário encontra o que procura sem esforço e com clareza absoluta.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#333333] bg-[#1a1a1a] hover:border-[#00DF5E]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#222222] border border-[#333333] text-[#00DF5E]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9F9F9] mb-1">
                    Performance & Core Web Vitals
                  </h3>
                  <p className="text-sm text-[#F9F9F9]/70 leading-relaxed">
                    Código semântico, carregamento veloz e ausência de bibliotecas pesadas desnecessárias. Páginas que pontuam alto nos testes do Google e não perdem visitantes por lentidão.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#333333] bg-[#1a1a1a] hover:border-[#00DF5E]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#222222] border border-[#333333] text-[#00DF5E]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9F9F9] mb-1">
                    Comunicação Sem Ruídos
                  </h3>
                  <p className="text-sm text-[#F9F9F9]/70 leading-relaxed">
                    Contato direto com quem está programando o seu projeto. Alinhamento contínuo, prazos realistas e total transparência em cada etapa da entrega.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

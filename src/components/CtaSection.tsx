import React from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CtaSectionProps {
  onOpenChat: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenChat }) => {
  return (
    <section className="py-24 sm:py-32 border-b border-[#333333]/50 bg-[#161616] relative overflow-hidden">
      {/* Discreet background ambient glow with strict palette restraint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#00DF5E]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#333333] bg-[#1d1d1d] text-xs font-mono uppercase tracking-wider text-[#00DF5E] mb-6">
          DISPONÍVEL PARA CONTRATAÇÃO
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F9F9F9] tracking-tight leading-tight mb-6">
          Tem um projeto em mente<span className="text-[#00DF5E]">?</span>
        </h2>

        <p className="text-lg sm:text-xl text-[#F9F9F9]/75 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Vamos conversar sobre como transformar sua ideia em uma experiência digital marcante, veloz e construída sob medida para o seu público.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PERSONAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded bg-[#00DF5E] text-[#171717] font-bold text-base inline-flex items-center justify-center gap-2.5 hover:bg-[#00DF5E]/90 transition-all active:scale-[0.98] shadow-xl shadow-[#00DF5E]/15"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Iniciar conversa no WhatsApp</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <button
            onClick={onOpenChat}
            type="button"
            className="w-full sm:w-auto px-6 py-4 rounded border border-[#333333] bg-[#202020] hover:bg-[#252525] text-[#F9F9F9] font-medium text-base inline-flex items-center justify-center gap-2 hover:border-[#F9F9F9]/40 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#00DF5E]" />
            <span>Falar com Assistente de Ruan</span>
          </button>
        </div>

        <div className="mt-8 text-xs font-mono text-[#F9F9F9]/50">
          Sem burocracia • Conversa direta • Resposta rápida
        </div>

      </div>
    </section>
  );
};

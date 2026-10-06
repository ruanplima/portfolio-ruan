import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Layers, Sparkles } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export const NotFoundPage: React.FC = () => {
  usePageMeta(
    '404 — Página Não Encontrada | Ruan Pinheiro',
    'A página que você procura não existe ou foi movida. Volte para a página inicial do portfólio de Ruan Pinheiro.'
  );

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-5 pt-28 pb-20">
      <div className="max-w-xl w-full p-8 sm:p-12 rounded-3xl border border-[#333333] bg-[#1a1a1a] text-center relative overflow-hidden shadow-2xl">
        
        {/* Subtle decorative code mark */}
        <div className="w-16 h-16 rounded-2xl bg-[#222222] border border-[#00DF5E]/40 text-[#00DF5E] flex items-center justify-center font-mono font-extrabold text-2xl mx-auto mb-6">
          404
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-2">
          ERRO // NÃO ENCONTRADO
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F9F9F9] tracking-tight mb-4">
          Essa página não existe<span className="text-[#00DF5E]">.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#F9F9F9]/70 leading-relaxed mb-8 max-w-md mx-auto">
          Talvez o endereço tenha mudado, sido digitado incorretamente ou o conteúdo que você procura não esteja mais disponível.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#00DF5E] text-[#171717] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 hover:bg-[#00DF5E]/90 transition-all active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            <span>Voltar para o início</span>
          </Link>

          <Link
            to="/projetos"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#333333] bg-[#222222] hover:bg-[#282828] text-[#F9F9F9] text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
          >
            <Layers className="w-4 h-4 text-[#00DF5E]" />
            <span>Explorar projetos</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

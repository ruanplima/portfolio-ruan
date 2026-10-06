import React from 'react';
import { X, ExternalLink, CheckCircle, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { Project } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getWhatsAppProjectInquiry = (title: string) => {
    const text = encodeURIComponent(`Olá, Ruan! Vi o projeto "${title}" no seu portfólio e gostaria de algo semelhante para o meu negócio.`);
    return `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-3xl rounded-2xl bg-[#191919] border border-[#333333] overflow-hidden relative shadow-2xl my-8">
        
        {/* Modal Header Bar with window controls */}
        <div className="px-6 py-4 bg-[#202020] border-b border-[#333333] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#00DF5E] bg-[#00DF5E]/10 px-2.5 py-1 rounded border border-[#00DF5E]/20">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#F9F9F9]/50">
              {project.metrics}
            </span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg border border-[#333333] text-[#F9F9F9]/70 hover:text-[#F9F9F9] hover:bg-[#282828] transition-colors"
            aria-label="Fechar detalhes do projeto"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mockup Preview Visual Banner */}
        <div className={`p-8 sm:p-12 bg-gradient-to-br ${project.mockupTheme.bgStyle} border-b border-[#333333] relative overflow-hidden`}>
          <div className="max-w-xl relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-2">
              {project.mockupTheme.tagline}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F9F9F9] tracking-tight mb-3">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-[#F9F9F9]/80 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
            <Layers className="w-48 h-48 text-white" />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Full description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/50 mb-2">
              Visão Geral
            </h4>
            <p className="text-sm sm:text-base text-[#F9F9F9]/80 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          {(project.challenge || project.solution) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {project.challenge && (
                <div className="p-4 rounded-xl border border-[#333333] bg-[#202020]">
                  <span className="text-xs font-mono text-[#F9F9F9]/50 block mb-1">
                    Desafio
                  </span>
                  <p className="text-xs sm:text-sm text-[#F9F9F9]/80">
                    {project.challenge}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="p-4 rounded-xl border border-[#333333] bg-[#202020]">
                  <span className="text-xs font-mono text-[#00DF5E] block mb-1">
                    Solução Técnica
                  </span>
                  <p className="text-xs sm:text-sm text-[#F9F9F9]/80">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/50 mb-3">
                Destaques Implementados
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F9F9F9]/80">
                    <CheckCircle className="w-4 h-4 text-[#00DF5E] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/50 mb-3">
              Stack Utilizada
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded bg-[#222222] border border-[#333333] text-xs font-mono text-[#F9F9F9]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-6 border-t border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={getWhatsAppProjectInquiry(project.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded bg-[#00DF5E] text-[#171717] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 hover:bg-[#00DF5E]/90 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#171717]" />
                <span>Quero um projeto semelhante</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="text-xs text-[#F9F9F9]/60 hover:text-[#F9F9F9] transition-colors"
            >
              Fechar visualização
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

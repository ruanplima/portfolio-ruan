import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, Layers, Terminal, Activity } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    'Todos',
    'Aplicações Web',
    'Landing Pages',
    'Sites Institucionais',
    'Automações'
  ];

  const filteredProjects = selectedCategory === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-24 sm:py-32 border-b border-[#333333]/50 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#333333] bg-[#1c1c1c] text-xs font-mono uppercase tracking-wider text-[#00DF5E] mb-4">
              // PROJETOS SELECIONADOS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F9F9F9] tracking-tight">
              Trabalhos construídos com foco em resultado<span className="text-[#00DF5E]">.</span>
            </h2>
          </div>
          <p className="text-base text-[#F9F9F9]/60 max-w-md">
            Uma seleção de aplicações, landing pages e estruturas digitais criadas com foco em design, velocidade e usabilidade real.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#F9F9F9] text-[#171717] font-semibold'
                  : 'bg-[#1b1b1b] border border-[#333333] text-[#F9F9F9]/70 hover:text-[#F9F9F9] hover:border-[#F9F9F9]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Projects Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const isWide = project.aspectRatio === 'wide' || (index === 0 && selectedCategory === 'Todos');
            
            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`cursor-pointer group rounded-2xl border border-[#333333] bg-[#1a1a1a] hover:border-[#00DF5E]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isWide ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4'
                }`}
              >
                {/* Top of Card: "Cabeçalho" do site com nome em uppercase e botão Ver Projeto */}
                <div className={`p-5 sm:p-6 bg-gradient-to-br ${project.mockupTheme.bgStyle} border-b border-[#333333] relative overflow-hidden flex items-center justify-between gap-4`}>
                  <h4 className="text-sm sm:text-base font-extrabold tracking-wider uppercase text-[#F9F9F9] group-hover:text-[#00DF5E] transition-colors z-10 relative truncate">
                    {project.title.toUpperCase()}
                  </h4>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00DF5E] text-[#171717] font-semibold text-xs transition-all duration-200 hover:bg-[#00DF5E]/90 hover:scale-[1.03] active:scale-[0.98] shadow-sm shadow-[#00DF5E]/10 shrink-0 z-20 relative cursor-pointer"
                      title={`Visualizar ${project.title} online (${project.demoUrl})`}
                    >
                      <span>Ver Projeto</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00DF5E] text-[#171717] font-semibold text-xs transition-all duration-200 group-hover:bg-[#00DF5E]/90 shrink-0 z-10 relative">
                      <span>Ver Projeto</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  )}

                  <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-4 translate-y-4">
                    <Layers className="w-32 h-32 text-white" />
                  </div>
                </div>

                {/* Project Details Footer */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-sm text-[#F9F9F9]/70 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded bg-[#222222] border border-[#333333] text-[11px] font-mono text-[#F9F9F9]/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-[#333333] flex items-center justify-between">
                    <span className="text-xs text-[#F9F9F9]/50 font-mono">
                      Clique para detalhes técnicos
                    </span>
                    <span className="text-xs font-mono text-[#00DF5E] group-hover:underline flex items-center gap-1">
                      <span>Ver case</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Project Consultation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-[#333333] bg-[#191919] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00DF5E]/10 border border-[#00DF5E]/30 flex items-center justify-center text-[#00DF5E] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#F9F9F9]">
                Precisa de um projeto sob medida?
              </h4>
              <p className="text-xs sm:text-sm text-[#F9F9F9]/70">
                Desenvolvo soluções digitais personalizadas com design exclusivo, carregamento instantâneo e foco em conversão.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#00DF5E] hover:bg-[#00DF5E]/90 text-xs sm:text-sm font-semibold text-[#171717] inline-flex items-center justify-center gap-2 transition-all shadow-md shadow-[#00DF5E]/10"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#171717]" />
            <span>Iniciar conversa</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

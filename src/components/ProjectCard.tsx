import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { Project } from '../types';
import { DEFAULT_EASE } from './animations';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/projetos/${project.slug}`);
  };

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.25, ease: DEFAULT_EASE }}
      className={`h-full ${
        className ? className : featured ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4'
      }`}
    >
      <div
        onClick={handleCardClick}
        className="group rounded-2xl border border-[#333333] bg-[#1a1a1a] hover:border-[#00DF5E]/60 transition-colors duration-300 overflow-hidden flex flex-col justify-between h-full block shadow-lg shadow-black/20 hover:shadow-[#00DF5E]/5 cursor-pointer"
      >
        {/* Top of Card / "Cabeçalho" do site: Apenas nome em uppercase e botão Ver Projeto */}
        <div className={`p-5 sm:p-6 bg-gradient-to-br ${project.mockupTheme.bgStyle} border-b border-[#333333] relative overflow-hidden flex items-center justify-between gap-4`}>
          {/* Nome do projeto em UPPERCASE */}
          <h3 className="text-sm sm:text-base font-extrabold tracking-wider uppercase text-[#F9F9F9] group-hover:text-[#00DF5E] transition-colors z-10 relative truncate">
            {project.title.toUpperCase()}
          </h3>

          {/* Botão de Ver Projeto com link para visualização do site */}
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

          {/* Efeito decorativo sutil de fundo */}
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-4 translate-y-4">
            <Layers className="w-32 h-32 text-white" />
          </div>
        </div>

        {/* Footer Info ("depois pode continuar igual") */}
        <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
          <div>
            <p className="text-xs sm:text-sm text-[#F9F9F9]/70 leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded bg-[#222222] border border-[#333333] text-[11px] font-mono text-[#F9F9F9]/85"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 rounded bg-[#1e1e1e] border border-[#333333] text-[10px] font-mono text-[#00DF5E]">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[#333333] flex items-center justify-between text-xs font-mono text-[#F9F9F9]/50">
            <span className="text-[#00DF5E] group-hover:underline flex items-center gap-1">
              <span>Acessar estudo de caso</span>
              <span>→</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

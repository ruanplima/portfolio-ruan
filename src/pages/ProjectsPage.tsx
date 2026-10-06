import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { Search, ArrowUpRight } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProjectCard } from '../components/ProjectCard';
import { TypewriterText } from '../components/TypewriterText';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { usePageMeta } from '../hooks/usePageMeta';
import { StaggerContainer, StaggerItem, FadeUp, RevealOnScroll, DEFAULT_EASE } from '../components/animations';

export const ProjectsPage: React.FC = () => {
  usePageMeta(
    'Projetos Selecionados — Ruan Pinheiro',
    'Conheça o portfólio de projetos desenvolvidos por Ruan Pinheiro. Sites institucionais, landing pages de alta conversão, aplicações web modernas e automações com código sob medida.'
  );

  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    'Todos',
    'Sites Institucionais',
    'Landing Pages',
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === 'Todos' || project.category === selectedCategory;
    
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.shortDescription.toLowerCase().includes(query) ||
      project.technologies.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Projetos' }]} />

        {/* Header with progressive entrance */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: DEFAULT_EASE }}
              className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-3"
            >
              // PROJETOS
            </motion.span>
            
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: DEFAULT_EASE }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F9F9F9] tracking-tight leading-[1.08] mb-4"
            >
              <TypewriterText text="Projetos selecionados com foco em performance e resultado." />
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: DEFAULT_EASE }}
              className="text-base sm:text-lg text-[#F9F9F9]/70 leading-relaxed"
            >
              Uma coleção de trabalhos desenvolvidos para diferentes necessidades, negócios e experiências digitais. Clique em qualquer projeto para abrir a página detalhada do caso.
            </motion.p>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: DEFAULT_EASE }}
            className="flex items-center gap-3 shrink-0"
          >
            <Link
              to="/contato"
              className="px-5 py-2.5 rounded-xl bg-[#00DF5E] text-[#171717] font-semibold text-xs inline-flex items-center gap-2 hover:bg-[#00DF5E]/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 active:scale-[0.98] shadow-md shadow-[#00DF5E]/10"
            >
              <span>Solicitar proposta de projeto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Filter & Search Bar with FadeUp */}
        <FadeUp delay={0.2}>
          <div className="p-4 sm:p-5 rounded-2xl border border-[#333333] bg-[#1a1a1a] mb-12 flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Quick Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#F9F9F9]/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nome ou tecnologia..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#222222] border border-[#333333] text-xs text-[#F9F9F9] placeholder-[#F9F9F9]/40 focus:border-[#00DF5E] focus:outline-none transition-colors"
              />
            </div>
          </div>
        </FadeUp>

        {/* Projects Grid with Stagger */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 rounded-2xl border border-[#333333] bg-[#1a1a1a] text-center space-y-3">
            <p className="text-base font-medium text-[#F9F9F9]">
              Nenhum projeto encontrado para esta busca.
            </p>
            <p className="text-xs text-[#F9F9F9]/60">
              Tente redefinir os filtros ou remover os termos pesquisados.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              type="button"
              className="mt-2 px-4 py-2 rounded-lg bg-[#00DF5E] text-[#171717] font-semibold text-xs inline-flex items-center gap-1.5"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          <StaggerContainer
            key={`${selectedCategory}-${searchQuery}`}
            staggerDelay={0.07}
            delayChildren={0.1}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20"
          >
            {filteredProjects.map((project, idx) => (
              <StaggerItem
                key={project.slug}
                className={
                  idx === 0 && selectedCategory === 'Todos' && !searchQuery
                    ? 'md:col-span-12 lg:col-span-8'
                    : 'md:col-span-6 lg:col-span-4'
                }
              >
                <ProjectCard
                  project={project}
                  featured={idx === 0 && selectedCategory === 'Todos' && !searchQuery}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {/* Bottom Contact transition with Scroll Reveal */}
        <RevealOnScroll>
          <div className="p-8 sm:p-12 rounded-2xl border border-[#333333] bg-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F9F9F9] mb-2">
                Deseja um projeto desenvolvido com esse nível de acabamento?
              </h3>
              <p className="text-xs sm:text-sm text-[#F9F9F9]/70">
                Entre em contato para conversarmos sobre escopo, prazos e soluções técnicas.
              </p>
            </div>

            <Link
              to="/contato"
              className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#00DF5E] text-[#171717] font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-[#00DF5E]/90 transition-all active:scale-[0.98] shrink-0"
            >
              <span>Iniciar conversa</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>

      </div>
    </div>
  );
};

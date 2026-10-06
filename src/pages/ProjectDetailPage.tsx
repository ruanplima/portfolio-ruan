import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Activity, Calendar, User, Layers } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProjectCard } from '../components/ProjectCard';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { usePageMeta } from '../hooks/usePageMeta';
import { DEFAULT_EASE, FadeUp, RevealOnScroll } from '../components/animations';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const shouldReduceMotion = useReducedMotion();

  const project = PROJECTS.find((p) => p.slug === slug);

  // If project not found, render custom branded 404
  if (!project) {
    return (
      <div className="pt-32 pb-24 text-center px-5">
        <div className="max-w-md mx-auto p-8 rounded-2xl border border-[#333333] bg-[#1a1a1a] space-y-4">
          <span className="text-xs font-mono text-[#00DF5E] uppercase tracking-wider block">
            404 // PROJETO NÃO ENCONTRADO
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#F9F9F9]">
            Projeto não localizado
          </h1>
          <p className="text-sm text-[#F9F9F9]/70">
            O projeto com endereço <code className="text-[#00DF5E]">/projetos/{slug}</code> não existe ou foi movido.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/projetos"
              className="px-5 py-2.5 rounded-xl bg-[#00DF5E] text-[#171717] font-semibold text-xs inline-flex items-center justify-center gap-2 hover:bg-[#00DF5E]/90 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar aos projetos</span>
            </Link>
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl border border-[#333333] text-[#F9F9F9] text-xs hover:bg-[#222222] transition-colors"
            >
              Página inicial
            </Link>
          </div>
        </div>
      </div>
    );
  }

  usePageMeta(
    `Projeto ${project.title} — Ruan Pinheiro`,
    project.shortDescription
  );

  const relatedProjects = PROJECTS.filter((p) =>
    project.relatedSlugs?.includes(p.slug) || (p.category === project.category && p.slug !== project.slug)
  ).slice(0, 3);

  const getWhatsAppProjectInquiry = () => {
    const text = encodeURIComponent(`Olá, Ruan! Vi o case do projeto "${project.title}" no seu portfólio e gostaria de algo semelhante para o meu negócio.`);
    return `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Breadcrumb Context */}
        <Breadcrumb
          items={[
            { label: 'Projetos', href: '/projetos' },
            { label: project.title }
          ]}
        />

        {/* Back Link */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: DEFAULT_EASE }}
          className="mb-6"
        >
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#F9F9F9]/60 hover:text-[#00DF5E] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar para todos os projetos</span>
          </Link>
        </motion.div>

        {/* Project Hero Header: Cinematic Progressive Sequence */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          {/* 1. Category & Meta */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: DEFAULT_EASE }}
            className="flex flex-wrap items-center gap-3 mb-4"
          >
            {project.clientType && (
              <span className="text-xs font-mono text-[#F9F9F9]/50 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> {project.clientType}
              </span>
            )}
          </motion.div>

          {/* 2. Name of project */}
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: DEFAULT_EASE }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F9F9F9] tracking-tight leading-[1.08] mb-6"
          >
            {project.title}<span className="text-[#00DF5E]">.</span>
          </motion.h1>

          {/* 3. Description */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: DEFAULT_EASE }}
            className="text-lg sm:text-xl text-[#F9F9F9]/80 font-normal leading-relaxed"
          >
            {project.shortDescription}
          </motion.p>
        </div>

        {/* 4. Mockup Preview Area with subtle scale & opacity */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.28, ease: DEFAULT_EASE }}
          className={`p-8 sm:p-14 rounded-3xl bg-gradient-to-br ${project.mockupTheme.bgStyle} border border-[#333333] mb-16 relative overflow-hidden shadow-2xl`}
        >
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-2">
              {project.mockupTheme.tagline}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F9F9F9] tracking-tight mb-4">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#00DF5E] text-[#171717] font-semibold text-xs sm:text-sm inline-flex items-center gap-1.5 hover:bg-[#00DF5E]/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-[#00DF5E]/15"
                >
                  <span>Visitar site no ar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-8 translate-y-8">
            <Layers className="w-72 h-72 text-white" />
          </div>
        </motion.div>

        {/* Content Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Main Case Study Columns (Left) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <FadeUp delay={0.35}>
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] mb-3">
                  // VISÃO GERAL
                </h2>
                <p className="text-base sm:text-lg text-[#F9F9F9]/80 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </FadeUp>

            {/* Problem & Objective */}
            <RevealOnScroll>
              <div className="p-8 rounded-2xl border border-[#333333] bg-[#1a1a1a]">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/50 mb-3">
                  // O PROBLEMA & OBJETIVO
                </h3>
                <p className="text-base text-[#F9F9F9]/85 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </RevealOnScroll>

            {/* Technical Solution */}
            <RevealOnScroll>
              <div className="p-8 rounded-2xl border border-[#00DF5E]/40 bg-[#1a1a1a]">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] mb-3">
                  // SOLUÇÃO DESENVOLVIDA
                </h3>
                <p className="text-base text-[#F9F9F9]/85 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </RevealOnScroll>

            {/* Key Features */}
            <RevealOnScroll>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] mb-4">
                  // CARACTERÍSTICAS PRINCIPAIS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-[#333333] bg-[#1e1e1e] flex items-start gap-3 hover:border-[#00DF5E]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#00DF5E] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#F9F9F9]/90 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

          </div>

          {/* Sidebar Meta Info (Right) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.36, ease: DEFAULT_EASE }}
            className="lg:col-span-4 space-y-6 sticky top-28"
          >
            <div className="p-7 rounded-2xl border border-[#333333] bg-[#1a1a1a]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/50 mb-4">
                Ficha Técnica do Projeto
              </h3>

              <div className="space-y-4 text-xs sm:text-sm pb-6 border-b border-[#333333]">
                <div>
                  <span className="text-[11px] font-mono text-[#F9F9F9]/40 block uppercase">Cliente / Nicho</span>
                  <span className="text-[#F9F9F9] font-medium">{project.clientType || 'Sob Medida'}</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#F9F9F9]/40 block uppercase">Ano de Execução</span>
                  <span className="text-[#F9F9F9] font-medium">{project.year || '2026'}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="py-6 border-b border-[#333333]">
                <span className="text-[11px] font-mono text-[#F9F9F9]/40 block uppercase mb-3">
                  Tecnologias Utilizadas
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#222222] border border-[#333333] text-xs font-mono text-[#F9F9F9]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#00DF5E] text-[#171717] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#00DF5E]/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 active:scale-[0.98] shadow-md shadow-[#00DF5E]/10"
                  >
                    <span>Visitar site no ar</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}

                <a
                  href={getWhatsAppProjectInquiry()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-[#333333] bg-[#222222] hover:bg-[#282828] text-[#F9F9F9] text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#00DF5E] shrink-0" />
                  <span>Quero um projeto semelhante</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00DF5E]" />
                </a>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl border border-[#333333] bg-[#161616]">
              <span className="text-xs font-mono text-[#00DF5E] block mb-1">
                Dúvidas técnicas?
              </span>
              <p className="text-xs text-[#F9F9F9]/70 leading-relaxed mb-3">
                Converse diretamente com Ruan Pinheiro para entender a viabilidade da sua ideia.
              </p>
              <Link
                to="/contato"
                className="text-xs font-semibold text-[#00DF5E] hover:underline"
              >
                Ir para o formulário de contato →
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Related Projects with Scroll Reveal */}
        {relatedProjects.length > 0 && (
          <RevealOnScroll className="pt-16 border-t border-[#333333]">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-1">
                  CONTINUE NAVEGANDO
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F9F9F9]">
                  Projetos Relacionados
                </h3>
              </div>
              <Link
                to="/projetos"
                className="text-xs sm:text-sm font-semibold text-[#00DF5E] hover:underline"
              >
                Ver todos os projetos →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </RevealOnScroll>
        )}

      </div>
    </div>
  );
};

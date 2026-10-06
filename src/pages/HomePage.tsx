import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, HelpCircle } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { InteractiveAccordion } from '../components/ui/interactive-accordion';
import { SERVICES, PROJECTS, FAQS, PERSONAL_INFO } from '../data/portfolioData';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
} from '../components/animations';

interface HomePageProps {
  onOpenChat: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenChat }) => {
  usePageMeta(
    'Ruan Pinheiro — Desenvolvedor Web',
    'Portfólio profissional de Ruan Pinheiro. Desenvolvimento de sites institucionais, landing pages de alta conversão, aplicações web modernas e automações com foco em design, performance e resultados.',
  );

  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <div className="pt-16 sm:pt-[4.5rem]">
      {/* 01: Hero Component (occupies first viewport seamlessly with Header) */}
      <Hero />

      {/* 02: Breve Apresentação (Teaser Sobre) with RevealOnScroll */}
      <section className="py-20 sm:py-28 border-b border-[#333333]/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-3">
                  // PERFIL & ABORDAGEM
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F9F9F9] tracking-tight leading-tight mb-4">
                  Interfaces que combinam rigor técnico e impacto visual
                  <span className="text-[#00DF5E]">.</span>
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="text-base sm:text-lg text-[#F9F9F9]/80 leading-relaxed">
                  Sou desenvolvedor web focado na criação de experiências
                  digitais modernas, funcionais e pensadas para cada projeto.
                  Meu trabalho une desenvolvimento, interface e experiência do
                  usuário para transformar ideias em produtos digitais que
                  realmente façam sentido.
                </p>
                <p className="text-sm sm:text-base text-[#F9F9F9]/60 leading-relaxed">
                  Cada linha de código é escrita com foco em Core Web Vitals,
                  sem inchaço de dependências, garantindo carregamento
                  instantâneo e excelente ranqueamento no Google.
                </p>
                <div className="pt-2">
                  <Link
                    to="/sobre"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00DF5E] hover:underline underline-offset-4"
                  >
                    <span>
                      Conhecer minha trajetória e princípios de trabalho
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 03: Projetos em Destaque */}
      <section className="py-20 sm:py-28 border-b border-[#333333]/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-2">
                  // PROJETOS SELECIONADOS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F9F9F9] tracking-tight">
                  Trabalhos com foco em resultado
                  <span className="text-[#00DF5E]">.</span>
                </h2>
              </div>

              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00DF5E] hover:underline underline-offset-4"
              >
                <span>Ver todos os projetos ({PROJECTS.length})</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>

          {/* Grid de 2 projetos destacados with StaggerContainer */}
          <StaggerContainer
            viewport
            staggerDelay={0.08}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {featuredProjects.map((project) => (
              <StaggerItem key={project.slug} className="w-full h-full">
                <ProjectCard project={project} className="w-full" />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <RevealOnScroll className="text-center">
            <Link
              to="/projetos"
              className="px-6 py-3.5 rounded-xl border border-[#333333] bg-[#1e1e1e] hover:bg-[#252525] text-sm font-medium text-[#F9F9F9] inline-flex items-center gap-2 hover:border-[#00DF5E]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Explorar catálogo completo de projetos</span>
              <ArrowRight className="w-4 h-4 text-[#00DF5E]" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* 04: Resumo dos Serviços with Stagger */}
      <section className="py-20 sm:py-28 border-b border-[#333333]/50 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-2">
                  // O QUE DESENVOLVO
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F9F9F9] tracking-tight">
                  Serviços sob medida para o seu momento
                  <span className="text-[#00DF5E]">.</span>
                </h2>
              </div>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00DF5E] hover:underline underline-offset-4"
              >
                <span>Ver detalhes e entregáveis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>

          <StaggerContainer
            viewport
            staggerDelay={0.07}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SERVICES.map((serv, index) => (
              <StaggerItem key={serv.id}>
                <div className="p-6 rounded-2xl border border-[#333333] bg-[#1a1a1a] hover:border-[#00DF5E]/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg font-bold text-[#F9F9F9] mb-2">
                      {serv.title}
                    </h3>
                    <p className="text-xs text-[#F9F9F9]/70 leading-relaxed mb-4">
                      {serv.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#333333]">
                    <Link
                      to="/servicos"
                      className="text-xs text-[#00DF5E] font-medium inline-flex items-center gap-1 hover:underline"
                    >
                      <span>Conferir escopo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 05: FAQ - Perguntas Frequentes (Interactive Accordion) */}
      <section className="py-20 sm:py-28 border-b border-[#333333]/50">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <RevealOnScroll className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00DF5E] uppercase tracking-wider mb-3">
              <HelpCircle className="w-4 h-4" /> DÚVIDAS FREQUENTES
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#F9F9F9] tracking-tight leading-tight">
              Perguntas comuns sobre o desenvolvimento
              <span className="text-[#00DF5E]">.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <InteractiveAccordion items={FAQS} defaultOpenId="01" />
          </RevealOnScroll>
        </div>
      </section>

      {/* 06: CTA para Contato with RevealOnScroll */}
      <section className="py-24 sm:py-32 bg-[#151515] relative overflow-hidden text-center">
        <RevealOnScroll className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-4">
            VAMOS CONVERSAR?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F9F9F9] tracking-tight mb-6">
            Tem um projeto em mente<span className="text-[#00DF5E]">?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F9F9F9]/70 max-w-xl mx-auto leading-relaxed mb-10">
            Entre em contato para conversarmos sobre como transformar sua ideia
            em uma experiência digital de alto padrão.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contato"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00DF5E] text-[#171717] font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:bg-[#00DF5E]/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#00DF5E]/15"
            >
              <span>Ir para a página de contato</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl border border-[#333333] bg-[#202020] hover:bg-[#252525] text-[#F9F9F9] font-medium text-sm sm:text-base inline-flex items-center justify-center gap-2.5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#00DF5E] shrink-0" />
              <span>Falar diretamente no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#00DF5E]" />
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};

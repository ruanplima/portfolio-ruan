import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Mail,
  Instagram,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Clock,
  ChevronDown,
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePageMeta } from '../hooks/usePageMeta';
import { FadeUp, DEFAULT_EASE } from '../components/animations';

const PROJECT_TYPE_OPTIONS = [
  { value: 'Landing Page', label: 'Landing Page' },
  { value: 'Site Institucional', label: 'Site Institucional' },
  { value: 'Aplicação Web', label: 'Aplicação Web / Sistema' },
  { value: 'Automação / Integração', label: 'Automação de Processos' },
  { value: 'Outro', label: 'Outra necessidade' },
];

export const ContactPage: React.FC = () => {
  usePageMeta(
    'Contato — Ruan Pinheiro',
    'Entre em contato com Ruan Pinheiro para falar sobre seu projeto web. WhatsApp, E-mail comercial e formulário de alinhamento de escopo.',
  );

  const shouldReduceMotion = useReducedMotion();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [projectTypeOpen, setProjectTypeOpen] = useState(false);
  const [activeProjectType, setActiveProjectType] = useState('Landing Page');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: 'Landing Page',
    message: '',
  });

  const handleProjectTypeKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    const selectedIndex = PROJECT_TYPE_OPTIONS.findIndex(
      (option) => option.value === formData.projectType,
    );
    const activeIndex = PROJECT_TYPE_OPTIONS.findIndex(
      (option) => option.value === activeProjectType,
    );

    if (event.key === 'Escape' && projectTypeOpen) {
      event.preventDefault();
      setProjectTypeOpen(false);
      return;
    }

    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const currentIndex = projectTypeOpen ? activeIndex : selectedIndex;
      const nextIndex =
        event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? PROJECT_TYPE_OPTIONS.length - 1
            : (currentIndex +
                (event.key === 'ArrowDown' ? 1 : -1) +
                PROJECT_TYPE_OPTIONS.length) %
              PROJECT_TYPE_OPTIONS.length;
      setActiveProjectType(PROJECT_TYPE_OPTIONS[nextIndex].value);
      setProjectTypeOpen(true);
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (projectTypeOpen) {
        setFormData({ ...formData, projectType: activeProjectType });
        setProjectTypeOpen(false);
      } else {
        setActiveProjectType(formData.projectType);
        setProjectTypeOpen(true);
      }
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || isSubmitting)
      return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.error || 'Não foi possível enviar sua mensagem.',
        );
      }

      setFormSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Não foi possível enviar sua mensagem. Tente novamente.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Contato' }]} />

        {/* Header with progressive entrance */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: DEFAULT_EASE }}
            className="text-xs font-mono uppercase tracking-wider text-[#00DF5E] block mb-3"
          >
            CANAIS DIRETOS // CONTATO
          </motion.span>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: DEFAULT_EASE }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F9F9F9] tracking-tight leading-[1.08] mb-6"
          >
            Vamos conversar sobre o seu próximo projeto digital
            <span className="text-[#00DF5E]">?</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: DEFAULT_EASE }}
            className="text-base sm:text-xl text-[#F9F9F9]/75 font-normal leading-relaxed"
          >
            Se você tem uma demanda em mente, deseja tirar dúvidas sobre escopo
            e prazos, ou quer conhecer melhor meu trabalho técnico, fique à
            vontade para entrar em contato.
          </motion.p>
        </div>

        {/* Contact Grid: Direct Channels (Left) & Minimal Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">
          {/* Left Column: Direct channels with FadeUp */}
          <FadeUp delay={0.2} className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card (Primary) */}
            <a
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-7 rounded-2xl border border-[#00DF5E]/40 bg-[#1b1b1b] hover:border-[#00DF5E] hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center justify-between gap-3 group shadow-lg shadow-[#00DF5E]/5"
            >
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-[#00DF5E]/10 border border-[#00DF5E]/30 flex items-center justify-center text-[#00DF5E]">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs font-mono text-[#00DF5E] block uppercase tracking-wider">
                    Canal Principal • Resposta Rápida
                  </span>
                  <span className="text-base sm:text-xl font-bold text-[#F9F9F9] group-hover:text-[#00DF5E] transition-colors block">
                    WhatsApp
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 shrink-0 text-[#F9F9F9]/60 group-hover:text-[#00DF5E] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Email Card with 1-click copy */}
            <div className="p-4 sm:p-6 rounded-2xl border border-[#333333] bg-[#1a1a1a] flex items-center justify-between gap-2">
              <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-[#222222] border border-[#333333] flex items-center justify-center text-[#F9F9F9]">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs font-mono text-[#F9F9F9]/50 block uppercase tracking-wider">
                    E-mail Comercial
                  </span>
                  <span className="block text-[11px] sm:text-sm font-semibold text-[#F9F9F9] break-all leading-tight">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="shrink-0 p-2 rounded-lg border border-[#333333] bg-[#222222] text-[#F9F9F9]/80 hover:text-[#00DF5E] hover:border-[#00DF5E]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all sm:p-2.5"
                title="Copiar e-mail"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-[#00DF5E]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Instagram Card */}
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-7 rounded-2xl border border-[#333333] bg-[#1a1a1a] hover:border-[#00DF5E]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center justify-between gap-3 group"
            >
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-[#222222] border border-[#333333] flex items-center justify-center text-[#F9F9F9]">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs font-mono text-[#F9F9F9]/50 block uppercase tracking-wider">
                    Rede Social • Perfil Oficial
                  </span>
                  <span className="text-base font-semibold text-[#F9F9F9] group-hover:text-[#00DF5E] transition-colors block">
                    Instagram
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 shrink-0 text-[#F9F9F9]/40 group-hover:text-[#00DF5E] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Quick response badge */}
            <div className="p-3 sm:p-4 rounded-xl border border-[#333333] bg-[#171717] flex items-center gap-2.5 text-[11px] sm:text-xs text-[#F9F9F9]/60">
              <Clock className="w-4 h-4 shrink-0 text-[#00DF5E]" />
              <span>
                Tempo médio de resposta: geralmente em menos de 2 horas úteis.
              </span>
            </div>
          </FadeUp>

          {/* Right Column: Clean, Frictionless Message Form with FadeUp */}
          <FadeUp
            delay={0.28}
            className="lg:col-span-7 p-5 sm:p-10 rounded-2xl border border-[#333333] bg-[#1a1a1a]"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#F9F9F9] mb-2">
              Envie uma mensagem direta
            </h3>
            <p className="text-xs sm:text-sm text-[#F9F9F9]/60 mb-6">
              Preencha os campos abaixo para iniciar uma conversa sem
              complicação.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-[#222222] border border-[#00DF5E]/40 text-center space-y-3 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-[#00DF5E]/20 text-[#00DF5E] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#F9F9F9]">
                  Mensagem encaminhada!
                </h4>
                <p className="text-xs sm:text-sm text-[#F9F9F9]/70">
                  Sua mensagem foi enviada para o e-mail comercial. Em breve,
                  entraremos em contato pelo canal informado.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setSubmitError(null);
                  }}
                  className="text-xs text-[#00DF5E] underline underline-offset-4 pt-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/70 mb-2">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-[#333333] text-sm text-[#F9F9F9] placeholder-[#F9F9F9]/30 focus:border-[#00DF5E] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/70 mb-2">
                      WhatsApp ou E-mail *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: (28) 99940-7496 ou seu@email.com"
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-[#333333] text-sm text-[#F9F9F9] placeholder-[#F9F9F9]/30 focus:border-[#00DF5E] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    id="project-type-label"
                    className="block text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/70 mb-2"
                  >
                    Tipo de Projeto
                  </label>
                  <div
                    className="relative"
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setProjectTypeOpen(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      role="combobox"
                      aria-labelledby="project-type-label"
                      aria-haspopup="listbox"
                      aria-expanded={projectTypeOpen}
                      aria-controls="project-type-options"
                      aria-activedescendant={
                        projectTypeOpen
                          ? `project-type-option-${activeProjectType}`
                          : undefined
                      }
                      onClick={() => {
                        setActiveProjectType(formData.projectType);
                        setProjectTypeOpen((open) => !open);
                      }}
                      onKeyDown={handleProjectTypeKeyDown}
                      className="flex w-full items-center justify-between rounded-xl border border-[#333333] bg-[#222222] px-4 py-3 text-left text-sm text-[#F9F9F9] transition-colors hover:border-[#00DF5E]/50 focus:border-[#00DF5E] focus:outline-none focus:ring-2 focus:ring-[#00DF5E]/15"
                    >
                      <span>
                        {
                          PROJECT_TYPE_OPTIONS.find(
                            (option) => option.value === formData.projectType,
                          )?.label
                        }
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-[#00DF5E] transition-transform ${projectTypeOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>

                    {projectTypeOpen && (
                      <div
                        id="project-type-options"
                        role="listbox"
                        aria-labelledby="project-type-label"
                        className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-[#333333] bg-[#1b1b1b] p-1.5 shadow-xl shadow-black/40"
                      >
                        {PROJECT_TYPE_OPTIONS.map((option) => {
                          const isActive = activeProjectType === option.value;
                          const isSelected =
                            formData.projectType === option.value;

                          return (
                            <div
                              key={option.value}
                              id={`project-type-option-${option.value}`}
                              role="option"
                              aria-selected={isSelected}
                              onMouseDown={(event) => event.preventDefault()}
                              onMouseEnter={() =>
                                setActiveProjectType(option.value)
                              }
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  projectType: option.value,
                                });
                                setActiveProjectType(option.value);
                                setProjectTypeOpen(false);
                              }}
                              className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                                isActive
                                  ? 'bg-[#00DF5E]/10 text-[#00DF5E]'
                                  : 'text-[#F9F9F9]/80 hover:bg-[#252525] hover:text-[#F9F9F9]'
                              }`}
                            >
                              <span>{option.label}</span>
                              {isSelected && (
                                <Check
                                  className="h-4 w-4 text-[#00DF5E]"
                                  aria-hidden="true"
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/70 mb-2">
                    Como posso ajudar? (opcional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conte brevemente sobre o seu objetivo, ideias ou prazos pretendidos..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-[#333333] text-sm text-[#F9F9F9] placeholder-[#F9F9F9]/30 focus:border-[#00DF5E] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {submitError && (
                  <p
                    role="alert"
                    className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300"
                  >
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#00DF5E] text-[#171717] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#00DF5E]/90 hover:-translate-y-0.5 active:translate-y-0 transition-all active:scale-[0.98] shadow-lg shadow-[#00DF5E]/10 disabled:cursor-wait disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? 'Enviando...'
                      : 'Enviar mensagem por e-mail'}
                  </span>
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Globe,
  PanelsTopLeft,
  Code2,
  Workflow,
  ArrowUpRight,
  Check,
  X,
  Clock,
} from 'lucide-react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { Service } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#00DF5E]" />;
      case 'PanelsTopLeft':
        return <PanelsTopLeft className="w-6 h-6 text-[#00DF5E]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#00DF5E]" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-[#00DF5E]" />;
      default:
        return <Globe className="w-6 h-6 text-[#00DF5E]" />;
    }
  };

  const generateWhatsAppUrl = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Olá, Ruan! Vi o seu serviço de "${serviceTitle}" no seu portfólio e gostaria de entender como podemos aplicá-lo ao meu projeto.`,
    );
    return `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section
      id="servicos"
      className="py-24 sm:py-32 border-b border-[#333333]/50 relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#333333] bg-[#1c1c1c] text-xs font-mono uppercase tracking-wider text-[#00DF5E] mb-4">
              02 // SERVIÇOS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F9F9F9] tracking-tight">
              Soluções sob medida para o seu momento digital
              <span className="text-[#00DF5E]">.</span>
            </h2>
          </div>
          <p className="text-base text-[#F9F9F9]/60 max-w-md">
            Do design institucional a aplicações interativas e automações de
            processos técnicos.
          </p>
        </div>

        {/* Services Grid (Clean, structured, editorial) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group p-5 sm:p-8 rounded-xl border border-[#333333] bg-[#1a1a1a] hover:border-[#00DF5E]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-lg bg-[#222222] border border-[#333333] group-hover:border-[#00DF5E]/40 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-[#F9F9F9]/40 tracking-wider">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-[#F9F9F9] mb-2 group-hover:text-[#00DF5E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs uppercase tracking-wider font-mono text-[#00DF5E] mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#F9F9F9]/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables snippet */}
                <ul className="space-y-2 mb-8 pt-4 border-t border-[#333333]/60">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[#F9F9F9]/80"
                    >
                      <Check className="w-4 h-4 text-[#00DF5E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                  {service.deliverables.length > 3 && (
                    <li className="text-xs text-[#00DF5E] font-medium pt-1">
                      + {service.deliverables.length - 3} outros itens inclusos
                    </li>
                  )}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[#333333] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs sm:text-sm font-medium text-[#F9F9F9]/80 hover:text-[#00DF5E] transition-colors"
                >
                  Ver escopo detalhado
                </button>

                <a
                  href={generateWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-medium bg-[#222222] border border-[#333333] text-[#F9F9F9] hover:bg-[#00DF5E] hover:text-[#171717] hover:border-[#00DF5E] transition-all"
                >
                  <span>Solicitar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal for Selected Service */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-xl rounded-2xl bg-[#1a1a1a] border border-[#333333] p-6 sm:p-8 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              type="button"
              className="absolute top-5 right-5 p-2 rounded-lg border border-[#333333] text-[#F9F9F9]/70 hover:text-[#F9F9F9] hover:bg-[#252525] transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-[#222222] border border-[#333333]">
                {getIcon(selectedService.icon)}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F9F9F9]">
                  {selectedService.title}
                </h3>
                <span className="text-xs font-mono text-[#00DF5E]">
                  {selectedService.subtitle}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F9F9F9]/70 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Estimated Timeline */}
            <div className="p-3 rounded-lg border border-[#333333] bg-[#202020] flex items-center gap-2 text-xs font-medium text-[#F9F9F9] mb-6">
              <Clock className="w-4 h-4 text-[#00DF5E]" />
              <span>
                Prazo estimado médio:{' '}
                <strong className="text-[#00DF5E]">
                  {selectedService.estimatedTimeline}
                </strong>
              </span>
            </div>

            {/* Deliverables List */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/60 mb-3">
                O que está incluso nesta entrega:
              </h4>
              <ul className="space-y-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-[#F9F9F9]/90"
                  >
                    <Check className="w-4 h-4 text-[#00DF5E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#333333]">
              <a
                href={generateWhatsAppUrl(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded bg-[#00DF5E] text-[#171717] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#00DF5E]/90 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#171717]" />
                <span>Solicitar proposta via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setSelectedService(null)}
                type="button"
                className="py-3 px-5 rounded border border-[#333333] text-[#F9F9F9] text-sm hover:bg-[#252525] transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

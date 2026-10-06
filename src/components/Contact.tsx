import React, { useState } from 'react';
import { Mail, Instagram, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: 'Landing Page',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    // Send formatted WhatsApp message
    const text = `Olá, Ruan! Meu nome é ${formData.name} (${formData.contact}).
Gostaria de falar sobre um projeto de: ${formData.projectType}.
Mensagem: ${formData.message || 'Sem observações adicionais.'}`;

    const url = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 sm:py-32 border-b border-[#333333]/50 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#333333] bg-[#1c1c1c] text-xs font-mono uppercase tracking-wider text-[#00DF5E] mb-4">
            06 // CONTATO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F9F9F9] tracking-tight mb-4">
            Vamos conversar<span className="text-[#00DF5E]">?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F9F9F9]/70 leading-relaxed">
            Se você tem um projeto, uma ideia ou simplesmente quer entender melhor como posso ajudar, fique à vontade para entrar em contato.
          </p>
        </div>

        {/* Contact Grid: Direct Channels (Left) & Minimal Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card (Primary) */}
            <a
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl border border-[#00DF5E]/40 bg-[#1b1b1b] hover:border-[#00DF5E] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00DF5E]/10 border border-[#00DF5E]/30 flex items-center justify-center text-[#00DF5E]">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#00DF5E] block uppercase tracking-wider">
                    Canal Principal • Resposta Rápida
                  </span>
                  <span className="text-lg font-bold text-[#F9F9F9] group-hover:text-[#00DF5E] transition-colors block">
                    WhatsApp
                  </span>
                  <span className="text-xs text-[#F9F9F9]/60 font-mono block mt-0.5">
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#F9F9F9]/60 group-hover:text-[#00DF5E] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Email Card with 1-click copy */}
            <div className="p-6 rounded-2xl border border-[#333333] bg-[#1a1a1a] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#222222] border border-[#333333] flex items-center justify-center text-[#F9F9F9]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#F9F9F9]/50 block uppercase tracking-wider">
                    E-mail Comercial
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#F9F9F9] break-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg border border-[#333333] bg-[#222222] text-[#F9F9F9]/80 hover:text-[#00DF5E] hover:border-[#00DF5E]/50 transition-colors"
                title="Copiar e-mail"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#00DF5E]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Instagram Card */}
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl border border-[#333333] bg-[#1a1a1a] hover:border-[#00DF5E]/50 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#222222] border border-[#333333] flex items-center justify-center text-[#F9F9F9]">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#F9F9F9]/50 block uppercase tracking-wider">
                    Rede Social • Perfil Oficial
                  </span>
                  <span className="text-base font-semibold text-[#F9F9F9] group-hover:text-[#00DF5E] transition-colors block">
                    {PERSONAL_INFO.instagramHandle}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#F9F9F9]/40 group-hover:text-[#00DF5E] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

          </div>

          {/* Right Column: Clean, Frictionless Message Form */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl border border-[#333333] bg-[#1a1a1a]">
            <h3 className="text-xl font-bold text-[#F9F9F9] mb-2">
              Envie uma mensagem rápida
            </h3>
            <p className="text-xs sm:text-sm text-[#F9F9F9]/60 mb-6">
              Preencha os campos abaixo para iniciar uma conversa diretamente comigo.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-[#222222] border border-[#00DF5E]/40 text-center space-y-3 animate-in fade-in duration-200">
                <div className="w-10 h-10 rounded-full bg-[#00DF5E]/20 text-[#00DF5E] flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#F9F9F9]">
                  Mensagem encaminhada!
                </h4>
                <p className="text-xs text-[#F9F9F9]/70">
                  Uma janela do WhatsApp foi aberta com seus dados preenchidos para darmos continuidade.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-[#00DF5E] underline underline-offset-4"
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
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-[#333333] text-sm text-[#F9F9F9] placeholder-[#F9F9F9]/30 focus:border-[#00DF5E] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/70 mb-2">
                    Tipo de Projeto
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-[#333333] text-sm text-[#F9F9F9] focus:border-[#00DF5E] focus:outline-none transition-colors"
                  >
                    <option value="Landing Page">Landing Page de Alta Conversão</option>
                    <option value="Site Institucional">Site Institucional</option>
                    <option value="Aplicação Web">Aplicação Web / Sistema</option>
                    <option value="Automação / Integração">Automação de Processos / APIs</option>
                    <option value="Outro">Outra necessidade</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/70 mb-2">
                    Como posso ajudar? (opcional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conte brevemente sobre o seu objetivo, ideias ou prazos..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-[#333333] text-sm text-[#F9F9F9] placeholder-[#F9F9F9]/30 focus:border-[#00DF5E] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#00DF5E] text-[#171717] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#00DF5E]/90 transition-all active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#171717]" />
                  <span>Enviar mensagem via WhatsApp</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

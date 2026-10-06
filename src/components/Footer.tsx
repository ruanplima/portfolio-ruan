import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Instagram, Mail } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerNavLinks = [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Projetos', href: '/projetos' },
    { label: 'Processo', href: '/processo' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <footer className="bg-[#171717] border-t border-[#333333] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#333333]/60 items-start">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-7 h-7 rounded border border-[#00DF5E] bg-[#222222] flex items-center justify-center font-bold text-xs text-[#F9F9F9]">
                RP<span className="text-[#00DF5E]">.</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#F9F9F9]">
                Ruan Pinheiro
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#F9F9F9]/60 max-w-sm leading-relaxed">
              Desenvolvedor Web • Construção de interfaces modernas, landing pages e aplicações com foco em resultado e alta performance.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/40 block mb-3">
              Navegação
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {footerNavLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-[#F9F9F9]/70 hover:text-[#00DF5E] transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F9F9F9]/40 block">
              Conexões
            </span>

            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[#333333] bg-[#1e1e1e] text-[#F9F9F9]/80 hover:text-[#00DF5E] hover:border-[#00DF5E]/50 transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[#333333] bg-[#1e1e1e] text-[#F9F9F9]/80 hover:text-[#00DF5E] hover:border-[#00DF5E]/50 transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg border border-[#333333] bg-[#1e1e1e] text-[#F9F9F9]/80 hover:text-[#00DF5E] hover:border-[#00DF5E]/50 transition-colors"
                aria-label="E-mail"
                title="E-mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="group inline-flex items-center gap-2 text-xs font-mono text-[#F9F9F9]/60 hover:text-[#00DF5E] transition-colors focus:outline-none pt-2"
            >
              <span>Voltar ao topo</span>
              <div className="p-1 rounded border border-[#333333] bg-[#202020] group-hover:border-[#00DF5E] transition-colors">
                <ArrowUp className="w-3 h-3" />
              </div>
            </button>
          </div>

        </div>

        {/* Sub-footer Copyright & Specs */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F9F9F9]/40">
          <div>
            © {currentYear} Ruan Pinheiro. Todos os direitos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
};

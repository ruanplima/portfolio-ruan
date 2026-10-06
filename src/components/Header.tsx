import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenChat: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Projetos', href: '/projetos' },
    { label: 'Processo', href: '/processo' },
    { label: 'Contato', href: '/contato' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-16 sm:h-[4.5rem] flex items-center transition-all duration-300 ${
          isScrolled
            ? 'bg-[#171717]/90 backdrop-blur-md border-b border-[#333333]/80 shadow-lg shadow-black/20'
            : 'bg-[#171717]/40 backdrop-blur-sm border-b border-[#333333]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-[#F9F9F9] focus:outline-none"
            aria-label="Ruan Pinheiro — Início"
          >
            <div className="w-8 h-8 rounded border border-[#333333] bg-[#222222] flex items-center justify-center font-bold text-xs tracking-wider text-[#F9F9F9] group-hover:border-[#00DF5E] transition-colors">
              RP<span className="text-[#00DF5E]">.</span>
            </div>
            <span className="font-semibold tracking-tight text-base sm:text-lg">
              Ruan Pinheiro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-wider">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={`relative py-1.5 transition-colors duration-150 ${
                    active
                      ? 'text-[#00DF5E] font-semibold'
                      : 'text-[#F9F9F9]/70 hover:text-[#F9F9F9]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00DF5E] rounded-full" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Primary CTA */}
            <Link
              to="/contato"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs sm:text-sm font-semibold bg-[#00DF5E] text-[#171717] hover:bg-[#00DF5E]/90 transition-all duration-200 active:scale-95"
            >
              <span>Vamos conversar</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded border border-[#333333] text-[#F9F9F9] hover:bg-[#222222] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#171717] flex flex-col justify-between p-6 lg:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#333333]">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded border border-[#00DF5E] bg-[#222222] flex items-center justify-center font-bold text-xs text-[#F9F9F9]">
                  RP<span className="text-[#00DF5E]">.</span>
                </div>
                <span className="font-semibold text-lg text-[#F9F9F9]">Ruan Pinheiro</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                type="button"
                className="p-2 rounded border border-[#333333] text-[#F9F9F9]"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-5">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl sm:text-2xl font-medium transition-colors flex items-center justify-between ${
                      active ? 'text-[#00DF5E]' : 'text-[#F9F9F9]/80 hover:text-[#F9F9F9]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#00DF5E]" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#333333] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              type="button"
              className="w-full py-3 rounded border border-[#333333] bg-[#222222] text-[#F9F9F9] font-medium text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#00DF5E]" />
              <span>Converse com o Assistente</span>
            </button>
            <Link
              to="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded bg-[#00DF5E] text-[#171717] font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Vamos conversar</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

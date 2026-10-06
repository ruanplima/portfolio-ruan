import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  ArrowUpRight,
  RotateCcw,
  AlertCircle,
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface AssistantChatProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const AssistantChat: React.FC<AssistantChatProps> = ({
  isOpen,
  onClose,
  onOpen,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Olá! Sou o assistente virtual do Ruan. Como posso ajudar você hoje? Fique à vontade para perguntar sobre serviços, prazos, ou solicitar um direcionamento para o seu projeto.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickQuestions = [
    'Quais serviços o Ruan desenvolve?',
    'Quanto tempo leva para criar uma Landing Page?',
    'Qual a stack e ferramentas utilizadas?',
    'Quero solicitar um orçamento para meu projeto',
  ];
  const hasUserMessage = messages.some((message) => message.role === 'user');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  // Scroll lock and Escape key handling when chat is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    setErrorMsg(null);
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Send conversation history to the backend and its Gemini Flash fallbacks.
      const payload = {
        messages: newMessages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      };

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(
          data?.error ||
            `A API do assistente respondeu com HTTP ${res.status}.`,
        );
      }

      const assistantReply =
        data?.reply ||
        'Desculpe, não consegui gerar uma resposta agora. Por favor, envie uma mensagem pelo WhatsApp!';

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: assistantReply,
        },
      ]);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(
        'O serviço está temporariamente indisponível. Tente novamente em instantes ou fale diretamente com o Ruan pelo WhatsApp.',
      );
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-fallback-${Date.now()}`,
          role: 'assistant',
          content:
            'Nossa API está com alta demanda neste momento. Tente novamente em alguns minutos ou use o botão abaixo para falar com o Ruan pelo WhatsApp.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content:
          'Conversa reiniciada. Como posso ajudar com as demandas do seu projeto?',
      },
    ]);
    setErrorMsg(null);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={onOpen}
          type="button"
          aria-label="Abrir assistente virtual de Ruan Pinheiro"
          className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-40 h-11 w-11 p-0 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:px-4 sm:py-3 rounded-full bg-[#1b1b1b] border border-[#333333] hover:border-[#00DF5E] shadow-2xl flex items-center justify-center gap-2.5 text-[#F9F9F9] transition-all hover:scale-105 active:scale-95 group"
        >
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#00DF5E] opacity-75" />
            <div className="w-8 h-8 rounded-full bg-[#242424] border border-[#333333] flex items-center justify-center text-[#00DF5E]">
              <Bot className="w-4 h-4" />
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-bold text-[#F9F9F9] flex items-center gap-1">
              Ru.AI
              <span className="w-1.5 h-1.5 rounded-full bg-[#00DF5E]" />
            </span>
            <span className="text-[10px] text-[#F9F9F9]/60 font-mono">
              Assistente de IA
            </span>
          </div>
        </button>
      )}

      {/* Floating Chat Window & Backdrop */}
      {isOpen && (
        <>
          {/* Full-viewport Backdrop: covers entire viewport, intercepts all pointer/touch events */}
          <div
            className="fixed inset-0 z-60 w-screen h-dvh bg-black/60 backdrop-blur-[2px] transition-opacity duration-200"
            aria-hidden="true"
            onClick={onClose}
            onTouchMove={(e) => {
              // Prevent background touch scrolling on iOS Safari & mobile devices
              e.preventDefault();
            }}
            style={{ touchAction: 'none' }}
          />

          {/* Floating Chat Window */}
          <div
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[70] w-[calc(100vw-32px)] sm:w-[420px] h-[580px] max-h-[calc(100dvh-2rem)] sm:max-h-[85vh] rounded-2xl bg-[#181818] border border-[#333333] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Assistente Virtual Ru.AI"
          >
            {/* Header */}
            <div className="px-5 py-3.5 bg-[#202020] border-b border-[#333333] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#171717] border border-[#00DF5E]/40 flex items-center justify-center text-[#00DF5E]">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F9F9F9] flex items-center gap-1.5">
                    Ru.AI
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  className="p-1.5 rounded-lg text-[#F9F9F9]/60 hover:text-[#F9F9F9] hover:bg-[#282828] transition-colors"
                  title="Reiniciar conversa"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-[#F9F9F9]/60 hover:text-[#F9F9F9] hover:bg-[#282828] transition-colors"
                  title="Fechar chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scrollable Thread */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm bg-[#161616] overscroll-contain">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.role === 'assistant' && (
                    <div className="w-6 h-6 rounded bg-[#222222] border border-[#333333] flex items-center justify-center text-[#00DF5E] shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3.5 rounded-xl leading-relaxed whitespace-pre-wrap ${
                      m.role === 'user'
                        ? 'bg-[#00DF5E] text-[#171717] font-medium rounded-tr-none'
                        : 'bg-[#202020] border border-[#333333] text-[#F9F9F9] rounded-tl-none shadow-sm'
                    }`}
                  >
                    {m.content}
                  </div>

                  {m.role === 'user' && (
                    <div className="w-6 h-6 rounded bg-[#00DF5E] text-[#171717] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                      U
                    </div>
                  )}
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex gap-2.5 items-center text-xs text-[#F9F9F9]/60">
                  <div className="w-6 h-6 rounded bg-[#222222] border border-[#333333] flex items-center justify-center text-[#00DF5E] shrink-0">
                    <Bot className="w-3.5 h-3.5 animate-pulse" />
                  </div>
                  <div className="p-3 rounded-xl bg-[#202020] border border-[#333333] flex items-center gap-1.5 text-xs">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#00DF5E] animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#00DF5E] animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#00DF5E] animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips (when few messages) */}
            {!hasUserMessage && !isLoading && (
              <div className="p-3 bg-[#191919] border-t border-[#333333]/70 overflow-x-auto">
                <span className="text-[10px] font-mono text-[#F9F9F9]/40 block mb-1.5 uppercase">
                  Perguntas Frequentes
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSend(q)}
                      className="text-[11px] px-2.5 py-1 rounded bg-[#222222] hover:bg-[#2a2a2a] text-[#F9F9F9]/80 hover:text-[#00DF5E] border border-[#333333] transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Escalation to real WhatsApp button */}
            <div className="px-4 py-2 bg-[#1b1b1b] border-t border-[#333333]/50 flex items-center justify-between text-[11px]">
              <span className="text-[#F9F9F9]/50">
                Prefere falar com a pessoa real?
              </span>
              <a
                href={PERSONAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00DF5E] font-medium flex items-center gap-1.5 hover:underline"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#202020] border-t border-[#333333] flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Digite sua dúvida ou mensagem..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#171717] border border-[#333333] text-xs sm:text-sm text-[#F9F9F9] placeholder-[#F9F9F9]/40 focus:border-[#00DF5E] focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-[#00DF5E] text-[#171717] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#00DF5E]/90 transition-all shrink-0 font-bold"
                aria-label="Enviar mensagem"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

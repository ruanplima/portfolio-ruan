import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AssistantChat } from './AssistantChat';
import { ScrollToTop } from './ScrollToTop';
import { DEFAULT_EASE } from './animations';

export const Layout: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F9F9] flex flex-col font-sans selection:bg-[#00DF5E] selection:text-[#171717] overflow-x-hidden">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Persistent Sticky Header with active route state */}
      <Header onOpenChat={handleOpenChat} />

      {/* Main Page Content rendered by active route with smooth route transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{
              duration: 0.35,
              ease: DEFAULT_EASE,
            }}
          >
            <Outlet context={{ onOpenChat: handleOpenChat }} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Dark Footer */}
      <Footer />

      {/* Persistent Gemini 3.8 Flash Assistant Chat */}
      <AssistantChat
        isOpen={isChatOpen}
        onOpen={handleOpenChat}
        onClose={handleCloseChat}
      />
    </div>
  );
};

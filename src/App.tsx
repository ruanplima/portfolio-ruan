/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useOutletContext,
} from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { StackPage } from './pages/StackPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Helper component to pass chat opener to Home
const HomeWrapper: React.FC = () => {
  const context = useOutletContext<{ onOpenChat: () => void }>();
  return <HomePage onOpenChat={context?.onOpenChat || (() => {})} />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<HomeWrapper />} />

          {/* Dedicated Subpages */}
          <Route path="sobre" element={<AboutPage />} />
          <Route path="servicos" element={<ServicesPage />} />
          <Route path="projetos" element={<ProjectsPage />} />
          <Route path="projetos/:slug" element={<ProjectDetailPage />} />
          <Route path="processo" element={<ProcessPage />} />
          <Route path="contato" element={<ContactPage />} />

          {/* 404 Not Found Fallback */}
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

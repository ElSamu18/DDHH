/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CommissionsSection } from './components/CommissionsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { AffinityQuiz } from './components/AffinityQuiz';
import { FaqSection } from './components/FaqSection';
import { CopyLinkBanner } from './components/CopyLinkBanner';
import { Footer } from './components/Footer';

/**
 * Landing page para el Foro de Derechos Humanos del Módulo 4 (Interanual de DDHH).
 * Orientada a organizar las 4 comisiones (Logística, Académica, Protocolo y Difusión)
 * bajo la coordinación de Samuel López y con reporte unificado para el Prof. Juan Carlos Suárez.
 */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      {/* 1. Header con Top Bar Contract y CTA principal */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section con título, subtítulo, lema y llamada a la acción */}
        <Hero />

        {/* 3. Sección de las 4 Comisiones (cuadrícula 2x2 en escritorio, 1 col en móvil) */}
        <CommissionsSection />

        {/* 4. Sección de Organización y Flujo de Reporte Unificado para el Prof. Juan Carlos Suárez */}
        <WorkflowSection />

        {/* 5. Orientador Interactivo / Test de Afinidad para estudiantes indecisos */}
        <AffinityQuiz />

        {/* 6. Banner de Acción Rápida y Copiado de Enlace del Formulario */}
        <CopyLinkBanner />

        {/* 7. Sección de Preguntas Frecuentes (FAQ) */}
        <FaqSection />
      </main>

      {/* 8. Pie de Página con Créditos y Contacto */}
      <Footer />
    </div>
  );
}

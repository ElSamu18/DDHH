import { useState } from 'react';
import { ExternalLink, Menu, X, Users, Sparkles } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../utils/commissions';

/**
 * Top Navigation Bar following the Top Bar Contract:
 * Zone 1: Single text wordmark
 * Zone 2: Concise single-line navigation links
 * Zone 3: 1 Primary Action button
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-sm shadow-teal-600/30 group-hover:scale-105 transition-transform">
              <Users className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-slate-900">
                FORO DDHH
              </span>
              <span className="text-xs font-semibold tracking-wide text-teal-700">
                MÓDULO 4
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600"
          >
            <a
              href="#inicio"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Inicio
            </a>
            <a
              href="#comisiones"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Comisiones
            </a>
            <a
              href="#organizacion"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Ruta y Reporte
            </a>
            <a
              href="#test-afinidad"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Test de Afinidad
            </a>
            <a
              href="#preguntas"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Preguntas Frecuentes
            </a>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 active:scale-[0.98] rounded-xl shadow-md shadow-teal-600/25 transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              <span>Inscríbete aquí</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú principal'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-700">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-700"
            >
              Inicio
            </a>
            <a
              href="#comisiones"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-700"
            >
              Comisiones
            </a>
            <a
              href="#organizacion"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-700"
            >
              Ruta y Reporte
            </a>
            <a
              href="#test-afinidad"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-700"
            >
              Test de Afinidad
            </a>
            <a
              href="#preguntas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-700"
            >
              Preguntas Frecuentes
            </a>
          </nav>

          <div className="pt-2">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-center font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md shadow-teal-600/30"
            >
              <span>Inscríbete aquí (Google Form)</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

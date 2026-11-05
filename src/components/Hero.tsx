import { useState } from 'react';
import { ExternalLink, ArrowRight, Clock, Users, Shield, Copy, Check, Sparkles } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../utils/commissions';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(GOOGLE_FORM_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="inicio" className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/50 via-white to-slate-50">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-sky-100/40 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Work Motto Highlight Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-100/90 to-amber-100/90 border border-teal-200/80 shadow-sm text-xs sm:text-sm font-bold text-teal-950">
              <Clock className="w-4 h-4 text-teal-700 animate-spin-slow" aria-hidden="true" />
              <span>Lema de trabajo:</span>
              <span className="text-teal-800 underline decoration-amber-400 decoration-2 underline-offset-2">
                "Ganarle tiempo al tiempo"
              </span>
            </div>

            {/* Main Title (Requested exact wording) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              COMISIONES PARA EL FORO DE DERECHOS HUMANOS
            </h1>

            {/* Subtitle (Requested exact wording) */}
            <p className="text-xl sm:text-2xl font-bold text-teal-700 leading-snug">
              Organización colaborativa para el evento del Módulo 4
            </p>

            {/* Introduction & Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              ¡Bienvenidas y bienvenidos al espacio oficial de organización estudiantil del{' '}
              <strong className="text-slate-900 font-semibold">Interanual de DDHH</strong>! El éxito de este encuentro depende de nuestro trabajo articulado en comisiones. Súmate a la comisión donde tus talentos sumen más y construyamos juntos un foro dinámico, crítico y de alto impacto.
            </p>

            {/* Key Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <span>4 Comisiones especializadas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <span>Representantes por comisión</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span>1 solo informe para el Prof. Juan Carlos Suárez</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Coordinación: Samuel López</span>
              </div>
            </div>

            {/* Primary CTA & Secondary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Grand Pulsing CTA Button */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-cta-pulse flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-extrabold text-white bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-700 hover:from-teal-500 hover:to-emerald-600 active:scale-[0.98] rounded-2xl shadow-xl shadow-teal-700/30 transition-all border border-teal-400/30 text-center"
              >
                <span>Inscríbete aquí</span>
                <ExternalLink className="w-5 h-5 shrink-0" aria-hidden="true" />
              </a>

              {/* Secondary Navigation Button */}
              <a
                href="#comisiones"
                className="flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-bold text-slate-700 hover:text-teal-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-2xl shadow-sm transition-colors text-center"
              >
                <span>Conoce las 4 comisiones</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Quick Share Link Action */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <span>¿Quieres compartir el enlace con tus compañeros de clase?</span>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 font-bold text-teal-700 hover:text-teal-900 underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar link del formulario</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-2.5 bg-gradient-to-tr from-teal-500/20 via-amber-500/20 to-sky-500/20 border border-slate-200/90 shadow-2xl backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-900">
                <img
                  src="/src/assets/images/hero_ddhh_forum_1793900125330.jpg"
                  alt="Estudiantes colaborando activamente en el Foro de Derechos Humanos del Módulo 4"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized CSS container if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Visual Overlay Scrim with Info Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                      Interanual de DDHH · Módulo 4
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold leading-tight">
                      Liderazgo Estudiantil en Acción
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Organización horizontal, debate crítico y compromiso ciudadano.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Quick Stat Card */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-xl max-w-[260px] hidden sm:block">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 font-extrabold text-sm shadow-sm">
                    DDHH
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">
                      Compromiso Colectivo
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Cada comisión aporta al informe unificado para el Prof. Juan Carlos Suárez.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

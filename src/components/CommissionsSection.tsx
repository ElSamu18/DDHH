import { useState } from 'react';
import {
  Box,
  BookOpen,
  Award,
  Megaphone,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  UserCheck,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { COMMISSIONS, Commission, GOOGLE_FORM_URL } from '../utils/commissions';

/**
 * Returns the corresponding Lucide icon component.
 */
function getCommissionIcon(name: Commission['iconName']) {
  switch (name) {
    case 'Box':
      return Box;
    case 'BookOpen':
      return BookOpen;
    case 'Award':
      return Award;
    case 'Megaphone':
      return Megaphone;
    default:
      return Sparkles;
  }
}

export function CommissionsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="comisiones" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-teal-600 mb-2">
            El Núcleo Operativo del Evento
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Las 4 Comisiones del Foro
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Cada comisión cumple un rol estratégico e irremplazable. Elige la que mejor se adapte a tus fortalezas e inscríbete para comenzar a trabajar en equipo.
          </p>
        </div>

        {/* 2x2 Responsive Grid on Desktop, 1 Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {COMMISSIONS.map((commission) => {
            const Icon = getCommissionIcon(commission.iconName);
            const isExpanded = expandedId === commission.id;

            // Tailored border and badge accent styles based on commission
            const borderAccent =
              commission.id === 'logistica'
                ? 'border-teal-200 hover:border-teal-400 group-hover:border-teal-400'
                : commission.id === 'academica'
                ? 'border-sky-200 hover:border-sky-400 group-hover:border-sky-400'
                : commission.id === 'protocolo'
                ? 'border-amber-200 hover:border-amber-400 group-hover:border-amber-400'
                : 'border-orange-200 hover:border-orange-400 group-hover:border-orange-400';

            const iconCardBg =
              commission.id === 'logistica'
                ? 'bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-teal-500/25'
                : commission.id === 'academica'
                ? 'bg-gradient-to-br from-sky-500 to-sky-700 text-white shadow-sky-500/25'
                : commission.id === 'protocolo'
                ? 'bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-amber-500/25'
                : 'bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-orange-500/25';

            const cardHeaderBg =
              commission.id === 'logistica'
                ? 'from-teal-50/60 to-transparent'
                : commission.id === 'academica'
                ? 'from-sky-50/60 to-transparent'
                : commission.id === 'protocolo'
                ? 'from-amber-50/60 to-transparent'
                : 'from-orange-50/60 to-transparent';

            const tagColor =
              commission.id === 'logistica'
                ? 'text-teal-800 bg-teal-100/70 border-teal-200'
                : commission.id === 'academica'
                ? 'text-sky-800 bg-sky-100/70 border-sky-200'
                : commission.id === 'protocolo'
                ? 'text-amber-800 bg-amber-100/70 border-amber-200'
                : 'text-orange-800 bg-orange-100/70 border-orange-200';

            const actionBtnColor =
              commission.id === 'logistica'
                ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-teal-600/20'
                : commission.id === 'academica'
                ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-600/20'
                : commission.id === 'protocolo'
                ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20'
                : 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-600/20';

            return (
              <article
                key={commission.id}
                className={`group relative rounded-3xl bg-white border ${borderAccent} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Subtle Header Gradient */}
                <div className={`p-6 sm:p-8 bg-gradient-to-b ${cardHeaderBg}`}>
                  {/* Top Bar with Icon and Tagline */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${iconCardBg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 shrink-0`}
                    >
                      <Icon className="w-9 h-9 sm:w-11 sm:h-11" aria-hidden="true" />
                    </div>

                    <div className="text-right">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${tagColor}`}
                      >
                        {commission.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Commission Name */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Comisión de {commission.name}
                  </h3>

                  {/* Official Function from Infographic */}
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Función Oficial:
                    </p>
                    <p className="text-base sm:text-lg font-bold text-slate-800 mt-0.5">
                      "{commission.officialFunction}"
                    </p>
                  </div>

                  {/* Leadership and Representative Note (Mandatory requirement) */}
                  <div className="mt-4 flex items-start gap-3 p-3 rounded-xl bg-amber-50/60 border border-amber-200/60 text-xs sm:text-sm text-slate-700">
                    <UserCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="leading-relaxed">
                      <strong className="font-semibold text-slate-900">Liderazgo por Representante:</strong>{' '}
                      {commission.representativeNote}
                    </p>
                  </div>

                  {/* Collapsible Extended Tasks */}
                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-slate-200/80 space-y-4 animate-in fade-in duration-200">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                          Tareas y Responsabilidades Principales:
                        </p>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                          {commission.keyTasks.map((task, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                          Perfil y Habilidades Recomendadas:
                        </p>
                        <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                          {commission.idealProfile.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Actions Area */}
                <div className="px-6 sm:px-8 py-4 sm:py-5 bg-slate-50/70 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => toggleExpand(commission.id)}
                    aria-label={`${isExpanded ? 'Ocultar' : 'Ver'} tareas y perfil de ${commission.name}`}
                    className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-2 px-3 rounded-lg hover:bg-slate-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Ocultar detalles' : 'Ver tareas y perfil'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98] ${actionBtnColor}`}
                  >
                    <span>Postular a {commission.name}</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

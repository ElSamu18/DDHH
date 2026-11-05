import { Users, FileText, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, UserCheck } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../utils/commissions';

export function WorkflowSection() {
  return (
    <section id="organizacion" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-teal-600 mb-2">
            Organización y Flujo de Trabajo
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            De la Inscripción al Informe Unificado
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Una estructura clara y transparente para garantizar que el trabajo en equipo fluya eficazmente hacia la fecha del Foro.
          </p>
        </div>

        {/* 3-Step Sequential Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
          {/* Step 1 */}
          <div className="relative rounded-3xl bg-white p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-12 h-12 rounded-2xl bg-teal-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md shadow-teal-600/20">
                  01
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                  Paso 1
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                1. Inscripción
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cada estudiante completa el formulario oficial de Google seleccionando su comisión de preferencia (Logística, Académica, Protocolo o Difusión).
              </p>
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                <strong className="text-slate-900">Objetivo:</strong> Mapear las fortalezas de cada compañero y ganar tiempo al tiempo conformando los grupos sin demora.
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-900"
              >
                <span>Acceder al formulario</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-3xl bg-white p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-extrabold text-lg flex items-center justify-center shadow-md shadow-amber-500/20">
                  02
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  Paso 2
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                2. Grupos y Representantes
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Se crean los grupos de trabajo por comisión en WhatsApp. Cada comisión elige a un representante que articulará el liderazgo interno y el cronograma de actividades.
              </p>
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                <strong className="text-slate-900">Dinámica:</strong> Trabajo en equipo participativo bajo la guía del representante electo por sus pares.
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
                <UserCheck className="w-4 h-4 text-amber-600" />
                <span>1 representante por comisión</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-3xl bg-white p-7 sm:p-8 border border-teal-200 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between ring-2 ring-teal-500/10">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-12 h-12 rounded-2xl bg-sky-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md shadow-sky-600/20">
                  03
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200">
                  Paso 3 · Clave
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                3. Informe Unificado
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Los representantes de cada comisión se unifican para consolidar todos los acuerdos, avances y requerimientos en un solo documento oficial.
              </p>
              <div className="mt-4 p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 font-medium">
                <strong className="text-teal-900 block font-bold mb-1">
                  Entrega al Prof. Juan Carlos Suárez:
                </strong>
                El informe unificado se entrega directamente al <strong>Prof. Juan Carlos Suárez</strong> para que reciba la información de una <em>misma fuente oficial y fidedigna</em>.
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-800">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Canal único de comunicación académica</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Explanatory Banner about Prof. Juan Carlos Suárez & Samuel López */}
        <div className="rounded-3xl bg-gradient-to-r from-teal-900 via-slate-900 to-sky-950 p-8 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-xs font-semibold text-teal-300">
                <FileText className="w-3.5 h-3.5" />
                <span>Mecanismo de Articulación y Reporte</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                ¿Por qué un solo Informe Unificado para el Prof. Juan Carlos Suárez?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Como ha señalado el coordinador <strong className="text-white font-semibold">Samuel López</strong> en el comunicado oficial, para garantizar la máxima eficiencia organizativa y evitar la dispersión de mensajes, los representantes de Logística, Académica, Protocolo y Difusión cruzarán sus datos en una mesa común. De este modo, el docente evaluador y asesor, <strong className="text-white font-semibold">Prof. Juan Carlos Suárez</strong>, recibirá un panorama integral y coherente de todo el avance del Módulo 4.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 text-center w-full max-w-sm space-y-3">
                <p className="text-xs uppercase tracking-wider text-teal-300 font-bold">
                  Compromiso del Módulo 4
                </p>
                <p className="text-base font-extrabold text-white">
                  "Ganarle tiempo al tiempo y trabajar en equipo"
                </p>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-sm bg-teal-500 hover:bg-teal-400 text-slate-950 transition-colors shadow-lg shadow-teal-500/30"
                >
                  <span>Inscribirme ahora</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Copy, Check, ExternalLink, Share2, Sparkles } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../utils/commissions';

export function CopyLinkBanner() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(GOOGLE_FORM_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-700 py-12 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Convocatoria Abierta</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              ¿Listo para sumarte al Foro de DDHH?
            </h3>
            <p className="text-sm sm:text-base text-teal-100">
              Comparte el formulario con tu grupo de estudio o inscríbete ahora mismo para asegurar tu comisión.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold text-sm backdrop-blur-sm transition-all active:scale-[0.98]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>¡Enlace copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar enlace al Formulario</span>
                </>
              )}
            </button>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-400/20 transition-all active:scale-[0.98]"
            >
              <span>Abrir Formulario Oficial</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

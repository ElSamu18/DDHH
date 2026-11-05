import { Users, Mail, ExternalLink, Heart, Shield } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../utils/commissions';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 flex items-center justify-center font-black text-sm">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-extrabold tracking-tight text-lg text-white">
                Interanual de DDHH - Módulo 4
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Plataforma informativa de organización para el Foro de Derechos Humanos. Construyendo liderazgos democráticos, pensamiento crítico y compromiso con los derechos fundamentales.
            </p>
            <p className="text-xs font-semibold text-teal-400">
              Lema: "Ganarle tiempo al tiempo y trabajar en equipo"
            </p>
          </div>

          {/* Comisiones Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Comisiones de Trabajo
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <a href="#comisiones" className="hover:text-teal-300 transition-colors">
                  Logística (Espacio y recursos)
                </a>
              </li>
              <li>
                <a href="#comisiones" className="hover:text-teal-300 transition-colors">
                  Académica (Contenido del evento)
                </a>
              </li>
              <li>
                <a href="#comisiones" className="hover:text-teal-300 transition-colors">
                  Protocolo (Dirección e invitados)
                </a>
              </li>
              <li>
                <a href="#comisiones" className="hover:text-teal-300 transition-colors">
                  Difusión (Promoción de convocatoria)
                </a>
              </li>
            </ul>
          </div>

          {/* Coordinación y Contacto */}
          <div className="md:col-span-4 space-y-2">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Coordinación y Asesoría
            </p>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <p>
                <strong className="text-slate-200">Coordinador Estudiantil:</strong> Samuel López
              </p>
              <p>
                <strong className="text-slate-200">Docente Asesor:</strong> Prof. Juan Carlos Suárez
              </p>
              <p className="text-xs text-slate-400">
                Canal de consulta oficial para conformación de equipos y asignación de representantes.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:samuel.alexander.lopez2024@gmail.com?subject=Consulta%20Foro%20DDHH%20Modulo%204"
                  className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors py-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contactar a Samuel López (Coordinador)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} Interanual de DDHH - Módulo 4. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors inline-flex items-center gap-1"
            >
              <span>Formulario de Inscripción</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

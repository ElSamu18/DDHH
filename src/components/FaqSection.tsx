import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: '¿Hasta cuándo puedo inscribirme y cuál es el enlace oficial?',
    answer:
      'La inscripción está abierta desde ya a través del formulario de Google compartido por el coordinador Samuel López. Se recomienda completarlo de inmediato para "ganarle tiempo al tiempo" y comenzar con la asignación de grupos sin retrasos.',
  },
  {
    question: '¿Por qué se entregará un solo informe al Prof. Juan Carlos Suárez?',
    answer:
      'Para que el docente reciba la información de una misma fuente oficial, clara y unificada. Cada comisión generará sus avances y acuerdos con su representante; posteriormente, los 4 representantes se reunirán en mesa de trabajo para compilar un único informe consolidado para el Prof. Juan Carlos Suárez.',
  },
  {
    question: '¿Cómo se definen los representantes de cada comisión?',
    answer:
      'Una vez cerradas las inscripciones y conformados los grupos de WhatsApp por comisión, los integrantes de cada equipo elegirán democráticamente a su representante estudiantil, quien liderará las reuniones y participará en la mesa del informe unificado.',
  },
  {
    question: '¿Puedo cambiarme de comisión si me doy cuenta de que prefiero otra?',
    answer:
      'Sí, durante los primeros días de conformación de equipos puedes ponerte en contacto con Samuel López (Coordinador) para solicitar un ajuste de comisión en función de los cupos y el equilibrio de cada área.',
  },
  {
    question: '¿Qué funciones exactas tiene cada una de las 4 comisiones?',
    answer:
      'Según la infografía oficial: Logística gestiona el espacio físico y recursos; Académica diseña el contenido del evento; Protocolo dirige el evento y atiende a invitados; y Difusión promueve la convocatoria.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="preguntas" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Resolución de Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Todo lo que necesitas saber sobre la dinámica de trabajo para el Módulo 4.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-teal-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

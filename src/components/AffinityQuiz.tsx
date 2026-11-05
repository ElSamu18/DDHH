import { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  ExternalLink,
  CheckCircle2,
  Box,
  BookOpen,
  Award,
  Megaphone,
} from 'lucide-react';
import {
  AFFINITY_QUIZ_QUESTIONS,
  calculateQuizResult,
  Commission,
  GOOGLE_FORM_URL,
} from '../utils/commissions';

function getIcon(name: Commission['iconName']) {
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

export function AffinityQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, Commission['id']>>({});
  const [recommendedCommission, setRecommendedCommission] = useState<Commission | null>(null);

  const currentQuestion = AFFINITY_QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = AFFINITY_QUIZ_QUESTIONS.length;

  const handleSelectOption = (commissionId: Commission['id']) => {
    const updated = {
      ...selectedAnswers,
      [currentQuestion.id]: commissionId,
    };
    setSelectedAnswers(updated);

    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Completed all questions
      const result = calculateQuizResult(updated);
      setRecommendedCommission(result);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setRecommendedCommission(null);
  };

  return (
    <section id="test-afinidad" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Orientador Vocacional Estudiantil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ¿En qué comisión encajas mejor?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Responde 3 preguntas rápidas para descubrir qué rol potenciará más tus habilidades en el Foro de Derechos Humanos.
          </p>
        </div>

        {/* Card Box */}
        <div className="bg-slate-50/90 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          {!recommendedCommission ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-6 text-xs font-bold text-slate-500">
                <span>
                  Pregunta {currentQuestionIndex + 1} de {totalQuestions}
                </span>
                <span>
                  {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}% completado
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-200 mb-8 overflow-hidden">
                <div
                  className="h-full bg-teal-600 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                  }}
                />
              </div>

              {/* Question Text */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 leading-snug">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-3.5">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(option.commissionId)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-white hover:bg-teal-50/70 border border-slate-200 hover:border-teal-300 shadow-sm hover:shadow transition-all group flex items-start gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  >
                    <span className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-teal-600 group-hover:text-white font-bold text-slate-700 flex items-center justify-center shrink-0 transition-colors text-sm">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-slate-700 group-hover:text-slate-900 leading-relaxed pt-0.5">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result View */
            <div className="text-center py-4 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-teal-600 text-white flex items-center justify-center shadow-lg shadow-teal-600/30">
                {(() => {
                  const ResultIcon = getIcon(recommendedCommission.iconName);
                  return <ResultIcon className="w-10 h-10" />;
                })()}
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider font-extrabold text-teal-700 mb-1">
                  Tu afinidad ideal es:
                </p>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Comisión de {recommendedCommission.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-teal-800 mt-2">
                  "{recommendedCommission.officialFunction}"
                </p>
              </div>

              <div className="max-w-xl mx-auto p-5 rounded-2xl bg-white border border-slate-200/90 text-left text-xs sm:text-sm text-slate-600 space-y-3">
                <p className="font-semibold text-slate-900">
                  ¿Por qué encajas aquí?
                </p>
                <p>
                  Tus respuestas demuestran gran afinidad con las dinámicas de {recommendedCommission.name.toLowerCase()}. Tu liderazgo y habilidades sumarán enormemente al equipo.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    Trabajarás bajo el liderazgo de tu representante de comisión para consolidar los aportes hacia el informe unificado del Prof. Juan Carlos Suárez.
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-md shadow-teal-600/25 transition-all text-sm w-full sm:w-auto"
                >
                  <span>Inscribirme en {recommendedCommission.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 transition-colors text-sm w-full sm:w-auto"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Repetir el test</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

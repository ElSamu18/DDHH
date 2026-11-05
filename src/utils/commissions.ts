export interface Commission {
  id: 'logistica' | 'academica' | 'protocolo' | 'difusion';
  name: string;
  tagline: string;
  officialFunction: string;
  iconName: 'Box' | 'BookOpen' | 'Award' | 'Megaphone';
  themeColor: {
    badgeBg: string;
    badgeText: string;
    accentBg: string;
    accentBorder: string;
    iconBg: string;
    iconColor: string;
    buttonBg: string;
    buttonHover: string;
    glow: string;
  };
  representativeNote: string;
  keyTasks: string[];
  idealProfile: string[];
  toolsAndResources: string[];
}

export const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScIBOq6v5tvlUyVsbjks06WS1JWoWGx5omuLc_gXL_aQLjvGQ/viewform?usp=publish-editor';

export const COMMISSIONS: Commission[] = [
  {
    id: 'logistica',
    name: 'Logística',
    tagline: 'Soporte, Espacio y Recursos',
    officialFunction: 'Gestiona el espacio físico y recursos.',
    iconName: 'Box',
    themeColor: {
      badgeBg: 'bg-teal-50',
      badgeText: 'text-teal-800',
      accentBg: 'bg-teal-500/10',
      accentBorder: 'border-teal-200',
      iconBg: 'bg-teal-500 text-white',
      iconColor: 'text-teal-600',
      buttonBg: 'bg-teal-600 hover:bg-teal-700',
      buttonHover: 'hover:border-teal-400',
      glow: 'shadow-teal-500/20',
    },
    representativeNote:
      'Al unirte a esta comisión, trabajarás bajo el liderazgo de un representante que articulará con los demás equipos y mantendrá al día el cronograma de recursos.',
    keyTasks: [
      'Acondicionamiento y distribución del espacio físico y auditorio',
      'Gestión de equipamiento audiovisual (micrófonos, proyector, sonido)',
      'Organización de materiales de apoyo, mobiliario y señalética',
      'Coordinación de refrigerios y logística de contingencia',
    ],
    idealProfile: [
      'Capacidad organizativa y sentido práctico',
      'Resolución rápida de imprevistos',
      'Puntualidad y orientación al detalle operativo',
    ],
    toolsAndResources: ['Inventarios', 'Hojas de control', 'Pruebas técnicas previas'],
  },
  {
    id: 'academica',
    name: 'Académica',
    tagline: 'Contenido y Ejes Temáticos',
    officialFunction: 'Diseña el contenido del evento.',
    iconName: 'BookOpen',
    themeColor: {
      badgeBg: 'bg-sky-50',
      badgeText: 'text-sky-800',
      accentBg: 'bg-sky-500/10',
      accentBorder: 'border-sky-200',
      iconBg: 'bg-sky-500 text-white',
      iconColor: 'text-sky-600',
      buttonBg: 'bg-sky-600 hover:bg-sky-700',
      buttonHover: 'hover:border-sky-400',
      glow: 'shadow-sky-500/20',
    },
    representativeNote:
      'Al unirte a esta comisión, trabajarás bajo el liderazgo de un representante que consolidará la propuesta académica y redactará los avances conceptuales para el informe general.',
    keyTasks: [
      'Delimitación de los ejes temáticos y problemáticas de DDHH',
      'Diseño del programa académico y estructura de ponencias',
      'Elaboración de preguntas disparadoras y dinámicas de debate',
      'Redacción de memorias y relatoría final de conclusiones del foro',
    ],
    idealProfile: [
      'Gusto por la investigación y el análisis reflexivo',
      'Buena redacción y síntesis conceptual',
      'Sensibilidad y conocimiento crítico sobre Derechos Humanos',
    ],
    toolsAndResources: ['Dossiers temáticos', 'Guías de moderación', 'Documentos colaborativos'],
  },
  {
    id: 'protocolo',
    name: 'Protocolo',
    tagline: 'Conducción y Atención a Invitados',
    officialFunction: 'Dirige el evento y atiende a invitados.',
    iconName: 'Award',
    themeColor: {
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-800',
      accentBg: 'bg-amber-500/10',
      accentBorder: 'border-amber-200',
      iconBg: 'bg-amber-500 text-white',
      iconColor: 'text-amber-600',
      buttonBg: 'bg-amber-600 hover:bg-amber-700',
      buttonHover: 'hover:border-amber-400',
      glow: 'shadow-amber-500/20',
    },
    representativeNote:
      'Al unirte a esta comisión, trabajarás bajo el liderazgo de un representante que guiará el guión ceremonial y coordinará el protocolo institucional con las autoridades del módulo.',
    keyTasks: [
      'Maestría de ceremonia y conducción general del evento',
      'Recepción, orientación y atención a ponentes e invitados especiales',
      'Control riguroso de tiempos de exposición e intervenciones',
      'Entrega de reconocimientos, certificados y orden en el estrado',
    ],
    idealProfile: [
      'Facilidad de palabra y elocuencia pública',
      'Cortesía, diplomacia y presencia institucional',
      'Manejo sereno de público y tiempos',
    ],
    toolsAndResources: ['Guión protocolar', 'Escaleta de tiempos', 'Acreditaciones oficiales'],
  },
  {
    id: 'difusion',
    name: 'Difusión',
    tagline: 'Convocatoria y Comunicación',
    officialFunction: 'Promueve la convocatoria.',
    iconName: 'Megaphone',
    themeColor: {
      badgeBg: 'bg-orange-50',
      badgeText: 'text-orange-800',
      accentBg: 'bg-orange-500/10',
      accentBorder: 'border-orange-200',
      iconBg: 'bg-orange-500 text-white',
      iconColor: 'text-orange-600',
      buttonBg: 'bg-orange-600 hover:bg-orange-700',
      buttonHover: 'hover:border-orange-400',
      glow: 'shadow-orange-500/20',
    },
    representativeNote:
      'Al unirte a esta comisión, trabajarás bajo el liderazgo de un representante que dinamizará las campañas de comunicación y aportará métricas de impacto al informe unificado.',
    keyTasks: [
      'Diseño y difusión de piezas gráficas para WhatsApp y redes',
      'Campañas de expectativa y motivación para toda la comunidad estudiantil',
      'Cobertura fotográfica, audiovisual y entrevistas en vivo del foro',
      'Comunicados oficiales antes, durante y después del evento',
    ],
    idealProfile: [
      'Creatividad visual y habilidades de comunicación',
      'Manejo de herramientas de diseño (Canva, etc.) y redes sociales',
      'Entusiasmo contagioso y proactividad comunitaria',
    ],
    toolsAndResources: ['Parrilla de contenidos', 'Plantillas de diseño', 'Cobertura en directo'],
  },
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    commissionId: Commission['id'];
  }[];
}

export const AFFINITY_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Qué tipo de actividad disfrutas más al preparar un evento importante?',
    options: [
      {
        text: 'Asegurar el espacio físico, los equipos de audio y que los recursos materiales funcionen a la perfección.',
        commissionId: 'logistica',
      },
      {
        text: 'Investigar temáticas, estructurar los debates y redactar los contenidos conceptuales del foro.',
        commissionId: 'academica',
      },
      {
        text: 'Hablar en público, recibir a ponentes e invitados, y moderar los tiempos del cronograma con elegancia.',
        commissionId: 'protocolo',
      },
      {
        text: 'Crear afiches visuales, redactar mensajes llamativos y motivar a los compañeros a asistir masivamente.',
        commissionId: 'difusion',
      },
    ],
  },
  {
    id: 2,
    question: '¿Cuál consideras que es tu principal fortaleza como estudiante?',
    options: [
      {
        text: 'Sentido práctico, orden metódico y capacidad de resolver imprevistos al instante.',
        commissionId: 'logistica',
      },
      {
        text: 'Pensamiento crítico, rigor analítico y pasión por la reflexión sobre Derechos Humanos.',
        commissionId: 'academica',
      },
      {
        text: 'Empatía interpersonal, dicción clara, diplomacia y templanza ante el público.',
        commissionId: 'protocolo',
      },
      {
        text: 'Creatividad artística, dinamismo en redes sociales y habilidad para conectar con las personas.',
        commissionId: 'difusion',
      },
    ],
  },
  {
    id: 3,
    question: 'El día del Foro de Derechos Humanos, ¿dónde te gustaría estar más activo?',
    options: [
      {
        text: 'Supervisando tras bambalinas que los micrófonos, proyección, iluminación y refrigerios estén en orden.',
        commissionId: 'logistica',
      },
      {
        text: 'Acompañando las mesas de discusión y sistematizando las conclusiones clave del encuentro.',
        commissionId: 'academica',
      },
      {
        text: 'En el estrado dando la bienvenida oficial o acompañando a los invitados de honor.',
        commissionId: 'protocolo',
      },
      {
        text: 'Capturando las mejores fotografías, grabando cápsulas en video y publicando en directo.',
        commissionId: 'difusion',
      },
    ],
  },
];

/**
 * Calculates the best commission match based on quiz answers.
 * Returns the commission with the highest votes. Defaults to first selected or logistica.
 */
export function calculateQuizResult(
  answers: Record<number, Commission['id']>
): Commission {
  const tallies: Record<Commission['id'], number> = {
    logistica: 0,
    academica: 0,
    protocolo: 0,
    difusion: 0,
  };

  Object.values(answers).forEach((id) => {
    if (tallies[id] !== undefined) {
      tallies[id]++;
    }
  });

  let winningId: Commission['id'] = 'logistica';
  let maxCount = -1;

  for (const [id, count] of Object.entries(tallies)) {
    if (count > maxCount) {
      maxCount = count;
      winningId = id as Commission['id'];
    }
  }

  const commission = COMMISSIONS.find((c) => c.id === winningId);
  return commission || COMMISSIONS[0];
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  actionText: string;
  actionLink?: string;
  highlightNote?: string;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: '01',
    title: 'Inscripción Inicial',
    shortDesc: 'Cada estudiante completa el formulario oficial de Google.',
    fullDesc:
      'Para "ganarle tiempo al tiempo", cada participante selecciona la comisión que mejor se alinea con sus habilidades e intereses. La meta es conformar equipos sólidos y equilibrados de inmediato.',
    actionText: 'Llenar Formulario de Google',
    actionLink: GOOGLE_FORM_URL,
    highlightNote: 'Enlace oficial suministrado por la coordinación de Samuel López.',
  },
  {
    stepNumber: '02',
    title: 'Grupos y Representantes',
    shortDesc: 'Conformación de equipos por comisión y elección de representantes.',
    fullDesc:
      'Una vez consolidadas las listas, se crearán los grupos de trabajo por comisión en WhatsApp. Cada comisión elegirá a su representante estudiantil, quien liderará las tareas internas y canalizará los aportes del equipo.',
    actionText: 'Coordinación interna por comisión',
    highlightNote: 'Cada comisión tendrá un representante designado para liderazgo horizontal.',
  },
  {
    stepNumber: '03',
    title: 'Informe Unificado para el Prof. Juan Carlos Suárez',
    shortDesc: 'Mesa de representantes consolida un único reporte de avance.',
    fullDesc:
      'Los representantes de las cuatro comisiones se reunirán para unificar todos los acuerdos y avances en un solo informe oficial consolidado. Este documento será entregado directamente al Prof. Juan Carlos Suárez, garantizando que reciba la información clara de una misma fuente verificada.',
    actionText: 'Canal único de reporte académico',
    highlightNote: 'El Prof. Juan Carlos Suárez recibirá una sola fuente oficial de información.',
  },
];

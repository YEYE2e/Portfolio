import type { Trait, ExperienceItem, SkillCategory, EducationItem, CertificationItem } from '../types';

export const profileInfo = {
  name: 'Yan Wei Portero Guzmán',
  title: 'Desarrollador de Software',
  location: 'Guayaquil, Ecuador',
  summary:
    'Desarrollador de Software enfocado en construir arquitecturas backend robustas, APIs RESTful asíncronas y aplicaciones web escalables. Dominio de Python con FastAPI y Django REST, Java orientado a objetos y concurrencia multihilo, TypeScript y desarrollo cloud con AWS. Especializado en código limpio, automatización de pruebas QA y entrega ágil de software de alto impacto.'
};

export const aboutTraits: Trait[] = [
  {
    number: '01',
    title: 'Arquitectura Backend & APIs',
    description: 'Diseño de servicios asíncronos de alta concurrencia con FastAPI, Django REST y PostgreSQL.'
  },
  {
    number: '02',
    title: 'Concurrencia & Algoritmos',
    description: 'Optimización multihilo en Java con ForkJoinPool, POO sólida y estructuras de datos eficientes.'
  },
  {
    number: '03',
    title: 'QA, Cloud & Automatización',
    description: 'Suites de pruebas automatizadas, certificación en AWS Cloud y pipelines modernos de CI/CD.'
  }
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Becario de QA & Automatización',
    company: 'CardService S.A.',
    period: '10/2025 – 02/2026',
    highlights: [
      'Diseñé y automaticé suites de pruebas funcionales y de regresión, reduciendo tiempos de validación y garantizando la estabilidad operativa previa al paso a producción.',
      'Gestioné el ciclo de vida de bugs en colaboración directa con el equipo de desarrollo bajo metodologías ágiles.',
      'Redacté documentación y manuales técnicos estandarizados para el soporte y mantenimiento de sistemas.'
    ]
  },
  {
    role: 'Asistente Técnico de Sistemas',
    company: 'MIPC S.A.',
    period: '06/2025 – 09/2025',
    highlights: [
      'Diagnostiqué y resolví incidencias críticas de hardware, software y conectividad en infraestructura corporativa.',
      'Ejecuté tareas de mantenimiento preventivo, optimización de sistemas operativos y soporte a usuarios finales.'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Lenguajes',
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C#', 'PHP', 'C/C++', 'SQL', 'Swift']
  },
  {
    category: 'Frameworks & Backend',
    skills: ['FastAPI', 'Django REST Framework', 'React', 'Node.js', '.NET / Blazor', 'Tailwind CSS', 'Material UI']
  },
  {
    category: 'Bases de Datos & Cloud',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Cloud Firestore / Firebase', 'AWS Cloud Practitioner']
  },
  {
    category: 'Herramientas & Métodos',
    skills: ['Git', 'GitHub', 'CI/CD', 'Pruebas Automatizadas QA', 'WebSockets', 'Clean Architecture', 'Scrum']
  }
];

export const education: EducationItem = {
  degree: 'Ingeniería en Ciencias de la Computación',
  institution: 'Universidad de Especialidades Espíritu Santo - UEES',
  period: '2023 – Actualidad',
  details: '7mo Semestre en curso'
};

export const certifications: CertificationItem[] = [
  {
    title: 'AWS Cloud Foundations / Certified',
    issuer: 'Amazon Web Services'
  },
  {
    title: 'Programming Fundamentals',
    issuer: 'Microsoft Azure'
  },
  {
    title: 'Inglés B2 Intermedio Alto',
    issuer: 'ECCE Michigan Assessment'
  }
];

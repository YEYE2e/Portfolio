import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ecommerce-core',
    number: '01/',
    title: 'E-Commerce Core',
    category: 'Web Application',
    description:
      'Plataforma completa de comercio electrónico con integración de pagos, gestión de stock en tiempo real y despliegue automatizado con GitHub Actions.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker']
  },
  {
    id: 'finanzas-inteligentes',
    number: '02/',
    title: 'Finanzas Inteligentes',
    category: 'Mobile Application',
    description:
      'Aplicación móvil híbrida para la gestión financiera personal, con sincronización automática en la nube y reportes interactivos.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Unit Tests']
  },
  {
    id: 'telemetry-console',
    number: '03/',
    title: 'Telemetry Console',
    category: 'Desktop Application',
    description:
      'Herramienta de escritorio liviana para monitorear el consumo de recursos de servidores locales con alertas visuales de estado.',
    tags: ['Electron', 'Rust', 'TypeScript', 'CI/CD']
  }
];

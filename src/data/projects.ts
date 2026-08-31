import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ecommerce-core',
    number: '01/',
    title: 'E-Commerce Core',
    category: 'Web Application',
    role: 'Lead Fullstack Engineer',
    year: '2025',
    description:
      'Plataforma completa de comercio electrónico con integración de pagos, gestión de stock en tiempo real y despliegue automatizado con GitHub Actions.',
    longDescription:
      'Arquitectura modular diseñada para manejar picos de tráfico elevados en eventos de venta masiva. Implementa una capa de caché inteligente con Redis, transacciones seguras con PostgreSQL y checkout optimizado con Stripe API.',
    architecture: [
      'Microservicios desacoplados con Node.js / Express y base de datos relacional PostgreSQL con réplicas de lectura.',
      'Caché distribuido en Redis para catálogo de productos y sesiones de usuario con TTL optimizado.',
      'Frontend SPA en React con Server-Driven UI para banners promocionales dinámicos.',
      'Contenedorización integral con Docker Compose y pipeline de CI/CD automatizado con GitHub Actions.'
    ],
    challenges: [
      'Manejo de concurrencia y prevención de over-selling en compras simultáneas mediante locks optimistas.',
      'Optimización de tiempos de respuesta del catálogo a menos de 45ms bajo carga de 2,000 req/s.',
      'Cumplimiento estricto de estándares PCI DSS en la pasarela de pagos.'
    ],
    results: [
      'Reducción del 65% en la latencia de búsqueda de productos con indexación全文.',
      '99.98% de disponibilidad durante eventos de alta demanda.',
      'Tiempo de checkout promedio reducido a 1.8 segundos.'
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'GitHub Actions'],
    repo: 'https://github.com/yeye2e/ecommerce-core',
    link: 'https://ecommerce-core-demo.example.com'
  },
  {
    id: 'finanzas-inteligentes',
    number: '02/',
    title: 'Finanzas Inteligentes',
    category: 'Mobile Application',
    role: 'Mobile Engineer & QA',
    year: '2024',
    description:
      'Aplicación móvil híbrida para la gestión financiera personal, con sincronización automática en la nube y reportes interactivos.',
    longDescription:
      'Aplicación multiplataforma (iOS & Android) enfocada en finanzas personales y presupuestos inteligentes con soporte offline-first. Permite escanear recibos, categorizar gastos automáticamente y visualizar métricas con gráficos vectoriales interactivos.',
    architecture: [
      'Arquitectura limpia (Clean Architecture) con BLoC pattern para gestión de estado predecible.',
      'Base de datos local cifrada con SQLite/Drift y sincronización bidireccional en segundo plano con Firebase Cloud Firestore.',
      'Suite completa de pruebas unitarias y de widgets con cobertura de código superior al 85%.'
    ],
    challenges: [
      'Resolución de conflictos de datos offline-online sin pérdida de transacciones.',
      'Renderizado fluido a 60/120 FPS de gráficos complejos en dispositivos de gama baja.'
    ],
    results: [
      '+15k descargas orgánicas y calificación promedio de 4.8 estrellas en tiendas de aplicaciones.',
      'Tasa de crash-free sessions del 99.95% monitoreada con Firebase Crashlytics.'
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'BLoC', 'CI/CD'],
    repo: 'https://github.com/yeye2e/finanzas-inteligentes',
    link: 'https://finanzas-demo.example.com'
  },
  {
    id: 'telemetry-console',
    number: '03/',
    title: 'Telemetry Console',
    category: 'Desktop Application',
    role: 'Systems & Tooling Developer',
    year: '2024',
    description:
      'Herramienta de escritorio liviana para monitorear el consumo de recursos de servidores locales con alertas visuales de estado.',
    longDescription:
      'Consola de monitoreo de telemetría en tiempo real para servidores y clusters locales. Combina un backend ultrarrápido en Rust para recolección de métricas a nivel de kernel y una UI reactiva en TypeScript/Electron con renderizado acelerado por hardware.',
    architecture: [
      'Módulo nativo en Rust con bindings FFI para recolección de métricas de CPU, memoria, I/O y sockets en sub-milisegundos.',
      'Canal IPC asíncrono de alto rendimiento con serialización binaria.',
      'Frontend Electron con TailwindCSS y Canvas 2D para trazado de gráficos en tiempo real con 0 consumo innecesario.'
    ],
    challenges: [
      'Minimizar la huella de memoria RAM de la aplicación de escritorio a menos de 45MB en idle.',
      'Manejo de flujos de eventos de alta frecuencia (1,000 métricas/seg) sin saturar el Event Loop.'
    ],
    results: [
      'Uso de CPU inferior al 0.4% en monitoreo continuo 24/7.',
      'Tiempos de detección de anomalías reducidos a menos de 50ms.'
    ],
    tags: ['Electron', 'Rust', 'TypeScript', 'WebSockets', 'Canvas 2D', 'CI/CD'],
    repo: 'https://github.com/yeye2e/telemetry-console',
    link: 'https://telemetry-console.example.com'
  }
];

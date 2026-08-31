import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'gestion-gastronomica',
    number: '01/',
    title: 'Sistema Backend y API de Gestión Gastronómica',
    category: 'Backend & APIs / Arquitectura Híbrida',
    role: 'Backend Developer & API Designer',
    year: '2025 – 2026',
    description:
      'Arquitectura de backend híbrida de alto rendimiento combinando la velocidad asíncrona de FastAPI para endpoints transaccionales con Django ORM para la administración y persistencia de datos.',
    longDescription:
      'Solución integral de backend orientada a resolver las altas demandas de concurrencia y consistencia transaccional en la industria gastronómica. Combina un microservicio asíncrono en FastAPI para la recepción inmediata de órdenes, actualización de comandas y estado de mesas en tiempo real, junto con la solidez de Django ORM y su panel de administración para la gestión de catálogo, inventario y facturación.',
    architecture: [
      'Arquitectura híbrida: microservicio asíncrono con FastAPI para ingesta de órdenes y Django REST Framework para la capa administrativa y persistencia.',
      'Base de datos relacional PostgreSQL con modelado normalizado, índices B-tree optimizados y transacciones atómicas.',
      'Autenticación y autorización robusta basada en roles (RBAC) con JSON Web Tokens (JWT).',
      'Validación bidireccional estricta de payloads con esquemas Pydantic v2.',
      'Documentación técnica interactiva viva bajo el estándar OpenAPI (Swagger UI y Redoc).'
    ],
    challenges: [
      'Orquestar la coexistencia armónica entre el ciclo asíncrono de FastAPI (asyncio) y el modelo de ejecución de Django ORM sin provocar bloqueos en el Event Loop.',
      'Asegurar tiempos de respuesta inferiores a 40ms en picos de alta concurrencia de pedidos en cocina y salón.',
      'Garantizar la consistencia transaccional y validación exhaustiva de pedidos complejos con modificadores e ingredientes personalizados.'
    ],
    results: [
      'Reducción de hasta un 45% en los tiempos de respuesta de endpoints transaccionales frente a implementaciones monolíticas tradicionales.',
      'Validación de datos a prueba de inconsistencias gracias al tipado estricto de Pydantic.',
      'Especificación OpenAPI 100% tipada que simplifica y acelera la integración con clientes frontend y móviles.'
    ],
    tags: ['FastAPI', 'Django REST', 'PostgreSQL', 'Python', 'JWT', 'Pydantic', 'OpenAPI'],
    repo: 'https://github.com/YEYE2e/API-Restaurante',
    link: 'https://github.com/YEYE2e/API-Restaurante'
  },
  {
    id: 'concurrencia-benchmarking',
    number: '02/',
    title: 'Motor de Concurrencia y Benchmarking de Algoritmos',
    category: 'Sistemas, Algoritmos & Concurrencia',
    role: 'Systems & Algorithms Developer',
    year: '2025',
    description:
      'Entorno de pruebas empíricas multihilo para evaluar y comparar la eficiencia de algoritmos de ordenamiento (QuickSort, MergeSort, RadixSort) en procesadores multinúcleo.',
    longDescription:
      'Plataforma de experimentación y evaluación de rendimiento computacional desarrollada en Java. Diseñada para medir con precisión nanosegundos el impacto de la concurrencia, el paralelismo a nivel de hilos y el balanceo de carga en algoritmos clásicos de ordenamiento ejecutándose sobre procesadores modernos con múltiples núcleos físicos y lógicos.',
    architecture: [
      'Framework paralelo basado en Java ForkJoinPool implementando el modelo divide y vencerás (Divide and Conquer) con algoritmo de robo de trabajo (work-stealing).',
      'Patrón de diseño Estrategia (Strategy Pattern) para desacoplar y comparar de forma modular implementaciones secuenciales vs paralelas.',
      'Módulo de medición temporal de alta precisión con System.nanoTime() y monitoreo del recolector de basura (JVM Garbage Collector).',
      'Generador determinista de datasets sintéticos con distribuciones aleatorias, casi ordenadas, invertidas y con alta redundancia.'
    ],
    challenges: [
      'Determinar el umbral óptimo de subdivisión (forking threshold) para evitar que la sobrecarga de gestión de hilos supere los beneficios del paralelismo en particiones pequeñas.',
      'Mitigar interferencias causadas por las pausas de la recolección de basura (GC pauses) durante las fases de medición intensiva.',
      'Optimizar la contención de memoria en la caché L1/L2/L3 de la CPU entre los hilos del ForkJoinPool.'
    ],
    results: [
      'Aceleración (Speedup) de hasta 3.8x en MergeSort y QuickSort paralelo al ejecutarse en procesadores de 8 núcleos.',
      'Procesamiento y ordenamiento de arrays de más de 10 millones de elementos en tiempos mínimos con balanceo simétrico de carga.',
      'Generación de benchmarks empíricos detallados para validar la correlación entre complejidad asintótica teórica y comportamiento real en hardware.'
    ],
    tags: ['Java', 'ForkJoinPool', 'Multithreading', 'Concurrencia', 'Algoritmos', 'POO'],
    repo: 'https://github.com/YEYE2e/Implementacion_paralela',
    link: 'https://github.com/YEYE2e/Implementacion_paralela'
  },
  {
    id: 'ufc-stats-dashboard',
    number: '03/',
    title: 'UFC Stats Dashboard',
    category: 'Web Application & Data Analytics',
    role: 'Frontend & Data Visualization Engineer',
    year: '2025',
    description:
      'Plataforma web interactiva orientada al análisis y visualización de datos estadísticos de eventos y atletas deportivos en tiempo real.',
    longDescription:
      'Aplicación web moderna orientada a aficionados y analistas de deportes de combate. Ofrece una experiencia analítica inmersiva para explorar historiales de combate, métricas avanzadas de efectividad de golpeo, control en el suelo y comparativas directas cara a cara (Head-to-Head) entre atletas de la UFC con sincronización reactiva.',
    architecture: [
      'Arquitectura de componentes reactivos con React 18 y TypeScript garantizando tipado estricto en toda la capa de visualización.',
      'Sistema de diseño oscuro y componentes responsivos estructurados con Material UI (MUI).',
      'Base de datos NoSQL Cloud Firestore estructurada para consultas filtradas rápidas y suscripciones en tiempo real a eventos.',
      'Gestión de estado cliente optimizada para búsquedas y ordenamientos instantáneos en datasets de múltiples peleadores.'
    ],
    challenges: [
      'Diseñar un esquema no relacional eficiente en Firestore que permita consultas facetadas complejas sin disparar costos por lecturas redundantes.',
      'Garantizar un renderizado fluido a 60 FPS en tablas y gráficos dinámicos de métricas deportivas complejas.',
      'Asegurar compatibilidad y ergonomía táctil en navegación móvil sin comprometer la densidad de datos.'
    ],
    results: [
      'Tiempos de respuesta y renderizado inicial inferiores a 100ms gracias a la desnormalización estratégica en Firestore.',
      'Eliminación total de errores de datos indefinidos o nulos mediante contratos de interfaz rigurosos en TypeScript.',
      'Experiencia de usuario fluida y reactiva tanto en dispositivos móviles como en monitores ultra-wide.'
    ],
    tags: ['React', 'TypeScript', 'Material UI', 'Cloud Firestore', 'NoSQL', 'Analytics'],
    repo: 'https://github.com/YEYE2e/Dashboard-UFC',
    link: 'https://github.com/YEYE2e/Dashboard-UFC'
  },
  {
    id: 'livesync-dev',
    number: '04/',
    title: 'LiveSyncDev – Colaboración de Código en Tiempo Real',
    category: 'Herramienta Colaborativa Distribuida',
    role: 'Fullstack & Real-time Systems Developer',
    year: '2024 – 2025',
    description:
      'Herramienta de transmisión de código y colaboración remota basada en sockets bidireccionales de baja latencia para sincronización concurrente entre clientes.',
    longDescription:
      'Solución ligera para sesiones de pair-programming, mentorías y revisión de código a distancia. Permite a varios desarrolladores conectarse a una misma sala virtual, observar cambios en tiempo real con resaltado de sintaxis y compartir comentarios técnicos con un retardo imperceptible.',
    architecture: [
      'Servidor de eventos en Node.js con WebSockets para gestión de salas (rooms) y difusión de eventos (broadcast) a clientes conectados.',
      'Cliente web ligero en JavaScript modular con editor de código embebido y buffers de sincronización.',
      'Mecanismo de detección de presencia, latencia y reconexión automática transparente ante intermitencias de red.',
      'Arquitectura orientada a eventos con payloads JSON minimizados para garantizar un ancho de banda sumamente bajo.'
    ],
    challenges: [
      'Minimizar el lag perceptible entre el tecleo de un usuario y la actualización en pantalla de los observadores (<30ms).',
      'Prevenir condiciones de carrera y sobrescritura de texto concurrente durante ediciones simultáneas.',
      'Gestionar de forma segura el ciclo de vida de conexiones persistentes para evitar fugas de memoria en el servidor Node.js.'
    ],
    results: [
      'Transmisión bidireccional estable con latencia sub-35ms en pruebas de estrés concurrentes.',
      'Aislamiento completo entre múltiples salas de colaboración activas simultáneamente.',
      'Estructura modular lista para integrar soporte de persistencia o diffs basados en CRDTs/OT.'
    ],
    tags: ['JavaScript', 'WebSockets', 'Node.js', 'Concurrencia', 'Event-Driven', 'Tiempo Real'],
    repo: 'https://github.com/YEYE2e/LiveSyncDev',
    link: 'https://github.com/YEYE2e/LiveSyncDev'
  }
];

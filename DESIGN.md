<!-- SEED: established with the user before implementation; re-run /impeccable document once there's code to capture the actual tokens and components. -->

# Design System: Mi-WP Portfolio

## Overview

**Creative North Star: "The Modern Engineer's Console"**

Un portafolio diseñado como una consola técnica de alta fidelidad, refinada para el mercado moderno. A diferencia de las plantillas tradicionales con animaciones ruidosas o tipografías excesivamente "geek", este sistema se enfoca en la limpieza extrema, la precisión de los datos y una interactividad sofisticada caracterizada por zoom y transiciones fluidas de escenas.

**Key Characteristics:**
- Fondo negro puro (`#000000`) para máxima profundidad visual.
- Acentos verde-cyan vibrantes pero controlados.
- Transiciones fluidas con efectos de zoom y escala al cambiar de sección o escena.
- Grillas limpias y tipografía de alto contraste.

## Colors

El esquema de colores utiliza un tema ultra-oscuro de alto contraste con un acento tecnológico vibrante.

### Primary
- **Active Cyan-Green** (`#00F5A0`): Utilizado como acento de estado y enfoque interactivo. Representa estados activos, exitosos y elementos interactivos clave.

### Neutral
- **Deep Black** (`#000000`): El color de fondo principal y exclusivo para crear un lienzo infinito y minimalista.
- **Pure White** (`#FFFFFF`): Color primario para texto de lectura principal, asegurando el máximo contraste y legibilidad.
- **Muted Steel** (`#334155`): Para líneas divisorias de grilla de 1px y textos secundarios o deshabilitados.

**The Contrast Constraint Rule.** El acento Active Cyan-Green debe usarse en menos del 15% de la superficie visual para mantener su impacto y evitar sobrecargar la vista.

## Typography

**Display Font:** Outfit (o system sans-serif como fallback)
**Body Font:** Inter (o system sans-serif)
**Label/Mono Font:** Space Mono (para números, etiquetas y métricas técnicas)

### Hierarchy
- **Display** (700, clamp(2.5rem, 7vw, 4.5rem), 1.1): Para títulos principales y el nombre del autor.
- **Headline** (600, 2rem, 1.2): Para títulos de sección principales.
- **Title** (500, 1.25rem, 1.3): Para títulos de tarjetas o proyectos.
- **Body** (400, 1rem, 1.6): Para texto descriptivo general y "sobre mí".
- **Label** (500, 0.75rem, 0.05em, uppercase): Para etiquetas técnicas, estados y tecnologías.

## Layout

Estructura responsiva basada en una grilla técnica fluida con bordes finos de 1px.
Al desplazarse o interactuar entre secciones, el layout responde con transiciones de escala y transformaciones 3D sutiles (como zoom-out de la escena anterior y zoom-in de la nueva), emulando una experiencia inmersiva de cámara web moderna.

## Elevation & Depth

El sistema es plano por defecto en reposo, confiando en las líneas divisorias de grilla. La profundidad se introduce de forma dinámica mediante luz de acento (glow) detrás de elementos seleccionados o activos y transformaciones tridimensionales de escala en hover y scroll.

**The Active Depth Rule.** Las sombras no se usan para elevar tarjetas; en su lugar, se usa un resplandor interno (box-shadow cyan-green difuso) para indicar el foco o estado activo.

## Shapes

- **Bordes y Esquinas**: Esquinas ligeramente redondeadas en tarjetas y botones (`8px` de radio) para suavizar la estética técnica sin perder rigidez.
- **Líneas divisorias**: Bordes de `1px solid #334155` para delimitar zonas y secciones.

## Do's and Don'ts

### Do:
- **Do** usar la animación de zoom y escalado en las transiciones de scroll para dar una sensación de fluidez y modernidad.
- **Do** emplear tipografía monoespaciada exclusivamente para números, etiquetas de tecnologías o indicadores de estado.
- **Do** asegurar que el fondo negro permanezca negro puro (`#000000`).

### Don't:
- **Don't** saturar el sitio con elementos verdes/cyan; el acento debe ser sutil y preciso.
- **Don't** usar sombras tradicionales de color gris o negro sobre fondo negro; usa tonalidades de borde o resplandores de luz para crear profundidad.

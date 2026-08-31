/**
 * Interactive Logic: TypeScript Edition
 * Controls:
 * 1. Particle Constellation Mesh (Canvas 2D, battery-optimized, touch & mouse reactive)
 * 2. Smooth Scroll Reveal (IntersectionObserver)
 * 3. Autohiding Navigation Header with Scroll-Spy
 * 4. Ambient Glow & Vertical Line Follower
 * 5. Card Spotlight Micro-interaction
 * 6. Project Accordion Expansion
 */

export function initPortfolioInteractions(): void {
  setupScrollReveal();
  setupNavigationAndHeader();
  setupInteractiveGlowAndLines();
  setupProjectRowToggles();
  setupSpotlightEffect();
  setupParticleCanvas();
}

/**
 * 1. Particle Constellation Mesh (Canvas 2D)
 */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

function setupParticleCanvas(): void {
  const canvas = document.querySelector<HTMLCanvasElement>('#particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  // Respect reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    canvas.style.display = 'none';
    return;
  }

  let animationFrameId: number | null = null;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles: Particle[] = [];

  const mouse = {
    x: -1000,
    y: -1000,
    radius: 140,
    isActive: false
  };

  const colors = [
    'rgba(0, 245, 160, ',   // Mint cyan
    'rgba(6, 182, 212, ',   // Cyan
    'rgba(110, 231, 183, '  // Soft green
  ];

  function resize(): void {
    if (!canvas) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    createParticles();
  }

  function createParticles(): void {
    const isMobile = width < 768;
    // Lower count on mobile for 60fps & battery saving
    const count = isMobile ? Math.floor(width / 26) : Math.floor(width / 18);
    particles = [];

    for (let i = 0; i < count; i++) {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      const baseAlpha = Math.random() * 0.45 + 0.15;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.6),
        vy: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.6),
        radius: Math.random() * 1.5 + 1,
        baseAlpha,
        color: colorBase
      });
    }
  }

  function render(): void {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    const isMobile = width < 768;
    const maxDistance = isMobile ? 85 : 125;
    const maxDistSq = maxDistance * maxDistance;
    const mouseRadiusSq = mouse.radius * mouse.radius;

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Bounce on edges
      if (p.x < 0) { p.x = 0; p.vx *= -1; }
      else if (p.x > width) { p.x = width; p.vx *= -1; }

      if (p.y < 0) { p.y = 0; p.vy *= -1; }
      else if (p.y > height) { p.y = height; p.vy *= -1; }

      // Mouse interaction (soft attraction / connect)
      if (mouse.isActive) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < mouseRadiusSq) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / mouse.radius) * 0.02;
          p.vx += dx * force * 0.1;
          p.vy += dy * force * 0.1;

          // Limit max velocity
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          const maxSpeed = 1.2;
          if (speed > maxSpeed) {
            p.vx = (p.vx / speed) * maxSpeed;
            p.vy = (p.vy / speed) * maxSpeed;
          }

          // Line to mouse cursor
          const lineAlpha = (1 - dist / mouse.radius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 245, 160, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${p.baseAlpha})`;
      ctx.fill();

      // Connect with neighbor particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDistSq) {
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / maxDistance) * 0.22;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 245, 160, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(render);
  }

  function startAnimation(): void {
    if (!animationFrameId) {
      render();
    }
  }

  function stopAnimation(): void {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  // Event Listeners
  window.addEventListener('resize', resize, { passive: true });

  window.addEventListener('mousemove', (e: MouseEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.isActive = true;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.isActive = false;
  });

  window.addEventListener('touchmove', (e: TouchEvent) => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
      mouse.isActive = true;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.isActive = false;
  });

  // Battery and background tab optimization
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAnimation();
    } else {
      startAnimation();
    }
  });

  // Initialize
  resize();
  startAnimation();
}

/**
 * 2. Reveal sections with zoom & fade as they scroll into view
 */
function setupScrollReveal(): void {
  const revealElements = document.querySelectorAll<HTMLElement>('.scroll-reveal');
  if (!revealElements.length) return;

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

/**
 * 3. Autohiding header and navigation scroll-spy
 */
function setupNavigationAndHeader(): void {
  const header = document.querySelector<HTMLElement>('.console-header');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
  const sections = document.querySelectorAll<HTMLElement>('.scroll-section');

  if (!header || !navLinks.length || !sections.length) return;

  let lastScrollY = window.scrollY;

  window.addEventListener(
    'scroll',
    () => {
      const currentScrollY = window.scrollY;

      // Autohide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        header.classList.add('header-hidden');
      } else {
        header.classList.remove('header-hidden');
      }
      lastScrollY = currentScrollY;

      // Scroll Spy active section
      let activeSectionId = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          activeSectionId = section.getAttribute('id') || '';
        }
      });

      if (activeSectionId) {
        navLinks.forEach((link) => {
          const targetHref = link.getAttribute('href')?.replace('#', '');
          if (targetHref === activeSectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    },
    { passive: true }
  );
}

/**
 * 4. Glow Orb follower and interactive vertical lines movement with lerp
 */
function setupInteractiveGlowAndLines(): void {
  const glowOrb = document.querySelector<HTMLElement>('.glow-orb');
  const lineV1 = document.querySelector<HTMLElement>('.bg-line-v.v1');
  const lineV2 = document.querySelector<HTMLElement>('.bg-line-v.v2');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let orbX = mouseX;
  let orbY = mouseY;

  window.addEventListener('mousemove', (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const width = window.innerWidth;
    const shiftRatio = (e.clientX - width / 2) / (width / 2); // -1 to 1
    const maxShift = 20;

    if (lineV1) lineV1.style.transform = `translateX(${shiftRatio * maxShift}px)`;
    if (lineV2) lineV2.style.transform = `translateX(${shiftRatio * maxShift}px)`;
  }, { passive: true });

  function animateOrb(): void {
    if (glowOrb) {
      orbX += (mouseX - orbX) * 0.05;
      orbY += (mouseY - orbY) * 0.05;
      glowOrb.style.left = `${orbX - 250}px`;
      glowOrb.style.top = `${orbY - 250}px`;
    }
    requestAnimationFrame(animateOrb);
  }

  animateOrb();
}

/**
 * 5. Card Spotlight Micro-interaction
 */
function setupSpotlightEffect(): void {
  const cards = document.querySelectorAll<HTMLElement>('.clean-trait-row, .project-row-item');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/**
 * 6. Handle project list rows details expanding on click or keyboard activation
 */
function setupProjectRowToggles(): void {
  const projectRows = document.querySelectorAll<HTMLElement>('.project-row-item');

  const toggleRow = (row: HTMLElement): void => {
    const isActive = row.classList.contains('active-row');

    // Close other rows first
    projectRows.forEach((r) => {
      r.classList.remove('active-row');
      r.setAttribute('aria-expanded', 'false');
    });

    // Toggle current row
    if (!isActive) {
      row.classList.add('active-row');
      row.setAttribute('aria-expanded', 'true');
    }
  };

  projectRows.forEach((row) => {
    row.addEventListener('click', () => toggleRow(row));

    row.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleRow(row);
      }
    });
  });
}

// Auto-run on DOM ready or client-side navigation
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolioInteractions);
  } else {
    initPortfolioInteractions();
  }
}

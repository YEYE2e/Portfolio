/**
 * Interactive Logic: TypeScript Edition
 * Controls smooth scroll reveal, dynamic glowing follower, background lines shift,
 * autohiding navigation header with scroll-spy, and project accordion interaction.
 */

export function initPortfolioInteractions(): void {
  setupScrollReveal();
  setupNavigationAndHeader();
  setupInteractiveGlowAndLines();
  setupProjectRowToggles();
}

/**
 * Reveal sections with zoom & fade as they scroll into view
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
 * Autohiding header and navigation scroll-spy
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
 * Glow Orb follower and interactive vertical lines movement with lerp
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

    // Subtle background lines displacement based on mouse X
    const width = window.innerWidth;
    const shiftRatio = (e.clientX - width / 2) / (width / 2); // -1 to 1
    const maxShift = 20; // max displacement in pixels

    if (lineV1) lineV1.style.transform = `translateX(${shiftRatio * maxShift}px)`;
    if (lineV2) lineV2.style.transform = `translateX(${shiftRatio * maxShift}px)`;
  });

  // Smooth lerp loop for the glow orb
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
 * Handle project list rows details expanding on click or keyboard activation
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

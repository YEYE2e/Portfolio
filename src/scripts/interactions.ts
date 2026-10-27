/** Page-scoped enhancements: all content and links work without JavaScript. */
let cleanup: (() => void) | undefined;
function initPortfolioInteractions(): void {
  cleanup?.();
  const controller = new AbortController();
  const { signal } = controller;
  const search = document.querySelector<HTMLInputElement>('#project-search');
  const rows = [...document.querySelectorAll<HTMLElement>('[data-project-id]')];
  const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const filterProjects = () => {
    const query = normalize(search?.value.trim() ?? '');
    let count = 0;
    rows.forEach(row => {
      row.hidden = !normalize(row.dataset.search ?? '').includes(query);
      if (!row.hidden) count++;
    });
    const status = document.querySelector('#project-count');
    if (status) status.textContent = `${count} de ${rows.length} proyectos`;
    const empty = document.querySelector<HTMLElement>('#project-empty');
    if (empty) empty.hidden = count > 0;
  };
  const tools = document.querySelector<HTMLElement>('.project-tools');
  if (tools) tools.hidden = false;
  search?.addEventListener('input', filterProjects, { signal });
  filterProjects();
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-section]')];
  const sections = [...document.querySelectorAll<HTMLElement>('main section[id]')];
  const updateNav = () => {
    const current = sections.filter(section => section.getBoundingClientRect().top <= 180).at(-1);
    links.forEach(link => {
      if (link.dataset.section === current?.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  window.addEventListener('scroll', updateNav, { passive: true, signal });
  updateNav();
  cleanup = () => controller.abort();
  setupContactForm();
}

function setupContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('#contact-form');
  const statusMsg = document.querySelector<HTMLElement>('#form-status');
  if (!form) return;

  // Evitar adjuntar múltiples listeners al mismo formulario
  if (form.dataset.listenerAttached === 'true') return;
  form.dataset.listenerAttached = 'true';

  let isSubmitting = false;

  form.addEventListener('submit', async (e: Event) => {
    e.preventDefault();
    if (isSubmitting) return;

    const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const nameInput = form.querySelector<HTMLInputElement>('#name');
    const emailInput = form.querySelector<HTMLInputElement>('#email');
    const messageInput = form.querySelector<HTMLTextAreaElement>('#message');

    if (!nameInput || !emailInput || !messageInput) return;

    // Basic validation
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      if (statusMsg) {
        statusMsg.textContent = 'Por favor, completa todos los campos requeridos.';
        statusMsg.className = 'form-status status-error';
      }
      return;
    }

    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      if (statusMsg) {
        statusMsg.textContent = 'Por favor, introduce un correo electrónico válido.';
        statusMsg.className = 'form-status status-error';
      }
      return;
    }

    // Set loading state
    isSubmitting = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando mensaje...';
    }
    if (statusMsg) {
      statusMsg.textContent = 'Procesando envío...';
      statusMsg.className = 'form-status status-loading';
    }

    try {
      const formData = new FormData(form);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
        signal: AbortSignal.timeout(15000),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (statusMsg) {
          statusMsg.textContent = '✓ ¡Mensaje enviado con éxito! Te responderé a la brevedad.';
          statusMsg.className = 'form-status status-success';
        }
        form.reset();
      } else {
        throw new Error(data.message || 'Error en el servidor');
      }
    } catch {
      if (statusMsg) {
        statusMsg.textContent = 'Error al enviar el mensaje. Puedes escribirme directamente por email.';
        statusMsg.className = 'form-status status-error';
      }
    } finally {
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Mensaje →';
      }
    }
  });
}

document.addEventListener('astro:page-load', initPortfolioInteractions);
document.addEventListener('astro:before-swap', () => cleanup?.());

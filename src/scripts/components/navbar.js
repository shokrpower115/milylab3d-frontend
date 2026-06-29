// =============================================
//  MilyLab — Componente Navbar
//  Maneja: menú hamburguesa, scroll activo,
//  highlight de sección actual.
// =============================================

export function initNavbar() {
  const navbar   = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const links    = document.querySelector('.navbar__links');

  // Menú hamburguesa (móvil)
  hamburger?.addEventListener('click', () => {
    links?.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', links?.classList.contains('open'));
  });

  // Cerrar menú al elegir una opción
  links?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });

  // Cambiar fondo al hacer scroll
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Resaltar enlace activo según sección visible
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.navbar__links a').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));
}

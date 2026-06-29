// =============================================
//  MilyLab — Funciones de utilidad general
// =============================================

// Activa animaciones fade-up al hacer scroll
export function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

// Formatea un número como precio en MXN
export function formatPrice(amount) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
  }).format(amount);
}

// Trunca texto largo
export function truncate(text, maxLength = 80) {
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}

// Debounce para eventos que disparan muchas veces (resize, scroll, input)
export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

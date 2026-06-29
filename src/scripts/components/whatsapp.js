// =============================================
//  MilyLab — Componente WhatsApp flotante
//  Genera el link de WhatsApp con mensaje
//  predefinido desde config.js
// =============================================

import CONFIG from '../utils/config.js';

export function initWhatsApp(customMessage = null) {
  const btn = document.querySelector('.whatsapp-float');
  if (!btn) return;

  const msg = encodeURIComponent(customMessage || CONFIG.contact.whatsappMessage);
  const url = `https://wa.me/${CONFIG.contact.whatsapp}?text=${msg}`;

  btn.addEventListener('click', () => window.open(url, '_blank'));
}

// Abre WhatsApp con un mensaje personalizado (ej: desde formulario de cotización)
export function openWhatsApp(message) {
  const msg = encodeURIComponent(message);
  const url = `https://wa.me/${CONFIG.contact.whatsapp}?text=${msg}`;
  window.open(url, '_blank');
}

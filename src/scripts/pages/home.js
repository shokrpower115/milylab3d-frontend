// =============================================
//  MilyLab — Página de inicio (index.html)
//  Punto de entrada: inicializa todos los
//  componentes necesarios para el landing.
// =============================================

import { initNavbar }           from '../components/navbar.js';
import { initWhatsApp }         from '../components/whatsapp.js';
import { initScrollAnimations } from '../utils/helpers.js';
import { HeroCarousel }         from '../components/hero-carousel.js';
import { Gallery }              from '../components/gallery.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initWhatsApp();
  initScrollAnimations();

  // Inicializar carrusel del hero
  // NOTA: Agregar las URLs de las imágenes en public/images/hero/
  const heroImageUrls = [
    'images/hero/booble_c.png',
    'images/hero/combo_peach_c.png',
    'images/hero/Cubo_mario_c.png',
    'images/hero/portal_lata_c.png',
    // Agregar más imágenes según sea necesario
  ];

  const gallery = new Gallery('[data-gallery]');
  gallery.init();

  const heroCarousel = new HeroCarousel('[data-carousel]', heroImageUrls);

  // TODO: inicializar galería de productos cuando esté listo el catálogo
   //initGallery();
});

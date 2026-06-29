/**
 * Hero Carousel - Carrusel de imágenes de fondo para la sección hero
 * Autoplay cada 5 segundos con fade smoothly entre slides
 * Respeta prefers-reduced-motion para accesibilidad
 */

export class HeroCarousel {
  constructor(carouselSelector = '[data-carousel]', imageUrls = []) {
    this.carouselElement = document.querySelector(carouselSelector);
    this.imageUrls = imageUrls;
    this.currentIndex = 0;
    this.slides = [];
    this.autoplayInterval = null;
    this.isAutoplayPaused = false;
    this.autoplayDuration = 5000; // 5 segundos

    if (this.carouselElement && this.imageUrls.length > 0) {
      this.init();
    }
  }

  /**
   * Inicializa el carrusel
   */
  init() {
    this.createSlides();
    this.showSlide(0);
    this.startAutoplay();
    this.addEventListeners();
  }

  /**
   * Crea los elementos de slide
   */
  createSlides() {
    this.imageUrls.forEach((url) => {
      const slide = document.createElement('div');
      slide.className = 'hero__slide';
      slide.style.backgroundImage = `url('${url}')`;
      this.carouselElement.appendChild(slide);
      this.slides.push(slide);
    });
  }

  /**
   * Muestra un slide específico
   */
  showSlide(index) {
    // Remover clase active de todos los slides
    this.slides.forEach((slide) => slide.classList.remove('is-active'));

    // Agregar clase active al slide actual
    if (this.slides[index]) {
      this.slides[index].classList.add('is-active');
      this.currentIndex = index;
    }
  }

  /**
   * Pasa al siguiente slide
   */
  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(nextIndex);
  }

  /**
   * Inicia el autoplay
   */
  startAutoplay() {
    // Respetar prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (this.autoplayInterval) clearInterval(this.autoplayInterval);
    this.isAutoplayPaused = false;

    this.autoplayInterval = setInterval(() => {
      if (!this.isAutoplayPaused) {
        this.nextSlide();
      }
    }, this.autoplayDuration);
  }

  /**
   * Pausa el autoplay
   */
  pauseAutoplay() {
    this.isAutoplayPaused = true;
  }

  /**
   * Reanuda el autoplay
   */
  resumeAutoplay() {
    this.isAutoplayPaused = false;
  }

  /**
   * Detiene el autoplay
   */
  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  /**
   * Agrega event listeners
   */
  addEventListeners() {
    // Pausa en hover (opcional)
    if (this.carouselElement) {
      this.carouselElement.addEventListener('mouseenter', () => {
        this.pauseAutoplay();
      });

      this.carouselElement.addEventListener('mouseleave', () => {
        this.resumeAutoplay();
      });

      // Soporte para touch (opcional)
      this.carouselElement.addEventListener('touchstart', () => {
        this.pauseAutoplay();
      });

      this.carouselElement.addEventListener('touchend', () => {
        this.resumeAutoplay();
      });
    }
  }

  /**
   * Destruye el carrusel
   */
  destroy() {
    this.stopAutoplay();
    this.carouselElement = null;
    this.slides = [];
  }
}

export default HeroCarousel;

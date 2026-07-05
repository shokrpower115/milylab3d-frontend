import CONFIG from '../utils/config.js';

export class Gallery {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.productos = [];
    }

    async init() {
        await this.fetchProductos();
        this.render();
    }

    async fetchProductos() {
        try {
            const response = await fetch(`${CONFIG.API_URL}/Productos`);
            if (!response.ok) throw new Error('Error al obtener productos');
            this.productos = await response.json();
        } catch (error) {
            console.error('Error:', error);
            this.productos = [];
        }
    }

    render() {
        if (!this.container) return;

        if (this.productos.length === 0) {
            this.container.innerHTML = `
                <p class="gallery__empty">No hay productos disponibles.</p>
            `;
            return;
        }

        this.container.innerHTML = `
            <div class="gallery__carrusel">
                <button class="gallery__btn gallery__btn--prev" id="btnPrev">&#8249;</button>
                <div class="gallery__track" id="galleryTrack">
                    ${this.productos.map(p => this.renderCard(p)).join('')}
                </div>
                <button class="gallery__btn gallery__btn--next" id="btnNext">&#8250;</button>
            </div>
        `;

        this.initCarrusel();
    }

    renderCard(producto) {
        return `
            <div class="gallery__card">
                <img 
                    src="${producto.imagenUrl}" 
                    alt="${producto.nombre}"
                    class="gallery__img"
                    onerror="this.onerror=null; this.src='images/hero/booble_c.png'"
                >
                <div class="gallery__info">
                    <span class="gallery__categoria">${producto.categoria}</span>
                    <h3 class="gallery__nombre">${producto.nombre}</h3>
                    <p class="gallery__descripcion">${producto.descripcion}</p>
                    <p class="gallery__precio">$${producto.precio.toFixed(2)} MXN</p>
                    <button class="btn btn--primary gallery__cotizar">
                        Cotizar
                    </button>
                </div>
            </div>
        `;
    }

    initCarrusel() {
        const track = document.getElementById('galleryTrack');
        const btnPrev = document.getElementById('btnPrev');
        const btnNext = document.getElementById('btnNext');
        let currentIndex = 0;
        const totalCards = this.productos.length;

        const updateCarrusel = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        btnNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarrusel();
        });

        btnPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            updateCarrusel();
        });
    }
}
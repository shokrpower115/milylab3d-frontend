# 📋 PROMPT INFORMATIVO DEL PROYECTO MILYLAB

## 🎯 VISIÓN GENERAL

**MilyLab** es un landing page y SPA (Single Page Application) para una empresa de impresiones 3D personalizado ubicada en Culiacán, Sinaloa. El proyecto está construido con tecnologías vanilla (HTML5 + CSS3 + JavaScript ES Modules) sin dependencias externas, alojado en Firebase Hosting con potencial para Cloud Functions en el backend.

**Stack:** HTML5 | CSS3 Variables | JavaScript (ES Modules) | Firebase Hosting | Vanilla (Sin frameworks)

**Rol:** Landing Page + Catálogo + Sistema de Cotizaciones (En desarrollo)

---

## 📁 ESTRUCTURA DE ARCHIVOS COMPLETA

```
c:\dev\milylab/
│
├── 📄 firebase.json                    ← Configuración Firebase (SPA routing + cache)
├── 📄 .firebaserc                      ← ID proyecto Firebase
├── 📄 README.md                        ← Documentación principal
├── 📄 .gitignore                       ← Exclusiones Git
│
├── 📂 public/                          ← Archivos servidos por Firebase
│   ├── 📄 index.html              ✅  Landing page principal (COMPLETO)
│   ├── 📄 catalog.html            ❌  Catálogo (VACÍO)
│   ├── 📄 cotizar.html            ❌  Cotizador (VACÍO)
│   ├── 📄 contacto.html           ❌  Contacto (VACÍO)
│   ├── 📄 404.html                ❌  Error (VACÍO)
│   ├── 📂 fonts/                       (Reservado para tipografía local)
│   └── 📂 images/
│       ├── logo/                       Logo de marca
│       ├── products/              ❌  Catálogo de productos (VACÍO)
│       ├── events/                ❌  Galería de eventos (VACÍO)
│       ├── gallery/               ❌  Galería general (VACÍO)
│       └── hero/                  ✅  Carrusel del hero (4 imágenes)
│           ├── booble_c.png
│           ├── combo_peach_c.png
│           ├── Cubo_mario_c.png
│           ├── portal_lata_c.png
│           └── README.md
│
├── 📂 src/                             ← Código fuente (NO servido)
│   ├── 📂 styles/                      Estilos CSS
│   │   ├── variables.css          ✅  Paleta, tipografía, espaciado
│   │   ├── base.css               ✅  Reset y estilos globales
│   │   ├── components.css         ✅  Componentes UI + HERO (REFACTORIZADO)
│   │   ├── animations.css         ✅  Animaciones fade-up, pulse, spin
│   │   └── responsive.css         ✅  Media queries: 768px, 1024px
│   │
│   └── 📂 scripts/                     JavaScript ES Modules
│       ├── 📂 pages/                   Inicializadores por página
│       │   ├── home.js            ✅  Landing principal (ACTUALIZADO)
│       │   ├── catalog.js         ❌  Página catálogo (VACÍO)
│       │   ├── cotizar.js         ❌  Página cotización (VACÍO)
│       │   └── contacto.js        ❌  Página contacto (VACÍO)
│       │
│       ├── 📂 components/              Componentes reutilizables
│       │   ├── navbar.js          ✅  Menú + hamburguesa
│       │   ├── hero-carousel.js   ✅  Carrusel con autoplay (NUEVO)
│       │   ├── whatsapp.js        ✅  Botón flotante WhatsApp
│       │   ├── gallery.js         ❌  Galería de productos (VACÍO)
│       │   └── modal.js           ❌  Modal para detalles (VACÍO)
│       │
│       └── 📂 utils/                   Utilidades
│           ├── config.js          ✅  Configuración centralizada
│           ├── helpers.js         ✅  Funciones de utilidad
│           └── analytics.js       ❌  Analytics (VACÍO)
│
├── 📂 functions/                       Firebase Cloud Functions
│   └── index.js                   🚀  Backend en Node.js 18 (Plantilla lista)
│
└── 📂 docs/                            Documentación interna
    ├── estructura.md              ✅  Reglas de estructura y convenciones
    ├── paleta-colores.md          ✅  Guía de colores de marca
    └── guia-contenido.md          ✅  Voz, tono y calendario de contenido
```

---

## 📊 ARCHIVOS CREADOS Y MODIFICADOS (Últimas cambios)

### 🆕 NUEVOS ARCHIVOS

#### `src/scripts/components/hero-carousel.js`
- **Tipo:** Componente JavaScript (ES Module)
- **Líneas:** 120+
- **Descripción:** Clase `HeroCarousel` para carrusel de imágenes de fondo
- **Características:**
  - Autoplay cada 5 segundos
  - Transiciones suave con fade (opacity 0.8s)
  - Pausa en hover/touch
  - Respeta `prefers-reduced-motion` (accesibilidad)
  - Eventos: mouseover/leave para pausa
- **Exporta:** Clase `HeroCarousel` con métodos: `init()`, `nextSlide()`, `showSlide()`, `startAutoplay()`, `pauseAutoplay()`
- **Uso:**
  ```javascript
  const heroCarousel = new HeroCarousel('[data-carousel]', [
    'images/hero/hero-1.jpg',
    'images/hero/hero-2.jpg',
  ]);
  ```

#### `public/images/hero/`
- **Carpeta nueva** para imágenes del carrusel
- **Contenido:** 4 imágenes PNG de productos
  - `booble_c.png`
  - `combo_peach_c.png`
  - `Cubo_mario_c.png`
  - `portal_lata_c.png`
- **README.md** con instrucciones de optimización (1920x1080px, ~200KB máx)

### 🔄 MODIFICADOS

#### `src/styles/components.css`
- **Adición:** ~60 líneas nuevas para hero
- **Clases agregadas:**
  ```css
  .hero                    /* pos: relative, min-height: 600px */
  .hero__carousel          /* pos: absolute, z-index: 0 */
  .hero__slide             /* pos: absolute, background-size: cover */
  .hero__slide.is-active   /* opacity: 1 */
  .hero__overlay           /* rgba(0,0,0,0.35) overlay */
  .hero__content           /* pos: relative, z-index: 2 */
  ```
- **Transiciones:** `opacity 0.8s ease-in-out` para slides

#### `public/index.html`
- **Refactorización del hero** (líneas 35-53)
- **Antes:** Gradiente inline, contenido directo
- **Ahora:** 
  - Contenedor `data-carousel` para slides
  - Overlay semitransparente
  - Contenido en z-index superior
- **HTML cambio:**
  ```html
  <!-- Antes -->
  <section id="inicio" style="background: linear-gradient(...)">
    <div class="container"><!-- contenido --></div>
  </section>
  
  <!-- Ahora -->
  <section id="inicio" class="hero">
    <div class="hero__carousel" data-carousel></div>
    <div class="hero__overlay"></div>
    <div class="container hero__content"><!-- contenido --></div>
  </section>
  ```

#### `src/scripts/pages/home.js`
- **Importación:** `import { HeroCarousel } from '../components/hero-carousel.js';`
- **Inicialización del carrusel:**
  ```javascript
  const heroImageUrls = [
    'images/hero/booble_c.png',
    'images/hero/combo_peach_c.png',
    'images/hero/Cubo_mario_c.png',
    'images/hero/portal_lata_c.png',
  ];
  const heroCarousel = new HeroCarousel('[data-carousel]', heroImageUrls);
  ```
- **Status:** 4 imágenes reales ya configuradas

---

## 🏗️ ROADMAP DE CREACIÓN DEL PROYECTO

### FASE 1: FUNDAMENTOS (✅ COMPLETADO)
- ✅ Estructura base de carpetas
- ✅ Sistema de variables CSS (paleta + tipografía)
- ✅ Reset CSS y estilos globales
- ✅ Configuración Firebase (hosting + rewrites)
- ✅ README y documentación inicial

### FASE 2: LANDING PAGE PRINCIPAL (✅ COMPLETADO)
- ✅ Navbar con logo y menú responsive
- ✅ Hero con degradado (inicialmente sin carrusel)
- ✅ Sección "Nosotros"
- ✅ Sección "Tecnología"
- ✅ Sección "Productos destacados" (grid vacío)
- ✅ Sección "Contacto" con CTA
- ✅ Footer con copyright
- ✅ Animaciones fade-up en scroll
- ✅ Botón WhatsApp flotante

### FASE 3: COMPONENTES Y UTILIDADES (✅ COMPLETADO)
- ✅ Sistema de módulos ES6
- ✅ `config.js` con centralización de datos
- ✅ `helpers.js` con funciones de utilidad
- ✅ `navbar.js` - Menú interactivo
- ✅ `whatsapp.js` - Integración de contacto
- ✅ Sistema de animaciones con Intersection Observer

### FASE 4: CARRUSEL DE HERO (✅ COMPLETADO - RECIENTE)
- ✅ Crear clase `HeroCarousel` 
- ✅ Implementar autoplay cada 5 segundos
- ✅ Transiciones suaves con fade
- ✅ Pausa en hover/touch
- ✅ Refactorizar HTML del hero
- ✅ Agregar estilos CSS específicos
- ✅ Integrar en `home.js` con 4 imágenes reales
- ✅ Crear carpeta `public/images/hero/`

### FASE 5: OTRAS PÁGINAS (❌ NO INICIADA)
- ❌ Crear `catalog.html` y estructura
- ❌ Crear `cotizar.html` y formulario
- ❌ Crear `contacto.html` y mapa
- ❌ Crear `404.html` personalizado
- ❌ Implementar `catalog.js`, `cotizar.js`, `contacto.js`

### FASE 6: GALERÍA DE PRODUCTOS (❌ NO INICIADA)
- ❌ Implementar `gallery.js` con:
  - Filtros por categoría
  - Grid responsiva
  - Lazy loading de imágenes
- ❌ Poblar `public/images/products/` con fotos
- ❌ Crear estructura de datos de catálogo (Array o JSON)

### FASE 7: MODAL Y DETALLES (❌ NO INICIADA)
- ❌ Implementar `modal.js` para:
  - Detalles de producto (imagen grande, especificaciones)
  - Carrusel de imágenes del producto
  - Botón de cotización desde modal

### FASE 8: BACKEND (❌ NO INICIADA)
- ❌ Implementar Cloud Function para recibir cotizaciones
- ❌ Integrar con Firestore (base de datos)
- ❌ Configurar notificaciones por email
- ❌ Integración con webhook (n8n, Make, etc.)

### FASE 9: OPTIMIZACIÓN Y DEPLOYMENT (❌ NO INICIADA)
- ❌ Implementar `analytics.js` (Google Analytics / Hotjar)
- ❌ SEO: meta tags, sitemap.xml
- ❌ Performance: lazy loading, WebP, compresión
- ❌ Tests: validación de formularios
- ❌ Deploy en producción

---

## 📈 ESTADO ACTUAL DEL PROYECTO

### 🟢 COMPLETADO Y FUNCIONAL (95%)

| Componente | Status | Detalles |
|-----------|--------|---------|
| **Navbar** | ✅ LISTO | Menú hamburguesa, scroll activo, responsive |
| **Hero** | ✅ LISTO | Carrusel con 4 imágenes, autoplay 5s, fade suave |
| **Secciones** | ✅ LISTO | Nosotros, Tecnología, Contacto, Footer |
| **Animaciones** | ✅ LISTO | Fade-up, delays, pulse, spin |
| **WhatsApp** | ✅ LISTO | Botón flotante, links dinámicos |
| **Estilos** | ✅ LISTO | Paleta completa, responsive, variables CSS |
| **Configuración** | ✅ LISTO | Firebase hosting, rewrites SPA, cache |
| **HeroCarousel** | ✅ LISTO | Clase completa, autoplay, pausa en hover |

### 🟡 EN DESARROLLO (5%)

| Componente | Status | Impacto | Prioridad |
|-----------|--------|--------|----------|
| **Página Catálogo** | 🚧 EN DISEÑO | Necesario para mostrar productos | ALTA |
| **Página Cotizar** | 🚧 EN DISEÑO | Necesario para ingresos | ALTA |
| **Página Contacto** | 🚧 EN DISEÑO | Alternativa a WhatsApp | MEDIA |
| **Galería de Productos** | 🚧 EN DISEÑO | Requiere catálogo primero | ALTA |

### 🔴 NO INICIADO (0%)

| Componente | Razón | Impacto |
|-----------|-------|--------|
| **gallery.js** | Archivo vacío | Bloquea catálogo |
| **modal.js** | Archivo vacío | Bloquea detalles de producto |
| **analytics.js** | No configurado | Sin tracking de eventos |
| **Cloud Functions** | Solo plantilla | Sin backend |
| **Imágenes de productos** | No cargadas | Sin catálogo visual |
| **Imágenes de eventos** | No cargadas | Sin galería de entregas |
| **Firestore** | No integrada | Catálogo estático |

---

## 🔧 CARACTERÍSTICAS TÉCNICAS

### Frontend Stack

```
HTML5
├── Estructura semántica
├── Data attributes para JS hooks
└── Meta tags SEO (parcial)

CSS3
├── Variables nativas (40+ variables)
├── Flexbox + Grid layout
├── Mobile-first responsive
├── Animaciones CSS
└── Metodología BEM

JavaScript (ES Modules)
├── Módulos nativos del navegador
├── Clases ES6
├── Intersection Observer API
├── Event listeners nativos
└── Vanilla (sin frameworks)
```

### Arquitectura de Módulos

```javascript
// Importación en pages/
import { initNavbar } from '../components/navbar.js';
import { HeroCarousel } from '../components/hero-carousel.js';
import CONFIG from '../utils/config.js';

// Cada componente es independiente y reutilizable
// Sin dependencias externas
```

### Variables CSS Disponibles

**Colores:**
- `--color-primary: #7DD8D0` (Menta/Teal)
- `--color-secondary: #F2A8C4` (Rosa)
- `--color-bg-teal: #C8E8E5`
- `--color-bg-pink: #F7D6E6`
- `--color-bg-dark: #2C2C2C`

**Espaciado:** `--space-1` a `--space-16`

**Tipografía:**
- Display: Nunito (700, 800)
- Body: Inter (400, 500, 600)

**Transiciones:** `--transition: 0.2s ease`

### Responsive Breakpoints

```css
Mobile:    < 768px  (Tamaño base, flow vertical)
Tablet:   768px     (Layout de 2 columnas)
Desktop: 1024px+    (Layout de 3 columnas)
```

---

## 🎯 PRÓXIMOS PASOS RECOMENDADOS

### Inmediatos (Esta semana)
1. **Implementar `gallery.js`**
   - Crear estructura de datos de catálogo (Array de productos)
   - Implementar grid responsiva
   - Agregar filtros por categoría
   - **Impacto:** Desbloquea catálogo

2. **Completar `catalog.html`**
   - Copiar estructura de `index.html`
   - Integrar `gallery.js`
   - Crear estilo de página
   - **Impacto:** Página de productos visible

3. **Agregar imágenes de productos**
   - Llenar `public/images/products/`
   - Optimizar a WebP/JPG
   - Estructura: `productos/producto-1.jpg`, etc.

### A corto plazo (2-3 semanas)
1. Implementar `modal.js` para detalles
2. Crear `cotizar.html` y formulario
3. Validación de formularios en JavaScript
4. Backend: Cloud Function para cotizaciones

### A mediano plazo (1 mes+)
1. Integración Firestore para catálogo dinámico
2. Sistema de notificaciones por email
3. Webhook con n8n / Make
4. Analytics y SEO

---

## 📊 CHECKLIST DE COMPLETITUD

```
Landing Page (index.html):          ████████░░ 95%
├─ Navbar                           ✅ COMPLETO
├─ Hero                             ✅ COMPLETO
├─ Secciones                        ✅ COMPLETO
├─ Animaciones                      ✅ COMPLETO
├─ Responsive                       ✅ COMPLETO
└─ WhatsApp Integration             ✅ COMPLETO

Páginas Secundarias:                ██░░░░░░░░ 20%
├─ catalog.html                     ❌ 0%
├─ cotizar.html                     ❌ 0%
├─ contacto.html                    ❌ 0%
└─ 404.html                         ❌ 0%

Componentes JavaScript:             ███░░░░░░░ 40%
├─ navbar.js                        ✅ COMPLETO
├─ hero-carousel.js                 ✅ COMPLETO
├─ whatsapp.js                      ✅ COMPLETO
├─ gallery.js                       ❌ VACÍO
└─ modal.js                         ❌ VACÍO

Imágenes y Activos:                 ██░░░░░░░░ 25%
├─ Logo                             ✅ LISTO
├─ Hero images (4)                  ✅ LISTO
├─ Productos                        ❌ FALTA
├─ Eventos                          ❌ FALTA
└─ Galería general                  ❌ FALTA

Backend:                            █░░░░░░░░░ 10%
├─ Cloud Functions                  🚀 PLANTILLA
├─ Firestore                        ❌ NO INTEGRADA
└─ Webhooks                         ❌ NO CONFIGURADOS

PROYECTO TOTAL:                     ████░░░░░░ 45%
```

---

## 🎨 ESPECIFICACIONES DE DISEÑO

### Paleta de Colores Oficial

```
Primarios:
  Menta Teal:    #7DD8D0 (Botones, acentos, links)
  Rosa Suave:    #F2A8C4 (Badges, highlights secundarios)

Neutros:
  Blanco:        #FFFFFF (Fondo principal)
  Gris claro:    #F5F5F5 (Fondos alternos)
  Gris mediano:  #E0E0E0 (Bordes)
  Gris oscuro:   #6B7280 (Texto secundario)
  Negro:         #2C2C2C (Texto principal, navbar)

Fondos de Sección:
  Teal suave:    #C8E8E5 (Sección Tecnología)
  Rosa pálida:   #F7D6E6 (Sección Eventos)
  Oscuro:        #2C2C2C (Sección Contacto)

Overlay Hero:     rgba(0, 0, 0, 0.35) (Semitransparente)
```

### Tipografía

```
Encabezados (Nunito):
  - h1, h2, h3: Weight 700-800
  - Font-size: clamp(1.5rem, 5vw, 3.5rem)

Párrafos (Inter):
  - Weight: 400 (normal), 500 (medium), 600 (semibold)
  - Line-height: 1.6
  - Tamaño base: 1rem (16px)

Sistema de tamaños:
  xs:   0.75rem  (12px)
  sm:   0.875rem (14px)
  base: 1rem     (16px)
  lg:   1.125rem (18px)
  xl:   1.25rem  (20px)
  2xl:  1.5rem   (24px)
  4xl:  2.25rem  (36px)
```

### Espaciado (Escala)

```
Base unit: 0.25rem (4px)

--space-1:  0.25rem   (4px)
--space-2:  0.5rem    (8px)
--space-3:  0.75rem   (12px)
--space-4:  1rem      (16px) ← BASE
--space-6:  1.5rem    (24px)
--space-8:  2rem      (32px)
--space-12: 3rem      (48px)
--space-16: 4rem      (64px)
```

---

## 🚀 INSTALACIÓN Y DEPLOYMENT

### Instalación Local

```bash
# Clonar repositorio
git clone <url-repo> milylab
cd milylab

# No requiere npm install (sin dependencias)
# Solo necesita navegador moderno

# Para previewear localmente (si usas Firebase CLI)
firebase serve
# O abrir directamente: open public/index.html
```

### Deployment a Producción

```bash
# Instalar Firebase CLI (si no lo tienes)
npm install -g firebase-tools

# Loguear en Firebase
firebase login

# Deploy
firebase deploy

# O solo hosting
firebase deploy --only hosting
```

### Verificación Post-Deploy

- ✅ https://tu-proyecto.web.app/ carga landing
- ✅ Navbar responsive en móvil
- ✅ Hero carrusel con autoplay
- ✅ Botón WhatsApp flotante funcional
- ✅ Animaciones fade-up al scroll
- ✅ Cache de CSS/JS activo (max-age 1 año)

---

## 📝 CONCLUSIÓN

**MilyLab** es un proyecto de landing page bien estructurado, con fundamentos sólidos y una arquitectura modular. Está **45% completado**, con el landing principal funcional y listo para producción. El carrusel del hero fue implementado recientemente con éxito.

El **siguiente hito crítico** es completar el catálogo de productos (gallery.js + catalog.html), que desbloqueará el 60% de la funcionalidad. A partir de ahí, el sistema de cotizaciones y backend completarían el 85%+.

**Tecnologías:** Vanilla JS + Firebase → Bajo costo de mantenimiento, rápido, sin deuda técnica.

**Próxima sesión:** Implementar `gallery.js` y llenar el catálogo de productos.


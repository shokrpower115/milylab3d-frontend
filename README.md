# 🎨 MilyLab 3D — Frontend
Landing page y SPA para MilyLab, empresa de impresión 3D en Culiacán, Sinaloa. Construida con tecnologías vanilla sin dependencias externas.

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|-----------|-----|
| HTML5 | Estructura semántica |
| CSS3 (Variables nativas) | Estilos y diseño |
| JavaScript ES Modules | Lógica e interactividad |
| Vercel | Hosting |

> Sin frameworks. Sin dependencias. Sin npm install.

---

## 📁 Estructura del Proyecto

```
milylab/
├── 📄 vercel.json                  ← Configuración SPA routing
├── 📄 README.md
│
├── 📂 public/                      ← Archivos servidos
│   ├── index.html                  ← Landing page principal ✅
│   ├── catalog.html                ← Catálogo de productos 🔲
│   ├── cotizar.html                ← Formulario de cotización 🔲
│   ├── contacto.html               ← Página de contacto 🔲
│   ├── 404.html                    ← Página de error 🔲
│   └── 📂 images/
│       ├── logo/                   ← Logo de marca
│       └── hero/                   ← Imágenes del carrusel (4 imágenes)
│
├── 📂 src/
│   ├── 📂 styles/
│   │   ├── variables.css           ← Paleta, tipografía, espaciado
│   │   ├── base.css                ← Reset y estilos globales
│   │   ├── components.css          ← Componentes UI + Hero
│   │   ├── animations.css          ← Animaciones fade-up, pulse
│   │   └── responsive.css          ← Media queries 768px, 1024px
│   │
│   └── 📂 scripts/
│       ├── 📂 pages/
│       │   ├── home.js             ← Inicializador landing ✅
│       │   ├── catalog.js          ← Página catálogo 🔲
│       │   ├── cotizar.js          ← Página cotización 🔲
│       │   └── contacto.js         ← Página contacto 🔲
│       │
│       ├── 📂 components/
│       │   ├── navbar.js           ← Menú + hamburguesa ✅
│       │   ├── hero-carousel.js    ← Carrusel con autoplay ✅
│       │   ├── whatsapp.js         ← Botón flotante WhatsApp ✅
│       │   ├── gallery.js          ← Galería de productos 🔲
│       │   └── modal.js            ← Modal de detalles 🔲
│       │
│       └── 📂 utils/
│           ├── config.js           ← Configuración centralizada ✅
│           ├── helpers.js          ← Funciones de utilidad ✅
│           └── analytics.js        ← Analytics 🔲
│
└── 📂 docs/
    ├── estructura.md
    ├── paleta-colores.md
    └── guia-contenido.md
```

---

## ⚙️ Requisitos Previos

- Navegador moderno (Chrome, Firefox, Edge)
- [Git](https://git-scm.com/)
- Editor de código (VS Code recomendado)
- Extensión Live Server para VS Code (desarrollo local)

> No requiere Node.js, npm, ni ninguna dependencia externa.

---

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/shokrpower115/milylab3d.git
cd milylab3d
git checkout develop
```

### 2. Abrir en VS Code

```bash
code .
```

### 3. Correr localmente

Instala la extensión **Live Server** en VS Code, luego:

- Clic derecho en `public/index.html`
- Selecciona **Open with Live Server**
- Se abre en `http://127.0.0.1:5500`

---

## 🎨 Sistema de Diseño

### Paleta de Colores

| Variable | Color | Uso |
|----------|-------|-----|
| `--color-primary` | `#7DD8D0` | Botones, acentos, links |
| `--color-secondary` | `#F2A8C4` | Badges, highlights |
| `--color-bg-teal` | `#C8E8E5` | Sección Tecnología |
| `--color-bg-pink` | `#F7D6E6` | Sección Eventos |
| `--color-bg-dark` | `#2C2C2C` | Sección Contacto, Navbar |

### Tipografía

| Tipo | Fuente | Peso |
|------|--------|------|
| Display | Nunito | 700, 800 |
| Body | Inter | 400, 500, 600 |

### Breakpoints

```css
Mobile:   < 768px   (base, flow vertical)
Tablet:   768px     (2 columnas)
Desktop:  1024px+   (3 columnas)
```

---

## 🔌 Conexión con el Backend

La API corre en la VM local. Configura la URL base en `src/scripts/utils/config.js`:

```javascript
const CONFIG = {
  API_URL: 'http://192.168.1.16/api',  // VM local
  // API_URL: 'https://tu-dominio.com/api', // Producción
  WHATSAPP: '526671234567',
  NOMBRE_NEGOCIO: 'MilyLab 3D'
};
```

---

## 🌐 Deployment en Vercel

### Configuración SPA (`vercel.json`)

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Deploy

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

---

## 📋 Páginas y Componentes

### Completados ✅

| Componente | Descripción |
|-----------|-------------|
| Landing page | Hero, Nosotros, Tecnología, Contacto, Footer |
| Navbar | Menú hamburguesa, scroll activo, responsive |
| Hero Carousel | 4 imágenes, autoplay 5s, fade suave, pausa en hover |
| WhatsApp | Botón flotante con link dinámico |
| Animaciones | Fade-up con Intersection Observer |

### Pendientes 🔲

| Componente | Descripción |
|-----------|-------------|
| gallery.js | Grid de productos con filtros, consume `/api/Productos` |
| modal.js | Detalles de producto con carrusel de imágenes |
| catalog.html | Página de catálogo completa |
| cotizar.html | Formulario que consume `/api/Cotizaciones` |
| contacto.html | Página de contacto con mapa |
| 404.html | Página de error personalizada |

---

## 🌿 Ramas

| Rama | Uso |
|------|-----|
| `main` | Código en producción (estable) |
| `develop` | Código en desarrollo |

---

## 📊 Estado del Proyecto

```
Landing Page:               ████████░░ 95%
├── Navbar                  ✅ Completo
├── Hero + Carrusel         ✅ Completo
├── Secciones               ✅ Completo
├── Animaciones             ✅ Completo
└── WhatsApp                ✅ Completo

Páginas Secundarias:        ██░░░░░░░░ 20%
├── catalog.html            🔲 Pendiente
├── cotizar.html            🔲 Pendiente
├── contacto.html           🔲 Pendiente
└── 404.html                🔲 Pendiente

Componentes JS:             ███░░░░░░░ 40%
├── navbar.js               ✅ Completo
├── hero-carousel.js        ✅ Completo
├── whatsapp.js             ✅ Completo
├── gallery.js              🔲 Pendiente
└── modal.js                🔲 Pendiente

TOTAL:                      ████░░░░░░ 45%
```

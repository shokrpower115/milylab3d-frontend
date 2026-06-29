# MilyLab — Impresiones 3D

Sitio web oficial de MilyLab, micro-emprendimiento de impresiones 3D en Culiacán, Sinaloa.

## Stack

- HTML5 + CSS3 + JavaScript (ES Modules, vanilla)
- Firebase Hosting
- Firebase Functions (para futuras integraciones)

## Estructura del proyecto

```
milylab/
├── public/                  ← Archivos que Firebase sirve al usuario
│   ├── index.html           ← Landing page principal
│   ├── catalog.html         ← Catálogo completo de productos
│   ├── cotizar.html         ← Formulario de cotización
│   ├── contacto.html        ← Página de contacto
│   ├── 404.html             ← Página de error personalizada
│   ├── images/
│   │   ├── logo/            ← Logo y favicon
│   │   ├── products/        ← Fotos de productos del catálogo
│   │   ├── events/          ← Fotos de eventos y entregas
│   │   └── gallery/         ← Galería general
│   └── fonts/               ← Fuentes locales (si se descargan de Google Fonts)
│
├── src/                     ← Código fuente (estilos y scripts)
│   ├── styles/
│   │   ├── variables.css    ← Paleta de colores, tipografía, espaciado
│   │   ├── base.css         ← Reset y estilos globales
│   │   ├── components.css   ← Botones, cards, navbar, formularios
│   │   ├── animations.css   ← Animaciones y transiciones
│   │   └── responsive.css   ← Media queries (mobile-first)
│   └── scripts/
│       ├── pages/           ← Un archivo JS por página
│       │   ├── home.js
│       │   ├── catalog.js
│       │   ├── cotizar.js
│       │   └── contacto.js
│       ├── components/      ← Componentes reutilizables
│       │   ├── navbar.js
│       │   ├── gallery.js
│       │   ├── modal.js
│       │   └── whatsapp.js
│       └── utils/           ← Utilidades y configuración global
│           ├── config.js    ← ⚙️ DATOS DE CONTACTO Y CONFIGURACIÓN AQUÍ
│           ├── helpers.js
│           └── analytics.js
│
├── functions/               ← Firebase Cloud Functions (futuro backend)
│   └── index.js
│
├── docs/                    ← Documentación interna del proyecto
│   ├── estructura.md
│   ├── paleta-colores.md
│   └── guia-contenido.md
│
├── firebase.json            ← Configuración de Firebase Hosting
├── .firebaserc              ← ID del proyecto Firebase
├── .gitignore
└── README.md
```

## Configuración inicial

1. Editar `src/scripts/utils/config.js` con el número de WhatsApp real e Instagram
2. Reemplazar `public/images/logo/logo.png` con el logo oficial de MilyLab
3. Agregar fotos de productos en `public/images/products/`

## Deploy a Firebase

```bash
# Instalar Firebase CLI (solo la primera vez)
npm install -g firebase-tools

# Login
firebase login

# Inicializar proyecto (solo la primera vez)
firebase init

# Publicar
firebase deploy
```

## Roadmap de funciones futuras

- [ ] Catálogo dinámico con Firestore
- [ ] Formulario de cotización con notificación por WhatsApp (n8n)
- [ ] Panel de administración para gestionar productos
- [ ] Sistema de pedidos con seguimiento
- [ ] Pagos en línea con MercadoPago

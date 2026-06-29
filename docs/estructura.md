# Estructura y convenciones del proyecto MilyLab

## Regla general

Cada página tiene su propio archivo JS en `src/scripts/pages/`.
Ese archivo importa los componentes que necesita y los inicializa.
Los componentes viven en `src/scripts/components/` y son reutilizables en cualquier página.

## Convenciones de nombres

| Tipo       | Ejemplo                        |
|------------|-------------------------------|
| Archivos   | kebab-case: `product-card.js` |
| Clases CSS | BEM: `.product-card__title`   |
| Funciones  | camelCase: `initGallery()`    |
| Variables  | camelCase: `productList`      |
| Constantes | UPPER_SNAKE: `MAX_ITEMS`      |

## Cómo agregar una página nueva

1. Crear `public/nueva-pagina.html`
2. Crear `src/scripts/pages/nueva-pagina.js`
3. En el HTML, importar el JS: `<script type="module" src="../src/scripts/pages/nueva-pagina.js"></script>`
4. En el JS, importar los componentes necesarios

## Cómo agregar un componente nuevo

1. Crear `src/scripts/components/mi-componente.js`
2. Exportar una función `initMiComponente()`
3. Importarla en las páginas que la usen

## Imágenes

- Logo y favicon → `public/images/logo/`
- Fotos de productos → `public/images/products/` (nombrar: `categoria-descripcion.jpg`)
- Fotos de eventos → `public/images/events/`
- Galería general → `public/images/gallery/`

Formato recomendado: WebP para web, mínimo 800px de ancho, máximo 200KB por imagen.

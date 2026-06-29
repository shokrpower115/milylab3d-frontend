# Imágenes del Carrusel del Hero

Coloca aquí tus imágenes para el carrusel de fondo del hero.

## Instrucciones

1. Agrega tus imágenes en esta carpeta (ej: `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`)
2. Actualiza la configuración en `src/scripts/pages/home.js` con las rutas correctas
3. Las imágenes deben ser optimizadas (jpg, png o webp)

## Recomendaciones

- **Dimensiones:** 1920x1080px o superior
- **Peso:** Optimizar a máximo 200-300 KB por imagen
- **Formato:** JPG (web) o WebP (mejor compresión)

## Ejemplo de configuración

En `src/scripts/pages/home.js`:

```javascript
const heroImageUrls = [
  'images/hero/hero-1.jpg',
  'images/hero/hero-2.jpg',
  'images/hero/hero-3.jpg',
];
```

El carrusel cambiará automáticamente cada 5 segundos.

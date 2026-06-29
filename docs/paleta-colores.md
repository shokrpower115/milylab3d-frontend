# Paleta de colores — MilyLab

Extraída del logo oficial. Todos los valores están definidos en `src/styles/variables.css`.

## Colores principales

| Nombre         | Variable CSS            | Hex       | Uso principal                        |
|----------------|------------------------|-----------|--------------------------------------|
| Menta teal     | `--color-primary`      | `#7DD8D0` | Botones CTA, íconos, acentos         |
| Teal oscuro    | `--color-primary-dark` | `#4FBFB5` | Hover de botones primarios           |
| Rosa suave     | `--color-secondary`    | `#F2A8C4` | Badges, tags, highlights             |
| Rosa oscuro    | `--color-secondary-dark`| `#E07EA0`| Hover de elementos secundarios       |

## Fondos

| Nombre         | Variable CSS            | Hex       | Uso                                  |
|----------------|------------------------|-----------|--------------------------------------|
| Blanco         | `--color-bg-main`      | `#FFFFFF` | Fondo base del sitio                 |
| Teal claro     | `--color-bg-teal`      | `#C8E8E5` | Secciones alternas claras            |
| Rosa pálido    | `--color-bg-pink`      | `#F7D6E6` | Secciones alternas cálidas           |
| Casi negro     | `--color-bg-dark`      | `#2C2C2C` | Navbar, footer, secciones oscuras    |

## Texto

| Nombre         | Variable CSS            | Hex       | Uso                                  |
|----------------|------------------------|-----------|--------------------------------------|
| Principal      | `--color-text-main`    | `#2C2C2C` | Títulos y párrafos                   |
| Secundario     | `--color-text-muted`   | `#6B7280` | Subtítulos, texto de apoyo           |
| Claro          | `--color-text-light`   | `#FFFFFF` | Texto sobre fondos oscuros           |
| Sobre teal     | `--color-text-teal`    | `#1a5c58` | Texto encima de fondo teal           |
| Sobre rosa     | `--color-text-pink`    | `#7a3050` | Texto encima de fondo rosa           |

## Tipografía

- **Títulos:** Nunito (Google Fonts) — redondeada y amigable
- **Cuerpo:** Inter (Google Fonts) — limpia y legible

## Regla de uso

Siempre usar las variables CSS, nunca hardcodear valores hex en componentes.
Si se necesita una variación nueva, agregarla primero en `variables.css`.

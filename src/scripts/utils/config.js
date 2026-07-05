// =============================================
//  MilyLab — Configuración global del proyecto
//  Edita este archivo para cambiar datos de contacto,
//  textos principales y configuración de Firebase.
// =============================================

const CONFIG = {
  brand: {
    name: "MilyLab",
    tagline: "Damos forma a tus ideas",
    description: "Impresiones 3D personalizadas en Culiacán, Sinaloa.",
  },

  contact: {
    whatsapp: "526691234567",       // ← Cambia al número real (con código de país, sin +)
    whatsappMessage: "Hola MilyLab, me interesa cotizar una pieza 3D 👋",
    instagram: "milylab.3d",        // ← Cambia al usuario real
    email: "contacto@milylab.com",  // ← Opcional
  },

  // Paleta de colores de la marca (coincide con variables.css)
  colors: {
    primary:   "#7DD8D0",
    secondary: "#F2A8C4",
    dark:      "#2C2C2C",
    lightTeal: "#C8E8E5",
    lightPink: "#F7D6E6",
  },

  // Categorías del catálogo — agrega o quita según crezca el negocio
  categories: [
    { id: "trofeos",      label: "Trofeos",          icon: "🏆" },
    { id: "medallas",     label: "Medallas",          icon: "🎖️" },
    { id: "eventos",      label: "Centros de mesa",   icon: "🌸" },
    { id: "personalizados", label: "Personalizados",  icon: "✨" },
  ],

//     API_URL: 'http://192.168.1.16/api',  // produccion (local LAN)

    API_URL: 'https://localhost:7109/api',    // Desarrollo (local)
    WHATSAPP: '526671234567',
    NOMBRE_NEGOCIO: 'MilyLab 3D'
};

export default CONFIG;

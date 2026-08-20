/**
 * CONFIGURACIÓN COMERCIAL DEL PROPIETARIO
 * 
 * Modificá este archivo para cambiar tu información de contacto,
 * redes sociales, precios y planes en la página principal.
 */

export const OWNER_CONFIG = {
  // Tu número de WhatsApp con código de país (sin el signo + ni espacios)
  // Ejemplo para Argentina: 54911XXXXXXXX
  OWNER_WHATSAPP: "5491130001234", 

  // Tu nombre o el de tu agencia de desarrollo
  AGENCY_NAME: "WebLab UBA",
  OWNER_NAME: "Julián",

  // Redes sociales y contacto comercial
  INSTAGRAM_USER: "weblab.uba",
  INSTAGRAM_URL: "https://instagram.com/weblab.uba",
  EMAIL: "contacto@weblab.com.ar",

  // Ubicación principal donde ofrecés tus servicios
  LOCATION: "Buenos Aires, Argentina",

  // Planes y precios sugeridos (se muestran en la landing principal)
  PLANES: [
    {
      id: "landing",
      name: "Página Express / QR",
      price: "15.000", // Precio en pesos argentinos (editable)
      period: "pago único",
      description: "Ideal para puestos de feria. Un catálogo digital simple con acceso rápido mediante QR.",
      features: [
        "Diseño personalizado y adaptable a celular",
        "Hasta 15 productos con fotos y descripción",
        "Botón directo de consulta a tu WhatsApp",
        "Generación de código QR para tu stand",
        "Hospedaje bonificado el primer año",
        "Actualizaciones de stock sencillas"
      ],
      recommended: false
    },
    {
      id: "catalogo",
      name: "Catálogo Emprendedor",
      price: "24.000",
      period: "pago único",
      description: "Ideal para marcas de indumentaria, pastelería o accesorios que venden por Instagram.",
      features: [
        "Todo lo del plan Express / QR",
        "Páginas individuales de detalle para cada producto",
        "Filtros avanzados (talle, color, categorías)",
        "Hasta 40 productos en catálogo",
        "Buscador de productos integrado",
        "Sección de promociones o combos destacados",
        "Mantenimiento básico opcional"
      ],
      recommended: true
    },
    {
      id: "premium",
      name: "Web Pro a Medida",
      price: "38.000",
      period: "pago único",
      description: "Para proyectos con necesidades complejas como cotizadores 3D o integraciones avanzadas.",
      features: [
        "Todo lo del plan Catálogo Emprendedor",
        "Productos con formularios a medida (ej: impresión 3D)",
        "Sección de portafolio o proyectos especiales",
        "Integración de mapas o agenda de ferias",
        "Optimización SEO avanzada para Google",
        "Soporte técnico preferencial"
      ],
      recommended: false
    }
  ]
};

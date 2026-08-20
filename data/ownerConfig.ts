/**
 * CONFIGURACIÓN COMERCIAL DEL PROPIETARIO
 * 
 * Modificá este archivo para cambiar tu información de contacto,
 * redes sociales, precios y planes en la página principal.
 */

export const OWNER_CONFIG = {
  // Tu número de WhatsApp con código de país (sin el signo + ni espacios)
  // Formato para Argentina: 549 + 11 + número móvil de 8 dígitos
  OWNER_WHATSAPP: "5491133690832", 

  // Tu nombre o el de tu agencia de desarrollo
  AGENCY_NAME: "WebLab UBA",
  OWNER_NAME: "Julián",

  // Redes sociales y contacto comercial
  INSTAGRAM_USER: "weblab.uba",
  INSTAGRAM_URL: "https://instagram.com/weblab.uba",
  EMAIL: "julianlechuga12@gmail.com",

  // Ubicación principal donde ofrecés tus servicios
  LOCATION: "Buenos Aires, Argentina",

  // Planes y precios ajustados para Argentina (Agosto 2026)
  PLANES: [
    {
      id: "landing",
      name: "Página Express / QR",
      price: "95.000", // Precio razonable en pesos argentinos para Agosto 2026
      period: "pago único",
      description: "La solución rápida y económica. Ideal para stands en ferias universitarias que necesitan mostrar stock digital en el acto.",
      features: [
        "Diseño adaptable y optimizado para pantallas de celulares",
        "Catálogo digital de hasta 15 productos con fotos y descripciones",
        "Botón directo de consulta a tu WhatsApp (abre chat con plantilla de pedido)",
        "Código QR personalizado en PDF listo para imprimir en tu stand",
        "Hosting y subdominio bonificado por el primer año",
        "Panel de administración básico para actualizar stock y precios"
      ],
      recommended: false
    },
    {
      id: "catalogo",
      name: "Catálogo Emprendedor",
      price: "160.000", // Precio razonable para un catálogo avanzado
      period: "pago único",
      description: "El preferido para marcas de indumentaria, pastelerías o accesorios que buscan convertir seguidores de Instagram en clientes.",
      features: [
        "Todo lo incluido en el plan Express / QR",
        "Páginas de detalle individuales para cada producto (ideal para compartir por DM)",
        "Filtros de búsqueda avanzados (talles, colores y rubros específicos)",
        "Catálogo ampliado de hasta 40 productos",
        "Buscador predictivo de productos en la cabecera",
        "Sección destacada de combos y promociones semanales",
        "Optimización de velocidad de carga (Lighthouse > 95)"
      ],
      recommended: true
    },
    {
      id: "premium",
      name: "Web Pro a Medida",
      price: "250.000", // Precio razonable para desarrollos a medida en 2026
      period: "pago único",
      description: "Para proyectos con requerimientos especiales como cotizadores interactivos de impresión 3D o integraciones de catálogo complejas.",
      features: [
        "Todo lo incluido en el plan Catálogo Emprendedor",
        "Formularios de cotización de archivos y medidas personalizadas",
        "Apartado de portafolio y galería de trabajos previos en alta definición",
        "Integración de calendario interactivo de ferias y mapa de stands",
        "Configuración de SEO local avanzado para aparecer en búsquedas de Google Buenos Aires",
        "Soporte prioritario por WhatsApp y mantenimiento mensual bonificado"
      ],
      recommended: false
    }
  ]
};

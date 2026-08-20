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

  // Planes y precios actualizados para Argentina (Agosto 2026)
  PLANES: [
    {
      id: "express",
      name: "Express",
      setupPrice: "$60.000 – $90.000",
      monthlyPrice: "$5.000 – $8.000",
      description: "Landing simple para ferias con código QR, redirección a WhatsApp y vinculación de Instagram.",
      features: [
        "Landing page de sección única optimizada para celulares",
        "Botón directo de redirección a tu WhatsApp",
        "Enlace integrado a tu perfil de Instagram",
        "Exhibición de datos del emprendimiento y ubicación",
        "Sección destacada de hasta 5 productos recomendados",
        "Código QR personalizado en PDF listo para colgar en tu stand"
      ],
      recommended: false
    },
    {
      id: "catalogo",
      name: "Catálogo",
      setupPrice: "$110.000 – $160.000",
      monthlyPrice: "$12.000 – $20.000",
      description: "Ideal si buscás un catálogo digital completo con categorías, buscador y control de stock manual en código.",
      features: [
        "Todo lo incluido en el plan Express",
        "Catálogo completo con categorías auto-filtrables",
        "Páginas de detalles individuales para cada producto",
        "Buscador reactivo de productos integrado",
        "Indicador visual de precios, detalles y disponibilidad de stock",
        "Vos hacés los cambios directamente editando archivos de texto simples"
      ],
      recommended: false
    },
    {
      id: "catalogo-full",
      name: "Catálogo Full",
      setupPrice: "$190.000 – $280.000",
      monthlyPrice: "$18.000 – $30.000",
      description: "Panel autoadministrable completo. Subí fotos, cambiá precios, destacá artículos y controlá el stock desde tu celular. ¡Ahorrá horas de chat y automatizá tus pedidos!",
      features: [
        "Todo lo incluido en el plan Catálogo",
        "Panel administrador privado protegido (¡acceso móvil rápido!)",
        "Control total desde el celular: editá stock, precios y fotos en 5 segundos",
        "Cero comisiones por venta: Cobros directos a tu alias o efectivo",
        "Dashboard con métricas en tiempo real de tu stock y productos destacados",
        "Infraestructura cloud autoadministrable (Supabase integrada)",
        "Hosting y dominio bonificado durante el primer año",
        "Soporte prioritario 1-a-1 por WhatsApp para cualquier duda"
      ],
      recommended: true
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      setupPrice: "desde $350.000",
      monthlyPrice: "desde $30.000",
      description: "Tienda online avanzada con carrito de compras, automatización de cobros e integraciones.",
      features: [
        "Todo lo incluido en el plan Catálogo Full",
        "Carrito de compras interactivo con suma de totales",
        "Integración de pasarela de pagos (Mercado Pago, tarjetas)",
        "Registro y panel de usuarios / historial de compras",
        "Integración de envíos (Correo Argentino, Andreani, etc.)",
        "Panel de analíticas avanzado de ventas y facturación"
      ],
      recommended: false
    }
  ]
};

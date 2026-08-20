/**
 * PRODUCTOS DE ACCESORIOS / JOYERÍA (Lumina Joyas)
 * 
 * Modificá este archivo para cambiar los precios, nombres, materiales,
 * medidas y descripciones de las piezas de joyería fina.
 * 
 * Para cambiar las imágenes de marcador por fotos reales:
 * REEMPLAZAR EL VALOR DE 'image' CON LA RUTA DE LA FOTO (Ej: "/images/productos/anillo.jpg")
 */

export interface AccessoriesProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  badge?: string;
  material: string;
  measurements: string;
  careInstructions: string;
  isFeatured?: boolean;
  image?: string; // REEMPLAZAR CON LA FOTO DEL CLIENTE (Ej: "/images/accesorios/collar.jpg")
}

export const ACCESSORIES_PRODUCTS: AccessoriesProduct[] = [
  {
    id: "collar-prisma",
    name: "Collar Prisma de Cuarzo",
    description: "Un dije delicado de cuarzo cristalino tallado a mano en forma prismática, suspendido en una fina cadena ajustable de plata 925. Transmití energía y sobriedad.",
    price: 9400,
    category: "collares",
    badge: "Nueva Colección",
    material: "Plata 925 y Cuarzo Natural",
    measurements: "Cadena de 45 cm + 5 cm de extensión. Dije de 1.8 cm.",
    careInstructions: "Evitar mojarlo con agua de mar o cloro. Guardar en su bolsita de tela para evitar rayaduras.",
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "anillo-aurum",
    name: "Anillo Aura Simple de Oro",
    description: "Anillo delgado y pulido con un baño de oro de 18 quilates. Diseñado con una silueta ondulada minimalista que se presta para apilar con otras piezas.",
    price: 7800,
    category: "anillos",
    badge: "Más Vendido",
    material: "Bronce con baño de Oro 18k (3 micras)",
    measurements: "Disponible en talles 6, 7 y 8 (Aproximadamente 1.6 cm a 1.8 cm de diámetro interno).",
    careInstructions: "Evitar el contacto con cremas, alcohol en gel y perfumes para prolongar el brillo del baño de oro.",
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "aros-luna",
    name: "Aros Media Luna texturizados",
    description: "Aros colgantes en forma de media luna con una sutil textura martillada a mano que refleja la luz de manera elegante. Sistema de traba seguro y liviano.",
    price: 6500,
    category: "aros",
    material: "Acero Quirúrgico antialérgico",
    measurements: "2.5 cm de diámetro. Peso pluma (1.5 gramos cada aro).",
    careInstructions: "Limpiar con un paño seco y suave después de su uso para remover grasitud natural de la piel.",
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "pulsera-nudo-marino",
    name: "Pulsera Nudo Infinito Regulable",
    description: "Pulsera de cordón encerado satinado con un dije central de nudo infinito en plata. Sistema de nudos corredizos que se adaptan a cualquier muñeca.",
    price: 4900,
    category: "pulseras",
    badge: "Unisex",
    material: "Hilos encerados italianos de alta resistencia y Plata 925",
    measurements: "Diámetro ajustable desde 14 cm hasta 24 cm.",
    careInstructions: "Resiste el agua dulce, pero se recomienda secar bien después del baño. Lavar con jabón neutro si se ensucia el cordón.",
    isFeatured: false,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "dije-estetoscopio",
    name: "Dije Latido Quirúrgico",
    description: "Dije representativo con silueta de estetoscopio y un pequeño corazón calado. Ideal para regalar a estudiantes de medicina o profesionales de la salud en su graduación.",
    price: 3800,
    category: "dijes",
    badge: "Ideal Medicina",
    material: "Plata 925 maciza",
    measurements: "1.5 cm de alto por 1.2 cm de ancho. Argolla de suspensión de 0.4 cm.",
    careInstructions: "Limpiar periódicamente con líquido limpia plata si empieza a oscurecerse por la oxidación natural de la plata.",
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "sticker-pack-med",
    name: "Pack de Stickers Universitarios (Medicina)",
    description: "Set de 8 stickers holográficos e impermeables de diseño propio, con ilustraciones de anatomía humorística y motivacional. Perfectos para pegar en tu termo o apuntes.",
    price: 2500,
    category: "accesorios",
    badge: "Feria Especial",
    material: "Vinilo holográfico brillante con adhesivo permanente",
    measurements: "Tamaño promedio de 6 cm x 6 cm por sticker.",
    careInstructions: "Pegar sobre superficies limpias, secas y no porosas para garantizar la adherencia e impermeabilidad.",
    isFeatured: false,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  }
];

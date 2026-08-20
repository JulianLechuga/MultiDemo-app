/**
 * PRODUCTOS DE IMPRESIÓN 3D / PERSONALIZADOS (Cortex 3D)
 * 
 * Modificá este archivo para cambiar los precios, nombres, materiales,
 * resoluciones de impresión y descripciones de los modelos 3D y piezas.
 * 
 * Para cambiar las imágenes de marcador por fotos reales:
 * REEMPLAZAR EL VALOR DE 'image' CON LA RUTA DE LA FOTO (Ej: "/images/productos/corazon-3d.jpg")
 */

export interface CustomProduct {
  id: string;
  name: string;
  description: string;
  price: number; // 0 indica "A cotizar"
  category: string;
  badge?: string;
  material: string;
  printResolution: string;
  dimensions: string;
  customizable: boolean;
  isFeatured?: boolean;
  image?: string; // REEMPLAZAR CON LA FOTO DEL CLIENTE (Ej: "/images/personalizados/corazon.jpg")
}

export const CUSTOM_PRODUCTS: CustomProduct[] = [
  {
    id: "corazon-anatomico",
    name: "Modelo de Corazón Anatómico Didáctico",
    description: "Modelo tridimensional a escala real del corazón humano, dividido en dos piezas encastrables mediante imanes de neodimio para estudiar aurículas, ventrículos y válvulas internas. Ideal para exámenes de anatomía.",
    price: 15500,
    category: "anatomia",
    badge: "Más Vendido",
    material: "PLA biodegradable de base vegetal (Eco-friendly)",
    printResolution: "0.16 mm de altura de capa para una textura suave y precisa",
    dimensions: "12 cm x 10 cm x 15 cm (Escala 1:1 aproximadamente)",
    customizable: true,
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "cerebro-seccionado",
    name: "Cerebro con Hemisferios Desmontables",
    description: "Modelo educativo del cerebro que expone los lóbulos en diferentes colores codificados para facilitar el estudio neuroanatómico. Consta de 4 piezas encastrables de alta resistencia.",
    price: 18900,
    category: "anatomia",
    badge: "Precisión Académica",
    material: "PLA multicolor y encastres mecánicos",
    printResolution: "0.20 mm de resolución, optimizado para encastre perfecto",
    dimensions: "14 cm x 12 cm x 11 cm",
    customizable: false,
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "craneo-articulado",
    name: "Cráneo Humano con Mandíbula Articulada",
    description: "Cráneo anatómico con mandíbula móvil mediante resorte metálico de tensión. Calota cranial desmontable para visualizar la base del cráneo interna y los forámenes de salida nerviosa.",
    price: 14000,
    category: "anatomia",
    badge: "Popular UBA",
    material: "PLA Premium imitación hueso envejecido",
    printResolution: "0.12 mm de resolución (ultra definición de suturas óseas)",
    dimensions: "15 cm x 10 cm x 12 cm",
    customizable: true,
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "llavero-anatomico-personalizado",
    name: "Llavero de Hueso / Órgano con Nombre",
    description: "Llavero rígido 3D en forma de fémur, corazón o neurona con tu nombre grabado en relieve en el reverso. Ideal para colgar en tu mochila de medicina o guardapolvo.",
    price: 2500,
    category: "regalos",
    badge: "Personalizable",
    material: "PLA rígido y argolla metálica sin fin",
    printResolution: "0.10 mm para textos ultra legibles",
    dimensions: "6 cm de largo x 2 cm de ancho promedio",
    customizable: true,
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "soporte-estetoscopio-escritorio",
    name: "Soporte de Escritorio Estetoscopio",
    description: "Organizador de escritorio diseñado especialmente para enrollar y lucir tu estetoscopio Littmann de manera segura sin dañar el tubo. Cuenta con base antideslizante y portalápices integrado.",
    price: 6800,
    category: "accesorios",
    badge: "Diseño Único",
    material: "PLA reforzado con relleno del 35% de densidad",
    printResolution: "0.20 mm de resolución, terminación texturada",
    dimensions: "10 cm x 10 cm x 8 cm",
    customizable: true,
    isFeatured: false,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "proyecto-a-pedido",
    name: "Servicio de Prototipado / Impresión a Pedido",
    description: "Imprimimos tus archivos .STL o diseñamos desde cero el modelo que necesites. Ideal para piezas mecánicas rotas, maquetas de arquitectura, repuestos u objetos de diseño a medida.",
    price: 0, // Indica cotización
    category: "servicio",
    badge: "Cotización Gratis",
    material: "PLA, ABS, PETG, Resina o filamento flexible (TPU) según requerimiento",
    printResolution: "Adaptable (desde 0.05 mm en resina hasta 0.3 mm en filamento rápido)",
    dimensions: "Volumen máximo de impresión única: 25 cm x 25 cm x 25 cm",
    customizable: true,
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  }
];

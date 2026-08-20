/**
 * PRODUCTOS DE INDUMENTARIA / AMBOS (Aura Ambos)
 * 
 * Modificá este archivo para cambiar los precios, nombres, talles,
 * colores disponibles y descripciones de los ambos médicos.
 * 
 * Para cambiar las imágenes de marcador por fotos reales:
 * REEMPLAZAR EL VALOR DE 'image' CON LA RUTA DE LA FOTO (Ej: "/images/productos/ambo-azul.jpg")
 */

export interface ClothingProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  badge?: string;
  colors: string[]; // Nombre de colores o códigos hex
  sizes: string[];  // S, M, L, XL, etc.
  gender: 'mujer' | 'hombre' | 'unisex';
  composition: string;
  isFeatured?: boolean;
  image?: string; // REEMPLAZAR CON LA FOTO DEL CLIENTE (Ej: "/images/indumentaria/ambo.jpg")
}

export const CLOTHING_PRODUCTS: ClothingProduct[] = [
  {
    id: "ambo-classic-teal",
    name: "Ambo Classic Celeste",
    description: "Ambo médico unisex compuesto por chaqueta con cuello en V de tres bolsillos y pantalón multibolsillo de calce holgado y tiro medio. Confeccionado en tela Arciel original con tratamiento repelente a salpicaduras.",
    price: 18500,
    category: "ambos",
    badge: "Más Vendido",
    colors: ["Celeste", "Azul Marino", "Gris Plomo"],
    sizes: ["S", "M", "L", "XL"],
    gender: "unisex",
    composition: "65% Poliéster, 35% Algodón (Tela Arciel)",
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "ambo-fit-navy",
    name: "Ambo Fit Slim Feminino",
    description: "Ambo entallado para mujer. Chaqueta con pinzas traseras y bolsillos laterales invisibles. Pantalón chupín con cintura elástica reforzada y cordón ajustable. Tela spandex de alta elasticidad.",
    price: 21000,
    category: "ambos",
    badge: "Spandex Premium",
    colors: ["Azul Marino", "Negro", "Rosa Pastel", "Verde Oliva"],
    sizes: ["XS", "S", "M", "L"],
    gender: "mujer",
    composition: "90% Poliéster, 10% Spandex (Elasticidad 4 direcciones)",
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "chaqueta-guardapolvo",
    name: "Chaqueta / Guardapolvo Docente",
    description: "Guardapolvo corto de diseño minimalista con botones ocultos, cuello Mao elegante y mangas tres cuartos. Cuenta con martingala trasera regulable para un mejor entalle.",
    price: 14200,
    category: "chaquetas",
    badge: "Académico",
    colors: ["Blanco"],
    sizes: ["S", "M", "L", "XL"],
    gender: "mujer",
    composition: "100% Sarga de Algodón Premium",
    isFeatured: false,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "cofia-elasticada",
    name: "Cofia / Gorro Quirúrgico de Diseño",
    description: "Gorro ajustable con elástico y tiras para amarrar. Diseñado especialmente para cabello largo. Protege e higieniza tu espacio de trabajo con onda.",
    price: 3200,
    category: "accesorios",
    badge: "Fácil Cuidado",
    colors: ["Celeste", "Verde Cirujano", "Negro", "Estampado Quirófano"],
    sizes: ["Unico"],
    gender: "unisex",
    composition: "50% Poliéster, 50% Algodón de secado rápido",
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "pantalón-jogger-medico",
    name: "Pantalón Jogger Médico Unisex",
    description: "Pantalón deportivo adaptado para guardias largas. Puños elásticos en los tobillos, 6 bolsillos de carga rápida y refuerzo en costuras críticas. Resistente a lavados a alta temperatura.",
    price: 12500,
    category: "pantalones",
    colors: ["Azul Marino", "Negro", "Gris Topo"],
    sizes: ["S", "M", "L", "XL"],
    gender: "unisex",
    composition: "65% Poliéster, 35% Algodón (Alta durabilidad)",
    isFeatured: false,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "portacredencial-silicona",
    name: "Lanyard Porta Credencial Retráctil",
    description: "Práctico reel retráctil de silicona con formas médicas (estetoscopio, corazón, curita) para llevar tu credencial universitaria o de hospital de manera segura.",
    price: 1800,
    category: "accesorios",
    colors: ["Rojo", "Azul", "Rosa"],
    sizes: ["Unico"],
    gender: "unisex",
    composition: "Silicona y Plástico Reforzado con clip metálico",
    isFeatured: false,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  }
];

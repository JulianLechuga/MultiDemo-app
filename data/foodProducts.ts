/**
 * PRODUCTOS DE COMIDA (Dolce Campus)
 * 
 * Modificá este archivo para cambiar los precios, nombres, descripciones
 * o agregar nuevos productos de pastelería y combos.
 * 
 * Para cambiar las imágenes de marcador por fotos reales:
 * REEMPLAZAR EL VALOR DE 'image' CON LA RUTA DE LA FOTO (Ej: "/images/productos/cookie.jpg")
 * El componente visual cargará la imagen si es una ruta válida, o el SVG vectorial en su defecto.
 */

export interface FoodProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  badge?: string;
  isFeatured?: boolean;
  // REEMPLAZAR CON LA FOTO DEL CLIENTE: si este campo contiene una ruta local de imagen (ej. "/images/cookie.jpg"), se usará en lugar del SVG por defecto.
  image?: string; 
}

export const FOOD_PRODUCTS: FoodProduct[] = [
  {
    id: "cookie-clasica",
    name: "Cookie de Chocolate Clásica",
    description: "La reina del campus. Galletita crocante por fuera, húmeda por dentro, con abundantes chips de chocolate semiamargo de alta calidad.",
    price: 1200,
    category: "cookies",
    badge: "Más Vendida",
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE (Ej: "/images/cookies/cookie-clasica.jpg")
  },
  {
    id: "cookie-red-velvet",
    name: "Cookie Red Velvet & White Choc",
    description: "Galletita roja aterciopelada con cacao selecto, trozos de chocolate blanco cremoso y un toque sutil de vainilla.",
    price: 1400,
    category: "cookies",
    badge: "Especial",
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "brownie-classic",
    name: "Brownie Fudge de Nuez",
    description: "Porción generosa de brownie ultra húmedo elaborado con chocolate 70% cacao y nueces crocantes seleccionadas.",
    price: 1800,
    category: "pasteleria",
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "alfajor-pistacho",
    name: "Alfajor de Pistacho & Chocolate",
    description: "Dos tapas de cacao rellenas de un suave ganache de pistacho, cubiertas con una fina capa de chocolate blanco.",
    price: 1600,
    category: "alfajores",
    badge: "Tendencia",
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll con Glaseado",
    description: "Espiral esponjoso de masa brioche, canela de Ceilán, azúcar mascabo y un abundante glaseado de queso crema.",
    price: 1900,
    category: "pasteleria",
    badge: "Recién Horneado",
    isFeatured: false,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "combo-recreo",
    name: "Combo Recreo Universitario",
    description: "Ideal para compartir en una pausa: 2 Cookies Clásicas + 1 Alfajor de Pistacho + 1 Infusión caliente de regalo.",
    price: 3600,
    category: "combos",
    badge: "Promo",
    isFeatured: true,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  },
  {
    id: "box-degustacion",
    name: "Box Dulce Compartido",
    description: "Una caja hermosa para regalar o festejar aprobados: 3 Cookies surtidas, 2 porciones de Brownie y 2 Alfajores.",
    price: 7500,
    category: "combos",
    badge: "Recomendado",
    isFeatured: false,
    image: "" // REEMPLAZAR CON FOTO DEL CLIENTE
  }
];

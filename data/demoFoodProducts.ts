import { Product } from "@/types/product";

export const DEMO_FOOD_PRODUCTS: Product[] = [
  {
    id: "cookie-clasica",
    slug: "cookie-clasica",
    name: "Cookie Chocolate Clásica",
    description: "Cookie artesanal con abundantes chispas de chocolate semiamargo. Suave por dentro, crujiente por fuera.",
    price: 1500,
    category: "Cookies",
    image: "", // Se autogenera por SVG si está vacío
    available: true,
    featured: true,
    createdAt: new Date("2026-08-01T12:00:00Z").toISOString()
  },
  {
    id: "cookie-pistacho",
    slug: "cookie-pistacho",
    name: "Cookie de Pistacho & Choc Blanco",
    description: "Cookie gourmet elaborada con crema de pistacho real, trozos de pistachos tostados y chispas de chocolate blanco belga.",
    price: 2100,
    category: "Cookies",
    image: "",
    available: true,
    featured: true,
    createdAt: new Date("2026-08-01T12:05:00Z").toISOString()
  },
  {
    id: "cookie-oreo",
    slug: "cookie-oreo",
    name: "Cookie Oreo & Cream",
    description: "Base de masa de cacao oscuro rellena de crema de vainilla y trozos crujientes de galletas Oreo trituradas.",
    price: 1700,
    category: "Cookies",
    image: "",
    available: true,
    featured: false,
    createdAt: new Date("2026-08-01T12:10:00Z").toISOString()
  },
  {
    id: "brownie-classic",
    slug: "brownie-classic",
    name: "Brownie de Nuez",
    description: "Cuadrado súper húmedo de chocolate fudge con abundantes trozos de nueces mariposa seleccionadas.",
    price: 1800,
    category: "Brownies",
    image: "",
    available: true,
    featured: true,
    createdAt: new Date("2026-08-01T12:15:00Z").toISOString()
  },
  {
    id: "blondie-frambuesa",
    slug: "blondie-frambuesa",
    name: "Blondie de Frambuesa & Coco",
    description: "Brownie de chocolate blanco y azúcar mascabo con frambuesas patagónicas frescas y coco rallado tostado.",
    price: 1900,
    category: "Brownies",
    image: "",
    available: true,
    featured: false,
    createdAt: new Date("2026-08-01T12:20:00Z").toISOString()
  },
  {
    id: "alfajor-pistacho",
    slug: "alfajor-pistacho",
    name: "Alfajor de Pistacho",
    description: "Tapas de chocolate amargo rellenas de una suave crema de pistacho puro, bañado en chocolate semiamargo.",
    price: 2400,
    category: "Alfajores",
    image: "",
    available: true,
    featured: true,
    createdAt: new Date("2026-08-01T12:25:00Z").toISOString()
  },
  {
    id: "alfajor-maicena",
    slug: "alfajor-maicena",
    name: "Alfajor de Maicena Tradicional",
    description: "Tapas extra suaves que se derriten en la boca, con abundante relleno de dulce de leche repostero y coco rallado.",
    price: 1300,
    category: "Alfajores",
    image: "",
    available: true,
    featured: false,
    createdAt: new Date("2026-08-01T12:30:00Z").toISOString()
  },
  {
    id: "cinnamon-roll",
    slug: "cinnamon-roll",
    name: "Cinnamon Roll con Glaseado",
    description: "Rollo de masa brioche esponjoso con manteca, azúcar rubia y abundante canela de Ceilán, cubierto de glaseado de queso crema.",
    price: 1800,
    category: "Pastelería",
    image: "",
    available: true,
    featured: false,
    createdAt: new Date("2026-08-01T12:35:00Z").toISOString()
  },
  {
    id: "box-degustacion",
    slug: "box-degustacion",
    name: "Box Degustación Especial",
    description: "Caja ideal para regalo o compartir. Incluye 2 cookies clásicas, 2 alfajores de maicena, 1 brownie y 1 blondie.",
    price: 8900,
    category: "Combos",
    image: "",
    available: true,
    featured: false,
    createdAt: new Date("2026-08-01T12:40:00Z").toISOString()
  },
  {
    id: "combo-merienda",
    slug: "combo-merienda",
    name: "Combo Merienda UBA Cursada",
    description: "Para sobrevivir a la cursada. Incluye 1 Cinnamon Roll o 1 alfajor a elección, más 1 café de especialidad frío o caliente.",
    price: 3500,
    category: "Combos",
    image: "",
    available: true,
    featured: true,
    createdAt: new Date("2026-08-01T12:45:00Z").toISOString()
  }
];

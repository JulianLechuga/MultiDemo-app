/**
 * CONFIGURACIÓN DE MARCAS DEMO
 * 
 * Este archivo define la identidad, descripción, contactos ficticios,
 * y tokens de diseño para cada una de las 4 demos independientes.
 */

export interface BrandConfig {
  id: string;
  name: string;
  category: string;
  description: string;
  fictiveWhatsapp: string;
  fictiveInstagram: string;
  location: string;
  fontFamilyTitle: string;
  fontFamilyBody: string;
  themeColor: {
    primary: string;      // Clase de color principal (ej: 'amber-600')
    primaryHover: string; // Hover del principal (ej: 'amber-700')
    bg: string;           // Fondo principal (ej: 'bg-amber-50/30')
    accent: string;       // Color de acento (ej: 'emerald-500')
    darkBg: string;       // Color de fondo para elementos oscuros
    textTitle: string;    // Color de texto título
  };
}

export const BRANDS: Record<string, BrandConfig> = {
  comida: {
    id: "comida",
    name: "Dolce Campus",
    category: "Pastelería & Cookies",
    description: "Cookies artesanales, alfajores y rolls recién horneados. Ideal para tus recreos o para compartir en el campus.",
    fictiveWhatsapp: "5491199991111", // Simulado
    fictiveInstagram: "@dolce.campus",
    location: "Feria de Medicina, Facultad de Medicina UBA",
    fontFamilyTitle: "font-playfair",
    fontFamilyBody: "font-quicksand",
    themeColor: {
      primary: "amber-600",
      primaryHover: "amber-700",
      bg: "bg-[#fdfaf6]", // Beige cálido
      accent: "rose-500",
      darkBg: "bg-amber-950",
      textTitle: "text-amber-900"
    }
  },
  indumentaria: {
    id: "indumentaria",
    name: "Aura Ambos",
    category: "Indumentaria de Salud",
    description: "Diseñamos guardapolvos, chaquetas y ambos médicos que combinan comodidad, resistencia y estilo moderno.",
    fictiveWhatsapp: "5491199992222", // Simulado
    fictiveInstagram: "@aura.ambos",
    location: "Buenos Aires (Envíos a todo el país)",
    fontFamilyTitle: "font-jakarta",
    fontFamilyBody: "font-inter",
    themeColor: {
      primary: "teal-600",
      primaryHover: "teal-700",
      bg: "bg-[#f6fcfb]", // Menta/Celeste ultra suave
      accent: "emerald-500",
      darkBg: "bg-teal-950",
      textTitle: "text-teal-900"
    }
  },
  accesorios: {
    id: "accesorios",
    name: "Lumina Joyas",
    category: "Joyería & Accesorios",
    description: "Accesorios minimalistas y piezas de joyería fina pensadas para complementar tu día a día con sutileza y elegancia.",
    fictiveWhatsapp: "5491199993333", // Simulado
    fictiveInstagram: "@lumina.joyas",
    location: "Showroom en Palermo & Stands de Diseño",
    fontFamilyTitle: "font-cormorant",
    fontFamilyBody: "font-montserrat",
    themeColor: {
      primary: "stone-800",
      primaryHover: "stone-900",
      bg: "bg-[#faf9f6]", // Blanco roto/Marfil
      accent: "amber-500", // Tono oro/champagne
      darkBg: "bg-stone-900",
      textTitle: "text-stone-900"
    }
  },
  personalizados: {
    id: "personalizados",
    name: "Cortex 3D",
    category: "Impresión 3D & Anatomía",
    description: "Modelos anatómicos de alta fidelidad para estudiantes de medicina, piezas educativas, llaveros y proyectos a pedido.",
    fictiveWhatsapp: "5491199994444", // Simulado
    fictiveInstagram: "@cortex.3d",
    location: "Envíos directos a Facultades y Hospitales de CABA",
    fontFamilyTitle: "font-space-grotesk",
    fontFamilyBody: "font-mono",
    themeColor: {
      primary: "cyan-500",
      primaryHover: "cyan-600",
      bg: "bg-[#0f172a]", // Slate oscuro
      accent: "orange-500",
      darkBg: "bg-[#020617]",
      textTitle: "text-slate-100"
    }
  }
};

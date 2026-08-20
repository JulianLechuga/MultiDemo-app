import IndumentariaClient from "./IndumentariaClient";

export const metadata = {
  title: "Demo Indumentaria | Catálogo de Ambos y Ropa Médica | WebLab",
  description: "Probá la demo de catálogo digital optimizado para marcas de indumentaria y ambos médicos. Filtros por talle, categoría y stock.",
  keywords: ["catálogo indumentaria","ambos médicos","ropa de diseño","demo catálogo","WhatsApp"],
};

export default function Page() {
  return <IndumentariaClient />;
}

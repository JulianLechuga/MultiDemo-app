import { CLOTHING_PRODUCTS } from "@/data/clothingProducts";
import ProductClient from "./ProductClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CLOTHING_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = CLOTHING_PRODUCTS.find((p) => p.id === resolvedParams.id);
  return {
    title: product ? `${product.name} | Demo Indumentaria` : "Prenda | Demo Indumentaria",
    description: product 
      ? `Detalle de ${product.name}. ${product.description} - Consultá talles y colores en el catálogo.`
      : "Detalle de producto de la demo de indumentaria.",
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductClient id={resolvedParams.id} />;
}

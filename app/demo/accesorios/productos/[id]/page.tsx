import { ACCESSORIES_PRODUCTS } from "@/data/accessoriesProducts";
import ProductClient from "./ProductClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ACCESSORIES_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = ACCESSORIES_PRODUCTS.find((p) => p.id === resolvedParams.id);
  return {
    title: product ? `${product.name} | Demo Accesorios` : "Accesorio | Demo Accesorios",
    description: product 
      ? `Pedí tu ${product.name} al instante. ${product.description} - Ideal para ferias y stands.`
      : "Detalle de producto de la demo de accesorios.",
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductClient id={resolvedParams.id} />;
}

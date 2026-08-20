import { CUSTOM_PRODUCTS } from "@/data/customProducts";
import ProductClient from "./ProductClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CUSTOM_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = CUSTOM_PRODUCTS.find((p) => p.id === resolvedParams.id);
  return {
    title: product ? `${product.name} | Demo Personalizados` : "Producto 3D | Demo Personalizados",
    description: product 
      ? `Pedí tu ${product.name} en impresión 3D. ${product.description} - Pedidos personalizados a WhatsApp.`
      : "Detalle de producto de la demo de personalizados.",
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductClient id={resolvedParams.id} />;
}

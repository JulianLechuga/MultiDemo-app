import { DEMO_FOOD_PRODUCTS } from "@/data/demoFoodProducts";
import ProductClient from "./ProductClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DEMO_FOOD_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = DEMO_FOOD_PRODUCTS.find((p) => p.slug === resolvedParams.slug);
  return {
    title: product ? `${product.name} | Demo Gastronómica` : "Producto | Demo Gastronómica",
    description: product 
      ? `Pedí tu ${product.name} online. ${product.description} - Envío rápido a WhatsApp.`
      : "Detalle de producto de la demo gastronómica.",
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductClient slug={resolvedParams.slug} />;
}

import { FOOD_PRODUCTS } from "@/data/foodProducts";
import ProductClient from "./ProductClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return FOOD_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductClient id={resolvedParams.id} />;
}

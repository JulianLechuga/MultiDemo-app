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

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductClient slug={resolvedParams.slug} />;
}

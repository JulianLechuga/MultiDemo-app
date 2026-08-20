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

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductClient id={resolvedParams.id} />;
}

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

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductClient id={resolvedParams.id} />;
}

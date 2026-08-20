import { Product } from "@/types/product";

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  getById(id: string): Promise<Product | null>;
  getBySlug(slug: string): Promise<Product | null>;
  create(product: Omit<Product, "id" | "createdAt" | "slug">): Promise<Product>;
  update(id: string, product: Partial<Product>): Promise<Product>;
  delete(id: string): Promise<boolean>;
  reset(): Promise<Product[]>;
}

import { Product } from "@/types/product";
import { ProductRepository } from "./ProductRepository";
import { DEMO_FOOD_PRODUCTS } from "@/data/demoFoodProducts";

export class LocalStorageProductRepository implements ProductRepository {
  private key = "weblab_demo_food_products";

  private isClient(): boolean {
    return typeof window !== "undefined";
  }

  private getStoredProducts(): Product[] {
    if (!this.isClient()) {
      return DEMO_FOOD_PRODUCTS;
    }
    const data = localStorage.getItem(this.key);
    if (!data) {
      // Inicializar con catálogo inicial
      localStorage.setItem(this.key, JSON.stringify(DEMO_FOOD_PRODUCTS));
      return DEMO_FOOD_PRODUCTS;
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Error al parsear productos de localStorage, restaurando por defecto", e);
      localStorage.setItem(this.key, JSON.stringify(DEMO_FOOD_PRODUCTS));
      return DEMO_FOOD_PRODUCTS;
    }
  }

  private saveProducts(products: Product[]): void {
    if (this.isClient()) {
      localStorage.setItem(this.key, JSON.stringify(products));
    }
  }

  async getAll(): Promise<Product[]> {
    return this.getStoredProducts();
  }

  async getById(id: string): Promise<Product | null> {
    const products = this.getStoredProducts();
    return products.find((p) => p.id === id) || null;
  }

  async getBySlug(slug: string): Promise<Product | null> {
    const products = this.getStoredProducts();
    return products.find((p) => p.slug === slug) || null;
  }

  async create(productData: Omit<Product, "id" | "createdAt" | "slug">): Promise<Product> {
    const products = this.getStoredProducts();
    
    // Generar ID único incremental
    const newId = `product-${Date.now()}`;
    
    // Generar slug a partir del nombre
    const slug = productData.name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // Comprobar si ya existe el slug, si sí, añadir un timestamp corto
    let finalSlug = slug;
    if (products.some((p) => p.slug === finalSlug)) {
      finalSlug = `${slug}-${Math.floor(Math.random() * 1000)}`;
    }

    const newProduct: Product = {
      ...productData,
      id: newId,
      slug: finalSlug,
      createdAt: new Date().toISOString()
    };

    products.push(newProduct);
    this.saveProducts(products);
    return newProduct;
  }

  async update(id: string, productData: Partial<Product>): Promise<Product> {
    const products = this.getStoredProducts();
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }

    const existingProduct = products[index];

    // Si cambia el nombre y no se pasa un slug explícito, regenerar slug
    let newSlug = existingProduct.slug;
    if (productData.name && productData.name !== existingProduct.name && !productData.slug) {
      const baseSlug = productData.name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
      
      newSlug = baseSlug;
      // Evitar duplicados
      let count = 1;
      while (products.some((p) => p.slug === newSlug && p.id !== id)) {
        newSlug = `${baseSlug}-${count++}`;
      }
    }

    const updatedProduct: Product = {
      ...existingProduct,
      ...productData,
      slug: productData.slug || newSlug
    };

    products[index] = updatedProduct;
    this.saveProducts(products);
    return updatedProduct;
  }

  async delete(id: string): Promise<boolean> {
    const products = this.getStoredProducts();
    const filtered = products.filter((p) => p.id !== id);
    if (filtered.length === products.length) {
      return false;
    }
    this.saveProducts(filtered);
    return true;
  }

  async reset(): Promise<Product[]> {
    if (this.isClient()) {
      localStorage.setItem(this.key, JSON.stringify(DEMO_FOOD_PRODUCTS));
    }
    return DEMO_FOOD_PRODUCTS;
  }
}

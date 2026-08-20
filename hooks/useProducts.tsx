"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/types/product";
import { LocalStorageProductRepository } from "@/lib/repositories/LocalStorageProductRepository";

interface ProductContextType {
  products: Product[];
  loading: boolean;
  createProduct: (productData: Omit<Product, "id" | "createdAt" | "slug">) => Promise<Product>;
  updateProduct: (id: string, productData: Partial<Product>) => Promise<Product>;
  deleteProduct: (id: string) => Promise<boolean>;
  resetProducts: () => Promise<void>;
  refreshProducts: () => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const repo = new LocalStorageProductRepository();

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const data = await repo.getAll();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();

    if (typeof window !== "undefined") {
      const handleStorageChange = (e: StorageEvent) => {
        // Escuchar cambios realizados en otras pestañas
        if (e.key === "weblab_demo_food_products") {
          fetchProducts();
        }
      };
      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, []);

  const createProduct = async (productData: Omit<Product, "id" | "createdAt" | "slug">) => {
    const newProd = await repo.create(productData);
    await fetchProducts(); // Actualizar estado de la pestaña actual
    return newProd;
  };

  const updateProduct = async (id: string, productData: Partial<Product>) => {
    const updated = await repo.update(id, productData);
    await fetchProducts();
    return updated;
  };

  const deleteProduct = async (id: string) => {
    const deleted = await repo.delete(id);
    if (deleted) {
      await fetchProducts();
    }
    return deleted;
  };

  const resetProducts = async () => {
    await repo.reset();
    await fetchProducts();
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        createProduct,
        updateProduct,
        deleteProduct,
        resetProducts,
        refreshProducts: fetchProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts debe ser usado dentro de un ProductProvider");
  }
  return context;
}

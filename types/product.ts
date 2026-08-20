export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;      // URL, base64 o ruta local
  available: boolean;
  featured: boolean;
  createdAt: string;
}

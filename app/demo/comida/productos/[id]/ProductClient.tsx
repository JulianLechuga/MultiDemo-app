"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MessageSquare, ArrowLeft, Heart } from "lucide-react";
import { FOOD_PRODUCTS } from "@/data/foodProducts";
import { BRANDS } from "@/data/brands";
import DemoBar from "@/components/DemoBar";
import ClientCTA from "@/components/ClientCTA";
import FoodProductVector from "@/components/FoodProductVector";
import MockInteractionDialog from "@/components/MockInteractionDialog";

interface ProductClientProps {
  id: string;
}

export default function ProductClient({ id }: ProductClientProps) {
  const router = useRouter();
  const brand = BRANDS.comida;

  const [modalOpen, setModalOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  // Buscar el producto
  const product = FOOD_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fdfaf6] flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-bold text-amber-900 mb-2">Producto no encontrado</h2>
        <Link href="/demo/comida" className="text-amber-600 underline">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${brand.themeColor.bg} text-slate-800 ${brand.fontFamilyBody} flex flex-col`}>
      {/* Barra superior de Demo */}
      <DemoBar brandName={brand.name} category={brand.category} />
      
      {/* Botón flotante comercial de lead */}
      <ClientCTA demoId="comida" demoName={brand.name} />

      {/* Header de la Marca */}
      <header className="border-b border-amber-900/10 bg-white/70 backdrop-blur-md sticky top-[45px] z-20">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/demo/comida" className={`font-bold text-xl ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
            🍪 {brand.name}
          </Link>
          <button 
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3.5 rounded-xl transition"
          >
            <MessageSquare size={14} />
            <span>Pedir por WhatsApp</span>
          </button>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12 flex-grow">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-950 mb-6 group transition"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>Volver al Catálogo</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-amber-900/10 p-6 md:p-8 rounded-3xl shadow-md">
          {/* Ilustración Vectorial */}
          <div className="w-full aspect-square bg-amber-50/50 p-8 rounded-2xl flex items-center justify-center relative overflow-hidden">
            {product.badge && (
              <span className="absolute top-4 left-4 bg-amber-600 text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
                {product.badge}
              </span>
            )}
            <button
              onClick={() => setFavorite(!favorite)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full border border-slate-100 text-rose-500 shadow-sm hover:scale-105 active:scale-95 transition"
            >
              <Heart size={18} fill={favorite ? "#f43f5e" : "none"} />
            </button>
            <div className="w-48 h-48 md:w-60 md:h-60 animate-bounce-slow">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              ) : (
                <FoodProductVector id={product.id} />
              )}
            </div>
          </div>

          {/* Información del Producto */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 w-fit block">
                Categoría: {product.category === "pasteleria" ? "Pastelería" : product.category}
              </span>
              
              <h1 className={`text-2xl md:text-3xl font-bold text-amber-950 ${brand.fontFamilyTitle}`}>
                {product.name}
              </h1>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                {product.description}
              </p>

              {/* Tips de Consumo */}
              <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-900/5 text-xs text-amber-900 space-y-1">
                <span className="font-bold block">💡 Tip del repostero:</span>
                <p className="text-slate-600">
                  Dales un toque de microondas de 10 a 15 segundos antes de comer. Esto derretirá las chispas de chocolate y le devolverá la humedad de recién horneada a tu cookie.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-amber-900/10 mt-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-sm font-semibold text-slate-400">Precio Sugerido</span>
                <span className="text-2xl md:text-3xl font-bold text-amber-900 font-mono">
                  ${product.price.toLocaleString("es-AR")}
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex-grow flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-amber-600/20 transition cursor-pointer text-sm"
                >
                  <MessageSquare size={16} />
                  <span>Realizar Pedido por WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-200/60 py-8 px-4 border-t border-amber-900/20 text-center font-sans mt-auto">
        <p className="text-xs">
          © 2026 {brand.name}. Todos los derechos reservados. | Vista Previa de Demo de WebLab.
        </p>
      </footer>

      {/* Dialogo Explicativo */}
      <MockInteractionDialog
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        brandName={brand.name}
        type="order_product"
        productName={product.name}
        price={product.price}
      />
    </div>
  );
}

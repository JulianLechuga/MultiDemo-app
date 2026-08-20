"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MessageSquare, ArrowLeft, Heart, ShieldAlert } from "lucide-react";
import { ACCESSORIES_PRODUCTS } from "@/data/accessoriesProducts";
import { BRANDS } from "@/data/brands";
import DemoBar from "@/components/DemoBar";
import ClientCTA from "@/components/ClientCTA";
import AccessoriesProductVector from "@/components/AccessoriesProductVector";
import MockInteractionDialog from "@/components/MockInteractionDialog";

interface ProductClientProps {
  id: string;
}

export default function ProductClient({ id }: ProductClientProps) {
  const router = useRouter();
  const brand = BRANDS.accesorios;

  const [modalOpen, setModalOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const product = ACCESSORIES_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-bold text-stone-900 mb-2">Producto no encontrado</h2>
        <Link href="/demo/accesorios" className="text-stone-600 underline">
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${brand.themeColor.bg} text-stone-800 ${brand.fontFamilyBody} flex flex-col`}>
      {/* Barra superior de Demo */}
      <DemoBar brandName={brand.name} category={brand.category} />
      
      {/* Botón flotante de lead */}
      <ClientCTA demoId="accesorios" demoName={brand.name} />

      {/* Header */}
      <header className="border-b border-stone-200 bg-white/70 backdrop-blur-md sticky top-[45px] z-20">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/demo/accesorios" className={`font-bold text-xl tracking-widest uppercase ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
            Lumina
          </Link>
          <button 
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs py-2 px-3.5 rounded-md tracking-wider uppercase transition"
          >
            <MessageSquare size={14} />
            <span>Consultar Pieza</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8 md:py-12 flex-grow">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 mb-6 group transition uppercase tracking-wider"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>Volver al Catálogo</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-stone-200 p-6 md:p-8 rounded-2xl shadow-sm">
          
          {/* Columna de Imagen */}
          <div className="w-full aspect-square bg-stone-950 p-8 rounded-xl flex items-center justify-center relative overflow-hidden">
            {product.badge && (
              <span className="absolute top-4 left-4 bg-amber-600 text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-sm">
                {product.badge}
              </span>
            )}
            <button
              onClick={() => setFavorite(!favorite)}
              className="absolute top-4 right-4 p-2 bg-stone-900 rounded-full border border-stone-800 text-rose-500 shadow-sm hover:scale-105 active:scale-95 transition z-10"
            >
              <Heart size={18} fill={favorite ? "#f43f5e" : "none"} />
            </button>
            <div className="w-48 h-48 md:w-60 md:h-60">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              ) : (
                <AccessoriesProductVector id={product.id} />
              )}
            </div>
          </div>

          {/* Columna Detalles */}
          <div className="flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <span className="text-[9px] text-stone-400 font-bold uppercase tracking-widest block mb-1">
                  Categoría: {product.category}
                </span>
                <h1 className={`text-2xl md:text-3xl font-normal text-stone-900 mt-1 uppercase tracking-wider ${brand.fontFamilyTitle}`}>
                  {product.name}
                </h1>
              </div>

              <p className="text-stone-550 text-xs md:text-sm leading-relaxed font-light">
                {product.description}
              </p>

              {/* Ficha Técnica */}
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-100 space-y-2 text-xs text-stone-700">
                <span className="font-bold text-stone-900 uppercase tracking-widest text-[10px] block">Especificaciones:</span>
                <p><strong>Material:</strong> {product.material}</p>
                <p><strong>Medidas:</strong> {product.measurements}</p>
              </div>

              {/* Cuidados Especiales */}
              <div className="bg-amber-500/5 p-4 rounded-lg border border-amber-500/20 text-xs text-stone-700 space-y-1.5">
                <span className="font-bold text-amber-800 flex items-center gap-1">
                  <ShieldAlert size={14} />
                  <span>Cuidados de esta pieza:</span>
                </span>
                <p className="text-stone-550 leading-relaxed font-light text-[11px]">
                  {product.careInstructions}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-150 mt-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-semibold text-slate-400">Precio de venta</span>
                <span className="text-2xl md:text-3xl font-bold text-stone-900 font-mono">
                  ${product.price.toLocaleString("es-AR")}
                </span>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-850 text-white font-bold py-3 rounded-lg uppercase tracking-widest text-xs transition cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>Consultar por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-505 py-8 px-6 text-center mt-auto font-sans">
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

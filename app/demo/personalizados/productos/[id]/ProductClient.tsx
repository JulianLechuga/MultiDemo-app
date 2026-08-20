"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MessageSquare, ArrowLeft, Heart, Box } from "lucide-react";
import { CUSTOM_PRODUCTS } from "@/data/customProducts";
import { BRANDS } from "@/data/brands";
import DemoBar from "@/components/DemoBar";
import ClientCTA from "@/components/ClientCTA";
import CustomProductVector from "@/components/CustomProductVector";
import MockInteractionDialog from "@/components/MockInteractionDialog";

interface ProductClientProps {
  id: string;
}

export default function ProductClient({ id }: ProductClientProps) {
  const router = useRouter();
  const brand = BRANDS.personalizados;

  const [modalOpen, setModalOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const product = CUSTOM_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-slate-350 flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-bold text-white mb-2">Producto no encontrado</h2>
        <Link href="/demo/personalizados" className="text-cyan-400 underline">
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${brand.themeColor.bg} text-slate-300 ${brand.fontFamilyBody} flex flex-col blueprint-grid`}>
      {/* Barra superior de Demo */}
      <DemoBar brandName={brand.name} category={brand.category} />
      
      {/* Botón flotante comercial de lead */}
      <ClientCTA demoId="personalizados" demoName={brand.name} />

      {/* Header */}
      <header className="border-b border-slate-800 bg-[#0f172a]/95 backdrop-blur-md sticky top-[45px] z-20">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/demo/personalizados" className={`font-bold text-lg md:text-xl tracking-wider text-cyan-400 ${brand.fontFamilyTitle} flex items-center gap-2`}>
            <Box size={20} className="text-cyan-400" />
            <span>{brand.name}</span>
          </Link>
          <button 
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs py-2 px-3.5 rounded-lg transition"
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
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white mb-6 group transition font-mono"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>[ Volver al Catálogo ]</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-900/60 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-sm">
          
          {/* Columna de Imagen */}
          <div className="w-full aspect-square bg-slate-950/40 p-8 rounded-xl flex items-center justify-center relative overflow-hidden border border-slate-800">
            {product.badge && (
              <span className="absolute top-4 left-4 bg-cyan-900/80 text-cyan-400 text-[8px] uppercase font-bold tracking-widest px-3 py-1 rounded border border-cyan-800/85">
                {product.badge}
              </span>
            )}
            <button
              onClick={() => setFavorite(!favorite)}
              className="absolute top-4 right-4 p-2 bg-slate-900 rounded-full border border-slate-800 text-rose-500 shadow-sm hover:scale-105 active:scale-95 transition z-10"
            >
              <Heart size={18} fill={favorite ? "#f43f5e" : "none"} />
            </button>
            <div className="w-48 h-48 md:w-60 md:h-60">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              ) : (
                <CustomProductVector id={product.id} />
              )}
            </div>
          </div>

          {/* Columna Detalles */}
          <div className="flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <span className="text-[9px] text-cyan-400 font-bold uppercase tracking-widest block font-mono">
                  Categoría: {product.category}
                </span>
                <h1 className={`text-2xl md:text-3xl font-bold text-white mt-1 ${brand.fontFamilyTitle}`}>
                  {product.name}
                </h1>
              </div>

              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-mono">
                {product.description}
              </p>

              {/* Ficha Técnica */}
              <div className="bg-slate-950/40 p-4 rounded border border-slate-800 space-y-2 text-xs text-slate-300 font-mono">
                <span className="font-bold text-cyan-400 uppercase tracking-wider text-[9px] block">[ Ficha Técnica de Impresión ]</span>
                <p><strong>Material:</strong> {product.material}</p>
                <p><strong>Resolución de Capa:</strong> {product.printResolution}</p>
                <p><strong>Dimensiones:</strong> {product.dimensions}</p>
                <p><strong>Permite Grabado:</strong> {product.customizable ? "Sí (nombres/relieves)" : "No"}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-semibold text-slate-505 font-mono">Costo del servicio</span>
                <span className="text-2xl md:text-3xl font-bold text-white font-mono">
                  {product.price > 0 ? `$${product.price.toLocaleString("es-AR")}` : "A cotizar"}
                </span>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 rounded uppercase tracking-wider text-xs transition cursor-pointer font-mono"
              >
                <MessageSquare size={16} />
                <span>Pedir Cotización de Impresión</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-600 py-8 px-6 text-center mt-auto font-sans border-t border-slate-900">
        <p className="text-xs font-mono">
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

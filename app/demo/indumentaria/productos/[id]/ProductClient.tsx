"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MessageSquare, ArrowLeft, Heart, Ruler } from "lucide-react";
import { CLOTHING_PRODUCTS, ClothingProduct } from "@/data/clothingProducts";
import { BRANDS } from "@/data/brands";
import DemoBar from "@/components/DemoBar";
import ClientCTA from "@/components/ClientCTA";
import ClothingProductVector from "@/components/ClothingProductVector";
import MockInteractionDialog from "@/components/MockInteractionDialog";

interface ProductClientProps {
  id: string;
}

export default function ProductClient({ id }: ProductClientProps) {
  const router = useRouter();
  const brand = BRANDS.indumentaria;

  const [modalOpen, setModalOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);
  
  // Opciones de configuración seleccionadas por el cliente simulado
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const product = CLOTHING_PRODUCTS.find((p) => p.id === id);

  // Inicializar selección de talle/color por defecto al cargar
  React.useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f6fcfb] flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-bold text-teal-900 mb-2">Producto no encontrado</h2>
        <Link href="/demo/indumentaria" className="text-teal-655 underline">
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  const handleConsultSubmit = () => {
    setModalOpen(true);
  };

  return (
    <div className={`min-h-screen ${brand.themeColor.bg} text-slate-800 ${brand.fontFamilyBody} flex flex-col`}>
      {/* Barra de Demo */}
      <DemoBar brandName={brand.name} category={brand.category} />
      
      {/* Botón flotante comercial */}
      <ClientCTA demoId="indumentaria" demoName={brand.name} />

      {/* Header */}
      <header className="border-b border-teal-900/10 bg-white/80 backdrop-blur-md sticky top-[45px] z-20">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/demo/indumentaria" className={`font-bold text-xl ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
            Aura Ambos
          </Link>
          <button 
            onClick={handleConsultSubmit}
            className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs py-2 px-3.5 rounded-xl transition"
          >
            <MessageSquare size={14} />
            <span>Consultar Disponibilidad</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12 flex-grow">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-850 mb-6 group transition"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>Volver al Catálogo</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-teal-900/10 p-6 md:p-8 rounded-3xl shadow-sm">
          
          {/* Columna de Imagen */}
          <div className="w-full aspect-square bg-slate-50/50 p-8 rounded-2xl flex items-center justify-center relative overflow-hidden">
            {product.badge && (
              <span className="absolute top-4 left-4 bg-teal-650 text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full z-10">
                {product.badge}
              </span>
            )}
            <button
              onClick={() => setFavorite(!favorite)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full border border-slate-100 text-rose-500 shadow-sm hover:scale-105 active:scale-95 transition z-10"
            >
              <Heart size={18} fill={favorite ? "#f43f5e" : "none"} />
            </button>
            <div className="w-48 h-48 md:w-60 md:h-60">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              ) : (
                <ClothingProductVector id={product.id} />
              )}
            </div>
          </div>

          {/* Columna Detalles */}
          <div className="flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <span className="text-[10px] text-teal-600 font-bold uppercase tracking-wider block">
                  {product.category}
                </span>
                <h1 className={`text-2xl md:text-3xl font-extrabold text-slate-900 mt-1 ${brand.fontFamilyTitle}`}>
                  {product.name}
                </h1>
              </div>

              <p className="text-slate-550 text-xs md:text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Ficha Técnica */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5 text-xs text-slate-700">
                <span className="font-bold text-slate-800 block">Detalles de Confección:</span>
                <p><strong>Composición:</strong> {product.composition}</p>
                <p><strong>Apto para:</strong> Lavado industrial a alta temperatura</p>
              </div>

              {/* Selección de Color */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Color Seleccionado: <strong className="text-slate-700 font-bold">{selectedColor}</strong></span>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                        selectedColor === c
                          ? "bg-teal-50 border-teal-600 text-teal-800 font-bold shadow-sm"
                          : "bg-white border-slate-200 text-slate-650 hover:bg-slate-55"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selección de Talles */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Elegí tu Talle:</span>
                  <Link href="/demo/indumentaria#talles" className="text-[11px] font-bold text-teal-600 hover:underline flex items-center gap-1">
                    <Ruler size={12} />
                    <span>Tabla de Medidas</span>
                  </Link>
                </div>
                <div className="flex gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`w-9 h-9 rounded-lg border text-xs font-bold transition flex items-center justify-center ${
                        selectedSize === s
                          ? "bg-teal-650 border-teal-650 text-white shadow-md shadow-teal-600/10"
                          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-55"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-semibold text-slate-400">Precio unitario</span>
                <span className="text-2xl md:text-3xl font-bold text-slate-900 font-mono">
                  ${product.price.toLocaleString("es-AR")}
                </span>
              </div>

              <button
                onClick={handleConsultSubmit}
                className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-teal-600/10 transition cursor-pointer text-sm"
              >
                <MessageSquare size={16} />
                <span>Consultar por este Ambo</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-950 text-teal-200/60 py-8 px-4 border-t border-teal-900/20 text-center font-sans mt-auto">
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
        productName={`${product.name} (Talle: ${selectedSize}, Color: ${selectedColor})`}
        price={product.price}
      />
    </div>
  );
}

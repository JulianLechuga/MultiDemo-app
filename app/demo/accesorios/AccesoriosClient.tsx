"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Heart, Sparkles, HelpCircle, Eye, ShieldAlert, Star } from "lucide-react";
import { ACCESSORIES_PRODUCTS, AccessoriesProduct } from "@/data/accessoriesProducts";
import { BRANDS } from "@/data/brands";
import DemoBar from "@/components/DemoBar";
import ClientCTA from "@/components/ClientCTA";
import AccessoriesProductVector from "@/components/AccessoriesProductVector";
import MockInteractionDialog from "@/components/MockInteractionDialog";

export default function AccesoriosDemoPage() {
  const brand = BRANDS.accesorios;
  const [selectedCategory, setSelectedCategory] = useState("todos");

  // Estados para el Modal de Interacción
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"whatsapp_general" | "order_product" | "custom_quote">("whatsapp_general");
  const [selectedProduct, setSelectedProduct] = useState<AccessoriesProduct | null>(null);

  // Filtrado reactivo de productos
  const categories = ["todos", "collares", "anillos", "aros", "pulseras", "dijes", "accesorios"];
  const filteredProducts = selectedCategory === "todos"
    ? ACCESSORIES_PRODUCTS
    : ACCESSORIES_PRODUCTS.filter(p => p.category === selectedCategory);

  const featuredProducts = ACCESSORIES_PRODUCTS.filter(p => p.isFeatured);

  const handleOrderClick = (product: AccessoriesProduct) => {
    setSelectedProduct(product);
    setModalType("order_product");
    setModalOpen(true);
  };

  const handleWhatsappGeneralClick = () => {
    setSelectedProduct(null);
    setModalType("whatsapp_general");
    setModalOpen(true);
  };

  return (
    <div className={`min-h-screen ${brand.themeColor.bg} text-stone-800 ${brand.fontFamilyBody} flex flex-col`}>
      {/* Barra superior de Demo */}
      <DemoBar brandName={brand.name} category={brand.category} />
      
      {/* Botón flotante comercial de lead */}
      <ClientCTA demoId="accesorios" demoName={brand.name} />

      {/* Header */}
      <header className="border-b border-stone-200 bg-white/70 backdrop-blur-md sticky top-[45px] z-20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/demo/accesorios" className={`font-bold text-xl tracking-widest uppercase ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
            {brand.name}
          </Link>
          
          <button 
            onClick={handleWhatsappGeneralClick}
            className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 active:bg-black text-white text-xs md:text-sm font-semibold py-2 px-4 rounded-lg tracking-wider uppercase transition shadow-md"
          >
            <MessageSquare size={14} />
            <span>Consultar Compra</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28 text-center px-4 border-b border-stone-200 bg-stone-100/40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#d6d3d1_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 bg-stone-200 px-3.5 py-1 rounded-full border border-stone-300">
            Piezas de Diseño & Joyería Fina
          </span>
          <h1 className={`text-4xl md:text-6xl font-normal tracking-wide leading-none ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
            Accesorios con alma minimalista
          </h1>
          <p className="text-stone-500 text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed italic font-light">
            {brand.description} Detalles delicados en plata 925 y acero quirúrgico pensados para resaltar tu esencia natural.
          </p>
          <div className="pt-4">
            <a 
              href="#coleccion"
              className="bg-stone-900 hover:bg-stone-850 text-white font-bold py-3 px-6 rounded-lg uppercase tracking-widest text-xs transition-all duration-200 hover:shadow-lg"
            >
              Explorar Colección
            </a>
          </div>
        </div>
      </section>

      {/* Nueva Colección (Productos destacados) */}
      <section id="coleccion" className="max-w-6xl mx-auto px-6 py-16 border-b border-stone-200">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] uppercase font-bold tracking-wider text-amber-600 flex items-center justify-center gap-1">
            <Star size={10} fill="#d97706" /> Recomendados del Mes
          </span>
          <h2 className={`text-3xl font-bold mt-2 text-stone-900 uppercase tracking-widest ${brand.fontFamilyTitle}`}>
            Más Vendidos
          </h2>
          <p className="text-stone-500 text-xs italic mt-1">Nuestras piezas preferidas por estudiantes y profesionales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.slice(0, 3).map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-stone-950 p-8 flex items-center justify-center relative overflow-hidden">
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-amber-600 text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-sm">
                    {product.badge}
                  </span>
                )}
                <div className="w-40 h-40 transform group-hover:scale-102 transition-transform duration-300">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                  ) : (
                    <AccessoriesProductVector id={product.id} />
                  )}
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[9px] text-stone-400 font-bold uppercase tracking-widest block mb-1">
                    {product.material}
                  </span>
                  <h3 className={`text-base font-bold text-stone-900 mb-1 group-hover:text-stone-600 transition-colors ${brand.fontFamilyTitle}`}>
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-xs leading-relaxed line-clamp-3 mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-base font-bold text-stone-900 font-mono">
                    ${product.price.toLocaleString("es-AR")}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOrderClick(product)}
                      className="bg-stone-900 hover:bg-stone-850 text-white font-bold py-2 px-4 rounded text-xs uppercase tracking-wider transition"
                    >
                      Pedir
                    </button>
                    <Link
                      href={`/demo/accesorios/productos/${product.id}`}
                      className="p-2 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-250 rounded flex items-center justify-center transition"
                    >
                      <Eye size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Catálogo General */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex-grow">
        <div className="flex flex-col items-center mb-10">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 text-stone-900 uppercase tracking-widest ${brand.fontFamilyTitle}`}>
            Catálogo Completo
          </h2>
          
          {/* Botones de Categorías */}
          <div className="flex flex-wrap justify-center gap-2 pb-4 w-full max-w-lg border-b border-stone-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1 rounded text-xs tracking-wider uppercase font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-stone-900 text-white"
                    : "bg-white hover:bg-stone-100 text-stone-700 border border-stone-250"
                }`}
              >
                {cat === "todos" ? "Ver Todo" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla General */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col justify-between group hover:shadow-sm transition-shadow"
            >
              <div className="aspect-square bg-stone-950 p-6 flex items-center justify-center relative overflow-hidden">
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-amber-600 text-white text-[8px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm">
                    {product.badge}
                  </span>
                )}
                <div className="w-32 h-32 transform group-hover:scale-102 transition-transform duration-300">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                  ) : (
                    <AccessoriesProductVector id={product.id} />
                  )}
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[8px] text-stone-400 font-bold uppercase tracking-widest block mb-1">
                    {product.material}
                  </span>
                  <h3 className={`text-sm font-bold text-stone-900 mb-1 group-hover:text-stone-600 transition-colors ${brand.fontFamilyTitle}`}>
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-xs leading-relaxed line-clamp-3 mb-3">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-stone-900 font-mono">
                    ${product.price.toLocaleString("es-AR")}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOrderClick(product)}
                      className="bg-stone-900 hover:bg-stone-850 text-white font-bold py-1.5 px-3 rounded text-[10px] uppercase tracking-wider transition"
                    >
                      Pedir
                    </button>
                    <Link
                      href={`/demo/accesorios/productos/${product.id}`}
                      className="p-1.5 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-250 rounded flex items-center justify-center transition"
                    >
                      <Eye size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Cuidados del Producto */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <ShieldAlert className="mx-auto text-amber-600 mb-2" size={32} />
            <h2 className={`text-2xl md:text-3xl font-bold text-stone-950 uppercase tracking-widest ${brand.fontFamilyTitle}`}>
              Cuidados de tus Joyas
            </h2>
            <p className="text-stone-500 text-xs italic mt-1">
              Queremos que tus accesorios duren brillantes por siempre. Seguí estos consejos sencillos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <span className="text-3xl block mb-3">🧴</span>
              <h4 className="font-bold text-stone-900 text-sm mb-2">Evitá Químicos</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Colocate perfumes, cremas corporales y alcohol en gel antes de ponerte los accesorios, no encima.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <span className="text-3xl block mb-3">💧</span>
              <h4 className="font-bold text-stone-900 text-sm mb-2">Cuidado con el Agua</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                No uses las piezas bañadas en oro en la pileta con cloro, bañeras, o agua salada del mar.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <span className="text-3xl block mb-3">🛍️</span>
              <h4 className="font-bold text-stone-900 text-sm mb-2">Guardado Individual</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Conservá cada accesorio en su bolsita de lino para evitar el roce directo y posibles rayaduras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6 text-center mt-auto font-sans">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center gap-4 text-xs font-semibold">
            <span>Ubicación: {brand.location}</span>
            <span>•</span>
            <span>Insta: {brand.fictiveInstagram}</span>
          </div>
          
          <p className="text-xs text-stone-500">
            © 2026 {brand.name}. Todos los derechos reservados. | Vista Previa de Demo de WebLab.
          </p>

          <div className="flex justify-center pt-2">
            <span className="text-[10px] bg-stone-800 text-stone-300 px-3 py-1 rounded border border-stone-700">
              Contenido de muestra. Web de simulación comercial para WebLab.
            </span>
          </div>
        </div>
      </footer>

      {/* Botón Flotante Ficticio de WhatsApp */}
      <button 
        onClick={handleWhatsappGeneralClick}
        className="fixed bottom-6 right-6 z-40 bg-stone-900 hover:bg-black text-white p-3.5 rounded-full shadow-[0_4px_15px_rgba(28,25,23,0.4)] border border-stone-800 transition-all duration-300 hover:scale-105"
        title="Enviar WhatsApp"
      >
        <MessageSquare size={24} className="animate-pulse text-amber-500" />
      </button>

      {/* Dialogo explicativo global */}
      <MockInteractionDialog
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        brandName={brand.name}
        type={modalType}
        productName={selectedProduct?.name}
        price={selectedProduct?.price}
      />
    </div>
  );
}

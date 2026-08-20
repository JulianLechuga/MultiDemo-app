"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Calendar, MapPin, HelpCircle, Heart, Coffee, ShieldCheck } from "lucide-react";
import { FOOD_PRODUCTS, FoodProduct } from "@/data/foodProducts";
import { BRANDS } from "@/data/brands";
import DemoBar from "@/components/DemoBar";
import ClientCTA from "@/components/ClientCTA";
import FoodProductVector from "@/components/FoodProductVector";
import MockInteractionDialog from "@/components/MockInteractionDialog";

const Instagram = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ComidaDemoPage() {
  const brand = BRANDS.comida;
  const [selectedCategory, setSelectedCategory] = useState("todos");
  
  // Estados para el Modal de Interacción
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"whatsapp_general" | "order_product" | "custom_quote">("whatsapp_general");
  const [selectedProduct, setSelectedProduct] = useState<FoodProduct | null>(null);

  // Filtrado de productos
  const categories = ["todos", "cookies", "pasteleria", "alfajores", "combos"];
  const filteredProducts = selectedCategory === "todos" 
    ? FOOD_PRODUCTS 
    : FOOD_PRODUCTS.filter(p => p.category === selectedCategory);

  const handleOrderClick = (product: FoodProduct) => {
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
    <div className={`min-h-screen ${brand.themeColor.bg} text-slate-800 ${brand.fontFamilyBody} flex flex-col`}>
      {/* Barra superior obligatoria */}
      <DemoBar brandName={brand.name} category={brand.category} />
      
      {/* Botón flotante comercial obligatorio */}
      <ClientCTA demoId="comida" demoName={brand.name} />

      {/* 1. HEADER DE LA MARCA */}
      <header className="border-b border-amber-900/10 bg-white/70 backdrop-blur-md sticky top-[45px] z-20">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/demo/comida" className={`font-bold text-xl md:text-2xl ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
            🍪 {brand.name}
          </Link>
          <button 
            onClick={handleWhatsappGeneralClick}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs md:text-sm py-2 px-4 rounded-xl transition shadow"
          >
            <MessageSquare size={16} />
            <span className="hidden sm:inline">Hacer Consulta</span>
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="bg-gradient-to-b from-amber-100/50 to-transparent py-12 md:py-20 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Horneado con Amor en Buenos Aires
          </span>
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
            Cookies y Pastelería Artesanal
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            {brand.description} Hacé tu pedido online y retirá en nuestro puesto de la feria o coordinamos envío.
          </p>
          <div className="pt-2">
            <a 
              href="#catalogo"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition inline-flex items-center gap-2 shadow-md shadow-amber-600/20"
            >
              Ver Carta y Combos
            </a>
          </div>
        </div>
      </section>

      {/* 3. CATEGORÍAS Y PRODUCTOS */}
      <section id="catalogo" className="max-w-6xl mx-auto px-4 py-12 flex-grow">
        <div className="flex flex-col items-center mb-8">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
            Nuestro Catálogo Dulce
          </h2>
          
          {/* Botones de Categorías */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-amber-900/10 pb-4 w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold capitalize transition ${
                  selectedCategory === cat
                    ? "bg-amber-600 text-white"
                    : "bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200"
                }`}
              >
                {cat === "pasteleria" ? "Pastelería" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl border border-amber-900/10 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Contenedor de Imagen */}
              <div className="w-full h-48 bg-amber-50/50 p-6 flex items-center justify-center relative overflow-hidden group-hover:bg-amber-100/30 transition-colors">
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-amber-600 text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full shadow-sm z-10">
                    {product.badge}
                  </span>
                )}
                <div className="w-32 h-32 transform group-hover:scale-105 transition-transform duration-300">
                  {/* REEMPLAZAR CON FOTO DEL CLIENTE: si product.image no está vacío, renderizar tag img */}
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                  ) : (
                    <FoodProductVector id={product.id} />
                  )}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className={`text-lg font-bold text-amber-950 mb-1 group-hover:text-amber-600 transition-colors ${brand.fontFamilyTitle}`}>
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-3 mb-4">
                    {product.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-slate-400">Precio</span>
                    <span className="text-xl font-bold text-amber-900 font-mono">
                      ${product.price.toLocaleString("es-AR")}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOrderClick(product)}
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 rounded-xl transition text-xs shadow-md shadow-amber-600/15"
                    >
                      Pedir
                    </button>
                    <Link
                      href={`/demo/comida/productos/${product.id}`}
                      className="px-3 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl flex items-center justify-center text-xs transition"
                    >
                      Detalle
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CÓMO PEDIR */}
      <section className="bg-amber-50/50 py-16 border-y border-amber-900/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className={`text-2xl md:text-3xl font-bold mb-10 ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
            ¿Cómo hacer tu pedido?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg mb-4">1</div>
              <h4 className="font-bold text-amber-950 mb-1">Elegís tus antojos</h4>
              <p className="text-slate-500 text-xs md:text-sm">Explorás el catálogo online y decidís qué cookies o combos querés pedir hoy.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg mb-4">2</div>
              <h4 className="font-bold text-amber-950 mb-1">Enviás por WhatsApp</h4>
              <p className="text-slate-500 text-xs md:text-sm">Al tocar Pedir, se te arma el mensaje automático con los detalles de tu compra.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg mb-4">3</div>
              <h4 className="font-bold text-amber-950 mb-1">Retirás o Envíamos</h4>
              <p className="text-slate-500 text-xs md:text-sm">Coordinamos la entrega en nuestro puesto de feria UBA o realizamos envío directo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRÓXIMA FERIA */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-amber-950 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-wider bg-amber-600 text-white px-2.5 py-1 rounded-full">
                ¡Encontranos en Vivo!
              </span>
              <h3 className={`text-2xl md:text-3xl font-bold ${brand.fontFamilyTitle}`}>
                Próxima Feria Universitaria
              </h3>
              <p className="text-amber-200 text-xs md:text-sm leading-relaxed max-w-md">
                Estaremos con stock de cookies recién horneadas y promos exclusivas para estudiantes de Medicina UBA.
              </p>
              
              <div className="space-y-2 text-xs md:text-sm text-amber-100/90">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-amber-400" />
                  <span>Miércoles 26 de Agosto, de 10:00 a 17:00 hs</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-amber-400" />
                  <span>Facultad de Medicina UBA (Pabellón Paraguay), Plaza Houssay</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-900 border border-amber-800/80 p-6 rounded-2xl text-center min-w-[200px]">
              <Coffee size={32} className="mx-auto mb-2 text-amber-400" />
              <span className="text-xs text-amber-200 uppercase block font-semibold tracking-wider">¡Retirás gratis!</span>
              <span className="text-xs text-slate-300 block mt-1">Hacé tu pedido online para asegurar stock.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS (PREGUNTAS FRECUENTES) */}
      <section className="bg-amber-50/20 py-16 border-t border-amber-900/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className={`text-2xl md:text-3xl font-bold text-center mb-10 ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-4">
            {[
              { q: "¿Con cuánta anticipación debo pedir?", a: "Para cookies clásicas y alfajores, podés pedir en el día y retirar en nuestro puesto. Para boxes grandes o pedidos especiales, sugerimos 24 a 48 hs de anticipación." },
              { q: "¿Tienen opciones sin gluten (sin TACC)?", a: "Actualmente elaboramos todos nuestros productos en una cocina común, por lo que no podemos garantizar la ausencia de contaminación cruzada. Esperamos contar con línea apta pronto." },
              { q: "¿Cómo se conservan las cookies?", a: "Nuestras cookies duran crujientes y frescas hasta 4 días en un frasco hermético. Tip: dales un golpe de calor de 10 segundos en microondas antes de comerlas para derretir el chocolate." }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-amber-900/10 p-5">
                <h4 className="font-bold text-amber-950 flex items-center gap-2 text-sm md:text-base">
                  <HelpCircle size={16} className="text-amber-600" />
                  {faq.q}
                </h4>
                <p className="text-slate-500 text-xs md:text-sm mt-2 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INSTAGRAM & FOOTER */}
      <footer className="bg-amber-950 text-amber-200/60 py-12 px-4 border-t border-amber-900/20 text-center font-sans mt-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1">
              <Instagram size={14} />
              {brand.fictiveInstagram}
            </span>
            <span>•</span>
            <span>Ubicación: {brand.location}</span>
          </div>
          
          <p className="text-xs text-amber-200/40">
            © 2026 {brand.name}. Todos los derechos reservados. | Diseñado con fines demostrativos.
          </p>

          <div className="flex justify-center pt-2">
            <span className="text-[10px] bg-amber-900 text-amber-200 px-3 py-1 rounded-full border border-amber-800/80">
              Contenido de muestra. Web de simulación comercial para WebLab.
            </span>
          </div>
        </div>
      </footer>

      {/* Botón Flotante Ficticio de WhatsApp */}
      <button 
        onClick={handleWhatsappGeneralClick}
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white p-3.5 rounded-full shadow-[0_4px_15px_rgba(16,185,129,0.4)] border border-emerald-400/20 transition-all duration-300 hover:scale-105"
        title="Enviar WhatsApp"
      >
        <MessageSquare size={24} className="animate-pulse" />
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

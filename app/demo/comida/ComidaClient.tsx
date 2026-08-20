"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Calendar, MapPin, HelpCircle, Heart, Coffee, Search } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { BRANDS } from "@/data/brands";
import DemoBar from "@/components/DemoBar";
import ClientCTA from "@/components/ClientCTA";
import FoodProductVector from "@/components/FoodProductVector";
import MockInteractionDialog from "@/components/MockInteractionDialog";
import { Product } from "@/types/product";

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
  const { products, loading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Estados para el Modal de Interacción
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"whatsapp_general" | "order_product" | "custom_quote">("whatsapp_general");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Formateador de moneda argentina
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  // Generar categorías dinámicamente a partir de los productos disponibles
  const rawCategories = Array.from(new Set(products.map((p) => p.category.toLowerCase())));
  const categories = ["todos", ...rawCategories];

  // Filtrado de productos por búsqueda y categoría
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "todos" ||
      product.category.toLowerCase() === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Filtrar productos destacados
  const featuredProducts = products.filter((p) => p.featured);

  const handleOrderClick = (product: Product) => {
    if (!product.available) return;
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
      {/* Barra superior obligatoria con botón al panel de administración */}
      <DemoBar 
        brandName={brand.name} 
        category={brand.category} 
        adminUrl="/demo/comida/admin" 
      />
      
      {/* Botón flotante comercial obligatorio */}
      <ClientCTA demoId="comida" demoName={brand.name} />

      {/* 1. HEADER DE LA MARCA */}
      <header className="border-b border-amber-900/10 bg-white/70 backdrop-blur-md sticky top-[45px] z-20">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/demo/comida" className={`font-bold text-xl md:text-2xl ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
            🍪 {brand.name}
          </Link>
          <div className="flex items-center gap-3">
            <Link 
              href="/demo/comida/admin"
              className="text-xs font-bold text-amber-800 hover:text-amber-950 hover:underline"
            >
              Administrar Catálogo
            </Link>
            <button 
              onClick={handleWhatsappGeneralClick}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs md:text-sm py-2 px-3.5 rounded-xl transition shadow cursor-pointer"
            >
              <MessageSquare size={14} />
              <span>Hacer Consulta</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="bg-gradient-to-b from-amber-150/30 to-transparent py-12 md:py-20 text-center px-4 relative overflow-hidden">
        <div className="absolute top-2 right-2 bg-amber-600 text-white text-[9px] uppercase font-extrabold tracking-widest px-2.5 py-0.5 rounded-full">
          DEMO
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            Horneado con Amor en Buenos Aires
          </span>
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
            {brand.category}
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            {brand.description} Hacé tu pedido online para retirar en la feria o recibirlo a domicilio.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <a 
              href="#catalogo"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition inline-flex items-center gap-2 shadow-md shadow-amber-600/15"
            >
              Ver Carta y Combos
            </a>
          </div>
          <p className="text-[10px] text-slate-400 italic">
            * Marca ficticia creada con fines demostrativos para el portfolio comercial.
          </p>
        </div>
      </section>

      {/* Loading state */}
      {loading ? (
        <div className="flex-grow flex flex-col items-center justify-center py-24 bg-white/40">
          <div className="w-10 h-10 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-semibold text-amber-900 mt-4">Cargando catálogo en tiempo real...</span>
        </div>
      ) : (
        <>
          {/* 3. PRODUCTOS DESTACADOS */}
          {featuredProducts.length > 0 && (
            <section className="max-w-6xl mx-auto px-4 py-8 border-b border-amber-900/5">
              <h3 className={`text-xl md:text-2xl font-bold mb-6 text-center ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
                🔥 Recomendados de la Semana
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.slice(0, 4).map((product) => (
                  <div 
                    key={product.id}
                    className="bg-white rounded-2xl border border-amber-900/10 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
                  >
                    {!product.available && (
                      <div className="absolute inset-0 bg-white/70 z-10 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="bg-stone-600 text-white font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full shadow">
                          Agotado
                        </span>
                      </div>
                    )}
                    <div className="w-full h-36 bg-amber-50/50 p-4 flex items-center justify-center relative overflow-hidden">
                      <span className="absolute top-2.5 left-2.5 bg-amber-600 text-white text-[8px] uppercase font-bold tracking-wider px-2 py-0.5 rounded shadow-sm">
                        Destacado
                      </span>
                      <div className="w-24 h-24 transform group-hover:scale-105 transition-transform duration-300">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                        ) : (
                          <FoodProductVector id={product.id} />
                        )}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div>
                        <h4 className="font-bold text-sm text-slate-800 line-clamp-1">{product.name}</h4>
                        <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2 mt-1">{product.description}</p>
                      </div>
                      <div className="mt-3">
                        <div className="flex justify-between items-baseline mb-2">
                          <span className="text-[10px] text-slate-400">Precio</span>
                          <span className="text-sm font-bold text-amber-900 font-mono">{formatter.format(product.price)}</span>
                        </div>
                        <button
                          disabled={!product.available}
                          onClick={() => handleOrderClick(product)}
                          className={`w-full text-center py-1.5 rounded-lg font-bold text-xs transition cursor-pointer ${
                            product.available
                              ? "bg-amber-600 hover:bg-amber-700 text-white shadow-sm shadow-amber-600/10"
                              : "bg-stone-200 text-stone-400 cursor-not-allowed"
                          }`}
                        >
                          {product.available ? "Pedir" : "Agotado"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. CATÁLOGO COMPLETO */}
          <section id="catalogo" className="max-w-6xl mx-auto px-4 py-12 flex-grow">
            <div className="flex flex-col items-center mb-8 space-y-4">
              <h2 className={`text-2xl md:text-3xl font-bold ${brand.themeColor.textTitle} ${brand.fontFamilyTitle}`}>
                Nuestra Carta Dulce
              </h2>
              
              {/* Buscador interactivo */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="Buscar en la carta (ej. pistacho, roll)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-amber-900/10 focus:border-amber-600 rounded-xl pl-9 pr-4 py-2 text-sm outline-none transition shadow-sm text-slate-700"
                />
              </div>
              
              {/* Botones de Categorías */}
              <div className="flex flex-wrap justify-center gap-2 border-b border-amber-900/10 pb-4 w-full">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold capitalize transition cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-amber-600 text-white"
                        : "bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200"
                    }`}
                  >
                    {cat === "pasteleria" ? "Pastelería" : cat === "todos" ? "Todos" : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grilla de productos */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-amber-900/15">
                <p className="text-slate-500 font-medium">No se encontraron productos en esta categoría o búsqueda.</p>
                <button
                  onClick={() => { setSelectedCategory("todos"); setSearchQuery(""); }}
                  className="text-amber-700 underline text-xs font-bold mt-2"
                >
                  Restablecer filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id}
                    className="bg-white rounded-2xl border border-amber-900/10 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
                  >
                    {!product.available && (
                      <div className="absolute inset-0 bg-white/70 z-10 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="bg-stone-600 text-white font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full shadow">
                          Agotado
                        </span>
                      </div>
                    )}
                    
                    {/* Contenedor de Imagen */}
                    <div className="w-full h-48 bg-amber-50/50 p-6 flex items-center justify-center relative overflow-hidden group-hover:bg-amber-100/30 transition-colors">
                      {product.featured && (
                        <span className="absolute top-3 left-3 bg-[#8A4F35] text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded shadow-sm z-10">
                          Recomendado
                        </span>
                      )}
                      <div className="w-32 h-32 transform group-hover:scale-105 transition-transform duration-300">
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
                            {formatter.format(product.price)}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <button
                            disabled={!product.available}
                            onClick={() => handleOrderClick(product)}
                            className={`flex-grow font-bold py-2.5 rounded-xl transition text-xs shadow-md cursor-pointer ${
                              product.available
                                ? "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/15"
                                : "bg-stone-200 text-stone-400 cursor-not-allowed shadow-none"
                            }`}
                          >
                            {product.available ? "Pedir" : "Agotado"}
                          </button>
                          <Link
                            href={`/demo/comida/productos/${product.slug}`}
                            className="px-3 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-250 rounded-xl flex items-center justify-center text-xs font-semibold transition"
                          >
                            Detalle
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}

      {/* 5. CÓMO PEDIR */}
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

      {/* 6. PRÓXIMA FERIA */}
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

      {/* 7. FAQS */}
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

      {/* 8. INSTAGRAM & FOOTER */}
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
              Marca ficticia creada exclusivamente con fines demostrativos para WebLab.
            </span>
          </div>
        </div>
      </footer>

      {/* Botón Flotante Ficticio de WhatsApp */}
      <button 
        onClick={handleWhatsappGeneralClick}
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white p-3.5 rounded-full shadow-[0_4px_15px_rgba(16,185,129,0.4)] border border-emerald-400/20 transition-all duration-300 hover:scale-105 cursor-pointer"
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

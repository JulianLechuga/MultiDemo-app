"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Heart, ShieldCheck, Ruler, Sparkles, Filter, Check, Eye } from "lucide-react";
import { CLOTHING_PRODUCTS, ClothingProduct } from "@/data/clothingProducts";
import { BRANDS } from "@/data/brands";
import DemoBar from "@/components/DemoBar";
import ClientCTA from "@/components/ClientCTA";
import ClothingProductVector from "@/components/ClothingProductVector";
import MockInteractionDialog from "@/components/MockInteractionDialog";

export default function IndumentariaDemoPage() {
  const brand = BRANDS.indumentaria;
  
  // Estados para filtros
  const [filterGender, setFilterGender] = useState<string>("all");
  const [filterSize, setFilterSize] = useState<string>("all");
  const [filterColor, setFilterColor] = useState<string>("all");

  // Estados para Modal de Interacción
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"whatsapp_general" | "order_product" | "custom_quote">("whatsapp_general");
  const [selectedProduct, setSelectedProduct] = useState<ClothingProduct | null>(null);

  // Extraer todos los colores y talles únicos de la data de productos para listarlos de forma dinámica
  const allColors = Array.from(new Set(CLOTHING_PRODUCTS.flatMap((p) => p.colors)));
  const allSizes = Array.from(new Set(CLOTHING_PRODUCTS.flatMap((p) => p.sizes)));

  // Filtrado reactivo de productos
  const filteredProducts = CLOTHING_PRODUCTS.filter((product) => {
    const matchesGender = filterGender === "all" || product.gender === filterGender || product.gender === "unisex";
    const matchesSize = filterSize === "all" || product.sizes.includes(filterSize) || product.sizes.includes("Unico");
    const matchesColor = filterColor === "all" || product.colors.includes(filterColor);
    return matchesGender && matchesSize && matchesColor;
  });

  const handleConsultClick = (product: ClothingProduct) => {
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
      {/* Barra superior de Demo */}
      <DemoBar brandName={brand.name} category={brand.category} />
      
      {/* Botón flotante comercial de lead */}
      <ClientCTA demoId="indumentaria" demoName={brand.name} />

      {/* Header */}
      <header className="border-b border-teal-900/10 bg-white/80 backdrop-blur-md sticky top-[45px] z-20">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/demo/indumentaria" className={`font-bold text-xl md:text-2xl ${brand.themeColor.textTitle} ${brand.fontFamilyTitle} tracking-tight flex items-center gap-1`}>
            <span className="text-teal-600 font-extrabold">A</span>
            <span>Aura Ambos</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <a 
              href="#talles"
              className="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
            >
              <Ruler size={14} />
              <span>Ver Talles</span>
            </a>
            <button 
              onClick={handleWhatsappGeneralClick}
              className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 active:bg-teal-850 text-white font-bold text-xs md:text-sm py-2 px-4 rounded-xl transition shadow"
            >
              <MessageSquare size={16} />
              <span>Consultar Stock</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50/70 to-transparent py-16 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-500/10 px-3.5 py-1 rounded-full border border-teal-500/20">
            Calidad Médica & Diseño Confortable
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${brand.themeColor.textTitle} ${brand.fontFamilyTitle} leading-none`}>
            Ambos profesionales que te acompañan
          </h1>
          <p className="text-slate-600 text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            {brand.description} Confeccionados con telas de alta resistencia química, elastizadas y de fácil lavado.
          </p>
        </div>
      </section>

      {/* Panel de Filtros y Productos */}
      <section className="max-w-6xl mx-auto px-4 py-8 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Barra de Filtros Lateral (Desktop) */}
        <aside className="lg:col-span-3 bg-white p-5 rounded-2xl border border-teal-900/10 space-y-6">
          <div className="flex items-center gap-1.5 pb-3 border-b border-slate-100">
            <Filter size={16} className="text-teal-600" />
            <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Filtros de Búsqueda</h3>
          </div>

          {/* Filtro Género */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Modelo</span>
            <div className="flex flex-col gap-1.5">
              {[
                { id: "all", label: "Todos los Modelos" },
                { id: "mujer", label: "Femenino" },
                { id: "hombre", label: "Masculino" },
                { id: "unisex", label: "Unisex" }
              ].map((g) => (
                <button
                  key={g.id}
                  onClick={() => setFilterGender(g.id)}
                  className={`text-left text-xs py-1.5 px-3 rounded-lg font-medium transition flex items-center justify-between ${
                    filterGender === g.id
                      ? "bg-teal-50 text-teal-800 font-bold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{g.label}</span>
                  {filterGender === g.id && <Check size={12} className="text-teal-600" />}
                </button>
              ))}
            </div>
          </div>

          {/* Filtro Talles */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Talle</span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setFilterSize("all")}
                className={`text-xs px-2.5 py-1 rounded-md font-medium border transition ${
                  filterSize === "all"
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-slate-650 border-slate-200 hover:bg-slate-50"
                }`}
              >
                Todos
              </button>
              {allSizes.filter(s => s !== "Unico").map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterSize(s)}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium border transition ${
                    filterSize === s
                      ? "bg-teal-600 text-white border-teal-600"
                      : "bg-white text-slate-650 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Filtro Colores */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Color</span>
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => setFilterColor("all")}
                className={`text-left text-xs py-1 px-2.5 rounded-lg transition font-medium flex items-center justify-between ${
                  filterColor === "all" ? "bg-teal-50 text-teal-800 font-bold" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                Todos los Colores
              </button>
              {allColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setFilterColor(color)}
                  className={`text-left text-xs py-1 px-2.5 rounded-lg transition font-medium flex items-center justify-between ${
                    filterColor === color ? "bg-teal-50 text-teal-800 font-bold" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {/* Indicador de Color (Hex simulado) */}
                    <span className={`w-3 h-3 rounded-full border border-slate-200 ${
                      color === "Celeste" ? "bg-sky-300" :
                      color === "Azul Marino" ? "bg-blue-950" :
                      color === "Negro" ? "bg-slate-900" :
                      color === "Verde Cirujano" || color === "Verde Oliva" ? "bg-teal-800" :
                      color === "Blanco" ? "bg-white" :
                      "bg-slate-400"
                    }`}></span>
                    <span>{color}</span>
                  </div>
                  {filterColor === color && <Check size={12} className="text-teal-600" />}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Listado de Productos */}
        <div className="lg:col-span-9 space-y-6">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Mostrando {filteredProducts.length} productos</span>
            {(filterGender !== "all" || filterSize !== "all" || filterColor !== "all") && (
              <button 
                onClick={() => { setFilterGender("all"); setFilterSize("all"); setFilterColor("all"); }}
                className="text-teal-600 hover:underline font-bold"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-teal-900/10 p-12 text-center">
              <span className="text-2xl block mb-2">🔍</span>
              <h4 className="font-bold text-slate-800">No encontramos productos</h4>
              <p className="text-slate-550 text-xs mt-1">Intentá limpiando o modificando tus filtros de búsqueda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-2xl border border-teal-900/10 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="w-full h-52 bg-slate-50/50 p-6 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-100/30 transition-colors">
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-teal-600 text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full z-10 shadow-sm">
                        {product.badge}
                      </span>
                    )}
                    <div className="w-36 h-36 transform group-hover:scale-105 transition-transform duration-300">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                      ) : (
                        <ClothingProductVector id={product.id} />
                      )}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] text-teal-600 font-bold uppercase tracking-wider block mb-1">
                        {product.gender === "unisex" ? "Unisex" : product.gender === "mujer" ? "Femenino" : "Masculino"}
                      </span>
                      <h3 className={`text-base font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors ${brand.fontFamilyTitle}`}>
                        {product.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">
                        {product.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between mb-4">
                        <span className="text-[11px] text-slate-400">Precio</span>
                        <span className="text-lg font-bold text-slate-900 font-mono">
                          ${product.price.toLocaleString("es-AR")}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleConsultClick(product)}
                          className="flex-grow bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 rounded-xl transition text-xs shadow-md shadow-teal-600/10"
                        >
                          Consultar
                        </button>
                        <Link
                          href={`/demo/indumentaria/productos/${product.id}`}
                          className="px-3 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl flex items-center justify-center text-xs transition"
                          title="Ver detalles"
                        >
                          <Eye size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sección Personalización y Bordado */}
      <section className="bg-teal-900/5 py-16 border-y border-teal-900/10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-bold uppercase text-teal-600 tracking-wider">Detalles Corporativos</span>
            <h2 className={`text-2xl md:text-3xl font-extrabold text-teal-950 mt-2 mb-4 ${brand.fontFamilyTitle}`}>
              Bordados Personalizados
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Diferenciá tu uniforme médico. Ofrecemos el servicio de bordado de nombres, especialidades, y logotipos oficiales de universidades (UBA, Barceló, etc.) u hospitales.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-700">
                <Check size={16} className="text-teal-600" />
                <span>Bordado de Nombre y Apellido (Pecho izquierdo).</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-700">
                <Check size={16} className="text-teal-600" />
                <span>Logotipo institucional digitalizado de alta definición.</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-teal-950/10 text-center space-y-4">
            <span className="text-4xl block">🧵</span>
            <h4 className="font-bold text-slate-900">¿Cómo solicitar tu bordado?</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Al enviarnos tu consulta sobre el ambo por WhatsApp, indicame qué texto o logo necesitás bordar y te pasamos el costo adicional en el acto.
            </p>
          </div>
        </div>
      </section>

      {/* Tabla de Medidas */}
      <section id="talles" className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <Ruler className="mx-auto text-teal-600 mb-2" size={32} />
          <h2 className={`text-2xl md:text-3xl font-bold text-teal-950 ${brand.fontFamilyTitle}`}>
            ¿No sabés qué talle elegir?
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mt-1">
            Compará tus medidas con nuestra tabla para asegurar el calce ideal de tu ambo (medidas en centímetros).
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-teal-900/10 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4 font-bold">Talle</th>
                  <th className="py-3 px-4 font-bold">Contorno Pecho</th>
                  <th className="py-3 px-4 font-bold">Contorno Cintura</th>
                  <th className="py-3 px-4 font-bold">Contorno Cadera</th>
                  <th className="py-3 px-4 font-bold">Largo Chaqueta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-mono">
                {[
                  { talle: "XS", pecho: "84 - 88", cintura: "64 - 68", cadera: "88 - 92", largo: "65" },
                  { talle: "S", pecho: "88 - 92", cintura: "68 - 72", cadera: "92 - 96", largo: "67" },
                  { talle: "M", pecho: "92 - 98", cintura: "72 - 78", cadera: "96 - 102", largo: "69" },
                  { talle: "L", pecho: "98 - 104", cintura: "78 - 84", cadera: "102 - 108", largo: "71" },
                  { talle: "XL", pecho: "104 - 110", cintura: "84 - 90", cadera: "108 - 114", largo: "73" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition">
                    <td className="py-3.5 px-4 font-bold text-teal-800 font-sans">{row.talle}</td>
                    <td className="py-3.5 px-4">{row.pecho} cm</td>
                    <td className="py-3.5 px-4">{row.cintura} cm</td>
                    <td className="py-3.5 px-4">{row.cadera} cm</td>
                    <td className="py-3.5 px-4">{row.largo} cm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50/60 p-4 border-t border-slate-100 text-center text-[10px] text-slate-500">
            💡 <strong>Consejo:</strong> Si tus medidas están en el límite superior, te recomendamos elegir el talle siguiente para mayor comodidad de movimiento.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-950 text-teal-200/60 py-12 px-4 border-t border-teal-900/20 text-center font-sans mt-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center gap-4 text-xs font-semibold">
            <span>Ubicación: {brand.location}</span>
            <span>•</span>
            <span>Insta: {brand.fictiveInstagram}</span>
          </div>
          
          <p className="text-xs text-teal-200/40">
            © 2026 {brand.name}. Todos los derechos reservados. | Vista Previa de Demo de WebLab.
          </p>

          <div className="flex justify-center pt-2">
            <span className="text-[10px] bg-teal-900 text-teal-200 px-3 py-1 rounded-full border border-teal-800/80">
              Contenido de muestra. Web de simulación comercial para WebLab.
            </span>
          </div>
        </div>
      </footer>

      {/* Botón Flotante Ficticio de WhatsApp */}
      <button 
        onClick={handleWhatsappGeneralClick}
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-450 active:bg-emerald-600 text-white p-3.5 rounded-full shadow-[0_4px_15px_rgba(16,185,129,0.4)] border border-emerald-400/20 transition-all duration-300 hover:scale-105"
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

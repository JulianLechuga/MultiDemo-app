"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Calendar, Compass, Box, Cog, Check, ChevronRight, HelpCircle, Eye, AlertCircle } from "lucide-react";
import { CUSTOM_PRODUCTS, CustomProduct } from "@/data/customProducts";
import { BRANDS } from "@/data/brands";
import DemoBar from "@/components/DemoBar";
import ClientCTA from "@/components/ClientCTA";
import CustomProductVector from "@/components/CustomProductVector";
import MockInteractionDialog from "@/components/MockInteractionDialog";

export default function PersonalizadosDemoPage() {
  const brand = BRANDS.personalizados;
  
  // Estado para el cotizador personalizado
  const [quoteForm, setQuoteForm] = useState({
    nombre: "",
    proyecto: "",
    detalles: "",
    medidas: "",
    cantidad: "1",
    fecha: "",
  });

  // Estados para Modal de Interacción
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"whatsapp_general" | "order_product" | "custom_quote">("whatsapp_general");
  const [selectedProduct, setSelectedProduct] = useState<CustomProduct | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuoteForm(prev => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedProduct(null);
    setModalType("custom_quote");
    setModalOpen(true);
  };

  const handleOrderClick = (product: CustomProduct) => {
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
    <div className={`min-h-screen ${brand.themeColor.bg} text-slate-300 ${brand.fontFamilyBody} flex flex-col blueprint-grid`}>
      {/* Barra superior de Demo */}
      <DemoBar brandName={brand.name} category={brand.category} />
      
      {/* Botón flotante comercial de lead */}
      <ClientCTA demoId="personalizados" demoName={brand.name} />

      {/* Header */}
      <header className="border-b border-slate-800 bg-[#0f172a]/95 backdrop-blur-md sticky top-[45px] z-20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/demo/personalizados" className={`font-bold text-lg md:text-xl tracking-wider text-cyan-400 ${brand.fontFamilyTitle} flex items-center gap-2`}>
            <Box size={20} className="animate-pulse text-cyan-400" />
            <span>CORTEX 3D</span>
          </Link>
          
          <button 
            onClick={handleWhatsappGeneralClick}
            className="flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-slate-950 font-bold text-xs md:text-sm py-2 px-4 rounded-lg tracking-wider uppercase transition shadow-md shadow-cyan-500/10 cursor-pointer"
          >
            <MessageSquare size={16} />
            <span>Consultar Servicio</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center px-4 relative overflow-hidden border-b border-slate-800 bg-slate-950/60">
        {/* Glow posterior */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px]"></div>
        
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded border border-cyan-800/50">
            [ TECNOLOGÍA DE FABRICACIÓN ADITIVA ]
          </span>
          <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white ${brand.fontFamilyTitle} leading-none`}>
            Modelos Médicos & Prototipado 3D
          </h1>
          <p className="text-slate-400 text-xs md:text-sm lg:text-base max-w-xl mx-auto leading-relaxed font-mono">
            {brand.description} Diseños precisos con materiales de alta durabilidad preparados para estudio y docencia.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a 
              href="#catalogo"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 px-6 rounded-lg uppercase tracking-wider text-xs transition shadow-md shadow-cyan-500/10"
            >
              Catálogo de Modelos
            </a>
            <a 
              href="#cotizador"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg uppercase tracking-wider text-xs border border-slate-700 transition"
            >
              Pedir Proyecto Personalizado
            </a>
          </div>
        </div>
      </section>

      {/* Catálogo de productos */}
      <section id="catalogo" className="max-w-6xl mx-auto px-6 py-16 flex-grow">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[9px] uppercase font-bold tracking-wider text-orange-400">[ MODELOS DISPONIBLES ]</span>
          <h2 className={`text-2xl md:text-3xl font-bold mt-2 text-white uppercase tracking-wider ${brand.fontFamilyTitle}`}>
            Productos y Modelos 3D
          </h2>
          <p className="text-slate-500 text-xs mt-1">Hacé clic para ver especificaciones técnicas de capa y volumen.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOM_PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Imagen/Vector */}
              <div className="w-full h-48 p-4 flex items-center justify-center relative overflow-hidden bg-slate-950/40 border-b border-slate-800/50">
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-cyan-900/80 text-cyan-400 text-[8px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-800/80">
                    {product.badge}
                  </span>
                )}
                <div className="w-32 h-32 transform group-hover:scale-102 transition-transform duration-300">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                  ) : (
                    <CustomProductVector id={product.id} />
                  )}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[8px] text-cyan-500 font-bold uppercase tracking-widest block mb-1">
                    {product.material}
                  </span>
                  <h3 className={`text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors ${brand.fontFamilyTitle}`}>
                    {product.name}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4 font-mono">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-bold text-white font-mono">
                    {product.price > 0 ? `$${product.price.toLocaleString("es-AR")}` : "A cotizar"}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOrderClick(product)}
                      className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-1.5 px-3.5 rounded text-[10px] uppercase tracking-wider transition cursor-pointer"
                    >
                      Pedir
                    </button>
                    <Link
                      href={`/demo/personalizados/productos/${product.id}`}
                      className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-350 border border-slate-700 rounded flex items-center justify-center transition"
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

      {/* Proceso: Cómo trabajamos */}
      <section className="bg-slate-950/60 py-16 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Cog className="mx-auto text-cyan-400 mb-2 animate-spin-slow" size={32} />
            <h2 className={`text-2xl md:text-3xl font-bold text-white uppercase tracking-wider ${brand.fontFamilyTitle}`}>
              Proceso de Fabricación
            </h2>
            <p className="text-slate-500 text-xs mt-1">Así convertimos tus ideas en piezas tridimensionales sólidas:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: "01", step: "Contás la Idea", text: "Nos enviás el archivo .STL o nos contás qué pieza necesitás recrear." },
              { num: "02", step: "Diseño 3D", text: "Diseñamos o preparamos el archivo y ajustamos las tolerancias físicas." },
              { num: "03", step: "Aprobación", text: "Te enviamos un render conceptual del modelo para tu confirmación." },
              { num: "04", step: "Impresión 3D", text: "Imprimimos la pieza en alta precisión con filamento ecológico o resina." },
              { num: "05", step: "Entrega", text: "Coordinamos el envío directo a tu facultad o retiro a domicilio." }
            ].map((step, i) => (
              <div key={i} className="bg-slate-900/40 p-5 rounded-lg border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-cyan-500 font-mono block mb-2">[{step.num}]</span>
                  <h4 className="font-bold text-white text-xs mb-1.5 uppercase tracking-wide">{step.step}</h4>
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed font-mono mt-2">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cotizador de Proyectos Especiales */}
      <section id="cotizador" className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <Compass className="mx-auto text-orange-500 mb-2" size={32} />
          <h2 className={`text-2xl md:text-3xl font-bold text-white uppercase tracking-wider ${brand.fontFamilyTitle}`}>
            Pedí tu Proyecto Personalizado
          </h2>
          <p className="text-slate-500 text-xs mt-1">
            Completá este formulario técnico para recibir un presupuesto de impresión ajustado.
          </p>
        </div>

        <form onSubmit={handleQuoteSubmit} className="space-y-4 bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Nombre Completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={quoteForm.nombre}
                onChange={handleInputChange}
                placeholder="Ej: Marcos"
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3.5 py-2 text-xs text-slate-200 outline-none font-mono"
              />
            </div>
            <div>
              <label htmlFor="proyecto" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">¿Qué necesitás imprimir? *</label>
              <input
                type="text"
                id="proyecto"
                name="proyecto"
                required
                value={quoteForm.proyecto}
                onChange={handleInputChange}
                placeholder="Ej: Soporte de pared Littmann / Fémur Escala 2:1"
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3.5 py-2 text-xs text-slate-200 outline-none font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="medidas" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Medidas Estimadas (cm)</label>
              <input
                type="text"
                id="medidas"
                name="medidas"
                value={quoteForm.medidas}
                onChange={handleInputChange}
                placeholder="Ej: 10 x 5 x 8 cm"
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3.5 py-2 text-xs text-slate-200 outline-none font-mono"
              />
            </div>
            <div>
              <label htmlFor="cantidad" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Cantidad de Unidades</label>
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                min="1"
                required
                value={quoteForm.cantidad}
                onChange={handleInputChange}
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3.5 py-2 text-xs text-slate-200 outline-none font-mono"
              />
            </div>
            <div>
              <label htmlFor="fecha" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Fecha Deseada</label>
              <input
                type="text"
                id="fecha"
                name="fecha"
                value={quoteForm.fecha}
                onChange={handleInputChange}
                placeholder="Ej: Antes del 15/09"
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3.5 py-2 text-xs text-slate-200 outline-none font-mono"
              />
            </div>
          </div>

          <div>
            <label htmlFor="detalles" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Descripción del Proyecto *</label>
            <textarea
              id="detalles"
              name="detalles"
              rows={4}
              required
              value={quoteForm.detalles}
              onChange={handleInputChange}
              placeholder="Contanos si tenés el archivo .STL o si necesitás servicio de modelado desde cero..."
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3.5 py-2 text-xs text-slate-200 outline-none font-mono resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-slate-950 font-bold py-2.5 rounded text-xs uppercase tracking-wider transition cursor-pointer"
          >
            Enviar Solicitud de Presupuesto
          </button>
          
          <div className="flex items-center gap-1 text-[9px] text-slate-500 justify-center">
            <AlertCircle size={10} />
            <span>El diseño definitivo se cotizará según volumen y densidad de filamento.</span>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-600 py-12 px-6 border-t border-slate-900 text-center font-sans mt-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center gap-4 text-xs font-semibold">
            <span>Ubicación: {brand.location}</span>
            <span>•</span>
            <span>Insta: {brand.fictiveInstagram}</span>
          </div>
          
          <p className="text-xs">
            © 2026 {brand.name}. Todos los derechos reservados. | Vista Previa de Demo de WebLab.
          </p>

          <div className="flex justify-center pt-2">
            <span className="text-[10px] bg-slate-900 text-slate-500 px-3 py-1 rounded border border-slate-800">
              Contenido de muestra. Web de simulación comercial para WebLab.
            </span>
          </div>
        </div>
      </footer>

      {/* Botón Flotante Ficticio de WhatsApp */}
      <button 
        onClick={handleWhatsappGeneralClick}
        className="fixed bottom-6 right-6 z-40 bg-slate-950 hover:bg-slate-900 text-cyan-400 p-3.5 rounded-full shadow-[0_4px_15px_rgba(34,211,238,0.2)] border border-slate-800 transition-all duration-300 hover:scale-105"
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

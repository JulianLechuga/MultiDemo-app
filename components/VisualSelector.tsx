"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Utensils, Shirt, Gem, Box, Sparkles, Check, ExternalLink } from "lucide-react";
import { BRANDS } from "@/data/brands";

export default function VisualSelector() {
  const [activeTab, setActiveTab] = useState<"comida" | "indumentaria" | "accesorios" | "personalizados">("comida");

  const tabDetails = {
    comida: {
      id: "comida",
      icon: Utensils,
      title: "Diseño para Locales Gastronómicos & Cafeterías",
      description: "Estructura cálida y reconfortante ideal para pastelerías, cafeterías de especialidad o stands de comida. Utiliza tipografías Serif elegantes y tonos beige que despiertan el apetito del usuario.",
      highlights: [
        "Filtros de categoría ultra rápidos (ej. pastelería, alfajores).",
        "Detalle del producto con sugerencias de consumo ('Tips del repostero').",
        "Flujo simplificado de orden: el botón de compra envía un pedido estructurado directamente al WhatsApp del local."
      ],
      colors: ["#d97706", "#f59e0b", "#fdfaf6", "#451a03"],
      typography: "Playfair Display & Quicksand",
      btnClass: "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/25",
      accentBorder: "border-amber-500/20",
      accentBg: "bg-amber-500/5",
      mockup: (
        <div className="w-full h-full bg-[#fdfaf6] text-amber-900 flex flex-col p-4 font-quicksand select-none">
          {/* Cabecera del celular */}
          <div className="flex justify-between items-center border-b border-amber-900/10 pb-2.5 mb-3">
            <span className="font-playfair font-extrabold text-sm">🍪 Gastronomía</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          
          <div className="text-[10px] text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-250/30 mb-3 text-center">
            📍 Retiros hoy en <strong>Feria de Medicina UBA</strong>
          </div>

          {/* Listado de Productos */}
          <div className="space-y-2.5 flex-grow overflow-y-auto pr-1">
            <div className="bg-white rounded-xl p-3 flex gap-3 border border-amber-900/5 shadow-sm">
              <div className="w-16 h-16 bg-amber-100/50 rounded-lg flex items-center justify-center relative overflow-hidden flex-shrink-0">
                {/* Cookie vector */}
                <div className="w-10 h-10 rounded-full bg-amber-750/90 relative">
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-amber-950 top-1.5 left-2"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-amber-950 top-4 right-2"></div>
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-amber-950 bottom-2 left-3"></div>
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-between py-0.5">
                <div>
                  <h4 className="font-bold text-xs text-slate-800 leading-tight">Cookie Red Velvet</h4>
                  <p className="text-[9px] text-slate-500 line-clamp-1">Con chispas de chocolate blanco...</p>
                </div>
                <div className="flex justify-between items-baseline mt-1">
                  <span className="text-[10px] font-bold text-amber-900 font-mono">$1.400</span>
                  <span className="text-[8px] bg-amber-100/60 text-amber-800 px-1.5 py-0.5 rounded font-bold">RECOMENDADO</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 flex gap-3 border border-amber-900/5 shadow-sm">
              <div className="w-16 h-16 bg-amber-100/50 rounded-lg flex items-center justify-center relative overflow-hidden flex-shrink-0">
                {/* Brownie vector */}
                <div className="w-10 h-10 bg-amber-950/80 rounded-md rotate-6 relative">
                  <div className="absolute w-3 h-3 bg-amber-900/50 top-1 right-1 rounded-sm"></div>
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-between py-0.5">
                <div>
                  <h4 className="font-bold text-xs text-slate-800 leading-tight">Brownie Classic</h4>
                  <p className="text-[9px] text-slate-500 line-clamp-1">Húmedo por dentro, crocante por fuera...</p>
                </div>
                <div className="flex justify-between items-baseline mt-1">
                  <span className="text-[10px] font-bold text-amber-900 font-mono">$1.600</span>
                  <span className="text-[8px] text-slate-500 font-semibold">TENTACIÓN</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4 pt-3 border-t border-amber-900/10">
            <div className="flex-grow bg-amber-600 text-white rounded-xl text-[10px] py-2 text-center font-bold shadow-md cursor-pointer">Ver Catálogo Completo</div>
            <div className="w-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center py-2 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-white/40 animate-ping"></span>
            </div>
          </div>
        </div>
      )
    },
    indumentaria: {
      id: "indumentaria",
      icon: Shirt,
      title: "Diseño para Indumentaria, Calzado & Uniformes",
      description: "Estilo ultra limpio, minimalista y profesional. Especialmente optimizado para marcas que necesitan mostrar variantes complejas como talles, colores o tipos de tela en un catálogo de ropa.",
      highlights: [
        "Filtros avanzados por talle, color y categorías seleccionables en cabecera.",
        "Guía de talles interactiva con tablas de medidas incorporadas (reduce devoluciones).",
        "Diseño enfocado a la conversión visual con galerías de producto amplias."
      ],
      colors: ["#0d9488", "#10b981", "#f6fcfb", "#0f172a"],
      typography: "Plus Jakarta Sans & Inter",
      btnClass: "bg-teal-600 hover:bg-teal-700 text-white shadow-teal-600/25",
      accentBorder: "border-teal-500/20",
      accentBg: "bg-teal-500/5",
      mockup: (
        <div className="w-full h-full bg-[#f6fcfb] text-slate-800 flex flex-col p-4 font-inter select-none">
          {/* Cabecera del celular */}
          <div className="flex justify-between items-center border-b border-teal-900/10 pb-2.5 mb-3">
            <span className="font-extrabold text-xs text-teal-850 uppercase tracking-wider">🏥 Ambos</span>
            <span className="text-[8px] font-bold px-2 py-0.5 bg-teal-100 text-teal-800 rounded">TEMPORADA 2026</span>
          </div>

          {/* Buscador Mock */}
          <div className="bg-white rounded-xl px-3 py-1.5 border border-teal-100 text-[10px] text-slate-400 mb-3 flex items-center gap-1.5">
            <span>🔍 Buscar talle, color o modelo...</span>
          </div>
          
          <div className="bg-white rounded-xl p-3.5 border border-teal-100 shadow-sm flex-grow flex flex-col justify-between mb-3">
            {/* Silueta de Ambo Médico */}
            <div className="w-full aspect-video bg-slate-50 rounded-lg flex items-center justify-center relative overflow-hidden mb-3">
              <div className="w-14 h-14 bg-teal-600 rounded-md relative flex items-center justify-center shadow-md">
                <div className="absolute top-0 w-6 h-4.5 bg-[#f6fcfb] rounded-b-md"></div>
                <div className="absolute bottom-1 right-2 w-3.5 h-3.5 bg-teal-700 rounded-sm"></div>
              </div>
            </div>

            <div>
              <span className="text-[8px] text-teal-600 font-bold uppercase tracking-wider">Indumentaria Médica</span>
              <h4 className="font-extrabold text-sm text-slate-900 leading-tight mt-0.5">Ambo Classic Spandex</h4>
              <p className="text-xs font-bold text-teal-700 mt-1 font-mono">$18.500</p>
            </div>

            {/* Opciones de talles */}
            <div className="flex gap-1.5 mt-3">
              <span className="text-[8px] font-bold px-2 py-1 bg-teal-600 text-white rounded">S</span>
              <span className="text-[8px] font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">M</span>
              <span className="text-[8px] font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">L</span>
            </div>
          </div>

          <div className="w-full bg-teal-650 text-white rounded-xl text-[10px] py-2.5 text-center font-bold shadow-md">Ver Detalle de Prenda</div>
        </div>
      )
    },
    accesorios: {
      id: "accesorios",
      icon: Gem,
      title: "Diseño Boutique para Accesorios, stickers & Joyería",
      description: "Estética sofisticada, elegante y editorial. Utiliza amplios espacios vacíos, tipografías clásicas y contrastes en blanco roto y carbón que enmarcan tus artículos como piezas de lujo.",
      highlights: [
        "Diseño enfocado a destacar los detalles finos de cada producto.",
        "Bloques dedicados para el cuidado de los materiales (ej. cómo limpiar la plata).",
        "Integración visual minimalista de las redes sociales oficiales del emprendimiento."
      ],
      colors: ["#1c1917", "#d97706", "#faf9f6", "#78716c"],
      typography: "Cormorant Garamond & Montserrat",
      btnClass: "bg-stone-900 hover:bg-stone-850 text-white shadow-stone-900/25",
      accentBorder: "border-stone-500/20",
      accentBg: "bg-stone-500/5",
      mockup: (
        <div className="w-full h-full bg-[#faf9f6] text-stone-900 flex flex-col p-4 font-montserrat select-none dark:text-white">
          {/* Cabecera del celular */}
          <div className="text-center border-b border-stone-200 pb-2.5 mb-3">
            <span className="font-cormorant font-bold text-sm uppercase tracking-widest text-stone-900 dark:text-white">💍 Accesorios</span>
          </div>

          {/* Catálogo en cuadricula */}
          <div className="grid grid-cols-2 gap-3 flex-grow overflow-y-auto mb-3">
            <div className="bg-white rounded-lg p-2.5 border border-stone-200 shadow-sm flex flex-col justify-between text-center">
              <div className="w-full aspect-square bg-stone-950 rounded flex items-center justify-center mb-2">
                <div className="w-9 h-9 rounded-full border-2 border-amber-400 relative flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-sky-100 rounded-full absolute -top-1 border border-amber-400"></div>
                </div>
              </div>
              <h4 className="font-bold text-[9px] text-stone-850 uppercase tracking-tight line-clamp-1 dark:text-white">Anillo Aurum</h4>
              <span className="text-[8px] text-stone-500 font-mono mt-0.5 dark:text-stone-300">$7.800</span>
            </div>

            <div className="bg-white rounded-lg p-2.5 border border-stone-200 shadow-sm flex flex-col justify-between text-center">
              <div className="w-full aspect-square bg-stone-950 rounded flex items-center justify-center mb-2">
                <div className="w-8 h-8 rounded-full border-2 border-stone-400 border-dashed relative animate-spin-slow"></div>
              </div>
              <h4 className="font-bold text-[9px] text-stone-850 uppercase tracking-tight line-clamp-1 dark:text-white">Aros Luna</h4>
              <span className="text-[8px] text-stone-500 font-mono mt-0.5 dark:text-stone-300">$4.500</span>
            </div>
          </div>

          <div className="w-full bg-stone-900 text-white rounded-lg text-[9px] py-2 text-center uppercase tracking-widest font-semibold">Consultar por WhatsApp</div>
        </div>
      )
    },
    personalizados: {
      id: "personalizados",
      icon: Box,
      title: "Estructuras Técnicas & Cotizadores (Impresión 3D)",
      description: "Diseñado para servicios técnicos o industriales con catálogos a medida. Posee una paleta de colores oscura tipo plano de diseño de ingeniería con detalles en cian que le dan un aire de alta tecnología.",
      highlights: [
        "Secciones específicas para detalles técnicos de impresión (resolución, material).",
        "Formulario integrado de cotización para archivos STL o proyectos a medida.",
        "Estética visual optimizada para estudiantes de ingeniería, robótica y medicina."
      ],
      colors: ["#06b6d4", "#f97316", "#0f172a", "#020617"],
      typography: "Space Grotesk & JetBrains Mono",
      btnClass: "bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold shadow-cyan-500/25",
      accentBorder: "border-cyan-500/20",
      accentBg: "bg-cyan-500/5",
      mockup: (
        <div className="w-full h-full bg-[#0f172a] text-slate-100 flex flex-col p-4 font-mono blueprint-grid select-none">
          {/* Cabecera del celular */}
          <div className="flex justify-between items-center border-b border-slate-800 pb-2.5 mb-3">
            <span className="text-[9px] text-cyan-400 font-bold tracking-widest">🧬 IMPRESION 3D</span>
            <span className="text-[7px] text-slate-500">Vol: 15x15x15cm</span>
          </div>

          <div className="border border-dashed border-cyan-500/30 rounded-xl p-3 flex flex-col items-center justify-center flex-grow mb-3 relative bg-slate-950/70 shadow-inner">
            {/* SVG Anatomical Heart representation */}
            <svg viewBox="0 0 24 24" className="w-12 h-12 fill-none stroke-cyan-450 stroke-[1.5] animate-pulse">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-[9px] font-bold text-cyan-300 mt-2.5">Corazón Anatómico 3D</span>
            <span className="text-[7px] text-slate-500 font-bold mt-0.5">Escala: 1:1 Medicina</span>
            <span className="text-[9px] text-cyan-400 font-bold mt-2 font-mono">$6.500</span>
          </div>

          <div className="w-full bg-cyan-500 text-slate-950 rounded-xl text-[9px] py-2.5 text-center font-bold">Subir Archivo para Cotizar</div>
        </div>
      )
    }
  };

  const activeDetails = tabDetails[activeTab];
  const activeBrand = BRANDS[activeTab];
  const ActiveIcon = activeDetails.icon;

  return (
    <section id="demos" className="py-28 bg-[#FAF8F5] dark:bg-stone-900 relative overflow-hidden border-t border-stone-200/80 dark:border-stone-850 transition-colors duration-300">
      {/* Elemento decorativo cálido */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#8A4F35] dark:text-amber-500 font-extrabold bg-[#8A4F35]/5 dark:bg-amber-500/10 px-4 py-1.5 rounded-full border border-[#8A4F35]/15 dark:border-amber-500/25">
            Demos del Catálogo
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-black text-stone-900 dark:text-white tracking-tight leading-tight">
            Elegí el estilo ideal para tu rubro
          </h2>
          <p className="text-stone-500 dark:text-stone-300 text-base md:text-lg font-sans leading-relaxed">
            Hacé clic en los botones para alternar entre las diferentes plantillas. Cada demo es totalmente funcional, adaptable a celulares y optimizada para el mercado argentino.
          </p>
        </div>

        {/* 1. SELECTOR DE TABS */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {(Object.keys(tabDetails) as Array<keyof typeof tabDetails>).map((tabKey) => {
            const tab = tabDetails[tabKey];
            const TabIcon = tab.icon;
            const isSelected = activeTab === tabKey;
            
            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-extrabold transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? "bg-[#8A4F35] text-white border-[#8A4F35] shadow-[0_6px_15px_rgba(138,79,53,0.2)] scale-102"
                    : "bg-white dark:bg-stone-950 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-850 hover:bg-stone-50 hover:text-stone-900 dark:hover:text-white shadow-sm"
                }`}
              >
                <TabIcon size={16} />
                <span>{BRANDS[tabKey].name}</span>
              </button>
            );
          })}
        </div>

        {/* 2. AREA DE PRESENTACIÓN - SPLIT LAYOUT GIGANTE */}
        <div className="bg-white dark:bg-stone-950 border border-stone-200/80 dark:border-stone-850 rounded-[32px] p-6 md:p-12 shadow-[0_15px_50px_-20px_rgba(44,37,32,0.06)] dark:shadow-none grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-colors">
          
          {/* Columna de Texto - Izquierda */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-xl ${activeDetails.accentBg} ${activeDetails.accentBorder} border`}>
                <ActiveIcon size={22} className="text-[#8A4F35] dark:text-amber-400" />
              </div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#8A4F35] dark:text-amber-400 font-mono">
                {activeBrand.category}
              </span>
            </div>

            <h3 className="text-2xl md:text-3.5xl font-playfair font-black text-stone-900 dark:text-white tracking-tight leading-tight">
              {activeDetails.title}
            </h3>

            <p className="text-stone-500 dark:text-stone-300 text-sm md:text-base leading-relaxed">
              {activeDetails.description}
            </p>

            {/* Beneficios Específicos */}
            <div className="border-y border-stone-100 dark:border-stone-900 py-6 my-2">
              <h4 className="text-stone-855 dark:text-stone-200 font-bold text-xs uppercase tracking-wider mb-4">Detalles destacados de la plantilla:</h4>
              <ul className="space-y-3.5">
                {activeDetails.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-xs md:text-sm text-stone-600 dark:text-stone-300 leading-normal">
                    <Check size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ficha de Diseño de la Demo */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-stone-500 dark:text-stone-300 pt-2">
              <div>
                <span className="text-stone-400 dark:text-stone-400 block font-mono text-[9px] uppercase tracking-wider mb-1">Tipografía Base</span>
                <span className="font-bold text-stone-700 dark:text-stone-300">{activeDetails.typography}</span>
              </div>
              <div>
                <span className="text-stone-400 dark:text-stone-400 block font-mono text-[9px] uppercase tracking-wider mb-1">Paleta de Colores</span>
                <div className="flex gap-1.5 mt-0.5">
                  {activeDetails.colors.map((c, i) => (
                    <span key={i} className="w-4 h-4 rounded-full border border-stone-200 dark:border-stone-850 block" style={{ backgroundColor: c }} title={c}></span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={`/demo/${activeTab}`}
                className={`flex items-center gap-2 font-bold py-3.5 px-7 rounded-xl transition duration-200 text-sm shadow-md cursor-pointer ${activeDetails.btnClass}`}
              >
                <span>Navegar la Demo en Vivo</span>
                <ExternalLink size={15} />
              </Link>
              <a
                href="#contacto"
                className="bg-stone-50 dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-850 text-stone-800 dark:text-stone-300 font-bold py-3.5 px-6 rounded-xl border border-stone-200 dark:border-stone-800 transition duration-200 text-sm text-center flex-grow sm:flex-grow-0"
              >
                Quiero una Web así
              </a>
            </div>
          </div>

          {/* Columna de Previsualización (Celular Gigante) - Derecha */}
          <div className="lg:col-span-5 flex justify-center">
            {/* Contenedor del Celular */}
            <div className="w-[340px] h-[610px] rounded-[48px] border-[7px] border-stone-900 bg-stone-900 p-2 shadow-[0_30px_60px_-15px_rgba(44,37,32,0.18)] relative animate-float">
              
              {/* Parlante / Sensor superior simulado */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-stone-900 rounded-full z-20 flex justify-center items-center">
                {/* Lente cámara */}
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 absolute right-4"></div>
              </div>
              
              {/* Botón lateral simulado */}
              <div className="absolute -left-[9px] top-24 w-[2px] h-12 bg-stone-900 rounded-r"></div>

              {/* Pantalla del celular */}
              <div className="w-full h-full rounded-[38px] overflow-hidden bg-slate-900 border border-stone-850/80 relative z-10 shadow-inner">
                {activeDetails.mockup}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

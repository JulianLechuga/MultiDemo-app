"use client";

import Link from "next/link";
import { ArrowRight, Utensils, Shirt, Gem, Box } from "lucide-react";
import { BRANDS } from "@/data/brands";

export default function VisualSelector() {
  const demos = [
    {
      id: "comida",
      icon: Utensils,
      bgClass: "from-amber-500/10 to-orange-650/10 border-amber-550/20 hover:border-amber-500/40",
      iconClass: "text-amber-500 bg-amber-500/10",
      btnClass: "bg-amber-600 hover:bg-amber-700",
      accentText: "text-amber-500",
      mockup: (
        <div className="w-full h-full bg-[#fdfaf6] text-amber-900 flex flex-col p-3.5 font-quicksand select-none">
          {/* Cabecera del celular */}
          <div className="flex justify-between items-center border-b border-amber-900/10 pb-2 mb-2">
            <span className="font-playfair font-bold text-xs">☕ Gastronomía</span>
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-900/20"></span>
            </div>
          </div>
          
          {/* Card Principal */}
          <div className="bg-amber-100/50 rounded-lg p-2.5 flex flex-col items-center justify-center mb-2 flex-grow text-center relative overflow-hidden group-hover:scale-102 transition-transform border border-amber-200/50">
            {/* Círculo decorativo imitando Cookie */}
            <div className="w-14 h-14 rounded-full bg-amber-750/90 shadow-lg flex items-center justify-center relative animate-spin-slow">
              <div className="absolute w-2 h-2 rounded-full bg-amber-950 top-3 left-4"></div>
              <div className="absolute w-1.5 h-1.5 rounded-full bg-amber-950 top-8 left-3"></div>
              <div className="absolute w-2.5 h-2.5 rounded-full bg-amber-950 top-5 right-4"></div>
              <div className="absolute w-1.5 h-1.5 rounded-full bg-amber-950 bottom-3 right-5"></div>
              <div className="absolute w-2 h-2 rounded-full bg-amber-950 bottom-7 right-3"></div>
            </div>
            <span className="text-[10px] font-bold mt-2.5 text-amber-950">Cookie Triple Chips</span>
            <span className="text-[9px] text-amber-700 font-mono mt-0.5">$1.200</span>
          </div>

          <div className="flex gap-1.5 mt-auto">
            <div className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-[9px] py-1.5 text-center font-bold shadow-sm transition">Pedir</div>
            <div className="w-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center py-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white/40 animate-ping"></span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "indumentaria",
      icon: Shirt,
      bgClass: "from-teal-500/10 to-emerald-650/10 border-teal-550/20 hover:border-teal-500/40",
      iconClass: "text-teal-400 bg-teal-500/10",
      btnClass: "bg-teal-600 hover:bg-teal-700",
      accentText: "text-teal-400",
      mockup: (
        <div className="w-full h-full bg-[#f6fcfb] text-slate-800 flex flex-col p-3.5 font-inter select-none">
          <div className="flex justify-between items-center border-b border-teal-900/10 pb-2 mb-2">
            <span className="font-bold text-[10px] text-teal-800 uppercase tracking-wider">🏥 Ambos</span>
            <span className="text-[7px] font-bold px-1.5 py-0.5 bg-teal-100 text-teal-800 rounded">EN STOCK</span>
          </div>

          {/* Filtros */}
          <div className="flex gap-1.5 mb-2.5 overflow-x-hidden">
            <span className="text-[7px] px-2 py-0.5 bg-teal-600 text-white rounded-full font-semibold">Chaquetas</span>
            <span className="text-[7px] px-2 py-0.5 bg-slate-200 text-slate-650 rounded-full">M</span>
            <span className="text-[7px] px-2 py-0.5 bg-slate-200 text-slate-650 rounded-full">Azul</span>
          </div>
          
          <div className="bg-white rounded-lg p-2 flex flex-col items-center justify-center flex-grow mb-2 border border-teal-100">
            {/* Silueta de Ambo Médico */}
            <div className="w-12 h-12 bg-teal-600 rounded-md relative flex items-center justify-center shadow-sm">
              <div className="absolute top-0 w-5 h-3.5 bg-[#f6fcfb] rounded-b-md"></div>
              <div className="absolute bottom-1 right-1.5 w-3 h-3 bg-teal-700 rounded-sm"></div>
            </div>
            <span className="text-[9px] font-bold mt-2 text-slate-800">Ambo Spandex Fit</span>
            <span className="text-[8px] text-slate-500 font-mono mt-0.5">$18.500</span>
          </div>

          <div className="w-full bg-teal-600 text-white rounded-lg text-[9px] py-1.5 text-center font-bold shadow-sm transition">Ver Medidas</div>
        </div>
      )
    },
    {
      id: "accesorios",
      icon: Gem,
      bgClass: "from-stone-500/10 to-stone-700/10 border-stone-550/20 hover:border-stone-500/40",
      iconClass: "text-stone-400 bg-stone-500/10",
      btnClass: "bg-stone-850 hover:bg-stone-900 border border-stone-700",
      accentText: "text-stone-300",
      mockup: (
        <div className="w-full h-full bg-[#faf9f6] text-stone-900 flex flex-col p-3.5 font-montserrat select-none">
          <div className="text-center border-b border-stone-200 pb-2 mb-2">
            <span className="font-cormorant font-bold text-xs uppercase tracking-widest">💍 Accesorios</span>
          </div>
          
          <div className="flex-grow flex flex-col items-center justify-center mb-2.5">
            {/* Anillo de Oro Dibujado */}
            <div className="w-12 h-12 rounded-full border-[3px] border-amber-400 relative flex items-center justify-center shadow-lg animate-pulse">
              <div className="w-2.5 h-2.5 bg-sky-100 rounded-full rotate-45 absolute -top-1.5 border border-amber-400 shadow-inner"></div>
            </div>
            <span className="text-[8px] font-bold mt-3.5 uppercase tracking-wider text-stone-850">Anillo Aura Oro</span>
            <span className="text-[7px] text-stone-500 italic mt-0.5">$7.800</span>
          </div>

          <div className="w-full bg-stone-900 text-white rounded-lg text-[7px] py-1.5 text-center uppercase tracking-widest font-semibold mt-auto shadow-sm">Consultar Pieza</div>
        </div>
      )
    },
    {
      id: "personalizados",
      icon: Box,
      bgClass: "from-cyan-500/10 to-indigo-650/10 border-cyan-550/20 hover:border-cyan-500/40",
      iconClass: "text-cyan-400 bg-cyan-500/10",
      btnClass: "bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold",
      accentText: "text-cyan-400",
      mockup: (
        <div className="w-full h-full bg-[#0f172a] text-slate-100 flex flex-col p-3.5 font-mono blueprint-grid select-none">
          <div className="flex justify-between items-center border-b border-slate-800 pb-1.5 mb-2">
            <span className="text-[8px] text-cyan-400 font-bold tracking-widest">🧬 IMPRESION 3D</span>
            <span className="text-[6px] text-slate-500">Layer: 0.12mm</span>
          </div>

          <div className="border border-dashed border-cyan-500/30 rounded-lg p-2 flex flex-col items-center justify-center flex-grow mb-2 relative overflow-hidden bg-slate-950/60 shadow-inner">
            {/* Icono de Corazón Anatómico Vectorial */}
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-cyan-400 stroke-[1.5] animate-pulse">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-[7px] font-bold text-cyan-300 mt-2">Modelo Corazón</span>
            <span className="text-[6px] text-slate-500 font-bold mt-0.5">PLA Biodegradable</span>
          </div>

          <div className="w-full bg-cyan-500 text-slate-950 rounded-lg text-[8px] py-1.5 text-center font-bold shadow-md">Cotizar Archivo</div>
        </div>
      )
    }
  ];

  return (
    <section id="demos" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Luces de fondo decorativas */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-violet-400 font-bold bg-violet-500/10 px-3.5 py-1 rounded-full border border-violet-500/20">
            Demos en Vivo
          </span>
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-4 mb-4 tracking-tight">
            Elegí un ejemplo
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Hacé clic en cualquier plantilla para navegar una versión completamente funcional. Cada página está diseñada con una estética, estructura y comportamiento únicos.
          </p>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo) => {
            const brand = BRANDS[demo.id];
            const Icon = demo.icon;
            
            return (
              <div
                key={demo.id}
                className={`flex flex-col rounded-2xl border bg-slate-900/50 backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-2 group ${demo.bgClass}`}
              >
                {/* Visualizador/Dispositivo Mockup Celular */}
                <div className="w-full h-60 rounded-xl border border-slate-800 bg-slate-950 p-2.5 mb-5 flex items-center justify-center relative overflow-hidden shadow-inner group-hover:border-slate-700/60 transition-colors">
                  {/* Cuerpo del Teléfono Ficticio */}
                  <div className="w-full h-full rounded-lg border border-slate-800/80 overflow-hidden shadow-2xl relative">
                    {demo.mockup}
                  </div>
                </div>

                {/* Detalles de la demo */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={`p-1.5 rounded-lg ${demo.iconClass}`}>
                    <Icon size={18} />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                    {brand.category}
                  </span>
                </div>

                <h3 className="text-xl font-outfit font-bold text-white mb-2">
                  {brand.name}
                </h3>
                
                <p className="text-slate-400 text-xs md:text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                  {brand.description}
                </p>

                {/* Botón de Entrada */}
                <Link
                  href={`/demo/${demo.id}`}
                  className={`w-full flex items-center justify-center gap-2 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-200 text-sm shadow-md ${demo.btnClass}`}
                >
                  <span>Explorar demo</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

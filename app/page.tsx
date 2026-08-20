"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  MessageSquare, 
  QrCode, 
  ArrowRight, 
  Smartphone, 
  Settings, 
  ShieldCheck, 
  Zap, 
  ShoppingBag, 
  Compass, 
  Share2, 
  FileText, 
  TrendingUp, 
  Check, 
  Heart,
  Terminal,
  ExternalLink,
  Code,
  Sun,
  Moon
} from "lucide-react";
import { OWNER_CONFIG } from "@/data/ownerConfig";
import VisualSelector from "@/components/VisualSelector";
import ContactForm from "@/components/ContactForm";

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

export default function MainPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-grow bg-[#FAF8F5] dark:bg-stone-950 text-stone-800 dark:text-stone-200 font-sans selection:bg-[#8A4F35] selection:text-white overflow-x-hidden transition-colors duration-300">
      
      {/* 1. NAVEGACIÓN PRINCIPAL (ESTILO EDITORIAL LIMPIO) */}
      <header className="border-b border-stone-200/80 dark:border-stone-900 bg-[#FAF8F5]/90 dark:bg-stone-950/90 backdrop-blur-md sticky top-0 z-30 w-full transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 bg-[#8A4F35] rounded-xl text-white shadow-[0_4px_12px_rgba(138,79,53,0.15)]">
              <Sparkles size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-black text-lg md:text-xl tracking-tight text-stone-900 dark:text-white leading-none">
                {OWNER_CONFIG.AGENCY_NAME}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#8A4F35] dark:text-amber-500 font-extrabold font-mono mt-0.5">Estudio Web</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider font-extrabold text-stone-500 dark:text-stone-300">
            <button onClick={() => handleScrollTo("demos")} className="hover:text-stone-900 dark:hover:text-white transition cursor-pointer">Estilos Demo</button>
            <button onClick={() => handleScrollTo("beneficios")} className="hover:text-stone-900 dark:hover:text-white transition cursor-pointer">Qué Incluye</button>
            <button onClick={() => handleScrollTo("ferias")} className="hover:text-stone-900 dark:hover:text-white transition cursor-pointer">Stand QR</button>
            <button onClick={() => handleScrollTo("funcionamiento")} className="hover:text-stone-900 dark:hover:text-white transition cursor-pointer">Proceso</button>
            <button onClick={() => handleScrollTo("precios")} className="hover:text-stone-900 dark:hover:text-white transition cursor-pointer">Planes</button>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-stone-200 dark:border-stone-850 hover:bg-stone-50 dark:hover:bg-stone-900 text-stone-600 dark:text-stone-300 transition duration-200 cursor-pointer"
              title={darkMode ? "Modo Claro" : "Modo Oscuro"}
              aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button 
              onClick={() => handleScrollTo("contacto")} 
              className="bg-[#8A4F35] hover:bg-[#72402B] text-white text-xs md:text-sm font-bold px-5 py-3 rounded-xl transition-all duration-200 shadow-md cursor-pointer border border-[#8A4F35]/10"
            >
              Pedir Presupuesto
            </button>
          </div>
        </div>
      </header>

      <main>
      {/* 2. HERO SECTION CON ESTILO CÁLIDO Y PROFESIONAL */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 border-b border-stone-200/60 dark:border-stone-900 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(138,79,53,0.06),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(138,79,53,0.15),rgba(0,0,0,0))]">
        {/* Líneas tenues decorativas de diseño editorial */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,37,32,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,37,32,0.015)_1px,transparent_1px)] dark:opacity-10 bg-[size:5rem_5rem] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left relative z-10">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-xs font-bold bg-[#8A4F35]/5 dark:bg-amber-500/10 text-[#8A4F35] dark:text-amber-400 border border-[#8A4F35]/15 dark:border-amber-500/25">
              <Sparkles size={12} className="text-[#8A4F35] animate-pulse dark:text-amber-400" />
              Diseño Web a Medida para Emprendedores Universitarios
            </span>
            
            <h1 className="text-4xl md:text-6xl font-playfair font-black text-stone-900 dark:text-white tracking-tight leading-tight">
              Una web premium para tu <br />
              <span className="text-[#8A4F35] dark:text-amber-400 italic">
                emprendimiento
              </span>
            </h1>
            
            <p className="text-stone-550 dark:text-stone-300 text-base md:text-lg leading-relaxed max-w-xl">
              Diseño y desarrollo de catálogos interactivos que cierran pedidos de forma automática. Llevá visitas de Instagram directo a tu WhatsApp y mostrá tu catálogo en ferias mediante códigos QR personalizados.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => handleScrollTo("demos")} 
                className="bg-[#8A4F35] hover:bg-[#72402B] text-white font-bold py-3.5 px-7 rounded-xl shadow-lg shadow-amber-900/10 transition duration-200 flex items-center gap-2 cursor-pointer text-sm md:text-base"
              >
                <span>Ver Demos en Vivo</span>
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => handleScrollTo("contacto")} 
                className="bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-850 text-stone-700 dark:text-stone-300 font-bold py-3.5 px-7 rounded-xl border border-stone-250 dark:border-stone-800 transition duration-200 cursor-pointer text-sm md:text-base shadow-sm"
              >
                Solicitar Presupuesto
              </button>
            </div>

            {/* Micro badges de validación */}
            <div className="flex flex-wrap items-center gap-5 pt-5 text-xs text-stone-500 dark:text-stone-300 border-t border-stone-200/80 dark:border-stone-850">
              <span className="flex items-center gap-1.5">
                <Check size={15} className="text-emerald-600" /> Sin Comisiones por Venta
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={15} className="text-emerald-600" /> Listo en 5 Días Hábiles
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={15} className="text-emerald-600" /> Optimizado para Celulares
              </span>
            </div>
          </div>

          {/* Celular Mockup Flotante */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Contenedor del celular */}
            <div className="w-full max-w-sm rounded-[42px] border-[6px] border-stone-900 bg-stone-900 p-2.5 shadow-[0_25px_60px_-15px_rgba(44,37,32,0.15)] relative group transition-transform duration-500 hover:scale-[1.01] animate-float">
              
              {/* Parlante superior simulado */}
              <div className="absolute top-4.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-stone-900 rounded-full z-20"></div>

              {/* Pantalla */}
              <div className="w-full h-96 rounded-[32px] overflow-hidden bg-slate-900 border border-stone-850/80 relative">
                
                {/* Cabecera / Status bar simulada */}
                <div className="bg-[#f6fcfb] px-4 pt-2.5 pb-1 flex justify-between items-center text-[8px] text-teal-800/60 font-semibold border-b border-teal-900/5">
                  <span>10:30 AM</span>
                  <div className="flex gap-1">
                    <span>5G</span>
                    <span>98%</span>
                  </div>
                </div>

                {/* Contenido de la Demo de Ambos */}
                <div className="absolute inset-x-0 bottom-0 top-6 bg-[#f6fcfb] text-teal-950 p-4.5 font-sans flex flex-col justify-between select-none">
                  <div>
                    <div className="flex justify-between items-center border-b border-teal-900/10 pb-2 mb-3">
                      <span className="font-bold text-xs text-teal-850">🏥 Ambos</span>
                      <span className="text-[7px] font-bold px-1.5 py-0.5 bg-teal-100 text-teal-800 rounded">FACULTAD MEDICINA UBA</span>
                    </div>

                    <div className="bg-white rounded-xl p-3 border border-teal-100 shadow-sm flex gap-3 mb-2">
                      {/* Dibujo Ambo */}
                      <div className="w-14 h-14 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-[10px] relative">
                        <div className="absolute top-0 w-4 h-2.5 bg-[#f6fcfb] rounded-b-md"></div>
                        <span>Ambo Fit</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[8px] font-extrabold text-teal-600 tracking-wider">PREMIUM</span>
                        <h4 className="font-bold text-[11px] text-slate-800 leading-tight">Ambo Spandex Celeste</h4>
                        <p className="text-xs font-bold text-teal-700 mt-1 font-mono">$18.500</p>
                      </div>
                    </div>

                    {/* Talles */}
                    <div className="flex gap-1.5 mt-3">
                      <span className="text-[7px] font-bold px-2 py-0.5 bg-teal-650 text-white rounded">S</span>
                      <span className="text-[7px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded">M</span>
                      <span className="text-[7px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded">L</span>
                    </div>
                  </div>

                  <div className="bg-emerald-500 hover:bg-emerald-600 text-white text-center py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md">
                    <MessageSquare size={13} fill="currentColor" />
                    <span>Hacer Pedido por WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* QR Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 text-stone-700 dark:text-stone-300 py-3.5 px-4 rounded-2xl flex items-center gap-3 shadow-xl border-l-4 border-l-[#8A4F35] transition-colors">
                <div className="p-2 bg-[#8A4F35]/5 dark:bg-amber-500/10 text-[#8A4F35] dark:text-amber-400 rounded-xl border border-[#8A4F35]/15 dark:border-amber-500/25">
                  <QrCode size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 dark:text-white tracking-tight">Catalogo QR Stand</h4>
                  <p className="text-[10px] text-stone-500 dark:text-stone-300 font-medium">Escaneás en feria y pedís</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL SELECTOR (ESTILOS Y DEMOS EN GIGANTE) */}
      <VisualSelector />

      {/* 4. INSTAGRAM + WEB (EL EMBUDO DE CONVERSIÓN) */}
      <section className="py-26 bg-white dark:bg-stone-950 border-y border-stone-200/80 dark:border-stone-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase text-[#8A4F35] dark:text-amber-500 tracking-wider font-mono">Embudo de Venta Directo</span>
              <h2 className="text-3.5xl md:text-5xl font-playfair font-black text-stone-900 dark:text-white tracking-tight leading-tight">
                Instagram + Web: El combo de conversión definitivo
              </h2>
              <p className="text-stone-500 dark:text-stone-300 text-sm md:text-base leading-relaxed">
                Tener una página web no significa dejar de usar Instagram. Al contrario: <strong>se complementan mutuamente</strong>. Instagram es la vitrina visual ideal para captar atención e interactuar; tu página web es la herramienta técnica optimizada para concretar el pedido sin demoras ni chats infinitos preguntando precios.
              </p>
              
              <div className="space-y-5 pt-2">
                {[
                  { step: "1", title: "Atracción (Tu Instagram)", desc: "El cliente ve un reel tuyo en cursada o paseando por ferias estudiantiles de CABA y entra a tu perfil." },
                  { step: "2", title: "Decisión (Tu Catálogo Web)", desc: "En vez de responder 'Precio por privado' a 50 mensajes repetitivos, el enlace en tu bio los dirige a tu web. Allí ven stock, talles, precios y colores en el acto." },
                  { step: "3", title: "Acción (Coordinación en tu WhatsApp)", desc: "El usuario añade lo que busca y te envía el pedido pre-armado y detallado. Solo coordinás la entrega en UBA Medicina, tu showroom o envío." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8A4F35]/5 text-[#8A4F35] border border-[#8A4F35]/15 dark:border-[#8A4F35]/35 flex items-center justify-center font-bold text-xs font-mono dark:text-amber-400 dark:bg-amber-500/10">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-stone-900 dark:text-white font-bold text-sm md:text-base">{item.title}</h4>
                      <p className="text-stone-500 dark:text-stone-300 text-xs md:text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulación visual del flujo */}
            <div className="bg-[#FAF8F5] dark:bg-stone-900 p-6 md:p-10 rounded-3xl border border-stone-200/80 dark:border-stone-800 shadow-sm relative overflow-hidden flex flex-col justify-center transition-colors">
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#8A4F35] text-center mb-8 flex items-center justify-center gap-2 font-mono dark:text-amber-400">
                <TrendingUp size={14} />
                Flujo de Compra Automatizado
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-3">
                {/* Paso 1 */}
                <div className="flex flex-col items-center bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-850 rounded-2xl p-4 w-full md:w-32 text-center shadow-sm transition-colors">
                  <div className="w-9 h-9 rounded-full bg-pink-500/5 text-pink-600 flex items-center justify-center mb-2">
                    <Instagram size={18} />
                  </div>
                  <span className="text-xs font-bold text-stone-950 dark:text-white">Instagram</span>
                  <span className="text-[9px] text-stone-400 dark:text-stone-400 mt-1 leading-tight">El cliente ve tu contenido</span>
                </div>
                
                <div className="text-stone-300 dark:text-stone-750 rotate-90 md:rotate-0 font-bold text-lg">➔</div>

                {/* Paso 2 */}
                <div className="flex flex-col items-center bg-white dark:bg-stone-950 border-2 border-[#8A4F35]/40 dark:border-[#8A4F35]/65 rounded-2xl p-4 w-full md:w-36 text-center shadow-md relative transition-colors">
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#8A4F35] text-white text-[7px] font-bold px-2 py-0.5 rounded-full">TU WEB</span>
                  <Smartphone size={24} className="text-[#8A4F35] mb-2 dark:text-amber-400" />
                  <span className="text-xs font-bold text-stone-950 dark:text-white">Catálogo Web</span>
                  <span className="text-[9px] text-stone-500 dark:text-stone-300 mt-1 leading-tight">Consulta precios y stock</span>
                </div>

                <div className="text-stone-300 dark:text-stone-750 rotate-90 md:rotate-0 font-bold text-lg">➔</div>

                {/* Paso 3 */}
                <div className="flex flex-col items-center bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-850 rounded-2xl p-4 w-full md:w-32 text-center shadow-sm transition-colors">
                  <MessageSquare size={24} className="text-emerald-600 mb-2" />
                  <span className="text-xs font-bold text-stone-950 dark:text-white">WhatsApp</span>
                  <span className="text-[9px] text-stone-400 dark:text-stone-550 mt-1 leading-tight">Pedido listo en tu chat</span>
                </div>
              </div>

              <div className="mt-8 bg-white dark:bg-stone-950 p-4.5 rounded-2xl text-center border border-stone-200 dark:border-stone-850 text-xs transition-colors">
                <span className="text-stone-500 dark:text-stone-300">
                  💡 <strong>Ahorro de Tiempo:</strong> Al auto-atenderse los clientes en la web, vos solo respondés para coordinar el cobro y la entrega final.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CÓMO SE EDITA - MOCKUP TERMINAL DE CÓDIGO (ESTILO PREMIUM CONTRASTANTE) */}
      <section className="py-24 bg-[#FAF8F5] dark:bg-stone-900 relative overflow-hidden border-b border-stone-200/80 dark:border-stone-850 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold uppercase text-[#8A4F35] dark:text-amber-500 tracking-wider font-mono">Simplicidad Técnica</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-black text-stone-900 tracking-tight leading-tight dark:text-white">
              Actualizá precios y stock vos mismo en un minuto
            </h2>
            <p className="text-stone-550 dark:text-stone-300 text-sm md:text-base leading-relaxed">
              No necesitás pagar abonos de plataformas complejas ni saber programar. Te configuramos un archivo de datos para que cambiar un precio o pausar temporalmente un producto sin stock sea tan simple como editar un mensaje de texto.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#8A4F35] font-extrabold pt-2 dark:text-amber-400">
              <Code size={16} />
              <span>Código limpio, carga instantánea y libre de comisiones.</span>
            </div>
          </div>

          {/* Consola de Código Oscura para Contraste Premium */}
          <div className="lg:col-span-7">
            <div className="bg-stone-900 border border-stone-850 rounded-2xl overflow-hidden shadow-xl">
              {/* Barra superior de terminal */}
              <div className="bg-stone-950 px-4 py-3 border-b border-stone-850 flex justify-between items-center text-[11px] font-mono text-stone-400">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                </div>
                <span className="flex items-center gap-1.5">
                  <Terminal size={12} /> data/foodProducts.ts
                </span>
              </div>
              
              {/* Código */}
              <div className="p-5 font-mono text-[10px] md:text-xs overflow-x-auto text-stone-300 leading-relaxed bg-stone-950/30">
                <p className="text-stone-500 dark:text-stone-300">// Edición de productos rápida en tu catálogo:</p>
                <p><span className="text-pink-500">export const</span> <span className="text-blue-400">PRODUCTOS</span> = [</p>
                <div className="pl-6 border-l border-stone-800 my-1">
                  <p className="text-stone-500 dark:text-stone-300">&#123;</p>
                  <div className="pl-6">
                    <p>id: <span className="text-amber-300">"cookie-clasica"</span>,</p>
                    <p>name: <span className="text-amber-300">"Cookie de Chocolate Clásica"</span>,</p>
                    <p>price: <span className="text-emerald-400 font-bold">1200</span>, <span className="text-stone-500 dark:text-stone-300">// &lt;-- Editás el precio acá</span></p>
                    <p>inStock: <span className="text-pink-500">true</span>, <span className="text-stone-500 dark:text-stone-300">// &lt;-- true (Sí) o false (No)</span></p>
                  </div>
                  <p className="text-stone-500 dark:text-stone-300">&#125;,</p>
                </div>
                <p>];</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STAND QR - EXCELENTE PARA FERIAS */}
      <section id="ferias" className="py-24 bg-white dark:bg-stone-950 border-b border-stone-200/80 dark:border-stone-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase text-[#8A4F35] tracking-wider bg-[#8A4F35]/5 px-3 py-1 rounded border border-[#8A4F35]/20 dark:border-[#8A4F35]/35 dark:text-amber-400 dark:bg-amber-500/10">
              Ventas Físicas y Stands
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-black text-stone-900 dark:text-white tracking-tight leading-tight">
              Optimizá tu puesto de Feria
            </h2>
            <p className="text-stone-500 dark:text-stone-300 text-base md:text-lg">
              Si vendés tus productos de forma física en ferias de diseño, pasillos universitarios o showrooms, este sistema agiliza el flujo de clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Tarjeta explicativa */}
            <div className="lg:col-span-5 bg-[#FAF8F5] dark:bg-stone-900 border border-stone-200 dark:border-stone-850 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition-colors">
              <div>
                <div className="p-3 bg-[#8A4F35]/5 dark:bg-amber-500/10 text-[#8A4F35] dark:text-amber-400 w-fit rounded-xl border border-[#8A4F35]/15 dark:border-amber-500/25 mb-6">
                  <QrCode size={24} />
                </div>
                <h3 className="text-2xl font-playfair font-black text-stone-900 dark:text-white mb-4 tracking-tight">El puesto inteligente</h3>
                <p className="text-stone-500 dark:text-stone-300 text-sm md:text-base leading-relaxed mb-6">
                  Colocás un cartel con un código QR en tu mesa de feria. El cliente escanea el código y accede al catálogo de inmediato en su celular. Esto le permite ver la lista completa de variedades, consultar talles y precios, y reservar su pedido en el acto.
                </p>
              </div>

              <div className="border-t border-stone-200/80 dark:border-stone-800 pt-6 mt-6">
                <h4 className="text-stone-900 dark:text-white font-bold text-xs uppercase tracking-wider mb-4 font-mono">Ventajas en Feria:</h4>
                <ul className="space-y-3.5 text-xs md:text-sm text-stone-600 dark:text-stone-300">
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Evitás perder ventas cuando te quedás sin stock en la mesa.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Los clientes te hacen consultas y pedidos después de la feria.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Ahorrás el envío manual de fotos del stock por chat.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Gráfico visual del QR stand */}
            <div className="lg:col-span-7 bg-[#FAF8F5] dark:bg-stone-900 border border-stone-200 dark:border-stone-855 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center relative overflow-hidden shadow-sm transition-colors">
              <div className="w-full max-w-md relative z-10 space-y-6">
                <div className="bg-white dark:bg-stone-950 p-5 rounded-2xl border border-stone-200 dark:border-stone-850 flex items-center justify-between shadow-sm transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center justify-center text-[#8A4F35] dark:text-amber-400">
                      <QrCode size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 dark:text-white">1. QR en el Stand</h4>
                      <p className="text-[9px] text-stone-400 dark:text-stone-400 font-mono">Folleto o cartel de acrílico impreso</p>
                    </div>
                  </div>
                  <span className="text-[9px] bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-450 px-2 py-0.5 rounded border border-emerald-500/25 font-bold uppercase">Escaneo</span>
                </div>

                <div className="w-0.5 h-6 bg-[#8A4F35]/40 dark:bg-amber-500/30 mx-auto"></div>

                <div className="bg-white dark:bg-stone-950 p-5 rounded-2xl border border-stone-200 dark:border-stone-850 flex items-center justify-between shadow-sm transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center justify-center text-[#8A4F35] dark:text-amber-400">
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 dark:text-white">2. Catálogo Interactivo</h4>
                      <p className="text-[9px] text-stone-400 dark:text-stone-400 font-mono">El cliente recorre tu stock</p>
                    </div>
                  </div>
                  <span className="text-[9px] bg-amber-500/10 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400 px-2 py-0.5 rounded border border-amber-500/25 font-bold uppercase">Navegación</span>
                </div>

                <div className="w-0.5 h-6 bg-[#8A4F35]/40 dark:bg-amber-500/30 mx-auto"></div>

                <div className="bg-white dark:bg-stone-950 p-5 rounded-2xl border border-stone-200 dark:border-stone-850 flex items-center justify-between shadow-sm transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center justify-center text-emerald-600">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 dark:text-white">3. Consulta a WhatsApp</h4>
                      <p className="text-[9px] text-stone-400 dark:text-stone-300 font-mono">Pedido listo en tu chat</p>
                    </div>
                  </div>
                  <span className="text-[9px] bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-450 px-2 py-0.5 rounded border border-emerald-500/25 font-bold uppercase">Cierre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. QUÉ INCLUYE UNA WEB - BENTO GRID LAYOUT */}
      <section id="beneficios" className="py-24 bg-[#FAF8F5] dark:bg-stone-900 border-b border-stone-200/80 dark:border-stone-855 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase text-[#8A4F35] dark:text-amber-500 tracking-wider font-mono">Detalles del Servicio</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-black text-stone-900 dark:text-white tracking-tight leading-tight">
              ¿Qué incluye tu página web?
            </h2>
            <p className="text-stone-500 dark:text-stone-300 text-base md:text-lg">
              Diseño profesional, veloz y optimizado para la realidad de los emprendedores en Argentina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Settings, title: "Diseño Personalizado", text: "Adaptado a los colores de tu logotipo, tipografías y el estilo de tu marca." },
              { icon: ShoppingBag, title: "Catálogo Completo", text: "Filtros rápidos por talle, color y categorías para simplificar la búsqueda." },
              { icon: Smartphone, title: "Adaptable a Celulares", text: "Interfaz móvil optimizada. Tu web cargará de forma impecable en cualquier dispositivo." },
              { icon: MessageSquare, title: "Enlace a WhatsApp", text: "Tus clientes te envían el detalle de su pedido estructurado listo para cobrar." },
              { icon: QrCode, title: "Folleto QR para Stand", text: "Diseño y entrega de un código QR listo para imprimir y colgar en tu puesto." },
              { icon: Zap, title: "Carga Ultra Rápida", text: "Desarrollado en Next.js con carga veloz en celulares con conexiones de red lentas." },
              { icon: FileText, title: "Links de Producto", text: "Cada producto tiene su propio enlace directo. Ideal para enviarlos por MD de Instagram." },
              { icon: Compass, title: "Optimización SEO", text: "Estructura preparada para aparecer indexado en Google cuando busquen tu marca." },
              { icon: ShieldCheck, title: "Hospedaje Bonificado", text: "El hosting está incluido durante el primer año en servidores estables y rápidos." }
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-white dark:bg-stone-950 p-6 rounded-2xl border border-stone-200 dark:border-stone-850 hover:border-stone-300 dark:hover:border-stone-750 transition-colors shadow-sm">
                  <div className="p-2.5 bg-[#8A4F35]/5 text-[#8A4F35] w-fit rounded-xl border border-[#8A4F35]/15 dark:border-[#8A4F35]/30 mb-4 shadow-inner dark:text-amber-400 dark:bg-amber-500/10">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-stone-900 dark:text-white font-bold text-sm md:text-base mb-2 font-playfair">{benefit.title}</h4>
                  <p className="text-stone-500 dark:text-stone-300 text-xs md:text-sm leading-relaxed">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CÓMO FUNCIONA */}
      <section id="funcionamiento" className="py-24 bg-white dark:bg-stone-950 border-b border-stone-200/80 dark:border-stone-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase text-[#8A4F35] dark:text-amber-500 tracking-wider font-mono">Paso a Paso</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-black text-stone-900 dark:text-white tracking-tight leading-tight">
              El proceso de trabajo
            </h2>
            <p className="text-stone-500 dark:text-stone-300 text-base md:text-lg">
              Simple y ágil. Tu página web estará online y lista para vender en pocos días.
            </p>
          </div>

          <div className="relative border-l border-stone-200 dark:border-stone-800 max-w-3xl mx-auto pl-6 md:pl-8 space-y-12">
            {[
              { step: "Fase 1", title: "Elegimos un estilo de base", text: "Navegamos las demos en vivo de comida, indumentaria, accesorios o cotizadores. Seleccionamos la disposición estructural de base que mejor se ajuste a tu catálogo." },
              { step: "Fase 2", title: "Adaptamos la web a tu marca", text: "Modificamos la paleta de colores oficial, tipografías y añadimos tu logotipo y redes. Hacemos que la página se sienta 100% de tu marca." },
              { step: "Fase 3", title: "Cargamos tu stock inicial", text: "Nos enviás la información, fotos y precios de tus productos destacados y combos. Nosotros nos encargamos de maquetarlos y subirlos." },
              { step: "Fase 4", title: "Publicamos tu web", text: "Conectamos tu propio dominio comercial (ej: marcasalud.com.ar) y publicamos la página en internet con certificado de seguridad SSL." },
              { step: "Fase 5", title: "Soporte y Actualizaciones", text: "Te entregamos un instructivo muy simple para que cambies los precios vos mismo en un minuto. Además, ofrecemos soporte opcional." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#8A4F35] dark:bg-amber-500 border-4 border-white dark:border-stone-955 shadow-md"></div>
                <div>
                  <span className="text-xs font-bold text-[#8A4F35] dark:text-amber-400 dark:text-amber-400 tracking-wider uppercase font-mono">{item.step}</span>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 dark:text-white mt-1 mb-2 font-playfair">{item.title}</h3>
                  <p className="text-stone-500 dark:text-stone-300 text-xs md:text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PLANES Y PRECIOS */}
      <section id="precios" className="py-24 bg-[#FAF8F5] dark:bg-stone-900 border-b border-stone-200/80 dark:border-stone-850 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase text-[#8A4F35] dark:text-amber-500 tracking-wider font-mono">Presupuestos Claros</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-black text-stone-900 dark:text-white tracking-tight leading-tight">
              Precios pensados para crecer
            </h2>
            <p className="text-stone-500 dark:text-stone-300 text-base md:text-lg">
              Inversión en pago único. Sin cargos fijos mensuales ni retenciones por tus ventas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {OWNER_CONFIG.PLANES.map((plan) => (
              <div 
                key={plan.id}
                className={`rounded-3xl p-5 md:p-6.5 flex flex-col justify-between border transition-all duration-300 ${
                  plan.recommended 
                    ? "bg-white dark:bg-stone-950 border-[#8A4F35]/65 dark:border-[#8A4F35]/65 shadow-[0_15px_40px_-5px_rgba(44,37,32,0.06)] relative -translate-y-2 lg:-translate-y-4" 
                    : "bg-white/50 dark:bg-stone-950/30 border-stone-200 dark:border-stone-850"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8A4F35] text-white text-[10px] uppercase font-extrabold tracking-widest px-4 py-1.5 rounded-full shadow-md animate-pulse">
                    El más elegido
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2 font-playfair">{plan.name}</h3>
                  <p className="text-stone-500 dark:text-stone-300 text-xs mb-5 leading-relaxed min-h-[48px]">{plan.description}</p>
                  
                  {/* Puesta en marcha y abono */}
                  <div className="space-y-2 mb-5.5 bg-stone-50/50 dark:bg-stone-900/30 p-3 rounded-xl border border-stone-100 dark:border-stone-850">
                    <div>
                      <span className="text-[9px] text-stone-400 dark:text-stone-400 block font-mono uppercase tracking-wider">Puesta en marcha</span>
                      <span className="text-base font-extrabold text-stone-800 dark:text-stone-200 font-mono">{plan.setupPrice}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-[#8A4F35] dark:text-amber-500 block font-mono uppercase tracking-wider">Abono mensual</span>
                      <span className="text-xs font-bold text-[#8A4F35] dark:text-amber-400 dark:text-amber-400 font-mono">{plan.monthlyPrice}</span>
                    </div>
                  </div>

                  <hr className="border-stone-100 dark:border-stone-900 mb-4" />

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-[11px] text-stone-600 dark:text-stone-300 leading-snug">
                        <Check size={14} className="text-[#8A4F35] dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    handleScrollTo("contacto");
                    const rubroSelect = document.getElementById("rubro") as HTMLSelectElement;
                    if (rubroSelect) {
                      if (plan.id === "express") rubroSelect.value = "comida";
                      else if (plan.id === "catalogo") rubroSelect.value = "indumentaria";
                      else if (plan.id === "catalogo-full") rubroSelect.value = "personalizados";
                      else if (plan.id === "ecommerce") rubroSelect.value = "otro";
                    }
                  }}
                  className={`w-full text-center py-2.5 rounded-xl font-bold transition duration-200 text-xs cursor-pointer ${
                    plan.recommended
                      ? "bg-[#8A4F35] hover:bg-[#72402B] text-white shadow-md shadow-amber-900/10"
                      : "bg-stone-50 dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-850 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800"
                  }`}
                >
                  Consultar Plan
                </button>
              </div>
            ))}
          </div>

          {/* Tabla Comparativa de Tarifas */}
          <div className="mt-16 overflow-x-auto max-w-5xl mx-auto bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 rounded-3xl p-6 md:p-8 shadow-sm transition-colors">
            <h3 className="text-base font-bold text-stone-900 dark:text-white mb-6 font-playfair text-center">Resumen de Planes y Tarifas</h3>
            <table className="w-full text-left text-xs md:text-sm border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-stone-250/60 dark:border-stone-800 text-stone-500 dark:text-stone-200 font-mono text-[9px] uppercase tracking-wider">
                  <th className="py-3 px-4 font-bold">Plan</th>
                  <th className="py-3 px-4 text-right font-bold">Puesta en marcha</th>
                  <th className="py-3 px-4 text-right font-bold">Mensual</th>
                  <th className="py-3 px-4 text-center font-bold">Panel Admin</th>
                  <th className="py-3 px-4 text-center font-bold">Pasarela Pagos</th>
                  <th className="py-3 px-4 text-center font-bold">Hosting / Dominio</th>
                  <th className="py-3 px-4 font-bold">Ideal para</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 dark:divide-stone-800 text-stone-600 dark:text-stone-350">
                <tr className="hover:bg-stone-50/50 dark:hover:bg-stone-850/50 transition-colors">
                  <td className="py-4 px-4 font-bold text-stone-900 dark:text-white">Express</td>
                  <td className="py-4 px-4 text-right font-mono text-stone-800 dark:text-stone-100 font-medium">$60.000 – $90.000</td>
                  <td className="py-4 px-4 text-right font-mono text-stone-800 dark:text-stone-100 font-medium">$5.000 – $8.000</td>
                  <td className="py-4 px-4 text-center text-stone-400 dark:text-stone-500 font-medium">❌ No (Código estático)</td>
                  <td className="py-4 px-4 text-center text-stone-400 dark:text-stone-500 font-medium">❌ No</td>
                  <td className="py-4 px-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">✅ Bonificado (1er año)</td>
                  <td className="py-4 px-4 text-xs text-stone-500 dark:text-stone-300 leading-relaxed">Stands de feria y muestras rápidas.</td>
                </tr>
                <tr className="hover:bg-stone-50/50 dark:hover:bg-stone-850/50 transition-colors">
                  <td className="py-4 px-4 font-bold text-stone-900 dark:text-white">Catálogo</td>
                  <td className="py-4 px-4 text-right font-mono text-stone-800 dark:text-stone-100 font-medium">$110.000 – $160.000</td>
                  <td className="py-4 px-4 text-right font-mono text-stone-800 dark:text-stone-100 font-medium">$12.000 – $20.000</td>
                  <td className="py-4 px-4 text-center text-stone-400 dark:text-stone-500 font-medium">❌ No (Edición simple)</td>
                  <td className="py-4 px-4 text-center text-stone-400 dark:text-stone-500 font-medium">❌ No</td>
                  <td className="py-4 px-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">✅ Bonificado (1er año)</td>
                  <td className="py-4 px-4 text-xs text-stone-550 dark:text-stone-300 leading-relaxed">Catálogos fijos de productos regulares.</td>
                </tr>
                <tr className="hover:bg-stone-50/50 bg-[#8A4F35]/5 dark:bg-amber-950/20 dark:border-amber-500/30 dark:hover:bg-amber-950/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-[#8A4F35] dark:text-amber-400">⭐ Catálogo Full</td>
                  <td className="py-4 px-4 text-right font-mono font-bold text-[#8A4F35] dark:text-amber-400">$190.000 – $280.000</td>
                  <td className="py-4 px-4 text-right font-mono font-bold text-[#8A4F35] dark:text-amber-400">$18.000 – $30.000</td>
                  <td className="py-4 px-4 text-center text-emerald-600 dark:text-emerald-400 font-extrabold">✅ Sí (Celular + PC)</td>
                  <td className="py-4 px-4 text-center text-[#8A4F35] dark:text-amber-400 font-semibold">No (Cero Comisiones)</td>
                  <td className="py-4 px-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">✅ Bonificado (1er año)</td>
                  <td className="py-4 px-4 text-xs text-amber-900 dark:text-amber-300 leading-relaxed font-bold">🔥 Emprendimientos activos con stock dinámico.</td>
                </tr>
                <tr className="hover:bg-stone-50/50 transition-colors">
                  <td className="py-4 px-4 font-bold text-stone-900 dark:text-white">E-commerce</td>
                  <td className="py-4 px-4 text-right font-mono text-stone-800 dark:text-stone-100 font-medium">desde $350.000</td>
                  <td className="py-4 px-4 text-right font-mono text-stone-800 dark:text-stone-100 font-medium">desde $30.000</td>
                  <td className="py-4 px-4 text-center text-stone-700 dark:text-stone-300 font-medium">✅ Sí (Completo)</td>
                  <td className="py-4 px-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">✅ Sí (Mercado Pago)</td>
                  <td className="py-4 px-4 text-center text-stone-400 dark:text-stone-500 font-medium">A cargo de cliente</td>
                  <td className="py-4 px-4 text-xs text-stone-550 dark:text-stone-300 leading-relaxed">Tiendas de escala con cobros automatizados.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. FORMULARIO Y CONTACTO */}
      <section id="contacto" className="py-24 bg-white dark:bg-stone-950 border-b border-stone-200/80 dark:border-stone-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Texto CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div className="space-y-5">
                <span className="text-xs font-bold uppercase text-[#8A4F35] dark:text-amber-500 tracking-wider font-mono">¿Hacemos tu catálogo?</span>
                <h2 className="text-3xl md:text-5xl font-playfair font-black text-stone-900 dark:text-white tracking-tight leading-tight">
                  Solicitá tu presupuesto
                </h2>
                <p className="text-stone-500 dark:text-stone-300 text-sm md:text-base leading-relaxed">
                  Completá el formulario con los datos de tu emprendimiento en un minuto. Te responderé por WhatsApp para coordinar el diseño de tu catálogo y el stock inicial.
                </p>
              </div>

              <div className="border-t border-stone-200 dark:border-stone-800 pt-6 mt-6 space-y-4">
                <h4 className="text-stone-900 dark:text-white font-bold text-xs uppercase tracking-wider text-stone-500 font-mono">Contacto Directo:</h4>
                
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-500/5 text-emerald-600 rounded-lg border border-emerald-500/15">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] text-stone-450 block uppercase font-bold tracking-wider font-mono">WhatsApp</span>
                    <a href={`https://wa.me/${OWNER_CONFIG.OWNER_WHATSAPP}`} target="_blank" className="text-sm font-bold text-stone-850 dark:text-stone-200 hover:underline">
                      +{OWNER_CONFIG.OWNER_WHATSAPP}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#8A4F35]/5 dark:bg-amber-500/10 text-[#8A4F35] dark:text-amber-400 rounded-lg border border-[#8A4F35]/15 dark:border-amber-500/25">
                    <FileText size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] text-stone-450 block uppercase font-bold tracking-wider font-mono">Correo Electrónico</span>
                    <a href={`mailto:${OWNER_CONFIG.EMAIL}`} className="text-sm font-bold text-stone-850 dark:text-stone-200 hover:underline">
                      {OWNER_CONFIG.EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* 11. FOOTER (ESTILO OSCURO EDITORIAL PARA CONTRASTE FINAL) */}
      <footer className="bg-stone-900 dark:bg-stone-950 text-stone-400 py-16 px-6 border-t border-stone-950 dark:border-stone-900 text-center md:text-left transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm font-sans">
          <div className="flex items-center gap-2.5">
            <span className="font-playfair font-black text-white text-base">
              {OWNER_CONFIG.AGENCY_NAME}
            </span>
            <span className="text-stone-500 dark:text-stone-600">|</span>
            <span>Diseño de Webs Económicas para Emprendimientos</span>
          </div>

          <div>
            <span className="text-stone-500 dark:text-stone-300">© 2026 {OWNER_CONFIG.AGENCY_NAME}. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP (GENERAL LANDING) */}
      <a 
        href={`https://api.whatsapp.com/send?phone=${OWNER_CONFIG.OWNER_WHATSAPP}&text=${encodeURIComponent("Hola Julián! Vi tu portfolio de páginas web y me gustaría consultar por un presupuesto para mi emprendimiento.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-450 active:bg-emerald-600 text-white p-3.5 rounded-full shadow-[0_6px_25px_rgba(16,185,129,0.4)] border border-emerald-400/20 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
        title="Consultar por WhatsApp"
        aria-label="Enviar consulta por WhatsApp"
      >
        <MessageSquare size={24} className="animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300 uppercase tracking-widest whitespace-nowrap">
          Consultar Web
        </span>
      </a>

    </div>
  );
}

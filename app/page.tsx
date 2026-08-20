"use client";

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
  Code
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
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-grow bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* 1. NAVEGACIÓN PRINCIPAL */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-30 w-full">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-violet-600 to-indigo-650 rounded-lg text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <Sparkles size={18} />
            </div>
            <span className="font-outfit font-extrabold text-lg md:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              {OWNER_CONFIG.AGENCY_NAME}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold text-slate-400">
            <button onClick={() => handleScrollTo("demos")} className="hover:text-white transition cursor-pointer">Estilos Demo</button>
            <button onClick={() => handleScrollTo("beneficios")} className="hover:text-white transition cursor-pointer">Qué Incluye</button>
            <button onClick={() => handleScrollTo("ferias")} className="hover:text-white transition cursor-pointer">Stand QR</button>
            <button onClick={() => handleScrollTo("funcionamiento")} className="hover:text-white transition cursor-pointer">Proceso</button>
            <button onClick={() => handleScrollTo("precios")} className="hover:text-white transition cursor-pointer">Planes</button>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleScrollTo("contacto")} 
              className="bg-gradient-to-r from-violet-600 to-indigo-650 hover:from-violet-500 hover:to-indigo-600 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-xl transition duration-200 shadow-md cursor-pointer border border-violet-400/25"
            >
              Pedir Presupuesto
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION CON ESTILO EDITORIAL PREMIUM */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 border-b border-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.18),rgba(255,255,255,0))]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left relative z-10">
            <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Sparkles size={12} className="text-indigo-450 animate-pulse" />
              Diseño Web & Catálogos para Ferias Universitarias
            </span>
            
            <h1 className="text-4xl md:text-6xl font-outfit font-extrabold text-white tracking-tight leading-none">
              Tu marca merece una <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-450 via-indigo-400 to-cyan-400 drop-shadow-sm">
                web que venda sola
              </span>
            </h1>
            
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
              Diseño y desarrollo de catálogos interactivos optimizados para vender. Convertí visitas de Instagram en pedidos de WhatsApp y mostrá todo tu stock en ferias mediante códigos QR.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => handleScrollTo("demos")} 
                className="bg-gradient-to-r from-violet-600 to-indigo-650 hover:from-violet-500 hover:to-indigo-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-600/30 transition duration-200 flex items-center gap-2 cursor-pointer text-sm md:text-base border border-violet-400/20"
              >
                <span>Explorar Demos en Vivo</span>
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => handleScrollTo("contacto")} 
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl border border-slate-800 transition duration-200 cursor-pointer text-sm md:text-base"
              >
                Solicitar Presupuesto
              </button>
            </div>

            {/* Micro badges de validación real */}
            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-slate-500 border-t border-slate-900">
              <span className="flex items-center gap-1">
                <Check size={14} className="text-emerald-400" /> Cero Comisiones por Venta
              </span>
              <span className="flex items-center gap-1">
                <Check size={14} className="text-emerald-400" /> Listo en 5 Días Hábiles
              </span>
              <span className="flex items-center gap-1">
                <Check size={14} className="text-emerald-400" /> Enfoque Mobile-First
              </span>
            </div>
          </div>

          {/* Celular Mockup Flotante */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-sm rounded-[32px] border-4 border-slate-800 bg-slate-950 p-3 shadow-[0_25px_60px_-15px_rgba(99,102,241,0.3)] relative group transition-transform duration-500 hover:scale-[1.02]">
              
              {/* Botón de encendido simulado */}
              <div className="absolute -right-1.5 top-16 w-1 h-10 bg-slate-800 rounded-l"></div>
              
              {/* Pantalla */}
              <div className="w-full h-88 rounded-[22px] overflow-hidden bg-slate-900 border border-slate-800/80 relative">
                
                {/* Cabecera / Status bar simulada */}
                <div className="bg-[#f6fcfb] px-4 pt-2.5 pb-1 flex justify-between items-center text-[8px] text-teal-800/60 font-semibold border-b border-teal-900/5">
                  <span>9:41 AM</span>
                  <div className="w-16 h-3 bg-slate-900 rounded-full absolute left-1/2 -translate-x-1/2 top-1.5"></div>
                  <div className="flex gap-1">
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Contenido de la Demo de Ambos */}
                <div className="absolute inset-x-0 bottom-0 top-6 bg-[#f6fcfb] text-teal-950 p-4 font-sans flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center border-b border-teal-900/10 pb-2 mb-3">
                      <span className="font-bold text-xs text-teal-850">🏥 Ambos</span>
                      <span className="text-[8px] font-bold px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">FACULTAD MEDICINA UBA</span>
                    </div>

                    <div className="bg-white rounded-xl p-2.5 border border-teal-100 shadow-sm flex gap-3 mb-2">
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

                    {/* Grilla talle */}
                    <div className="flex gap-1 mt-3">
                      <span className="text-[7px] font-bold px-1.5 py-0.5 bg-teal-600 text-white rounded">S</span>
                      <span className="text-[7px] font-bold px-1.5 py-0.5 bg-slate-200 text-slate-500 rounded">M</span>
                      <span className="text-[7px] font-bold px-1.5 py-0.5 bg-slate-200 text-slate-500 rounded">L</span>
                    </div>
                  </div>

                  <div className="bg-emerald-500 hover:bg-emerald-600 text-white text-center py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md">
                    <MessageSquare size={13} fill="currentColor" />
                    <span>Hacer Pedido por WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* QR Badge */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-800 text-slate-200 py-3.5 px-4 rounded-2xl flex items-center gap-3 shadow-2xl border-l-4 border-l-violet-500">
                <div className="p-2 bg-violet-500/10 text-violet-400 rounded-xl border border-violet-500/20">
                  <QrCode size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-tight">Catalogo QR Stand</h4>
                  <p className="text-[10px] text-slate-500">Escaneás y hacés tu pedido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL SELECTOR (ELEGÍ UN ESTILO) */}
      <VisualSelector />

      {/* 4. INSTAGRAM + WEB (EL EMBUDO DE CONVERSIÓN) */}
      <section className="py-24 bg-slate-900/60 border-y border-slate-900/80 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">Embudo de Ventas Inteligente</span>
              <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-1 mb-4 tracking-tight">
                Instagram + Web: <br />El combo que convierte
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Tener una página web no significa dejar de usar Instagram. Al contrario: <strong>se complementan perfectamente</strong>. Instagram es la vitrina para llamar la atención; la web es la herramienta técnica para cerrar el trato sin fricción ni mensajes interminables.
              </p>
              
              <div className="space-y-4 pt-2">
                {[
                  { step: "1", title: "Descubrimiento (Instagram)", desc: "El cliente ve tu reel o historia en cursada de la UBA o paseando por Plaza Houssay, le gusta tu producto y entra al perfil." },
                  { step: "2", title: "Decisión de Compra (Tu Catálogo Web)", desc: "En vez de responder 'Precio por privado' a 50 personas, tu link de perfil los lleva a tu catálogo. Ven precios, talles, colores y stock al instante." },
                  { step: "3", title: "Cierre de Pedido (WhatsApp)", desc: "El cliente selecciona lo que quiere y te manda un mensaje directo con el pedido pre-armado y estructurado. Solo coordinás el pago y la entrega." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-500/10 text-indigo-450 border border-indigo-500/20 flex items-center justify-center font-bold text-xs">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm md:text-base">{item.title}</h4>
                      <p className="text-slate-400 text-xs md:text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulación visual del flujo */}
            <div className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl"></div>
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-slate-500 text-center mb-6 flex items-center justify-center gap-2 font-mono">
                <TrendingUp className="text-indigo-400" size={14} />
                Flujo de Compra Automatizado
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-3">
                {/* Paso 1 */}
                <div className="flex flex-col items-center bg-slate-900 border border-slate-800 rounded-xl p-4 w-full md:w-32 text-center shadow-md">
                  <div className="w-8 h-8 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center mb-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </div>
                  <span className="text-xs font-bold text-white">Instagram</span>
                  <span className="text-[9px] text-slate-500 mt-1 leading-tight">El cliente ve tu contenido</span>
                </div>
                
                <div className="text-indigo-500/50 rotate-90 md:rotate-0 font-bold text-base">➔</div>

                {/* Paso 2 */}
                <div className="flex flex-col items-center bg-indigo-950/30 border border-indigo-500/30 rounded-xl p-4 w-full md:w-36 text-center shadow-lg">
                  <Smartphone size={24} className="text-indigo-400 mb-2" />
                  <span className="text-xs font-bold text-white">Tu WebLab</span>
                  <span className="text-[9px] text-slate-400 mt-1 leading-tight">Explora stock, talles y precios</span>
                </div>

                <div className="text-emerald-500/50 rotate-90 md:rotate-0 font-bold text-base">➔</div>

                {/* Paso 3 */}
                <div className="flex flex-col items-center bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 w-full md:w-32 text-center shadow-md">
                  <MessageSquare size={24} className="text-emerald-450 mb-2" />
                  <span className="text-xs font-bold text-white">WhatsApp</span>
                  <span className="text-[9px] text-slate-400 mt-1 leading-tight">Llega el pedido listo para pagar</span>
                </div>
              </div>

              <div className="mt-8 bg-slate-900/50 p-4 rounded-xl text-center border border-slate-800/80 text-xs">
                <span className="text-slate-400">
                  💡 <strong>Ahorro de Tiempo:</strong> Tus clientes se auto-atienden consultando el catálogo y te escriben solo para concretar la venta.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN MOCKUP CÓDIGO - DEMOSTRACIÓN DE SIMPLICIDAD (LESS AI, MORE TECH/PREMIUM) */}
      <section className="py-24 bg-slate-950 relative overflow-hidden border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold uppercase text-violet-400 tracking-wider">Mantenimiento Simple</span>
            <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-white tracking-tight leading-tight">
              Actualizá precios y stock vos mismo en segundos
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              No necesitás saber programar. Te configuramos los archivos de datos para que cambiar un precio, ocultar un producto sin stock o subir un lanzamiento sea tan fácil como editar un archivo de texto en tu celular.
            </p>
            <div className="flex items-center gap-3 text-xs text-indigo-400 font-semibold pt-2">
              <Code size={16} />
              <span>Código limpio, veloz y sin plataformas pesadas.</span>
            </div>
          </div>

          {/* Consola de Código en Bento Grid */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Barra superior de ventana de terminal */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex justify-between items-center text-xs font-mono">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                </div>
                <span className="text-slate-550 flex items-center gap-1.5">
                  <Terminal size={12} /> data/foodProducts.ts
                </span>
              </div>
              
              {/* Código */}
              <div className="p-5 font-mono text-[10px] md:text-xs overflow-x-auto text-slate-350 leading-relaxed bg-slate-950/30">
                <p className="text-slate-500">// Actualizá tus productos de manera simple:</p>
                <p><span className="text-pink-500">export const</span> <span className="text-blue-400">PRODUCTOS</span> = [</p>
                <div className="pl-6 border-l border-slate-800 my-1">
                  <p className="text-slate-400">&#123;</p>
                  <div className="pl-6">
                    <p>id: <span className="text-amber-300">"cookie-clasica"</span>,</p>
                    <p>name: <span className="text-amber-300">"Cookie de Chocolate Clásica"</span>,</p>
                    <p>description: <span className="text-amber-300">"La preferida del campus..."</span>,</p>
                    <p>price: <span className="text-emerald-450 font-bold">1200</span>, <span className="text-slate-500">// &lt;-- Editá este valor</span></p>
                    <p>inStock: <span className="text-pink-500">true</span>, <span className="text-slate-500">// &lt;-- Cambiá a false si te quedás sin stock</span></p>
                  </div>
                  <p className="text-slate-400">&#125;,</p>
                </div>
                <p>];</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STAND QR - IDEAL PARA FERIAS */}
      <section id="ferias" className="py-24 bg-slate-900/60 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
              Ventas en Ferias Universitarias
            </span>
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-4 mb-4 tracking-tight">
              Optimizá tu puesto de Feria
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Si vendés tus productos en stands universitarios (Medicina, Económicas, ferias de diseño), este sistema es tu mejor aliado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Tarjeta explicativa */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg">
              <div>
                <div className="p-3 bg-emerald-500/10 text-emerald-400 w-fit rounded-xl border border-emerald-500/20 mb-6">
                  <QrCode size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">El puesto inteligente</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  Colocás un QR en tu mesa de feria. El cliente escanea el código y accede al catálogo de inmediato en su celular. Esto le permite ver la lista completa de variedades, consultar talles y precios, y reservar su pedido en el acto.
                </p>
              </div>

              <div className="border-t border-slate-800 pt-6 mt-6">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 text-emerald-400">Ventajas en Feria:</h4>
                <ul className="space-y-3.5 text-xs md:text-sm text-slate-400 font-mono">
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Evitás perder ventas cuando te quedás sin stock en mesa.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Los clientes te hacen consultas y pedidos después de la feria.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Ahorrás el envío manual de fotos del stock por chat.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Gráfico visual del QR stand */}
            <div className="lg:col-span-7 bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center relative overflow-hidden">
              <div className="w-full max-w-md relative z-10 space-y-6">
                <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-800 flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center text-slate-200">
                      <QrCode size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">1. QR en el Stand</h4>
                      <p className="text-[9px] text-slate-550 font-mono">Cartel acrílico o folleto físico</p>
                    </div>
                  </div>
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-bold uppercase">Escaneo</span>
                </div>

                <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-indigo-650 mx-auto"></div>

                <div className="bg-slate-950 p-4.5 rounded-xl border border-indigo-500/20 flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-950/40 rounded-lg border border-indigo-800/50 flex items-center justify-center text-indigo-400">
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">2. Catálogo Interactivo</h4>
                      <p className="text-[9px] text-slate-550 font-mono">El cliente recorre tu stock</p>
                    </div>
                  </div>
                  <span className="text-[9px] bg-indigo-950 text-indigo-400 px-2 py-0.5 rounded border border-indigo-850 font-bold uppercase">Navegación</span>
                </div>

                <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-650 to-emerald-500 mx-auto"></div>

                <div className="bg-slate-950 p-4.5 rounded-xl border border-emerald-500/20 flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-950/40 rounded-lg border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">3. Consulta a WhatsApp</h4>
                      <p className="text-[9px] text-slate-550 font-mono">Pedido listo en tu WhatsApp</p>
                    </div>
                  </div>
                  <span className="text-[9px] bg-emerald-950 text-emerald-450 px-2 py-0.5 rounded border border-emerald-850 font-bold uppercase">Cierre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. QUÉ INCLUYE UNA WEB - ASYMMETRIC BENTO GRID LAYOUT */}
      <section id="beneficios" className="py-24 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">Estructura Tecnológica</span>
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-4 mb-4 tracking-tight">
              ¿Qué incluye tu página?
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Diseño profesional, veloz y optimizado para la realidad de los emprendedores en Argentina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Settings, title: "Diseño a Medida", text: "Adaptado a los colores de tu logotipo, tipografías y el estilo visual de tu marca." },
              { icon: ShoppingBag, title: "Catálogo Completo", text: "Filtros rápidos por talle, color y categorías para simplificar la búsqueda." },
              { icon: Smartphone, title: "Adaptable a Celular", text: "Interfaz móvil optimizada. Tu web cargará de forma impecable en cualquier dispositivo." },
              { icon: MessageSquare, title: "Enlace a WhatsApp", text: "Tus clientes te envían el detalle de su pedido estructurado listo para cobrar." },
              { icon: QrCode, title: "Folleto QR para Stand", text: "Diseño y entrega de un código QR listo para imprimir y colgar en tu puesto." },
              { icon: Zap, title: "Carga Ultra Rápida", text: "Desarrollado en Next.js con carga veloz en celulares con conexiones de red 4G/5G lentas." },
              { icon: FileText, title: "Links de Producto", text: "Cada producto tiene su propio enlace directo. Ideal para enviarlos por MD de Instagram." },
              { icon: Compass, title: "Optimización SEO", text: "Estructura preparada para aparecer indexado en Google cuando busquen tu marca." },
              { icon: ShieldCheck, title: "Hospedaje Bonificado", text: "El hosting está incluido durante el primer año en servidores estables y rápidos." }
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-slate-750 transition-colors shadow-md">
                  <div className="p-2.5 bg-indigo-500/10 text-indigo-400 w-fit rounded-xl border border-indigo-500/20 mb-4 shadow-inner">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-white font-bold text-sm md:text-base mb-2">{benefit.title}</h4>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CÓMO FUNCIONA */}
      <section id="funcionamiento" className="py-24 bg-slate-900/60 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase text-violet-400 tracking-wider">Desarrollo Ágil</span>
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-4 mb-4 tracking-tight">
              El proceso de trabajo
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Simple y ágil. Tu página web estará online y lista para vender en pocos días.
            </p>
          </div>

          <div className="relative border-l border-slate-800 max-w-3xl mx-auto pl-6 md:pl-8 space-y-12">
            {[
              { step: "Fase 1", title: "Elegimos un estilo de base", text: "Navegamos las demos en vivo de comida, indumentaria, accesorios o cotizadores. Seleccionamos la disposición estructural de base que mejor se ajuste a tu catálogo." },
              { step: "Fase 2", title: "Adaptamos la web a tu marca", text: "Modificamos la paleta de colores oficial, tipografías y añadimos tu logotipo y redes. Hacemos que la página se sienta 100% de tu marca." },
              { step: "Fase 3", title: "Cargamos tu stock inicial", text: "Nos enviás la información, fotos y precios de tus productos destacados y combos. Nosotros nos encargamos de maquetarlos y subirlos." },
              { step: "Fase 4", title: "Publicamos tu web", text: "Conectamos tu propio dominio comercial (ej: marcasalud.com.ar) y publicamos la página en internet con certificado de seguridad SSL." },
              { step: "Fase 5", title: "Soporte y Actualizaciones", text: "Te entregamos un instructivo muy simple para que cambies los precios vos mismo en un minuto. Además, ofrecemos mantenimiento opcional." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 border-4 border-slate-950 shadow-md"></div>
                <div>
                  <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase font-mono">{item.step}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECCIÓN DE PERSONALIZACIÓN */}
      <section className="py-24 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">Flexibilidad de Estructura</span>
              <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white tracking-tight leading-tight">
                Las Demos son solo plantillas de ejemplo
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Tu web real tendrá tus colores oficiales, tus fotos de producto, tu logo y tus datos. Podés tomar la estructura de la demo de Indumentaria (con filtros de talle) y aplicarla a una tienda de fundas de celular, o usar la de pastelería para un showroom de velas artesanales.
              </p>
              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 text-xs md:text-sm text-slate-400 leading-relaxed font-mono">
                💡 <strong>Estructuras Flexibles:</strong> Filtros avanzados, detalles de materiales, cuidados del producto y cotizadores se combinan a tu gusto.
              </div>
            </div>

            {/* Comparación visual */}
            <div className="bg-slate-900/30 p-6 md:p-8 rounded-2xl border border-slate-800/80 flex flex-col justify-center items-center">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 font-mono">[ Esquema de Adaptación ]</h3>
              <div className="flex items-center justify-between w-full max-w-md gap-4">
                {/* Caja Demo */}
                <div className="flex-1 bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-2 text-xs font-bold font-mono">D1</div>
                  <h4 className="text-xs font-bold text-slate-350 uppercase">Plantilla Demo</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">Colores de muestra y catálogo de prueba.</p>
                </div>
                
                {/* Flecha */}
                <div className="text-indigo-500 font-bold text-base animate-pulse">➔</div>
                
                {/* Caja Tu Marca */}
                <div className="flex-1 bg-indigo-950/40 p-4 rounded-xl border border-indigo-500/30 text-center shadow-lg">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto mb-2 text-xs font-bold font-mono">M1</div>
                  <h4 className="text-xs font-bold text-indigo-400 uppercase">Tu Web</h4>
                  <p className="text-[10px] text-slate-300 mt-1 leading-normal">Tus colores, tu marca, tus fotos y tus datos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PLANES Y PRECIOS */}
      <section id="precios" className="py-24 bg-slate-900/60 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">Inversión y Transparencia</span>
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-4 mb-4 tracking-tight">
              Precios pensados para crecer
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Inversión en pago único. Sin cargos fijos mensuales ni retenciones por tus ventas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {OWNER_CONFIG.PLANES.map((plan) => (
              <div 
                key={plan.id}
                className={`rounded-2xl p-6 md:p-8 flex flex-col justify-between border transition-all duration-300 ${
                  plan.recommended 
                    ? "bg-slate-900 border-indigo-500/40 shadow-[0_15px_40px_-5px_rgba(99,102,241,0.25)] relative -translate-y-2 lg:-translate-y-4" 
                    : "bg-slate-900/40 border-slate-800/80"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-650 text-white text-[10px] uppercase font-bold tracking-widest px-3.5 py-1 rounded-full shadow-md">
                    El más elegido
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-xs md:text-sm mb-6 leading-relaxed min-h-[48px]">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-xl font-bold text-slate-500 font-mono">$</span>
                    <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-mono">{plan.price}</span>
                    <span className="text-xs text-slate-500 font-medium">ARS / {plan.period}</span>
                  </div>

                  <hr className="border-slate-800/60 mb-6" />

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-350 leading-normal">
                        <Check size={15} className="text-indigo-400 flex-shrink-0 mt-0.5" />
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
                      if (plan.id === "landing") rubroSelect.value = "comida";
                      else if (plan.id === "catalogo") rubroSelect.value = "indumentaria";
                      else if (plan.id === "premium") rubroSelect.value = "personalizados";
                    }
                  }}
                  className={`w-full text-center py-3 rounded-xl font-bold transition duration-200 text-xs md:text-sm cursor-pointer ${
                    plan.recommended
                      ? "bg-gradient-to-r from-violet-600 to-indigo-650 hover:from-violet-505 hover:to-indigo-600 text-white shadow-md shadow-indigo-600/20"
                      : "bg-slate-950 hover:bg-slate-900 text-slate-350 border border-slate-800"
                  }`}
                >
                  Consultar Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FORMULARIO Y CONTACTO */}
      <section id="contacto" className="py-24 bg-slate-900/30 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Texto CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">¿Empezamos tu web?</span>
                <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white tracking-tight leading-none">
                  Solicitá tu presupuesto
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  Completá el formulario con los detalles de tu emprendimiento en un minuto. Te responderé por WhatsApp para coordinar el estilo de tu página y el stock inicial.
                </p>
              </div>

              <div className="border-t border-slate-800 pt-6 mt-6 space-y-4">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider text-slate-500">Información Directa:</h4>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 text-emerald-450 rounded-lg">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 block uppercase font-bold tracking-wider font-mono">WhatsApp</span>
                    <a href={`https://wa.me/${OWNER_CONFIG.OWNER_WHATSAPP}`} target="_blank" className="text-sm font-semibold text-slate-200 hover:underline">
                      +{OWNER_CONFIG.OWNER_WHATSAPP}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-violet-500/10 text-violet-400 rounded-lg">
                    <FileText size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 block uppercase font-bold tracking-wider font-mono">Correo Comercial</span>
                    <a href={`mailto:${OWNER_CONFIG.EMAIL}`} className="text-sm font-semibold text-slate-200 hover:underline">
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

      {/* 12. FOOTER */}
      <footer className="bg-slate-950 text-slate-650 py-12 px-6 border-t border-slate-900 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-outfit font-extrabold text-slate-300">
              {OWNER_CONFIG.AGENCY_NAME}
            </span>
            <span>- Catálogos y Páginas Web Económicas</span>
          </div>

          <div>
            <span>© 2026 {OWNER_CONFIG.AGENCY_NAME}. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP (GENERAL LANDING) */}
      <a 
        href={`https://api.whatsapp.com/send?phone=${OWNER_CONFIG.OWNER_WHATSAPP}&text=${encodeURIComponent("Hola Julián! Vi tu portfolio de páginas web y me gustaría consultar por un presupuesto para mi emprendimiento.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-455 active:bg-emerald-600 text-white p-3.5 rounded-full shadow-[0_6px_25px_rgba(16,185,129,0.5)] border border-emerald-400/20 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
        title="Consultar por WhatsApp"
      >
        <MessageSquare size={24} className="animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300 uppercase tracking-widest whitespace-nowrap">
          Consultar Web
        </span>
      </a>

    </div>
  );
}

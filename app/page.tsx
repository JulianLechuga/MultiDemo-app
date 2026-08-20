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
  Heart
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
            <div className="p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg text-white">
              <Sparkles size={18} />
            </div>
            <span className="font-outfit font-extrabold text-lg md:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              {OWNER_CONFIG.AGENCY_NAME}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <button onClick={() => handleScrollTo("demos")} className="hover:text-white transition">Estilos Demo</button>
            <button onClick={() => handleScrollTo("beneficios")} className="hover:text-white transition">Qué Incluye</button>
            <button onClick={() => handleScrollTo("ferias")} className="hover:text-white transition">Ideal Ferias</button>
            <button onClick={() => handleScrollTo("funcionamiento")} className="hover:text-white transition">Proceso</button>
            <button onClick={() => handleScrollTo("precios")} className="hover:text-white transition">Planes</button>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleScrollTo("contacto")} 
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-xl transition duration-200 shadow-md cursor-pointer"
            >
              Pedir Presupuesto
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 border-b border-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Sparkles size={12} className="text-indigo-400" />
              Diseño Web Económico para Emprendedores
            </span>
            
            <h1 className="text-4xl md:text-6xl font-outfit font-extrabold text-white tracking-tight leading-none">
              Tu emprendimiento merece una <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">web profesional</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
              Catálogos digitales, páginas optimizadas para ferias y sistemas preparados para convertir visitas de Instagram en pedidos directos por WhatsApp. Sin complicaciones y al mejor precio.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => handleScrollTo("demos")} 
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-600/30 transition duration-200 flex items-center gap-2 cursor-pointer text-sm md:text-base"
              >
                <span>Ver demos en vivo</span>
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => handleScrollTo("contacto")} 
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl border border-slate-800 transition duration-200 cursor-pointer text-sm md:text-base"
              >
                Solicitar presupuesto
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            {/* Mockup visual en perspectiva */}
            <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-950 p-3 shadow-[0_20px_50px_rgba(99,102,241,0.2)] relative animate-pulse-slow">
              <div className="w-full h-80 rounded-xl overflow-hidden bg-slate-900 border border-slate-800/60 relative">
                {/* Pantalla del mockup: representacion de ambo médico */}
                <div className="absolute inset-0 bg-[#f6fcfb] text-teal-950 p-4 font-sans flex flex-col">
                  <div className="flex justify-between items-center border-b border-teal-900/10 pb-2 mb-3">
                    <span className="font-bold text-xs text-teal-800">Aura Ambos</span>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-teal-100 text-teal-900 rounded-full">Feria UBA</span>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-teal-100 flex gap-3 mb-2 flex-grow">
                    <div className="w-16 h-16 bg-teal-600 rounded-md flex items-center justify-center text-white font-bold text-xs">
                      Ambo S
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-semibold text-slate-500">INDUMENTARIA</span>
                      <h4 className="font-bold text-xs text-teal-950">Ambo Classic Spandex</h4>
                      <p className="text-[11px] font-bold text-teal-600 mt-1">$18.500</p>
                    </div>
                  </div>
                  <div className="bg-emerald-500 text-white text-center py-2 rounded-lg text-xs font-bold mt-auto flex items-center justify-center gap-1">
                    <MessageSquare size={12} />
                    <span>Hacer Pedido por WhatsApp</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-800 text-slate-200 py-3 px-4 rounded-xl flex items-center gap-3 shadow-xl">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                  <QrCode size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">¡Listo para ferias!</h4>
                  <p className="text-[10px] text-slate-400">Escaneás QR y comprás</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL SELECTOR (ELEGÍ UN EJEMPLO) */}
      <VisualSelector />

      {/* 4. INSTAGRAM + WEB (EL EMBUDO DE CONVERSIÓN) */}
      <section className="py-24 bg-slate-900 border-y border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">Embudo Inteligente</span>
              <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-3 mb-6 tracking-tight">
                Instagram + Web: El combo ganador
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                Tener una página web no significa dejar de usar Instagram. Al contrario: <strong>se complementan perfectamente</strong> para hacerte vender más y ahorrarte tiempo.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="text-white font-bold text-base">Descubrimiento (Instagram)</h4>
                    <p className="text-slate-400 text-sm mt-0.5">Los clientes ven tus reels, historias o posteos, se enamoran de tus productos y quieren comprar.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="text-white font-bold text-base">Decisión de Compra (Página Web)</h4>
                    <p className="text-slate-400 text-sm mt-0.5">En lugar de responder decenas de "Precio por privado", los derivás a tu web. Allí ven precios actualizados, talles, colores y stock al instante.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="text-white font-bold text-base">Cierre de Venta (WhatsApp)</h4>
                    <p className="text-slate-400 text-sm mt-0.5">El cliente te envía un mensaje por WhatsApp ya con los productos seleccionados y listos para coordinar el pago. ¡Ventas ordenadas en un click!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white text-center mb-6 flex items-center justify-center gap-2">
                <TrendingUp className="text-indigo-400" size={18} />
                Flujo de Compra
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
                {/* Paso 1 */}
                <div className="flex flex-col items-center bg-slate-900 border border-slate-800 rounded-xl p-4 w-full md:w-32 text-center">
                  <Instagram size={28} className="text-pink-500 animate-pulse mb-2" />
                  <span className="text-xs font-bold text-white">Instagram</span>
                  <span className="text-[10px] text-slate-500 mt-1">El cliente te descubre</span>
                </div>
                
                <div className="text-slate-600 rotate-90 md:rotate-0 font-bold text-lg">➔</div>

                {/* Paso 2 */}
                <div className="flex flex-col items-center bg-indigo-950/40 border border-indigo-500/30 rounded-xl p-4 w-full md:w-36 text-center">
                  <Smartphone size={28} className="text-indigo-400 mb-2" />
                  <span className="text-xs font-bold text-white">Tu Página Web</span>
                  <span className="text-[10px] text-slate-400 mt-1">Ve catálogo y stock</span>
                </div>

                <div className="text-slate-600 rotate-90 md:rotate-0 font-bold text-lg">➔</div>

                {/* Paso 3 */}
                <div className="flex flex-col items-center bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-4 w-full md:w-32 text-center">
                  <MessageSquare size={28} className="text-emerald-400 mb-2" />
                  <span className="text-xs font-bold text-white">WhatsApp</span>
                  <span className="text-[10px] text-slate-400 mt-1">Recibís pedido listo</span>
                </div>
              </div>

              <div className="mt-8 bg-slate-900/60 p-4 rounded-xl text-center border border-slate-800/80">
                <span className="text-xs font-medium text-slate-300">
                  ⚡ <strong>Menos tiempo respondiendo chats repetitivos</strong>, más tiempo produciendo y expandiendo tu marca.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IDEAL PARA FERIAS */}
      <section id="ferias" className="py-24 bg-slate-950 relative overflow-hidden border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Puestos Inteligentes
            </span>
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-4 mb-4 tracking-tight">
              Diseñada especialmente para Ferias
            </h2>
            <p className="text-slate-400 text-lg">
              Si participás de ferias universitarias, esta es la herramienta definitiva para maximizar las ventas de tu puesto físico.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Tarjeta Explicación QR */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-emerald-500/10 text-emerald-400 w-fit rounded-xl border border-emerald-500/20 mb-6">
                  <QrCode size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">El Concepto QR Feria</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  Ponés un código QR físico en tu puesto de feria. El cliente lo escanea con su celular, accede a tu catálogo completo de inmediato, elige lo que le gusta y te hace el pedido, incluso si no tenés stock de ese producto físicamente en la mesa en ese momento.
                </p>
              </div>

              <div className="border-t border-slate-800 pt-6 mt-6">
                <h4 className="text-white font-bold text-sm mb-3">Beneficios clave para tu stand:</h4>
                <ul className="space-y-2 text-xs md:text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-400" />
                    Mostrás el catálogo completo sin ocupar espacio.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-400" />
                    Evitás perder ventas cuando te quedás sin stock físico.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-400" />
                    Los clientes se llevan tu contacto y te consultan después de la feria.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-400" />
                    Te posicionás con una imagen corporativa seria y profesional.
                  </li>
                </ul>
              </div>
            </div>

            {/* Diagrama Visual */}
            <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center relative overflow-hidden">
              <div className="w-full max-w-md relative z-10 space-y-6">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center text-slate-200">
                      <QrCode size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Paso 1: QR en Stand</h4>
                      <p className="text-[10px] text-slate-500">Físico en tu puesto</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-slate-900 text-emerald-400 px-2 py-0.5 rounded font-bold">Escaneo</span>
                </div>

                <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-indigo-600 mx-auto"></div>

                <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-950 rounded-lg border border-indigo-800 flex items-center justify-center text-indigo-400">
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Paso 2: Navegación de Catálogo</h4>
                      <p className="text-[10px] text-slate-500">Móvil interactivo en la web</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-indigo-950 text-indigo-400 px-2 py-0.5 rounded font-bold">Selección</span>
                </div>

                <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-600 to-emerald-500 mx-auto"></div>

                <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-950 rounded-lg border border-emerald-800 flex items-center justify-center text-emerald-400">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Paso 3: Pedido a WhatsApp</h4>
                      <p className="text-[10px] text-slate-500">Detalles enviados al vendedor</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">Conversión</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUÉ INCLUYE UNA WEB */}
      <section id="beneficios" className="py-24 bg-slate-900 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">Lista Completa</span>
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-4 mb-4 tracking-tight">
              ¿Qué incluye tu página web?
            </h2>
            <p className="text-slate-400 text-lg">
              Todo lo que necesitás para tener una presencia online profesional sin costos extras ocultos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Settings, title: "Diseño 100% Personalizado", text: "Adaptado a tu logotipo, paleta de colores y estilo único de marca." },
              { icon: ShoppingBag, title: "Catálogo Interactivo", text: "Filtros rápidos, categorías ordenadas y buscadores inteligentes." },
              { icon: Smartphone, title: "Optimización Celular", text: "El 95% de tus clientes te visita desde el celular. Tu web se verá perfecta." },
              { icon: MessageSquare, title: "Botón de WhatsApp", text: "Cierre de ventas directo, ágil y sin intermediarios ni comisiones." },
              { icon: Instagram, title: "Integración Instagram", text: "Enlaces e iconografía que conectan directamente tu feed de redes." },
              { icon: QrCode, title: "Código QR para Stand", text: "Te generamos un QR listo para imprimir y colocar en tu puesto de feria." },
              { icon: Zap, title: "Carga Ultra Rápida", text: "Código optimizado para que cargue en menos de 1.5 segundos en cualquier celular." },
              { icon: FileText, title: "Páginas Individuales", text: "Cada producto tiene su propio link, ideal para compartir por chat de Instagram." },
              { icon: Compass, title: "SEO Básico de Google", text: "Tu negocio aparecerá en Google cuando busquen tu marca." },
              { icon: ShieldCheck, title: "Seguridad SSL gratis", text: "Candado de seguridad incluido para transmitir confianza a tus clientes." },
              { icon: Sparkles, title: "Apartado Promocional", text: "Destacá tus combos, ofertas del mes y productos más vendidos." },
              { icon: Heart, title: "Mantenimiento Opcional", text: "Actualizamos tu lista de precios y stock mensualmente si lo solicitás." }
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-colors">
                  <div className="p-2.5 bg-indigo-500/10 text-indigo-400 w-fit rounded-xl border border-indigo-500/20 mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-white font-bold text-base mb-2">{benefit.title}</h4>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CÓMO FUNCIONA */}
      <section id="funcionamiento" className="py-24 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase text-violet-400 tracking-wider">Paso a Paso</span>
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-4 mb-4 tracking-tight">
              Cómo trabajamos
            </h2>
            <p className="text-slate-400 text-lg">
              Un proceso ágil diseñado para que tengas tu página activa en menos de una semana.
            </p>
          </div>

          <div className="relative border-l border-slate-800 max-w-3xl mx-auto pl-6 md:pl-8 space-y-12">
            {[
              { step: "Paso 1", title: "Elegimos un estilo de base", text: "Revisás nuestras demos en vivo. Elegimos la disposición y estética que mejor se acomode a tus productos." },
              { step: "Paso 2", title: "Adaptamos la web a tu marca", text: "Cambiamos los colores, tipografías y colocamos tu logotipo y redes. Hacemos que se sienta 100% tuya." },
              { step: "Paso 3", title: "Cargamos tus productos", text: "Nos pasás los nombres, fotos y precios de tus productos destacados y combos. Nosotros nos encargamos de subirlos." },
              { step: "Paso 4", title: "Publicamos tu página", text: "Conectamos tu propio dominio (ej: tuemprendimiento.com.ar) y la subimos a internet de forma definitiva." },
              { step: "Paso 5", title: "Actualizá cuando quieras", text: "Te enseñamos de manera muy simple a modificar los precios, ocultar sin stock, y agregar nuevos lanzamientos tú mismo." }
            ].map((item, i) => (
              <div key={i} className="relative">
                {/* Circulo indicador */}
                <div className="absolute -left-[31px] md:-left-[39px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 shadow-md"></div>
                
                <div>
                  <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">{item.step}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECCIÓN DE PERSONALIZACIÓN */}
      <section className="py-24 bg-slate-900 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">Flexibilidad Total</span>
              <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-3 mb-6 tracking-tight">
                Las Demos son solo ejemplos
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                No te limites por lo que ves en las plantillas. Tu página web será construida a medida con la paleta de colores de tu logotipo, tus tipografías corporativas, tu información de contacto y tus fotos.
              </p>
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-sm text-slate-400 leading-relaxed">
                👉 <strong>¿Vendés algo diferente?</strong> No hay problema. Hemos adaptado la estructura de comida para marcas de velas aromáticas, la de accesorios para fundas de celular, y la de indumentaria para uniformes de colegio.
              </div>
            </div>

            {/* Comparación visual */}
            <div className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 flex flex-col justify-center items-center">
              <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wider">Concepto de Adaptación</h3>
              <div className="flex items-center justify-between w-full max-w-md gap-4">
                {/* Caja Demo */}
                <div className="flex-1 bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center mx-auto mb-2 text-xs font-bold">1</div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Demo Genérica</h4>
                  <p className="text-[10px] text-slate-600 mt-1">Colores del ejemplo, fotos simuladas y datos de prueba.</p>
                </div>
                
                {/* Flecha */}
                <div className="text-indigo-500 font-bold text-xl animate-pulse">➔</div>
                
                {/* Caja Tu Marca */}
                <div className="flex-1 bg-indigo-950/40 p-4 rounded-xl border border-indigo-500/30 text-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto mb-2 text-xs font-bold">2</div>
                  <h4 className="text-xs font-bold text-indigo-400 uppercase">Tu Marca Real</h4>
                  <p className="text-[10px] text-slate-300 mt-1">Tus colores oficiales, tu logo, tus productos reales y tu WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PLANES Y PRECIOS */}
      <section id="precios" className="py-24 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">Inversión Inteligente</span>
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-4 mb-4 tracking-tight">
              Planes a tu medida
            </h2>
            <p className="text-slate-400 text-lg">
              Precios transparentes y sin cargos mensuales fijos. Pagás una vez, la página es tuya para siempre.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {OWNER_CONFIG.PLANES.map((plan, i) => (
              <div 
                key={plan.id}
                className={`rounded-2xl p-6 md:p-8 flex flex-col justify-between border transition-all duration-300 ${
                  plan.recommended 
                    ? "bg-slate-900 border-indigo-500/40 shadow-[0_10px_30px_-5px_rgba(99,102,241,0.25)] relative -translate-y-2 lg:-translate-y-4" 
                    : "bg-slate-900/50 border-slate-800/80"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[10px] uppercase font-bold tracking-widest px-3.5 py-1 rounded-full shadow-md">
                    El más elegido
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-xs md:text-sm mb-6 leading-relaxed min-h-[40px]">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-2xl font-bold text-slate-400 font-mono">$</span>
                    <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-mono">{plan.price}</span>
                    <span className="text-xs text-slate-500 font-medium">/ {plan.period}</span>
                  </div>

                  <hr className="border-slate-800 mb-6" />

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                        <Check size={16} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    handleScrollTo("contacto");
                    // Auto seleccionar rubro si clickean cotizar plan
                    const rubroSelect = document.getElementById("rubro") as HTMLSelectElement;
                    if (rubroSelect) {
                      if (plan.id === "landing") rubroSelect.value = "comida";
                      else if (plan.id === "catalogo") rubroSelect.value = "indumentaria";
                      else if (plan.id === "premium") rubroSelect.value = "personalizados";
                    }
                  }}
                  className={`w-full text-center py-3 rounded-xl font-bold transition duration-200 text-sm cursor-pointer ${
                    plan.recommended
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md shadow-indigo-600/20"
                      : "bg-slate-950 hover:bg-slate-850 text-slate-300 border border-slate-800"
                  }`}
                >
                  Consultar por este Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FORMULARIO Y CONTACTO */}
      <section id="contacto" className="py-24 bg-slate-900/50 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Texto CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div>
                <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">¿Empezamos?</span>
                <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mt-4 mb-4 tracking-tight leading-none">
                  ¿Querés una web para tu emprendimiento?
                </h2>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                  Completá el formulario en un minuto. Te responderé a la brevedad con un presupuesto adaptado a tus necesidades y catálogo de productos.
                </p>
              </div>

              <div className="border-t border-slate-800 pt-6 mt-6 space-y-4">
                <h4 className="text-white font-bold text-sm">Información Directa</h4>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">WhatsApp Comercial</span>
                    <a href={`https://wa.me/${OWNER_CONFIG.OWNER_WHATSAPP}`} target="_blank" className="text-sm font-semibold text-slate-200 hover:underline">
                      +{OWNER_CONFIG.OWNER_WHATSAPP}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-pink-500/10 text-pink-400 rounded-lg">
                    <Instagram size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Instagram</span>
                    <a href={OWNER_CONFIG.INSTAGRAM_URL} target="_blank" className="text-sm font-semibold text-slate-200 hover:underline">
                      {OWNER_CONFIG.INSTAGRAM_USER}
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

      {/* 11. FOOTER */}
      <footer className="bg-slate-950 text-slate-500 py-12 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-outfit font-extrabold text-slate-300">
              {OWNER_CONFIG.AGENCY_NAME}
            </span>
            <span>- Diseños Web a tu Medida</span>
          </div>

          <div className="flex gap-4">
            <span className="text-xs">© 2026 {OWNER_CONFIG.AGENCY_NAME}. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

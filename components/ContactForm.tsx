"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MessageSquare, Send, CheckCircle2, Loader2 } from "lucide-react";
import { OWNER_CONFIG } from "@/data/ownerConfig";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    nombre: "",
    emprendimiento: "",
    instagram: "",
    rubro: "comida",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-seleccionar el rubro basado en los parámetros de la URL
  useEffect(() => {
    const demo = searchParams.get("demo");
    if (demo) {
      const rubroMapping: Record<string, string> = {
        comida: "comida",
        indumentaria: "indumentaria",
        accesorios: "accesorios",
        personalizados: "personalizados",
      };
      if (rubroMapping[demo]) {
        setFormData((prev) => ({ ...prev, rubro: rubroMapping[demo] }));
      }
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular procesamiento del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Compilar el mensaje de WhatsApp preformateado
      const rubroLabel: Record<string, string> = {
        comida: "Gastronomía / Pastelería",
        indumentaria: "Indumentaria / Ambos Médicos",
        accesorios: "Accesorios / Joyería",
        personalizados: "Impresión 3D / Personalizados",
        otro: "Otro Rubro / General"
      };

      const texto = `Hola! Me contacto desde la web de WebLab. 
*Nombre:* ${formData.nombre}
*Emprendimiento:* ${formData.emprendimiento}
*Instagram:* ${formData.instagram ? `@${formData.instagram.replace("@", "")}` : "No provisto"}
*Rubro elegido:* ${rubroLabel[formData.rubro]}
*Consulta:* ${formData.mensaje}`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${OWNER_CONFIG.OWNER_WHATSAPP}&text=${encodeURIComponent(texto)}`;
      
      // Abrir en una pestaña nueva
      window.open(whatsappUrl, "_blank");
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white dark:bg-stone-900 border border-emerald-500/30 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[400px] shadow-sm">
        <div className="text-emerald-500 mb-4 animate-bounce-slow">
          <CheckCircle2 size={56} />
        </div>
        <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2 font-playfair">¡Solicitud recibida!</h3>
        <p className="text-stone-550 dark:text-stone-400 text-xs md:text-sm max-w-sm mb-6 leading-relaxed">
          Hemos procesado tus datos de contacto y te estamos redirigiendo a WhatsApp para enviarme los detalles del presupuesto.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-xs font-bold text-[#8A4F35] dark:text-amber-500 hover:underline cursor-pointer"
        >
          ¿No fuiste redirigido? Hacé clic acá para enviar de nuevo.
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 md:p-8 rounded-3xl shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-[10px] font-bold uppercase text-stone-500 dark:text-stone-400 tracking-wider mb-1.5 font-mono">
            Tu Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: Sofía"
            className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#8A4F35] dark:focus:border-amber-500 rounded-xl px-4 py-2.5 text-xs md:text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-600 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="emprendimiento" className="block text-[10px] font-bold uppercase text-stone-500 dark:text-stone-400 tracking-wider mb-1.5 font-mono">
            Nombre del Emprendimiento
          </label>
          <input
            type="text"
            id="emprendimiento"
            name="emprendimiento"
            value={formData.emprendimiento}
            onChange={handleChange}
            placeholder="Ej: Campus Cookies"
            className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#8A4F35] dark:focus:border-amber-500 rounded-xl px-4 py-2.5 text-xs md:text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-600 outline-none transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="instagram" className="block text-[10px] font-bold uppercase text-stone-500 dark:text-stone-400 tracking-wider mb-1.5 font-mono">
            Instagram del Emprendimiento
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="Ej: @campus.cookies"
            className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#8A4F35] dark:focus:border-amber-500 rounded-xl px-4 py-2.5 text-xs md:text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-600 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="rubro" className="block text-[10px] font-bold uppercase text-stone-500 dark:text-stone-400 tracking-wider mb-1.5 font-mono">
            Rubro / Estilo de interés *
          </label>
          <select
            id="rubro"
            name="rubro"
            value={formData.rubro}
            onChange={handleChange}
            className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#8A4F35] dark:focus:border-amber-500 rounded-xl px-4 py-2.5 text-xs md:text-sm text-stone-800 dark:text-stone-300 outline-none transition cursor-pointer"
          >
            <option value="comida">Gastronomía / Pastelería</option>
            <option value="indumentaria">Ambos / Uniformes</option>
            <option value="accesorios">Accesorios / Joyería</option>
            <option value="personalizados">Impresión 3D</option>
            <option value="otro">Otro rubro personalizado</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-[10px] font-bold uppercase text-stone-500 dark:text-stone-400 tracking-wider mb-1.5 font-mono">
          Contame qué necesitás *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Ej: Hola! Me gustaría hacer un catálogo de 20 productos para la feria de Medicina. ¿Cuánto tardaría?"
          className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#8A4F35] dark:focus:border-amber-500 rounded-xl px-4 py-2.5 text-xs md:text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-600 outline-none transition resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-[#8A4F35] hover:bg-[#72402B] dark:bg-amber-600 dark:hover:bg-amber-550 disabled:bg-stone-200 dark:disabled:bg-stone-800 disabled:text-stone-400 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-amber-900/10 dark:shadow-none transition duration-200 cursor-pointer disabled:cursor-not-allowed text-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>Procesando...</span>
          </>
        ) : (
          <>
            <Send size={16} />
            <span>Consultar Presupuesto por WhatsApp</span>
          </>
        )}
      </button>

      <div className="flex items-center gap-1.5 justify-center text-[10px] text-stone-550 dark:text-stone-500 pt-2">
        <MessageSquare size={12} />
        <span>Se abrirá una conversación segura de WhatsApp con {OWNER_CONFIG.OWNER_NAME}.</span>
      </div>
    </form>
  );
}

// Envolver en Suspense ya que usa useSearchParams
export default function ContactForm() {
  return (
    <Suspense fallback={
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 rounded-3xl h-80 flex items-center justify-center">
        <Loader2 size={28} className="animate-spin text-[#8A4F35] dark:text-amber-500" />
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}

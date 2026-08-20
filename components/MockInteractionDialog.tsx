"use client";

import { X, MessageSquare, ShoppingCart, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface MockInteractionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
  type: "whatsapp_general" | "order_product" | "custom_quote";
  productName?: string;
  price?: number;
}

export default function MockInteractionDialog({
  isOpen,
  onClose,
  brandName,
  type,
  productName,
  price,
}: MockInteractionDialogProps) {
  if (!isOpen) return null;

  const renderContent = () => {
    switch (type) {
      case "order_product":
        return (
          <>
            <div className="flex justify-center mb-4 text-emerald-500">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-950/50 rounded-full">
                <ShoppingCart size={40} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 text-center mb-2">
              ¡Pedido Simulado!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-4">
              En la página web real de tu emprendimiento, al hacer clic en <strong>Pedir</strong> se abriría el WhatsApp de tu negocio con un mensaje pre-formateado listo para enviar:
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-3.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs md:text-sm text-slate-800 dark:text-slate-300 font-mono mb-5 break-words">
              {`Hola ${brandName}! Me gustaría hacer un pedido de: "${productName}" (${price ? `$${price.toLocaleString()}` : "consultar precio"}). ¿Cómo coordinamos el pago y envío?`}
            </div>
          </>
        );
      case "custom_quote":
        return (
          <>
            <div className="flex justify-center mb-4 text-violet-500">
              <div className="p-3 bg-violet-100 dark:bg-violet-950/50 rounded-full">
                <ShieldCheck size={40} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 text-center mb-2">
              ¡Proyecto Enviado!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-4">
              En tu web real, este formulario enviaría un archivo PDF o un mensaje estructurado directamente a tu WhatsApp o correo con todas las especificaciones ingresadas por el cliente:
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-3.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs md:text-sm text-slate-800 dark:text-slate-300 font-mono mb-5">
              {`📌 SOLICITUD DE DISEÑO PERSONALIZADO:\n- Marca: ${brandName}\n- Tipo de Proyecto enviado a tu base de datos.\n- El cliente recibirá una notificación de contacto inmediato.`}
            </div>
          </>
        );
      case "whatsapp_general":
      default:
        return (
          <>
            <div className="flex justify-center mb-4 text-emerald-500">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-950/50 rounded-full">
                <MessageSquare size={40} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 text-center mb-2">
              Chat Directo por WhatsApp
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-5">
              Este botón redirigiría directamente al número de tu emprendimiento. Evita que tengas que agendar al cliente o enviarle fotos de manera manual por chat. ¡El cliente llega listo para comprar!
            </p>
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal box */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-slate-900 p-6 text-left align-middle shadow-2xl transition-all border border-slate-200 dark:border-slate-800 z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Dynamic Content */}
        {renderContent()}

        {/* CTA Footer */}
        <div className="flex flex-col gap-2">
          <Link
            href="/#contacto"
            onClick={onClose}
            className="w-full text-center bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-200 shadow-md text-sm"
          >
            Quiero una web así para mi negocio
          </Link>
          <button
            onClick={onClose}
            className="w-full text-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium py-2 px-4 rounded-xl transition duration-200 text-sm"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  MessageSquare, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  X, 
  ArrowLeft, 
  BarChart2, 
  ShoppingBag, 
  Eye, 
  RefreshCw, 
  AlertCircle,
  FileText,
  Upload,
  Globe,
  Lock,
  Layers
} from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { BRANDS } from "@/data/brands";
import { Product } from "@/types/product";
import FoodProductVector from "@/components/FoodProductVector";

interface Toast {
  id: string;
  message: string;
  type: "success" | "info" | "error";
}

export default function ComidaAdminPage() {
  const brand = BRANDS.comida;
  const { products, loading, createProduct, updateProduct, deleteProduct, resetProducts } = useProducts();

  // Estados de interfaz
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  // Modals de confirmación
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  // Estados del formulario
  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formPrice, setFormPrice] = useState("");
  const [formCategory, setFormCategory] = useState("");
  const [formImage, setFormImage] = useState("");
  const [formAvailable, setFormAvailable] = useState(true);
  const [formFeatured, setFormFeatured] = useState(false);
  const [formImagePreset, setFormImagePreset] = useState("");
  
  // Errores de validación
  const [formError, setFormError] = useState("");

  // Toasts de feedback
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Disparar toast de alerta
  const triggerToast = (message: string, type: "success" | "info" | "error" = "success") => {
    const id = `toast-${Date.now()}`;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Cargar datos en el formulario al editar
  useEffect(() => {
    if (editingProduct) {
      setFormName(editingProduct.name);
      setFormDescription(editingProduct.description);
      setFormPrice(editingProduct.price.toString());
      setFormCategory(editingProduct.category);
      setFormImage(editingProduct.image);
      setFormAvailable(editingProduct.available);
      setFormFeatured(editingProduct.featured);
      setFormImagePreset(editingProduct.image.startsWith("data:") ? "base64" : "");
    } else {
      // Limpiar formulario para nuevo producto
      setFormName("");
      setFormDescription("");
      setFormPrice("");
      setFormCategory("");
      setFormImage("");
      setFormAvailable(true);
      setFormFeatured(false);
      setFormImagePreset("");
    }
    setFormError("");
  }, [editingProduct, isFormOpen]);

  // Formateador de moneda argentina
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  // Métricas
  const totalProducts = products.length;
  const availableProducts = products.filter((p) => p.available).length;
  const outOfStockProducts = products.filter((p) => !p.available).length;
  const featuredProducts = products.filter((p) => p.featured).length;

  // Manejar el envío del formulario (Creación / Edición)
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Validaciones
    if (!formName.trim()) {
      setFormError("El nombre es obligatorio.");
      return;
    }
    if (!formDescription.trim()) {
      setFormError("La descripción es obligatoria.");
      return;
    }
    const priceNum = parseFloat(formPrice);
    if (isNaN(priceNum) || priceNum < 0) {
      setFormError("El precio debe ser un número igual o mayor a cero.");
      return;
    }
    if (!formCategory.trim()) {
      setFormError("La categoría es obligatoria.");
      return;
    }

    try {
      const productPayload = {
        name: formName.trim(),
        description: formDescription.trim(),
        price: priceNum,
        category: formCategory.trim(),
        image: formImage,
        available: formAvailable,
        featured: formFeatured,
      };

      if (editingProduct) {
        await updateProduct(editingProduct.id, productPayload);
        triggerToast("Producto actualizado correctamente", "success");
      } else {
        await createProduct(productPayload);
        triggerToast("Nuevo producto creado", "success");
      }

      setIsFormOpen(false);
      setEditingProduct(null);
    } catch (err: any) {
      setFormError(err.message || "Ocurrió un error al guardar.");
      triggerToast("Error al guardar el producto", "error");
    }
  };

  // Manejar eliminación de producto
  const handleDeleteConfirm = async () => {
    if (deletingProduct) {
      await deleteProduct(deletingProduct.id);
      triggerToast(`"${deletingProduct.name}" eliminado`, "info");
      setDeletingProduct(null);
    }
  };

  // Manejar restauración del catálogo por defecto
  const handleResetConfirm = async () => {
    await resetProducts();
    triggerToast("Catálogo original restaurado correctamente", "success");
    setIsResetConfirmOpen(false);
  };

  // Manejar cambio rápido de disponibilidad
  const handleToggleAvailable = async (product: Product) => {
    const nextState = !product.available;
    await updateProduct(product.id, { available: nextState });
    triggerToast(
      nextState ? `"${product.name}" marcado como disponible` : `"${product.name}" marcado como AGOTADO`,
      "info"
    );
  };

  // Manejar cambio rápido de destacado
  const handleToggleFeatured = async (product: Product) => {
    const nextState = !product.featured;
    await updateProduct(product.id, { featured: nextState });
    triggerToast(
      nextState ? `"${product.name}" destacado en la portada` : `"${product.name}" quitado de destacados`,
      "info"
    );
  };

  // Manejar carga de imagen por archivo (Base64)
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 200 * 1024) { // Límite de 200KB para evitar llenar localStorage rápidamente
        setFormError("La imagen excede los 200KB recomendados para la demostración.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const base64String = uploadEvent.target?.result as string;
        setFormImage(base64String);
        setFormImagePreset("base64");
        triggerToast("Imagen cargada en memoria temporal", "info");
      };
      reader.readAsDataURL(file);
    }
  };

  // Pre-cargar imágenes locales de demo gastronómica
  const handlePresetChange = (presetName: string) => {
    setFormImagePreset(presetName);
    if (presetName === "") {
      setFormImage("");
    } else {
      // En una demo simulamos dejando el string vacío para que el render cargue el SVG dinámico
      // que representa el ID correspondiente. Así probamos también el fallback vectorial.
      setFormImage("");
    }
  };

  if (!isLoggedIn) {
    /* ========================================================
       A. PANTALLA DE INGRESO DEMOSTRATIVO
       ======================================================== */
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col justify-center items-center p-4">
        {/* Alerta flotante superior de Demo */}
        <div className="max-w-md w-full bg-amber-500/10 border border-amber-500/20 text-amber-450 p-4.5 rounded-2xl mb-8 flex gap-3 shadow-md">
          <AlertCircle size={24} className="flex-shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <strong>Estás en Modo Demo:</strong> Los cambios que realices en el panel se guardarán de manera privada en el almacenamiento local de tu navegador (`localStorage`) y se reflejarán inmediatamente en la tienda.
          </div>
        </div>

        {/* Card de Acceso */}
        <div className="max-w-md w-full bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="mx-auto w-14 h-14 rounded-2xl bg-indigo-600/15 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Lock size={26} />
          </div>

          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
              Panel de Administración
            </h1>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
              Probá cómo el dueño de un emprendimiento administra sus productos, edita precios o marca stock agotado directamente desde su celular.
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 text-left text-xs text-slate-450 leading-relaxed">
            🔒 <strong>En una tienda real:</strong>
            <p className="mt-1">
              Esta sección estaría restringida mediante usuario y contraseña reales encriptados a través de un servicio de autenticación en la nube como <strong>Supabase Auth</strong>.
            </p>
          </div>

          <button
            onClick={() => {
              setIsLoggedIn(true);
              triggerToast("Sesión de administrador demo iniciada", "info");
            }}
            className="w-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-indigo-600/20 transition cursor-pointer text-sm"
          >
            Entrar como Administrador DEMO
          </button>

          <Link
            href="/demo/comida"
            className="w-full bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 font-bold py-3.5 px-4 rounded-xl transition block text-sm cursor-pointer"
          >
            ← Volver a la Tienda (Vista Cliente)
          </Link>
        </div>
      </div>
    );
  }

  /* ========================================================
     B. DASHBOARD SaaS COMPLETO
     ======================================================== */
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
      {/* Barra de Demo */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-350 py-2.5 px-4 flex justify-between items-center text-xs shadow-inner">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Panel de Demostración Activo</span>
        </span>
        <button 
          onClick={() => {
            setIsLoggedIn(false);
            triggerToast("Sesión cerrada", "info");
          }} 
          className="text-slate-500 hover:text-slate-300 font-semibold"
        >
          Salir
        </button>
      </div>

      <div className="flex-grow flex flex-col md:flex-row">
        
        {/* SIDEBAR / MENÚ LATERAL (DESKTOP) */}
        <aside className="w-full md:w-64 bg-slate-950 border-r border-slate-900 p-6 space-y-8 flex flex-col justify-between flex-shrink-0">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#8A4F35] rounded-xl text-white">
                <Sparkles size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm text-white">WebLab UBA</span>
                <span className="text-[8px] text-amber-500 uppercase tracking-widest font-mono">Gestor de Catálogo</span>
              </div>
            </div>

            <hr className="border-slate-900" />

            <nav className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500 block mb-2 tracking-wider font-mono">Panel</span>
              <button 
                className="w-full flex items-center gap-2.5 px-3 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold text-left border border-slate-850"
              >
                <BarChart2 size={15} />
                <span>Dashboard Principal</span>
              </button>
              <Link 
                href="/demo/comida"
                className="w-full flex items-center gap-2.5 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-xs font-semibold text-left transition"
              >
                <Eye size={15} />
                <span>Ver Tienda Pública</span>
              </Link>
            </nav>
          </div>

          {/* Tarjeta Comercial Fija de Venta */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4.5 space-y-3.5 relative overflow-hidden">
            <span className="absolute -top-6 -right-6 w-16 h-16 bg-indigo-500/5 rounded-full blur-xl pointer-events-none"></span>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-extrabold tracking-widest text-indigo-400 block font-mono">¿Buscás esto?</span>
              <h4 className="text-xs font-bold text-white leading-snug">Plan Catálogo Full</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Conseguí tu propio panel de control online para cambiar precios, stock e imágenes en vivo sin depender de intermediarios.
              </p>
            </div>
            <Link 
              href="/#contacto" 
              className="block w-full text-center bg-indigo-650 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg text-[10px] uppercase tracking-wider transition shadow shadow-indigo-600/10"
            >
              Quiero esta opción
            </Link>
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-grow p-4 md:p-8 space-y-6 overflow-y-auto">
          
          {/* Cabecera Móvil y Dashboard Title */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-900 pb-5">
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                Catálogo Gastronómico
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Administrá en tiempo real los productos de la tienda demostrativa.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setIsResetConfirmOpen(true)}
                className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-850 text-slate-300 font-bold text-xs py-2 px-3.5 rounded-lg border border-slate-800 transition cursor-pointer"
                title="Restablecer base de datos inicial"
              >
                <RefreshCw size={14} />
                <span>Restaurar Catálogo</span>
              </button>
              
              <Link
                href="/demo/comida"
                className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-850 text-slate-200 font-bold text-xs py-2 px-3.5 rounded-lg border border-slate-800 transition"
              >
                <Eye size={14} />
                <span>Ver Tienda</span>
              </Link>
              
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setIsFormOpen(true);
                }}
                className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-2 px-4 rounded-lg transition shadow-md shadow-indigo-600/10 cursor-pointer"
              >
                <Plus size={16} />
                <span>Nuevo Producto</span>
              </button>
            </div>
          </div>

          {/* TARJETAS ANALÍTICAS - DASHBOARD */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Total Productos", value: totalProducts, color: "border-slate-800 text-white" },
              { label: "Disponibles", value: availableProducts, color: "border-emerald-500/20 text-emerald-455" },
              { label: "Agotados", value: outOfStockProducts, color: "border-rose-500/20 text-rose-500" },
              { label: "Destacados", value: featuredProducts, color: "border-amber-500/20 text-amber-500" }
            ].map((metric, i) => (
              <div key={i} className={`bg-slate-950 border rounded-2xl p-4 flex flex-col justify-between shadow-sm ${metric.color}`}>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-bold">{metric.label}</span>
                <span className="text-2xl md:text-3xl font-black font-mono mt-2 leading-none">{loading ? "..." : metric.value}</span>
              </div>
            ))}
          </div>

          {/* LISTADO / TABLA DE PRODUCTOS */}
          {loading ? (
            <div className="py-20 text-center">
              <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <span className="text-xs text-slate-500 mt-2 block">Obteniendo listado...</span>
            </div>
          ) : products.length === 0 ? (
            /* B. ESTADO VACÍO PROFESIONAL */
            <div className="bg-slate-900/30 border border-slate-900 rounded-3xl p-12 text-center max-w-xl mx-auto space-y-4">
              <ShoppingBag size={48} className="text-slate-600 mx-auto animate-bounce-slow" />
              <div>
                <h3 className="text-lg font-bold text-white">El catálogo está vacío</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                  Eliminaste todos los productos de demostración. Podés crear uno nuevo o restaurar el catálogo predeterminado de inmediato.
                </p>
              </div>
              <div className="flex gap-2 justify-center pt-2">
                <button
                  onClick={() => resetProducts()}
                  className="bg-slate-900 hover:bg-slate-850 text-slate-350 font-semibold text-xs py-2 px-4 rounded-lg border border-slate-800 cursor-pointer"
                >
                  Restaurar Catálogo Original
                </button>
                <button
                  onClick={() => {
                    setEditingProduct(null);
                    setIsFormOpen(true);
                  }}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-2 px-4 rounded-lg cursor-pointer"
                >
                  Crear primer producto
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* VISTA DESKTOP: TABLA COMPLETA */}
              <div className="hidden md:block bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden shadow-md">
                <table className="w-full border-collapse text-left text-xs md:text-sm">
                  <thead>
                    <tr className="bg-slate-900/60 border-b border-slate-900 text-slate-400 font-mono text-[10px] uppercase tracking-wider">
                      <th className="py-3 px-4">Imagen</th>
                      <th className="py-3 px-4">Nombre</th>
                      <th className="py-3 px-4">Categoría</th>
                      <th className="py-3 px-4">Precio</th>
                      <th className="py-3 px-4 text-center">Estado</th>
                      <th className="py-3 px-4 text-center">Destacado</th>
                      <th className="py-3 px-4 text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-900/60">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-slate-900/20 transition-colors">
                        {/* Celda Imagen */}
                        <td className="py-3.5 px-4">
                          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-850 overflow-hidden">
                            {product.image ? (
                              <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                            ) : (
                              <FoodProductVector id={product.id} className="w-7 h-7" />
                            )}
                          </div>
                        </td>
                        {/* Celda Nombre */}
                        <td className="py-3.5 px-4 font-bold text-slate-100">
                          <div className="flex flex-col">
                            <span>{product.name}</span>
                            <span className="text-[9px] text-slate-500 font-mono font-normal mt-0.5">{product.slug}</span>
                          </div>
                        </td>
                        {/* Celda Categoría */}
                        <td className="py-3.5 px-4 text-slate-400">
                          <span className="bg-slate-900 px-2 py-0.5 rounded text-[10px] border border-slate-850">
                            {product.category}
                          </span>
                        </td>
                        {/* Celda Precio */}
                        <td className="py-3.5 px-4 font-mono font-bold text-slate-200">
                          {formatter.format(product.price)}
                        </td>
                        {/* Celda Disponibilidad Toggle */}
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => handleToggleAvailable(product)}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all border cursor-pointer ${
                              product.available
                                ? "bg-emerald-500/10 text-emerald-450 border-emerald-500/20"
                                : "bg-rose-500/10 text-rose-500 border-rose-500/20"
                            }`}
                          >
                            {product.available ? "Disponible" : "Agotado"}
                          </button>
                        </td>
                        {/* Celda Destacado Toggle */}
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => handleToggleFeatured(product)}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all border cursor-pointer ${
                              product.featured
                                ? "bg-amber-500/10 text-amber-500 border-amber-500/25"
                                : "bg-slate-900 text-slate-500 border-slate-800"
                            }`}
                          >
                            {product.featured ? "Destacado" : "Normal"}
                          </button>
                        </td>
                        {/* Celda Acciones */}
                        <td className="py-3.5 px-4 text-center">
                          <div className="flex justify-center gap-1.5">
                            <button
                              onClick={() => {
                                setEditingProduct(product);
                                setIsFormOpen(true);
                              }}
                              className="p-1.5 hover:bg-slate-900 text-slate-400 hover:text-white rounded transition cursor-pointer"
                              title="Editar producto"
                            >
                              <Edit3 size={14} />
                            </button>
                            <button
                              onClick={() => setDeletingProduct(product)}
                              className="p-1.5 hover:bg-slate-900 text-slate-400 hover:text-rose-500 rounded transition cursor-pointer"
                              title="Eliminar producto"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* VISTA MÓVIL: TARJETAS COMPACTAS TÁCTILES */}
              <div className="block md:hidden space-y-3">
                {products.map((product) => (
                  <div 
                    key={product.id}
                    className="bg-slate-950 border border-slate-900 rounded-2xl p-4.5 flex gap-4 shadow-sm"
                  >
                    {/* Miniatura */}
                    <div className="w-14 h-14 bg-slate-900 rounded-xl border border-slate-850 flex items-center justify-center overflow-hidden flex-shrink-0">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                      ) : (
                        <FoodProductVector id={product.id} className="w-9 h-9" />
                      )}
                    </div>

                    {/* Información */}
                    <div className="flex-grow space-y-3">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-bold text-sm text-slate-100 leading-snug">{product.name}</h4>
                          <span className="font-bold text-xs text-slate-200 font-mono flex-shrink-0">
                            {formatter.format(product.price)}
                          </span>
                        </div>
                        <span className="bg-slate-900 px-2 py-0.5 rounded text-[9px] border border-slate-850 text-slate-400 mt-1 inline-block">
                          {product.category}
                        </span>
                      </div>

                      {/* Toggles Rápidos táctiles */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleToggleAvailable(product)}
                          className={`flex-grow py-1 rounded-lg text-[9px] font-bold transition-all border text-center ${
                            product.available
                              ? "bg-emerald-500/10 text-emerald-450 border-emerald-500/20"
                              : "bg-rose-500/10 text-rose-500 border-rose-500/20"
                          }`}
                        >
                          {product.available ? "Disponible" : "Agotado"}
                        </button>
                        
                        <button
                          onClick={() => handleToggleFeatured(product)}
                          className={`flex-grow py-1 rounded-lg text-[9px] font-bold transition-all border text-center ${
                            product.featured
                              ? "bg-amber-500/10 text-amber-500 border-amber-500/25"
                              : "bg-slate-900 text-slate-500 border-slate-800"
                          }`}
                        >
                          {product.featured ? "★ Destacado" : "★ Normal"}
                        </button>
                      </div>

                      {/* Acciones de modificación */}
                      <div className="flex justify-end gap-3 pt-2.5 border-t border-slate-900/60">
                        <button
                          onClick={() => {
                            setEditingProduct(product);
                            setIsFormOpen(true);
                          }}
                          className="flex items-center gap-1 text-[10px] font-bold text-slate-450 hover:text-white"
                        >
                          <Edit3 size={12} />
                          <span>Editar</span>
                        </button>
                        <button
                          onClick={() => setDeletingProduct(product)}
                          className="flex items-center gap-1 text-[10px] font-bold text-slate-450 hover:text-rose-550"
                        >
                          <Trash2 size={12} />
                          <span>Eliminar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </main>
      </div>

      {/* ========================================================
         C. MODAL DE FORMULARIO: CREAR O EDITAR PRODUCTO
         ======================================================== */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" onClick={() => setIsFormOpen(false)} />
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg p-6 shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition"
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-bold text-white mb-6">
              {editingProduct ? "Editar Producto" : "Nuevo Producto"}
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Nombre */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-450 mb-1">Nombre *</label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4.5 py-2.5 text-xs md:text-sm text-slate-100 outline-none focus:border-indigo-500"
                  placeholder="Ej. Cookie de Pistacho"
                  required
                />
              </div>

              {/* Categoría */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-450 mb-1">Categoría *</label>
                <input
                  type="text"
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4.5 py-2.5 text-xs md:text-sm text-slate-100 outline-none focus:border-indigo-500"
                  placeholder="Ej. Cookies, Alfajores, Combos"
                  required
                />
              </div>

              {/* Precio */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-450 mb-1">Precio Sugerido *</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-bold font-mono">$</span>
                  <input
                    type="number"
                    value={formPrice}
                    onChange={(e) => setFormPrice(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl pl-8 pr-4.5 py-2.5 text-xs md:text-sm text-slate-100 outline-none focus:border-indigo-500 font-mono font-bold"
                    placeholder="Ej. 1500"
                    min="0"
                    required
                  />
                </div>
              </div>

              {/* Descripción */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-450 mb-1">Descripción *</label>
                <textarea
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4.5 py-2.5 text-xs md:text-sm text-slate-100 outline-none focus:border-indigo-500 min-h-[80px]"
                  placeholder="Describí el producto de forma tentadora..."
                  required
                />
              </div>

              {/* Configuración de Imagen */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">Carga de Imagen (Demo)</span>
                
                {/* Opciones de carga */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => handlePresetChange("")}
                    className={`py-2 px-3 rounded-lg border text-center font-semibold transition ${
                      formImagePreset === ""
                        ? "bg-indigo-650/15 border-indigo-500 text-indigo-400"
                        : "bg-slate-900 border-slate-850 text-slate-400"
                    }`}
                  >
                    Ilustración Vectorial
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePresetChange("url")}
                    className={`py-2 px-3 rounded-lg border text-center font-semibold transition ${
                      formImagePreset === "url"
                        ? "bg-indigo-650/15 border-indigo-500 text-indigo-400"
                        : "bg-slate-900 border-slate-850 text-slate-400"
                    }`}
                  >
                    Ingresar URL Web
                  </button>
                </div>

                {formImagePreset === "url" && (
                  <div className="space-y-1">
                    <label className="block text-[9px] uppercase tracking-wider text-slate-500">Pegar URL de Imagen</label>
                    <input
                      type="url"
                      value={formImage}
                      onChange={(e) => setFormImage(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs outline-none focus:border-indigo-500 text-slate-200"
                      placeholder="https://ejemplo.com/foto.jpg"
                    />
                  </div>
                )}

                {/* Subir archivo real FileReader */}
                <div className="space-y-2 pt-2 border-t border-slate-900">
                  <div className="flex justify-between items-center text-[9px] uppercase font-bold text-slate-500">
                    <span>O Subir foto (Base64)</span>
                    <span className="text-amber-500">Máx 200KB</span>
                  </div>
                  <label className="flex items-center justify-center gap-2 border border-dashed border-slate-850 hover:border-slate-700 bg-slate-900 hover:bg-slate-850/80 rounded-xl p-3.5 cursor-pointer text-xs text-slate-400 transition">
                    <Upload size={14} />
                    <span>Seleccionar Archivo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileChange}
                      className="hidden"
                    />
                  </label>
                  {formImage.startsWith("data:") && (
                    <div className="flex items-center gap-2 text-[10px] text-emerald-450 bg-emerald-950/20 px-2.5 py-1 rounded border border-emerald-950">
                      <span>✓ Imagen adjuntada en el dispositivo</span>
                    </div>
                  )}
                </div>

                <div className="text-[10px] text-slate-500 leading-relaxed italic bg-slate-900 p-2.5 rounded border border-slate-850">
                  ⚠ <strong>Nota:</strong> En el catálogo real los archivos se suben al bucket de <strong>Supabase Storage</strong> y se enlazan de forma estable y rápida en la base de datos sin límites de espacio.
                </div>
              </div>

              {/* Switches de Disponible y Destacado */}
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center gap-2.5 bg-slate-950 p-3 rounded-xl border border-slate-850 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formAvailable}
                    onChange={(e) => setFormAvailable(e.target.checked)}
                    className="w-4.5 h-4.5 accent-indigo-650 cursor-pointer"
                  />
                  <div>
                    <span className="block text-xs font-bold text-white">Disponible</span>
                    <span className="text-[9px] text-slate-500">Mostrar stock activo</span>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 bg-slate-950 p-3 rounded-xl border border-slate-850 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formFeatured}
                    onChange={(e) => setFormFeatured(e.target.checked)}
                    className="w-4.5 h-4.5 accent-indigo-650 cursor-pointer"
                  />
                  <div>
                    <span className="block text-xs font-bold text-white">Destacar</span>
                    <span className="text-[9px] text-slate-500">Destacar en portada</span>
                  </div>
                </label>
              </div>

              {/* Mensajes de validación interna */}
              {formError && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/25 rounded-xl text-rose-500 text-xs flex gap-2 items-start">
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  <span>{formError}</span>
                </div>
              )}

              <hr className="border-slate-800" />

              {/* Botones de acción */}
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-400 font-bold py-2.5 px-4.5 rounded-xl text-xs cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 px-6 rounded-xl text-xs cursor-pointer"
                >
                  {editingProduct ? "Guardar cambios" : "Guardar producto"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
         D. MODAL DE CONFIRMACIÓN: ELIMINAR PRODUCTO
         ======================================================== */}
      {deletingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" onClick={() => setDeletingProduct(null)} />
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-sm p-6 shadow-2xl relative z-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto border border-rose-500/20">
              <Trash2 size={22} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">¿Eliminar producto?</h3>
              <p className="text-xs text-slate-450 leading-relaxed">
                ¿Seguro que querés eliminar el producto <strong>"{deletingProduct.name}"</strong>? Esta acción no se puede deshacer.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setDeletingProduct(null)}
                className="flex-1 bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-450 font-bold py-2 px-3 rounded-lg text-xs cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 px-3 rounded-lg text-xs cursor-pointer"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
         E. MODAL DE CONFIRMACIÓN: RESTAURAR CATÁLOGO
         ======================================================== */}
      {isResetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" onClick={() => setIsResetConfirmOpen(false)} />
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-sm p-6 shadow-2xl relative z-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-550 flex items-center justify-center mx-auto border border-amber-500/20">
              <RefreshCw size={22} className="animate-spin-slow" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">¿Restaurar catálogo?</h3>
              <p className="text-xs text-slate-450 leading-relaxed">
                Se borrarán todos tus productos creados o editados y se restablecerán los 10 productos predeterminados iniciales.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setIsResetConfirmOpen(false)}
                className="flex-1 bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-455 font-bold py-2 px-3 rounded-lg text-xs cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={handleResetConfirm}
                className="flex-1 bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 px-3 rounded-lg text-xs cursor-pointer"
              >
                Restaurar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
         F. TOAST ENGINE DE NOTIFICACIÓN
         ======================================================== */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-md w-full pointer-events-none px-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-3 rounded-xl border shadow-lg text-xs font-semibold flex items-center gap-2 animate-float pointer-events-auto w-fit ml-auto ${
              toast.type === "success"
                ? "bg-slate-900 border-emerald-500/40 text-emerald-450 shadow-emerald-950/20"
                : toast.type === "error"
                ? "bg-slate-900 border-rose-500/40 text-rose-550 shadow-rose-950/20"
                : "bg-slate-900 border-indigo-500/40 text-indigo-400 shadow-indigo-950/20"
            }`}
          >
            <Check size={14} className={toast.type === "success" ? "text-emerald-450" : "hidden"} />
            <X size={14} className={toast.type === "error" ? "text-rose-550" : "hidden"} />
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

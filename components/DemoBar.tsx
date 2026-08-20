"use client";

import Link from "next/link";
import { ArrowLeft, Monitor } from "lucide-react";

interface DemoBarProps {
  brandName: string;
  category: string;
}

export default function DemoBar({ brandName, category }: DemoBarProps) {
  return (
    <div className="w-full bg-slate-900 border-b border-slate-800 text-slate-300 py-2.5 px-4 sticky top-0 z-50 flex flex-wrap justify-between items-center gap-3 text-xs md:text-sm font-sans shadow-md">
      <div className="flex items-center gap-2">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-slate-100">Vista Previa:</span>
          <span>
            Página demo de <strong className="text-emerald-400 font-medium">{category}</strong> ({brandName})
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="hidden md:inline text-slate-500">| Contenido Demostrativo Ficticio |</span>
        <Link 
          href="/"
          className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white font-medium py-1.5 px-3 rounded-lg border border-slate-700 transition duration-200"
        >
          <ArrowLeft size={14} />
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

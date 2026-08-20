"use client";

import Link from "next/link";
import { ArrowLeft, Settings } from "lucide-react";

interface DemoBarProps {
  brandName: string;
  category: string;
  adminUrl?: string; // URL del panel de administración para probar la demo
}

export default function DemoBar({ brandName, category, adminUrl }: DemoBarProps) {
  return (
    <div className="w-full bg-slate-900 border-b border-slate-800 text-slate-350 py-2.5 px-4 sticky top-0 z-50 flex flex-wrap justify-between items-center gap-3 text-xs md:text-sm font-sans shadow-md">
      <div className="flex items-center gap-2">
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
        </span>
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-100 uppercase tracking-wider text-[10px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-amber-400">DEMO</span>
          <span>
            Estás explorando una tienda de demostración de <strong className="text-amber-400 font-medium">{category}</strong>
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 flex-wrap">
        <Link 
          href="/"
          className="flex items-center gap-1.5 text-slate-400 hover:text-white transition duration-200 mr-2"
        >
          <ArrowLeft size={14} />
          Volver a las demos
        </Link>
        
        {adminUrl && (
          <Link 
            href={adminUrl}
            className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-200 shadow-sm"
          >
            <Settings size={13} />
            <span>Probar panel administrador</span>
          </Link>
        )}
      </div>
    </div>
  );
}

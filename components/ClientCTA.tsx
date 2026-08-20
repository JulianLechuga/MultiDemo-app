"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

interface ClientCTAProps {
  demoId: string;
  demoName: string;
}

export default function ClientCTA({ demoId, demoName }: ClientCTAProps) {
  return (
    <div className="fixed bottom-6 left-6 z-40 animate-bounce-slow">
      <Link
        href={`/#contacto?demo=${demoId}`}
        className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 active:from-violet-700 active:to-indigo-700 text-white font-semibold py-3 px-5 rounded-full shadow-[0_10px_25px_-5px_rgba(99,102,241,0.5)] border border-violet-400/30 transition-all duration-300 hover:scale-105 group whitespace-nowrap text-sm"
      >
        <Sparkles size={16} className="text-amber-300 animate-pulse group-hover:rotate-12 transition-transform duration-300" />
        <span>Quiero una web como esta</span>
      </Link>
    </div>
  );
}

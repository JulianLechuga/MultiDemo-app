import React from "react";

interface AccessoriesProductVectorProps {
  id: string;
  className?: string;
}

export default function AccessoriesProductVector({ id, className = "w-full h-full" }: AccessoriesProductVectorProps) {
  switch (id) {
    case "collar-prisma":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#1c1917" />
          {/* Cadena en forma de arco */}
          <path d="M25 20 C40 45 60 45 75 20" stroke="#d6d3d1" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Enganche */}
          <circle cx="50" cy="40" r="2.5" fill="#f59e0b" />
          {/* Dije de Prisma de Cuarzo */}
          <path d="M50 40 L55 52 L50 78 L45 52 Z" fill="#e2e8f0" opacity="0.8" />
          <path d="M50 40 L50 78 L45 52 Z" fill="#cbd5e1" opacity="0.9" />
          {/* Reflejos de luz */}
          <path d="M47 54 L49 74" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    case "anillo-aurum":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#1c1917" />
          {/* Cuerpo del anillo en perspectiva */}
          <ellipse cx="50" cy="55" rx="20" ry="16" stroke="#fbbf24" strokeWidth="4" />
          {/* Bisel del diamante */}
          <path d="M46 36 L54 36 L57 41 L50 48 L43 41 Z" fill="#fbbf24" />
          {/* Diamante brillante */}
          <path d="M47 37 L53 37 L55 40 L50 46 L45 40 Z" fill="#e2e8f0" />
          {/* Destello de brillo */}
          <path d="M41 28 L43 32 M59 28 L57 32 M50 22 V26" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "aros-luna":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#1c1917" />
          {/* Gancho del aro izquierdo */}
          <path d="M35 25 C35 20 40 18 42 22 V35" stroke="#d6d3d1" strokeWidth="1.5" fill="none" />
          {/* Luna martillada izquierda */}
          <path d="M42 35 C42 48 30 55 30 42 C30 28 42 32 42 35 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
          
          {/* Gancho del aro derecho */}
          <path d="M65 25 C65 20 70 18 72 22 V35" stroke="#d6d3d1" strokeWidth="1.5" fill="none" />
          {/* Luna martillada derecha */}
          <path d="M72 35 C72 48 60 55 60 42 C60 28 72 32 72 35 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
          {/* Puntos texturados */}
          <circle cx="34" cy="40" r="0.8" fill="#d97706" />
          <circle cx="36" cy="44" r="0.8" fill="#d97706" />
          <circle cx="38" cy="37" r="0.8" fill="#d97706" />
          <circle cx="64" cy="40" r="0.8" fill="#d97706" />
          <circle cx="66" cy="44" r="0.8" fill="#d97706" />
        </svg>
      );
    case "pulseras-nudo-marino":
    case "pulsera-nudo-marino":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#1c1917" />
          {/* Cordones de la pulsera */}
          <path d="M15 50 Q30 42 50 50 Q70 58 85 50" stroke="#292524" strokeWidth="3" fill="none" />
          {/* Dije de Nudo Infinito */}
          <path d="M42 50 C40 45 35 48 40 52 C45 56 46 44 51 48 C56 52 52 55 50 50" stroke="#d6d3d1" strokeWidth="2.5" fill="none" />
          <path d="M50 50 C48 45 44 44 49 48 C54 52 55 56 60 52 C65 48 60 45 58 50" stroke="#d6d3d1" strokeWidth="2.5" fill="none" />
          {/* Nudos reguladores laterales */}
          <circle cx="28" cy="47" r="3.5" fill="#1c1917" stroke="#292524" strokeWidth="1.5" />
          <circle cx="72" cy="53" r="3.5" fill="#1c1917" stroke="#292524" strokeWidth="1.5" />
        </svg>
      );
    case "dije-estetoscopio":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#1c1917" />
          {/* Argolla superior */}
          <circle cx="50" cy="22" r="5" stroke="#cbd5e1" strokeWidth="2" />
          {/* Estetoscopio plateado detallado */}
          <path d="M50 27 V55 C50 64 42 70 36 64 C30 58 36 48 45 52" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M50 55 C50 64 58 70 64 64 C70 58 64 48 55 52" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Campana */}
          <rect x="42" y="52" width="6" height="4" rx="1" fill="#cbd5e1" />
          {/* Auriculares */}
          <circle cx="36" cy="38" r="2.5" fill="#e2e8f0" />
          <circle cx="64" cy="38" r="2.5" fill="#e2e8f0" />
          <path d="M36 42 Q50 48 64 42" stroke="#cbd5e1" strokeWidth="2.5" fill="none" />
        </svg>
      );
    case "sticker-pack-med":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#1c1917" />
          {/* Bordes holográficos simulados */}
          {/* Sticker Corazón */}
          <path d="M28 42 C28 32 44 32 44 42 C44 48 34 52 28 58 C22 52 12 48 12 42 C12 32 28 32 28 42 Z" fill="#fb7185" stroke="#ffffff" strokeWidth="3" />
          {/* Cerebro con anteojos */}
          <ellipse cx="68" cy="44" rx="16" ry="12" fill="#fda4af" stroke="#ffffff" strokeWidth="3" />
          {/* Anteojos del cerebro */}
          <circle cx="62" cy="44" r="3.5" stroke="#000000" strokeWidth="1.5" />
          <circle cx="74" cy="44" r="3.5" stroke="#000000" strokeWidth="1.5" />
          <line x1="65.5" y1="44" x2="70.5" y2="44" stroke="#000000" strokeWidth="1.5" />
          {/* Sticker termo UBA */}
          <rect x="36" y="58" width="22" height="24" rx="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="3" />
          <text x="41" y="74" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="sans-serif">UBA</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#292524" />
          <circle cx="50" cy="50" r="20" fill="#44403c" />
        </svg>
      );
  }
}

import React from "react";

interface ClothingProductVectorProps {
  id: string;
  className?: string;
}

export default function ClothingProductVector({ id, className = "w-full h-full" }: ClothingProductVectorProps) {
  switch (id) {
    case "ambo-classic-teal":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fondo gradiente */}
          <rect width="100" height="100" rx="16" fill="#f0fdfa" />
          {/* Chaqueta de Ambo */}
          <path d="M25 30 L40 25 L45 28 L50 25 L65 30 L60 55 L30 55 Z" fill="#0d9488" />
          <path d="M35 30 L38 25 L41 27 L43 32 Z" fill="#0f766e" />
          <path d="M55 30 L52 25 L49 27 L47 32 Z" fill="#0f766e" />
          {/* Cuello V */}
          <path d="M42 27 L45 34 L48 27 Z" fill="#f0fdfa" />
          {/* Bolsillo */}
          <rect x="48" y="42" width="8" height="8" rx="1" fill="#0f766e" />
          {/* Pantalón plegado */}
          <path d="M35 60 H55 V82 L47 82 L45 68 L43 82 L35 82 Z" fill="#0d9488" />
          {/* Estetoscopio decorativo de fondo */}
          <circle cx="50" cy="50" r="32" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
        </svg>
      );
    case "ambo-fit-navy":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#f0f9ff" />
          {/* Chaqueta ajustada */}
          <path d="M28 32 L40 28 L45 30 L50 28 L62 32 L58 56 C50 58 40 58 32 56 Z" fill="#1e3a8a" />
          <path d="M42 29 L45 35 L48 29 Z" fill="#f0f9ff" />
          {/* Pinzas traseras/línea de diseño */}
          <path d="M36 38 Q45 42 54 38" stroke="#172554" strokeWidth="1" />
          {/* Bolsillo interior/cierre */}
          <rect x="32" y="44" width="7" height="7" rx="1" fill="#172554" />
          {/* Pantalón chupín plegado */}
          <path d="M36 62 H54 L51 84 H47 L45 72 L43 84 H39 Z" fill="#1e3a8a" />
        </svg>
      );
    case "chaqueta-guardapolvo":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#f8fafc" />
          {/* Guardapolvo blanco */}
          <path d="M28 25 L40 22 L45 25 L50 22 L62 25 L58 76 L32 76 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Cuello Mao */}
          <path d="M41 22 Q45 25 49 22" stroke="#94a3b8" strokeWidth="2" fill="none" />
          {/* Botones */}
          <circle cx="45" cy="36" r="1.5" fill="#94a3b8" />
          <circle cx="45" cy="46" r="1.5" fill="#94a3b8" />
          <circle cx="45" cy="56" r="1.5" fill="#94a3b8" />
          {/* Bolsillo */}
          <rect x="49" y="32" width="7" height="8" rx="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="50" y1="35" x2="55" y2="35" stroke="#94a3b8" strokeWidth="1" />
        </svg>
      );
    case "cofia-elasticada":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#f0fdfa" />
          {/* Cofia forma ovalada ajustable */}
          <path d="M20 52 C20 30 32 20 50 20 C68 20 80 30 80 52 C80 62 76 66 70 66 C65 66 62 60 50 60 C38 60 35 66 30 66 C24 66 20 62 20 52 Z" fill="#0f766e" />
          {/* Elástico inferior */}
          <path d="M30 60 Q50 63 70 60" stroke="#115e59" strokeWidth="2.5" fill="none" />
          {/* Cintas de amarre */}
          <path d="M30 63 C25 64 22 72 26 76" stroke="#115e59" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M70 63 C75 64 78 72 74 76" stroke="#115e59" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Estampado médico decorativo (cruz o latido) */}
          <path d="M46 40 H54 M50 36 V44" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "pantalón-jogger-medico":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#f8fafc" />
          {/* Pantalón jogger de frente */}
          <path d="M30 22 H70 L62 82 H54 L50 48 L46 82 H38 Z" fill="#0f766e" />
          {/* Cintura elástica */}
          <rect x="30" y="22" width="40" height="6" rx="1" fill="#115e59" />
          <line x1="50" y1="22" x2="50" y2="28" stroke="#ffffff" strokeWidth="1.5" />
          {/* Puños elásticos inferiores */}
          <rect x="38" y="78" width="8" height="4" fill="#115e59" />
          <rect x="54" y="78" width="8" height="4" fill="#115e59" />
          {/* Bolsillos de carga laterales */}
          <rect x="32" y="44" width="6" height="10" rx="1" fill="#115e59" />
          <rect x="62" y="44" width="6" height="10" rx="1" fill="#115e59" />
        </svg>
      );
    case "portacredencial-silicona":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#f0fdfa" />
          {/* Reel retráctil circular */}
          <circle cx="50" cy="40" r="20" fill="#dc2626" />
          <circle cx="50" cy="40" r="16" fill="#ef4444" />
          {/* Estetoscopio en el medio del reel */}
          <path d="M46 36 C46 34 54 34 54 36 V40 C54 44 46 44 46 40" stroke="#ffffff" strokeWidth="1.5" fill="none" />
          {/* Cuerda retráctil */}
          <line x1="50" y1="60" x2="50" y2="72" stroke="#64748b" strokeWidth="2.5" />
          {/* Credencial colgando */}
          <rect x="36" y="72" width="28" height="18" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Banda de la credencial */}
          <rect x="36" y="72" width="28" height="4" fill="#1e3a8a" />
          {/* Foto miniatura */}
          <rect x="39" y="79" width="6" height="8" fill="#e2e8f0" />
          {/* Lineas de texto */}
          <line x1="48" y1="80" x2="60" y2="80" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="48" y1="84" x2="58" y2="84" stroke="#94a3b8" strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#f1f5f9" />
          <circle cx="50" cy="50" r="20" fill="#cbd5e1" />
        </svg>
      );
  }
}

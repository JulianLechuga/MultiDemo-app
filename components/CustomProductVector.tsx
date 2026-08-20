import React from "react";

interface CustomProductVectorProps {
  id: string;
  className?: string;
}

export default function CustomProductVector({ id, className = "w-full h-full" }: CustomProductVectorProps) {
  switch (id) {
    case "corazon-anatomico":
      return (
        <svg viewBox="0 0 100 100" className={`${className} blueprint-grid`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rejilla de fondo ya heredada por CSS pero agregamos detalles técnicos en SVG */}
          <rect width="100" height="100" fill="#0f172a" rx="16" />
          <path d="M10 0 V100 M20 0 V100 M30 0 V100 M40 0 V100 M50 0 V100 M60 0 V100 M70 0 V100 M80 0 V100 M90 0 V100" stroke="#1e293b" strokeWidth="0.5" />
          <path d="M0 10 H100 M0 20 H100 M0 30 H100 M0 40 H100 M0 50 H100 M0 60 H100 M0 70 H100 M0 80 H100 M0 90 H100" stroke="#1e293b" strokeWidth="0.5" />
          
          {/* Corazón anatómico lineal cibernético */}
          <path d="M50 22 C40 12 25 15 25 32 C25 45 42 62 50 78 C58 62 75 45 75 32 C75 15 60 12 50 22 Z" stroke="#22d3ee" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Aorta y arterias en cian */}
          <path d="M44 26 V16 H38 M50 22 V14 H56" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
          {/* Líneas internas / divisiones mecánicas */}
          <path d="M50 35 Q40 45 32 55 M50 35 Q60 45 68 55 M50 35 V74" stroke="#0891b2" strokeWidth="1.5" />
          {/* Indicador de medidas */}
          <line x1="15" y1="20" x2="15" y2="80" stroke="#f97316" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M12 23 L15 20 L18 23 M12 77 L15 80 L18 77" stroke="#f97316" strokeWidth="1" />
          <text x="5" y="52" fill="#f97316" fontSize="5" fontFamily="monospace" transform="rotate(-90 5 52)">15.0 cm</text>
        </svg>
      );
    case "cerebro-seccionado":
      return (
        <svg viewBox="0 0 100 100" className={`${className} blueprint-grid`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#0f172a" rx="16" />
          <path d="M10 0 V100 M20 0 V100 M30 0 V100 M40 0 V100 M50 0 V100 M60 0 V100 M70 0 V100 M80 0 V100 M90 0 V100" stroke="#1e293b" strokeWidth="0.5" />
          <path d="M0 10 H100 M0 20 H100 M0 30 H100 M0 40 H100 M0 50 H100 M0 60 H100 M0 70 H100 M0 80 H100 M0 90 H100" stroke="#1e293b" strokeWidth="0.5" />
          
          {/* Cerebro: Lóbulo frontal cian */}
          <path d="M50 25 C40 22 28 30 28 45 C28 52 35 56 50 56 Z" stroke="#22d3ee" strokeWidth="2.5" fill="#22d3ee" fillOpacity="0.1" />
          {/* Lóbulo parietal naranja */}
          <path d="M50 25 C60 22 72 30 72 45 C72 50 68 53 50 53 Z" stroke="#f97316" strokeWidth="2.5" fill="#f97316" fillOpacity="0.1" />
          {/* Lóbulo occipital rosa */}
          <path d="M72 45 C75 52 70 65 58 65 C52 65 50 58 50 53 Z" stroke="#ec4899" strokeWidth="2.5" fill="#ec4899" fillOpacity="0.1" />
          {/* Cerebelo verde */}
          <path d="M50 56 C50 64 42 72 35 72 C28 72 28 64 28 52 C28 52 38 52 50 56 Z" stroke="#84cc16" strokeWidth="2" fill="#84cc16" fillOpacity="0.1" />
          
          {/* Líneas de ensamblaje */}
          <circle cx="50" cy="40" r="1.5" fill="#ffffff" />
          <circle cx="50" cy="50" r="1.5" fill="#ffffff" />
          <line x1="50" y1="36" x2="50" y2="54" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      );
    case "craneo-articulado":
      return (
        <svg viewBox="0 0 100 100" className={`${className} blueprint-grid`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#0f172a" rx="16" />
          <path d="M10 0 V100 M20 0 V100 M30 0 V100 M40 0 V100 M50 0 V100 M60 0 V100 M70 0 V100 M80 0 V100 M90 0 V100" stroke="#1e293b" strokeWidth="0.5" />
          <path d="M0 10 H100 M0 20 H100 M0 30 H100 M0 40 H100 M0 50 H100 M0 60 H100 M0 70 H100 M0 80 H100 M0 90 H100" stroke="#1e293b" strokeWidth="0.5" />
          
          {/* Cráneo contorno */}
          <path d="M30 45 C30 25 40 20 50 20 C60 20 70 25 70 45 C70 56 68 58 64 58 C64 68 62 70 58 70 C54 70 53 66 50 66 C47 66 46 70 42 70 C38 70 36 68 36 58 C32 58 30 56 30 45 Z" stroke="#22d3ee" strokeWidth="2.5" />
          {/* Órbitas oculares */}
          <rect x="36" y="38" width="10" height="10" rx="3" stroke="#22d3ee" strokeWidth="2" />
          <rect x="54" y="38" width="10" height="10" rx="3" stroke="#22d3ee" strokeWidth="2" />
          {/* Cavidad nasal */}
          <path d="M48 52 L52 52 L50 47 Z" stroke="#22d3ee" strokeWidth="2" />
          {/* Mandíbula separada / resorte */}
          <path d="M38 74 H62 L58 84 H42 Z" stroke="#f97316" strokeWidth="2" />
          {/* Resorte de tensión */}
          <path d="M36 62 Q30 68 38 72" stroke="#f97316" strokeWidth="1.5" fill="none" />
          <path d="M64 62 Q70 68 62 72" stroke="#f97316" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "llavero-anatomico-personalizado":
      return (
        <svg viewBox="0 0 100 100" className={`${className} blueprint-grid`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#0f172a" rx="16" />
          {/* Cuerpo del Llavero rectangular */}
          <rect x="18" y="35" width="64" height="30" rx="4" stroke="#22d3ee" strokeWidth="2.5" />
          {/* Anilla del llavero */}
          <circle cx="28" cy="50" r="4" stroke="#f97316" strokeWidth="2" />
          <path d="M24 50 L10 50 C5 50 5 65 15 65" stroke="#f97316" strokeWidth="1.5" fill="none" />
          <circle cx="15" cy="65" r="8" stroke="#f97316" strokeWidth="2" />
          {/* Nombre en relieve (UBA MED) */}
          <text x="36" y="52" fill="#22d3ee" fontSize="7" fontWeight="bold" fontFamily="monospace">SOFIA.MED</text>
          <text x="36" y="60" fill="#0891b2" fontSize="5" fontFamily="monospace">UBA - 2026</text>
        </svg>
      );
    case "soporte-estetoscopio-escritorio":
      return (
        <svg viewBox="0 0 100 100" className={`${className} blueprint-grid`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#0f172a" rx="16" />
          {/* Cilindro soporte base */}
          <ellipse cx="50" cy="74" rx="28" ry="10" stroke="#22d3ee" strokeWidth="2" />
          <path d="M22 45 V74 C22 80 78 80 78 74 V45" stroke="#22d3ee" strokeWidth="2" />
          <ellipse cx="50" cy="45" rx="28" ry="10" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />
          
          {/* Ranura central estetoscopio */}
          <rect x="42" y="38" width="16" height="14" rx="2" stroke="#f97316" strokeWidth="1.5" />
          {/* Indicadores de extrusión en cian */}
          <path d="M12 45 H20 M80 45 H88 M50 25 V35" stroke="#0891b2" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      );
    case "proyecto-a-pedido":
      return (
        <svg viewBox="0 0 100 100" className={`${className} blueprint-grid`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#0f172a" rx="16" />
          {/* Boquilla de extrusora de impresora 3D */}
          <path d="M50 48 L42 36 H58 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="46" y="24" width="8" height="12" fill="#cbd5e1" />
          {/* Bloque calefactor latón */}
          <rect x="36" y="32" width="28" height="10" rx="1" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
          
          {/* Filamento extruido saliendo de la boquilla */}
          <line x1="50" y1="48" x2="50" y2="58" stroke="#f97316" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
          
          {/* Modelo en impresión (Capas horizontales en la base) */}
          <path d="M20 78 H80 M24 74 H76 M28 70 H72 M34 66 H66 M40 62 H60 M46 58 H54" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <path d="M20 82 H80" stroke="#f97316" strokeWidth="3" opacity="0.4" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#0f172a" rx="16" />
          <circle cx="50" cy="50" r="20" fill="#1e293b" />
        </svg>
      );
  }
}

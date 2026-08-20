import React from "react";

interface FoodProductVectorProps {
  id: string;
  className?: string;
}

export default function FoodProductVector({ id, className = "w-full h-full" }: FoodProductVectorProps) {
  switch (id) {
    case "cookie-clasica":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fondo de galleta dorado */}
          <circle cx="50" cy="50" r="42" fill="#d97706" />
          <circle cx="50" cy="50" r="38" fill="#f59e0b" opacity="0.9" />
          {/* Texturas de galleta */}
          <path d="M25 40C25 40 30 35 40 35M60 25C65 28 75 35 70 45" stroke="#b45309" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          <path d="M30 65C35 68 45 68 55 62" stroke="#b45309" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          {/* Chips de chocolate semiamargo */}
          <rect x="32" y="28" width="10" height="8" rx="2" transform="rotate(15 32 28)" fill="#451a03" />
          <rect x="55" y="32" width="12" height="9" rx="3" transform="rotate(-10 55 32)" fill="#451a03" />
          <rect x="25" y="52" width="9" height="9" rx="2.5" transform="rotate(45 25 52)" fill="#451a03" />
          <rect x="42" y="55" width="11" height="8" rx="2" fill="#451a03" />
          <rect x="62" y="58" width="8" height="8" rx="2" transform="rotate(-30 62 58)" fill="#451a03" />
          <rect x="48" y="18" width="9" height="7" rx="2" transform="rotate(5 48 18)" fill="#451a03" />
          <circle cx="48" cy="40" r="4" fill="#451a03" />
          <circle cx="68" cy="48" r="4" fill="#451a03" />
          <circle cx="36" cy="62" r="3.5" fill="#451a03" />
        </svg>
      );
    case "cookie-red-velvet":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fondo de galleta rojo terciopelo */}
          <circle cx="50" cy="50" r="42" fill="#991b1b" />
          <circle cx="50" cy="50" r="38" fill="#b91c1c" opacity="0.9" />
          <circle cx="50" cy="50" r="35" fill="#dc2626" opacity="0.5" />
          {/* Textura */}
          <path d="M22 45C22 45 32 30 45 32" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <path d="M52 68C60 62 70 65 72 55" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          {/* Chips de chocolate blanco */}
          <rect x="35" y="25" width="9" height="9" rx="3" fill="#f8fafc" />
          <rect x="52" y="30" width="11" height="8" rx="2" transform="rotate(20 52 30)" fill="#f1f5f9" />
          <rect x="22" y="48" width="10" height="8" rx="2.5" transform="rotate(-40 22 48)" fill="#f8fafc" />
          <rect x="65" y="45" width="12" height="9" rx="3" transform="rotate(15 65 45)" fill="#f1f5f9" />
          <rect x="42" y="58" width="9" height="7" rx="2" fill="#fafafa" />
          <rect x="58" y="58" width="10" height="9" rx="2.5" transform="rotate(-15 58 58)" fill="#f8fafc" />
          <circle cx="48" cy="45" r="4.5" fill="#fafafa" />
          <circle cx="32" cy="62" r="3.5" fill="#f1f5f9" />
          <circle cx="65" cy="22" r="3.5" fill="#fafafa" />
        </svg>
      );
    case "brownie-classic":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cuerpo del Brownie */}
          <rect x="12" y="12" width="76" height="76" rx="6" fill="#3f1a04" />
          <rect x="18" y="18" width="64" height="64" rx="4" fill="#4c1d95" opacity="0.1" />
          <rect x="18" y="18" width="64" height="64" rx="4" fill="#451a03" />
          {/* Grietas de la superficie crocante */}
          <path d="M12 45C22 42 35 50 48 44C58 40 70 48 88 45" stroke="#270e00" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path d="M40 12C38 25 45 42 42 55C40 65 48 78 45 88" stroke="#270e00" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path d="M22 25C30 30 35 22 48 28" stroke="#78350f" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          <path d="M55 70C65 65 72 75 80 68" stroke="#78350f" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          {/* Trozos de nuez */}
          <path d="M28 22C32 20 35 24 32 28C28 30 25 25 28 22Z" fill="#d97706" />
          <path d="M62 25C66 22 72 26 68 30C64 32 60 28 62 25Z" fill="#d97706" />
          <path d="M22 62C26 60 30 65 25 68C22 70 18 66 22 62Z" fill="#d97706" />
          <path d="M55 58C60 56 64 60 62 65C58 68 52 64 55 58Z" fill="#d97706" />
          <path d="M68 68C72 65 76 70 72 74C68 76 65 72 68 68Z" fill="#d97706" />
        </svg>
      );
    case "alfajor-pistacho":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tapa inferior */}
          <ellipse cx="50" cy="62" rx="42" ry="16" fill="#3f1a04" />
          <ellipse cx="50" cy="58" rx="42" ry="16" fill="#451a03" />
          {/* Relleno de pistacho */}
          <ellipse cx="50" cy="50" rx="43" ry="15" fill="#84cc16" />
          <ellipse cx="50" cy="48" rx="43" ry="15" fill="#a3e635" />
          {/* Tapa superior */}
          <ellipse cx="50" cy="38" rx="42" ry="16" fill="#3f1a04" />
          <ellipse cx="50" cy="34" rx="42" ry="16" fill="#451a03" />
          {/* Hilados decorativos */}
          <path d="M15 32C30 38 45 28 60 34C75 40 82 32 85 34" stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          {/* Trozos de pistacho espolvoreados en la superficie */}
          <ellipse cx="38" cy="28" rx="2" ry="1.5" fill="#4d7c0f" />
          <ellipse cx="48" cy="30" rx="3" ry="1" fill="#4d7c0f" />
          <ellipse cx="62" cy="26" rx="2.5" ry="2" fill="#4d7c0f" />
          <ellipse cx="56" cy="32" rx="1.5" ry="1" fill="#4d7c0f" />
        </svg>
      );
    case "cinnamon-roll":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base del Bollo */}
          <circle cx="50" cy="50" r="42" fill="#d97706" />
          <circle cx="50" cy="50" r="39" fill="#eab308" opacity="0.9" />
          {/* Espiral de canela */}
          <path d="M50 50C45 45 42 55 45 60C50 68 62 62 65 52C68 38 52 32 40 38C26 45 28 65 44 72C62 80 82 66 82 46C82 22 56 12 34 20C16 28 10 54 22 74" stroke="#451a03" strokeWidth="4.5" strokeLinecap="round" />
          {/* Glaseado de queso crema */}
          <path d="M28 35C38 32 48 38 55 35" stroke="#fafafa" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
          <path d="M35 55C42 58 55 52 62 58" stroke="#f8fafc" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" />
          <path d="M45 70C52 75 68 70 75 66" stroke="#fafafa" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
          <path d="M25 60C22 52 18 42 30 30" stroke="#f1f5f9" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        </svg>
      );
    case "combo-recreo":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Taza de café */}
          <rect x="18" y="32" width="34" height="38" rx="4" fill="#cbd5e1" />
          <path d="M18 36H52V64H18V36Z" fill="#f1f5f9" />
          {/* Asa de la taza */}
          <path d="M18 40H10C7.8 40 6 41.8 6 44V58C6 60.2 7.8 62 10 62H18" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
          <path d="M22 36C22 34 25 32 30 32C35 32 38 34 38 36" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
          {/* Humo del cafe */}
          <path d="M28 25C26 21 30 18 28 14" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M36 27C34 23 38 20 36 16" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
          {/* Cookie pequeña al lado */}
          <circle cx="68" cy="62" r="22" fill="#d97706" />
          <circle cx="68" cy="62" r="20" fill="#f59e0b" />
          <circle cx="62" cy="55" r="2.5" fill="#451a03" />
          <circle cx="74" cy="54" r="2" fill="#451a03" />
          <circle cx="72" cy="66" r="3" fill="#451a03" />
          <circle cx="60" cy="68" r="2" fill="#451a03" />
          <circle cx="68" cy="62" r="2.5" fill="#451a03" />
        </svg>
      );
    case "box-degustacion":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base de la caja */}
          <rect x="15" y="32" width="70" height="48" rx="4" fill="#a21caf" opacity="0.1" />
          <rect x="15" y="32" width="70" height="48" rx="4" fill="#d97706" />
          {/* Tapa de la caja (abierta o en relieve) */}
          <rect x="11" y="24" width="78" height="12" rx="2" fill="#b45309" />
          {/* Cinta de regalo */}
          <rect x="46" y="24" width="8" height="56" fill="#e11d48" />
          {/* Moño */}
          <path d="M50 24C44 14 34 20 46 24Z" fill="#be123c" />
          <path d="M50 24C56 14 66 20 54 24Z" fill="#be123c" />
          <circle cx="50" cy="24" r="4.5" fill="#e11d48" />
          {/* Etiqueta */}
          <rect x="62" y="44" width="12" height="18" rx="1" transform="rotate(15 62 44)" fill="#faf9f6" />
          <line x1="65" y1="48" x2="71" y2="50" stroke="#b45309" strokeWidth="1.5" />
          <line x1="64" y1="53" x2="69" y2="55" stroke="#b45309" strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="80" rx="8" fill="#e2e8f0" />
          <circle cx="50" cy="50" r="20" fill="#cbd5e1" />
        </svg>
      );
  }
}

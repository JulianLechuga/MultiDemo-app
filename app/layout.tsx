import type { Metadata } from "next";
import { 
  Outfit, 
  Inter, 
  Quicksand, 
  Playfair_Display, 
  Plus_Jakarta_Sans, 
  Cormorant_Garamond, 
  Montserrat, 
  Space_Grotesk, 
  JetBrains_Mono 
} from "next/font/google";
import "./globals.css";

// 1. Cargamos las fuentes necesarias para la Landing Page y las Demos
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// 2. Metadatos SEO del sitio principal
export const metadata: Metadata = {
  title: "Páginas Web Económicas y Catálogos Digitales para Emprendedores | WebLab",
  description: "Creamos páginas web personalizadas y catálogos digitales con QR para ferias y emprendimientos en Buenos Aires. Integración directa con Instagram y WhatsApp.",
  keywords: ["páginas web económicas", "catálogos digitales", "ferias universitarias", "UBA", "Medicina", "Buenos Aires", "emprendedores", "diseño web"],
  authors: [{ name: "WebLab UBA" }],
  openGraph: {
    title: "Páginas Web para Emprendimientos | WebLab",
    description: "Impulsá tu marca universitaria con una web profesional y económica. Catálogos listos para vender por WhatsApp.",
    type: "website",
    locale: "es_AR",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth h-full">
      <body
        className={`${outfit.variable} ${inter.variable} ${quicksand.variable} ${playfair.variable} ${jakarta.variable} ${cormorant.variable} ${montserrat.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-full font-inter bg-slate-950 text-slate-100 antialiased flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

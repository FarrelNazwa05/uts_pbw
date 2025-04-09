// components/Logo.tsx
import React from "react";

// Tipe properti untuk komponen Logo
interface LogoProps {
  logoSrc: string;  // URL gambar logo
  text?: string; // Teks yang ditampilkan di samping logo
}

// Komponen Logo menampilkan gambar dan teks logo
const Logo: React.FC<LogoProps> = ({ logoSrc, text = "LOGO" }) => (
  <div className="flex items-center gap-2"> {/* Flex untuk menyusun logo dan teks horizontal */}
    <img src={logoSrc} alt="Logo" className="h-10" /> {/* Gambar logo */}
    <span className="text-xl font-semibold">{text}</span> {/* Teks logo */}
  </div>
);

export default Logo;

// components/organisms/Footer.tsx
import React from "react";

// Tipe properti untuk komponen Footer
interface FooterProps {
  logoSrc: string; // URL logo
  instagramIconSrc: string; // URL icon instagram
  facebookIconSrc: string; // URL icon facebook
  logoText?: string; // Teks logo
}

// Komponen Footer menampilkan logo dan icon media sosial
const Footer: React.FC<FooterProps> = ({ logoSrc, instagramIconSrc, facebookIconSrc, logoText = "LOGO" }) => (
  <footer className="mt-10 p-6"> {/* Spasi atas dan padding */}
    <div className="flex flex-col md:flex-row md:justify-between items-center gap-4"> {/* Flex responsif */}

      {/* Bagian logo */}
      <div className="flex items-center gap-2">
        <img src={logoSrc} alt="Logo" className="h-8" />
        <span className="text-xl font-semibold">{logoText}</span>
      </div>

      {/* Bagian ikon sosial media */}
      <div className="flex gap-4 md:justify-end w-full md:w-auto">
        <img src={instagramIconSrc} alt="Instagram" className="h-6" />
        <img src={facebookIconSrc} alt="Facebook" className="h-6" />
      </div>
    </div>
  </footer>
);

export default Footer;
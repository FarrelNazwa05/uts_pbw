// components/atoms/HeaderText.tsx
import React from "react";

// Tipe properti untuk komponen HeaderText
interface HeaderTextProps {
  title: string; // Judul atau header yang akan ditampilkan
}

// Komponen HeaderText menampilkan teks judul besar di tengah
const HeaderText: React.FC<HeaderTextProps> = ({ title }) => (
  <div className="max-w-2xl mx-auto px-2"> {/* Container tengah */}
    <h1 className="text-2xl md:text-4xl font-bold text-center justify-center my-8 max-w-2xl">
      {title} {/* Menampilkan judul */}
    </h1>
  </div>
);

export default HeaderText;
// components/ImageCard.tsx
import React from "react";

// Tipe properti untuk komponen ImageCard
interface ImageCardProps {
  imageSrc: string; // URL gambar
  title: string; // Judul card
  description: string; // Deskripsi bawah judul
}

// Komponen ImageCard menampilkan gambar, judul, dan deskripsi
const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, title, description }) => (
  <div className="w-full md:w-1/2 p-2">  {/* Responsif 50% lebar di layar besar */}
    <img src={imageSrc} alt={title} className="w-full h-64 object-cover" /> {/* Gambar utama */}
    <h2 className="font-bold text-lg mt-2">{title}</h2> {/* Judul */}
    <p className="text-justify text-gray-600">{description}</p> {/* Deskripsi */}
  </div>
);

export default ImageCard;
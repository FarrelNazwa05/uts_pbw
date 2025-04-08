// components/SubscribeForm.tsx
import React from "react";

// Tipe properti untuk komponen SubscribeForm
interface SubscribeFormProps {
  title: string; // Judul formulir
  description: string; // Deskripsi formulir
  buttonLabel: string; // Teks pada tombol
}

// Komponen SubscribeForm untuk formulir langganan
const SubscribeForm: React.FC<SubscribeFormProps> = ({ title, description, buttonLabel }) => (
  <div className="bg-black text-white py-25 px-4"> {/* Background gelap dengan teks putih */}
    <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-15"> {/* Dua kolom di layar besar */}
            
      {/* Kolom teks */}
      <div>
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-justify">{description}</p>
      </div>
      
      {/* Kolom formulir */}
      <form className="flex  flex-col gap-6">
        <input type="text" placeholder="Name" className="p-6 bg-transparent border-b border-white outline-none" />
        <input type="email" placeholder="Email" className="p-6 bg-transparent border-b border-white outline-none" />
        <button className="bg-white text-black py-2 px-4 rounded-full self-start">{buttonLabel}</button>
      </form>
    </div>
  </div>
);

export default SubscribeForm;
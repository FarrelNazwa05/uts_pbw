// Import komponen yang dibutuhkan
import Logo from "./components/Logo";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import SubscribeForm from "./components/SubscribeForm";
import Footer from "./components/Footer";

// Komponen utama halaman beranda
export default function HomePage() {
  return (
    <div className="bg-white text-black"> {/* Container utama dengan background putih dan teks hitam */}

      {/* Bagian Logo */}
      <div className="flex justify-center py-6"> 
        <Logo logoSrc="/logo.png" text="LOGO" />
      </div>

      {/* Header utama dengan teks tebal dan ukuran besar */}
      <Header title="Write a captivating header here to engage your customers" />

      {/* Bagian pertama dari dua ImageCard */}
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        <ImageCard
          imageSrc="/img1.png"
          title="Captivating Header Here"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book."
        />
        <ImageCard
          imageSrc="/img2.png"
          title="Captivating Header Here"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book."
        />
      </div>

      {/* Formulir langganan (Subscribe) */}
      <SubscribeForm
        title="Subscribe to our mailing list"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book."
        buttonLabel="Call to action"
      />

      {/* Bagian kedua dari dua ImageCard */}
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        <ImageCard
          imageSrc="/img3.png"
          title="Captivating Header Here"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book."
        />
        <ImageCard
          imageSrc="/img4.png"
          title="Captivating Header Here"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book."
        />
      </div>

      {/* Header tambahan di bawah konten gambar */}
      <Header title="Write a captivating header here to engage your customers" />

      {/* Tombol aksi di tengah halaman */}
      <div className="text-center py-4">
        <button className="bg-black text-white py-2 px-6 rounded-full">Call to action</button>
      </div>

      {/* Footer berisi logo dan ikon sosial media */}
      <Footer
        logoSrc="/logo.png"
        instagramIconSrc="/instagram.png"
        facebookIconSrc="/facebook.png"
        logoText="LOGO"
      />
    </div>
  );
}
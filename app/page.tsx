"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


export default function Home() {
  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="bg-white text-gray-900">
<div className="bg-[#c9980b] text-black text-center py-2 text-sm font-medium">
  ✨ Transform Your Bedroom Into a Luxury Hotel Experience
</div>
      {/* Navbar */}
     <nav className="absolute top-10 left-0 w-full z-50 flex justify-between items-center px-10 py-6 text-white">
        <div>
  <h1 className="text-3xl font-bold text-[#fff]">
    BEDLYN
  </h1>

  <p className="text-xs text-white">
    Luxury Bedding & Home Essentials
  </p>
</div>

        <div className="flex gap-8">
  <a href="#">Home</a>
  <a href="#">Shop</a>
  <a href="#">Bedroom Packages</a>
  <a href="#">Hotel Collection</a>
  <a href="#">Contact</a>
</div>
      </nav>

      {/* Hero */}
   <section
  className="relative h-screen bg-cover bg-center flex items-center justify-center transition-all duration-1000"
  style={{
    backgroundImage: `url(${images[currentImage]})`,
  }}
>
      
        <div className="bg-black/40 p-10 rounded-xl text-center text-white">
          <h1 className="text-6xl font-bold mb-6">
            Sleep Better. Live Better.
          </h1>

          <p className="text-xl mb-8 max-w-xl">
            Luxury bedding collections designed for comfort,
            elegance and better sleep.
          </p>

          <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold">
            Shop Collection
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#0F766E]">
          Shop By Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border p-8 rounded-xl text-center">
            <h3 className="text-2xl font-semibold mb-3">
              Bedsheets
            </h3>
            <p>Luxury fitted and flat sheets.</p>
          </div>

          <div className="border p-8 rounded-xl text-center">
            <h3 className="text-2xl font-semibold mb-3">
              Duvet Covers
            </h3>
            <p>Soft and elegant duvet collections.</p>
          </div>

          <div className="border p-8 rounded-xl text-center">
            <h3 className="text-2xl font-semibold mb-3">
              Pillows
            </h3>
            <p>Comfort and support for every sleeper.</p>
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-10 bg-[#F8F6F1]">

        <h2 className="text-4xl font-bold text-center mb-12 text-[#0F766E]">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src="/products/bedsheet.jpg"
              alt="Bedsheets"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Luxury Bedsheets
              </h3>

              <p className="mt-3">
                Ultra-soft hotel quality sheets.
              </p>

              <p className="mt-4 text-[#D4AF37] font-bold">
                UGX 120,000
              </p>

              <button className="mt-4 bg-[#0F766E] text-white px-5 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src="/products/duvet.jpg"
              alt="Duvet"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Premium Duvet Set
              </h3>

              <p className="mt-3">
                Modern luxury duvet collection.
              </p>

              <p className="mt-4 text-[#D4AF37] font-bold">
                UGX 250,000
              </p>

              <button className="mt-4 bg-[#0F766E] text-white px-5 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src="/products/pillows.jpg"
              alt="Pillows"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Hotel Pillows
              </h3>

              <p className="mt-3">
                Premium comfort and support.
              </p>

              <p className="mt-4 text-[#D4AF37] font-bold">
                UGX 80,000
              </p>

              <button className="mt-4 bg-[#0F766E] text-white px-5 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F766E] text-white py-10">

        <div className="text-center">

          <h2 className="text-3xl font-bold text-[#D4AF37]">
            BEDLYN
          </h2>

          <p className="mt-4">
            Luxury Bedding & Bedroom Essentials
          </p>

          <p className="mt-2">
            Kampala, Uganda
          </p>

        </div>

      </footer>
<a
  href="https://wa.me/256731326228?text=Hello%20Bedlyn,%20I'm%20interested%20in%20your%20bedding%20products."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
>
  <FaWhatsapp size={35} />
</a>
    </main>
  );
}
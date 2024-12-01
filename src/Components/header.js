'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 bg-black/60 backdrop-blur-md text-white z-50 shadow-md`}
      >
        <div className="max-w-7xl mx-auto py-2 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/CafeImg.webp"
              alt="Octavius Cafe Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <h1 className="text-xl font-bold tracking-wide hover:scale-105 transition-transform">
              Octavius Cafe
            </h1>
          </div>
          <button
            className="block lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <header
        className="relative w-full bg-cover bg-center text-white shadow-md z-40"
        style={{
          backgroundImage: "url('/posibleBanner.avif')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h2 className="text-5xl font-extrabold mb-4 tracking-wide animate-fadeIn">
            Welcome to Octavius Cafe
          </h2>
          <p className="text-2xl font-medium tracking-wide animate-slideUp">
            Premium coffee blends crafted with passion.
          </p>
        </div>
      </header>

      {/* Menú lateral */}
      <section
        className={`fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-md text-white p-8 transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 shadow-lg`}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <Image
              src="/CafeImg.webp"
              alt="Octavius Cafe Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <h1 className="text-xl font-bold">Octavius Cafe</h1>
          </div>
          <button
            className="text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
        </div>

        <nav className="space-y-6">
          <Link
            href="#about"
            className="block text-lg hover:text-[#FFD700] transition-all duration-300 transform hover:translate-x-2"
          >
            About
          </Link>
          <Link
            href="#products"
            className="block text-lg hover:text-[#FFD700] transition-all duration-300 transform hover:translate-x-2"
          >
            Products
          </Link>
          <Link
            href="#contact"
            className="block text-lg hover:text-[#FFD700] transition-all duration-300 transform hover:translate-x-2"
          >
            Contact
          </Link>
        </nav>
      </section>
    </>
  );
}

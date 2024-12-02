'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 1, name: "Espresso", img: "/cafe-expresso.webp", price: "$4" },
    { id: 2, name: "Cappuccino", img: "/Cappuccino.jpg", price: "$5" },
    { id: 3, name: "Latte", img: "/latte.avif", price: "$5.5" },
    { id: 4, name: "Mocha", img: "/Mocha.jpg", price: "$6" },
    { id: 5, name: "Macchiato", img: "/macchiato.jpg", price: "$4.5" },
    { id: 6, name: "Flat White", img: "/flat-white.jpg", price: "$5.2" },
    { id: 7, name: "Iced Coffee", img: "/iced-coffee.jpg", price: "$4.8" },
    { id: 8, name: "Americano", img: "/americano.jpg", price: "$3.8" },
    { id: 9, name: "Affogato", img: "/affogato.jpg", price: "$5.5" },
  ];
  
  const foodItems = [
    { id: 1, name: "Croissant", img: "/croissant.jpg", price: "$3" },
    { id: 2, name: "Bagel with Cream Cheese", img: "/bagel.jpg", price: "$4" },
    { id: 3, name: "Blueberry Muffin", img: "/blueberry-muffin.jpg", price: "$2.5" },
    { id: 4, name: "Chocolate Chip Cookie", img: "/cookie.jpg", price: "$2" },
    { id: 5, name: "Avocado Toast", img: "/avocado-toast.jpg", price: "$6" },
    { id: 6, name: "Breakfast Sandwich", img: "/breakfast-sandwich.jpg", price: "$5.5" },
    { id: 7, name: "Quiche Slice", img: "/quiche.jpg", price: "$4.8" },
    { id: 8, name: "Greek Yogurt Parfait", img: "/yogurt-parfait.jpg", price: "$5" },
    { id: 9, name: "Granola Bar", img: "/granola-bar.jpg", price: "$1.8" },
    { id: 10, name: "Panini", img: "/panini.jpg", price: "$7" },
    { id: 11, name: "Fruit Salad", img: "/fruit-salad.jpg", price: "$4" },
    { id: 12, name: "Brownie", img: "/brownie.jpg", price: "$3.2" },
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };
  return (
    <div className="min-h-screen  bg-gradient-to-r from-[#FAF3E0] to-[#9D6D54] text-white font-sans">

<section className="py-16 px-8  overflow-hidden">
  <div className="grid grid-cols-1 gap-8 justify-items-center">
  <div className="bg-white rounded-lg shadow-lg w-full sm:w-[800px] lg:w-[1200px] h-[500px] flex flex-col video-container">
  <video
    className="w-full h-full object-cover rounded-lg"
    muted
    autoPlay
  >
    <source src="/CardVideo.mp4" type="video/mp4" />
    Tu navegador no soporta este formato de video.
  </video>
</div>

  </div>

  <style jsx>{`
    .video-container {
      opacity: 0;
      transform: translateY(50px);
      animation: slide-up 0.8s forwards;
    }

    @keyframes slide-up {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .video-container:nth-child(1) {
      animation-delay: 0s;
    }

    .video-container:nth-child(2) {
      animation-delay: 0.2s;
    }
  `}</style>
</section>


      <section id="products" className="py-16 px-8 text-[#2E5237] overflow-hidden">
  <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>

  <div className="relative">
    <div
      className="flex transition-transform duration-500 min-w-0"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="flex-shrink-0 w-1/4 px-4" 
        >
          <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div
              className="w-full h-56 bg-cover bg-center"
              style={{
                backgroundImage: `url(${product.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
              <p className="text-[#167E59] font-bold text-xl">{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button
      onClick={prevSlide}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-[#2E5237] bg-white rounded-full shadow-lg p-4"
    >
      &#8592;
    </button>
    <button
      onClick={nextSlide}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-[#2E5237] bg-white rounded-full shadow-lg p-4"
    >
      &#8594;
    </button>
  </div>
</section>

<section id="products" className="py-16 px-8  text-[#2E5237] overflow-hidden">

  <div className="relative">
    <div
      className="flex transition-transform duration-500 min-w-0"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="flex-shrink-0 w-1/4 px-4" 
        >
          <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div
              className="w-full h-56 bg-cover bg-center"
              style={{
                backgroundImage: `url(${product.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
              <p className="text-[#167E59] font-bold text-xl">{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button
      onClick={prevSlide}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-[#2E5237] bg-white rounded-full shadow-lg p-4"
    >
      &#8592;
    </button>
    <button
      onClick={nextSlide}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-[#2E5237] bg-white rounded-full shadow-lg p-4"
    >
      &#8594;
    </button>
  </div>
</section>



<section className="py-16 px-8 text-white">
  <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
    {[
      {
        id: 1,
        name: "John Doe",
        review: "Best coffee I've ever had! The atmosphere is amazing.",
        img: "/coffee_customers_1.jpg",
      },
      {
        id: 2,
        name: "Jane Smith",
        review: "A hidden gem! The cold brew is my personal favorite.",
        img: "/coffee_customers_4.jpg",
      },
      {
        id: 3,
        name: "Mark Wilson",
        review: "Fantastic service and delicious coffee blends.",
        img: "/coffee_customer_3.jpg",
      },
    ].map((testimonial) => (
      <div
        key={testimonial.id}
        className="relative text-white shadow-xl rounded-lg overflow-hidden max-w-lg mx-auto"
      >
        {/* Fondo de imagen */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${testimonial.img})`,
          }}
        ></div>

        {/* Overlay negro semi-transparente cubriendo la imagen */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Contenido de texto con espacio interno */}
        <div className="relative p-8 text-center">
          <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
          <p className="italic mt-6 text-lg">{testimonial.review}</p>
        </div>
      </div>
    ))}
  </div>
</section>







      {/* <section className="py-16 px-8 bg-[#167E59] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join the Octavius Cafe Club Today!
        </h2>
        <p className="text-lg mb-6">
          Enjoy exclusive discounts, early product launches, and more.
        </p>
        <button className="bg-[#FFD700] text-[#2E5237] font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform">
          Sign Up Now
        </button>
      </section> */}
    </div>
  );
}

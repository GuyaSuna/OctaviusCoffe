'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 1, name: "Espresso", img: "/cafe-expresso.webp", price: "$4" },
    { id: 2, name: "Cappuccino", img: "/Cappuccino2.jpg", price: "$5" },
    { id: 3, name: "Latte", img: "/latte.jpg", price: "$5.5" },
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
    <div className="min-h-screen bg-[#167E59] text-white font-sans">
      {/* <section className="relative text-center py-20 bg-[#2E5237] text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Octavius Cafe</h1>
        <p className="text-xl">Premium coffee blends crafted with passion.</p>
      </section> */}

      <section className="py-16 px-8 bg-[#2E5237]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Discover the Perfect Cup
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <Image
              src="/special-blend.jpg"
              alt="Special Blend"
              width={300}
              height={200}
              className="rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#2E5237]">Special Blend</h3>
            <p className="text-[#167E59] mt-2">
              Our signature blend crafted for coffee enthusiasts.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <Image
              src="/cold-brew.jpg"
              alt="Cold Brew"
              width={300}
              height={200}
              className="rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#2E5237]">Cold Brew</h3>
            <p className="text-[#167E59] mt-2">
              Perfectly brewed for a refreshing experience.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 px-8 bg-[#FAF3E0] text-[#2E5237]">
  <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>

  <div className="relative">
    <div
      className="flex transition-transform duration-500"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="flex-shrink-0 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 px-8"
        >
          <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div
              className="w-full h-56 bg-cover bg-center"
              style={{
                backgroundImage: `url(${product.img})`, 
                backgroundPosition: "center", 
                backgroundSize: "fill",
                backgroundRepeat: "no-repeat"
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


    <section className="py-16 px-8 bg-[#2E5237] text-white">
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
        className="relative bg-white text-[#2E5237] shadow-xl rounded-lg overflow-hidden max-w-lg mx-auto"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${testimonial.img})`,
            backgroundColor: "rgba(0, 0, 0, 0.9)", 
          }}
        ></div>
        <div className="relative p-12 text-center">
          <h3 className="text-2xl font-semibold text-white">{testimonial.name}</h3>
          <p className="italic mt-6 text-lg text-white">{testimonial.review}</p>
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

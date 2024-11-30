import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#167E59] text-green-800 font-sans">
      
      <section id="products" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[{ id: 1, name: "Espresso", img: "/espresso.jpg", price: "$4" },
            { id: 2, name: "Cappuccino", img: "/cappuccino.jpg", price: "$5" },
            { id: 3, name: "Latte", img: "/latte.jpg", price: "$5.5" },
          ].map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <Image
                src={product.img}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-green-700">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-green-700 text-white py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-white text-black placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-white text-black placeholder-gray-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded bg-white text-black placeholder-gray-500"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-[#5A3E36] text-white font-bold rounded hover:bg-[#4C322D] transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

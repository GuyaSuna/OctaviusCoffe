import { useState, useEffect } from "react";

function ResponsiveCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Por defecto, muestra 4 elementos

  // Detecta el ancho de la pantalla y ajusta los elementos visibles
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : 4);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalSlides = Math.ceil(products.length / itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="products" className="py-16 px-8 text-[#2E5237] overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>

      <div className="relative">
        {/* Carrusel */}
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0"
              style={{
                flex: `0 0 calc(${100 / itemsPerPage}% - 1rem)`, // Controla el tamaño de cada tarjeta
              }}
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
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-[#167E59] font-bold text-lg">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
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

        {/* Indicadores */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-[#2E5237]"
                  : "bg-gray-300"
              } transition-colors duration-300`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResponsiveCarousel;

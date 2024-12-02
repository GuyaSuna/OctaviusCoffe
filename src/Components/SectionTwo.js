import { useState, useEffect } from "react";

const SectionTwo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("sectionTwo");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="sectionTwo"
      className={`py-16 px-8 overflow-hidden ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-container text-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            ¡Descubre más sobre nuestro proyecto!
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Aprende más sobre cómo estamos innovando en la tecnología moderna y descubre cómo este proyecto puede cambiar el juego. Nuestro enfoque está diseñado para maximizar el impacto y facilitar la vida diaria.
          </p>
        </div>

        <div className="video-container w-full h-[400px] lg:h-[600px] bg-transparent rounded-lg overflow-hidden">
          <video className="w-full h-full object-contain" muted autoPlay loop>
            <source src="/CoffeeVideo5.mp4" type="video/mp4" />
            Tu navegador no soporta este formato de video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

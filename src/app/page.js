'use client'
import Carousel from "@/Components/Carouselle";
import SectionOne from "@/Components/SectionOne";
import SectionTwo from "@/Components/SectionTwo";
export default function Home() {



  const products = [
    { id: 1, name: "Espresso", img: "/cafe-expresso.webp", price: "$4" },
    { id: 2, name: "Cappuccino", img: "/Cappuccino.jpg", price: "$5" },
    { id: 3, name: "Latte", img: "/latte.avif", price: "$5.5" },
    { id: 4, name: "Mocha", img: "/Mocha.jpg", price: "$6" },
    { id: 5, name: "Macchiato", img: "/macciato.avif", price: "$4.5" },
    { id: 6, name: "Flat White", img: "/flatWhite.webp", price: "$5.2" },
    { id: 7, name: "Iced Coffee", img: "/icedCoffee3.jpg", price: "$4.8" },
    { id: 8, name: "Americano", img: "/AmericanCoffee2.jpeg", price: "$3.8" },
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

<SectionOne/>
<SectionTwo/>




<div className="max-w-screen-xl mx-auto">
  <Carousel products={products} />
</div>

<div className="max-w-screen-xl mx-auto">
  <Carousel products={products} />
</div>

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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${testimonial.img})`,
          }}
        ></div>

        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative p-8 text-center">
          <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
          <p className="italic mt-6 text-lg">{testimonial.review}</p>
        </div>
      </div>
    ))}
  </div>
</section>
     
    </div>
  );
}

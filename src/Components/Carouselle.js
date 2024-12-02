import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = ({ products }) => {
  return (
    <div className="w-full relative py-16">
      <Swiper
        modules={[Pagination, Navigation]}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true} 
        breakpoints={{
          1920: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1028: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          990: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
{products.map((product) => (
  <SwiperSlide key={product.id}>
    <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center relative shadow-lg hover:scale-105 transition-transform">

      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url(${product.img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
          
        }}
      ></div>

      <div className="p-6 text-center relative z-10 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl w-full h-full flex flex-col justify-end">
        <h3 className="text-3xl font-semibold text-white mb-2 shadow-md">{product.name}</h3>
        
        <p className="text-xl font-bold text-[#167E59] shadow-md">{product.price}</p>
      </div>
    </div>
  </SwiperSlide>
))}

      </Swiper>
    </div>
  );
};

export default Carousel;

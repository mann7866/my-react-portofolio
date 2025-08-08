import { imageArt } from "../../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomePage = () => {
  return (
    <div className="home-page-2 relative h-screen w-full overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {imageArt.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                loading="lazy"
                src={image.src}
                alt={image.alt || `Artwork ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 h-full flex items-center px-5 md:px-8 md:pt-10 lg:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
          {/* Left Text Content */}
          <div className="content-1 text-white pt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="stroke-text">My Name Is</span>{" "}
              <span className="text-white text-5xl md:text-6xl lg:text-7xl">Rohman</span>
              <br />
              <span className="stroke-text">A Home Artist</span>
            </h1>

            <p className="pt-5 text-sm md:text-md lg:text-xl text-gray-200 max-w-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              aspernatur laborum adipisci, eum pariatur amet? Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Tempore sunt fugit ab.
            </p>

            <div className="pt-6 grid grid-cols-2 items-center gap-4 text-xs md:text-md lg:text-lg">
              <button className="bg-white text-black hover:border border-white hover:bg-transparent hover:text-white py-3 px-5 font-semibold rounded">
                Lihat All Art
              </button>
              <button className="border border-white py-3 px-5 font-semibold rounded text-white hover:bg-white hover:text-black">
                Order Now Art
              </button>
            </div>
          </div>

          {/* Right Space (optional) */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

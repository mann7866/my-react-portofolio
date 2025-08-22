import { imageArt } from "../../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import DataImage from "../../../data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomePage = () => {
  return (
    <>
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
             Halo, saya Rohman. Dari kecil saya suka sama yang namanya seni, dan sampai sekarang masih terus bikin karya dengan gambar tradisional. Walaupun sekarang pekerjaan saya sebagai Web Developer, saya tetap menyalurkan hobi ini lewat setiap goresan yang penuh rasa.
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
``
          {/* Right Space (optional) */}
          <div></div>
        </div>
      </div>
    </div>
     <div className="home-page2-about md:h-[600px] h-[550px]">
      <div className="grid grid-cols-1 md:grid-cols-2 pt-5 md:pt-20 px-6 md:px-20 items-center gap-2">
        <img
          src={DataImage.HeroImage}
          alt="test"
          className="rounded-full mx-auto md:mx-0 w-[250px] md:w-[400px]"
        />

        <div className="text-right mt-6 md:mt-0">
          <h1 className="text-2xl md:text-5xl lg:text-7.5xl font-semibold">
            Kenapa saya begitu suka pada seni?
          </h1>
          <p className="mt-3 text-sm">
            karena Seni mengajarkan saya akan banyak hal, sebenarnya dulu saya tidak terlalu tertarik pada seni. Saya bahkan tidak tahu seni itu
            apa, buat apa, kenapa orang bisa suka, atau bagian mana yang mereka
            kagumi. Waktu itu saya belum benar-benar paham, sampai akhirnya..
          </p>
          <button className="mt-4 rounded-md bg-gray-700 font-semibold text-white text-sm md:text-1xl py-2 px-4 md:py-4 md:px-7">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
    </>

  );
};

export default HomePage;

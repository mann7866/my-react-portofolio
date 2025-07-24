import React from "react";
import { imagesGallery } from "../data";

const Galleries = () => {
  console.log(imagesGallery);
  return (
    <div id="galeries" className="text-center px-4 pt-10 mt-20">
      <div className="text-start sm:text-center">
        <h1
          className="text-3xl font-bold mb-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
        >
          Galery
        </h1>
        <h1
          className="text-1xl font-semibold mb-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
        >
          Karya terindah dalam hidup adalah sebuah kenangan.
        </h1>
        <div
          className="max-w-3xl mx-auto"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <p className="text-base leading-relaxed text-zinc-200">
            Galeri ini menyimpan senyum, tawa, dan kisah yang tak
            tergantikan.Potongan kenangan yang membentuk kisah perjalanan saya.
          </p>
        </div>
      </div>

      {/* Gallery Pinterest-style dengan scroll vertikal terbatas */}
      <div className="mt-14 px-4 p-6">
        <div className="max-h-[70vh] overflow-y-auto pr-2 rounded-lg ">
          <div
            className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {imagesGallery.map((data, index) => (
              <div
                key={index}
                className="break-inside-avoid bg-zinc-800 rounded-md p-2"
              >
                <img
                  src={data.img}
                  alt={`Gallery ${index}`}
                  className="rounded-md w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galleries;

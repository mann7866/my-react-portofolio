import React from "react";
import { listCertificates } from "../data";

const Certificate = () => {
  return (
    <div id="certificate" className="text-center px-4 pt-10 mt-20">
      <div className="text-start sm:text-center">

      <h1
        className="text-3xl font-bold mb-4"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
      >
        Certificates
      </h1>
      <div
        className="max-w-3xl mx-auto"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <p className="text-base leading-relaxed text-zinc-200">
          Saya telah meraih beberapa sertifikat yang mencerminkan komitmen saya
          terhadap pembelajaran dan perkembangan. Setiap sertifikat menunjukkan
          dedikasi saya untuk meningkatkan keterampilan dan mengikuti
          perkembangan tren industri terkini, yang mendorong semangat saya untuk
          terus belajar dan mengembangkan diri secara profesional.
        </p>
      </div>
      </div>
      <div className="certivicate mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listCertificates.map((data) => {
          return (
            <div
              className="p-4 bg-zinc-800 rounded-md"
              key={data.id}
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              data-aos-delay={data.id * 150}
              data-aos-once="true"
            >
              <img src={data.img} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificate;

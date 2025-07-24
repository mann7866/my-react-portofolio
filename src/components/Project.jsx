import React from "react";
import { listProyek } from "../data";

const Project = () => {
  return (
    <div className="project mt-32 py-10" id="project">
      <div className="text-start sm:text-center">
        <h1
          className=" text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        data-aos-once="true"

        >
          Proyek
        </h1>
        <p
          className="text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        data-aos-once="true"

        >
          Berikut adalah beberapa proyek yang sudah saya buat
        </p>
      </div>

      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
        {listProyek.map((proyek) => (
          <div
            className="p-4 bg-zinc-800 rounded-md "
            key={proyek.id}
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay={proyek.dad}
        data-aos-once="true"

          >
            <img
              src={proyek.gambar}
              alt="proyek image"
              className=""
              loading="lazy"
            />
            <div>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p
                    className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                    key={index}
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="#"
                  className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                >
                  Lihat Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

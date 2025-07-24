import React, { useState } from "react";
import { FaEye, FaTimes } from "react-icons/fa";
import { experienceList, listCertificates } from "../data";

const Experiences = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (img) => {
    setModalImage(img);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div id="experiences" className="text-start sm:text-center px-4 pt-10 mt-20">
      <h1
        className="text-3xl font-bold mb-4"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
      >
        Experiences
      </h1>

      <div
        className="max-w-3xl mx-auto"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <p className="text-base leading-relaxed text-zinc-200">
          Saya telah melakukan beberapa pekerjaan, dimana itu membantu dalam
          meningkatkan kemampuan saya untuk berpikir kritis dan menyelesaikan
          masalah dengan lebih efisien.
        </p>
      </div>
      {experienceList.map((exp, index) => (
        <div
          key={index}
          className="w-full my-6"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-delay={index * 100}
          data-aos-once="true"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={`w-full mx-auto flex justify-between items-center border border-zinc-600 px-4 py-3 rounded-md shadow hover:bg-zinc-800 transition-all ${
              openIndex === index ? "bg-zinc-800" : "max-w-xl"
            }`}
          >
            <div className="text-lg font-semibold flex items-center text-white gap-4">
              <img src={exp.logo} className="h-10 rounded-full" alt="" />
              <span className="text-start">
              {exp.company}
              </span>
            </div>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openIndex === index && (
            <div className="bg-zinc-800 border border-zinc-600 rounded-md shadow mt-2 overflow-hidden transition-all duration-500">
              {exp.jobs.map((job, jobIndex) => (
                <div key={jobIndex} className="p-6 mb-4">
                  <h3 className="text-xl font-bold text-white text-start">
                    {job.position}
                  </h3>
                  <p className="text-white leading-relaxed text-start mt-4">
                    {job.description}
                  </p>

                  <div className="overflow-x-auto scroll-smooth flex gap-4 p-4">
                    {job.img.map((imgSrc, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative group mt-5 min-w-[160px]"
                      >
                        <img
                          src={imgSrc}
                          alt={`Certificate ${jobIndex + 1}-${imgIndex + 1}`}
                          className="h-40 object-cover rounded-md cursor-pointer"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 cursor-pointer">
                          <FaEye className="text-white text-2xl" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experiences;

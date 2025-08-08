import Certificate from "./Certificate";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Project from "./Project";
import RadarParticles from "./RadarParticles";
import ToolsSection from "./ToolsSection";
import DataImage from "../../../data";
import { listTools, listProyek } from "../../../data";
import "../src/App.css";
import Galleries from "./Galleries";
function home() {
  return (
    <>
      <div className="relative overflow-hidden pt-10">
        <RadarParticles />
        <div className="hero grid md:grid-cols-2 items-center pt-20 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-2s">
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
              <img
                loading="lazy"
                src={DataImage.HeroImage}
                alt="Hero Image"
                className="w-10 rounded-md"
              />
              <q>kode yang indah lahir dari perasaan dalam pengerjaan.😁</q>
            </div>
            <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Rohman</h1>
            <p className="text-base/loose mb-6 opacity-50">
              Saya adalah individu yang berdedikasi tinggi dan memiliki etos
              kerja yang kuat. Sebagai seorang Web Developer, saya selalu
              bersemangat dalam menjalankan setiap tanggung jawab, baik dalam
              pengembangan antarmuka pengguna (frontend) maupun logika sistem di
              sisi server (backend). Saya berkomitmen untuk memberikan hasil
              terbaik dalam setiap proyek yang saya kerjakan, serta terus
              belajar dan beradaptasi dengan perkembangan teknologi untuk
              menghasilkan solusi digital yang optimal.
            </p>
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="https://drive.google.com/file/d/1Ah0BTLs_K0B2RWpYCxy4b30EYKT-Rdwg/view?usp=sharing"
                className="bg-violet-700 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base hover:bg-violet-600"
              >
                Download CV <i className="ri-download-2-line ri-lg"></i>
              </a>
              <a
                href="#experiences"
                className="bg-zinc-700 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base hover:bg-zinc-600"
              >
                Lihat Pengalaman <i className="ri-skip-down-line ri-lg"></i>
              </a>
            </div>
          </div>
          <img
            loading="lazy"
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[500px] md:ml-auto rounded-lg
          animate__animated animate__fadeInUp animate__delay-3s"
          />
        </div>
      </div>
      {/* start about */}
      <div className="about mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            loading="lazy"
            src={DataImage.HeroImage}
            alt="image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Saya adalah individu yang berdedikasi tinggi dengan etos kerja yang
            kuat. Sebagai seorang Web Developer, saya memiliki semangat besar
            dalam menyelesaikan setiap tanggung jawab, baik dalam membangun
            antarmuka pengguna (frontend) maupun mengelola logika sistem di sisi
            server (backend). Saya berkomitmen untuk selalu memberikan hasil
            terbaik dalam setiap proyek yang saya kerjakan. Selain itu, saya
            terus belajar dan mengikuti perkembangan teknologi agar dapat
            menciptakan solusi digital yang efektif, efisien, dan sesuai dengan
            kebutuhan pengguna.
          </p>
          <div className="flex items-center justify-between ">
            <img
              loading="lazy"
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-12 rounded-md sm:block hidden"
            />

            <div className="flex items-center gap-6">
              {/* <div>
                <h1 className="text-4xl mb-1">
                  1 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div> */}
              <div>
                <h1 className="text-4xl mb-1">
                  1 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* start tools */}
        <ToolsSection />
        {/* end tools */}
      </div>
      {/* end about */}

      {/* experiences */}
      <Experiences />
      {/* experiences */}

      {/* start project */}
      <Project />
      {/* end proejct */}

      {/* start certificate */}
      <Certificate />
      {/* end certificate */}

      {/* start galery */}
      <Galleries />
      {/* end galery */}

      {/* start contact */}
      <Contact />
      {/* end contact */}
    </>
  );
}

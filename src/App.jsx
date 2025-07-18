import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              loading="lazy"
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>kode yang indah lahir dari ketekunan.😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Rohman</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya adalah individu yang berdedikasi tinggi dan memiliki etos kerja
            yang kuat. Sebagai seorang Web Developer, saya selalu bersemangat
            dalam menjalankan setiap tanggung jawab, baik dalam pengembangan
            antarmuka pengguna (frontend) maupun logika sistem di sisi server
            (backend). Saya berkomitmen untuk memberikan hasil terbaik dalam
            setiap proyek yang saya kerjakan, serta terus belajar dan
            beradaptasi dengan perkembangan teknologi untuk menghasilkan solusi
            digital yang optimal.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 rounded-2xl p-4 hover:bg-violet-600"
            >
              Download CV <i className="ri-download-2-line ri-lg"></i>
            </a>
            <a
              href="#project"
              className="bg-zinc-700 rounded-2xl p-4 hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-skip-down-line ri-lg"></i>
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

      {/* start about */}
      <div className="about mt-32 py-10" id="about">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
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
              <div>
                <h1 className="text-4xl mb-1">
                  45 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-right" data-aos-duration="1000">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base opacity-50" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
            Berikut ini adalah beberapa tools yang saya gunakan dalam pembuatan
            website
          </p>
          <div className="tools-book mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md
               hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-right" data-aos-duration="1000" data-aos-delay={tool.dad}
              >
                <img
                  loading="lazy"
                  src={tool.gambar}
                  alt="tools-image"
                  className="w-14 bg-zinc-800 p-1 
                group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end about */}

      {/* start project */}

      <div className="project mt-32 py-10" id="project">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Berikut adalah beberapa proyek yang sudah saya buat
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map((proyek) => (
            <div className="p-4 bg-zinc-800 rounded-md " key={proyek.id} data-aos="flip-right" data-aos-duration="1000" data-aos-delay={proyek.dad}>
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

      {/* end proejct */}

      {/* start contact */}
      {/* <div className="contact mt-32 smp-10 p-0" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Mari terhubung dengan saya
        </p>
        <form
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
          action="https://formsubmit.co/akunkudewe861@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
        >

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                className="border border-zinc-500 p-2 bg-transparent"
                placeholder="Masukkan nama..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="border border-zinc-500 p-2 bg-transparent"
                placeholder="Masukkan email..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="pesan">
                Pesan
              </label>
              <textarea
                required
                name="pesan"
                className="border border-zinc-500 p-2 bg-transparent"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-violet-700 p-3 w-full cursor-pointer hover:bg-violet-600 rounded-lg border-zinc-600"
                type="submit"
              >
                Kirim pesan
              </button>
            </div>
          </div>
        </form>
      </div> */}
      {/* end contact */}
    </>
  );
}

export default App;

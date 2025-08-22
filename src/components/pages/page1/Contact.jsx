import React from "react";

export default function Contact() {
  return (
    <div className="contact mt-32 smp-10 p-0 mb-20 md:mb-40" id="contact">
      <h1
        className="text-4xl mb-2 font-bold text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Kontak
      </h1>
      <p
        className="text-base/loose text-center mb-10 opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Mari terhubung dengan saya
      </p>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        className="bg-zinc-800 p-10 w-full max-w-md mx-auto rounded-md"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama Lengkap</label>
            <input
              type="text"
              id="wa-nama"
              className="border border-zinc-500 p-2 bg-transparent"
              placeholder="Masukkan nama..."
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Pesan</label>
            <textarea
              id="wa-pesan"
              className="border border-zinc-500 p-2 bg-transparent"
              rows="7"
              placeholder="Pesan..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              onClick={() => {
                const nama = document.getElementById("wa-nama").value;
                const pesan = document.getElementById("wa-pesan").value;
                const nomor = "6281235117136";
                const link = `https://wa.me/${nomor}?text=Halo, saya ${encodeURIComponent(
                  nama
                )}.%0A${encodeURIComponent(pesan)}`;
                window.open(link, "_blank");
              }}
              className="bg-violet-700 p-3 w-full cursor-pointer hover:bg-violet-600 rounded-lg border-zinc-600"
              type="button"
            >
              Kirim via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

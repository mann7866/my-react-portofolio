import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    const phoneNumber = "6281234567890"; // Ganti dengan nomor WA kamu (pakai format internasional tanpa +)
    const text = `Halo, saya ${name}.%0A%0A${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="page2-contact pb-20">
    <div className=" max-w-lg mx-auto py-10 md:pt-20 md:p-0 p-5">
      <h2 className="text-2xl font-bold mb-6 text-center pb-5 md:pb-10">Kontak Saya</h2>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block font-medium mb-1">Nama</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama Anda"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Pesan</label>
          <textarea
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis pesan Anda di sini..."
            rows={4}
          />
        </div>

        <button
          onClick={sendToWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-lg transition-colors w-full"
        >
          Kirim ke WhatsApp
        </button>
      </div>
    </div>
    </div>
  );
}

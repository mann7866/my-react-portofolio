import { useState } from "react";

export default function FAQ() {
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  const leftFAQs = [
    {
      question: "Bagaimana cara memesan produk?",
      answer:
        "Klik tombol 'Pesan Sekarang' pada produk yang diinginkan, lalu ikuti langkah pembayaran."
    },
    {
      question: "Apakah ada garansi pengembalian?",
      answer:
        "Ya, kami memberikan garansi pengembalian dalam 7 hari jika produk tidak sesuai atau rusak."
    }
  ];

  const rightFAQs = [
    {
      question: "Berapa lama pengiriman?",
      answer:
        "Pengiriman biasanya memakan waktu 2-5 hari kerja tergantung lokasi Anda."
    },
    {
      question: "Apakah tersedia COD?",
      answer:
        "Ya, kami menyediakan metode pembayaran COD di wilayah tertentu."
    }
  ];

  const toggleLeft = (index) => {
    setOpenLeft(openLeft === index ? null : index);
  };

  const toggleRight = (index) => {
    setOpenRight(openRight === index ? null : index);
  };

  const FAQCard = ({ faq, index, isOpen, toggle }) => (
    <div className="mb-4 border rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <button
        className="w-full flex justify-between items-center px-4 py-3 bg-white hover:bg-gray-200 transition-colors"
        onClick={() => toggle(index)}
      >
        <span className="font-medium text-sm md:text-md">{faq.question}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      {/* Konten dengan animasi halus */}
      <div
        className={`px-4 transition-all duration-500 ease-in-out overflow-hidden bg-white ${
          isOpen ? "max-h-40 py-3 opacity-100 translate-y-0" : "max-h-0 py-0 opacity-0 -translate-y-2"
        }`}
      >
        <p className="text-gray-600 text-sm md:text-md">{faq.answer}</p>
      </div>
    </div>
  );

  return (
    <div className="page2-faq pb-20">
    <div className=" max-w-6xl bg-gra mx-auto py-10 pt-20 md:pt-40 p-8 md:p-0">
      <h2 className="text-2xl font-bold mb-6 text-center pb-5 md:pb-10">FAQ</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Kolom Kiri */}
        <div>
          {leftFAQs.map((faq, index) => (
            <FAQCard
              key={index}
              faq={faq}
              index={index}
              isOpen={openLeft === index}
              toggle={toggleLeft}
            />
          ))}
        </div>

        {/* Kolom Kanan */}
        <div>
          {rightFAQs.map((faq, index) => (
            <FAQCard
              key={index}
              faq={faq}
              index={index}
              isOpen={openRight === index}
              toggle={toggleRight}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

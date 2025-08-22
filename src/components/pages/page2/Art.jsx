import { Button } from "../../ui/UiComponent";

// Import gambar
import art1 from "../../../../public/assets/art/art1.jpg";
import art2 from "../../../../public/assets/art/art2.jpg";
import art3 from "../../../../public/assets/art/art3.jpg";
import art4 from "../../../../public/assets/art/art4.jpg";

import { handleOrder } from "./localstorage/artOrder";

// Dummy data
const artData = [
  {
    id: 1,
    title: "Lukisan Pemandangan Gunung",
    size: "60x90 cm",
    price: 250000,
    description:
      "Lukisan pemandangan gunung dengan nuansa alami, cocok untuk ruang tamu atau ruang kerja.",
    image: art1,
    detailLink: "#",
  },
  {
    id: 2,
    title: "Lukisan Pantai Senja",
    size: "50x70 cm",
    price: 220000,
    description:
      "Lukisan pantai saat matahari terbenam, memberikan suasana hangat dan menenangkan.",
    image: art2,
    detailLink: "#",
  },
  {
    id: 3,
    title: "Lukisan Hutan Tropis",
    size: "70x100 cm",
    price: 300000,
    description:
      "Lukisan hutan tropis yang penuh warna, menambah kesegaran di ruangan Anda.",
    image: art3,
    detailLink: "#",
  },
  {
    id: 4,
    title: "Lukisan Abstrak Warna-warni",
    size: "80x120 cm",
    price: 350000,
    description:
      "Lukisan abstrak dengan perpaduan warna yang indah, cocok untuk gaya interior modern.",
    image: art4,
    detailLink: "#",
  },
];

const flyToCart = (imgElement) => {
  const cartIcon = document.querySelector("#cart-icon"); // target keranjang

  if (!cartIcon || !imgElement) return;

  const imgRect = imgElement.getBoundingClientRect();
  const cartRect = cartIcon.getBoundingClientRect();

  // clone gambar
  const flyingImg = imgElement.cloneNode(true);
  flyingImg.classList.add("fly-img");

  // set posisi awal
  flyingImg.style.top = imgRect.top + "px";
  flyingImg.style.left = imgRect.left + "px";
  flyingImg.style.width = imgRect.width + "px";
  flyingImg.style.height = imgRect.height + "px";

  document.body.appendChild(flyingImg);

  // trigger animasi (timeout agar transition jalan)
  setTimeout(() => {
    flyingImg.style.top = cartRect.top + "px";
    flyingImg.style.left = cartRect.left + "px";
    flyingImg.style.width = "30px";
    flyingImg.style.height = "30px";
    flyingImg.style.opacity = "0.5";
  }, 50);

  // hapus setelah selesai
  flyingImg.addEventListener("transitionend", () => {
    flyingImg.remove();
  });
};

export default function Art() {
  return (
    <>
    <div className="art pb-20">
      <div className=" py-10 md:py-20">
        {/* Header */}
        <div className="text-center px-6 md:px-20 mb-10">
          <h1 className="font-bold font-sans text-lg md:text-2xl">
            Koleksi tersedia
          </h1>
          <p className="md:px-20 md:pt-2 opacity-70 text-sm md:text-base">
            Temukan berbagai karya seni yang indah dan unik untuk mempercantik
            ruangan Anda.
          </p>
        </div>

        {/* Grid Gambar */}
        <div className="grid md:p-2 grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 px-6 md:px-20">
          {artData.map((item) => (
            <div key={item.id}>
              {/* Wrapper gambar + overlay */}
              <div className="relative group w-full overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.title}
                />

                {/* Overlay & tombol */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button
                    onClick={(e) => {
                      handleOrder(item);

                      const img = e.currentTarget
                        .closest(".relative")
                        .querySelector("img");

                      flyToCart(img);
                    }}
                    className="order bg-white text-black px-3 md:px-4 py-3 md:py-2 rounded md:rounded-lg shadow-lg hover:bg-gray-200"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>

              {/* Judul & link */}
              <h1 className="title font-semibold mt-2">{item.title}</h1>
              <a
                href={item.detailLink}
                className="text-blue-500 cursor-pointer inline"
              >
                Lihat detail...
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Tombol lihat semua */}
      <div className="text-center">
        <Button
          className="text-sky-400 text-md md:text-2xl"
          text="Lihat semua"
        />
      </div>
    </div>
    </>
  );
}

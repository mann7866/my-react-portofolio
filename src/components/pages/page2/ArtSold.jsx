import art1 from "../../../../public/assets/art/art1.jpg";
import art2 from "../../../../public/assets/art/art2.jpg";
import art3 from "../../../../public/assets/art/art3.jpg";
import art4 from "../../../../public/assets/art/art4.jpg";
import { Button } from "../../ui/UiComponent";

const artworks = [
  { id: 1, image: art1, title: "Masterpiece #1", soldTo: "Kolektor A" },
  { id: 2, image: art2, title: "Masterpiece #2", soldTo: "Kolektor B" },
  { id: 3, image: art3, title: "Masterpiece #3", soldTo: "Kolektor C" },
  { id: 4, image: art4, title: "Masterpiece #4", soldTo: "Kolektor D" },
];

export default function ArtSold() {
  return (
    <div className="project-sold bg-gray-100 py-10">
      <h1 className="font-bold text-center mb-8 mt-5 md:mt-10">Karya Terjual</h1>

      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-6">
        {artworks.map((art) => (
          <div
            key={art.id}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            {/* Gambar */}
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Overlay */}
            <div className="title absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition duration-500 flex flex-col justify-end p-4">
              <h2 className="text-white font-bold">{art.title}</h2>
              <p className="text-gray-200 mb-2">
                Terjual kepada {art.soldTo}
              </p>
              <button className="bg-white text-black px-3 py-1 rounded-lg font-semibold hover:bg-gray-200 transition">
                Lihat Detail
              </button>
            </div>

            {/* Label SOLD */}
            <span className="absolute top-3 left-3 bg-red-500 text-white px-1 md:px-3 py-1 rounded-full font-bold shadow-md">
              SOLD
            </span>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <Button
                  className="text-sky-400 text-md md:text-2xl"
                  text="Lihat semua"
                />
      </div>
    </div>
  );
}

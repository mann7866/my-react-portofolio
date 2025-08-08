import art1 from "../../../../public/assets/art/art1.jpg";
import art2 from "../../../../public/assets/art/art2.jpg";
import art3 from "../../../../public/assets/art/art3.jpg";
import art4 from "../../../../public/assets/art/art4.jpg";
import art5 from "../../../../public/assets/art/art5.jpg";
import { Button } from "../../ui/UiComponent";
export default function NewArt() {
  return (
    <>
    <div className="new-art px-14 pb-20">
      <div className=" md:px-20 py-10 md:py-20 items-center flex justify-center">
        <div className="text-center ">
          <h1 className="font-semibold font-sans">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="md:px-20 md:pt-2 opacity-70 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            reprehenderit excepturi beatae quas ut nobis repudiandae eius
            repellat ad necessitatibus!
          </p>
        </div>
      </div>
      <div className="px-2 md:px-10 py-0 md:py-5">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {/* Gambar kiri */}
          <div className="relative bg-gray-200 h-[100px] md:h-[300px] lg:h-[500px] flex items-center justify-center group overflow-hidden">
            <img
              src={art1}
              alt="Gambar 1"
              className="absolute inset-0 w-full h-full rounded object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
            />
            <img
              src={art2}
              alt="Gambar 1 Hover"
              className="absolute inset-0 w-full h-full rounded object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Gambar tengah */}
          <div className="relative bg-gray-200 h-[100px] md:h-[300px] lg:h-[500px] flex items-center justify-center group overflow-hidden scale-105 md:scale-110 shadow-lg">
            <img
              src={art3}
              alt="Gambar 2"
              className="absolute inset-0 w-full h-full rounded object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
            />
            <img
              src={art4}
              alt="Gambar 2 Hover"
              className="absolute inset-0 w-full h-full rounded object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Gambar kanan */}
          <div className="relative bg-gray-200 h-[100px] md:h-[300px] lg:h-[500px] flex items-center justify-center group overflow-hidden">
            <img
              src={art5}
              alt="Gambar 3"
              className="absolute inset-0 w-full h-full rounded object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
            />
            <img
              src={art2}
              alt="Gambar 3 Hover"
              className="absolute inset-0 w-full h-full rounded object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

        </div>
      </div>
     
    </div>
    </>
  );
}

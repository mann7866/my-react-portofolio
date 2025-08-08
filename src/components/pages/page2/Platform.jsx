import art1 from "../../../../public/assets/art/art1.jpg";
import art2 from "../../../../public/assets/art/art2.jpg";
import logo from "../../../../public/assets/art/art3.jpg"; // logo yang sama untuk tiap gambar
import { Button } from "../../ui/UiComponent";

export default function Platform() {
  return (
   <div className="p-10 md:p-20 bg-black">
    <div>
      <h1 className="text-white pb-10 text-2xl font-bold text-center">Platform</h1>
    </div>
  <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 md:gap-6">
    
    {[art1, art2, art2].map((img, i) => (
      <div key={i} className="relative rounded-xl overflow-hidden h-30 sm:h-30 md:h-50 lg:h-96">
        <img
          src={img}
          alt={`Gambar ${i + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 md:w-32 md:h-32 object-contain rounded-full shadow-lg bg-white p-4"
          />
        </div>
      </div>
    ))}

  </div>
</div>

  );
}

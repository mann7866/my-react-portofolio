import art1 from "../../../../public/assets/art/art1.jpg";
import DataImage from "../../../data";

export default function About() {
  return (
    <div className="home-page2-about md:h-[600px] h-[550px]">
      <div className="grid grid-cols-1 md:grid-cols-2 pt-5 md:pt-20 px-6 md:px-20 items-center gap-2">
        <img
          src={DataImage.HeroImage}
          alt="test"
          className="rounded-full mx-auto md:mx-0 w-[250px] md:w-[400px]"
        />

        <div className="text-right mt-6 md:mt-0">
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-semibold">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="mt-3 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            dolores quidem ea enim maiores saepe veritatis iure! Quas dolor,
            veritatis, quaerat ducimus, aliquam ipsum dolores similique
            laboriosam officia dolore recusandae?
          </p>
          <button className="mt-4 rounded-md bg-gray-700 font-semibold text-white text-sm md:text-1xl py-2 px-4 md:py-4 md:px-7">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
}

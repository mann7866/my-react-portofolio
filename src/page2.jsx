import { Link } from "react-router-dom";
import Navbar from "./components/pages/page2/navbar";
import HomePage from "./components/pages/page2/HomePage";
import NewArt from "./components/pages/page2/NewArt";
import Platform from "./components/pages/page2/Platform";
import Art from "./components/pages/page2/Art";
import Footer from "./components/Footer";
import FAQ from "./components/pages/page2/Faq";
import ContactUs from "./components/pages/page2/ContacUs";
import About from "./components/pages/page2/About";

export default function Page2() {
  return (
    <div className="text-black min-h-screen relative bg-white ">
      {/* Tombol Back */}
      <Link
        to="/"
        className="fixed z-50 top-1/2 left-4 -translate-y-1/2 bg-zinc-900 text-white p-3 rounded-full shadow-xl"
      >
        ⬅️
      </Link>

      {/* Navbar */}
      <Navbar />

      {/* Konten */}
      <div className="">
        <HomePage />
        <About/>
        <NewArt/>
        <Art/>
        <Platform/>
        <FAQ/>
        <ContactUs/>
      </div>


      <Footer/>
    </div>
  );
}

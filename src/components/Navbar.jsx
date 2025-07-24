import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // pastikan kamu install react-icons

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar w-full px-4 py-4 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        active
          ? "bg-white/30 backdrop-blur-md shadow-md opacity-100"
          : "bg-transparent backdrop-blur-0 shadow-none"
      }`}
    >
      {/* Logo */}
      <div className="logo">
        <h1
          className={`text-3xl font-bold p-1 transition-all duration-300 text-white`}
        >
          Portofolio
        </h1>
      </div>

      {/* === Hamburger Button for Mobile === */}
      <button
        className="text-white sm:hidden text-2xl z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* === Menu === */}
      <ul
        className={`${
          isMenuOpen
            ? "flex flex-col absolute top-full left-0 w-full bg-white/30 backdrop-blur-md shadow-md opacity-100 text-white p-4 gap-4"
            : "hidden"
        } sm:flex sm:flex-row sm:static sm:bg-transparent sm:text-white sm:gap-6 sm:items-center sm:p-0 transition-all duration-300`}
      >
        <li>
          <a href="#home-page" className="md:text-base text-sm font-medium">
            Beranda
          </a>
        </li>
        <li>
          <a href="#about" className="md:text-base text-sm font-medium">
            Tentang
          </a>
        </li>
        <li>
          <a href="#tools" className="md:text-base text-sm font-medium">
            Alat
          </a>
        </li>
        <li>
          <a href="#experiences" className="md:text-base text-sm font-medium">
            Pengalaman
          </a>
        </li>
        <li>
          <a href="#project" className="md:text-base text-sm font-medium">
            Proyek
          </a>
        </li>
        <li>
          <a href="#certificate" className="md:text-base text-sm font-medium">
            Sertifikat
          </a>
        </li>
        <li>
          <a href="#galeries" className="md:text-base text-sm font-medium">
            Galeri
          </a>
        </li>
        <li>
          <a href="#contact" className="md:text-base text-sm font-medium">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

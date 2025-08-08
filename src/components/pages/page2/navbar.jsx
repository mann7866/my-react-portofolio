import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaTrash } from "react-icons/fa";
import Img from "../../../data";
import imgtest from "../../../../public/assets/art/art1.jpg";
import {
  deleteAllCart as deleteAllCartStorage,
  deleteFromCartById as deleteFromCartByIdStorage,
} from "./localstorage/artOrder";
import { z } from "zod";

const orderSchema = z.object({
  order_name: z.string().min(1, "Nama harus diisi"),
  order_note: z.string().optional(),
});


const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuSidebarOpen, setMenuSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [orderName, setOrderName] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [errors, setErrors] = useState({ order_name: "", order_note: "" });

  // Tambahan state untuk input nama dan error validasi
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  // Hitung subtotal harga
  const subtotal = cart.reduce(
    (total, item) => total + item.price * (item.qty || 1),
    0
  );

  // Update cart dari localStorage
  const updateCartFromStorage = () => {
    const savedCart = JSON.parse(localStorage.getItem("orderCart")) || [];
    setCart(savedCart);
  };

  useEffect(() => {
    updateCartFromStorage();

    const handleScroll = () => {
      setActive(window.scrollY > 100);
      setMenuSidebarOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("storage", updateCartFromStorage);
    window.addEventListener("orderCartUpdated", updateCartFromStorage);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", updateCartFromStorage);
      window.removeEventListener("orderCartUpdated", updateCartFromStorage);
    };
  }, []);

  // Hapus semua item di cart
  const handleDeleteAllCart = () => {
    deleteAllCartStorage();
    setCart([]);
  };

  // Hapus satu item berdasar id
  const handleDeleteFromCartById = (id) => {
    deleteFromCartByIdStorage(id);
    updateCartFromStorage();
  };

  // Kirim order via WhatsApp dengan validasi nama
 const handleSendWhatsApp = () => {
    // Reset error dulu
    setErrors({ order_name: "", order_note: "" });

    // Validasi
    const result = orderSchema.safeParse({ order_name: orderName, order_note: orderNote });
    if (!result.success) {
      // Ambil error message dari zod
      const fieldErrors = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0]] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    // Kalau valid, lanjut kirim
    const nomor = "6281235117136";

    let pesan = `Halo, saya ingin memesan:\n\n`;
    cart.forEach((item, index) => {
      pesan += `${index + 1}. ${item.title || item.name} (${item.size || "-"}) x${
        item.qty || 1
      } - Rp ${(item.price * (item.qty || 1)).toLocaleString()}\n`;
    });
    pesan += `\nSubtotal: Rp ${subtotal.toLocaleString()}\n`;
    if (orderNote.trim()) pesan += `Catatan: ${orderNote.trim()}\n`;
    pesan += `Nama: ${orderName}\n`;
    pesan += `\nTerima kasih.`;

    const encodedPesan = encodeURIComponent(pesan);
    window.open(`https://wa.me/${nomor}?text=${encodedPesan}`, "_blank");
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar-page-2 group fixed z-50 transition-all duration-500 ease-in-out rounded
          ${
            active
              ? "top-5 left-1/2 -translate-x-1/2 w-[90%] sm:w-[95%] md:w-full md:max-w-[780px] lg:max-w-[1200px] bg-white shadow-md h-[70px] md:h-[80px]"
              : "top-5 left-1/2 -translate-x-1/2 bg-transparent hover:bg-white shadow-none h-[70px] md:h-[80px] w-[70px] md:w-[90px] hover:w-[90%] sm:hover:w-[95%] md:hover:w-full md:hover:max-w-[780px] lg:hover:max-w-[1200px]"
          }`}
        onMouseLeave={() => !active && setMenuOpen(false)}
      >
        <div className="flex items-center justify-between h-full px-4 relative">
          {/* Logo */}
          <img
            src={Img.HeroImage}
            alt="Logo"
            className="w-10 h-10 md:w-14 md:h-14 rounded-full object-contain transition-all duration-500"
          />

          {/* Menu Desktop */}
          <div
            className={`hidden md:flex gap-6 text-black font-semibold transition-all duration-500 ${
              active ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            }`}
          >
            <a href="#tentang">Tentang</a>
            <a href="#layanan">Layanan</a>
            <a href="#kontak">Kontak</a>
          </div>

          {/* Tombol Cart */}
          <div
            className={`flex items-center cursor-pointer relative ${
              active ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            }`}
            onClick={() => setSidebarOpen(true)}
          >
            <FaShoppingCart className="text-2xl text-black" id="cart-icon" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </div>

          {/* Hamburger untuk HP */}
          <button
            className={`md:hidden text-black text-2xl transition-opacity duration-300 ${
              active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
            onClick={() => {
              setMenuSidebarOpen((prev) => !prev);
              setMenuOpen((prev) => !prev);
            }}
          >
            {menuSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Overlay Sidebar Menu */}
      {menuSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuSidebarOpen(false)}
        />
      )}

      {/* Sidebar Menu Navigasi (mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-500 ${
          menuSidebarOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => setMenuSidebarOpen(false)}
          aria-label="Close Menu"
        >
          ✕
        </button>
        <nav className="flex flex-col p-6 pt-16 gap-4 font-semibold text-lg">
          <a href="#tentang" onClick={() => setMenuSidebarOpen(false)} className="hover:text-blue-500">Tentang</a>
          <a href="#layanan" onClick={() => setMenuSidebarOpen(false)} className="hover:text-blue-500">Layanan</a>
          <a href="#kontak" onClick={() => setMenuSidebarOpen(false)} className="hover:text-blue-500">Kontak</a>
        </nav>
      </div>

      {/* Overlay Keranjang */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Keranjang */}
      <div
        className={`fixed top-0 right-0 h-full md:w-[500px] w-[300px] bg-white shadow-lg z-50 transform transition-transform duration-500 ${
          sidebarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close Cart"
        >
          ✕
        </button>

        <div className="p-6 overflow-y-auto h-full flex flex-col">
          <h2 className="md:text-lg text-md font-bold mb-4">Order Now</h2>
          <div className="flex justify-between mb-2">
            <p className="md:text-lg text-md">Subtotal :</p>
            <p className="font-semibold md:text-lg text-md">Rp {subtotal.toLocaleString()} IDR</p>
          </div>

          {/* Input Nama */}
             {/* Input Nama */}
          <label htmlFor="order-name" className="block mb-1 font-semibold">
            Nama <span className="text-red-600">*</span>:
          </label>
          <input
            type="text"
            id="order-name"
            name="order_name"
            className={`p-2 mb-1 border ${errors.order_name ? "border-red-600" : "border-gray-900"} w-full`}
            value={orderName}
            onChange={(e) => setOrderName(e.target.value)}
            placeholder="Masukkan nama Anda"
          />
          {errors.order_name && (
            <p className="text-red-600 text-sm mb-2">{errors.order_name}</p>
          )}

          {/* Input Note */}
          <label htmlFor="order-note" className="block mb-1 font-semibold">Note :</label>
          <textarea
            name="order_note"
            className={`p-2 mb-4 border ${errors.order_note ? "border-red-600" : "border-gray-900"} text-sm resize-none w-full`}
            id="order-note"
            rows={10}
            value={orderNote}
            onChange={(e) => setOrderNote(e.target.value)}
            placeholder="Masukkan catatan tambahan (opsional)"
          />
          {errors.order_note && (
            <p className="text-red-600 text-sm mb-2">{errors.order_note}</p>
          )}

          <button
            className="border bg-green-500 text-white py-2 px-4 mb-4"
            onClick={handleSendWhatsApp}
          >
            Kirim via WhatsApp
          </button>

          <hr className="mb-4 border-gray-900" />

          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold text-gray-500">Products</h1>
            {cart.length === 0 ? (
              <p className="text-sm md:text-md">Keranjang kosong</p>
            ) : (
              <button className="text-red-600 text-sm md:text-md" onClick={handleDeleteAllCart}>
                Hapus semua
              </button>
            )}
          </div>

          {/* List produk */}
          <div className="flex-grow overflow-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center gap-4 mb-4"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image || imgtest}
                    alt={item.title || item.name}
                    className="flex-shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover rounded"
                  />
                  <div className="order-detail">
                    <div className="title flex justify-between">
                      <h1 className="font-semibold">{item.title || item.name}</h1>
                      <div className="text-right font-semibold">
                        Rp {(item.price * (item.qty || 1)).toLocaleString()} IDR
                      </div>
                    </div>
                    {item.description && (
                      <p className="description grid grid-cols-2 text-sm">{item.description}</p>
                    )}
                    {item.size && (
                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <p className="font-semibold md:pt-2">Paper Size ({item.size}):</p>
                          <p>{item.size === "-" ? "N/A" : item.size}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteFromCartById(item.id)}
                          aria-label={`Hapus ${item.title || item.name}`}
                        >
                          <FaTrash className="text-red-600" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

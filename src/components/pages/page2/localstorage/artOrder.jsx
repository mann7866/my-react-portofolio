export const handleOrder = (item) => {
  let cart = JSON.parse(localStorage.getItem("orderCart")) || [];

  // Cegah duplikat
  if (!cart.some((cartItem) => cartItem.id === item.id)) {
    cart.push(item);
  }

  // Simpan ke localStorage
  localStorage.setItem("orderCart", JSON.stringify(cart));

  // 🔥 Kirim event supaya Navbar tahu ada update
  window.dispatchEvent(new Event("orderCartUpdated"));
};

 export const deleteAllCart = () => {
    localStorage.removeItem("orderCart");
    window.dispatchEvent(new Event("orderCartUpdated"));
  };

 export const deleteFromCartById = (id) => {
    let cart = JSON.parse(localStorage.getItem("orderCart")) || [];

    // Hapus item sesuai ID
    cart = cart.filter((item) => item.id !== id);

    localStorage.setItem("orderCart", JSON.stringify(cart));

    // Trigger update real-time
    window.dispatchEvent(new Event("orderCartUpdated"));
  };


const Footer = () => {
  return (
    <>
      {/* Bagian atas footer */}
      <div className="py-4 p-4">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
          {/* Deskripsi + Kontak */}
          <div>
        <h1 className="font-bold mb-1">Rohman</h1>
            <p className="max-w-[500px] mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium molestiae soluta earum inventore voluptatum, debitis
              architecto libero expedita facere praesentium!
            </p>

            {/* Kontak */}
            <div className="flex flex-col gap-2 text-lg">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-500 transition-colors"
              >
                <i className="ri-whatsapp-fill"></i>
                <span className="text-sm">+62 812-3456-7890</span>
              </a>
              <a
                href="mailto:rohman@example.com"
                className="flex items-center gap-2 hover:text-red-500 transition-colors"
              >
                <i className="ri-mail-fill"></i>
                <span className="text-sm">rohman@example.com</span>
              </a>
            </div>
          </div>

          {/* Menu navigasi */}
          <div className="grid grid-cols-1 gap-2">
            
          </div>

          {/* Lokasi */}
          <div className="grid grid-cols-1 gap-2 mr-4">
            <h2 className="font-bold mb-1">Location</h2>
            <iframe
              title="Lokasi Rohman"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.938266892173!2d114.1597498!3d-8.2854652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15353027c02b5%3A0x75656a334ee7ad9f!2sRohman%20Web%20dev%20%26%26%20Home%20Artist!5e0!3m2!1sid!2sid!4v1691079091234!5m2!1sid!2sid"
              width="250"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bagian bawah footer */}
      <div className="py-4 p-4 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center border-t">
        <h1 className="text-2xl font-bold">Portofolio</h1>

        <span className="text-center md:text-left ">
          © 2024 <span className="font-bold">Rohman</span>. Crafted with ♥
          ReactJs + Tailwindcss. All Rights Reserved.
        </span>

        {/* Sosial media */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/mann7866"
            className="hover:text-gray-800 transition-colors"
          >
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/_mmaann4?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="hover:text-pink-500 transition-colors"
          >
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

const Footer = () => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Portofolio</h1>
            <div className="flex gap-7">
              <span>
                © 2024 Rohman. Crafted with ♥ ReactJs + Tailwindcss. All Rights Reserved.
              </span>
            </div>
            <div className="flex items-center gap-3">
                <a href="https://github.com/mann7866">
                    <i className="ri-github-fill ri-2x"></i>
                </a>
                <a href="https://www.instagram.com/_mmaann4?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <i className="ri-instagram-fill ri-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;

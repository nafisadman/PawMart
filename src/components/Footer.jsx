import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content mt-16">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="/paw.svg" 
                alt="PawMart Logo" 
                width="40" 
                height="40" 
              />
              <span className="font-bold text-xl">PawMart</span>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Connecting local pet owners and buyers for adoption and pet care products.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://x.com/nafisadmankhan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="X (Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@nafisadmankhan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/nafisadmankhan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h6 className="font-semibold text-base mb-4">Useful Links</h6>
            <ul className="space-y-2">
              <li>
                <a href="/" className="link link-hover text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="link link-hover text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-sm">
                  Donations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h6 className="font-semibold text-base mb-4">Contact Us</h6>
            <ul className="space-y-2">
              <li>
                <span className="text-sm opacity-80 block">
                  📍 Narayanganj, Dhaka
                </span>
              </li>
              <li>
                <a 
                  href="mailto:sadmannafi789@gmail.com" 
                  className="link link-hover text-sm"
                >
                  📧 sadmannafi789@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+880-177-251-3803" 
                  className="link link-hover text-sm"
                >
                  📱 +880 177 251 3803
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h6 className="font-semibold text-base mb-4">Legal</h6>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.iubenda.com/en/help/2859-terms-and-conditions-when-are-they-needed" 
                  className="link link-hover text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a 
                  href="https://policies.google.com/privacy?hl=en-US" 
                  className="link link-hover text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-neutral-focus bg-opacity-50 border-t border-neutral-focus">
        <div className="container mx-auto px-4 py-4 text-center text-sm opacity-70">
          <p>Copyright © {currentYear} PawMart - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
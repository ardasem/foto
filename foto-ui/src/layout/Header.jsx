import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-transparent text-white sticky top-0 z-50">
      <div className="container mx-5 py-5 flex justify-between items-center font-[Poppins]">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold">fotoğrafçım.net</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Desktop Menu */}
        {/* <div className="hidden md:flex flex-1 justify-between items-center">
          <nav className="flex space-x-6">
            <Link to="/">
              <div className="p-5 hover:bg-gray-700 rounded">Anasayfa</div>
            </Link>
            <Link to="/photo-upload">
              <div className="bg-white p-5 text-gray-900 rounded-full hover:bg-gray-100">
                <p>Fotoğrafını yükle</p>
              </div>
            </Link>
          </nav>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div> */}
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-gray-800 p-4`}
      >
        <nav className="flex flex-col space-y-4 font-[Poppins]">
          <Link to="/" className="text-white">Anasayfa</Link>
          <Link to="/photo-upload" className="text-white">Fotoğrafını yükle</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

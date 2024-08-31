import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 font-[Poppins]">
        
        <div>
          <h2 className="text-2xl font-bold">fotoğrafçım</h2>
          <p className="text-gray-400 mt-2">© 2024 fotoğrafçım. Tüm hakları saklıdır.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Anasayfa</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Hakkımızda</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Servisler</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">İletişim</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">More</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Gizlilik Politikası</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Şartlar ve Koşullar</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Sıkça Sorulan Sorular</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Bizi takip edin</h3>
          <div className="mt-2 flex space-x-4">
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
        </div>

      </div>
    </footer>
  );
};

export default Footer;

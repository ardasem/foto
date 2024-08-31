import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faEdit,
  faCloudUploadAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import HeroSection from "../components/HeroSection";
import PhotoCatalog from "../components/PhotoCatalog";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-[Poppins]">
      {/* Hero Section */}
      <HeroSection />

      <PhotoCatalog />

      {/* Features Section */}
      <section className="pb-20 bg-black ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon
                icon={faCamera}
                className="text-black text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Kolay Yükleme</h3>
              <p>Tek tuşla fotoğraflarınızı yükleyin.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon
                icon={faEdit}
                className="text-black text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Yapay Zeka</h3>
              <p>
                Yapay zeka sayesinde fotoğraflarınızı en hızlı ve ilgi çekici
                şekilde düzenleyin.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon
                icon={faCloudUploadAlt}
                className="text-black text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Cloud Teknolojisi</h3>
              <p>
                Hazırladığınız fotoğrafları cloud içerisinde saklayın,
                dilediğinizde ulaşın.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-black text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Kullanıcı Dostu</h3>
              <p>
                Kullanması kolay arayüzümüz sayesinde hızlıca fotoğraflarınızı
                düzenleyin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

// HeroSection.js
import React from "react";
import InfiniteSlider from "./InfiniteSlider/InfiniteSlider"; // Import the InfiniteSlider component

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white py-24 px-4 text-left shadow-2xl">
      {/* Infinite Slider */}
      <InfiniteSlider />
       
      {/* Sticky Header Text */}
      <div className="fixed top-0 left-5 right-0 bg-transparent text-white py-4 px-4 text-left z-30">
        <div className="text-2xl font-bold">fotoğrafçım.net</div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mt-16 container mx-auto flex flex-col md:flex-row items-center justify-evenly">
        {/* Text Content */}
        <div className="max-w-xl mb-8 md:mb-0 bg-black/85 rounded-lg shadow-lg p-4">
          <h1 className="text-3xl font-bold mb-4 leading-relaxed">
            📸 Herkese profesyonel hizmet
          </h1>
          <p className="text-lg mb-8 leading-relaxed text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            iure natus perferendis nulla ratione corporis esse vel saepe ex
            culpa voluptatem, quae facilis dignissimos, placeat harum quas.
            Numquam, aliquid eligendi? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Obcaecati iure natus perferendis nulla ratione
            corporis esse vel saepe ex culpa voluptatem, quae facilis
            dignissimos, placeat harum quas. Numquam, aliquid eligendi?
          </p>
        </div>

        {/* Login Module */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96">
          <h2 className="text-2xl text-black font-semibold mb-4">Giriş yap</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-black mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="username"
                className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Mail adresinizi girin"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-black mb-2">
                Şifre
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Şifrenizi girin"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:text-black hover:bg-white hover:border-solid hover:border-[1px] hover:border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>

      {/* Transition Effect for Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 bg-transparent border-t-4 border-blue-500 transition-all duration-500 ease-in-out hover:border-blue-300 z-10"></div>
    </div>
  );
};

export default HeroSection;

// src/components/Partners.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Partners = () => {
  const partners = [
    {
      name: "Partner 1",
      logo: "https://via.placeholder.com/150x80?text=Logo+1",
    },
    {
      name: "Partner 2",
      logo: "https://via.placeholder.com/150x80?text=Logo+2",
    },
    {
      name: "Partner 3",
      logo: "https://via.placeholder.com/150x80?text=Logo+3",
    },
    {
      name: "Partner 4",
      logo: "https://via.placeholder.com/150x80?text=Logo+4",
    },
    {
      name: "Partner 5",
      logo: "https://via.placeholder.com/150x80?text=Logo+5",
    },
    {
      name: "Partner 6",
      logo: "https://via.placeholder.com/150x80?text=Logo+6",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Partners</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          className="flex items-center"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300 bg-gray-100 rounded-md p-2 shadow-sm"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;

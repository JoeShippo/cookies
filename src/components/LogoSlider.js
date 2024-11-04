// LogoSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import main Swiper CSS
import { Autoplay } from 'swiper/modules'; // Import Autoplay module

const LogoSlider = () => {
  const logos = [
    { src: `${process.env.PUBLIC_URL}/assets/logos/Audi-Logo_2016.svg`, alt: "Audi", link: "https://www.audi.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/bmw.svg`, alt: "BMW", link: "https://www.bmw.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/Citroen_2022.svg`, alt: "Citroen", link: "https://www.citroen.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/Fiat_logo.svg`, alt: "Fiat", link: "https://www.fiat.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/ford_oval_blue_logo.svg`, alt: "Ford", link: "https://www.ford.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/Volvo_logo.svg`, alt: "Volvo", link: "https://www.volvo.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/Hyundai_Motor_Company_logo-3.svg`, alt: "Hyundai", link: "https://www.hyundai.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/KIA_logo3.svg`, alt: "Kia", link: "https://www.kia.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/Mercedes-Logo (1).svg`, alt: "Mercedes", link: "https://www.mercedes-benz.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/Mg_logo.svg`, alt: "MG", link: "https://www.mgmotor.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/MINI_logo.svg`, alt: "MINI", link: "https://www.mini.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/Nissan_2020_logo.svg`, alt: "Nissan", link: "https://www.nissan.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/Peugeot_Logo-2.svg`, alt: "Peugeot", link: "https://www.peugeot.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/Renault_2021_Text.svg`, alt: "Renault", link: "https://www.renault.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/SEAT_Logo_from_2017.svg`, alt: "SEAT", link: "https://www.seat.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/Toyota_Logo.svg`, alt: "Toyota", link: "https://www.toyota.com" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/Vauxhall_logo_2019.svg`, alt: "Vauxhall", link: "https://www.vauxhall.co.uk" },
    { src: `${process.env.PUBLIC_URL}/assets/logos/Volkswagen_logo_2019.svg`, alt: "Volkswagen", link: "https://www.volkswagen.com" },
  ];

  return (
    <div className="slider-container mt-8 hidden md:block">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={'10'}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000} // Adjusts the scroll speed
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center max-h-24">
            <a href={logo.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center min-h-24 w-auto">
              <img src={logo.src} alt={logo.alt} className="max-h-24 p-4" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";

const images = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/vda8t8i1tvblirlwxn57",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/vda8t8i1tvblirlwxn57",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/quuxd8vrfgqpg4stocd5",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/quuxd8vrfgqpg4stocd5",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/wrp8fedgzk6ij5xrkzdh",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/wrp8fedgzk6ij5xrkzdh",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/tnyk4ty6jmoxkvmpkcss",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/tnyk4ty6jmoxkvmpkcss",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/fxy4qfejaopcdeqzzavq",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/fxy4qfejaopcdeqzzavq",
  },
];

const Activities = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on load
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-2 mt-0 lg:mt-0">
      <h1 className="lg:text-[26px] text-[19px] leading-[36px]  font-sackerCothic uppercase text-primary">
        {`Activities`}
      </h1>
      <p className="text-[16px] leading-[34px] px-3 2xl:px-12 ">
        {`At Casa Lalla, we believe in creating unforgettable member experiences that connect you with the stunning natural beauty of the region. Whether you seek adventure or tranquility, our diverse range of activities—ranging from exhilarating outdoor excursions to serene nature walks—ensures that every guest can discover the magic of Lalla Takerkoust and the captivating landscapes that surround it.`}
      </p>
      <div className="w-full h-full flex justify-center items-center">
        <Swiper
          slidesPerView={isMobile ? 1 : 5}
          spaceBetween={10}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className="relative"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                width={800}
                height={800}
                loading="lazy"
                className="object-cover w-full h-full"
                alt={`Casa lalla htakerkoust ${index}`}
              />
            </SwiperSlide>
          ))}
          <button className="swiper-button-prev-ex1 grid place-content-center left-8 transition text-white absolute z-[999] top-1/2 -translate-y-1/2">
            <MdOutlineArrowBackIos size={28} />
          </button>
          <button className="swiper-button-next-ex1 grid place-content-center right-8 transition text-white absolute z-[999] top-1/2 -translate-y-1/2">
            <MdOutlineArrowForwardIos size={28} />
          </button>
        </Swiper>
      </div>
    </div>
  );
};

export default Activities;

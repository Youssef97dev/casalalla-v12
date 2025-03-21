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
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/kgr2b6b6i6llhc3o6rtb",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/kgr2b6b6i6llhc3o6rtb",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_7_walijv",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_7_walijv",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_8_crsxvk",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_8_crsxvk",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/mzlt2jm7gmdueif3xs9r",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/mzlt2jm7gmdueif3xs9r",
  },
];

const Pool = () => {
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
        {`Pool`}
      </h1>
      <p className="text-[16px] leading-[34px] px-3 2xl:px-12 ">
        {`Located between the Palme trees in the middle of the garden, the pool is 20 meters long and 7 meters wide.`}
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

export default Pool;

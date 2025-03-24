"use client";
import Image from "next/image";
import Link from "next/link";
import Accordion from "./Accordion";
import Slides from "./Slides";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const itemsMobile = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/hfrl3m9o4ip3hter3tuc",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/o4ooppmdac4j4z0nyydx",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/yjvuwne8b1fsr51ijhyj",
    type: "image",
  },
  {
    src: "/video-4.mp4",
    type: "video",
  },
  {
    src: "/video-5.mp4",
    type: "video",
  },
  {
    src: "/video-6.mp4",
    type: "video",
  },
];

const Activities = () => {
  const { t } = useTranslation();
  return (
    <div
      id="activities"
      className="w-full min-h-screen flex md:flex-row flex-col"
    >
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/kmljbte7etemxsmpcj4d"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:block hidden"
        />
        <div className="w-full h-[80vh] md:hidden block">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1400}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-ex1",
              prevEl: ".swiper-button-prev-ex1",
            }}
            className="swiper w-full h-full"
            id="slider1"
          >
            <div className="swiper-wrapper">
              {itemsMobile.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    {item.type === "image" ? (
                      <img
                        src={`${item.src}`}
                        className="object-cover w-full h-full"
                        alt="itemImage"
                      />
                    ) : (
                      <video
                        className="object-cover h-full w-full"
                        autoPlay
                        loop
                        muted
                      >
                        <source src={`${item.src}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
        {/* Filter */}
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 pt-10 pb-5">
        <Slides />
        <div className="w-full h-full flex flex-col justify-start items-center gap-1 text-center px-5 lg:px-32">
          <h1 className="text-[20px] leading-[36px]  font-sackerCothic uppercase text-secondary my-10">
            <TypeAnimation
              sequence={[t("activities.title"), 2000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <Accordion />
          <Link
            href="/custom-booking"
            className="mt-8 py-2 px-8 w-full uppercase tracking-widest border border-secondary text-secondary rounded-lg text-[12px] leading-[34px] hover:bg-secondary hover:text-white duration-200 transition-all ease-outb"
          >
            {t("activities.book_experience")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Activities;

"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="hero" className="relative bg-background w-full h-screen">
      <video
        className="object-cover h-full w-full block lg:hidden"
        autoPlay
        loop
        muted
      >
        <source src="/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf"
        height={2000}
        width={2000}
        className="object-cover h-full w-full hidden lg:block"
      />
      {/* Overlay */}
      <div className="absolute inset-0 backdrop-brightness-75 hidden lg:block"></div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="absolute top-64 left-3 pr-32 text-white text-[14px] font-dominica">
        <TypeAnimation
          sequence={[
            "Set against the breathtaking backdrop of Lac Lalla Takerkoust",
            3000,
            "A hideaway haven capturing the essence of natural beauty at Lac Lalla Takerkoust",
            3000,
          ]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
        />
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-white">
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7 7 7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div
      id="events"
      className="w-full h-full lg:h-screen flex md:flex-row-reverse flex-col"
    >
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/ufl2ch4ywyaomin9gaf5"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:block hidden"
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/f66rpshuoroemocbpbeg"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:hidden block"
        />
        {/* Filter */}
      </div>
      <div className=" w-full py-10 px-4 lg:p-10 bg-white">
        <div className="w-full h-full flex flex-col justify-center items-center gap-1 text-center border border-secondary lg:p-20 p-8">
          <h1 className="text-[20px] leading-[36px]  font-sackerCothic uppercase text-primary mb-5">
            <TypeAnimation
              sequence={[t("events.title"), 2000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[16px] leading-[34px] ">{t("events.content")}</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;

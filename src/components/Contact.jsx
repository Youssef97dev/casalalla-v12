"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
  FaDivide,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className="w-full min-h-[60vh] flex md:flex-row-reverse flex-col"
    >
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/euwfruaq6uqmjhqom3lh"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:block hidden"
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/euwfruaq6uqmjhqom3lh"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:hidden block"
        />
      </div>
      <div className="w-full min-h-[60vh]">
        <div className="w-full p-5 lg:p-10">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center bg-background lg:p-20 p-5 font-medium">
            <img
              src="/logo-7.png"
              alt="Logo Casa lalla"
              className={`w-52 h-28`}
            />
            <p className="text-[11px] leading-[30px] uppercase">
              {t("contact.title")}
            </p>
            <p className="text-[11px] leading-[30px] uppercase">
              {t("contact.open")}
            </p>
            <div className="text-[11px] leading-[30px] uppercase flex justify-center items-center gap-2">
              <span>Email : </span>
              <Link href="#">{`reservations@casalallatakerkoust.com`}</Link>
            </div>
            <div className="text-[11px] leading-[30px] uppercase flex justify-center items-center gap-2">
              <span>Tel :</span>
              <Link href="#">{`+212 675-480103`}</Link>
            </div>
            <div className="w-full text-black py-4 flex justify-center items-center gap-3">
              <Link href="http://wa.me/212675480103" target="_blank">
                <FaWhatsappSquare size={25} color="#8c8554" />
              </Link>
              <Link
                href="https://www.instagram.com/casa.lalla.takerkoust/"
                target="_blank"
              >
                <FaInstagramSquare size={25} color="#8c8554" />
              </Link>
              <Link
                href="mailto:reservations@casalallatakerkoust.com"
                target="_blank"
              >
                <FaMailBulk size={25} color="#8c8554" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

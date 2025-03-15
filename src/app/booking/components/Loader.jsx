"use client";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import Book from "./Book";
import Link from "next/link";
import {
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaSquareEnvelope,
} from "react-icons/fa6";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="bg-[#F5EDE2] w-full flex flex-col justify-start items-center h-[130vh] px-0 lg:px-20 xl:px-96 py-0 lg:py-10">
          <Book />
          <div className="w-full h-full flex gap-2 justify-center text-[#333333] items-center">
            <Link
              target="_blank"
              href="mailto:reservations@casalallatakerkoust.com"
            >
              <FaSquareEnvelope size={30} className="cursor-pointer" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/casa.lalla.takerkoust"
            >
              <FaSquareInstagram size={30} className="cursor-pointer" />
            </Link>
            <Link target="_blank" href="http://wa.me/212675480103">
              <FaSquareWhatsapp size={30} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <CircleLoader color="#c20022" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;

"use client";
import Link from "next/link";
import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const ButtonReservation = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center items-center bg-primary text-white lg:hidden ">
      <div className="w-[86%] flex justify-center items-center py-3">
        <Link href="/booking" className="uppercase tracking-widest">
          {t("navbar.reservation")}
        </Link>
      </div>
      <div className="w-[14%] flex justify-center items-center border-l border-white py-3">
        <Link href="/">
          <RiArrowUpSLine size={23} />
        </Link>
      </div>
    </div>
  );
};

export default ButtonReservation;

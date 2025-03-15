"use client";
import React, { useEffect } from "react";
import i18next from "../../i18n";

const Footer = () => {
  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);
  return (
    <div className="w-full min-h-[16vh] bg-primary flex flex-col justify-center items-center gap-3 py-3 text-white text-[14px] leading-[30px] ">
      <span>@2025 Casa Lalla Takekoust</span>
      <span>Lalla Takerkoust, Marrakech 40000 Morocco</span>
      <div className="w-full flex justify-center items-center gap-4 px-3 py-2">
        <div className="cursor-pointer" onClick={() => changeLanguage("en")}>
          <img src="/english.png" className="w-7 h-7" />
        </div>
        <div className="cursor-pointer" onClick={() => changeLanguage("fr")}>
          <img src="/france.png" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

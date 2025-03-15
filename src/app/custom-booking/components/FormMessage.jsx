"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const FormMessage = () => {
  const [isClient, setIsClient] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <form className="w-full flex flex-col justify-center items-center gap-4 text-[15.08px] leading-[21.12px] my-20 px-5 lg:px-80 text-primary">
        <div className="w-full flex justify-center items-center gap-3">
          <div className="w-full flex flex-col justify-center items-start gap-1">
            <label htmlFor="firstName">{t("contact.firstname")}</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-full rounded-md p-2 border border-border_color focus:outline-none"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-1">
            <label htmlFor="lastName">{t("contact.lastname")}</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full rounded-md p-2 border border-border_color focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="email">{t("contact.email")}</label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full rounded-md p-2 border border-border_color focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="subject">{t("contact.subject")}</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="w-full rounded-md p-2 border border-border_color focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="w-full rounded-md p-2 border border-border_color focus:outline-none"
            rows={4}
          />
        </div>
        <button className="py-4 px-6 border border-border_color mr-auto uppercase">
          {t("contact.submit")}
        </button>
      </form>
    )
  );
};

export default FormMessage;

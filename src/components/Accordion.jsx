"use client";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Accordion = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("1");

  const togglePara = (value) => {
    setActive((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  return (
    <div className="w-full">
      <div className=" font-normal">
        <div className="border-t  border-secondary  ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13px] leading-[30px] uppercase font-medium `}
            onClick={() => togglePara("1")}
          >
            {t("activities.title_1")}
            <div className={`ml-auto text-secondary`}>
              {active === "1" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-secondary">
                <p>{t("activities.trans_desc")}</p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t  border-secondary">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13px] leading-[30px] uppercase font-medium`}
            onClick={() => togglePara("2")}
          >
            {`Quad / Buggy Tour`}
            <div className={`ml-auto text-secondary`}>
              {active === "2" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "2" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-secondary">
                <p>{t("activities.quad_desc")}</p>
                {/*<p>
                  {t("activities.quad_desc_1")}
                  <br />
                  {t("activities.quad_desc_2")}
                  <br />
                  {t("activities.quad_desc_3")}
                  <br />
                  {t("activities.quad_desc_4")}
                  <br />
                  {t("activities.quad_desc_5")}
                  <br />
                  {t("activities.quad_desc_6")}
              </p>*/}
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-secondary ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13px] leading-[30px] uppercase font-medium`}
            onClick={() => togglePara("3")}
          >
            {`Jetski`}
            <div className={`ml-auto text-secondary`}>
              {active === "3" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "3" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-secondary">
                <p>{t("activities.jetski_desc")}</p>
                {/*<p>{t("activities.jetski_desc_1")}</p> */}
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-secondary ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13px] leading-[30px] uppercase font-medium`}
            onClick={() => togglePara("4")}
          >
            {t("activities.title_4")}
            <div className={`ml-auto text-secondary`}>
              {active === "4" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "4" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-secondary">
                <p>{t("activities.hike_desc")}</p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-secondary ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13px] leading-[30px] uppercase font-medium`}
            onClick={() => togglePara("5")}
          >
            {t("activities.title_5")}
            <div className={`ml-auto text-secondary`}>
              {active === "5" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "5" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-secondary">
                <p>{t("activities.riding_desc")}</p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-b border-secondary ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13px] leading-[30px] uppercase font-medium`}
            onClick={() => togglePara("6")}
          >
            {t("activities.title_6")}
            <div className={`ml-auto text-secondary`}>
              {active === "6" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "6" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-secondary">
                <p>{t("activities.agafay_desc_1")}</p>
                <p>{t("activities.agafay_desc_2")}</p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-b border-secondary ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13.5px] uppercase font-medium`}
            onClick={() => togglePara("7")}
          >
            {t("activities.title_7")}
            <div className={`ml-auto text-secondary`}>
              {active === "7" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "7" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px] leading-[30px] border-t border-secondary">
                <p>{t("activities.bike_desc")}</p>
              </div>
            </AnimateHeight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

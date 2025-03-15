"use client";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import Hero from "./Hero";
import About from "./About";
import Intro from "./Intro";
import Gallery from "./Gallery";
import Activities from "./Activities";
import Contact from "./Contact";
import Footer from "./Footer";
import ButtonReservation from "./ButtonReservation";

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
        <div className="relative">
          <Hero />
          <About />
          <Intro />
          <Activities />
          <Contact />
          <Gallery />
          <Footer />
          <div className="py-5 block lg:hidden"></div>
          <ButtonReservation />
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

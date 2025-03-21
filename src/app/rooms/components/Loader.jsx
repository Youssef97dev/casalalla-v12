"use client";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import About from "./About";
import Activities from "./Activities";
import Hero from "./Hero";
import Pool from "./Pool";
import Rooms from "./Rooms";
import Footer from "@/components/Footer";

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
          <Pool />
          <Activities />
          <Rooms />
          <Footer />
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

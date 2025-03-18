import Navbar from "../custom-booking/components/Navbar";
import Footer from "@/components/Footer";
import Daypass from "./components/Daypass";
import Gallery from "./components/Gallery";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <Navbar />
      <Daypass />
      <Gallery />
      <Footer />
    </div>
  );
};

export default page;

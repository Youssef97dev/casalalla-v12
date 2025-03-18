import Image from "next/image";

const imagesUrl = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_crop,h_4503,w_4503/CasaLalla-VNor/cpeheqlzvbffghpvdiu0",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_crop,h_4503,w_4503/CasaLalla-VNor/xui47nmk2s7mfi9rmzyr",
];

const Gallery = () => {
  return (
    <div className="w-full h-full lg:h-screen flex flex-col lg:flex-row justify-between items-start space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 py-2 px-5">
      {imagesUrl.map((image, index) => (
        <div key={index} className="w-full h-full">
          <Image
            src={image}
            alt="casa lalla gallery"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

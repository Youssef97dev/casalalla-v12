"use client";
import React from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";

const images = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/fxy4qfejaopcdeqzzavq",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/fxy4qfejaopcdeqzzavq",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/jem8xv0zui8wzo1lwtku",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/jem8xv0zui8wzo1lwtku",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/yni4ms1d9uupqtpmarsz",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/yni4ms1d9uupqtpmarsz",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/tnyk4ty6jmoxkvmpkcss",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/tnyk4ty6jmoxkvmpkcss",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/jfdaoehyg6ro3ei6eeqs",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/jfdaoehyg6ro3ei6eeqs",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/prpqg6qvbzkgcrqhqlpz",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/prpqg6qvbzkgcrqhqlpz",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/rixavtohk5qolpbtghy2",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/rixavtohk5qolpbtghy2",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/ijf7z5lbtwayp94imo8s",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/ijf7z5lbtwayp94imo8s",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/i69kogh7plg5ejp4i3by",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/i69kogh7plg5ejp4i3by",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/eayjwgwvofxlpf3qguso",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/eayjwgwvofxlpf3qguso",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/j3micvmlxad8p74qiqmv",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/j3micvmlxad8p74qiqmv",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/al4bcdkfinrevudk8zeq",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/al4bcdkfinrevudk8zeq",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/cgww8rhzu6tppbuijmei",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/cgww8rhzu6tppbuijmei",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/q2nzpahlmh9ptokalfbk",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/q2nzpahlmh9ptokalfbk",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/isyw8qmpv2eqyliz7jq4",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/isyw8qmpv2eqyliz7jq4",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/gqv9wtwifxewduw2bkxl",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/gqv9wtwifxewduw2bkxl",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/wchy9aktwnjg2e0kshio",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/wchy9aktwnjg2e0kshio",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/cpeheqlzvbffghpvdiu0",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/cpeheqlzvbffghpvdiu0",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/jfziloryimjajcbxuj0k",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/jfziloryimjajcbxuj0k",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/alq72roudpmfktyfu5k2",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/alq72roudpmfktyfu5k2",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/ud4poelfjicsedkvxc6q",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/ud4poelfjicsedkvxc6q",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/mguv84339wzg6mbyeyel",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/mguv84339wzg6mbyeyel",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/qhiocnbz1aqhvzirfzhi",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/qhiocnbz1aqhvzirfzhi",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/k530wqfiey0i2d9fhvow",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/k530wqfiey0i2d9fhvow",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/hnwydmpvhljw0eietnnw",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/hnwydmpvhljw0eietnnw",
  },
];

const MemoizedImage = React.memo(({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={300}
    height={300}
    loading="lazy" // Lazy loading
    className="rounded-sm w-full h-full"
  />
));

// Setting the display name for the MemoizedImage component
MemoizedImage.displayName = "MemoizedImage";

const Gallery = () => {
  return (
    <div id="gallery" className="w-full  py-5 px-4 mt-3">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="masonry"
      >
        {images.map((image, index) => (
          <Link href={image.thumbnail} key={index}>
            <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
              <MemoizedImage
                src={image.src}
                alt={`casa lalla takerkoust ${index}`}
              />
            </div>
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;

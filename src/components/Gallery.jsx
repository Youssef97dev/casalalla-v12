"use client";
import React from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgVideo from "lightgallery/plugins/video";
import Link from "next/link";

const images = [
  {
    src: "/video-1.mp4",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/xynldb9nt1wsnincchni",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/y8mgeibp0j64usbkwkzc",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/y8mgeibp0j64usbkwkzc",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/prbhzrtu4lljtga2t8ze",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/prbhzrtu4lljtga2t8ze",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/am1v8ayvszpd18x3ll3t",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/am1v8ayvszpd18x3ll3t",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/fxy4qfejaopcdeqzzavq",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/fxy4qfejaopcdeqzzavq",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/jem8xv0zui8wzo1lwtku",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/jem8xv0zui8wzo1lwtku",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/yni4ms1d9uupqtpmarsz",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/yni4ms1d9uupqtpmarsz",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/tnyk4ty6jmoxkvmpkcss",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/tnyk4ty6jmoxkvmpkcss",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/jfdaoehyg6ro3ei6eeqs",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/jfdaoehyg6ro3ei6eeqs",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/prpqg6qvbzkgcrqhqlpz",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/prpqg6qvbzkgcrqhqlpz",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/rixavtohk5qolpbtghy2",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/rixavtohk5qolpbtghy2",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/ijf7z5lbtwayp94imo8s",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/ijf7z5lbtwayp94imo8s",
    type: "image",
  },
  {
    src: "/video-2.mp4",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/kcnnk5unfaxzcd9ceby4",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/i69kogh7plg5ejp4i3by",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/i69kogh7plg5ejp4i3by",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/eayjwgwvofxlpf3qguso",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/eayjwgwvofxlpf3qguso",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/j3micvmlxad8p74qiqmv",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/j3micvmlxad8p74qiqmv",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/al4bcdkfinrevudk8zeq",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/al4bcdkfinrevudk8zeq",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/cgww8rhzu6tppbuijmei",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/cgww8rhzu6tppbuijmei",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/dntepkyb0ii41oxobuyt",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/dntepkyb0ii41oxobuyt",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/pjm7bi8pm9u2zdstjpty",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/pjm7bi8pm9u2zdstjpty",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/q2nzpahlmh9ptokalfbk",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/q2nzpahlmh9ptokalfbk",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/isyw8qmpv2eqyliz7jq4",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/isyw8qmpv2eqyliz7jq4",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/gqv9wtwifxewduw2bkxl",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/gqv9wtwifxewduw2bkxl",
    type: "image",
  },
  {
    src: "/video-3.mp4",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/xui47nmk2s7mfi9rmzyr",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/wchy9aktwnjg2e0kshio",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/wchy9aktwnjg2e0kshio",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/cpeheqlzvbffghpvdiu0",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/cpeheqlzvbffghpvdiu0",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/jfziloryimjajcbxuj0k",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/jfziloryimjajcbxuj0k",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/alq72roudpmfktyfu5k2",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/alq72roudpmfktyfu5k2",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/ud4poelfjicsedkvxc6q",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/ud4poelfjicsedkvxc6q",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/mguv84339wzg6mbyeyel",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/mguv84339wzg6mbyeyel",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/qhiocnbz1aqhvzirfzhi",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/qhiocnbz1aqhvzirfzhi",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/k530wqfiey0i2d9fhvow",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/k530wqfiey0i2d9fhvow",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/hnwydmpvhljw0eietnnw",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto:eco/v1/CasaLalla-VNor/hnwydmpvhljw0eietnnw",
    type: "image",
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
        plugins={[lgThumbnail, lgVideo]}
        elementClassNames="masonry"
      >
        {images.map((image, index) => (
          <Link
            href={image.type === "image" ? image.src : image.thumbnail}
            key={index}
          >
            <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
              {image.type === "image" ? (
                <MemoizedImage
                  src={image.src}
                  alt={`casa lalla takerkoust ${index}`}
                />
              ) : (
                <video
                  className="object-cover h-full w-full rounded-sm"
                  autoPlay
                  loop
                  muted
                >
                  <source src={`${image.src}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;

"use client";

import { RiCircleFill, RiCircleLine } from "@remixicon/react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ImageSliderProps = {
  images: {
    id: number;
    url: string | StaticImageData;
    alt: string;
  }[];
};

export default function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-full flex overflow-hidden">
        <div className="absolute top-0 left-0 bg-[linear-gradient(-90deg,#00000000,#000000)] w-full h-full z-10" />
        {images.map(({ id, url, alt }) => (
          <Image
            priority
            key={id}
            src={url}
            alt={alt}
            className="object-cover w-full h-full block flex-shrink-0 flex-grow-0 transition-[translate] duration-500"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] flex items-center gap-4 mb-12 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className="transition-transform hover:scale-125"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <RiCircleLine size={14} />
            ) : (
              <RiCircleFill size={14} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

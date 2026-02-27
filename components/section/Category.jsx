"use client";

import Image from "next/image";
import { categoriesData } from "../../data/categories";

export default function DynamicGallery({ folder }) {
  const category = categoriesData[folder];

  if (!category) {
    return (
      <p className="text-center text-gray-400 py-20">
        Category not found.
      </p>
    );
  }

  const { title, images } = category;

  if (!images.length) {
    return (
      <p className="text-center text-gray-400 py-20">
        No images found.
      </p>
    );
  }

  return (
    <section className=" max-w-[1440px] mx-auto">
      <div className="py-16 ">
        <h2 className="text-2xl font-medium mb-8 text-gray-800 capitalize text-center select-none">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative rounded-md overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt={`${title} image ${idx + 1}`}
                width={800}
                height={800}
                className="w-full aspect-square object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
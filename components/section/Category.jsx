"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom"; // Imported for the portal fix
import Image from "next/image";
import Link from "next/link";
import { categories } from "../../data/categories";

export default function CategoryPage({ slug }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mounted, setMounted] = useState(false);

  const category = categories.find((item) => item.slug === slug);

  // Handle mounting state for Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Category not found
      </div>
    );
  }

  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20">
          <p className="uppercase tracking-[0.2em] text-sm text-zinc-500">
            Portfolio
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-medium tracking-tight">
            {category.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-600">
            {category.shortDescription}
          </p>
        </section>

        {/* Gallery Section */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-32">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {category.images.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid overflow-hidden rounded-3xl cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${category.title} ${index + 1}`}
                  width={1000}
                  height={1500}
                  className="w-full h-auto object-cover rounded-3xl transition duration-300 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-32">
          <div className="rounded-[40px] bg-zinc-100 p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Like what you see?
            </h2>
            <p className="mt-4 text-zinc-600">
              Let's create something beautiful together.
            </p>
            <Link
              href="/inquiry"
              className="inline-flex mt-10 rounded-full bg-black px-8 py-4 text-white transition hover:opacity-90"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>

      {/* Image Viewer Modal injected via Portal */}
      {mounted && selectedImage && createPortal(
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-sm
            p-4
            cursor-zoom-out
          "
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="
              relative
              max-w-[90vw]
              max-h-[90vh]
              border-4
              border-white
              rounded-3xl
              overflow-hidden
              shadow-2xl
              bg-white
            "
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged gallery view"
              width={2000}
              height={3000}
              className="
                w-auto
                h-auto
                max-w-[90vw]
                max-h-[85vh]
                object-contain
              "
              priority
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
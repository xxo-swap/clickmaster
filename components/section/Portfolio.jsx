"use client";

import { useEffect, useState, useRef } from "react";
import Categories from "@/Categories";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const [categoryData, setCategoryData] = useState([]);
  const sectionRef = useRef(null);

  const categories = [
    "foods",
    "drinks",
    "sweets",
    "earthmatters",
    "ecommerces",
  ];

  useEffect(() => {
    const results = categories.map((category) => ({
      name: category.charAt(0).toUpperCase() + category.slice(1),
      image: `/categories/${category}/1.webp`,
      url: `/categories/${category}`,
    }));

    setCategoryData(results);
  }, []);

  // Animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".category-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [categoryData]);

  return (
    <section
      ref={sectionRef}
      className="px-5 sm:px-10 xl:px-20 w-full py-24 relative max-w-[1440px] mx-auto "
    >
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Explore Our Categories
        </h2>
        <p className="text-gray-600 text-base">
          Discover curated selections of our finest work—from fashion to food,
          decor to earth-conscious design.
        </p>
      </div>

      <div className="grid gap-12 lg:gap-10 grid-cols-1">
        {categoryData.map((category, index) => (
          <div key={category.name} className="category-card lg:my-[30vh]">
            <Categories category={category} index={index} />
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link href="/contact">
          <button className="group relative overflow-hidden px-6 py-3 bg-white text-primary border rounded-full">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Drop Your Query
            </span>
            <span className="absolute top-0 left-0 w-full h-full bg-primary -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
          </button>
        </Link>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "../../data/categories";

export default function Portfolio() {
  const featuredCategories = categories
    .filter((category) => category.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-32">
      {/* Heading */}
      <div className="max-w-2xl mb-20">
        <p className="uppercase tracking-[0.2em] text-sm text-zinc-500">
          Portfolio
        </p>

        <h2 className="mt-4 text-5xl md:text-7xl font-medium tracking-tight">
          Categories
        </h2>

        <p className="mt-6 text-lg text-zinc-600">
          Creating premium visuals for food, beverages and consumer brands.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {featuredCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group"
          >
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
              <Image
                src={category.coverImage}
                alt={category.title}
                fill
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-3xl font-medium">
                {category.title}
              </h3>

              <p className="mt-3 text-zinc-600">
                {category.shortDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-white
                      text-xxs
                      font-medium
                      text-primary
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
import Link from "next/link";
import Image from "next/image";
import { categories } from "../../data/categories";

export default function SelectedWork() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-32">

      <div className="mb-20">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Selected Work
        </p>

        <h2 className="mt-4 text-5xl md:text-7xl font-medium tracking-tight">
          Crafted for brands.
        </h2>
      </div>

      <div className="space-y-8">

        {categories
          .sort((a, b) => a.order - b.order)
          .map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-[32px]">

                <div className="relative aspect-[16/9]">

                  <Image
                    src={category.coverImage}
                    alt={category.title}
                    fill
                    sizes="(max-width:768px) 100vw, 1200px"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                  "
                  />

                  <div className="absolute bottom-8 left-8">

                    <h3 className="text-white text-4xl md:text-5xl font-medium">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-zinc-200">
                      {category.shortDescription}
                    </p>

                  </div>

                </div>

              </div>
            </Link>
          ))}

      </div>
    </section>
  );
}
"use client";

import Image from "next/image";

export default function MeetTheMen() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 lg:py-32 py-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[40px]">
            <Image
              src="/duo.jpg"
              alt="Sunny and Shwetank"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="max-w-xl">
           

            <h2 className=" text-5xl md:text-7xl font-medium tracking-tight text-zinc-900">
              Sunny &
              <br />
              Shwetank
            </h2>

            <div className=" space-y-6 text-lg leading-8 text-zinc-600">
              <p>
                We're two friends passionate about creating imagery that makes
                products look their absolute best.
              </p>

            </div>

            {/* Instagram Links */}
            <div className="border-t border-zinc-200 pt-8">
              

              <div className=" space-y-5">
                {/* Sunny */}
                <a
                  href="https://www.instagram.com/sgsunnny/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-3xl border border-zinc-200 px-6 py-5 transition-all hover:border-primary"
                >
                  <div>
                    <p className="text-xl font-medium text-zinc-900">
                      Sunny
                    </p>

                    <p className=" text-zinc-500">
                      @sgsunnny
                    </p>
                  </div>

                  <span className="text-2xl text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>

                {/* Shwetank */}
                <a
                  href="https://www.instagram.com/cruising_wolf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-3xl border border-zinc-200 px-6 py-5 transition-all hover:border-primary"
                >
                  <div>
                    <p className="text-xl font-medium text-zinc-900">
                      Shwetank
                    </p>

                    <p className="mt-1 text-zinc-500">
                      @cruising_wolf
                    </p>
                  </div>

                  <span className="text-2xl text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
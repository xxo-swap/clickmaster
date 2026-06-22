import { heroVideos } from "../../data/site";
import HeroVideo from "./heroVideos";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-5 items-end">
        {/* Text */}
        <div className="lg:row-span-1 lg:col-span-1 flex flex-col items-start justify-center">
          

          <h1 className=" text-6xl lg:text-8xl font-medium tracking-tight">
            Images That
            <br />
            Sell.
          </h1>

          <p className=" max-w-md text-lg text-zinc-600">
            Creating premium visuals for food, beverages, sweets and e-commerce
            brands.
          </p>
        </div>

        {/* Videos */}
        <div className="lg:row-span-2 lg:col-span-1">
          {/* Main card */}
          <div className="col-span-2 aspect-[4/5] overflow-hidden rounded-3xl">
            <HeroVideo
              videoSrc="/videos/heroGrid/1.webm"
              posterSrc="/videos/heroGrid/1.webp"
              priority
            />
          </div>

         
        </div>

         <div className="lg:row-span-1 lg:col-span-1 grid grid-cols-2 gap-5">
           {/* Small card */}
          <div className="aspect-square overflow-hidden rounded-3xl">
            <HeroVideo
              videoSrc="/videos/heroGrid/2.webm"
              posterSrc="/videos/heroGrid/2.webp"
            />
          </div>

          {/* Small card */}
          <div className="aspect-square overflow-hidden rounded-3xl">
            <HeroVideo
              videoSrc="/videos/heroGrid/3.webm"
              posterSrc="/videos/heroGrid/3.webp"
            />
          </div>
         </div>
      </div>
    </section>
  );
}

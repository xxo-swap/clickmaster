"use client";
import React from "react";

const MeetTheMen = () => {
  return (
    <section className="bg-primary py-16 px-5 sm:px-9 xl:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2
            className="
              text-3xl sm:text-4xl lg:text-5xl 
              font-extrabold text-white 
              mb-6 
              tracking-wide lg:tracking-wider
              leading-tight lg:leading-snug
            "
            style={{ wordSpacing: "0.2em" }}
          >
            Meet! Your Photographers
          </h2>

          <p
            className="
              text-white 
              text-base sm:text-lg lg:text-xl 
              leading-relaxed sm:leading-loose 
              max-w-2xl mx-auto md:mx-0
            "
            style={{ wordSpacing: "0.12em" }}
          >
            Hi, we’re{" "}
            <span className="font-semibold text-white">
              Sunny & Shwetank
            </span>.
            We’re two friends who love capturing food and products in their best
            light. Our goal is simple — to make everyday things look fresh,
            real, and full of life. From tasty dishes to unique products, we
            enjoy telling their story through photos that feel natural and
            honest.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="/duo.jpg"
            alt="Sunny and Shwetank"
            className="
              w-full h-80 sm:h-96 lg:h-[28rem]
              object-cover object-top
              rounded-xl shadow-lg
              transition-all duration-500 ease-in-out
            "
          />
        </div>

      </div>
    </section>
  );
};

export default MeetTheMen;
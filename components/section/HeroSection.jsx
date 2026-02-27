"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const HeroSection = ({ mobileVideoIndex = 2, tabletVideoIndex = 2 }) => {
  const heroRef = useRef(null);
  const [videosLoaded, setVideosLoaded] = useState(0);
  const [screenType, setScreenType] = useState("large");

  // ✅ Local video paths (served from /public)
  const videos = [
    "/videos/heroGrid/1.webm",
    "/videos/heroGrid/2.webm",
    "/videos/heroGrid/3.webm",
  ];

  // ✅ Detect screen type
  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      if (width >= 1024) setScreenType("large");
      else if (width >= 640) setScreenType("tablet");
      else setScreenType("mobile");
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ Animate text after required videos load
  useEffect(() => {
    if (!heroRef.current) return;

    const requiredVideos = screenType === "large" ? videos.length : 1;
    if (videosLoaded < requiredVideos) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#hero-text",
        { scale: 0, opacity: 0 },
        { duration: 2, scale: 1, opacity: 1, ease: "power4.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [videosLoaded, screenType]);

  // ✅ Determine videos to render
  let videosToRender = [];
  if (screenType === "large") videosToRender = videos;
  else if (screenType === "tablet") videosToRender = [videos[tabletVideoIndex]];
  else videosToRender = [videos[mobileVideoIndex]];

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div
        className={`absolute inset-0 ${
          screenType === "large" ? "grid grid-cols-3 gap-1" : "flex"
        }`}
      >
        {videosToRender.map((video, idx) => (
          <video
            key={idx}
            src={video}
            className="w-full h-full object-cover filter brightness-75"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideosLoaded((prev) => prev + 1)}
          />
        ))}
      </div>

      {/* Hero Text */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-center text-white/50">
        <h1
          id="hero-text"
          className="opacity-0 text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          Serving Taste Through the Lens.
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
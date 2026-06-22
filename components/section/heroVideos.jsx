"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroVideo({
  videoSrc,
  posterSrc,
  priority = false,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Mobile backup: Force the video to play once the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented by the browser:", error);
      });
    }
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* LCP image - remains visible until video loads */}
      <Image
        src={posterSrc}
        alt=""
        fill
        priority={priority}
        className="object-cover"
      />

      {/* Video element is always in the DOM now */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true" // Extra fallback for older iOS Safari
        preload="metadata"
        poster={posterSrc}
        className="absolute inset-0 h-full w-full object-cover z-10"
      >
        <source src={videoSrc} type="video/webm" />
      </video>
    </div>
  );
}
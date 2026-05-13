"use client"
import { useEffect, useRef } from "react";
import { dmSans } from "../layout";
import Link from "next/link";



export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  return (
    <section
  id="home"
  className={`relative overflow-hidden flex flex-col items-center justify-center py-20 sm:min-h-screen text-center px-4 sm:px-8 bg-[#053b44] ${dmSans.className}`}
>

    <video
  autoPlay
  loop
  muted
  className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
>
  <source src="/videos/background2.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<div className="relative z-10 w-full max-w-5xl mx-auto">
      {/* Heading */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl leading-snug mb-4 sm:mb-6 max-w-4xl mx-auto font-semibold"
        style={{ color: "#53b1b8" }}
      >
        Your Growth, Engineered by{" "}
        <span className="text-white">AI + Elite Talent</span>
      </h1>

      {/* Paragraph */}
      <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-16 md:mb-20 font-normal px-2">
        We believe businesses shouldn't crawl through digital transformation — they
        should leap ahead. We're a collective of top-tier developers, designers,
        marketers, and AI engineers who turn bold ideas into powerful digital
        systems. Whether you need a custom SaaS, intelligent chatbots, or full-blown
        sales automation, we build the infrastructure for growth — fast, functional,
        and future-ready.
      </p>

 <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-10">
  {/* Gradient Button */}
  <Link
    href="#contact_us"
    className="relative inline-flex items-center justify-center px-8 py-3 text-white font-semibold rounded-xl 
    bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44] 
    bg-[length:200%_200%] animate-gradient-flow
    shadow-[0_0_15px_rgba(83,177,184,0.5)]
    hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
    hover:scale-[1.05] transition-all duration-500 ease-out w-full sm:w-auto"
  >
    <span className="relative z-10">Get a Free Consultation</span>
  </Link>

  {/* Text Link with Icon */}
  <Link
    href="#ai_automation"
    className="group inline-flex items-center justify-center gap-2 text-gray-100 font-semibold text-base sm:text-lg transition-all duration-300 hover:text-[#53b1b8]"
  >
    {/* Down Arrow Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-y-1 group-hover:text-[#53b1b8] shrink-0"
    >
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z" />
    </svg>

    <span className="transition-colors duration-300 group-hover:text-[#53b1b8]">
      Explore Our Services
    </span>
  </Link>
</div>


      </div>
    </section>
  );
}

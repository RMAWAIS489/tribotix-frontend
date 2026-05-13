"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { dmSans } from "../layout";

export default function Reviews() {
  const stats = [
    { title: "Projects", value: 180 },
    { title: "Happy Clients", value: 90 },
    { title: "Consultations", value: 300 },
  ];

  const testimonials = [
    {
      quote:
        "Working with Tribotex was like having a team of senior experts available whenever we needed and dedicated to our success. Their attention to detail and technical expertise is unmatched.",
      name: "Priya Singh",
      position: "Founder, Wellness Collective",
       image: "/images/priya.jpg",
    },
    {
      quote:
        "From design to development to marketing – Tribotex delivered everything under one roof. The quality exceeded our expectations and the results speak for themselves.",
      name: "Lara Chen",
      position: "CEO, EduGrowth Hub",
       image: "/images/lara.jpg",
    },
    {
      quote:
        "Tribotex transformed our entire business operation. Their AI automation saved us 40 hours per week and increased our revenue by 200%. Absolutely phenomenal work!",
      name: "William Lawson",
      position: "Head of Operations, e-Commerce Co.",
       image: "/images/william.jpg",
    },
  ];

  return (
    <div className={`min-h-screen bg-white text-gray-900 px-4 sm:px-8 md:px-16 py-16 sm:py-20 ${dmSans.className}`}>
      {/* Top Section - Two Columns */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-20">
        {/* Left - Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-sm sm:text-base md:text-[15px] text-gray-500 font-semibold tracking-wider">Reviews</p>
          <h2 className="text-4xl md:text-4xl font-bold text-[#053b44]">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 md:text-[16px] leading-relaxed">
            Witness firsthand the user appreciation for our uncomplicated
            ticketing system in their daily activities.
          </p>
        </motion.div>

        {/* Right - Stats with Counter */}
        <Stats stats={stats} />
      </div>

      {/* Testimonials Section */}
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-0 relative z-10">
  {testimonials.map((testimonial, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative group overflow-visible flex justify-center"
    >
      {/* 💬 Floating Quote Icon */}
      <div className="absolute -top-6 left-6 sm:left-8 z-50 translate-y-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#053b44"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-transform duration-500"
        >
          <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C359.6 32 288 103.6 288 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
        </svg>
      </div>

      {/* ==== Card Body ==== */}
      <div className="relative w-full sm:w-[90%] md:w-[100%] lg:w-[112%] min-h-[300px] sm:min-h-[330px] md:h-[350px] flex flex-col justify-center items-center text-center p-6 sm:p-8 rounded-2xl border border-gray-300 bg-white hover:bg-[#f0fafa] hover:border-[#53b1b8] transition-all duration-500 group-hover:shadow-lg">
        <p className="text-gray-700 italic mb-6 leading-relaxed text-sm sm:text-base md:text-[17px] max-w-xs sm:max-w-sm">
          “{testimonial.quote}”
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Profile Image */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#53b1b8] shadow-md shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>

          {/* 👤 Name & Position */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-md md:text-lg font-semibold text-[#053b44] leading-tight">
              {testimonial.name}
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm leading-snug">
              {testimonial.position}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>






    </div>
  );
}

// Stats Component with InView Trigger
function Stats({ stats }: { stats: { title: string; value: number }[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="flex justify-between items-center w-full  max-w-md mx-auto md:mx-0"
    >
      {stats.map((stat, index) => (
        <Counter
          key={index}
          value={stat.value}
          title={stat.title}
          start={inView} // only start when visible
          delay={index * 0.3}
        />
      ))}
    </div>
  );
}

// Counter Component
function Counter({
  value,
  title,
  delay = 0,
  start = false,
}: {
  value: number;
  title: string;
  delay?: number;
  start?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startCount = 0;
    const duration = 2000; // 2 seconds total animation
    const increment = value / (duration / 30);

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        startCount += increment;
        if (startCount >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(startCount));
        }
      }, 30);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [start, value, delay]);

  return (
 <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={start ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay }}
  className="text-center flex flex-col items-center justify-center px-2 sm:px-4 md:px-6"
>
  {/* Counter Number */}
  <h3
    className={`text-3xl sm:text-4xl md:text-3xl lg:text-6xl font-bold text-[#53b1b8] tracking-tight`}
  >
    {count}+
  </h3>

  {/* Title */}
  <p
    className={`text-gray-700 font-semibold mt-1 sm:mt-2 text-sm sm:text-base md:text-md ${dmSans.className}`}
  >
    {title}
  </p>
</motion.div>

  );
}

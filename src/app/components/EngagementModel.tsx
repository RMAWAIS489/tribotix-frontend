"use client";

import { motion } from "framer-motion";
import { Users, Briefcase } from "lucide-react";
import Link from "next/link";
import React from "react";
import { dmSans } from "../layout";

const EngagementModels: React.FC = () => {
  return (
    <div className={`min-h-screen bg-white text-gray-900 px-4 sm:px-8 md:px-16 py-16 sm:py-20 flex flex-col items-center justify-center ${dmSans.className}`}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mb-16"
      >
        <div className="text-center space-y-6 mb-16">
          <p className="text-sm sm:text-base md:text-[15px] font-semibold text-gray-500">Engagement Models</p>
          <h3 className="text-4xl font-semibold text-[#316e72] mb-6">
            Find the <span className="text-black font-bold">&ldquo;Right&rdquo;</span>{" "}
            package
          </h3>
          <p className="text-md text-gray-500 mx-auto">
            Enjoy a range of features designed to enhance your project
            management experience, all at a price that fits your budget.
          </p>
        </div>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Card 1 - Level Up My Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="group p-8 rounded-2xl border-2 border-gray-300 bg-white hover:bg-[#f0fafa] hover:border-[#53b1b8] hover:shadow-2xl transition-all duration-300 flex flex-col gap-6"
        >
          {/* Title and Button Row */}
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#053b44] group-hover:text-[#53b1b8] transition-colors duration-300">
              Level Up My Team
            </h3>
            <Link
              href="#contact_us"
              className="relative inline-flex items-center justify-center px-5 sm:px-8 py-2.5 sm:py-3 text-white font-semibold rounded-xl 
             bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44] 
             bg-[length:200%_200%] animate-gradient-flow
             shadow-[0_0_15px_rgba(83,177,184,0.5)]
             hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
             hover:scale-[1.05] transition-all duration-500 ease-out shrink-0"
            >
              <span className="relative z-10">I Need This!</span>
              <span className="absolute inset-0 rounded-xl border border-white/20"></span>
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#53b1b8]/20 to-[#0ba5ec]/20 blur-md transition-opacity duration-500"></span>
            </Link>
          </div>

          {/* Icon and Content Section */}
          <div className="flex items-start gap-5">
            <div className="bg-[#53b1b8]/10 p-5 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
              <Users className="w-8 h-8 text-[#53b1b8] group-hover:text-white transition-colors duration-300" />
            </div>
            <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
              Need to fill gaps in your development team or looking for specific
              skill sets?{" "}
              <span className="font-semibold text-[#053b44]">LeapsDev</span>{" "}
              can help augment your team for fast, efficient success.
            </p>
          </div>
        </motion.div>

        {/* Card 2 - All-in-one Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="group p-8 rounded-2xl border-2 border-gray-300 bg-white hover:bg-[#f0fafa] hover:border-[#53b1b8] hover:shadow-2xl transition-all duration-300 flex flex-col gap-6"
        >
          {/* Title and Button Row */}
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#053b44] group-hover:text-[#53b1b8] transition-colors duration-300">
              All-in-one Solution
            </h3>
            <Link
              href="#contact_us"
              className="relative inline-flex items-center justify-center px-5 sm:px-8 py-2.5 sm:py-3 text-white font-semibold rounded-xl 
             bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44] 
             bg-[length:200%_200%] animate-gradient-flow
             shadow-[0_0_15px_rgba(83,177,184,0.5)]
             hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
             hover:scale-[1.05] transition-all duration-500 ease-out shrink-0"
            >
              <span className="relative z-10">I Need This!</span>
              <span className="absolute inset-0 rounded-xl border border-white/20"></span>
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#53b1b8]/20 to-[#0ba5ec]/20 blur-md transition-opacity duration-500"></span>
            </Link>
          </div>

          {/* Icon and Content Section */}
          <div className="flex items-start gap-5">
            <div className="bg-[#53b1b8]/10 p-5 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
              <Briefcase className="w-8 h-8 text-[#53b1b8] group-hover:text-white transition-colors duration-300" />
            </div>
            <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
              Have an idea but no team? We&apos;re capable of providing the{" "}
              <span className="font-semibold text-[#053b44]">Full Package</span>{" "}
              &mdash; from developers to project managers &mdash; so you can focus on your
              business goals.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EngagementModels;

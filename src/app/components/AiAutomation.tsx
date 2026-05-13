"use client";

import { motion } from "framer-motion";
import React from "react";
import { Bot, Workflow, Handshake } from "lucide-react";
import Link from "next/link";
import { dmSans } from "../layout";

const AiAutomation: React.FC = () => {
  return (
    <div
      id="ai_automation"
      className="min-h-screen bg-white text-gray-900 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-16 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Left Side - Main Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2 w-full text-center md:text-left space-y-4"
      >
        <p className="text-sm sm:text-base font-semibold text-gray-500">
          AI-Powered Automation
        </p>

        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight ${dmSans.className}`}
        >
          Build Systems That Work While You Sleep
        </h2>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify md:pr-4">
          Unlock the next level of business efficiency with tailored automation
          solutions that adapt to your operations. At{" "}
          <span className="text-[#53b1b8] font-semibold">Tribotex</span>, we
          don’t just automate tasks — we reimagine how your business runs. From
          building intelligent workflows on top of your existing platforms to
          deploying AI chatbots and voice-powered sales agents, we help you cut
          costs, speed up processes, and create scalable systems that work
          around the clock. Whether you’re looking to reduce manual workload,
          boost conversions, or deliver seamless support, our solutions are
          engineered to fit your tools, your team, your goals — and grow with
          your business.
        </p>

        <div className="flex justify-center md:justify-start">
          <Link
            href="#contact_us"
            className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 text-white font-semibold rounded-xl 
             bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44] 
             bg-[length:200%_200%] animate-gradient-flow
             shadow-[0_0_15px_rgba(83,177,184,0.5)]
             hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
             hover:scale-[1.05] transition-all duration-500 ease-out"
          >
            <span className="relative z-10">Book a Free Demo</span>
            <span className="absolute inset-0 rounded-xl border border-white/20"></span>
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#53b1b8]/20 to-[#0ba5ec]/20 blur-md transition-opacity duration-500"></span>
          </Link>
        </div>
      </motion.div>

      {/* Right Side - Automation Features */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2 w-full flex flex-col gap-6"
      >
        {/* Feature Item */}
        {[
          {
            Icon: Workflow,
            title: "Custom Business Automation Pipelines",
            desc: "We build intelligent automation pipelines on top of your existing tech stack — CRMs, forms, emails, and more — saving hours of repetitive tasks and boosting operational efficiency without disruption.",
          },
          {
            Icon: Bot,
            title: "AI Chatbots For 24/7 Engagement",
            desc: "Deploy smart, conversational AI chatbots that handle support, lead qualification, and FAQs — fully customized to your brand tone, tools, and audience behavior across web, social, or messaging apps.",
          },
          {
            Icon: Handshake,
            title: "AI-Powered Agents That Close Deals",
            desc: "From cold outreach to handling incoming inquiries, our AI Sales Agents handle calls like real sales reps — following scripts, answering objections, and updating CRMs, all in real time.",
          },
        ].map(({ Icon, title, desc }, i) => (
          <div
            key={i}
            className="group p-5 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white hover:bg-[#f0fafa] hover:border-[#53b1b8] hover:shadow-xl transition-all duration-300 flex items-start gap-4"
          >
            <div className="bg-[#53b1b8]/10 p-4 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300 flex-shrink-0">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#53b1b8] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#053b44] mb-1 group-hover:text-[#53b1b8] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AiAutomation;

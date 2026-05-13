"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { dmSans } from "../layout";

const faqs = [
  {
    question: "What makes Tribotex different?",
    answer:
      "Our edge lies in our team — top 1% experts in design, development, and AI. Plus, we approach every project with a focus on ROI, usability, and scalability.",
  },
  {
    question: "How soon can we get started?",
    answer:
      "Usually within 48 hours after the initial discovery call. We move fast — without compromising quality.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes. All our solutions come with optional ongoing support and maintenance packages.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We work with businesses of all sizes — from solo entrepreneurs to enterprise clients — across industries like BPO, SaaS, retail, coaching, and more.",
  },
  {
    question: "Can you integrate with my current CRM or tools?",
    answer:
      "Absolutely. We specialize in integrating with platforms like HubSpot, Zoho, Salesforce, Pabbly, and many others — you name it.",
  },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQs Section */}
      <section className={`w-full bg-[#053b44] text-white py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24 ${dmSans.className}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-sm uppercase font-semibold tracking-wider text-[#53b1b8]">
              FAQs
            </h3>
            <h2 className="text-4xl font-bold text-white">
              Frequently asked questions
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Discover our help desk FAQs to learn how we efficiently address
              your technical issues, ensuring you receive the support needed to
              stay productive and focused.
            </p>
          </motion.div>

          {/* Right Section (Accordion) */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-600 pb-4 cursor-pointer transition-all duration-300 hover:border-[#53b1b8]"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-white hover:text-[#53b1b8] transition-colors duration-300">
                    {faq.question}
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 text-[#53b1b8] transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-gray-300 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

     
          <div className="relative mt-16 w-full h-[2px] overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#53b1b8] to-transparent"></div>
</div>
      </section>

    <section className="w-full bg-[#053b44] text-gray-300 py-10 px-5 sm:px-10 md:px-16 lg:px-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 text-center md:text-left">
    
    {/* About Section */}
    <div className="flex flex-col items-center md:items-start space-y-4">
      {/* Logo */}
      <div className="relative w-32 sm:w-40 flex items-center justify-center md:justify-start">
        <Image
          src="/images/logo1.png"
          alt="Triboter Logo"
          width={160}
          height={80}
          className="object-contain"
          priority
        />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed max-w-xs sm:max-w-sm md:max-w-[12rem] text-center md:text-justify">
        We’re not just here to code, automate, or design — we’re here to
        solve, simplify, and scale what truly moves your business forward.
        Your vision deserves more than a service. It deserves a team that
        listens, builds, and believes.
      </p>
    </div>

    {/* Services */}
    <div>
      <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
        Services
      </h4>
      <ul className="space-y-2 text-sm sm:text-base text-gray-400">
        {[
          "Web Development",
          "Sales & Marketing",
          "E-commerce Solutions",
          "Business Automation",
          "Custom AI Agents",
        ].map((service) => (
          <li
            key={service}
            className="hover:text-[#53b1b8] transition-colors duration-300 cursor-pointer"
          >
            {service}
          </li>
        ))}
      </ul>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
        Quick Links
      </h4>
      <ul className="space-y-2 text-sm sm:text-base text-gray-400">
        {["Home", "Services", "About Us", "Contact Us", "Work With Us"].map(
          (link) => (
            <li
              key={link}
              className="hover:text-[#53b1b8] transition-colors duration-300 cursor-pointer"
            >
              {link}
            </li>
          )
        )}
      </ul>
    </div>

    {/* Contact */}
    <div className="w-full">
      <h4 className="text-xl sm:text-2xl  font-semibold text-white mb-4">
        Get In Touch!
      </h4>
      <ul className="space-y-1 text-sm sm:text-base text-gray-400">
        <li className="hover:text-[#53b1b8] transition-colors duration-300">
          📞 Phone: (+1) 786 9520-251
        </li>
        <li className="hover:text-[#53b1b8]  text-sm transition-colors duration-300">
          💬 WhatsApp: (+92) 327-1080-439
        </li>
        <li className="hover:text-[#53b1b8] text-sm transition-colors duration-300">
          ✉️ Email: Contact@tribotexdev.com
        </li>
        <li className="hover:text-[#53b1b8] text-sm transition-colors duration-300">
          📍 4CCX+FW, Railway Rd, Kasur, 55050
        </li>
        <li className="hover:text-[#53b1b8] text-sm transition-colors duration-300">
          📍 Miami, Florida (FL), 33162, United States
        </li>
      </ul>
    </div>
  </div>

  {/* Footer Bottom Line */}
  <div className="relative mt-10 w-full h-[1px] overflow-hidden bg-gradient-to-r from-transparent via-[#53b1b8] to-transparent opacity-60"></div>

  {/* Copyright */}
  <div className="mt-6 text-center text-xs sm:text-sm text-gray-400">
    © 2025{" "}
    <span className="text-[#53b1b8] font-semibold">Tribotex.io</span> PVT. LTD.
    All rights reserved.
  </div>
</section>

    </>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#ai_automation", label: "AI Automation" },
    { href: "#about_us", label: "About Us" },
    { href: "#contact_us", label: "Contact Us" },
  ];

  return (
    <nav className="w-full px-6 sm:px-8 py-3 flex items-center justify-between shadow-md bg-[#053b44] sticky top-0 z-20">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <div className="relative w-36 h-auto flex items-center">
          <Image
            src="/images/logo1.png"
            alt="Tribotex Logo"
            width={160}
            height={80}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Desktop Navigation (visible only on lg and above) */}
      <div className="hidden lg:flex items-center gap-8 border border-white/10 pl-4 pr-1 py-1 rounded-lg shadow-md bg-white/5">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-100 font-semibold hover:font-bold hover:text-[#53b1b8] transition"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact_us"
          className="relative inline-flex items-center justify-center px-5 py-2 text-white font-semibold rounded-xl 
             bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44] 
             bg-[length:200%_200%] animate-gradient-flow
             shadow-[0_0_15px_rgba(83,177,184,0.5)]
             hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
             hover:scale-[1.05] transition-all duration-500 ease-out"
        >
          <span className="relative z-10">Book a Free Demo</span>
          <span className="absolute inset-0 rounded-xl border border-white/20"></span>
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden text-gray-100 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#053b44] border-t border-white/10 flex flex-col items-center gap-6 py-8 px-6 shadow-xl z-50 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-100 font-semibold text-lg hover:text-[#53b1b8] transition w-full text-center"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact_us"
            onClick={() => setMenuOpen(false)}
            className="relative inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-xl 
               bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44] 
               bg-[length:200%_200%] animate-gradient-flow
               shadow-[0_0_15px_rgba(83,177,184,0.5)]
               hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
               transition-all duration-500 ease-out w-full text-center"
          >
            <span className="relative z-10">Book a Free Demo</span>
            <span className="absolute inset-0 rounded-xl border border-white/20"></span>
          </Link>
        </div>
      )}
    </nav>
  );
}

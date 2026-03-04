"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaDiscord, FaReddit, FaTwitter } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Smart Contracts", href: "#" },
    { name: "Services", href: "#advantages" },
    { name: "Solutions", href: "#" },
    { name: "Roadmap", href: "#" },
    { name: "Whitepaper", href: "#" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-lg border-b border-white/5 py-3 md:py-4 2k:py-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-6 md:py-8 2k:py-12"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 2k:px-20 flex justify-between items-center relative">
        
        <div className="flex-1 lg:flex-none">
          <div className="text-xl md:text-2xl 2k:text-4xl font-bold tracking-tighter text-white uppercase group cursor-pointer">
            AETERNA<span className="text-purple-500 group-hover:animate-pulse">.</span>
          </div>
        </div>

        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 xl:gap-8 2k:gap-16">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative text-[11px] xl:text-[12px] 2k:text-[16px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-300 font-medium after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-purple-500 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 lg:flex-none justify-end items-center gap-4 md:gap-6 2k:gap-12">
          <div className="flex items-center gap-5 2k:gap-10 text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-all hover:scale-110">
              <FaGithub size={isScrolled ? 20 : 22} className="2k:w-8 2k:h-8" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-all hover:scale-110">
              <FaDiscord size={isScrolled ? 20 : 22} className="2k:w-8 2k:h-8" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-all hover:scale-110">
              <FaReddit size={isScrolled ? 20 : 22} className="2k:w-8 2k:h-8" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-all hover:scale-110">
              <FaTwitter size={isScrolled ? 20 : 22} className="2k:w-8 2k:h-8" />
            </a>
          </div>

          <button 
            className="lg:hidden flex flex-col gap-1.5 z-[110] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 w-full h-screen bg-black/98 backdrop-blur-2xl transition-all duration-500 z-[105] ${
        isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold uppercase tracking-[0.3em] text-white hover:text-purple-500 transition-all ${
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-8 mt-12 text-purple-500">
            <FaGithub size={32} />
            <FaDiscord size={32} />
            <FaReddit size={32} />
            <FaTwitter size={32} />
          </div>
        </nav>
      </div>
    </header>
  );
}
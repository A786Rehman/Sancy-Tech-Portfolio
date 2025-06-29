"use client";
import { useState, useEffect } from "react";
import { Link, Menu, X } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
  <a
  href="#home"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("home");
  }}
  className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent 
             hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 cursor-pointer"
>
  <Image 
    src="/favicon.jpg" 
    alt="Sancy Tech Logo" 
    width={32}
    height={32}
    className="object-contain rounded-full"
  />
  SancyTech
</a>
</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 group"
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-slate-700">
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Menu
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 px-6 py-8 space-y-6">
            <button
              onClick={() => scrollToSection("home")}
              className="relative block w-full text-left py-3 px-4 text-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300 group"
            >
              Home
              <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-16"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="relative block w-full text-left py-3 px-4 text-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300 group"
            >
              About Us
              <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-20"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="relative block w-full text-left py-3 px-4 text-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300 group"
            >
              Services
              <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-20"></span>
            </button>

            <button
              onClick={() => scrollToSection("faq")}
              className="relative block w-full text-left py-3 px-4 text-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300 group"
            >
              FAQ
              <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-10"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative block w-full text-left py-3 px-4 text-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300 group"
            >
              Contact Us
              <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-24"></span>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
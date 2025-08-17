"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Container */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Desktop Menu */}
          <div className="hidden md:flex ml-10 space-x-8">
            {["home", "about", "services", "faq", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("faq","FAQ").replace("contact","Contact Us").replace("about","About Us")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-slate-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
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

          {/* Links */}
          <div className="flex-1 px-6 py-8 space-y-6">
            {["home", "about", "services", "faq", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative block w-full text-left py-3 px-4 text-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300 group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("faq","FAQ").replace("contact","Contact Us").replace("about","About Us")}
                <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-20"></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}

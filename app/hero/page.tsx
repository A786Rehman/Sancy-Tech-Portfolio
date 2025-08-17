"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const HeroPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden w-full mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-white leading-tight"
          data-aos="fade-up"
        >
          Inovate
        </h1>
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Your Digital Future
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto px-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Empowering businesses with cutting-edge solutions. Transform your
          ideas into reality with our innovative digital services.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Button
            onClick={() => scrollToSection("services")}
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="w-full sm:w-auto border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Decorative bubbles (responsive size & positions) */}
      <div className="absolute top-16 left-6 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-cyan-500/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-16 right-6 sm:right-10 w-10 sm:w-16 h-10 sm:h-16 bg-purple-500/20 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-pink-500/20 rounded-full animate-bounce delay-500"></div>
    </section>
  );
};

export default HeroPage;

"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const HeroPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
          data-aos="fade-up"
        >
          Inovate
        </h1>
        <h1
          className="text-5xl md:text-7xl font-bold mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Your Digital Future
          </span>
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Empowering businesses with cutting-edge solutions. Transform your
          ideas into reality with our innovative digital services.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Button
            onClick={() => scrollToSection("services")}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-8 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-8 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Decorative animated bubbles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce delay-500"></div>
    </section>
  );
};

export default HeroPage;

"use client";
import HeroPage from "./hero/page";
import FooterPage from "./footer/page";
import ContactPage from "./contact/page";
import FAQSection from "./FAQ/page";
import AboutPage from "./About/page";
import ServicesPage from "./services/page";
import Navbar from "./Navbar/page"; // Import the new Navbar component

export default function SancyTechWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar /> {/* Use the Navbar component here */}
      <HeroPage />
      <AboutPage />
      <ServicesPage />
      <FAQSection />
      <ContactPage />
      <FooterPage />
    </div>
  );
}
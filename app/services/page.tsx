import React from "react";
import {
  Code,
  Smartphone,
  Network,
  Camera,
  Figma,
  TrendingUp,
  ShoppingCart,
  Palette,
  FileText,
  Cloud,
  Shield,
  Video,
  Headphones,
  Languages,
  UserCheck,
  Scale,
  Calculator,
  FactoryIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-700 to-purple-700 bg-clip-text text-transparent mb-4" data-aos="fade-up">
              Our Services
            </h2>

            <div className="flex flex-col items-center space-y-1" data-aos="fade-up">
              <div className="w-24 h-1 bg-cyan-400 rounded-full"></div>
              <div className="w-16 h-1 bg-purple-400 rounded-full"></div>
              <div className="w-10 h-1 bg-cyan-300 rounded-full"></div>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up">
            We offer comprehensive technology solutions to help your business
            thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {/* xl:grid-cols-4 gap-8 */}
          {[
            {
              icon: <Code size={48} />,
              title: "Web Development",
              description:
                "We build responsive and scalable websites tailored to your business goals.",
              image: "/1.webp",
            },
            {
              icon: <Figma size={48} />,
              title: "UI/UX Design",
              description:
                "Crafting intuitive and visually appealing designs for optimal user experience.",
              image: "/UIUX.webp",
            },
            {
              icon: <Network size={48} />,
              title: "Software Quality Assurance (SQA)",
              description:
                "Ensuring your software runs flawlessly through rigorous testing and validation.",
              image: "/SQA.webp",
            },
            {
              icon: <Camera size={48} />,
              title: "SEO (Search Engine Optimization)",
              description:
                "Boost your website’s visibility and traffic with effective SEO strategies.",
              image: "/SEO.jpg",
            },
            {
              icon: <Smartphone size={48} />,
              title: "App Development",
              description:
                "Developing user-friendly mobile applications for Android and iOS platforms.",
              image: "/2.webp",
            },
            {
              icon: <FactoryIcon size={48} />,
              title: "CMS Development (WordPress)",
              description:
                "Creating dynamic and easy-to-manage websites using the WordPress CMS.",
              image: "/WordPress.jpg",
            },
            {
              icon: <ShoppingCart size={48} />,
              title: "Marketing (Social Media)",
              description:
                "Engage and grow your audience with targeted social media marketing.",
              image: "/7.webp",
            },
            {
              icon: <Palette size={48} />,
              title: "DevOps & Automation",
              description:
                "Streamlining your development and operations with CI/CD and automation tools.",
              image: "/Dev.webp",
            },
            {
              icon: <FileText size={48} />,
              title: "Infrastructure Services",
              description:
                "Reliable IT infrastructure solutions for performance, security, and scalability.",
              image: "/infra.jpg",
            },
            {
              icon: <Cloud size={48} />,
              title: "Software Development",
              description:
                "Custom software solutions tailored to your specific business needs.",
              image: "/14.webp",
            },
            {
              icon: <Shield size={48} />,
              title: "Cybersecurity Services",
              description:
                "Protecting your digital assets with advanced security practices and tools.",
              image: "/11.webp",
            },
            {
              icon: <Code size={48} />,
              title: "Cloud Services",
              description:
                "Harness the power of the cloud for agility, scalability, and cost-efficiency.",
              image: "/10.webp",
            },
            {
              icon: <Video size={48} />,
              title: "IT Support & Maintenance",
              description:
                "Providing ongoing technical support and maintenance for uninterrupted operations.",
              image: "/18.webp",
            },
            {
              icon: <Headphones size={48} />,
              title: "Database Services",
              description:
                "Efficient database design, management, and optimization for your data needs.",
              image: "/17.webp",
            },
            {
              icon: <Languages size={48} />,
              title: "E-commerce & Web Solutions",
              description:
                "Build and manage secure, high-converting online stores and web platforms.",
              image: "/16.webp",
            },
            {
              icon: <UserCheck size={48} />,
              title: "Business Intelligence & Reporting",
              description:
                "Transform data into insights with dashboards, analytics, and reporting tools.",
              image: "/bus.webp",
            },
            // {
            //   icon: <Scale size={48} />,
            //   title: "Legal & Consultancy Services",
            //   description:
            //     "We provide expert legal and consultancy services for your business.",
            //   image: "/17.webp",
            // },
            // {
            //   icon: <Calculator size={48} />,
            //   title: "Accounting & Bookkeeping",
            //   description:
            //     "We provide reliable accounting and bookkeeping services for your business.",
            //   image: "/18.webp",
            // },
          ].map((service, index) => (
            <div key={index} data-aos="flip-left">
              <Card className="bg-slate-900/50 border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={`${service.title} project`}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-300 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-center mb-6">
                      {service.description}
                    </p>

                    <div className="flex justify-center">
                      <Button
                        variant="outline"
                        className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  // FAQ data with categories
  const faqData = [
    // General FAQs
    {
      category: "general",
      question: "What is Sancy Tech and what do you do?",
      answer:
        "Sancy Tech is a technology company specializing in innovative software solutions. We help businesses transform their ideas into digital reality through web development, AI solutions, mobile apps, and graphic design services.",
    },
    {
      category: "general",
      question: "Where is Sancy Tech located?",
      answer:
        "We are based in San Francisco, CA, but we work with clients globally. We offer both in-person and remote collaboration options to best serve our clients' needs.",
    },
    {
      category: "general",
      question: "How can I get started with Sancy Tech?",
      answer:
        "Getting started is easy! Simply contact us through our contact form, email, or phone. We'll schedule a free consultation to discuss your project requirements and provide you with a detailed proposal.",
    },

    // Services FAQs
    {
      category: "services",
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel. We also work with AI/ML frameworks and mobile development tools.",
    },
    {
      category: "services",
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages to ensure your applications remain secure, updated, and performing optimally. We provide different tiers of support based on your needs.",
    },
    {
      category: "services",
      question: "Can you work with existing systems and integrate with third-party services?",
      answer:
        "We have extensive experience integrating with various APIs, databases, and third-party services. We can work with your existing infrastructure and enhance it with new capabilities.",
    },

    // Technical FAQs
    {
      category: "technical",
      question: "What is your development process like?",
      answer:
        "We follow an agile development methodology with regular communication, iterative development, and continuous feedback. You'll be involved throughout the process with regular updates and demos.",
    },
    {
      category: "technical",
      question: "How do you ensure the security of applications?",
      answer:
        "Security is a top priority. We implement industry best practices including secure coding standards, regular security audits, encryption, and compliance with relevant security frameworks and regulations.",
    },
    {
      category: "technical",
      question: "Do you provide source code and documentation?",
      answer:
        "Yes, upon project completion, you receive full ownership of the source code along with comprehensive documentation, deployment guides, and technical specifications.",
    },

    // Pricing FAQs
    {
      category: "pricing",
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      category: "pricing",
      question: "What are your pricing models?",
      answer:
        "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. The best option depends on your project scope and requirements. We provide transparent pricing with no hidden fees.",
    },
    {
      category: "pricing",
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment plans for larger projects. Typically, we work with milestone-based payments or monthly installments to make our services accessible and manageable for your budget.",
    },
  ]

  // Filter FAQs based on active category
  const filteredFaqs = activeCategory === "all" ? faqData : faqData.filter((faq) => faq.category === activeCategory)

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4" data-aos="fade-up" data-aos-duration="1000">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300" data-aos="fade-up" data-aos-duration="1000">Get answers to common questions about our services and process</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12" >
          {[
            { id: "all", label: "All" },
            { id: "general", label: "General" },
            { id: "services", label: "Services" },
            { id: "technical", label: "Technical" },
            { id: "pricing", label: "Pricing" },
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                  : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="space-y-4" >
          {filteredFaqs.map((faq, index) => (
            <Collapsible key={index} className="bg-slate-900/50 rounded-lg border border-slate-700">
              <CollapsibleTrigger className="flex justify-between items-center w-full p-6 text-left hover:bg-slate-800/50 transition-colors duration-300">
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown className="h-5 w-5 text-cyan-400 transition-transform duration-300" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  )
}

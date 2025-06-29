import React from 'react'

const AboutPage = () => {
  return (
     <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent" data-aos="fade-right" data-aos-duration="1000">
    About Sancy Tech
  </h2>
  
  
  <div className="mt-2 space-y-1" data-aos="fade-right" data-aos-duration="1000">
    <div className="w-16 h-1 bg-pink-500 rounded-full"></div>
    <div className="w-24 h-1 bg-purple-500 rounded-full"></div>
    <div className="w-12 h-1 bg-pink-400 rounded-full"></div>
  </div>
</div>
              <h2 className="text-2xl md:text-2.5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" data-aos="fade-right" data-aos-duration="1000">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed" data-aos="fade-right" data-aos-duration="1000">
                Our mission is to drive innovation and transform businesses
                through cutting-edge technology.
              </p>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-duration="1000">
              <div className="w-full h-96 rounded-2xl flex items-center justify-center overflow-hidden group">
                <img
                  src="/mission.webp"
                  alt="Sancy Tech Innovation"
                  className="w-80 h-64 object-cover rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-2xl group-hover:shadow-cyan-500/25"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
            <div className="relative" data-aos="fade-right" data-aos-duration="1000">
              <div className="w-full h-96 rounded-2xl flex items-center justify-center overflow-hidden group">
                <img
                  src="/vision.webp"
                  alt="Sancy Tech Innovation"
                  className="w-80 h-64 object-cover rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-2xl group-hover:shadow-cyan-500/25"
                />
              </div>
            </div>

           
            <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We envision a future where digital solutions create seamless
                experiences and empower communities.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-2.5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" data-aos="fade-right" data-aos-duration="1000">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed" data-aos="fade-right" data-aos-duration="1000">
                Founded in 2025, Sancy Tech emerged from a vision to transform
                how businesses interact with technology. Our journey began with
                a small team of passionate developers and has grown into a
                full-service digital agency.
              </p>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-duration="1000">
              <div className="w-full h-96 rounded-2xl flex items-center justify-center overflow-hidden group">
                <img
                  src="/our-story.webp"
                  alt="Sancy Tech Innovation"
                  className="w-80 h-64 object-cover rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-2xl group-hover:shadow-cyan-500/25"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default AboutPage
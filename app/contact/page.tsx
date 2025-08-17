import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'
const ContactPage = () => {
  return (
    <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Contact us today and let's
              discuss how we can help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-cyan-500/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-300">info@sancytech.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+92 327 967 3671</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-pink-500/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Sancy Tech Technology City Karachi</p>
                </div>
              </div>
            </div>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <form action="https://formspree.io/f/xzzvqeak" method="POST" className="space-y-4">
              {/* Redirect after submission */}
              <input type="hidden" name="_next" value="https://sancy-tech-portfolio.vercel.app/" />
                  <div>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Sancytech"
                      className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      id="message"
                      name="message"
                     placeholder="Your Message"
                      rows={5}
                      className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default ContactPage
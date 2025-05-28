import React, { useState } from 'react'
import { MapPin, Quote } from 'lucide-react'

export default function Hero() {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-[#22223b] mb-4 tracking-tight">
            Maxime VÉRY
          </h1>
          <div className="w-24 h-1 bg-[#9a8c98] mx-auto mb-6"></div>
        </div>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-[#4a4e69] font-medium mb-6 max-w-2xl mx-auto">
          Manager de Projet Informatique en Alternance
        </h2>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-[#4a4e69] mb-12">
          <MapPin className="w-5 h-5" />
          <span className="text-lg">Pérignat-lès-Sarlièves, Auvergne-Rhône-Alpes, France</span>
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setIsQuoteVisible(!isQuoteVisible)}
            className="group flex items-center justify-center gap-3 mx-auto mb-8 px-6 py-3 bg-[#22223b] text-white rounded-full hover:bg-[#4a4e69] transition-all duration-300 transform hover:scale-105"
          >
            <Quote className="w-5 h-5" />
            <span className="font-medium">Philosophie</span>
          </button>

          <div className={`transition-all duration-500 ease-in-out ${
            isQuoteVisible ? 'opacity-100 max-h-96 mb-8' : 'opacity-0 max-h-0 overflow-hidden'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <Quote className="w-8 h-8 text-[#9a8c98] mx-auto mb-4" />
              <blockquote className="text-lg md:text-xl text-[#22223b] leading-relaxed italic mb-4">
                "Votre travail va remplir une grande partie de votre vie, et la seule façon d'être vraiment satisfait est de faire ce que vous croyez être un grand travail. Et la seule façon de faire du grand travail est d'aimer ce que vous faites"
              </blockquote>
              <cite className="text-[#4a4e69] font-medium">- Steve Jobs</cite>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#9a8c98] opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#4a4e69] opacity-10 rounded-full blur-xl"></div>
      </div>
    </section>
  )
}
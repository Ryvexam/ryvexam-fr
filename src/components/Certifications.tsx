import React from 'react'
import { Award, Calendar, ExternalLink } from 'lucide-react'

export default function Certifications() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#22223b] mb-4">
            Certifications
          </h2>
          <p className="text-lg text-[#4a4e69] max-w-2xl mx-auto">
            Professional certifications and achievements in information technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder certification cards */}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-[#9a8c98] to-[#4a4e69] rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-[#4a4e69] opacity-50" />
              </div>
              
              <h3 className="text-xl font-semibold text-[#22223b] mb-2">
                Certification Title
              </h3>
              
              <p className="text-[#4a4e69] mb-4">
                Issuing Organization
              </p>
              
              <div className="flex items-center text-sm text-[#4a4e69] mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Issue Date</span>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <span className="inline-block px-3 py-1 bg-[#9a8c98]/10 text-[#22223b] text-sm rounded-full">
                  Technology Area
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Content notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#9a8c98]/10 rounded-lg">
            <Award className="w-5 h-5 text-[#4a4e69] mr-2" />
            <span className="text-[#4a4e69] text-sm">
              Certification details to be updated with actual credentials
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
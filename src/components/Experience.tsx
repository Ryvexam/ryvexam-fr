import React from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#22223b] mb-4">
            Experience
          </h2>
          <p className="text-lg text-[#4a4e69] max-w-2xl mx-auto">
            Professional journey and career milestones
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 md:p-12">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#9a8c98] to-[#4a4e69] rounded-full flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#22223b]">
                Experience Content Needed
              </h3>
              <p className="text-[#4a4e69] max-w-md">
                This section is ready to showcase your professional experience, 
                work history, and career achievements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl mt-8">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-6 h-6 text-[#9a8c98] mb-2" />
                <span className="text-sm text-[#4a4e69] font-medium">Timeline</span>
                <span className="text-xs text-gray-500">Career progression</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Briefcase className="w-6 h-6 text-[#9a8c98] mb-2" />
                <span className="text-sm text-[#4a4e69] font-medium">Positions</span>
                <span className="text-xs text-gray-500">Roles & responsibilities</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-6 h-6 text-[#9a8c98] mb-2" />
                <span className="text-sm text-[#4a4e69] font-medium">Companies</span>
                <span className="text-xs text-gray-500">Organizations</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Add your professional experience details to complete this section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
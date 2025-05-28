import React from 'react'
import { Users } from 'lucide-react'

export default function Team() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#22223b] to-[#4a4e69] flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#22223b] mb-4">
              Team Section
            </h2>
            <p className="text-[#4a4e69] text-lg leading-relaxed">
              This section is currently being developed.
            </p>
          </div>
          
          <div className="mt-8 w-full max-w-sm">
            <div className="h-1 bg-gradient-to-r from-transparent via-[#9a8c98] to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
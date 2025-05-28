import React from 'react'
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js"]
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: ["Node.js", "Python", "API Development", "Database Design"]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "iOS", "Android", "Cross-platform"]
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: ["SQL", "NoSQL", "Git", "Docker", "Cloud Services"]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: ["Figma", "Adobe Creative Suite", "Responsive Design", "Prototyping"]
    }
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#22223b' }}>
            Technical Skills
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4a4e69' }}>
            A comprehensive overview of technical competencies and expertise areas.
            <span className="block mt-2 text-sm italic opacity-75">
              Note: This section requires specific skills data from the website owner.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-opacity-50"
                style={{ borderColor: '#9a8c98' }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: '#9a8c98', opacity: 0.1 }}
                  >
                    <IconComponent 
                      className="w-6 h-6" 
                      style={{ color: '#22223b' }}
                    />
                  </div>
                  <h3 
                    className="text-lg font-semibold"
                    style={{ color: '#22223b' }}
                  >
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <span 
                        className="text-sm font-medium"
                        style={{ color: '#4a4e69' }}
                      >
                        {skill}
                      </span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-300"
                          style={{ 
                            backgroundColor: '#9a8c98',
                            width: `${Math.floor(Math.random() * 30) + 70}%`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div 
            className="inline-block px-6 py-3 rounded-lg border-2 border-dashed"
            style={{ borderColor: '#9a8c98', backgroundColor: 'rgba(154, 140, 152, 0.05)' }}
          >
            <p 
              className="text-sm font-medium"
              style={{ color: '#4a4e69' }}
            >
              💡 This skills section uses placeholder content. 
              <br className="hidden sm:block" />
              Please update with actual technical skills and proficiency levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
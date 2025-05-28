import React from 'react'
import { Code, Server, Settings, BarChart3, Shield, Brain } from 'lucide-react'

interface Skill {
  name: string;
  percentage: number;
}

interface ServiceItem {
  title: string;
  skills: Skill[];
  icon: React.ReactNode;
}

const parseSkills = (description: string): Skill[] => {
  const skillPattern = /([^%]+?)(\d+)%/g;
  const skills: Skill[] = [];
  let match;
  
  while ((match = skillPattern.exec(description)) !== null) {
    skills.push({
      name: match[1].trim(),
      percentage: parseInt(match[2])
    });
  }
  
  return skills;
};

export default function Services() {
  const serviceItems: ServiceItem[] = [
    {
      title: "Développement Frontend",
      skills: parseSkills("React.js85%JavaScript/TypeScript80%Tailwind CSS85%WordPress75%"),
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Développement Backend", 
      skills: parseSkills("PHP/Symfony80%Python85%Node.js70%Java65%C#/.NET30%"),
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "DevOps",
      skills: parseSkills("Linux80%Docker80%Nginx/Apache65%CI/CD60%Powershell60%"),
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Outils Business",
      skills: parseSkills("PowerBI75%PowerApps75%Pandas85%Streamlit90%"),
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Cybersécurité",
      skills: parseSkills("Sensibilisation85%Sécurité Web75%Automatisation SecOps70%"),
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Données & Intelligence Artificielle",
      skills: parseSkills("MySQL80%Git80%Power Automate70%Prompting avancé85%Intégration d'API LLM75%"),
      icon: <Brain className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#22223b' }}>
            Compétences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div 
                  className="p-3 rounded-lg mr-4"
                  style={{ backgroundColor: '#9a8c98', color: 'white' }}
                >
                  {service.icon}
                </div>
                <h3 
                  className="text-xl font-semibold"
                  style={{ color: '#22223b' }}
                >
                  {service.title}
                </h3>
              </div>

              <div className="space-y-4">
                {service.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span 
                        className="text-sm font-medium"
                        style={{ color: '#4a4e69' }}
                      >
                        {skill.name}
                      </span>
                      <span 
                        className="text-sm font-bold"
                        style={{ color: '#22223b' }}
                      >
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.percentage}%`,
                          background: `linear-gradient(90deg, #22223b 0%, #4a4e69 50%, #9a8c98 100%)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
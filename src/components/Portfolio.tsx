import React from 'react'
import { ExternalLink, Globe } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  url: string
  tags: string[]
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: "Qroissantage.fr",
      description: "Un site web éducatif conçu pour sensibiliser les professionnels aux dangers des QR codes malveillants. Le projet simule un 'croissantage' (tradition de bureau d'apporter des croissants) en incitant les utilisateurs à scanner un QR code, démontrant ainsi les risques potentiels.",
      image: "../assets/image/qroissantage.png",
      url: "https://qroissantage.fr",
      tags: ["Cybersécurité", "Sensibilisation", "React", "QR Codes"]
    },
    {
      title: "Tert.io",
      description: "Mon premier projet d'envergure avec Symfony, réalisé pour Tertio Informatique à Moulins. Ce site représentait un défi technique significatif qui m'a permis d'approfondir mes compétences en développement PHP/Symfony tout en livrant une interface moderne et responsive pour valoriser les services de l'entreprise.",
      image: "../assets/image/tertio.webp",
      url: "https://tert.io",
      tags: ["Symfony", "PHP", "Challenge technique", "Responsive"]
    },
    {
      title: "RyveIT",
      description: "Blog d'actualité informatique développé avec WordPress, proposant des astuces, des bons plans et des tutoriels pour aider les lecteurs à rester informés des dernières tendances technologiques et à améliorer leurs compétences informatiques.",
      image: "../assets/image/ryveit.png",
      url: "https://ryveit.com",
      tags: ["WordPress", "Blog Tech", "Tutoriels", "Bons Plans"]
    },
    {
      title: "HelloAsso No Donation",
      description: "Une extension de navigateur qui supprime automatiquement le don par défaut sur HelloAsso, conçue pour aider les étudiants en période difficile.",
      image: "../assets/image/helloassonodonation.png",
      url: "",
      tags: ["Firefox Add-on", "Chrome Web Store"]
    }
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#22223b' }}>
            Projets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#f3f4f6"/>
                        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#6b7280" font-family="Arial" font-size="16">${project.title}</text>
                      </svg>
                    `)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold" style={{ color: '#22223b' }}>
                    {project.title}
                  </h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      style={{ color: '#4a4e69' }}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full text-white"
                      style={{ backgroundColor: '#9a8c98' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.title === "HelloAsso No Donation" && (
                  <div className="flex gap-3 mt-4">
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                      <Globe size={16} style={{ color: '#4a4e69' }} />
                      <span className="text-sm font-medium" style={{ color: '#22223b' }}>
                        Firefox Add-on
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                      <Globe size={16} style={{ color: '#4a4e69' }} />
                      <span className="text-sm font-medium" style={{ color: '#22223b' }}>
                        Chrome Web Store
                      </span>
                    </div>
                  </div>
                )}

                {project.url && project.title !== "HelloAsso No Donation" && (
                  <div className="mt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity duration-200"
                      style={{ backgroundColor: '#22223b' }}
                    >
                      Visiter le site
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import React from 'react'
import { User, Briefcase, GraduationCap, Code, Heart } from 'lucide-react'

export default function About() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#22223b] mb-4">À Propos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4a4e69] to-[#9a8c98] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="../assets/image/profil_pic.png" 
                  alt="Maxime VÉRY"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#4a4e69] to-[#9a8c98] rounded-full flex items-center justify-center shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Section */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#22223b] to-[#4a4e69] rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#22223b]">Expérience</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Python Developer chez Michelin, 2 ans d'administration système et réseau à Tertio Informatique, activité freelance en développement web, et expérience en cybersécurité avec Qroissantage.fr.
              </p>
            </div>

            {/* Formation Section */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4a4e69] to-[#9a8c98] rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#22223b]">Formation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                En préparation du titre Manager de Projet Informatique (RNCP38905), après l'obtention du titre Concepteur Développeur d'Applications (RNCP37873), BTS SIO option SISR, et Bac S spécialité ISN.
              </p>
            </div>

            {/* Technical Skills Section */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9a8c98] to-[#22223b] rounded-lg flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#22223b]">Compétences Techniques</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Développement web fullstack (React, Symfony), automatisation Python, DevOps (Docker, Linux), cybersécurité, et outils d'analyse de données (PowerBI, Pandas, Streamlit).
              </p>
            </div>

            {/* About Me Section */}
            <div className="bg-gradient-to-br from-[#22223b] to-[#4a4e69] rounded-xl p-6 shadow-lg text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">À propos de moi</h3>
              </div>
              <div className="space-y-4 text-gray-100 leading-relaxed">
                <p>
                  Passionné par l'informatique depuis mon plus jeune âge, j'ai développé une expertise polyvalente alliant développement web, automatisation Python, et cybersécurité. Mon parcours chez Michelin m'a permis de perfectionner mes compétences en développement Python et d'automatisation avec Streamlit, tandis que mon expérience en administration système m'a donné une vision globale de l'infrastructure IT.
                </p>
                <p>
                  Actuellement en poste chez Michelin dans l'équipe SecByDesign, je combine mes compétences techniques avec une vision stratégique de la sécurité. En parallèle, je prépare un titre de Manager de Projet Informatique pour renforcer mes compétences en gestion de projet. Je suis particulièrement intéressé par les technologies qui allient innovation, performance et sécurité - comme le démontre mon projet Qroissantage.fr axé sur la sensibilisation à la cybersécurité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
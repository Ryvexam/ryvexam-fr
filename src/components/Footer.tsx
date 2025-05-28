import React from 'react'
import { Linkedin, Github, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#22223b] text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Portfolio VERY Maxime</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Développeur passionné spécialisé dans les technologies de l'information.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-[#9a8c98]" />
                <a 
                  href="mailto:maximevery@ryvexam.fr"
                  className="hover:text-[#9a8c98] transition-colors duration-200"
                >
                  maximevery@ryvexam.fr
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-[#9a8c98] mt-0.5" />
                <span className="text-sm">
                  Pérignat les Sarlièves, Auvergne-Rhône-Alpes
                </span>
              </div>
            </div>
          </div>

          {/* Social Media & Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Suivez-moi</h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/maxime-very/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#9a8c98] transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/ryvexam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#9a8c98] transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:maximevery@ryvexam.fr"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#9a8c98] transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Email Professionnel</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#4a4e69] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 Ryveweb. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/maxime-very/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4a4e69] rounded-full flex items-center justify-center hover:bg-[#9a8c98] transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://github.com/ryvexam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4a4e69] rounded-full flex items-center justify-center hover:bg-[#9a8c98] transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:maximevery@ryvexam.fr"
                className="w-10 h-10 bg-[#4a4e69] rounded-full flex items-center justify-center hover:bg-[#9a8c98] transition-colors duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
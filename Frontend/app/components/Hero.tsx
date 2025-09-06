import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Profile } from '../types'
import { urlFor, fileUrl } from '../lib/sanity'

interface HeroProps {
  profile: Profile
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden" style={{ paddingTop: '120px' }}>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-120px)] flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Sol taraf - Fotoğraf ve kişisel bilgiler */}
          <div className="text-center lg:text-left animate-fadeInUp">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center hover-lift hover:animate-pulse-glow transition-all duration-500 group">
                {profile.profileImage ? (
                  <Image
                    src={urlFor(profile.profileImage).width(200).height(200).url()}
                    alt={profile.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-white text-6xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
                Merhaba, Ben {profile.name}
              </h1>
              <p className="text-lg text-blue-600 font-semibold mb-2 hover:text-blue-700 transition-colors duration-300">
                {profile.title}
              </p>
              <p className="text-xl text-gray-600 mb-6 hover:text-gray-700 transition-colors duration-300">
                {profile.subtitle}
              </p>
            </div>

            {profile.highlights && profile.highlights.length > 0 && (
              <div className="space-y-4 mb-8">
                {profile.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center lg:justify-start space-x-4 text-gray-600 hover:text-gray-800 transition-all duration-300 hover:translate-x-2 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300"></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Link
                href="/#projects"
                className="flex justify-center gap-2 border border-gray-300 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                Projelerimi İncele
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
              </Link>
              <Link
                href="#contact"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                İletişime Geç
              </Link>
            </div>
          </div>

          {/* Sağ taraf - Sosyal medya ve ek bilgiler */}
          <div className="space-y-8 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover-lift hover:bg-white/90 transition-all duration-500 group">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Tanışalım!
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                {profile.aboutText || 'iOS geliştirme konusunda tutkulu bir yazılım geliştiriciyim. Kullanıcı deneyimini ön planda tutarak, modern teknolojilerle yenilikçi mobil uygulamalar geliştiriyorum.'}
              </p>
              {profile.stats && profile.stats.length > 0 && (
                <div className="grid grid-cols-2 gap-4 text-center">
                  {profile.stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`rounded-lg p-4 hover-scale cursor-pointer transition-all duration-300 hover:shadow-md ${stat.color === 'blue' ? 'bg-blue-50 hover:bg-blue-100' :
                          stat.color === 'green' ? 'bg-green-50 hover:bg-green-100' :
                            stat.color === 'purple' ? 'bg-purple-50 hover:bg-purple-100' :
                              'bg-orange-50 hover:bg-orange-100'
                        }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`text-2xl font-bold transition-all duration-300 hover:scale-110 ${stat.color === 'blue' ? 'text-blue-600' :
                          stat.color === 'green' ? 'text-green-600' :
                            stat.color === 'purple' ? 'text-purple-600' :
                              'text-orange-600'
                        }`}>
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 space-y-4 sm:space-y-0 sm:space-x-6 mb-4">
          
              {/* Social Links */}
              {profile.socialLinks && (
                <>
                  {profile.socialLinks.github && (
                    <a
                      href={profile.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-all duration-300 px-4 py-3 bg-white rounded-full shadow-md hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 group flex items-center justify-center"
                    >
                      <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  )}
                  {profile.socialLinks.linkedin && (
                    <a
                      href={profile.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-all duration-300 px-4 py-3 bg-white rounded-full shadow-md hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 group flex items-center justify-center"
                    >
                      <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  )}
                  {profile.socialLinks.email && (
                    <a
                      href={`mailto:${profile.socialLinks.email}`}
                      className="text-gray-600 hover:text-blue-600 transition-all duration-300 px-4 py-3 bg-white rounded-full shadow-md hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 group flex items-center justify-center"
                    >
                      <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  )}
                  {profile.cv && (
                <a
                  href={fileUrl(profile.cv)}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-gray-300 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                >
                  <Download size={20} className="group-hover:animate-pulse" />
                  <span>CV Görüntüle</span>
                </a>
              )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">iOS & Frontend Web Geliştirici</h3>
            <p className="text-gray-400 mb-4">
              Harika, inovatif, kullanıcı dostu iOS ve Frontend Web uygulamaları geliştiriyorum.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/efemesudiyeli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/efemesudiyeli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="mailto:efemesudiyeli@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımda
                </Link>
              </li>
              <li>
                  <Link href="/#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-gray-400 hover:text-white transition-colors">
                  Yetenekler
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim Bilgileri</h4>
            <div className="space-y-2 text-gray-400">
              <p>efemesudiyeli@gmail.com</p>
              <p>Ankara, Türkiye</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} - All rights reserved. Built by Efe Mesudiyeli</p>
        </div>
      </div>
    </footer>
  )
}

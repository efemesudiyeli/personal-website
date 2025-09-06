import { Skill } from '../types'
import Image from 'next/image'
import { urlFor } from '../lib/sanity'

interface SkillsProps {
  skills: Skill[]
}

const categoryLabels = {
  ios: 'iOS Geliştirme',
  frontend: 'Frontend Web Geliştirme',
}

export default function Skills({ skills }: SkillsProps) {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  // Sort skills by order within each category
  Object.keys(skillsByCategory).forEach(category => {
    skillsByCategory[category].sort((a, b) => a.order - b.order)
  })

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
            Yetenekler & Teknolojiler
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300">
            Uygulamalarımı geliştirirken kullandığım teknolojiler
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {['ios', 'frontend'].map((category, categoryIndex) => {
            const categorySkills = skillsByCategory[category] || []
            if (categorySkills.length === 0) return null
            
            return (
              <div 
                key={category} 
                className="space-y-6 animate-fadeInUp"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="text-center group">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>
                  <div className={`w-20 h-1 mx-auto rounded transition-all duration-300 group-hover:w-32 ${
                    category === 'ios' ? 'bg-blue-500 group-hover:bg-blue-600' : 'bg-green-500 group-hover:bg-green-600'
                  }`}></div>
                </div>
                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <div 
                      key={skill._id} 
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg hover-lift transition-all duration-300 group border border-transparent hover:border-blue-200"
                      style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 50)}ms` }}
                    >
                      {(skill.icon || skill.asset) && (
                        <div className="flex-shrink-0">
                          <div className="p-2 rounded-lg bg-white shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                            <Image
                              src={skill.asset ? urlFor(skill.asset).width(48).height(48).url() : skill.icon!}
                              alt={skill.name}
                              width={48}
                              height={48}
                              className="w-12 h-12 group-hover:animate-pulse"
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex-1">
                        <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-1 transform inline-block">
                          {skill.name}
                        </span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`w-2 h-2 rounded-full ${
                          category === 'ios' ? 'bg-blue-500' : 'bg-green-500'
                        } animate-pulse`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {skills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Skills will be loaded from Sanity CMS
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

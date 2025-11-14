import { 
  Youtube, 
  Music, 
  Instagram, 
  Book, 
  Utensils, 
  GraduationCap, 
  Palette,
  BookOpen
} from 'lucide-react'

const useCases = [
  {
    icon: Youtube,
    title: 'YouTube Videos',
    description: 'Save videos for later watching and organize by topic',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Music,
    title: 'TikTok Collections',
    description: 'Curate your favorite TikToks by mood or theme',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: Instagram,
    title: 'Instagram Content',
    description: 'Keep track of inspiring posts and Reels',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Book,
    title: 'Articles & Blogs',
    description: 'Bookmark reading material with auto-extracted previews',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Utensils,
    title: 'Recipe Collections',
    description: 'Build your cookbook from various cooking sites',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: GraduationCap,
    title: 'Tutorial Videos',
    description: 'Organize learning resources and how-to guides',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Palette,
    title: 'Design Inspiration',
    description: 'Collect creative references from around the web',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: BookOpen,
    title: 'Research Material',
    description: 'Manage sources with notes and categorization',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50'
  }
]

export const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Endless <span className="text-gradient">Possibilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From content creators to lifelong learners, TalkClip adapts to your needs
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon
            return (
              <div 
                key={idx}
                className={`group ${useCase.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-200`}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${useCase.color} shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


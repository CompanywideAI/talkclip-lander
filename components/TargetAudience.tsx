import { 
  Lightbulb, 
  GraduationCap, 
  Search, 
  Sparkles, 
  Briefcase, 
  BookOpen 
} from 'lucide-react'

const audiences = [
  {
    icon: Lightbulb,
    title: 'Content Creators',
    description: 'Save research, inspiration, and reference material for your next project',
    features: ['Research library', 'Inspiration boards', 'Reference collections']
  },
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Organize educational videos, articles, and study resources',
    features: ['Course materials', 'Study guides', 'Research sources']
  },
  {
    icon: Search,
    title: 'Researchers',
    description: 'Catalog sources, references, and findings with detailed notes',
    features: ['Source management', 'Citation ready', 'Note-taking']
  },
  {
    icon: Sparkles,
    title: 'Social Media Enthusiasts',
    description: 'Keep your favorite TikToks, Reels, and viral content organized',
    features: ['Trending content', 'Personal feeds', 'Share collections']
  },
  {
    icon: Briefcase,
    title: 'Knowledge Workers',
    description: 'Build a personal knowledge base of articles and insights',
    features: ['Industry news', 'Best practices', 'Learning resources']
  },
  {
    icon: BookOpen,
    title: 'Lifelong Learners',
    description: 'Curate tutorials, courses, and learning materials by topic',
    features: ['Skill development', 'Tutorial library', 'Learning paths']
  }
]

export const TargetAudience = () => {
  return (
    <section id="for-who" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who Is <span className="text-gradient">TalkClip</span> For?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're learning, creating, or exploring, TalkClip helps you stay organized
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, idx) => {
            const Icon = audience.icon
            return (
              <div 
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
              >
                {/* Icon */}
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{audience.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{audience.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {audience.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


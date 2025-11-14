import { Link as LinkIcon, Sparkles, FolderOpen, Share2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: LinkIcon,
    title: 'Save Content',
    description: 'Copy any URL from TikTok, YouTube, Instagram, or any website. TalkClip automatically fetches the title, description, and thumbnail.',
    color: 'from-primary-500 to-primary-600'
  },
  {
    number: '02',
    icon: FolderOpen,
    title: 'Organize',
    description: 'Create custom collections, add tags, mark favorites, and write personal notes. Build your content library your way.',
    color: 'from-accent-500 to-accent-600'
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Discover',
    description: 'Use powerful search and filters to find exactly what you\'re looking for. Sort, filter, and browse with beautiful thumbnail previews.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    number: '04',
    icon: Share2,
    title: 'Access Anywhere',
    description: 'View your recent clips right from your home screen with widgets. Export and backup your entire library anytime.',
    color: 'from-green-500 to-green-600'
  }
]

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to never lose track of great content again
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const StepIcon = step.icon
            return (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
                )}

                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <StepIcon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


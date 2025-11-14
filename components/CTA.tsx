import { Smartphone, Download, Sparkles } from 'lucide-react'

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl shadow-2xl flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Organized?
        </h2>
        <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
          Join thousands of users who never lose track of great content. 
          Download TalkClip today and start building your personal content library.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-primary-600 bg-white hover:bg-gray-50 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-0.5 group">
            <Smartphone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Download for iOS
          </button>
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white border-2 border-white border-opacity-40 hover:border-opacity-100 hover:bg-white hover:bg-opacity-10 transition-all duration-200 backdrop-blur-sm">
            <Download className="w-5 h-5 mr-2" />
            Coming Soon
          </button>
        </div>

        {/* Features List */}
        <div className="flex flex-wrap justify-center gap-6 text-white text-sm">
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-white mr-2" />
            No credit card required
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-white mr-2" />
            All features included
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-white mr-2" />
            iOS 16+ required
          </div>
        </div>
      </div>
    </section>
  )
}


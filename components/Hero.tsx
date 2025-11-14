import { Smartphone, Sparkles } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20 pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* App Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/branding/icon-talk-clip@2x.webp" 
                  alt="TalkClip App Icon" 
                  className="w-full h-full"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Your Personal</span>
            <br />
            <span className="text-gray-900">Content Library</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Save, organize, and rediscover your favorite online content. 
            Never lose track of that interesting TikTok, YouTube video, or article again!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary group">
              <Smartphone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Download on App Store
            </button>
            <button className="btn-secondary">
              Watch Demo
            </button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="px-6">
              <div className="text-3xl font-bold text-primary-600">Unlimited</div>
              <div className="text-sm text-gray-600">Clips & Collections</div>
            </div>
            <div className="px-6">
              <div className="text-3xl font-bold text-primary-600">iOS 16+</div>
              <div className="text-sm text-gray-600">iPhone & iPad</div>
            </div>
            <div className="px-6">
              <div className="text-3xl font-bold text-primary-600">Free</div>
              <div className="text-sm text-gray-600">All Features Included</div>
            </div>
          </div>
        </div>

        {/* App Preview */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur-3xl opacity-20" />
            <div className="relative rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto">
              <img 
                src="/screenshots/gfx-app-main-screen.webp" 
                alt="TalkClip App - Main Screen showing content library with thumbnails" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


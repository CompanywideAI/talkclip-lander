import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Target, Users, Zap, Shield, Heart, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - TalkClip',
  description: 'Learn about TalkClip and our mission to help you save, organize, and rediscover your favorite online content.',
  openGraph: {
    title: 'About Us - TalkClip',
    description: 'Learn about TalkClip and our mission to help you save, organize, and rediscover your favorite online content.',
  },
}

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <img 
              src="/branding/icon-talk-clip@2x.webp" 
              alt="TalkClip" 
              className="w-12 h-12"
            />
            <h1 className="text-3xl font-bold text-gray-900">About TalkClip</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Personal Content Library
          </h2>
          <p className="text-xl text-indigo-100 leading-relaxed max-w-3xl">
            TalkClip is designed to help you save, organize, and rediscover the content that matters most to you. 
            Whether it&apos;s an inspiring TikTok, an informative YouTube video, or an insightful article, 
            TalkClip keeps everything in one beautifully organized place.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-12">
        
        {/* Our Story */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              In today&apos;s digital age, we consume more content than ever before—videos, articles, podcasts, and more. 
              But how often do you come across something incredible, save it &quot;for later,&quot; and then never find it again?
            </p>
            <p>
              That&apos;s exactly the problem we set out to solve. TalkClip was born from our own frustration with scattered 
              bookmarks, lost links, and disorganized content across multiple platforms. We wanted a simple, elegant solution 
              that would help us save content from anywhere and access it anytime, all in one place.
            </p>
            <p>
              Built by the team at <strong>Companywide AI, LLC</strong>, TalkClip leverages modern technology to create 
              a seamless experience for content curation. Whether you&apos;re a student, professional, content creator, or 
              just someone who loves to learn, TalkClip helps you build your own personal content library.
            </p>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To empower people to capture, organize, and rediscover the online content that inspires, educates, 
              and entertains them—making valuable information accessible whenever it&apos;s needed.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To become the go-to platform for personal content curation, helping millions of users build their 
              own knowledge libraries and never lose track of valuable content again.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Simplicity */}
            <div className="text-center">
              <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-4">
                <Zap className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Simplicity</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe great tools should be effortless to use. TalkClip is designed with intuitive interfaces 
                that make content curation feel natural.
              </p>
            </div>

            {/* Privacy */}
            <div className="text-center">
              <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-4">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy First</h3>
              <p className="text-gray-600 leading-relaxed">
                Your content is yours. We take data privacy seriously and never sell your information. Your library 
                is secure and private.
              </p>
            </div>

            {/* User-Centric */}
            <div className="text-center">
              <div className="inline-flex p-4 bg-pink-100 rounded-2xl mb-4">
                <Heart className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">User-Centric</h3>
              <p className="text-gray-600 leading-relaxed">
                Every feature we build is driven by user feedback. We&apos;re committed to creating tools that 
                genuinely improve your digital life.
              </p>
            </div>

          </div>
        </section>

        {/* What We Do */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Save Content from Anywhere</h3>
                <p className="text-gray-700 leading-relaxed">
                  Easily save videos, articles, and links from TikTok, YouTube, Instagram, Twitter, and more with 
                  our Share Extension or in-app browser.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Organize with Smart Categories</h3>
                <p className="text-gray-700 leading-relaxed">
                  Create custom categories, add tags, and use powerful search to keep your content library organized 
                  and easily accessible.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rediscover When You Need It</h3>
                <p className="text-gray-700 leading-relaxed">
                  Find exactly what you&apos;re looking for with intelligent search and browse your beautifully 
                  organized library anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Who We Serve</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-indigo-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Students & Researchers</h3>
              <p className="text-gray-700 leading-relaxed">
                Keep track of educational videos, research articles, and study materials all in one place.
              </p>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Content Creators</h3>
              <p className="text-gray-700 leading-relaxed">
                Save inspiration, reference materials, and trending content for your next creative project.
              </p>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professionals</h3>
              <p className="text-gray-700 leading-relaxed">
                Organize industry insights, training videos, and resources relevant to your career.
              </p>
            </div>
            
            <div className="p-6 bg-pink-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lifelong Learners</h3>
              <p className="text-gray-700 leading-relaxed">
                Build your personal knowledge base with content from your diverse interests and hobbies.
              </p>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Information</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Company Name:</p>
              <p>Companywide AI, LLC</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Product:</p>
              <p>TalkClip - Your Personal Content Library</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Platform:</p>
              <p>iOS Mobile Application (iPhone and iPad)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Contact:</p>
              <p>
                Email: <a href="mailto:hello@talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">hello@talkclip.com</a>
              </p>
              <p>
                Website: <a href="https://talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">https://talkclip.com</a>
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Connect With Us:</p>
              <div className="flex gap-4 mt-2">
                <a 
                  href="https://twitter.com/talkclip" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 underline"
                >
                  Twitter
                </a>
                <a 
                  href="https://github.com/CompanywideAI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 underline"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/company/companywideai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Organizing Your Content?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already transformed the way they save and organize online content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/app/talkclip" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Download on the App Store
            </a>
            <Link 
              href="/support"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-700 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-colors border-2 border-white/20"
            >
              Contact Support
            </Link>
          </div>
        </section>

      </main>
    </div>
  )
}

export default AboutPage


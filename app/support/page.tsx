import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail, MessageCircle, FileQuestion, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Support & Contact - TalkClip',
  description: 'Get help with TalkClip or contact our support team. We\'re here to help!',
  openGraph: {
    title: 'Support & Contact - TalkClip',
    description: 'Get help with TalkClip or contact our support team. We\'re here to help!',
  },
}

const SupportPage = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">Support & Contact</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Can We Help You?
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            We&apos;re here to help! Whether you have a question, need technical support, or want to provide feedback, 
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-12">
        
        {/* Contact Options */}
        <section className="grid md:grid-cols-3 gap-6">
          
          {/* Email Support */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex p-4 bg-indigo-100 rounded-2xl mb-4">
              <Mail className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Email Support</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Send us an email and we&apos;ll get back to you within 24-48 hours.
            </p>
            <a 
              href="mailto:hello@talkclip.com"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              hello@talkclip.com
              <Send className="w-4 h-4" />
            </a>
          </div>

          {/* General Inquiries */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex p-4 bg-purple-100 rounded-2xl mb-4">
              <MessageCircle className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">General Inquiries</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Questions about TalkClip or want to learn more about our features?
            </p>
            <a 
              href="mailto:info@talkclip.com"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
            >
              info@talkclip.com
              <Send className="w-4 h-4" />
            </a>
          </div>

          {/* Privacy & Legal */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-4">
              <FileQuestion className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy & Legal</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Questions about privacy, data, or legal matters?
            </p>
            <a 
              href="mailto:legal@talkclip.com"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              legal@talkclip.com
              <Send className="w-4 h-4" />
            </a>
          </div>

        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            
            {/* FAQ 1 */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do I save content to TalkClip?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You can save content in multiple ways: use the Share Extension from any app (tap Share → TalkClip), 
                paste a URL directly in the app, or use the in-app browser to navigate and save content. TalkClip supports 
                content from TikTok, YouTube, Instagram, Twitter, and many other platforms.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Is my saved content stored locally or in the cloud?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your content is securely stored in the cloud and synced across all your devices. This means you can access 
                your library from your iPhone, iPad, or any device where you&apos;re signed in. We use industry-standard 
                encryption to protect your data.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I organize my saved content into categories?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes! You can create custom categories (like &quot;Recipes,&quot; &quot;Fitness,&quot; &quot;Work,&quot; etc.), 
                add tags to your saved items, and use powerful search to find exactly what you&apos;re looking for. You can 
                also add personal notes to each saved item.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What happens if a video I saved gets deleted from the original platform?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                TalkClip saves links to content rather than downloading the actual files. If content is removed from the 
                original platform, the link will no longer work. However, you&apos;ll still have access to any notes, tags, 
                and metadata you added, which can help you remember or find similar content.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Is TalkClip free to use?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                TalkClip offers both free and premium plans. The free version includes core features like saving content, 
                basic organization, and search. Premium features may include advanced organization tools, unlimited storage, 
                and priority support. Check the app for current pricing and features.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do I delete my account and data?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You can delete your account anytime from the app&apos;s Settings → Account → Delete Account. This will 
                permanently remove all your data from our servers. You can also contact us at{' '}
                <a href="mailto:privacy@talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">
                  privacy@talkclip.com
                </a>
                {' '}to request account deletion.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Which platforms and content types does TalkClip support?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                TalkClip supports a wide range of platforms including TikTok, YouTube, Instagram, Twitter, Reddit, Medium, 
                news websites, and more. You can save videos, articles, social media posts, and any web content with a URL.
              </p>
            </div>

            {/* FAQ 8 */}
            <div className="pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer support in languages other than English?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Currently, TalkClip is available in English. We&apos;re working on adding support for additional languages 
                in future updates. Stay tuned!
              </p>
            </div>

          </div>
        </section>

        {/* Technical Support */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Support</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Experiencing technical issues? We&apos;re here to help! When contacting support about a technical problem, 
              please include:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Your device model and iOS version</li>
              <li>TalkClip app version (found in Settings → About)</li>
              <li>A detailed description of the issue</li>
              <li>Steps to reproduce the problem, if applicable</li>
              <li>Screenshots or screen recordings, if relevant</li>
            </ul>
            <p className="mt-6">
              Send all technical support requests to:{' '}
              <a 
                href="mailto:support@talkclip.com" 
                className="text-indigo-600 hover:text-indigo-700 font-semibold underline"
              >
                support@talkclip.com
              </a>
            </p>
          </div>
        </section>

        {/* Feature Requests & Feedback */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Feature Requests & Feedback</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We love hearing from our users! Your feedback helps us improve TalkClip and build features that matter most 
              to you. Whether you have ideas for new features, suggestions for improvements, or just want to share your 
              experience, we&apos;d love to hear from you.
            </p>
            <p>
              Send your feedback to:{' '}
              <a 
                href="mailto:feedback@talkclip.com" 
                className="text-indigo-600 hover:text-indigo-700 font-semibold underline"
              >
                feedback@talkclip.com
              </a>
            </p>
          </div>
        </section>

        {/* Business Inquiries */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Business & Partnership Inquiries</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Interested in partnering with TalkClip or have a business inquiry? We&apos;re always open to exploring 
              collaboration opportunities that align with our mission.
            </p>
            <p>
              Contact us at:{' '}
              <a 
                href="mailto:partnerships@talkclip.com" 
                className="text-indigo-600 hover:text-indigo-700 font-semibold underline"
              >
                partnerships@talkclip.com
              </a>
            </p>
          </div>
        </section>

        {/* Social Media */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Connect With Us</h2>
          <p className="text-xl text-indigo-100 text-center mb-8 max-w-2xl mx-auto">
            Follow us on social media for updates, tips, and community highlights!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://twitter.com/talkclip" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Twitter
            </a>
            <a 
              href="https://github.com/CompanywideAI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/company/companywideai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Response Time Notice */}
        <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed">
            <strong>Response Time:</strong> We aim to respond to all inquiries within 24-48 hours during business days. 
            For urgent technical issues, please mark your email as &quot;URGENT&quot; in the subject line. Thank you for 
            your patience!
          </p>
        </section>

      </main>
    </div>
  )
}

export default SupportPage


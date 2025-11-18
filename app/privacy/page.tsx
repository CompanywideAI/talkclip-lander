import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield, Smartphone, Cloud, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - TalkClip',
  description: 'TalkClip is a privacy-first app. We don\'t collect, store, or transmit your personal data. All your content stays on your device.',
  openGraph: {
    title: 'Privacy Policy - TalkClip',
    description: 'TalkClip is a privacy-first app. We don\'t collect, store, or transmit your personal data.',
  },
}

const PrivacyPage = () => {
  const lastUpdated = 'November 18, 2025'

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-600 mt-2">Last updated: {lastUpdated}</p>
          <p className="text-gray-600">Offline Mode - Version 1.0</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Privacy Commitment Hero */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-12 h-12" />
            <h2 className="text-3xl font-bold">Our Privacy Commitment</h2>
          </div>
          <p className="text-xl text-green-100 leading-relaxed">
            <strong>TalkClip is a privacy-first app. We don&apos;t collect, store, or transmit your personal data.</strong>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* Introduction */}
          <section>
            <p className="text-lg text-gray-700 leading-relaxed">
              Companywide AI, LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the TalkClip mobile application (the &quot;App&quot;). 
              This Privacy Policy explains how we handle your information when you use our App.
            </p>
          </section>

          {/* What We DON'T Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What We DON&apos;T Collect</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <span>We don&apos;t collect your email address or personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <span>We don&apos;t require account creation or login</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <span>We don&apos;t track your usage or behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <span>We don&apos;t use analytics or third-party tracking services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <span>We don&apos;t collect device information or identifiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <span>We don&apos;t access your location</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <span>We don&apos;t share any data with third parties</span>
                </li>
              </ul>
            </div>
          </section>

          {/* What Stays On Your Device */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">2. What Stays On Your Device</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                All your data remains on your device and is never transmitted to our servers:
              </p>
              <ul className="list-disc ml-6 space-y-2 bg-green-50 p-6 rounded-lg">
                <li>
                  <strong>Saved Clips:</strong> All URLs, titles, thumbnails, and notes you save
                </li>
                <li>
                  <strong>Categories &amp; Tags:</strong> Your organizational structure
                </li>
                <li>
                  <strong>Collections:</strong> Your custom collections and folders
                </li>
                <li>
                  <strong>Preferences:</strong> Your app settings and configurations
                </li>
              </ul>
              <p className="mt-4">
                This data is stored locally on your iPhone and in your iCloud (if you have iCloud backup enabled 
                in your iOS settings).
              </p>
            </div>
          </section>

          {/* Share Extension */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Share Extension</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>When you use the TalkClip Share Extension to save content from other apps:</p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <div>
                  <strong className="text-gray-900">What happens:</strong> The URL and metadata stay on your device
                </div>
                <div>
                  <strong className="text-gray-900">What we see:</strong> Nothing. We never see what you save
                </div>
                <div>
                  <strong className="text-gray-900">Third-party content:</strong> When you save a link to TikTok, 
                  YouTube, or other platforms, we fetch publicly available metadata (titles, thumbnails) directly 
                  from those platforms to your device. We don&apos;t store or transmit this data.
                </div>
              </div>
            </div>
          </section>

          {/* Widget */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Widget</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>The TalkClip widget displays your recently saved clips on your home screen:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Data source:</strong> Only reads from your device&apos;s local storage</li>
                <li><strong>Privacy:</strong> Widget data never leaves your device</li>
              </ul>
            </div>
          </section>

          {/* Network Requests */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Network Requests</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>The app makes minimal network requests only to:</p>
              <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                <div>
                  <strong className="text-gray-900">Fetch metadata:</strong> When you save a URL, we request the 
                  page title and thumbnail directly from the source website (e.g., TikTok, YouTube)
                </div>
                <div>
                  <strong className="text-gray-900">These requests:</strong> Are made directly from your device 
                  to the content provider
                </div>
                <div>
                  <strong className="text-gray-900">We don&apos;t see:</strong> The URLs you&apos;re fetching or 
                  the content you&apos;re saving
                </div>
              </div>
            </div>
          </section>

          {/* iCloud Backup */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">6. iCloud Backup</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>If you have iCloud Backup enabled in your iOS settings:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Your TalkClip data may be included in your iCloud backup</li>
                <li>This is controlled by Apple&apos;s iCloud Backup feature, not by TalkClip</li>
                <li>We have no access to your iCloud backups</li>
                <li>
                  See Apple&apos;s privacy policy for iCloud:{' '}
                  <a 
                    href="https://www.apple.com/legal/privacy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 underline"
                  >
                    https://www.apple.com/legal/privacy/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Third-Party Content */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Content &amp; Services</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>When you save content from third-party platforms (TikTok, YouTube, Instagram, etc.):</p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg space-y-2">
                <p>
                  <strong>You remain subject to their privacy policies and terms of service</strong>
                </p>
                <p>
                  <strong>We don&apos;t control:</strong> What data those platforms collect about you
                </p>
                <p>
                  <strong>Opening links:</strong> When you open a saved link, you&apos;re visiting that 
                  third-party website directly
                </p>
              </div>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              TalkClip is safe for all ages. Since we don&apos;t collect any personal information, we don&apos;t 
              have special provisions for children under 13.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">9. Data Security</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed">
              <li>All data is stored securely on your device using iOS&apos;s built-in security features</li>
              <li>We use industry-standard encryption for network requests when fetching metadata</li>
              <li>Only you can access your TalkClip data (unless you&apos;ve shared your device with others)</li>
            </ul>
          </section>

          {/* Your Control */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Your Control</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>You have complete control over your data:</p>
              <ul className="list-disc ml-6 space-y-2 bg-indigo-50 p-6 rounded-lg">
                <li>
                  <strong>Export:</strong> Export all your clips at any time from the app settings
                </li>
                <li>
                  <strong>Delete:</strong> Delete individual clips or all data from the app settings
                </li>
                <li>
                  <strong>Uninstall:</strong> Deleting the app removes all TalkClip data from your device
                </li>
              </ul>
            </div>
          </section>

          {/* Future Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Future Updates</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>If we add cloud sync or accounts in future versions:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>We&apos;ll update this privacy policy</strong> and notify you within the app</li>
                <li><strong>It will be optional</strong> - you can continue using TalkClip in offline mode</li>
                <li><strong>You&apos;ll be asked for consent</strong> before any data is synced to the cloud</li>
              </ul>
            </div>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We may update this Privacy Policy from time to time. When we make changes, we will:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Update the &quot;Last updated&quot; date at the top</li>
                <li>Notify you through the app if changes are material</li>
                <li>Your continued use constitutes acceptance of the revised policy</li>
              </ul>
            </div>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>If you have questions about this Privacy Policy:</p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-2">
                <p><strong>Companywide AI, LLC</strong></p>
                <p>Email: <a href="mailto:privacy@talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">privacy@talkclip.com</a></p>
                <p>Support: <a href="mailto:hello@talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">hello@talkclip.com</a></p>
                <p>Website: <a href="https://talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">https://talkclip.com</a></p>
              </div>
            </div>
          </section>

        </div>

        {/* App Store Privacy Label Summary */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-xl p-8 md:p-12 text-white mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">App Store Privacy Nutrition Label</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">✅ Data Not Collected</h3>
              <ul className="space-y-2 text-green-100">
                <li>• Contact Info: None</li>
                <li>• Identifiers: None</li>
                <li>• Usage Data: None</li>
                <li>• Diagnostics: None</li>
                <li>• Financial Info: None</li>
                <li>• Location: None</li>
                <li>• Contacts: None</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">🔒 Your Privacy</h3>
              <ul className="space-y-2 text-green-100">
                <li>• User Content: Stored locally only</li>
                <li>• No data linked to you</li>
                <li>• No tracking</li>
                <li>• No cloud storage (optional iCloud backup)</li>
              </ul>
            </div>
          </div>

        </div>

      </main>
    </div>
  )
}

export default PrivacyPage

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - TalkClip',
  description: 'Learn how TalkClip collects, uses, and protects your personal information.',
  openGraph: {
    title: 'Privacy Policy - TalkClip',
    description: 'Learn how TalkClip collects, uses, and protects your personal information.',
  },
}

const PrivacyPage = () => {
  const lastUpdated = 'November 17, 2025'

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
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* Introduction */}
          <section>
            <p className="text-lg text-gray-700 leading-relaxed">
              Companywide AI, LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the TalkClip mobile application (the &quot;App&quot;). 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App. 
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the App.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <div className="space-y-4 ml-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you create an account, we may collect:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                  <li>Email address</li>
                  <li>Username</li>
                  <li>Profile information you choose to provide</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1.2 Content Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  We collect and store the content you save through the App:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                  <li>URLs and links to videos, articles, and other content</li>
                  <li>Notes, tags, and categories you create</li>
                  <li>Metadata associated with saved content (titles, descriptions, thumbnails)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1.3 Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you use the App, we automatically collect:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                  <li>Device information (type, operating system, unique device identifiers)</li>
                  <li>App usage data (features used, time spent, interactions)</li>
                  <li>Log data (IP address, access times, app crashes)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>To provide, maintain, and improve the App&apos;s functionality</li>
              <li>To create and manage your account</li>
              <li>To store and organize your saved content</li>
              <li>To sync your content across your devices</li>
              <li>To send you important updates and notifications about the App</li>
              <li>To respond to your support requests and questions</li>
              <li>To analyze usage patterns and improve user experience</li>
              <li>To detect, prevent, and address technical issues or security threats</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Data Storage and Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Storage and Security</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Secure cloud storage infrastructure</li>
                <li>Access controls and authentication mechanisms</li>
              </ul>
              <p className="mt-3">
                However, no method of electronic storage is 100% secure. While we strive to protect your personal information, 
                we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Share Your Information</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                We do not sell your personal information. We may share your information in the following limited circumstances:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> We may share information with third-party service providers who perform 
                  services on our behalf (e.g., cloud hosting, analytics, customer support).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid 
                  legal requests by public authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information 
                  may be transferred as part of that transaction.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information for any other purpose with your consent.
                </li>
              </ul>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              The App may contain links to third-party websites, services, or content. We are not responsible for the privacy 
              practices of these third parties. When you save content from third-party platforms, you remain subject to their 
              respective privacy policies and terms of service.
            </p>
          </section>

          {/* Your Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a machine-readable format</li>
                <li><strong>Opt-Out:</strong> Opt out of certain data processing activities</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:privacy@talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">
                  privacy@talkclip.com
                </a>
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              The App is not intended for children under the age of 13. We do not knowingly collect personal information from 
              children under 13. If you believe we have collected information from a child under 13, please contact us immediately 
              at{' '}
              <a href="mailto:privacy@talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">
                privacy@talkclip.com
              </a>
              {' '}and we will delete such information.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to provide you with the App&apos;s services and as 
              required by applicable law. When you delete your account, we will delete or anonymize your personal information 
              within 30 days, except where we are legally required to retain certain information.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These 
              countries may have data protection laws that differ from your jurisdiction. We take appropriate safeguards to 
              ensure your information receives adequate protection in accordance with this Privacy Policy.
            </p>
          </section>

          {/* California Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. California Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), 
              including the right to know what personal information we collect, disclose, or sell, and the right to opt-out of 
              the sale of your personal information. We do not sell personal information. To exercise your CCPA rights, please 
              contact us at{' '}
              <a href="mailto:privacy@talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">
                privacy@talkclip.com
              </a>
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. When we make changes, we will update the &quot;Last updated&quot; 
              date at the top of this page. If we make material changes, we will notify you through the App or via email. 
              Your continued use of the App after changes become effective constitutes your acceptance of the revised policy.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-2">
                <p><strong>Companywide AI, LLC</strong></p>
                <p>Email: <a href="mailto:privacy@talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">privacy@talkclip.com</a></p>
                <p>Support: <a href="mailto:hello@talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">hello@talkclip.com</a></p>
                <p>Website: <a href="https://talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">https://talkclip.com</a></p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

export default PrivacyPage


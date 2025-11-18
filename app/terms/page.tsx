import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - TalkClip',
  description: 'Read the Terms of Service for using the TalkClip application.',
  openGraph: {
    title: 'Terms of Service - TalkClip',
    description: 'Read the Terms of Service for using the TalkClip application.',
  },
}

const TermsPage = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
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
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the TalkClip mobile application 
              (the &quot;App&quot;), operated by Companywide AI, LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). 
              By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree to 
              these Terms, do not use the App.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By creating an account or using the App, you acknowledge that you have read, understood, and agree to be bound 
              by these Terms and our Privacy Policy. If you are using the App on behalf of an organization, you represent and 
              warrant that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>To use the App, you must:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Be at least 13 years of age (or the age of majority in your jurisdiction)</li>
                <li>Have the legal capacity to enter into these Terms</li>
                <li>Not be prohibited from using the App under applicable laws</li>
                <li>Provide accurate and complete registration information</li>
              </ul>
              <p className="mt-3">
                Users under 18 must have parental or guardian consent to use the App.
              </p>
            </div>
          </section>

          {/* Account Registration */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration and Security</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>To use certain features of the App, you must create an account. You agree to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your information to keep it accurate and current</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
              <p className="mt-3">
                We reserve the right to suspend or terminate accounts that violate these Terms or engage in suspicious activity.
              </p>
            </div>
          </section>

          {/* License and Use */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. License to Use the App</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, 
                revocable license to download, install, and use the App on your personal devices solely for your personal, 
                non-commercial use.
              </p>
              <p className="font-semibold mt-4">You agree NOT to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Copy, modify, or create derivative works of the App</li>
                <li>Reverse engineer, decompile, or disassemble the App</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices</li>
                <li>Use the App for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Use automated means to access the App without permission</li>
                <li>Interfere with or disrupt the App or servers</li>
                <li>Transmit viruses, malware, or other harmful code</li>
              </ul>
            </div>
          </section>

          {/* User Content */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Content</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                The App allows you to save, organize, and store links to content (&quot;User Content&quot;). You retain all 
                ownership rights to your User Content. By using the App, you grant us a limited license to store, process, 
                and display your User Content solely to provide the App&apos;s services to you.
              </p>
              <p className="font-semibold mt-4">You represent and warrant that:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>You own or have the necessary rights to the User Content</li>
                <li>Your User Content does not violate any third-party rights</li>
                <li>Your User Content complies with these Terms and applicable laws</li>
              </ul>
              <p className="mt-3">
                You are solely responsible for your User Content. We do not endorse or take responsibility for any User Content.
              </p>
            </div>
          </section>

          {/* Prohibited Conduct */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Conduct</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>You agree not to use the App to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Violate any local, state, national, or international law</li>
                <li>Infringe upon intellectual property rights of others</li>
                <li>Harass, abuse, threaten, or harm others</li>
                <li>Collect or store personal data about other users</li>
                <li>Impersonate any person or entity</li>
                <li>Distribute spam or unsolicited messages</li>
                <li>Engage in any commercial use without our prior written consent</li>
                <li>Circumvent any security features or access restrictions</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              The App and its original content (excluding User Content), features, and functionality are owned by 
              Companywide AI, LLC and are protected by international copyright, trademark, patent, trade secret, and other 
              intellectual property laws. You may not use our trademarks, logos, or branding without our prior written permission.
            </p>
          </section>

          {/* Third-Party Content */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Content and Services</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                The App allows you to save links to third-party content and services. We do not control, endorse, or assume 
                responsibility for any third-party content, websites, or services. You acknowledge and agree that:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>We are not responsible for third-party content availability or accuracy</li>
                <li>Your use of third-party services is subject to their respective terms and policies</li>
                <li>We shall not be liable for any damages arising from third-party content or services</li>
              </ul>
              <p className="mt-3">
                You are responsible for complying with the terms of service of any third-party platforms from which you save content.
              </p>
            </div>
          </section>

          {/* Subscription and Payment */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Subscription and Payment Terms</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Certain features of the App may require a paid subscription. If you purchase a subscription:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>You agree to pay all fees associated with your selected subscription plan</li>
                <li>Subscriptions automatically renew unless canceled before the renewal date</li>
                <li>Pricing is subject to change with notice to current subscribers</li>
                <li>Refunds are handled in accordance with Apple App Store policies</li>
                <li>You may cancel your subscription at any time through your device settings</li>
              </ul>
              <p className="mt-3">
                All payments are processed through the Apple App Store, subject to their terms and conditions.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                We reserve the right to suspend or terminate your access to the App at any time, with or without notice, 
                for any reason, including:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Extended periods of inactivity</li>
                <li>Upon your request</li>
              </ul>
              <p className="mt-3">
                You may terminate your account at any time by deleting the App and contacting us to request account deletion. 
                Upon termination, your right to use the App will immediately cease, and we may delete your User Content.
              </p>
            </div>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Disclaimers</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed font-semibold mb-3">
                THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, 
                EITHER EXPRESS OR IMPLIED.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To the fullest extent permitted by law, we disclaim all warranties, including but not limited to implied 
                warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                <li>The App will be uninterrupted, secure, or error-free</li>
                <li>Defects will be corrected</li>
                <li>The App is free from viruses or harmful components</li>
                <li>Results obtained from the App will be accurate or reliable</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Limitation of Liability</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed font-semibold mb-3">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, COMPANYWIDE AI, LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This includes damages arising from:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                <li>Your use or inability to use the App</li>
                <li>Loss of data or User Content</li>
                <li>Unauthorized access to your account</li>
                <li>Third-party content or conduct</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Our total liability shall not exceed the amount you paid us in the twelve (12) months prior to the event 
                giving rise to liability, or $100, whichever is greater.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Companywide AI, LLC and its officers, directors, employees, 
              and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) 
              arising out of or related to:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
              <li>Your use of the App</li>
              <li>Your User Content</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law and Dispute Resolution</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without 
                regard to conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration 
                in accordance with the American Arbitration Association rules, except that either party may seek injunctive 
                relief in court for infringement of intellectual property rights.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. If we make material changes, we will notify you through 
              the App or via email at least 30 days before the changes take effect. Your continued use of the App after the 
              changes become effective constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* Miscellaneous */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Miscellaneous</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p><strong>Entire Agreement:</strong> These Terms, along with our Privacy Policy, constitute the entire 
              agreement between you and Companywide AI, LLC regarding the App.</p>
              
              <p><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining 
              provisions will continue in full force and effect.</p>
              
              <p><strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms will not be considered 
              a waiver of those rights.</p>
              
              <p><strong>Assignment:</strong> You may not assign or transfer these Terms without our prior written consent. 
              We may assign our rights and obligations without restriction.</p>
              
              <p><strong>Force Majeure:</strong> We shall not be liable for any failure to perform due to circumstances 
              beyond our reasonable control.</p>
            </div>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>If you have questions about these Terms, please contact us:</p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-2">
                <p><strong>Companywide AI, LLC</strong></p>
                <p>Email: <a href="mailto:legal@talkclip.com" className="text-indigo-600 hover:text-indigo-700 underline">legal@talkclip.com</a></p>
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

export default TermsPage


import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TalkClip - Your Personal Content Library',
  description: 'Save, organize, and rediscover your favorite online content in one place. Never lose track of that interesting TikTok, YouTube video, or article again!',
  keywords: ['content management', 'bookmark manager', 'video saver', 'TikTok saver', 'YouTube organizer', 'iOS app'],
  authors: [{ name: 'TalkClip' }],
  icons: {
    icon: '/branding/icon-talk-clip@2x.png',
    apple: '/branding/icon-talk-clip@2x.png',
  },
  openGraph: {
    title: 'TalkClip - Your Personal Content Library',
    description: 'Save, organize, and rediscover your favorite online content in one place',
    type: 'website',
    url: 'https://talkclip.com',
    images: ['/branding/icon-talk-clip@2x.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalkClip - Your Personal Content Library',
    description: 'Save, organize, and rediscover your favorite online content in one place',
    images: ['/branding/icon-talk-clip@2x.png'],
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

export default RootLayout


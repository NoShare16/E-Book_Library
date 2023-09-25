import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Prompt Collection',
  description: 'Collection of hundreds of prompts for Ai',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": "https://ibb.co/Pjh9G1S",
    "twitter:card": "summary_large_image",
    "og:url": "https://ai-prompt-collection.vercel.app/",
    "og:image": "https://ibb.co/Pjh9G1S",
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 font-poppins'>{children}</body>
    </html>
  )
}

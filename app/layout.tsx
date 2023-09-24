import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Prompt Collection',
  description: 'Collection of hundreds of prompts for Ai',
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

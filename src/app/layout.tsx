import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Resume Builder',
  description:
    'Build your resume in minutes, not hours. Use GitHub usernames to get started.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          'min-h-screen bg-background font-sans antialiased'
        )}
      >
        {children}
      </body>
    </html>
  )
}

export const runtime = 'edge'

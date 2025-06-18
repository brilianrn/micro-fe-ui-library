import '@/shared/styles/globals.css'
import classNames from 'clsx'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'GoApotik | UI Library',
  description:
    'GoApotik UI Library is a React component library that offers a suite of components to help you build web applications quickly and easily. It is built with Tailwind CSS and Radix UI.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={classNames(geistSans.variable, geistMono.variable, 'antialiased')}>
        {children}
      </body>
    </html>
  )
}

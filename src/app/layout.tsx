import type { Metadata } from 'next'
import './globals.css'

// components
import { Navbar, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-primary'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

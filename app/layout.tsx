import type { Metadata } from 'next'
import './globals.css'
import Navbar from './Navbar/page'

export const metadata: Metadata = {
  title: 'Sancy Tech',
  description: 'Sancy Tech - Your Gateway to the Future of Technology',
  generator: 'Sancy Tech',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" className='rounded-full'/>
      </head>
      <body>
        <Navbar/>
        {children}</body>
    </html>
  )
}

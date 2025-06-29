import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}

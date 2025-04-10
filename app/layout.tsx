import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Powerhouse Decentralized Operations Platform',
  description: 'The operating system for the sovereign worker',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-white">{children}</body>
    </html>
  )
}

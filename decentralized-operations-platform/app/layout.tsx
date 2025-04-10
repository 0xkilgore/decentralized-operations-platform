import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import React from 'react'

export const metadata: Metadata = {
  title: 'Powerhouse Decentralized Operations Platform',
  description: 'The operating system for the sovereign worker',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ backgroundColor: 'blue' }}>
      <head>
        <title>NESTED DIRECTORY TEST</title>
      </head>
      <body style={{ backgroundColor: 'green', color: 'white', padding: '30px', fontFamily: 'Arial' }}>
        <h1 style={{ color: 'orange', border: '5px solid orange', padding: '20px' }}>
          TEST FROM NESTED DIRECTORY
        </h1>
        {children}
      </body>
    </html>
  );
} 
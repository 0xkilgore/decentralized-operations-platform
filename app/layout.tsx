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
    <html style={{ backgroundColor: 'purple' }}>
      <head>
        <title>ROOT DIRECTORY TEST</title>
      </head>
      <body style={{ backgroundColor: 'red', color: 'white', padding: '30px', fontFamily: 'Arial' }}>
        <h1 style={{ color: 'yellow', border: '5px solid yellow', padding: '20px' }}>
          TEST FROM ROOT DIRECTORY
        </h1>
        {children}
      </body>
    </html>
  );
}

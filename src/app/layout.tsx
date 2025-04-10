import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SRC DIRECTORY TEST - FOUND IT",
  description: "This is the file Vercel is actually using!"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html style={{ backgroundColor: 'magenta' }}>
      <head>
        <title>SRC DIRECTORY TEST - FOUND IT</title>
      </head>
      <body style={{ backgroundColor: 'purple', color: 'white', padding: '30px', fontFamily: 'Arial' }}>
        <h1 style={{ color: 'cyan', border: '5px solid cyan', padding: '20px', textAlign: 'center', margin: '0 auto 30px auto', maxWidth: '800px' }}>
          TEST FROM SRC DIRECTORY - FOUND IT!
        </h1>
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(0,0,0,0.5)', maxWidth: '800px', margin: '0 auto' }}>
          {children}
        </div>
      </body>
    </html>
  );
}

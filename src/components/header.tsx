"use client"

import type { FC } from 'react'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from 'next/navigation'

export const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' },
  ]

  const navItems = [
    { name: "Renown", logo: "/logos/renown-logo.svg", url: "https://www.powerhouse.inc/renown", width: 30, height: 30 },
    {
      name: "Connect",
      logo: "/logos/connect-logo.svg",
      url: "https://www.powerhouse.inc/connect",
      width: 30,
      height: 30,
    },
    { name: "Fusion", logo: "/logos/fusion-logo.svg", url: "https://www.powerhouse.inc/fusion", width: 30, height: 30 },
    {
      name: "Switchboard",
      logo: "/logos/switchboard-logo.svg",
      url: "https://www.powerhouse.inc/switchboard",
      width: 36,
      height: 28,
    },
    {
      name: "Academy",
      logo: "/logos/academy-logo.svg",
      url: "https://www.powerhouse.inc/academy",
      width: 30,
      height: 26,
    },
  ]

  const socialLinks = [
    {
      name: "Discord",
      logo: "/logos/discord-logo.svg",
      url: "https://discord.com/invite/h7GKvqDyDP",
      width: 24,
      height: 24,
    },
    { name: "Twitter", logo: "/logos/x-logo.png", url: "https://twitter.com/PowerhouseDAO", width: 24, height: 24 },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-neon-green neon-glow">Powerhouse</span>
          </Link>
          <div className="hidden md:flex items-center gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#22ffb4] ${
                  pathname === item.href ? 'text-[#22ffb4]' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <Link href="/login" className="hidden md:block btn-secondary">
            Login
          </Link>
          <Link href="/signup" className="hidden md:block btn-primary">
            Get Started
          </Link>
          <button
            type="button"
            className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold text-neon-green neon-glow">Powerhouse</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-border">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#22ffb4]/10 ${
                          pathname === item.href ? 'text-[#22ffb4]' : 'text-foreground'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6 space-y-4">
                    <Link
                      href="/login"
                      className="btn-secondary w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="btn-primary w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

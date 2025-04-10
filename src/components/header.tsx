"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-gray-800">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="https://powerhouse.inc" className="flex items-center">
          <Image src="/logos/powerhouse-logo.png" alt="Powerhouse" width={290} height={65} className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <nav className="flex items-center justify-center space-x-8 mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="text-gray-300 hover:text-neon-green transition-colors p-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                <Image
                  src={item.logo || "/placeholder.svg"}
                  alt={item.name}
                  width={item.width * 0.75}
                  height={item.height * 0.75}
                  className="h-6 w-auto"
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4 ml-8">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="text-gray-300 hover:text-neon-green transition-colors p-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                <Image
                  src={item.logo || "/placeholder.svg"}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className="h-6 w-auto"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-neon-green"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-light border-b border-gray-800 animate-fade-in">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="flex items-center space-x-3 text-gray-300 hover:text-neon-green transition-colors py-2"
                onClick={toggleMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.logo || "/placeholder.svg"}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className="h-6 w-auto"
                />
                <span>{item.name}</span>
              </Link>
            ))}

            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="flex items-center space-x-2 text-gray-300 hover:text-neon-green transition-colors py-2"
                  onClick={toggleMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.logo || "/placeholder.svg"}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className="h-5 w-auto"
                  />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

import Link from "next/link"
import { Twitter, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background-light border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Powerhouse</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Powerhouse's Decentralized Operations Platform is optimized for a new generation of network organizations
              that do not have a traditional corporate structure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-green" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-neon-green">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-neon-green">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-neon-green">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-neon-green">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-neon-green">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-neon-green">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-neon-green">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-neon-green">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Powerhouse. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-300 hover:text-neon-green text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-neon-green text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

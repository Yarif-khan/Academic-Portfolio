import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yarif Uddin Khan - STEM Research Portfolio",
  description: "Independent research in molecular biology and biotechnology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="flex justify-between items-center bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Link href="/" className="font-medium hover:text-primary transition-colors text-lg">
                .research
              </Link>
              <div className="flex items-center gap-2">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/research">Research</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-full hover:bg-muted transition-colors duration-200 text-sm font-medium"
    >
      {children}
    </Link>
  )
}



import './globals.css'
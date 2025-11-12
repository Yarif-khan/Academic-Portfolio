import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 h-14 sm:h-16 flex items-center bg-background/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
              <div className="flex justify-between items-center">
                <Link href="/" className="font-medium hover:text-primary transition-colors text-lg">
                  .research
                </Link>
                <div className="hidden sm:flex items-center gap-2">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/research">Research</NavLink>
                  <NavLink href="/current">Current</NavLink>
                  <NavLink href="/courses">Courses</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                  <ModeToggle />
                </div>
                <div className="sm:hidden flex items-center gap-2">
                  <ModeToggle />
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                      <div className="flex flex-col gap-4 mt-8">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/research">Research</NavLink>
                        <NavLink href="/current">Current</NavLink>
                        <NavLink href="/courses">Courses</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </nav>

          {/* Main content */}
          <main className="pt-14 sm:pt-16">{children}</main>
        </ThemeProvider>
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

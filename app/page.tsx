"use client"

import { Github, Linkedin, Mail, FileText, Dna, Brain, FlaskRoundIcon as Flask, Cog, Microscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Hero Section with DNA Image */}
        <motion.div
          className="relative w-full h-[30vh] sm:h-[50vh] mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ashraful-islam-pRt3JVYlJho-unsplash.jpg-c2si3bPOLHqBC4gOSWpLyqDieRCLNr.jpeg"
            alt="DNA Structure"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
          <div className="absolute bottom-0 left-0 p-4 sm:p-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Yarif Uddin Khan
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Exploring the frontiers of molecular biology and biotechnology
            </motion.p>
          </div>
        </motion.div>

        {/* About Me and Education Sections Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* About Me Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              An undergrad biotechnologist and biomed research enthusiast with keen intrest in molecular biology and
              biochemistry. On a quest to explore the intersection of genetic engineering and computational approaches
              to solve complex biological challenges.
            </p>
            <div>
              <Button
                asChild
                variant="default"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
              >
                <Link href="/cv.pdf">
                  <FileText className="h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">BS Biotechnology</h4>
                <p className="text-muted-foreground">Sir Syed University of Engineering and Technology</p>
                <p className="text-sm text-muted-foreground">2023 - Present</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">A' Levels</h4>
                <p className="text-muted-foreground">Whales College, Karachi</p>
                <p className="text-sm text-muted-foreground">2021 - 2022</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">O' Levels</h4>
                <p className="text-muted-foreground">Appeared as a Private Candidate</p>
                <p className="text-sm text-muted-foreground">2019 - 2020</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Research Focus Section */}
        <motion.div
          className="space-y-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold">Research Focus</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { title: "Genetic Engineering", icon: Dna },
              { title: "Computational Biology", icon: Brain },
              { title: "Cell Biology", icon: Flask },
              { title: "Bioprocess Engineering", icon: Cog },
              { title: "Analytical Methods", icon: Microscope },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <item.icon className="h-8 w-8 mb-2 text-primary" />
                <h4 className="font-medium">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold">Connect</h2>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline" className="gap-2">
              <Link href="https://github.com/Yarif-khan">
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="https://linkedin.com/in/yarif-uddin-khan">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/contact">
                <Mail className="h-4 w-4" />
                Contact
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

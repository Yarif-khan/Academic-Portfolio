"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Trophy } from "lucide-react"

export default function CurrentPage() {
  const currentActivities = [
    {
      id: 1,
      title: "Data Engineering with Python",
      platform: "DataCamp",
      progress: 65,
      description: "Learning ETL pipelines, data warehousing, and Python best practices.",
      dueDate: "In Progress",
      skills: ["Python", "SQL", "Data Pipeline"],
    },
    {
      id: 2,
      title: "Machine Learning for Scientists",
      platform: "DataCamp",
      progress: 40,
      description: "Applying ML algorithms to biological datasets and predictive modeling.",
      dueDate: "In Progress",
      skills: ["Machine Learning", "Python", "Scikit-learn"],
    },
  ]

  const completedItems = [
    {
      id: 1,
      title: "Introduction to Bioinformatics",
      platform: "DataCamp",
      completedDate: "October 2024",
      skills: ["Python", "Bioinformatics", "Sequence Analysis"],
    },
    {
      id: 2,
      title: "Data Visualization with Python",
      platform: "DataCamp",
      completedDate: "September 2024",
      skills: ["Python", "Matplotlib", "Data Visualization"],
    },
    {
      id: 3,
      title: "Introduction to SQL",
      platform: "DataCamp",
      completedDate: "August 2024",
      skills: ["SQL", "Databases", "Data Querying"],
    },
    {
      id: 4,
      title: "Genetic Engineering Fundamentals",
      platform: "Online Course",
      completedDate: "July 2024",
      skills: ["Genetic Engineering", "CRISPR", "Gene Editing"],
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Current Endeavors</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Track my ongoing learning journey and completed certifications. Here's what I'm currently focused on and
            what I've accomplished so far.
          </p>
        </motion.div>

        {/* Current Activities Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">Currently Learning</h2>
          </div>
          <div className="grid gap-6">
            {currentActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{activity.title}</h3>
                      <p className="text-sm text-muted-foreground">{activity.platform}</p>
                    </div>
                    <Badge variant="outline">{activity.progress}% Complete</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{activity.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${activity.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Completed Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">Completed Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.platform}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">Completed: {item.completedDate}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

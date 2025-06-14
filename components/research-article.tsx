import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Dna, Brain, Cog, FlaskConical } from "lucide-react"

interface ResearchArticleProps {
  title: string
  category: string
  summary: string
  link: string
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Genetic Engineering":
      return Dna
    case "Computational Biology":
      return Brain
    case "Bioprocess Engineering":
      return Cog
    case "Molecular Biology":
      return FlaskConical
    default:
      return Dna
  }
}

const getCategoryColors = (category: string) => {
  switch (category) {
    case "Genetic Engineering":
      return {
        bg: "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
        border: "border-emerald-200/60 dark:border-emerald-800/60",
        text: "text-emerald-700 dark:text-emerald-300",
        icon: "text-emerald-600 dark:text-emerald-400",
      }
    case "Computational Biology":
      return {
        bg: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
        border: "border-blue-200/60 dark:border-blue-800/60",
        text: "text-blue-700 dark:text-blue-300",
        icon: "text-blue-600 dark:text-blue-400",
      }
    case "Bioprocess Engineering":
      return {
        bg: "bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30",
        border: "border-purple-200/60 dark:border-purple-800/60",
        text: "text-purple-700 dark:text-purple-300",
        icon: "text-purple-600 dark:text-purple-400",
      }
    case "Molecular Biology":
      return {
        bg: "bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30",
        border: "border-orange-200/60 dark:border-orange-800/60",
        text: "text-orange-700 dark:text-orange-300",
        icon: "text-orange-600 dark:text-orange-400",
      }
    default:
      return {
        bg: "bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/30 dark:to-slate-950/30",
        border: "border-gray-200/60 dark:border-gray-800/60",
        text: "text-gray-700 dark:text-gray-300",
        icon: "text-gray-600 dark:text-gray-400",
      }
  }
}

export function ResearchArticle({ title, category, summary, link }: ResearchArticleProps) {
  const CategoryIcon = getCategoryIcon(category)
  const colors = getCategoryColors(category)

  return (
    <div className="border rounded-xl p-6 sm:p-8 space-y-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold leading-tight flex-1">{title}</h2>

        {/* Enhanced Category Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${colors.bg} ${colors.border} backdrop-blur-sm self-start`}
        >
          <CategoryIcon className={`h-4 w-4 ${colors.icon}`} />
          <span className={`text-sm font-medium ${colors.text}`}>{category}</span>
        </div>
      </div>

      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{summary}</p>

      <Button
        asChild
        variant="outline"
        className="w-full sm:w-auto group hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-2"
      >
        <Link href={link} className="flex items-center justify-center gap-2">
          Read More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  )
}

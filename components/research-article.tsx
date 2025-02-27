import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ResearchArticleProps {
  title: string
  category: string
  summary: string
  link: string
}

export function ResearchArticle({ title, category, summary, link }: ResearchArticleProps) {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <Badge>{category}</Badge>
      </div>
      <p className="text-muted-foreground">{summary}</p>
      <Button asChild variant="outline">
        <Link href={link}>Read More</Link>
      </Button>
    </div>
  )
}


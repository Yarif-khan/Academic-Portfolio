import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogPostProps {
  title: string
  date: string
  summary: string
  link: string
}

export function BlogPost({ title, date, summary, link }: BlogPostProps) {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>
      <p className="text-muted-foreground">{summary}</p>
      <Button asChild variant="outline">
        <Link href={link}>Read More</Link>
      </Button>
    </div>
  )
}


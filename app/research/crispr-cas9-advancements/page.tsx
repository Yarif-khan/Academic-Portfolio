import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Settings, CheckCircle, Info, ExternalLink } from "lucide-react"

export default function CRISPRGenomeEditing() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/research" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Research
          </Link>
        </Button>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            CRISPR Technology: A Revolution in Genome Editing
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Exploring the mechanisms, applications, and ethical considerations of CRISPR-Cas9.
          </p>

          <div>
            <p>
              <strong>Working on it!</strong>
            </p>
          </div>
        </header>
      </div>
    </div>
  )
}

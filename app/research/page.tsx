import { ResearchArticle } from "@/components/research-article"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const articles = [
  {
    title: "The Accidental Amplifier: How PCR's Greatest Strength Wasn't Its Original Goal",
    category: "Molecular Biology",
    summary:
      "Explored the problems faced by researchers and their motivation that led to the invention of PCR - An indespensible tool in modern diagnostics.",
    link: "/research/pcr-invention",
  },
  {
    title: "The Ultimate Guide to Selecting a Vector in Molecular Biology & Genetic Engineering",
    category: "Molecular Biology",
    summary:
      "A comprehensive framework for navigating vector selection in molecular biology experiments, covering core considerations, essential components, specialized vector types, and practical decision-making workflows.",
    link: "/research/vector-selection-guide",
  },
  {
    title: "Detailed Analysis of fMet Cleavage by CNBr in Recombinant Insulin Production and Alternative Strategies",
    category: "Bioprocess Engineering",
    summary:
      "A comprehensive analysis of downstream processing challenges in recombinant human insulin production from E. coli inclusion bodies, focusing on CNBr cleavage limitations and proposing immobilized TEV protease as a safer, more efficient alternative.",
    link: "/research/fmet-cleavage-insulin-production",
  },
  {
    title: "Advancements in CRISPR-Cas9 Gene Editing Techniques",
    category: "Genetic Engineering",
    summary:
      "An overview of recent developments in CRISPR-Cas9 technology and its applications in various fields of biology.",
    link: "/research/crispr-cas9-advancements",
  },
  {
    title: "Machine Learning in Protein Structure Prediction",
    category: "Computational Biology",
    summary:
      "Exploring the role of AI and machine learning algorithms in predicting protein structures and their implications for drug discovery.",
    link: "/research/ml-protein-structure",
  },
]

export default function Research() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Research & Insights</h1>
        <p className="text-lg text-muted-foreground">
          Exploring the frontiers of molecular biology and biotechnology through innovative research
        </p>
      </div>

      <div className="space-y-8 mb-12">
        {articles.map((article, index) => (
          <ResearchArticle key={index} {...article} />
        ))}
      </div>

      {/* Connect Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Connect</h2>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link href="https://github.com/Yarif-khan">
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link href="https://linkedin.com/in/yarif-uddin-khan">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link href="/contact">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

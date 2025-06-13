import { ResearchArticle } from "@/components/research-article"

const articles = [
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

      <div className="space-y-8">
        {articles.map((article, index) => (
          <ResearchArticle key={index} {...article} />
        ))}
      </div>
    </div>
  )
}

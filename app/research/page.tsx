import { ResearchArticle } from "@/components/research-article"

const articles = [
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
  // Add more research articles as needed
]

export default function Research() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Research & Insights</h1>
      <div className="space-y-8">
        {articles.map((article, index) => (
          <ResearchArticle key={index} {...article} />
        ))}
      </div>
    </div>
  )
}


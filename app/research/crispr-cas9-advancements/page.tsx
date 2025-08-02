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
              CRISPR-Cas9 has transformed biological research by enabling precise, efficient, and cost-effective gene editing. This article provides a detailed overview of how the system works, its broad applications, and the bioethical implications involved.
            </p>
          </div>
        </header>
      </div>

      {/* Mechanism Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <Settings className="h-6 w-6 text-primary" />
          I. Mechanism of CRISPR-Cas9
        </h2>

        <div className="space-y-6">
          <p className="text-muted-foreground">
            CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) was first discovered in bacterial immune systems. The CRISPR-Cas9 system utilizes a guide RNA (gRNA) to direct the Cas9 enzyme to a specific DNA sequence, where it introduces double-strand breaks (DSBs). These DSBs can then be repaired by:
          </p>

          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong>Non-Homologous End Joining (NHEJ):</strong> Error-prone and often introduces insertions/deletions (indels).</li>
            <li><strong>Homology Directed Repair (HDR):</strong> High-fidelity, requiring a donor template for precise editing.</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <Info className="h-6 w-6 text-primary" />
          II. Applications Across Fields
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
          <div>
            <h3 className="font-medium mb-2">Biomedical Research</h3>
            <p>Gene knockout studies, functional genomics, cancer modeling, and rare disease studies.</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Gene Therapy</h3>
            <p>Treating monogenic disorders like Sickle Cell Disease, Leber Congenital Amaurosis, and others.</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Agriculture</h3>
            <p>Creating pest-resistant, drought-tolerant, or nutritionally enhanced crops (e.g., rice, wheat).</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Synthetic Biology</h3>
            <p>CRISPR-based transcriptional control, genome-wide screens, and designer organisms.</p>
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <CheckCircle className="h-6 w-6 text-primary" />
          III. Ethical & Regulatory Considerations
        </h2>

        <div className="text-muted-foreground space-y-4">
          <p>
            The ease of CRISPR-based genome editing has sparked debate over its use, especially in human embryos. Concerns include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Potential for off-target effects and unintended consequences</li>
            <li>Equity of access to gene therapies</li>
            <li>Regulatory oversight and consent in germline editing</li>
          </ul>
          <p>
            Regulatory frameworks vary globally, with some countries banning human germline editing while others permit limited clinical trials.
          </p>
        </div>
      </section>

      {/* Footer / Source */}
      <footer className="border-t pt-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ExternalLink className="h-4 w-4" />
          <span>Source: Nature Reviews Genetics</span>
          <a
            href="https://www.nature.com/articles/nrg.2015.3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            https://www.nature.com/articles/nrg.2015.3
          </a>
        </div>
      </footer>
    </div>
  )
}

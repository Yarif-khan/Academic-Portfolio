import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Target, Settings, CheckCircle, Info, ExternalLink } from "lucide-react"

export default function VectorSelectionGuide() {
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
            The Ultimate Guide to Selecting a Vector in Molecular Biology & Genetic Engineering
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            A comprehensive framework for navigating vector selection in molecular biology experiments
          </p>

          <div className="border-l-4 border-blue-500 pl-6 py-4 bg-muted/30 rounded-r-lg mb-8">
            <p className="text-foreground leading-relaxed">
              Choosing the right vector is a critical decision that can determine the success or failure of your
              experiment. This guide provides a comprehensive framework to navigate the selection process, considering
              your specific goals and experimental system.
            </p>
          </div>
        </header>
      </div>

      {/* Section I: Core Considerations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <Target className="h-6 w-6 text-primary" />
          I. Core Considerations: Define Your Experimental Needs
        </h2>

        <div className="space-y-8">
          {/* Primary Goal */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Primary Goal: What do you want to DO with your insert?</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium mb-2">Basic Cloning:</h4>
                  <p className="text-muted-foreground">
                    Propagate DNA, create libraries, subclone fragments? (Plasmids, Cosmids, BACs)
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium mb-2">Protein Expression:</h4>
                  <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                    <li>
                      <strong>Where?</strong> Prokaryotic (E. coli), Eukaryotic (Yeast, Insect, Mammalian cells),
                      Cell-free systems?
                    </li>
                    <li>
                      <strong>Scale?</strong> Small-scale (research), Large-scale (production)?
                    </li>
                    <li>
                      <strong>Fusion Tags?</strong> Purification (His, GST, MBP), Detection (FLAG, HA, GFP), Solubility
                      enhancers?
                    </li>
                    <li>
                      <strong>Secretion?</strong> Needed? (Signal sequences)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium mb-2">Gene Knockout/Knockdown:</h4>
                  <p className="text-muted-foreground">CRISPR/Cas9, RNAi (shRNA), Gene Trap vectors.</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium mb-2">Gene Therapy/Delivery:</h4>
                  <p className="text-muted-foreground">
                    Viral vectors (AAV, Lentivirus, Adenovirus), Non-viral vectors.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium mb-2">Functional Studies:</h4>
                  <p className="text-muted-foreground">
                    Reporter genes (Luciferase, GFP, LacZ), Promoter analysis, Protein localization (tags like GFP,
                    mCherry).
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium mb-2">Genome Engineering:</h4>
                  <p className="text-muted-foreground">
                    CRISPR/Cas9, TALEN, ZFN vectors (donor templates, gRNA expression).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Host System */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Host System</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-medium mb-2">Prokaryotes:</h4>
                <p className="text-muted-foreground">
                  Primarily E. coli strains (consider DH5α for cloning, BL21 for expression, specialized strains for
                  toxic proteins/unstable sequences). Needs compatible origin of replication (ori) and selection marker.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-medium mb-2">Eukaryotes:</h4>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>
                    <strong>Yeast:</strong> S. cerevisiae (YEp, YCp, YAC vectors), P. pastoris (specific expression
                    vectors).
                  </li>
                  <li>
                    <strong>Insect Cells:</strong> Baculovirus expression systems (Bacmids).
                  </li>
                  <li>
                    <strong>Mammalian Cells:</strong> Requires specific promoters, polyA signals, and often viral
                    elements (SV40 ori, EBNA1 for episomal maintenance). Crucial for expression, functional studies,
                    gene therapy.
                  </li>
                  <li>
                    <strong>Plants:</strong> Ti plasmids (Agrobacterium), plant viral vectors.
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-medium mb-2">Cell-Free Systems:</h4>
                <p className="text-muted-foreground">
                  Primarily need promoter compatible with the extract (e.g., T7, SP6).
                </p>
              </div>
            </div>
          </div>

          {/* Insert Characteristics */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Insert Characteristics</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-medium mb-2">Size: Dictates vector capacity</h4>
                <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                  <li>
                    <strong>Small (&lt;10 kb):</strong> Plasmids
                  </li>
                  <li>
                    <strong>Medium (10-40 kb):</strong> Cosmids, Fosmids
                  </li>
                  <li>
                    <strong>Large (40-300 kb):</strong> BACs
                  </li>
                  <li>
                    <strong>Very Large (&gt;300 kb):</strong> YACs
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="font-medium mb-2">Sequence Complexity:</h4>
                  <p className="text-muted-foreground">
                    Repetitive sequences, high GC content, toxic genes? May require low-copy-number vectors or
                    specialized hosts.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="font-medium mb-2">Purpose:</h4>
                  <p className="text-muted-foreground">
                    Is it a coding sequence (CDS), regulatory element (promoter, enhancer), non-coding RNA, genomic
                    fragment?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section II: Essential Vector Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <Settings className="h-6 w-6 text-primary" />
          II. Essential Vector Components & Their Selection Criteria
        </h2>

        <div className="space-y-8">
          {/* Origin of Replication */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Origin of Replication (ori)</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Copy Number:</h4>
                <p className="text-sm text-muted-foreground">
                  High-copy (pUC ori: 500-700 copies/cell) vs. Low-copy (pSC101 ori: ~5 copies/cell). High-copy = high
                  yield but potential toxicity/instability. Low-copy = stability for large/toxic inserts, better
                  stoichiometry for certain complexes.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Host Range:</h4>
                <p className="text-sm text-muted-foreground">
                  Narrow (ColE1 - primarily E. coli) vs. Broad Host Range (RK2/RP4 - works in many Gram-negative
                  bacteria). For eukaryotes, viral oris (e.g., SV40) or episomal maintenance elements (EBV oriP/EBNA1).
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Regulation:</h4>
                <p className="text-sm text-muted-foreground">Some oris are temperature-sensitive or inducible.</p>
              </div>
            </div>
          </div>

          {/* Selectable Marker */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Selectable Marker</h3>

            <p className="mb-4 text-muted-foreground">
              <strong>Purpose:</strong> To ensure only cells containing the vector grow.
            </p>

            <h4 className="font-medium mb-3">Common Types:</h4>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h5 className="font-medium mb-2">Antibiotic Resistance:</h5>
                <p className="text-sm text-muted-foreground">
                  Amp^R^ (Ampicillin), Kan^R^ (Kanamycin/Neomycin), Cm^R^ (Chloramphenicol), Tet^R^ (Tetracycline),
                  Zeo^R^ (Zeocin), Hyg^R^ (Hygromycin - common in eukaryotes). Choose based on host sensitivity and
                  compatibility with downstream applications.
                </p>
              </div>

              <div className="space-y-3">
                <div className="border rounded-lg p-3">
                  <h5 className="font-medium mb-1">Auxotrophic Markers:</h5>
                  <p className="text-sm text-muted-foreground">
                    Complement host mutations (e.g., LEU2, URA3, HIS3 in yeast; gpt in mammalian cells).
                  </p>
                </div>

                <div className="border rounded-lg p-3">
                  <h5 className="font-medium mb-1">Herbicide Resistance:</h5>
                  <p className="text-sm text-muted-foreground">
                    For plant vectors (e.g., bar for phosphinothricin/glufosinate).
                  </p>
                </div>

                <div className="border rounded-lg p-3">
                  <h5 className="font-medium mb-1">Dual Markers:</h5>
                  <p className="text-sm text-muted-foreground">
                    Often used for selection of recombinants (e.g., positive selection for insertion, negative selection
                    against backbone).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <Info className="h-6 w-6 text-primary" />
          Summary Table: Quick Reference Guide
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-muted">
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">
                  Feature
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">
                  Key Options
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">
                  Primary Considerations
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/50">
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Primary Goal</td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Cloning, Expression (Prok/Euk), Knockout, Gene Therapy, Reporter Assay
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Defines everything else</td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Host Organism</td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  E. coli, Yeast, Insect, Mammalian, Plant
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Dictates compatible ori, markers, promoters
                </td>
              </tr>

              <tr className="hover:bg-muted/50">
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Insert Size</td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  &lt;10kb (Plasmid), 10-45kb (Cosmid/Fosmid), 40-300kb (BAC), &gt;300kb (YAC)
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Choose vector type with sufficient capacity
                </td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Origin (ori)</td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  High-Copy (pUC), Low-Copy (pSC101), Shuttle, Episomal (EBV/SV40)
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Yield vs. Stability; Host compatibility
                </td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Selection Marker</td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Antibiotic (Amp, Kan, Hyg), Auxotrophic (LEU2, URA3), Herbicide (bar)
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Host sensitivity; Compatibility with experiment; Dual markers for cloning
                </td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Cloning Strategy</td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  RE/Ligation, TOPO, TA, Gateway, Gibson/In-Fusion, Golden Gate
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Convenience, efficiency, compatibility with insert, scarless requirement
                </td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Promoter (Expr.)</td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Constitutive (CMV, T7), Inducible (lac/tac, Tet, Gal)
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Strength, regulation, host specificity
                </td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Tags (Expr.)</td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Purification (His, GST), Detection (HA, GFP), Solubility (MBP, SUMO)
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Downstream application; Need for removal?
                </td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Specialized Type</td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Shuttle, Viral (AAV, LV), CRISPR, BAC/YAC, Reporter
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                  Required for specific applications (delivery, editing, large DNA, assays)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <CheckCircle className="h-6 w-6 text-primary" />
          Conclusion
        </h2>

        <div className="prose max-w-none">
          <p className="mb-4">
            There is no single "best" vector. The optimal choice is a careful balance of your experimental goal, host
            system, insert characteristics, and practical constraints. Systematically work through the considerations
            outlined in this guide:
          </p>

          <ul className="space-y-2 mb-4 list-disc list-inside">
            <li>Define your needs precisely (Goal, Host, Insert).</li>
            <li>Identify the essential core components (ori, Marker, Cloning Strategy).</li>
            <li>Add required functional elements (Promoter, Tags, Signals).</li>
            <li>Evaluate specialized needs and practicality.</li>
          </ul>

          <p>
            Consult literature for similar experiments, leverage resources like Addgene, and don't hesitate to contact
            vector providers or colleagues for advice. Careful vector selection lays the foundation for successful
            molecular biology and genetic engineering experiments.
          </p>
        </div>
      </section>

      {/* Source */}
      <footer className="border-t pt-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ExternalLink className="h-4 w-4" />
          <span>Source: synbio-tech.com</span>
          <a
            href="https://synbio-tech.com/pdf/Vector%20Atlas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            https://synbio-tech.com/pdf/Vector%20Atlas.pdf
          </a>
        </div>
      </footer>
    </div>
  )
}

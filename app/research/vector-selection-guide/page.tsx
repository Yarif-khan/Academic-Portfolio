import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowLeft,
  Target,
  Settings,
  Dna,
  FlaskConical,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Info,
  ExternalLink,
} from "lucide-react"

export default function VectorSelectionGuide() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/research" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Research
          </Link>
        </Button>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              The Ultimate Guide to Selecting a Vector in Molecular Biology & Genetic Engineering
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive framework for navigating vector selection in molecular biology experiments
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200/60 dark:border-blue-800/60 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <p className="text-blue-800 dark:text-blue-200">
              Choosing the right vector is a critical decision that can determine the success or failure of your
              experiment. This guide provides a comprehensive framework to navigate the selection process, considering
              your specific goals and experimental system.
            </p>
          </div>
        </div>
      </div>

      {/* Section I: Core Considerations */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Target className="h-6 w-6 text-orange-600" />
            I. Core Considerations: Define Your Experimental Needs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Primary Goal */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200/60 dark:border-green-800/60 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
              Primary Goal: What do you want to DO with your insert?
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Basic Cloning:</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Propagate DNA, create libraries, subclone fragments? (Plasmids, Cosmids, BACs)
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Protein Expression:</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
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

              <div className="space-y-3">
                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Gene Knockout/Knockdown:</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    CRISPR/Cas9, RNAi (shRNA), Gene Trap vectors.
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Gene Therapy/Delivery:</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Viral vectors (AAV, Lentivirus, Adenovirus), Non-viral vectors.
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Functional Studies:</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Reporter genes (Luciferase, GFP, LacZ), Promoter analysis, Protein localization (tags like GFP,
                    mCherry).
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Genome Engineering:</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    CRISPR/Cas9, TALEN, ZFN vectors (donor templates, gRNA expression).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Host System */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border border-purple-200/60 dark:border-purple-800/60 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              Host System:
            </h3>

            <div className="space-y-4">
              <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-4">
                <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Prokaryotes:</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Primarily E. coli strains (consider DH5α for cloning, BL21 for expression, specialized strains for
                  toxic proteins/unstable sequences). Needs compatible origin of replication (ori) and selection marker.
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-4">
                <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Eukaryotes:</h4>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
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

              <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-4">
                <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Cell-Free Systems:</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Primarily need promoter compatible with the extract (e.g., T7, SP6).
                </p>
              </div>
            </div>
          </div>

          {/* Insert Characteristics */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border border-amber-200/60 dark:border-amber-800/60 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Dna className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              Insert Characteristics:
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-4">
                <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-2">Size: Dictates vector capacity.</h4>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                  <li>
                    <strong>Small (&lt;10 kb):</strong> Plasmids.
                  </li>
                  <li>
                    <strong>Medium (10-40 kb):</strong> Cosmids, Fosmids.
                  </li>
                  <li>
                    <strong>Large (40-300 kb):</strong> BACs.
                  </li>
                  <li>
                    <strong>Very Large (&gt;300 kb):</strong> YACs.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-2">Sequence Complexity:</h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Repetitive sequences, high GC content, toxic genes? May require low-copy-number vectors or
                    specialized hosts.
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-2">Purpose:</h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Is it a coding sequence (CDS), regulatory element (promoter, enhancer), non-coding RNA, genomic
                    fragment?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section II: Essential Vector Components */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Settings className="h-6 w-6 text-blue-600" />
            II. Essential Vector Components & Their Selection Criteria
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Origin of Replication */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200/60 dark:border-blue-800/60 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
              Origin of Replication (ori):
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Copy Number:</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  High-copy (pUC ori: 500-700 copies/cell) vs. Low-copy (pSC101 ori: ~5 copies/cell). High-copy = high
                  yield but potential toxicity/instability. Low-copy = stability for large/toxic inserts, better
                  stoichiometry for certain complexes.
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Host Range:</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Narrow (ColE1 - primarily E. coli) vs. Broad Host Range (RK2/RP4 - works in many Gram-negative
                  bacteria). For eukaryotes, viral oris (e.g., SV40) or episomal maintenance elements (EBV oriP/EBNA1).
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Regulation:</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Some oris are temperature-sensitive or inducible.
                </p>
              </div>
            </div>
          </div>

          {/* Selectable Marker */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 border border-green-200/60 dark:border-green-800/60 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">Selectable Marker:</h3>

            <div className="mb-4 bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
              <p className="text-sm text-green-700 dark:text-green-300">
                <strong>Purpose:</strong> To ensure only cells containing the vector grow.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-green-800 dark:text-green-200">Common Types:</h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Antibiotic Resistance:</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Amp^R^ (Ampicillin), Kan^R^ (Kanamycin/Neomycin), Cm^R^ (Chloramphenicol), Tet^R^ (Tetracycline),
                    Zeo^R^ (Zeocin), Hyg^R^ (Hygromycin - common in eukaryotes). Choose based on host sensitivity and
                    compatibility with downstream applications.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                    <h5 className="font-medium text-green-800 dark:text-green-200 mb-1">Auxotrophic Markers:</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Complement host mutations (e.g., LEU2, URA3, HIS3 in yeast; gpt in mammalian cells).
                    </p>
                  </div>

                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                    <h5 className="font-medium text-green-800 dark:text-green-200 mb-1">Herbicide Resistance:</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      For plant vectors (e.g., bar for phosphinothricin/glufosinate).
                    </p>
                  </div>

                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                    <h5 className="font-medium text-green-800 dark:text-green-200 mb-1">Dual Markers:</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Often used for selection of recombinants (e.g., positive selection for insertion, negative
                      selection against backbone).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cloning Site */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200/60 dark:border-purple-800/60 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">
              Cloning Site (Multiple Cloning Site - MCS):
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Restriction Sites:</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Compatibility with your insert and cloning strategy (restriction/ligation). Need unique sites
                    flanking the MCS. Consider availability of enzymes and buffer compatibility for double digests.
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">
                    Topoisomerase Cloning (TOPO):
                  </h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Convenient for PCR products with specific overhangs.
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">TA Cloning:</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Simple cloning for PCR products with A-overhangs.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Gateway Cloning:</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Site-specific recombination (att sites) for rapid transfer between vectors. Highly flexible but
                    requires specific entry clones.
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">
                    Gibson Assembly / In-Fusion Cloning:
                  </h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Seamless, ligation-independent cloning (LIC) using overlapping homology. Highly versatile, ideal for
                    complex constructs/fusions.
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Golden Gate Assembly:</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Type IIS restriction enzyme-based modular assembly. Excellent for standard biological parts and
                    combinatorial libraries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Promoter */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-200/60 dark:border-orange-800/60 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-800 dark:text-orange-200">
              Promoter (For Expression Vectors):
            </h3>

            <div className="space-y-4">
              <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Strength:</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Weak, moderate, strong? Match to protein toxicity and desired yield.
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-4">
                <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-3">Regulation:</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Constitutive:</h5>
                    <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">Always on:</p>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• CMV, SV40, EF1α in mammals</li>
                      <li>• CaMV 35S in plants</li>
                      <li>• TEF1, ADH1 in yeast</li>
                      <li>• lac, trp in E. coli</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Inducible:</h5>
                    <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
                      Tightly controlled expression (essential for toxic proteins):
                    </p>

                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-orange-800 dark:text-orange-200">Prokaryotes:</p>
                        <ul className="text-sm text-orange-700 dark:text-orange-300">
                          <li>• IPTG (lac/tac promoters)</li>
                          <li>• Arabinose (araBAD promoter)</li>
                          <li>• Anhydrotetracycline (Tet-On/Off)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-orange-800 dark:text-orange-200">Eukaryotes:</p>
                        <ul className="text-sm text-orange-700 dark:text-orange-300">
                          <li>• Doxycycline (Tet-On/Off)</li>
                          <li>• Ecdysone/Ponasterone A</li>
                          <li>• Galactose (GAL1/10 in yeast)</li>
                          <li>• Methanol (AOX1 in P. pastoris)</li>
                          <li>• Cu^2+ (CUP1)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Host Specificity:</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Must be recognized by the host's RNA polymerase machinery (e.g., T7 promoter requires T7 RNA
                  polymerase, often supplied in specialized E. coli strains or via co-transfection/infection in
                  eukaryotes).
                </p>
              </div>
            </div>
          </div>

          {/* Additional Components */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border border-indigo-200/60 dark:border-indigo-800/60 rounded-lg p-4">
              <h4 className="font-medium text-indigo-800 dark:text-indigo-200 mb-3">
                Termination/Polyadenylation Signal (For Expression Vectors, esp. Eukaryotes):
              </h4>
              <p className="text-sm text-indigo-700 dark:text-indigo-300">
                Ensures proper mRNA processing and stability (e.g., SV40 polyA, Bovine Growth Hormone (BGH) polyA,
                synthetic polyA signals).
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border border-teal-200/60 dark:border-teal-800/60 rounded-lg p-4">
              <h4 className="font-medium text-teal-800 dark:text-teal-200 mb-3">
                Secretory Signals (For Secreted Proteins):
              </h4>
              <p className="text-sm text-teal-700 dark:text-teal-300">
                Directs protein to the secretory pathway (e.g., PelB, OmpA in E. coli; α-factor in yeast; native signal
                sequences or generic ones like Igκ in mammals).
              </p>
            </div>
          </div>

          {/* Tags & Fusion Proteins */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 border border-pink-200/60 dark:border-pink-800/60 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-pink-800 dark:text-pink-200">
              Tags & Fusion Proteins (For Expression Vectors):
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-pink-800 dark:text-pink-200 mb-2">Purification:</h4>
                  <p className="text-sm text-pink-700 dark:text-pink-300">
                    His6-tag (Ni-NTA/IMAC), GST (Glutathione resin), MBP (Amylose resin), FLAG (Anti-FLAG resin),
                    Strep-tag (Strep-Tactin resin).
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-pink-800 dark:text-pink-200 mb-2">Detection:</h4>
                  <p className="text-sm text-pink-700 dark:text-pink-300">
                    HA, c-Myc, V5 (epitope tags for antibodies), Fluorescent Proteins (GFP, RFP, mCherry -
                    localization/reporters).
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-pink-800 dark:text-pink-200 mb-2">Solubility/Stability:</h4>
                  <p className="text-sm text-pink-700 dark:text-pink-300">MBP, SUMO, Trx, NusA tags.</p>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h4 className="font-medium text-pink-800 dark:text-pink-200 mb-2">Cleavage Sites:</h4>
                  <p className="text-sm text-pink-700 dark:text-pink-300">
                    TEV, Thrombin, Factor Xa, PreScission sites between tag and protein for removal after purification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section III: Specialized Vector Types */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <FlaskConical className="h-6 w-6 text-green-600" />
            III. Specialized Vector Types & When to Use Them
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6">
            {/* Shuttle Vectors */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200/60 dark:border-blue-800/60 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Shuttle Vectors:
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Contain oris and markers for two different hosts (e.g., E. coli and Yeast, E. coli and Mammalian cells).
                Essential for constructing plasmids in E. coli before transferring to a more complex eukaryotic host.
              </p>
            </div>

            {/* Expression Vectors */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200/60 dark:border-green-800/60 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Expression Vectors:
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Optimized for high-level protein production (strong promoters, ribosome binding sites (RBS) in
                prokaryotes, terminators, tags - see above).
              </p>
            </div>

            {/* Reporter Vectors */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border border-purple-200/60 dark:border-purple-800/60 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Reporter Vectors:
              </h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Contain easily assayed reporter genes (Luciferase, GFP, β-galactosidase/LacZ) downstream of a cloning
                site for promoter/enhancer analysis.
              </p>
            </div>

            {/* Viral Vectors */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 border border-red-200/60 dark:border-red-800/60 rounded-lg p-6">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-4 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Viral Vectors (Gene Delivery/Therapy):
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                    <h5 className="font-medium text-red-800 dark:text-red-200 mb-1">Adenovirus (AdV):</h5>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      High titer, high transduction efficiency in vivo & in vitro, transient expression. Immunogenic.
                      Large capacity (~8 kb).
                    </p>
                  </div>

                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                    <h5 className="font-medium text-red-800 dark:text-red-200 mb-1">Adeno-Associated Virus (AAV):</h5>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Low immunogenicity, long-term expression in non-dividing cells, excellent safety profile. Small
                      capacity (~4.7 kb). Many serotypes with different tropisms.
                    </p>
                  </div>

                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                    <h5 className="font-medium text-red-800 dark:text-red-200 mb-1">Lentivirus (LV):</h5>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Integrates into host genome (stable expression), transduces dividing & non-dividing cells. Lower
                      immunogenicity than AdV. Capacity (~8 kb). Biosafety Level 2.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                    <h5 className="font-medium text-red-800 dark:text-red-200 mb-1">Retrovirus (RV):</h5>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Similar to LV but only transduces dividing cells. Capacity (~8 kb).
                    </p>
                  </div>

                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                    <h5 className="font-medium text-red-800 dark:text-red-200 mb-1">Baculovirus (BV):</h5>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Primarily for insect cell protein expression, but can also transduce mammalian cells (BacMam).
                      Large capacity (~30 kb).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Genome Engineering Vectors */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border border-orange-200/60 dark:border-orange-800/60 rounded-lg p-6">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-4 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Genome Engineering Vectors:
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">CRISPR Vectors:</h5>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Express Cas9 (or other nucleases) and gRNA(s). Can include homology arms for HDR (donor template).
                    Often have fluorescent markers for enrichment.
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                  <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">shRNA/miRNA Vectors:</h5>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    For stable gene knockdown. Require Pol III promoters (U6, H1).
                  </p>
                </div>
              </div>
            </div>

            {/* Large Insert Capacity Vectors */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border border-teal-200/60 dark:border-teal-800/60 rounded-lg p-6">
              <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Large Insert Capacity Vectors:
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                    <h5 className="font-medium text-teal-800 dark:text-teal-200 mb-1">Cosmids:</h5>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                      (40-45 kb). Based on lambda phage, packaged into phage particles in vitro for efficient
                      transduction.
                    </p>
                  </div>

                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                    <h5 className="font-medium text-teal-800 dark:text-teal-200 mb-1">Fosmids:</h5>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                      (~40 kb). Based on F-plasmid, single-copy in E. coli (more stable than cosmids for unstable
                      inserts).
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                    <h5 className="font-medium text-teal-800 dark:text-teal-200 mb-1">
                      Bacterial Artificial Chromosomes (BACs):
                    </h5>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                      (150-300 kb). Based on F-plasmid, single-copy, very stable for large genomic fragments. Crucial
                      for genome libraries.
                    </p>
                  </div>

                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-md p-3">
                    <h5 className="font-medium text-teal-800 dark:text-teal-200 mb-1">
                      Yeast Artificial Chromosomes (YACs):
                    </h5>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                      (&gt;300 kb). Propagated in yeast. Technically challenging, prone to chimerism/instability,
                      largely superseded by BACs/PACs for most applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section IV: Practical Selection Workflow */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Lightbulb className="h-6 w-6 text-yellow-600" />
            IV. Practical Selection Workflow & Decision Factors
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 border border-yellow-200/60 dark:border-yellow-800/60 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Start with the Goal & Host:
              </h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Clearly define step I.1 and I.2. This eliminates vast swathes of vector types immediately.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200/60 dark:border-blue-800/60 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Consider Insert Size:
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Match vector capacity. When in doubt, choose a larger capacity vector type if compatible with other
                needs.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200/60 dark:border-green-800/60 rounded-lg p-6">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Choose Core Components:
              </h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                <li>
                  <strong>ori:</strong> Required copy number & host compatibility.
                </li>
                <li>
                  <strong>Marker:</strong> Compatible with host and lab protocols (common antibiotics). Consider dual
                  markers for cloning efficiency.
                </li>
                <li>
                  <strong>Cloning Strategy:</strong> What method will you use? This dictates MCS requirements
                  (restriction sites, Gateway att sites, LIC overhangs).
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border border-purple-200/60 dark:border-purple-800/60 rounded-lg p-6">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Add Expression/Functional Elements (If Needed):
              </h4>
              <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                <li>• Promoter type & strength, inducibility.</li>
                <li>• Tags (purification, detection, solubility).</li>
                <li>• Secretion signal.</li>
                <li>• Reporter gene.</li>
                <li>• PolyA signal (eukaryotes).</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-200/60 dark:border-orange-800/60 rounded-lg p-6">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Evaluate Special Requirements:
              </h4>
              <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                <li>• Shuttle capability?</li>
                <li>• Viral delivery? (Safety level, tropism, capacity, expression kinetics).</li>
                <li>• Genome editing components?</li>
                <li>• Episomal maintenance in eukaryotes?</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border border-teal-200/60 dark:border-teal-800/60 rounded-lg p-6">
              <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Source & Practicality:
              </h4>
              <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-2">
                <li>
                  <strong>Availability:</strong> Is it commercially available from Addgene, distributors (Thermo, NEB,
                  Takara, Clontech, Invitrogen) or academic labs? Is there a kit?
                </li>
                <li>
                  <strong>Cost:</strong> Commercial vectors can be expensive; check licensing.
                </li>
                <li>
                  <strong>Sequence & Map:</strong> Is a reliable, annotated sequence/map available? Essential for primer
                  design and troubleshooting.
                </li>
                <li>
                  <strong>Validation:</strong> Is data available showing it works for similar applications?
                </li>
                <li>
                  <strong>Compatibility:</strong> Ensure all elements work together (e.g., promoter strength doesn't
                  overwhelm host, tags don't interfere with function, selection markers don't conflict).
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section V: Troubleshooting */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            V. Troubleshooting Considerations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 border border-red-200/60 dark:border-red-800/60 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">No/Low Growth After Transformation:</h4>
              <p className="text-sm text-red-700 dark:text-red-300">
                Wrong antibiotic? Incompatible ori/host? Toxic insert? Poor transformation efficiency? Damaged DNA?
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border border-orange-200/60 dark:border-orange-800/60 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">No Insert/Incorrect Insert:</h4>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                Inefficient ligation/recombination. Screen more colonies. Verify restriction sites/assembly strategy.
                Use positive-negative selection if available.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 border border-yellow-200/60 dark:border-yellow-800/60 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Low Protein Yield (Expression):
              </h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Weak promoter? Codon bias? Protein toxicity/degradation? Incorrect induction? Try lower temperature,
                different host strain, different promoter, solubility tags, lower-copy vector.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border border-purple-200/60 dark:border-purple-800/60 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                Protein Instability/Degradation:
              </h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Use protease-deficient hosts. Add stabilizing tags. Lower expression temperature. Try different fusion
                partners. Check for degradation signals.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200/60 dark:border-blue-800/60 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Incorrect Localization (Eukaryotes):
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Verify signal sequence functionality. Check for unintended localization signals in tag or insert.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border border-teal-200/60 dark:border-teal-800/60 rounded-lg p-4">
              <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">
                Vector Instability (Large Inserts/Repetitive DNA):
              </h4>
              <p className="text-sm text-teal-700 dark:text-teal-300">
                Use low-copy number vectors (BACs, Fosmids, pSC101-based plasmids). Use specialized
                recombination-deficient host strains (e.g., Stbl2, Stbl3, SURE cells).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section VI: Summary Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Info className="h-6 w-6 text-blue-600" />
            VI. Summary Table: Quick Reference Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50">
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
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Primary Goal</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    Cloning, Expression (Prok/Euk), Knockout, Gene Therapy, Reporter Assay
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Defines everything else</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Host Organism</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    E. coli, Yeast, Insect, Mammalian, Plant
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    Dictates compatible ori, markers, promoters
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Insert Size</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    &lt;10kb (Plasmid), 10-45kb (Cosmid/Fosmid), 40-300kb (BAC), &gt;300kb (YAC)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    Choose vector type with sufficient capacity
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Origin (ori)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    High-Copy (pUC), Low-Copy (pSC101), Shuttle, Episomal (EBV/SV40)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    Yield vs. Stability; Host compatibility
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">
                    Selection Marker
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    Antibiotic (Amp, Kan, Hyg), Auxotrophic (LEU2, URA3), Herbicide (bar)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    Host sensitivity; Compatibility with experiment; Dual markers for cloning
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">
                    Cloning Strategy
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    RE/Ligation, TOPO, TA, Gateway, Gibson/In-Fusion, Golden Gate
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    Convenience, efficiency, compatibility with insert, scarless requirement
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">
                    Promoter (Expr.)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    Constitutive (CMV, T7), Inducible (lac/tac, Tet, Gal)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    Strength, regulation, host specificity
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Tags (Expr.)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    Purification (His, GST), Detection (HA, GFP), Solubility (MBP, SUMO)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                    Downstream application; Need for removal?
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">
                    Specialized Type
                  </td>
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
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <CheckCircle className="h-6 w-6 text-green-600" />
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200/60 dark:border-green-800/60 rounded-lg p-6">
            <p className="text-green-800 dark:text-green-200 mb-4">
              There is no single "best" vector. The optimal choice is a careful balance of your experimental goal, host
              system, insert characteristics, and practical constraints. Systematically work through the considerations
              outlined in this guide:
            </p>

            <ul className="text-green-700 dark:text-green-300 space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                Define your needs precisely (Goal, Host, Insert).
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                Identify the essential core components (ori, Marker, Cloning Strategy).
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                Add required functional elements (Promoter, Tags, Signals).
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                Evaluate specialized needs and practicality.
              </li>
            </ul>

            <p className="text-green-800 dark:text-green-200">
              Consult literature for similar experiments, leverage resources like Addgene, and don't hesitate to contact
              vector providers or colleagues for advice. Careful vector selection lays the foundation for successful
              molecular biology and genetic engineering experiments.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Source */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/30 dark:to-slate-950/30 border border-gray-200/60 dark:border-gray-800/60 rounded-lg p-4">
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
      </div>
    </div>
  )
}

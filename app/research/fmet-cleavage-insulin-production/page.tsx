import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react"

export default function FMetCleavageInsulinProduction() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/research">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Research
        </Link>
      </Button>

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Detailed Analysis of fMet Cleavage by CNBr in Recombinant Insulin Production and Alternative Strategies
        </h1>
        <p className="text-lg text-muted-foreground mb-6">Published on: December 15, 2024</p>

        <div className="border-l-4 border-blue-500 pl-6 py-4 bg-muted/30 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold mb-2">Research Reference</h3>
          <p className="mb-3 leading-relaxed">
            <strong>
              Downstream processing of recombinant human insulin and its analogues production from E. coli inclusion
              bodies
            </strong>{" "}
            - Bioresources and Bioprocessing
          </p>
          <a
            href="https://doi.org/10.1186/s40643-021-00419-w"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium underline decoration-2 underline-offset-2"
          >
            https://doi.org/10.1186/s40643-021-00419-w
          </a>
        </div>
      </header>

      <div className="prose max-w-none space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary pb-2">Introduction</h2>
          <p className="text-lg leading-relaxed mb-6">
            The downstream processing of recombinant human insulin and its analogues from E. coli inclusion bodies is a
            complex and multi-step process essential for recovering, purifying, and formulating these life-saving
            medicines. E. coli is widely used as a host system due to its high growth rate, ease of handling, and
            cost-effectiveness, despite the intricate processing required to obtain functional polypeptides from
            inclusion bodies.
          </p>
          <p className="text-lg leading-relaxed">The general workflow for downstream processing includes:</p>
        </section>

        {/* Recovery of Inclusion Bodies */}
        <section>
          <h3 className="text-xl font-semibold mb-6">Recovery of Inclusion Bodies</h3>
          <p className="text-lg mb-6 leading-relaxed">
            The desired proteins are expressed as insoluble inclusion bodies within the E. coli cells.
          </p>

          <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50/50 dark:bg-red-950/20 rounded-r-lg mb-6">
            <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Problem
            </h4>
            <p className="leading-relaxed">
              The heterologous proteins are expressed in the form of insoluble cytoplasmic inclusion bodies and they are
              not excreted into the culture media.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50/50 dark:bg-green-950/20 rounded-r-lg mb-8">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Commercial Solution
            </h4>

            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">Extraction Methods:</h5>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="border rounded-lg p-4">
                    <h6 className="font-medium mb-2">Mechanical</h6>
                    <p className="text-sm leading-relaxed">
                      Sonication, grinding the cell suspension in a colloidal mill (e.g., Dyno-Mill), or passing cell
                      paste through a Manton-Gaulin press or French press. Mechanical methods can effectively disrupt
                      cells but may compromise protein quality.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h6 className="font-medium mb-2">Lysozyme-based</h6>
                    <p className="text-sm leading-relaxed">Lysozyme is added to digest the cell envelope.</p>
                  </div>
                </div>

                <p className="leading-relaxed">
                  Inclusion bodies, being denser than other cellular components, are then isolated from whole cell
                  lysate by membrane microfiltration or centrifugation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusion Body Washing */}
        <section>
          <h3 className="text-xl font-semibold mb-6">Inclusion Body Washing</h3>
          <p className="text-lg mb-6 leading-relaxed">
            After recovery, inclusion bodies are often heavily contaminated with host cell components.
          </p>

          <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50/50 dark:bg-red-950/20 rounded-r-lg mb-6">
            <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Problem
            </h4>
            <p className="leading-relaxed">
              Inclusion bodies recovered can be heavily contaminated with intact whole cells, host proteins, RNA,
              peptidoglycan cell wall, and membrane fragments.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50/50 dark:bg-green-950/20 rounded-r-lg mb-8">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Commercial Solution
            </h4>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h5 className="font-semibold mb-3">Inclusion body washing</h5>
                <p className="leading-relaxed mb-3">
                  The inclusion bodies must be washed sequentially to remove contaminants that often have strong ionic
                  and hydrophobic interactions with the inclusion body proteins. This step is critical to prevent
                  impurities from interfering with subsequent steps like sulfitolysis, renaturation, and enzymatic
                  digestion, which could reduce purification yield.
                </p>
                <p className="leading-relaxed mb-3">
                  Recovery of washed inclusion bodies is performed by multiple rounds of centrifugation combined with
                  re-suspension and washing of pellets with detergents and denaturants.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h5 className="font-semibold mb-2">Common wash buffer additives:</h5>
                <ul className="space-y-1 leading-relaxed list-disc list-inside">
                  <li>
                    <strong>Urea</strong> (a chaotropic agent)
                  </li>
                  <li>
                    <strong>Triton X-100</strong> (removes membrane phospholipid and fragments, facilitates dissociation
                    of debris and soluble proteins)
                  </li>
                  <li>
                    <strong>Other additives:</strong> EDTA, glycerol, NaCl, lysozyme, and Tween 20
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CNBr Cleavage Analysis */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary pb-2">
            Role of CNBr in Insulin Downstream Processing
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Recombinant human insulin production in E. coli typically involves expressing proinsulin as inclusion bodies
            with an N-terminal methionine residue (formylated to fMet during bacterial translation). The cyanogen
            bromide (CNBr) cleavage step specifically targets this methionine residue to liberate the proinsulin
            polypeptide from fusion partners or directly release the insulin chain. This method has been integral to
            commercial insulin production since Eli Lilly's pioneering "proinsulin route" in the 1980s.
          </p>

          {/* Chemical Mechanism */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">1. Chemical Mechanism of CNBr Cleavage</h3>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div className="border rounded-lg p-6">
                <h4 className="font-semibold mb-3">Reaction Chemistry</h4>
                <p className="leading-relaxed text-sm">
                  CNBr (Br-C≡N) reacts with the sulfur atom of methionine residues under acidic conditions (typically
                  70% formic acid), forming a highly reactive imidate intermediate. This undergoes nucleophilic attack
                  by water, leading to cleavage at the C-terminal peptide bond of methionine. The reaction converts
                  methionine into homoserine lactone and releases the downstream peptide with a native N-terminus.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h4 className="font-semibold mb-3">Specificity for Methionine</h4>
                <p className="leading-relaxed text-sm">
                  CNBr exhibits high selectivity for methionine due to the nucleophilicity of its sulfur atom. In
                  insulin production, it cleaves the bond between the initiator fMet and the first residue of proinsulin
                  (e.g., after sequences like fMet-AA1-AA2...proinsulin).
                </p>
              </div>
            </div>

            {/* Reaction Conditions */}
            <div className="border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Reaction Conditions:</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-3 border rounded-lg">
                  <div className="font-medium">Temperature</div>
                  <div className="text-muted-foreground text-sm">4-25°C</div>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="font-medium">Time</div>
                  <div className="text-muted-foreground text-sm">12-24 hours</div>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="font-medium">Solvent</div>
                  <div className="text-muted-foreground text-sm">70% formic acid</div>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="font-medium">Molar ratio</div>
                  <div className="text-muted-foreground text-sm">100-1,000-fold excess</div>
                </div>
              </div>
            </div>
          </div>

          {/* Drawbacks Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">2. Significant Drawbacks of CNBr Cleavage</h3>
            <p className="text-lg leading-relaxed mb-6">
              Despite its historical utility, CNBr poses critical challenges in modern bioprocessing:
            </p>

            <div className="border rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Key Limitations of CNBr in Insulin Production
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left p-4 font-semibold">Drawback</th>
                      <th className="text-left p-4 font-semibold">Molecular Basis</th>
                      <th className="text-left p-4 font-semibold">Process Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">High Toxicity</td>
                      <td className="p-4">Releases cyanide ions (CN⁻) and volatile bromine compounds</td>
                      <td className="p-4">
                        Requires specialized containment, increases safety costs, hazardous waste disposal
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Side Reactions</td>
                      <td className="p-4">
                        Cleavage at internal Met residues; homo-serine lactone hydrolysis; acid-induced aggregation
                      </td>
                      <td className="p-4">
                        Reduced yield (10-30% loss); product heterogeneity requiring additional purification steps
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Methionine Oxidation</td>
                      <td className="p-4">Incomplete cleavage due to Met oxidation to sulfoxide</td>
                      <td className="p-4">Forces harsher conditions or CNBr excess, exacerbating side reactions</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Environmental Burden</td>
                      <td className="p-4">Toxic waste (cyanide, bromine) requiring chemical neutralization</td>
                      <td className="p-4">Increases disposal costs; conflicts with green manufacturing principles</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Residue Incorporation</td>
                      <td className="p-4">Homoserine lactone at cleavage sites</td>
                      <td className="p-4">May alter insulin bioactivity if not hydrolyzed to homoserine</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Alternatives Comparison */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">3. Emerging Alternatives to CNBr Cleavage</h3>
            <p className="text-lg leading-relaxed mb-6">
              The insulin industry is actively seeking alternatives to address CNBr limitations. Multiple enzymatic,
              chemical and self-cleaving systems have been reported. Selecting the best candidate as an alternative to
              CNBr is the real challenge - No single solution is perfect - it's about trade-offs.
            </p>

            <div className="border rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Comparative Analysis of CNBr Alternatives</h4>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left p-3 font-semibold">Method</th>
                      <th className="text-left p-3 font-semibold">Specificity</th>
                      <th className="text-left p-3 font-semibold">Residue Left</th>
                      <th className="text-left p-3 font-semibold">Scalability</th>
                      <th className="text-left p-3 font-semibold">Cost</th>
                      <th className="text-left p-3 font-semibold">Toxicity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-red-50/50 dark:bg-red-950/20">
                      <td className="p-3 font-medium">CNBr</td>
                      <td className="p-3">Methionine</td>
                      <td className="p-3">Homoserine lactone</td>
                      <td className="p-3">Industrial</td>
                      <td className="p-3">Moderate</td>
                      <td className="p-3 text-red-600 font-medium">High</td>
                    </tr>
                    <tr className="border-b bg-green-50/50 dark:bg-green-950/20">
                      <td className="p-3 font-medium">TEV Protease</td>
                      <td className="p-3">7-aa sequence</td>
                      <td className="p-3">None</td>
                      <td className="p-3">Pilot scale</td>
                      <td className="p-3">Very high</td>
                      <td className="p-3 text-green-600 font-medium">None</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Acid Linkers</td>
                      <td className="p-3">Asp-Pro</td>
                      <td className="p-3">Native N-terminus</td>
                      <td className="p-3">Limited</td>
                      <td className="p-3">Low</td>
                      <td className="p-3 text-green-600 font-medium">None</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Inteins</td>
                      <td className="p-3">Self-cleaving</td>
                      <td className="p-3">None</td>
                      <td className="p-3">Lab scale</td>
                      <td className="p-3">Medium</td>
                      <td className="p-3 text-green-600 font-medium">None</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">SUMO Protease</td>
                      <td className="p-3">SUMO tag</td>
                      <td className="p-3">None</td>
                      <td className="p-3">Experimental</td>
                      <td className="p-3">High</td>
                      <td className="p-3 text-green-600 font-medium">None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* TEV Protease Solution */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary pb-2">
            A Proposed Solution - Immobilization of TEV for Continuous Processing
          </h2>

          {/* TEV Mechanism */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">1. TEV Protease: Catalytic Mechanism</h3>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div className="border rounded-lg p-6">
                <h4 className="font-semibold mb-3">Catalytic triad</h4>
                <p className="leading-relaxed text-sm mb-3">
                  TEV is a cysteine protease with a Cys–His–Asp catalytic triad, where histidine deprotonates cysteine,
                  enabling nucleophilic attack on the substrate's scissile amide carbonyl, forming a covalent
                  acyl–enzyme intermediate, then water-mediated hydrolysis releases the cleaved products.
                </p>
                <a
                  href="https://www.protean.bio/en/article/tev-protease-his6"
                  className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-sm underline decoration-1 underline-offset-2"
                >
                  https://www.protean.bio/en/article/tev-protease-his6
                </a>
              </div>

              <div className="border rounded-lg p-6">
                <h4 className="font-semibold mb-3">Sequence selectivity</h4>
                <p className="leading-relaxed text-sm mb-3">
                  It recognizes ENLYFQ|S/G/A motifs—enzyme binds through a deep β-barrel tunnel with multiple specific
                  pockets.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/TEV_protease"
                  className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-sm underline decoration-1 underline-offset-2"
                >
                  https://en.wikipedia.org/wiki/TEV_protease
                </a>
              </div>
            </div>
          </div>

          {/* Final Comparison Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">2. Comparison: CNBr vs Immobilized TEV Protease</h3>

            <div className="border rounded-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-left p-4 font-semibold">CNBr Cleavage</th>
                      <th className="text-left p-4 font-semibold">Immobilized TEV Protease</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Cleavage specificity</td>
                      <td className="p-4">Requires methionine</td>
                      <td className="p-4 bg-green-50/50 dark:bg-green-950/20">Sequence-specific ENLYFQ</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">By-products/toxicity</td>
                      <td className="p-4 bg-red-50/50 dark:bg-red-950/20">Homoserine lactone + CNBr</td>
                      <td className="p-4 bg-green-50/50 dark:bg-green-950/20">Harmless peptides/amino acids</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Reaction conditions</td>
                      <td className="p-4 bg-red-50/50 dark:bg-red-950/20">Harsh acidic conditions + toxic</td>
                      <td className="p-4 bg-green-50/50 dark:bg-green-950/20">Mild buffers, ambient temperature</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Residue scar</td>
                      <td className="p-4">Adds homoserine lactone</td>
                      <td className="p-4 bg-green-50/50 dark:bg-green-950/20">Minimal—precise native N-terminus</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Integration</td>
                      <td className="p-4">Batch chemical cleavage</td>
                      <td className="p-4 bg-green-50/50 dark:bg-green-950/20">On-column with capture/release</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Enzyme reuse</td>
                      <td className="p-4">Not possible</td>
                      <td className="p-4 bg-green-50/50 dark:bg-green-950/20">Immobilized and recyclable</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Process safety</td>
                      <td className="p-4 bg-red-50/50 dark:bg-red-950/20">Risk of toxic waste</td>
                      <td className="p-4 bg-green-50/50 dark:bg-green-950/20">Biocompatible, scalable, GMP-friendly</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">fMet removal</td>
                      <td className="p-4">Indirect, incomplete</td>
                      <td className="p-4 bg-green-50/50 dark:bg-green-950/20">Direct site-specific excision</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">3. Conclusion</h3>
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
              <p className="leading-relaxed text-lg">
                Immobilized TEV protease offers a superior solution to CNBr for fMet and tag removal during recombinant
                insulin production. Its high specificity, mild operational conditions, lack of toxic by-products, and
                capability to be immobilized and reused make it a strong candidate for modern downstream workflows
                prioritizing safety, purity, and cost-efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Research Impact */}
        <div className="border-l-4 border-purple-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
          <div className="flex items-start gap-4">
            <Lightbulb className="h-8 w-8 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Research Impact</h3>
              <p className="leading-relaxed text-lg">
                This analysis contributes to the ongoing efforts to improve recombinant insulin production processes,
                addressing both safety concerns and cost-effectiveness in pharmaceutical manufacturing while supporting
                global diabetes treatment accessibility. The proposed TEV protease immobilization strategy represents a
                significant advancement toward greener, safer, and more efficient bioprocessing methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

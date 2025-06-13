import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertTriangle, CheckCircle, Info, Lightbulb } from "lucide-react"

export default function FMetCleavageInsulinProduction() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/research">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Research
        </Link>
      </Button>

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Detailed Analysis of fMet Cleavage by CNBr in Recombinant Insulin Production and Alternative Strategies
        </h1>
        <p className="text-lg text-muted-foreground mb-6">Published on: December 15, 2024</p>
      </header>

      <div className="space-y-8">
        {/* Research Reference */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Research Reference</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-3 leading-relaxed">
                <strong>
                  Downstream processing of recombinant human insulin and its analogues production from E. coli inclusion
                  bodies
                </strong>{" "}
                - Bioresources and Bioprocessing
              </p>
              <p className="text-blue-700 dark:text-blue-300 mb-4 leading-relaxed">
                The Global Diabetes Compact was launched by the World Health Organization in April 2021 with one of its
                important goals to increase the accessibility and affordability of life-saving medicine—insulin. The
                rising prevalence of diabetes worldwide is bound to escalate the demand for recombinant insulin
                therapeutics. Currently, the majority of recombinant insulin therapeutics are produced from E. coli
                inclusion bodies. Here, a comprehensive review of downstream processing...
              </p>
              <a
                href="https://doi.org/10.1186/s40643-021-00419-w"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium underline decoration-2 underline-offset-2"
              >
                https://doi.org/10.1186/s40643-021-00419-w
              </a>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground border-b-2 border-primary pb-2">
            Introduction
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              The downstream processing of recombinant human insulin and its analogues from E. coli inclusion bodies is
              a complex and multi-step process essential for recovering, purifying, and formulating these life-saving
              medicines. E. coli is widely used as a host system due to its high growth rate, ease of handling, and
              cost-effectiveness, despite the intricate processing required to obtain functional polypeptides from
              inclusion bodies.
            </p>
            <p className="text-lg leading-relaxed">The general workflow for downstream processing includes:</p>
          </div>
        </section>

        {/* Recovery of Inclusion Bodies */}
        <section>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">Recovery of Inclusion Bodies</h3>
          <p className="text-lg mb-6 leading-relaxed">
            The desired proteins are expressed as insoluble inclusion bodies within the E. coli cells.
          </p>

          {/* Problem Box */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">Posed Problem</h4>
                <p className="text-red-800 dark:text-red-200 leading-relaxed">
                  The heterologous proteins are expressed in the form of insoluble cytoplasmic inclusion bodies and they
                  are not excreted into the culture media.
                </p>
              </div>
            </div>
          </div>

          {/* Solution Box */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
              <div className="w-full">
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  Solution Implemented Commercially
                </h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Extraction Methods:</h5>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 border border-green-300/50 dark:border-green-700/50">
                        <h6 className="font-medium text-green-800 dark:text-green-200 mb-2">Mechanical</h6>
                        <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
                          Sonication, grinding the cell suspension in a colloidal mill (e.g., Dyno-Mill), or passing
                          cell paste through a Manton-Gaulin press or French press. Mechanical methods can effectively
                          disrupt cells but may compromise protein quality.
                        </p>
                      </div>

                      <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 border border-green-300/50 dark:border-green-700/50">
                        <h6 className="font-medium text-green-800 dark:text-green-200 mb-2">Lysozyme-based</h6>
                        <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
                          Lysozyme is added to digest the cell envelope.
                        </p>
                      </div>
                    </div>

                    <p className="text-green-700 dark:text-green-300 leading-relaxed">
                      Inclusion bodies, being denser than other cellular components, are then isolated from whole cell
                      lysate by membrane microfiltration or centrifugation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Problem */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2">Posed Problem</h4>
                <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
                  Separation of inclusion bodies from cell debris.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Solution */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                  Solution Implemented Commercially
                </h4>
                <p className="text-green-800 dark:text-green-200 leading-relaxed">
                  After cell rupture, inclusion bodies can be isolated from the whole cell lysate by techniques such as
                  membrane microfiltration or centrifugation, as they are denser than other cellular components.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusion Body Washing */}
        <section>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">Inclusion Body Washing</h3>
          <p className="text-lg mb-6 leading-relaxed">
            After recovery, inclusion bodies are often heavily contaminated with host cell components.
          </p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">Posed Problem</h4>
                <p className="text-red-800 dark:text-red-200 leading-relaxed">
                  Inclusion bodies recovered can be heavily contaminated with intact whole cells, host proteins, RNA,
                  peptidoglycan cell wall, and membrane fragments.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
              <div className="w-full">
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  Solutions Implemented Commercially
                </h4>

                <div className="space-y-4">
                  <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 border border-green-300/50 dark:border-green-700/50">
                    <h5 className="font-semibold text-green-800 dark:text-green-200 mb-3">Inclusion body washing</h5>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed mb-3">
                      The inclusion bodies must be washed sequentially to remove contaminants that often have strong
                      ionic and hydrophobic interactions with the inclusion body proteins. This step is critical to
                      prevent impurities from interfering with subsequent steps like sulfitolysis, renaturation, and
                      enzymatic digestion, which could reduce purification yield.
                    </p>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed mb-3">
                      Recovery of washed inclusion bodies is performed by multiple rounds of centrifugation combined
                      with re-suspension and washing of pellets with detergents and denaturants.
                    </p>
                  </div>

                  <div className="bg-blue-50/50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-300/50 dark:border-blue-700/50">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Common wash buffer additives:
                    </h5>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-1 leading-relaxed">
                      <li>
                        <strong>Urea</strong> (a chaotropic agent)
                      </li>
                      <li>
                        <strong>Triton X-100</strong> (removes membrane phospholipid and fragments, facilitates
                        dissociation of debris and soluble proteins)
                      </li>
                      <li>
                        <strong>Other additives:</strong> EDTA, glycerol, NaCl, lysozyme, and Tween 20
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusion Body Solubilization and Oxidative Sulfitolysis */}
        <section>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">
            Inclusion Body Solubilization and Oxidative Sulfitolysis
          </h3>
          <p className="text-lg mb-6 leading-relaxed">
            The washed inclusion bodies contain misfolded protein aggregates which are solubilized and sulfitolysis is
            performed.
          </p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">Posed Problem</h4>
                <p className="text-red-800 dark:text-red-200 leading-relaxed">
                  Inclusion bodies contain protein in a stable non-native conformation and are relatively insoluble in
                  aqueous buffers, posing substantial challenges in purification.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
              <div className="w-full">
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  Commercially Implemented Solution
                </h4>

                <div className="space-y-6">
                  <div className="bg-white/50 dark:bg-black/20 rounded-lg p-5 border border-green-300/50 dark:border-green-700/50">
                    <h5 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                      Inclusion body solubilization:
                    </h5>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed mb-3">
                      Washed inclusion bodies must be solubilized with a solubilization buffer solution to recover the
                      recombinant protein.
                    </p>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed mb-3">
                      Conventionally, high concentrations of denaturants like guanidine hydrochloride (GdnHCl) and urea
                      (8 M urea) are used for complete disruption of protein structure.
                    </p>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed mb-3">
                      For proteins with numerous cysteine residues, dithiothreitol (DTT) or β-mercaptoethanol (BME) may
                      be added to reduce incorrect disulfide-bond formation.
                    </p>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed mb-2">
                      Solubilization is typically carried out under alkaline conditions above pH 8;
                    </p>

                    <div className="bg-blue-50/70 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-300/50 dark:border-blue-700/50 mt-3">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-blue-800 dark:text-blue-200 mb-1">Why?</p>
                          <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
                            Alkaline pH alters the protein's charge, leading to greater repulsion between molecules and
                            preventing them from sticking together to form aggregates.
                          </p>
                          <a
                            href="https://doi.org/10.1186/s12896-018-0486-2"
                            className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-sm underline decoration-1 underline-offset-2"
                          >
                            https://doi.org/10.1186/s12896-018-0486-2
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/50 dark:bg-black/20 rounded-lg p-5 border border-green-300/50 dark:border-green-700/50">
                    <h5 className="font-semibold text-green-800 dark:text-green-200 mb-3">Oxidative sulfitolysis:</h5>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed mb-3">
                      This process involves adding SO₃ groups to the SH of cysteine residues in proinsulin polypeptides
                      to form protein-S-sulfonate, in the presence of a high concentration of denaturing reagent (e.g.,
                      6 M GdnHCl or 8 M urea).
                    </p>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed mb-3">
                      This step is crucial to maintain the unfolded form of proinsulin and prevent the formation of
                      potentially incorrect disulfide bonds during solubilization and initial purification. It also aids
                      in improving subsequent refolding yield.
                    </p>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed">
                      Carried out with sodium sulfite (reducing agent) and sodium tetrathionate (oxidizing agent) at a
                      molar ratio of at least 2:1. Sodium tetrathionate is preferred over other oxidizing agents for
                      shorter reaction times. Buffer exchange and desalting can be performed to remove sulfitolysis
                      salts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cyanogen Bromide (CNBr) Cleavage */}
        <section>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">Cyanogen Bromide (CNBr) Cleavage</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Recombinant proinsulin is often produced as a fusion protein with an N-terminal extension containing fMet,
            which needs to be removed.
          </p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">Posed Problem</h4>
                <p className="text-red-800 dark:text-red-200 leading-relaxed">
                  The N-terminal extension of the recombinant protein, containing N-formylmethionine (fMet), must be
                  removed as it is recognized by the human immune system as a foreign body, potentially causing unwanted
                  immunogenic reactions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
              <div className="w-full">
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  Solution Implemented Commercially
                </h4>

                <div className="space-y-4">
                  <div className="bg-white/50 dark:bg-black/20 rounded-lg p-5 border border-green-300/50 dark:border-green-700/50">
                    <h5 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                      Cyanogen bromide (CNBr) cleavage:
                    </h5>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed mb-3">
                      The methionine linker of proinsulin can be cleaved off with CNBr before purification.
                    </p>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed mb-3">
                      This process involves suspending the protein sample in 70% formic acid and incubating with CNBr at
                      room temperature in darkness for 12-16 h.
                    </p>

                    <div className="bg-red-50/70 dark:bg-red-950/30 rounded-lg p-4 border border-red-300/50 dark:border-red-700/50 mt-3">
                      <p className="text-red-800 dark:text-red-200 leading-relaxed">
                        <strong>Disadvantages of CNBr cleavage include:</strong> low cleavage specificity, prolonged
                        evaporation, high toxicity, volatility, and possible chemical modifications of the released
                        products.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50/50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-300/50 dark:border-blue-700/50">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Alternative:</h5>
                    <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                      Protein proteases can be used to cleave fusion proteins, but caution is needed to ensure the
                      protease cleaves at the correct site to remove the N-terminal fused peptide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Continue with remaining sections using similar enhanced formatting... */}
        {/* For brevity, I'll show the pattern for the next few sections */}

        {/* Buffer Exchange */}
        <section>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">Buffer Exchange</h3>
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-8">
            <p className="text-purple-800 dark:text-purple-200 leading-relaxed">
              This step is necessary to remove or reduce reagents from earlier stages that could adversely affect
              protein function or stability, making the protein samples compatible with subsequent purification steps.
              Techniques include dialysis (traditional, suitable for sensitive proteins), diafiltration (efficient for
              desalting and concentrating samples), and size exclusion chromatography (SEC) (faster, separates by size).
            </p>
          </div>
        </section>

        {/* Role of CNBr in Insulin Downstream Processing */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground border-b-2 border-primary pb-2">
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
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">
              1. Chemical Mechanism of CNBr Cleavage
            </h3>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Reaction Chemistry</h4>
                <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-sm">
                  CNBr (Br-C≡N) reacts with the sulfur atom of methionine residues under acidic conditions (typically
                  70% formic acid), forming a highly reactive imidate intermediate. This undergoes nucleophilic attack
                  by water, leading to cleavage at the C-terminal peptide bond of methionine. The reaction converts
                  methionine into homoserine lactone and releases the downstream peptide with a native N-terminus.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Specificity for Methionine</h4>
                <p className="text-green-800 dark:text-green-200 leading-relaxed text-sm">
                  CNBr exhibits high selectivity for methionine due to the nucleophilicity of its sulfur atom. In
                  insulin production, it cleaves the bond between the initiator fMet and the first residue of proinsulin
                  (e.g., after sequences like fMet-AA1-AA2...proinsulin).
                </p>
              </div>
            </div>

            {/* Reaction Conditions */}
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/30 border border-slate-200 dark:border-slate-800 rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Reaction Conditions:</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white/50 dark:bg-black/20 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
                  <div className="font-medium text-slate-800 dark:text-slate-200">Temperature</div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm">4-25°C</div>
                </div>
                <div className="text-center p-3 bg-white/50 dark:bg-black/20 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
                  <div className="font-medium text-slate-800 dark:text-slate-200">Time</div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm">12-24 hours</div>
                </div>
                <div className="text-center p-3 bg-white/50 dark:bg-black/20 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
                  <div className="font-medium text-slate-800 dark:text-slate-200">Solvent</div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm">70% formic acid</div>
                </div>
                <div className="text-center p-3 bg-white/50 dark:bg-black/20 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
                  <div className="font-medium text-slate-800 dark:text-slate-200">Molar ratio</div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm">100-1,000-fold excess</div>
                </div>
              </div>
            </div>
          </div>

          {/* Drawbacks Table */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">
              2. Significant Drawbacks of CNBr Cleavage
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Despite its historical utility, CNBr poses critical challenges in modern bioprocessing:
            </p>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Key Limitations of CNBr in Insulin Production
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-red-300 dark:border-red-700">
                      <th className="text-left p-4 font-semibold text-red-900 dark:text-red-100">Drawback</th>
                      <th className="text-left p-4 font-semibold text-red-900 dark:text-red-100">Molecular Basis</th>
                      <th className="text-left p-4 font-semibold text-red-900 dark:text-red-100">Process Impact</th>
                    </tr>
                  </thead>
                  <tbody className="text-red-800 dark:text-red-200">
                    <tr className="border-b border-red-200 dark:border-red-800">
                      <td className="p-4 font-medium">High Toxicity</td>
                      <td className="p-4">Releases cyanide ions (CN⁻) and volatile bromine compounds</td>
                      <td className="p-4">
                        Requires specialized containment, increases safety costs, hazardous waste disposal
                      </td>
                    </tr>
                    <tr className="border-b border-red-200 dark:border-red-800">
                      <td className="p-4 font-medium">Side Reactions</td>
                      <td className="p-4">
                        Cleavage at internal Met residues; homo-serine lactone hydrolysis; acid-induced aggregation
                      </td>
                      <td className="p-4">
                        Reduced yield (10-30% loss); product heterogeneity requiring additional purification steps
                      </td>
                    </tr>
                    <tr className="border-b border-red-200 dark:border-red-800">
                      <td className="p-4 font-medium">Methionine Oxidation</td>
                      <td className="p-4">Incomplete cleavage due to Met oxidation to sulfoxide</td>
                      <td className="p-4">Forces harsher conditions or CNBr excess, exacerbating side reactions</td>
                    </tr>
                    <tr className="border-b border-red-200 dark:border-red-800">
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
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">
              3. Emerging Alternatives to CNBr Cleavage
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              The insulin industry is actively seeking alternatives to address CNBr limitations, multiple enzymatic,
              chemical and self-cleaving systems have been reported. Selecting the best candidate as an alternative to
              CNBr is the real challenge - No single solution is perfect - it's about trade-offs.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                Comparative Analysis of CNBr Alternatives
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-blue-300 dark:border-blue-700">
                      <th className="text-left p-3 font-semibold text-blue-900 dark:text-blue-100">Method</th>
                      <th className="text-left p-3 font-semibold text-blue-900 dark:text-blue-100">Specificity</th>
                      <th className="text-left p-3 font-semibold text-blue-900 dark:text-blue-100">Residue Left</th>
                      <th className="text-left p-3 font-semibold text-blue-900 dark:text-blue-100">Scalability</th>
                      <th className="text-left p-3 font-semibold text-blue-900 dark:text-blue-100">Cost</th>
                      <th className="text-left p-3 font-semibold text-blue-900 dark:text-blue-100">Toxicity</th>
                    </tr>
                  </thead>
                  <tbody className="text-blue-800 dark:text-blue-200">
                    <tr className="border-b border-blue-200 dark:border-blue-800 bg-red-50/50 dark:bg-red-950/20">
                      <td className="p-3 font-medium">CNBr</td>
                      <td className="p-3">Methionine</td>
                      <td className="p-3">Homoserine lactone</td>
                      <td className="p-3">Industrial</td>
                      <td className="p-3">Moderate</td>
                      <td className="p-3 text-red-600 dark:text-red-400 font-medium">High</td>
                    </tr>
                    <tr className="border-b border-blue-200 dark:border-blue-800 bg-green-50/50 dark:bg-green-950/20">
                      <td className="p-3 font-medium">TEV Protease</td>
                      <td className="p-3">7-aa sequence</td>
                      <td className="p-3">None</td>
                      <td className="p-3">Pilot scale</td>
                      <td className="p-3">Very high</td>
                      <td className="p-3 text-green-600 dark:text-green-400 font-medium">None</td>
                    </tr>
                    <tr className="border-b border-blue-200 dark:border-blue-800">
                      <td className="p-3 font-medium">Acid Linkers</td>
                      <td className="p-3">Asp-Pro</td>
                      <td className="p-3">Native N-terminus</td>
                      <td className="p-3">Limited</td>
                      <td className="p-3">Low</td>
                      <td className="p-3 text-green-600 dark:text-green-400 font-medium">None</td>
                    </tr>
                    <tr className="border-b border-blue-200 dark:border-blue-800">
                      <td className="p-3 font-medium">Inteins</td>
                      <td className="p-3">Self-cleaving</td>
                      <td className="p-3">None</td>
                      <td className="p-3">Lab scale</td>
                      <td className="p-3">Medium</td>
                      <td className="p-3 text-green-600 dark:text-green-400 font-medium">None</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">SUMO Protease</td>
                      <td className="p-3">SUMO tag</td>
                      <td className="p-3">None</td>
                      <td className="p-3">Experimental</td>
                      <td className="p-3">High</td>
                      <td className="p-3 text-green-600 dark:text-green-400 font-medium">None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* TEV Protease Solution */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground border-b-2 border-primary pb-2">
            A Proposed Solution - Immobilization of TEV for Continuous Processing
          </h2>

          {/* TEV Mechanism */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">
              1. TEV Protease: Catalytic Mechanism
            </h3>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Catalytic triad</h4>
                <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed text-sm mb-3">
                  TEV is a cysteine protease with a Cys–His–Asp catalytic triad, where histidine deprotonates cysteine,
                  enabling nucleophilic attack on the substrate's scissile amide carbonyl, forming a covalent
                  acyl–enzyme intermediate, then water-mediated hydrolysis releases the cleaved products.
                </p>
                <a
                  href="https://www.protean.bio/en/article/tev-protease-his6"
                  className="inline-block text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-200 text-sm underline decoration-1 underline-offset-2"
                >
                  https://www.protean.bio/en/article/tev-protease-his6
                </a>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border border-cyan-200 dark:border-cyan-800 rounded-lg p-6">
                <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3">Sequence selectivity</h4>
                <p className="text-cyan-800 dark:text-cyan-200 leading-relaxed text-sm mb-3">
                  It recognizes ENLYFQ|S/G/A motifs—enzyme binds through a deep β-barrel tunnel with multiple specific
                  pockets.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/TEV_protease"
                  className="inline-block text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200 text-sm underline decoration-1 underline-offset-2"
                >
                  https://en.wikipedia.org/wiki/TEV_protease
                </a>
              </div>
            </div>
          </div>

          {/* Final Comparison Table */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">
              4. Comparison Table: CNBr vs Immobilized TEV Protease
            </h3>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green-300 dark:border-green-700">
                      <th className="text-left p-4 font-semibold text-green-900 dark:text-green-100">Feature</th>
                      <th className="text-left p-4 font-semibold text-green-900 dark:text-green-100">CNBr Cleavage</th>
                      <th className="text-left p-4 font-semibold text-green-900 dark:text-green-100">
                        Immobilized TEV Protease
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-green-800 dark:text-green-200">
                    <tr className="border-b border-green-200 dark:border-green-800">
                      <td className="p-4 font-medium">Cleavage specificity</td>
                      <td className="p-4">Requires methionine</td>
                      <td className="p-4 bg-green-100/50 dark:bg-green-900/20">Sequence-specific ENLYFQ</td>
                    </tr>
                    <tr className="border-b border-green-200 dark:border-green-800">
                      <td className="p-4 font-medium">By-products/toxicity</td>
                      <td className="p-4 bg-red-100/50 dark:bg-red-900/20">Homoserine lactone + CNBr</td>
                      <td className="p-4 bg-green-100/50 dark:bg-green-900/20">Harmless peptides/amino acids</td>
                    </tr>
                    <tr className="border-b border-green-200 dark:border-green-800">
                      <td className="p-4 font-medium">Reaction conditions</td>
                      <td className="p-4 bg-red-100/50 dark:bg-red-900/20">Harsh acidic conditions + toxic</td>
                      <td className="p-4 bg-green-100/50 dark:bg-green-900/20">Mild buffers, ambient temperature</td>
                    </tr>
                    <tr className="border-b border-green-200 dark:border-green-800">
                      <td className="p-4 font-medium">Residue scar</td>
                      <td className="p-4">Adds homoserine lactone</td>
                      <td className="p-4 bg-green-100/50 dark:bg-green-900/20">Minimal—precise native N-terminus</td>
                    </tr>
                    <tr className="border-b border-green-200 dark:border-green-800">
                      <td className="p-4 font-medium">Integration</td>
                      <td className="p-4">Batch chemical cleavage</td>
                      <td className="p-4 bg-green-100/50 dark:bg-green-900/20">On-column with capture/release</td>
                    </tr>
                    <tr className="border-b border-green-200 dark:border-green-800">
                      <td className="p-4 font-medium">Enzyme reuse</td>
                      <td className="p-4">Not possible</td>
                      <td className="p-4 bg-green-100/50 dark:bg-green-900/20">Immobilized and recyclable</td>
                    </tr>
                    <tr className="border-b border-green-200 dark:border-green-800">
                      <td className="p-4 font-medium">Process safety</td>
                      <td className="p-4 bg-red-100/50 dark:bg-red-900/20">Risk of toxic waste</td>
                      <td className="p-4 bg-green-100/50 dark:bg-green-900/20">
                        Biocompatible, scalable, GMP-friendly
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">fMet removal</td>
                      <td className="p-4">Indirect, incomplete</td>
                      <td className="p-4 bg-green-100/50 dark:bg-green-900/20">Direct site-specific excision</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">5. Conclusion</h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-lg">
                Immobilized TEV protease offers a superior solution to CNBr for fMet and tag removal during recombinant
                insulin production. Its high specificity, mild operational conditions, lack of toxic by-products, and
                capability to be immobilized and reused make it a strong candidate for modern downstream workflows
                prioritizing safety, purity, and cost-efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Research Impact */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <Lightbulb className="h-8 w-8 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">Research Impact</h3>
              <p className="text-purple-800 dark:text-purple-200 leading-relaxed text-lg">
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

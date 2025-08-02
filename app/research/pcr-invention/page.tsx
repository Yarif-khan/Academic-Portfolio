import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Settings, Info, CheckCircle, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function PCROriginBlog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Button asChild variant="ghost" className="mb-4">
        <Link href="/research" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Research
        </Link>
      </Button>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          The Accidental Amplifier: How PCR's Greatest Strength Wasn't Its Original Goal
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Kary Mullis didn't set out to copy DNA. He just wanted to <strong>see</strong> it clearly. Here's why that
          distinction changed biology forever.
        </p>
        <p>
          Picture this: It's 1983. You're hunting for a single misspelled word hidden in a library containing three
          billion books. Your tools? A flickering flashlight and a magnifying glass. That was the reality for molecular
          biologists searching for mutations inside the human genome. At <strong>Cetus Corporation</strong>, one
          researcher—<strong>Kary Mullis</strong>—was trying to pinpoint a single genetic change in the β-globin gene
          that causes <strong>sickle-cell anemia</strong>.
        </p>
        <p>
          The problem wasn't finding the location of this mutation—scientists already knew where to look. The problem
          was <strong>seeing it at all</strong>. Hybridization assays and blotting techniques offered faint signals,
          easily drowned out by the immense complexity of the genome.
        </p>
      </header>

      {/* Problem Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <Settings className="h-6 w-6 text-primary" />
          The Problem: Detection, Not Duplication
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Kary Mullis Image */}
          <div className="w-48 h-48 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/kary-mullis.webp"
              alt="Kary Mullis, inventor of PCR, in a contemplative black and white portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 192px"
            />
          </div>
          <div className="flex-1">
            <p className="text-muted-foreground mb-4">
              In the early 1980s, genetic diagnostics were tedious. Detecting a single nucleotide change required
              extracting large amounts of DNA, cutting it into fragments, running gels, transferring to membranes
              (Southern blotting), and probing with labeled oligonucleotides. This process was slow, expensive, and
              often inconclusive.
            </p>
            <blockquote className="border-l-4 pl-4 italic mb-4">
              "What I needed was some method of <strong>raising the relative concentration</strong> of the specific site
              of interest. What I needed was PCR." – Kary Mullis, Nobel Lecture
            </blockquote>
            <p>
              The irony? He didn't set out to build a DNA photocopier. He just wanted to make{" "}
              <strong>mutations easier to detect</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Existing Tools Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <Info className="h-6 w-6 text-primary" />
          Why Existing Tools Failed
        </h2>
        <h3 className="font-medium mb-2">Oligomer Restriction</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
          <li>Radioactive labeling required special handling and posed safety concerns.</li>
          <li>Weak signals meant days of exposure to X-ray films.</li>
          <li>Time intensive—sometimes weeks for one reliable result.</li>
        </ul>
        <p>
          The underlying enemy was <strong>background noise</strong>. Human genomic DNA is vast, and a probe designed
          for one short sequence often found near matches elsewhere.
        </p>
      </section>

      {/* Eureka Moment Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <CheckCircle className="h-6 w-6 text-primary" />
          Mullis's Midnight Drive & the "E-ureka"
        </h2>
        <p className="text-muted-foreground mb-4">
          In May 1983, while driving through Mendocino County at night, Mullis had his famous insight: use{" "}
          <strong>two primers</strong> instead of one, placed on either side of the DNA segment of interest. Denature
          the DNA with heat, let the primers bind, extend them with polymerase, and repeat the cycle. Each round would
          double the number of target sequences: 1 → 2 → 4 → 8… after 30 cycles, over <strong>a billion copies</strong>{" "}
          of the desired DNA fragment would exist.
        </p>
        <p>
          The target sequence, once almost invisible, would now flood the tube. Detection wouldn't require radioactive
          tricks or weeks of blots—the sequence would practically announce itself.
        </p>
      </section>

      {/* Challenges Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <Settings className="h-6 w-6 text-primary" />
          Early Stumbles & Skepticism
        </h2>
        <p className="text-muted-foreground mb-4">
          Mullis quickly ran into a practical problem: <strong>heat kills enzymes</strong>. The standard DNA polymerase
          from <em>E. coli</em> denatured at the 94–95 °C needed for DNA strand separation, forcing scientists to
          manually add fresh polymerase after each cycle—30 rounds of pipetting for a single experiment.
        </p>
        <p className="text-muted-foreground">
          Early PCR experiments produced inconsistent results. Many at Cetus were unconvinced. Yet a small team
          continued refining the technique, publishing the first demonstration of PCR-based sickle-cell mutation
          detection in <em>Science</em> (1985). The impact? A 220,000-fold amplification of the β-globin target—making
          mutation detection <strong>simple and fast</strong> for the first time.
        </p>
      </section>

      {/* Pivot Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <Info className="h-6 w-6 text-primary" />
          The Pivot: Amplification Steals the Spotlight
        </h2>
        <p className="mb-4">
          The breakthrough moment came with the adoption of <strong>Taq polymerase</strong>, an enzyme from the
          heat-loving bacterium <em>Thermus aquaticus</em>, which survived repeated heating to 95 °C. This removed the
          need to manually add new enzyme after each cycle and enabled full automation with thermal cyclers.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Forensic science: identifying suspects from trace biological evidence.</li>
          <li>Infectious disease diagnostics: detecting HIV, hepatitis, and SARS-CoV-2.</li>
          <li>Prenatal testing: screening for genetic disorders with tiny fetal samples.</li>
          <li>Molecular cloning: speeding up gene discovery and protein engineering.</li>
        </ul>
        <p>
          PCR's reputation transformed from a niche diagnostic workaround to the central pillar of modern molecular
          biology.
        </p>
      </section>

      {/* Legacy Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b-2 border-primary pb-2">
          <CheckCircle className="h-6 w-6 text-primary" />
          The Irony & Legacy
        </h2>
        <p className="mb-4">
          PCR was invented not because Mullis set out to amplify DNA for cloning or forensics, but because he needed a
          better <strong>signal-to-noise ratio</strong> in mutation detection. What he built—by accident—was the
          equivalent of inventing the printing press while just trying to make a better pair of glasses.
        </p>
        <blockquote className="border-l-4 pl-4 italic">
          Sometimes the best way to solve a problem isn't to improve detection—it's to change the game entirely.
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="border-t pt-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ExternalLink className="h-4 w-4" />
          <span>
            Source:{" "}
            <a href="https://www.nobelprize.org/prizes/chemistry/1993/mullis/lecture/">
              Nobel Lecture & Science (1983)
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

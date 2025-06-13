import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const courseCategories = [
  {
    name: "Foundations",
    courses: [
      {
        code: "CS101",
        name: "Introduction to Computing",
        description: "Fundamentals of computing, programming concepts, and problem-solving approaches.",
      },
      {
        code: "CHEM101",
        name: "Applied Chemistry",
        description: "Practical applications of chemical principles in biological and industrial contexts.",
      },
      {
        code: "PHYS101",
        name: "Applied Physics",
        description: "Physical principles and their applications in biological systems and technology.",
      },
      {
        code: "MATH101",
        name: "Basic Mathematics",
        description: "Essential mathematical concepts for scientific research and data analysis.",
      },
    ],
  },
  {
    name: "Core Subjects",
    courses: [
      {
        code: "BIO201",
        name: "Biochemistry I",
        description: "Study of the chemical processes and substances occurring in living organisms.",
      },
      {
        code: "BIO202",
        name: "Biochemistry II",
        description: "Advanced biochemical pathways, metabolism, and molecular mechanisms.",
      },
      {
        code: "BIO210",
        name: "Cell Biology",
        description: "Structure, function, and organization of cells as the fundamental units of life.",
      },
      {
        code: "BIO220",
        name: "Microbiology",
        description: "Study of microorganisms including bacteria, viruses, fungi, and their applications.",
      },
      {
        code: "BIO230",
        name: "Classical Genetics",
        description: "Principles of inheritance, gene expression, and genetic variation in organisms.",
      },
      {
        code: "BIO240",
        name: "Molecular Biology",
        description: "Study of molecular mechanisms of genetic information and cellular processes.",
      },
      {
        code: "BIO250",
        name: "Genetic Engineering",
        description: "Techniques and applications for manipulating genetic material for research and biotechnology.",
      },
    ],
  },
  {
    name: "Advanced Topics",
    courses: [
      {
        code: "BIO301",
        name: "Biophysics",
        description: "Application of physical principles and methods to understand biological systems.",
      },
      {
        code: "STAT310",
        name: "Biomedical Statistics",
        description: "Statistical methods and their applications in biomedical research and clinical trials.",
      },
      {
        code: "CHEM320",
        name: "Analytical Chemistry & Instrumentation",
        description: "Techniques and instruments used for chemical analysis in research and industry.",
      },
      {
        code: "ENG330",
        name: "Technical Report Writing",
        description: "Effective communication of scientific findings through well-structured technical reports.",
      },
    ],
  },
]

export default function Courses() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Key Coursework</h1>

      {courseCategories.map((category) => (
        <div key={category.name} className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {category.courses.map((course) => (
              <Card key={course.code}>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{course.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{course.code}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

import { BlogPost } from "@/components/blog-post"

const posts = [
  {
    title: "The Future of Synthetic Biology",
    date: "2023-05-15",
    summary:
      "Exploring the potential applications and ethical considerations of synthetic biology in various industries.",
    link: "/blog/future-of-synthetic-biology",
  },
  {
    title: "Emerging Trends in Bioprocessing",
    date: "2023-04-22",
    summary:
      "An overview of the latest advancements in bioprocessing techniques and their impact on biopharmaceutical production.",
    link: "/blog/emerging-trends-bioprocessing",
  },
  // Add more blog posts as needed
]

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  )
}


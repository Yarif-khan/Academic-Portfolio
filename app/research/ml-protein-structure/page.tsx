import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Settings, Info, CheckCircle, ExternalLink } from "lucide-react";

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
          Machine Learning in Protein Structure Prediction
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Working on it!
        </p>
      </header>
    </div>
  );
}

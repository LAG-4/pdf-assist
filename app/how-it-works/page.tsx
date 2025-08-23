import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Upload, Search, MessageCircle, Shield, UserCheck } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "1. Upload Documents",
    description: "HR administrators upload PDF policy documents through the secure admin interface",
    details: ["Drag & drop PDF files", "Automatic processing", "Metadata extraction", "Version control"]
  },
  {
    icon: Search,
    title: "2. AI Processing",
    description: "Documents are processed using OpenAI embeddings for semantic understanding",
    details: ["Text extraction", "Vector embeddings", "Semantic indexing", "Chunk optimization"]
  },
  {
    icon: MessageCircle,
    title: "3. Ask Questions",
    description: "Employees ask questions through the chat interface in natural language",
    details: ["Natural language queries", "Context understanding", "Multi-turn conversations", "Mobile-friendly"]
  },
  {
    icon: Shield,
    title: "4. Secure Search",
    description: "System searches vectorized documents without exposing source content",
    details: ["Semantic search", "Relevant excerpts", "Source isolation", "Access control"]
  },
  {
    icon: UserCheck,
    title: "5. AI Response",
    description: "Gemini 2.5 Flash generates contextual answers based on relevant policy excerpts",
    details: ["Contextual responses", "Accurate information", "Policy references", "Instant delivery"]
  }
]

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">How It Works</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A simple 5-step process that transforms your policy documents into an intelligent AI assistant
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.title} className="relative">
            <div className="flex gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle className="text-2xl">{step.title}</CardTitle>
                  <CardDescription className="text-lg">{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            {index < steps.length - 1 && (
              <div className="absolute left-8 top-20 w-0.5 h-16 bg-border" />
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Button size="lg" className="text-lg px-8 py-6">
          Get Started Today
        </Button>
      </div>
    </div>
  )
}
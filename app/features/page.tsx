import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Zap, Users, FileText, Brain } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure Document Access",
    description: "HR maintains full control over sensitive documents while employees get instant answers through AI.",
    details: ["Role-based permissions", "Document isolation", "Audit trails", "Encrypted storage"]
  },
  {
    icon: Brain,
    title: "AI-Powered Answers",
    description: "Advanced AI understands context and provides accurate responses from your policy documents.",
    details: ["OpenAI embeddings", "Gemini 2.5 Flash", "Semantic search", "Contextual understanding"]
  },
  {
    icon: Zap,
    title: "Real-Time Responses",
    description: "Get instant answers to policy questions without waiting for HR responses or email chains.",
    details: ["Sub-second responses", "24/7 availability", "Concurrent users", "Mobile optimized"]
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Different access levels for HR administrators and employees with granular permissions.",
    details: ["HR document management", "Employee chat access", "User management", "Permission controls"]
  },
  {
    icon: FileText,
    title: "Smart Document Processing",
    description: "Automatically process and index PDF documents with intelligent chunking and metadata extraction.",
    details: ["PDF processing", "OCR support", "Version control", "Duplicate detection"]
  },
  {
    icon: CheckCircle,
    title: "Compliance & Audit",
    description: "Maintain compliance with detailed audit logs and track all document access and modifications.",
    details: ["Access logs", "Change tracking", "Compliance reports", "Data retention"]
  }
]

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Powerful Features</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to manage company policies efficiently with AI-powered assistance
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {feature.details.map((detail) => (
                  <li key={detail} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
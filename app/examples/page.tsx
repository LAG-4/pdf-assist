import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Clock, User, FileText } from "lucide-react"

const examples = [
  {
    category: "Leave Policies",
    icon: Clock,
    color: "text-blue-500",
    questions: [
      {
        question: "How many vacation days do I get per year?",
        answer: "Full-time employees receive 21 vacation days per year, accrued monthly at 1.75 days per month. Part-time employees receive pro-rated vacation based on their scheduled hours.",
        source: "Employee Handbook 2024, Section 4.2"
      },
      {
        question: "What's the process for requesting sick leave?",
        answer: "Notify your manager via email or phone within 2 hours of your shift start. Submit a sick leave form within 24 hours. Doctor's note required for absences longer than 3 consecutive days.",
        source: "Leave Policy Document, Page 12"
      }
    ]
  },
  {
    category: "Remote Work",
    icon: User,
    color: "text-green-500",
    questions: [
      {
        question: "Can I work from home permanently?",
        answer: "Permanent remote work is available for eligible positions after 90 days of employment. Must maintain productivity metrics and have manager approval. Quarterly reviews required.",
        source: "Remote Work Policy, Section 2.1"
      },
      {
        question: "What equipment does the company provide for home office?",
        answer: "Company provides laptop, monitor, keyboard, mouse, and $500 setup allowance. Internet reimbursement up to $50/month. Additional equipment requires manager approval.",
        source: "Remote Work Policy, Section 3.4"
      }
    ]
  },
  {
    category: "Benefits",
    icon: FileText,
    color: "text-purple-500",
    questions: [
      {
        question: "When does health insurance coverage start?",
        answer: "Health insurance coverage begins on the first day of the month following your start date. You have 30 days from start date to enroll without medical underwriting.",
        source: "Benefits Guide 2024, Health Insurance Section"
      },
      {
        question: "What's the 401k matching policy?",
        answer: "Company matches 100% of employee contributions up to 4% of salary. Vesting schedule: 20% per year, fully vested after 5 years. Enrollment opens quarterly.",
        source: "Retirement Benefits Policy"
      }
    ]
  }
]

export default function ExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Real Examples</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See how employees get instant, accurate answers to common policy questions
        </p>
      </div>

      <div className="space-y-8">
        {examples.map((category) => (
          <Card key={category.category} className="overflow-hidden">
            <CardHeader className="bg-muted/50">
              <div className="flex items-center gap-3">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <CardTitle className="text-2xl">{category.category}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {category.questions.map((example, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <div className="flex items-start gap-3 mb-3">
                      <MessageCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg mb-1">{example.question}</p>
                        <p className="text-muted-foreground">{example.answer}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <FileText className="w-3 h-3 mr-1" />
                      {example.source}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          These are just examples - the AI can answer any question from your uploaded policy documents
        </p>
      </div>
    </div>
  )
}
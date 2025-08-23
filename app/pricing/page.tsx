import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small teams",
    features: [
      { text: "Up to 100 documents", included: true },
      { text: "500 employee queries/month", included: true },
      { text: "Basic AI responses", included: true },
      { text: "Email support", included: true },
      { text: "Document upload", included: true },
      { text: "Basic analytics", included: true },
      { text: "Advanced AI models", included: false },
      { text: "Priority support", included: false },
      { text: "Custom integrations", included: false },
      { text: "API access", included: false }
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "Best for growing companies",
    features: [
      { text: "Up to 1,000 documents", included: true },
      { text: "5,000 employee queries/month", included: true },
      { text: "Advanced AI responses", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Document upload & version control", included: true },
      { text: "Advanced analytics & reporting", included: true },
      { text: "OpenAI GPT-4 & Gemini 2.5", included: true },
      { text: "Role-based permissions", included: true },
      { text: "Custom integrations", included: false },
      { text: "API access", included: false }
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      { text: "Unlimited documents", included: true },
      { text: "Unlimited queries", included: true },
      { text: "Custom AI models", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Advanced document management", included: true },
      { text: "Custom analytics & insights", included: true },
      { text: "All AI models + custom training", included: true },
      { text: "Advanced permissions & SSO", included: true },
      { text: "Custom integrations & API", included: true },
      { text: "White-label options", included: true }
    ],
    cta: "Contact Sales",
    popular: false
  }
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your team. All plans include a 14-day free trial.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="text-base">{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full mt-8" 
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          All plans include secure document storage, role-based access, and GDPR compliance.
        </p>
        <p className="text-sm text-muted-foreground">
          Need a custom solution? <a href="/contact" className="text-primary hover:underline">Contact our sales team</a>
        </p>
      </div>
    </div>
  )
}
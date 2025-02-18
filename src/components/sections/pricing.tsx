import { Users } from "lucide-react"

import { Glow, GlowArea } from "../glow"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

interface Plan {
  title: string
  price: number
  custom: boolean
  description: string
  perks: string[]
}

function PlanCard({ plan }: { plan: Plan }) {
  const { title, price, custom, description, perks } = plan

  return (
    <Card className="p-6 hover:border-border/80">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        {custom ? (
          <p className="text-3xl font-bold">Custom</p>
        ) : (
          <p className="text-3xl font-bold">${price}</p>
        )}
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button className="w-full">
          {custom ? "Contact Sales" : "Get Started"}
        </Button>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {perks.map((perk, i) => (
            <li key={i}>{perk}</li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

export function PricingSection() {
  const plans: Plan[] = [
    {
      title: "Starter",
      price: 0,
      custom: false,
      description: "Perfect for trying out our platform",
      perks: ["1 Agent", "100 API calls/month", "Community support"],
    },
    {
      title: "Pro",
      price: 49,
      custom: false,
      description: "For professional developers and teams",
      perks: [
        "10 Agents",
        "10,000 API calls/month",
        "Priority support",
        "Advanced analytics",
      ],
    },
    {
      title: "Enterprise",
      price: 0,
      custom: true,
      description: "For large organizations with custom needs",
      perks: [
        "Unlimited Agents",
        "Custom API limits",
        "24/7 support",
        "Custom integrations",
        "SLA guarantee",
      ],
    },
  ]

  return (
    <section id="pricing" className="border-t border-border/40 bg-card/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center space-y-12 px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="mx-auto mb-8 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-border/40 bg-background px-7 py-2 shadow-md backdrop-blur transition-all hover:border-border/80 hover:bg-muted/50">
            <Users className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">Flexible Plans</p>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Start Building Today
          </h2>
          <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground">
            Choose the perfect plan for your needs. Scale as you grow.
          </p>
        </div>
        <div className="grid w-full max-w-5xl gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

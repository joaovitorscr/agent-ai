import type { LucideIcon } from "lucide-react"

import { Card } from "~/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function FeatureCard({ feature }: { feature: FeatureCardProps }) {
  return (
    <Card className="group relative overflow-hidden border-border/40 bg-card/50 p-6 backdrop-blur transition-all hover:border-border/80 hover:bg-card">
      <div className="relative space-y-2">
        <feature.icon className="h-8 w-8 text-primary" />
        <h3 className="font-bold">{feature.title}</h3>
        <p className="text-sm text-muted-foreground">{feature.description}</p>
      </div>
    </Card>
  )
}

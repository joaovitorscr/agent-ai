import type { LucideIcon } from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

interface InfoCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function InfoCard({ item }: { item: InfoCardProps }) {
  const { icon: Icon, title, description } = item

  return (
    <Card>
      <CardHeader className="space-y-2">
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-8 w-8 text-primary" />
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

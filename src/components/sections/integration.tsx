import {
  Cloud,
  Database,
  MapPinCheckInside,
  Puzzle,
  Webhook,
} from "lucide-react"

import { InfoCard } from "~/components/info-card"

export function IntegrationSection() {
  const integrations = [
    {
      title: "PostgreSQL",
      description: "Store and query data with native PostgreSQL support",
      icon: Database,
    },
    {
      title: "Webhooks",
      description: "Connect with any service using custom webhooks",
      icon: Webhook,
    },
    {
      title: "Rest API",
      description: "Build custom integrations with our REST API",
      icon: Cloud,
    },
    {
      title: "Dexie.js",
      description:
        "Integrate with Dexie.js to provide local-first experience in your web app",
      icon: MapPinCheckInside,
    },
  ]

  return (
    <section id="integrations" className="border-t border-border/40 bg-card/40">
      <div className="mx-auto flex min-h-[60dvh] w-full max-w-7xl flex-col items-center space-y-12 px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="mx-auto mb-8 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-border/40 bg-background px-7 py-2 shadow-md backdrop-blur transition-all hover:border-border/80 hover:bg-muted/50">
            <Puzzle className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">Easy Integration</p>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Connect with Your Stack
          </h2>
          <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground">
            Seamlessly integrate with your favorite tools and platforms. Build
            powerful automation workflows in minutes.
          </p>
        </div>
        <div className="grid w-full max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration, i) => (
            <InfoCard key={i} item={integration} />
          ))}
        </div>
      </div>
    </section>
  )
}

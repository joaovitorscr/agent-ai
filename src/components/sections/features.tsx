import { Code2, Cpu, Globe, Zap } from "lucide-react"

import { InfoCard } from "~/components/info-card"

export function FeaturesSection() {
  const features = [
    {
      title: "Global Infrastructure",
      description:
        "Deploy your agents across our global network for low-latency responses anywhere in the world",
      icon: Globe,
    },
    {
      title: "Advanced AI Models",
      description:
        "Access state-of-the-art AI models and customize them for your specific use cases",
      icon: Cpu,
    },
    {
      title: "Simple Integration",
      description:
        "Integrate with your existing stack using our SDKs and APIs. Support for all major languages",
      icon: Code2,
    },
  ]

  return (
    <section id="features" className="border-t border-border/40 bg-card/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center space-y-12 px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="mx-auto mb-8 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-border/40 bg-background px-7 py-2 shadow-md backdrop-blur transition-all hover:border-border/80 hover:bg-muted/50">
            <Zap className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">Supercharge Your Workflow</p>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Built for the Future
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Cutting-edge features that put you ahead of the competition.
          </p>
        </div>
        <div className="grid w-full max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <InfoCard key={i} item={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

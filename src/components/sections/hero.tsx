import { Sparkles } from "lucide-react"

import { Button } from "~/components/ui/button"
import CodeBlock from "../ui/code-block"

export function HeroSection() {
  const codeSnippet = `
  import { Agent } from '@agent-ai/core'

  const agent = new Agent({
    name: 'DataAnalyst',
    capabilities: [
      'analysis',
      'visualization'
    ]
  })

  await agent.analyze('sales-data.csv')
  `

  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-32 h-[500px] w-[800px] -translate-x-1/2 bg-primary/40 opacity-20 blur-[100px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-start space-y-10 px-6 py-12 text-center lg:px-8 lg:py-24">
        <div className="space-y-4">
          <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-border/40 bg-background px-7 py-2 shadow-md backdrop-blur transition-all hover:border-border/80 hover:bg-muted/50">
            <Sparkles className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">Launching our Beta Program</p>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            The Future of AI{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-600 bg-clip-text pr-1 text-transparent">
              Is Here
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Build, deploy, and scale autonomous AI agents that revolutionize how
            work gets done. Join the next generation of AI-powered automation.
          </p>
        </div>
        <div className="flex flex-col gap-4 min-[400px]:flex-row">
          <Button
            size="lg"
            className="h-12 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            Start Building Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 border-border/40 bg-background/50 px-8 backdrop-blur hover:bg-muted/50"
          >
            Book a Demo
          </Button>
        </div>
        <div className="w-full max-w-4xl rounded-lg border bg-[#2d2d2d]">
          <CodeBlock code={codeSnippet} language="javascript" />
        </div>
      </div>
    </section>
  )
}

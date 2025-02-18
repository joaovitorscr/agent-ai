import { Button } from "~/components/ui/button"

export function CallOutSection() {
  return (
    <section className="border-t border-border/40">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl">
            Ready to revolutionize your workflow?
          </h2>
          <p className="mx-auto max-w-96 text-muted-foreground md:text-xl">
            Join the next generation of AI-powered companies building the
            future.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

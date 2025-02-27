import { createFileRoute } from "@tanstack/react-router"

import { Footer } from "~/components/footer"
import { Header } from "~/components/header"
import { CallOutSection } from "~/components/sections/call-out"
import { FeaturesSection } from "~/components/sections/features"
import { HeroSection } from "~/components/sections/hero"
import { IntegrationSection } from "~/components/sections/integration"
import { MetricsSection } from "~/components/sections/metrics"
import { PricingSection } from "~/components/sections/pricing"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <MetricsSection />
        <IntegrationSection />
        <PricingSection />
        <CallOutSection />
      </main>
      <Footer />
    </div>
  )
}

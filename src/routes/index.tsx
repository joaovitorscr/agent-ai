import { createFileRoute } from "@tanstack/react-router"

import { Header } from "~/components/header"
import { HeroSection } from "~/components/sections/hero"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  )
}

import { Link } from "@tanstack/react-router"
import { Bot } from "lucide-react"

import { Button } from "~/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto w-full px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold">AgentAI</span>
          </Link>
          <nav className="flex gap-6">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Features
            </a>
            <a
              href="#integrations"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Integration
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Pricing
            </a>
          </nav>
          <Button size="wide">Get Started</Button>
        </div>
      </div>
    </header>
  )
}

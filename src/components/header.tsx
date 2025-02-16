import { Link } from "@tanstack/react-router"
import { Bot } from "lucide-react"

import { Button } from "~/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="font-bold">AgentAI</span>
        </Link>
        <ul className="flex gap-6">
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
        </ul>
        <div className="flex items-center gap-2">
          <Button variant="ghost">Login </Button>
          <Button size="wide">Sign Up</Button>
        </div>
      </nav>
    </header>
  )
}

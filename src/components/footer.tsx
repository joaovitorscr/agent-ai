import { Link } from "@tanstack/react-router"
import { Bot } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container mx-auto flex w-full flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-8">
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="font-bold">AgentAI</span>
        </div>
        <div className="flex flex-col items-center gap-1 sm:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by the AgentAI team.
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 AgentAI
          </p>
        </div>
        <nav className="flex gap-4">
          <Link
            to="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Terms
          </Link>
          <Link
            to="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  )
}

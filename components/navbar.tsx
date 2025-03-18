import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-auto w-[70%] rounded-xl border border-white/10 bg-background/30 backdrop-blur-xl shadow-[0px_0px_150px_2px_rgba(67,183,234,0.3)]">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">CodeStream</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/solutions" className="transition-colors hover:text-primary">
            Solutions
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/atharvparlikar/intervue" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            Contact
          </Button>
          <Button size="sm">Get a Demo</Button>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-50" />
    </header>
  )
}

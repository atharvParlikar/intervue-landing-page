import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 pt-32 md:py-32 md:pt-40 text-center">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Seamless Peer-to-Peer
          <br />
          Technical Interviews
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Empowering companies and candidates with real-time, high-performance interview solutions. No servers, no middlemen—just direct, secure connections for the ultimate interview experience.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg">
          Explore Solutions
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Link href="https://intervue-web.vercel.app">
          <Button variant="outline" size="lg">
            Get a Demo
          </Button>
        </Link>
      </div>
    </section>
  )
}


import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
      <BackgroundBeams />
    </div>
  )
}


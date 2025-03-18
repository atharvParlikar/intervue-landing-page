import { ShieldCheck, Bolt, Brain, FileText } from "lucide-react";

const features = [
  {
    name: "Enterprise-Grade Security", description: "Hardened against spoofing and penetration attacks for maximum protection.",
    icon: ShieldCheck,
  },
  {
    name: "Fast Judge for Coding Challenges",
    description: "Real-time LeetCode-style evaluation with instant feedback.",
    icon: Bolt,
  },
  {
    name: "AI-Assisted Follow-Up Questions",
    description: "Dynamic AI-generated questions based on candidate responses.",
    icon: Brain,
  },
  {
    name: "Call Transcripts & Analysis",
    description: "Store, review, and analyze interviews for better hiring decisions.",
    icon: FileText,
  },
];

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Cutting-Edge Solutions</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how CodeMeet transforms technical interviews with cutting-edge peer-to-peer technology.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

  )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center text-center -mt-20 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background" />

      <div className="relative container mx-auto px-4 md:px-6 z-20">
        <div className="grid gap-8 animate-fade-in-up">
          <h1 className="text-4xl font-headline font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Building Digital Identities
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            We craft modern, professional websites that empower local businesses to thrive online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#portfolio">View Our Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center -mt-16 pt-16">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="grid gap-6">
          <h1 className="text-4xl font-headline font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Tech Web Studio
          </h1>
          <p className="max-w-[700px] mx-auto text-primary-foreground/90 md:text-xl">
            Building Digital Identities for Local Businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#projects">View Our Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Server, Rocket } from "lucide-react"

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-image');

  return (
    <section id="about" className="w-full">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-primary">
            About Us
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Empowering Local Businesses Digitally
          </h2>
          <p className="max-w-[700px] mx-auto lg:mx-0 text-muted-foreground md:text-lg/relaxed">
            We are Tech Web Studio, a passionate web development team dedicated to creating high-quality, custom websites that solve real-world problems for local businesses. Our approach is collaborative and client-focused, ensuring the final product not only looks great but also achieves your business goals.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={600}
              height={600}
              className="rounded-xl shadow-2xl aspect-square object-cover glow-shadow"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  )
}

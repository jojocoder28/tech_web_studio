import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Server, Rocket } from "lucide-react"

export function About() {
  const portraitImage = PlaceHolderImages.find(img => img.id === 'swarnadeep-das-portrait');

  const skills = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Frontend Development",
      description: "Crafting responsive and beautiful user interfaces with modern technologies like React and Next.js.",
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Backend Development",
      description: "Building robust and scalable server-side applications and APIs to power your business logic.",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description: "Focusing on user-centric design principles to create intuitive and engaging digital experiences.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Deployment & SEO",
      description: "Optimizing for performance and search engines, and deploying with reliability.",
    },
  ];

  return (
    <section id="about" className="w-full bg-card">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          {portraitImage && (
            <Image
              src={portraitImage.imageUrl}
              alt={portraitImage.description}
              width={500}
              height={500}
              className="rounded-lg shadow-lg aspect-square object-cover"
              data-ai-hint={portraitImage.imageHint}
            />
          )}
        </div>
        <div className="md:col-span-3 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-muted-foreground md:text-lg">
              I'm Swarnadeep Das, a passionate web developer dedicated to creating high-quality, custom websites that solve real-world problems for local businesses. My approach is collaborative and client-focused, ensuring the final product not only looks great but also achieves your business goals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.title} className="flex items-start gap-4">
                <div className="mt-1">{skill.icon}</div>
                <div className="space-y-1">
                  <h3 className="font-semibold font-headline">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

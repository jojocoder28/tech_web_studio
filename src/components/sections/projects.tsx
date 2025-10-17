import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Projects() {
  const projects = [
    {
      id: "project-4",
      title: "Bank Loan Management",
      description: "A comprehensive application for managing bank loans, streamlining the process for both customers and staff.",
      link: "https://skgppst.vercel.app/",
    },
    {
      id: "project-5",
      title: "Restaurant Management System",
      description: "An integrated app for restaurant order and inventory management to enhance operational efficiency.",
      link: "https://bhinnashad.com/",
    },
    {
      id: "project-6",
      title: "Elearning Platform",
      description: "An online learning platform with courses, and progress tracking.",
      link: "https://elearningwebsite.onrender.com/",
    },
  ];

  return (
    <section id="projects" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">My Recent Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are a few examples of websites I've built. Each project is a testament to my commitment to quality, performance, and client satisfaction.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <Card key={project.id} className="overflow-hidden flex flex-col group">
                <CardHeader>
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {projectImage && (
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full aspect-video transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={projectImage.imageHint}
                      />
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}

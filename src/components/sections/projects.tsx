import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Projects() {
  const projects = [
    {
      id: "project-7",
      title: "AI Resume Optimizer",
      description: "An AI-powered platform to optimize and build professional resumes, helping users land their dream jobs.",
      link: "https://airesume-cv.vercel.app/",
    },
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
    <section id="portfolio" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-primary">
            Our Work
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Portfolio Showcase</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Here are a few examples of websites we've built. Each project is a testament to our commitment to quality, performance, and client satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
                <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:shadow-primary/10 border-border/50">
                  <CardHeader className="p-0">
                    {projectImage && (
                      <div className="overflow-hidden aspect-video">
                        <Image
                          src={projectImage.imageUrl}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={projectImage.imageHint}
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                      <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  )
}

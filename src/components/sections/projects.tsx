import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

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
        <div className="relative mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project) => {
                  const projectImage = PlaceHolderImages.find(img => img.id === project.id);
                  return (
                    <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden flex flex-col group h-full transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
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
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 hidden md:flex" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 hidden md:flex" />
            </Carousel>
        </div>
      </div>
    </section>
  )
}

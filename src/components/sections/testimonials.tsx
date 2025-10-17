import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      id: "client-1-avatar",
      name: "Jane Doe",
      company: "The Local Boutique",
      quote: "Swarnadeep transformed our online presence. Our new website is beautiful, functional, and has boosted our sales significantly. The process was seamless from start to finish.",
    },
    {
      id: "client-2-avatar",
      name: "John Smith",
      company: "Smith's Eatery",
      quote: "Working with SD Web Solutions was a pleasure. He understood our vision perfectly and delivered a website that our customers love. Highly recommended for any local business.",
    },
    {
      id: "client-3-avatar",
      name: "Emily Jones",
      company: "Creative Writes",
      quote: "I'm so proud of my new portfolio website. Swarnadeep is a true professional with a great eye for design and a deep understanding of what makes a website work.",
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">What My Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I pride myself on building strong relationships and delivering results that exceed expectations.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial) => {
            const clientImage = PlaceHolderImages.find(img => img.id === testimonial.id);
            return (
              <Card key={testimonial.id} className="flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <p className="italic text-foreground/80">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="flex items-center gap-4">
                  <Avatar>
                    {clientImage && (
                        <AvatarImage src={clientImage.imageUrl} alt={testimonial.name} data-ai-hint={clientImage.imageHint} />
                    )}
                    <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold font-headline">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}

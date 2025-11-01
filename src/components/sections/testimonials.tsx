import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: "testimonial-1",
      name: "Sarah L.",
      role: "Owner, The Local Bakery",
      quote: "Tech Web Studio transformed our online presence. Our new website is beautiful, fast, and has doubled our online orders!",
      rating: 5,
    },
    {
      id: "testimonial-2",
      name: "Mike R.",
      role: "Founder, Peak Fitness",
      quote: "The team is incredibly talented and professional. They understood our vision perfectly and delivered a product that exceeded our expectations.",
      rating: 5,
    },
    {
      id: "testimonial-3",
      name: "Jessica P.",
      role: "Manager, Urban Garden",
      quote: "Working with them was a breeze. They handled everything from design to deployment, allowing us to focus on our business.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-primary">
            Testimonials
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            We are proud to have helped so many amazing local businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial) => {
            const testimonialImage = PlaceHolderImages.find(img => img.id === testimonial.id);
            return (
              <Card key={testimonial.id} className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {testimonialImage && (
                      <Image
                        src={testimonialImage.imageUrl}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                        data-ai-hint={testimonialImage.imageHint}
                      />
                    )}
                    <div>
                      <h3 className="font-headline font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

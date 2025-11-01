"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm } from "@/app/actions";
import { contactSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    const result = await submitContactForm(values);
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: result.message || "There was a problem with your request.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="w-full bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-primary">
            Contact Us
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Have a project in mind or want to discuss an idea? Let's connect.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl lg:grid-cols-2 gap-12">
          <div className="flex flex-col space-y-8 justify-center">
              <div className="space-y-4">
                  <InfoItem icon={<Mail className="w-5 h-5 text-primary" />} label="Email" value="dasjojo7@gmail.com" href="mailto:dasjojo7@gmail.com" />
                  <InfoItem icon={<Phone className="w-5 h-5 text-primary" />} label="Phone" value="+91 6296108409" />
                  <InfoItem icon={<MapPin className="w-5 h-5 text-primary" />} label="Location" value="Kolkata, West Bengal, India" />
              </div>
          </div>
          <Card className="p-2 bg-card/50 dark:bg-card/50 backdrop-blur-sm border-border/50 dark:border-border/50">
              <CardContent className="p-6">
                  <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                          <FormItem>
                              <FormLabel className="text-muted-foreground">Name</FormLabel>
                              <FormControl>
                              <Input placeholder="Your Name" {...field} className="bg-background/70"/>
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                          )}
                      />
                      <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                          <FormItem>
                              <FormLabel className="text-muted-foreground">Email</FormLabel>
                              <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/70"/>
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                          )}
                      />
                      <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                          <FormItem>
                              <FormLabel className="text-muted-foreground">Message</FormLabel>
                              <FormControl>
                              <Textarea placeholder="Tell me about your project..." className="min-h-[120px] bg-background/70" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                          )}
                      />
                      <Button type="submit" disabled={isSubmitting} className="w-full">
                          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Send Message
                      </Button>
                      </form>
                  </Form>
              </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
  const content = href ? <a href={href} className="hover:text-primary transition-colors">{value}</a> : <span>{value}</span>;
  return (
      <div className="flex items-start gap-4">
          <div className="bg-secondary text-primary rounded-lg p-3 flex-shrink-0">{icon}</div>
          <div className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">{label}</span>
              <span className="text-lg font-semibold">{content}</span>
          </div>
      </div>
  )
}

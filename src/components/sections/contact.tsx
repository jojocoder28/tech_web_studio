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
import { Loader2, Mail, Phone, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

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
    <section id="contact" className="w-full bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or want to discuss an idea? Let's connect.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col space-y-6 justify-center">
                <h3 className="text-2xl font-bold font-headline">Contact Information</h3>
                <p className="text-muted-foreground">
                    You can reach me via email or phone. I'm always open to discussing new projects and opportunities.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href="mailto:swarnadeep@example.com" className="text-muted-foreground hover:text-primary">swarnadeep@example.com</a>
                    </div>
                     <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">+1 (234) 567-890</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <User className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Based in Your City, World</span>
                    </div>
                </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                <Input placeholder="Your Name" {...field} />
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
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
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                <Textarea placeholder="Tell me about your project..." className="min-h-[120px]" {...field} />
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
      </div>
    </section>
  );
}

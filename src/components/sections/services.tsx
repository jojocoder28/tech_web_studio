'use client';
import { motion } from 'framer-motion';
import { Code, Brush, Megaphone, Smartphone, LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive, high-performance websites from the ground up with modern technologies.',
  },
  {
    icon: Brush,
    title: 'Digital Branding',
    description: 'Creating unique and memorable brand identities that resonate with your target audience.',
  },
  {
    icon: Megaphone,
    title: 'SEO Optimization',
    description: 'Improving your search engine ranking to drive organic traffic and increase online visibility.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Designing and developing intuitive mobile applications for both iOS and Android platforms.',
  },
];

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export function Services() {
  return (
    <section id="services" className="w-full bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-primary">
            Our Services
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">What We Do</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            We offer a complete suite of digital services to help your business succeed online.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <Card className="h-full text-center transition-all duration-300 hover:bg-card/80 hover:-translate-y-2 border-border/50">
                <CardHeader className="items-center">
                  <div className="p-4 bg-secondary rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

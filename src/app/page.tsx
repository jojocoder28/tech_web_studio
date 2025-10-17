import { About } from '@/components/sections/about';
import { AiSuggester } from '@/components/sections/ai-suggester';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Testimonials } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <AiSuggester />
      <Contact />
    </main>
  );
}

import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Services } from '@/components/sections/services';
import { AIStyler } from '@/components/sections/ai-styler';


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <AIStyler />
      <Contact />
    </>
  );
}

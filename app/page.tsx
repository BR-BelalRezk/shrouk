import { Hero } from '@/components/main/hero';
import { About } from '@/components/main/about';
import { Projects } from '@/components/main/projects';
import { Skills } from '@/components/main/skills';
import { Contact } from '@/components/main/contact';
import { MouseFollower } from '@/components/ui/mouse-follower';

export default function Home() {
  return (
    <>
      <MouseFollower />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
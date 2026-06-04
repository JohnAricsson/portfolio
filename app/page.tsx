import Education from "@/components/Education";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black-100 flex flex-col overflow-hidden">
      <Hero />
      <Grid />
      <Projects />
      <Education />
    </main>
  );
}

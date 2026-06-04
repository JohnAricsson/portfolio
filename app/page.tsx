import Education from "@/components/Education";
import Footer from "@/components/footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Milestone from "@/components/Milestone";
import Navbar from "@/components/Navbar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black-100 flex flex-col overflow-hidden">
      <Navbar />
      <Hero />
      <Grid />
      <Projects />
      <Education />
      <Milestone />
      <Footer />
    </main>
  );
}

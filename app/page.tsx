import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black-100 flex flex-col overflow-hidden">
      <Hero />
      <Grid />
    </main>
  );
}

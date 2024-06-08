import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="px-8 lg:px-20 overflow-hidden">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}

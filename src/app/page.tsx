import About from "@/components/About";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home()
{
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Intro />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}

'use client'

import About from "@/components/About";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import dynamic from 'next/dynamic';



export default function Home()
{
  const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

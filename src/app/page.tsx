'use client'

import About from "@/components/About";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import dynamic from 'next/dynamic';
import { useEffect, useRef } from "react";



export default function Home()
{

  const mainRef = useRef<HTMLDivElement | null>(null);;
  const CIRCLE_COUNT = 50;
  const CIRCLE_MIN_RADIUS = 10;
  const CIRCLE_MAX_RADIUS = 20;

  const circles: HTMLDivElement[] = [];

  const getRandomNumber = (min: number, max: number) =>
  {
    return Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min) + 1)) + Math.ceil(min);
  };

  const initCircles = (mainRef: React.RefObject<HTMLDivElement | null>) =>
  {
    if (!mainRef.current) return;
    for (let i = 0; i < CIRCLE_COUNT; i++)
    {
      const circle: HTMLDivElement = document.createElement('div');
      circle.classList.add('red-circle');
      circle.style.position = 'absolute';
      circle.style.borderRadius = '50%';
      // circle.style.backgroundColor = 'red';
      circle.style.opacity = '0';
      circle.style.transition = 'opacity 0.5s ease';

      mainRef.current.appendChild(circle);
      circles.push(circle);

      // Start individual animation for each circle
      startCircleAnimation(circle);
    }
  };

  const updateCirclePosition = (circle: HTMLDivElement) =>
  {
    const radius = getRandomNumber(CIRCLE_MIN_RADIUS, CIRCLE_MAX_RADIUS);
    const maxTop = window.innerHeight - radius * 2;
    const maxLeft = window.innerWidth - radius * 5;

    circle.style.width = `${radius * 2}px`;
    circle.style.height = `${radius * 2}px`;
    circle.style.top = `${getRandomNumber(0, maxTop)}px`;
    circle.style.left = `${getRandomNumber(0, maxLeft)}px`;
  };

  const startCircleAnimation = (circle: HTMLDivElement) =>
  {
    const animate = () =>
    {
      // Fade out
      circle.style.opacity = '0';

      // After fading out, wait and reappear somewhere else
      setTimeout(() =>
      {
        updateCirclePosition(circle);
        circle.style.opacity = '0.3';
      }, 500);

      // Schedule next animation at a random interval
      const nextDelay = getRandomNumber(1000, 4000); // 1 to 4 seconds
      setTimeout(animate, nextDelay);
    };

    // Kick off the animation for this circle
    animate();
  };


  useEffect(() =>
  {
    if (mainRef.current)
    {
      initCircles(mainRef);
    }
  }, []);

  const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
  return (
    <div ref={mainRef} className="min-h-screen bg-white dark:bg-black">
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

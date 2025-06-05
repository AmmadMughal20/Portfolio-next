'use client'
import React, { useRef, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useAnimation } from 'framer-motion'
import { useSelector } from 'react-redux'

const Projects = () =>
{
    const refProjects = useRef(null)
    const controlsProjectHeading = useAnimation()

    const { projectsData: pd } = useSelector((state: any) => state.projects)

    const handleScroll = () =>
    {
        const projectTop = refProjects.current.offsetTop
        const scrollPosition = window.scrollY + window.innerHeight

        if (scrollPosition > projectTop)
        {
            controlsProjectHeading.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0.35, delay: 0.35, ease: 'easeInOut' },
            })
        } else
        {
            controlsProjectHeading.start({ opacity: 0, x: 100 })
        }
    }

    useEffect(() =>
    {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            ref={refProjects}
            id="projects"
            className="min-h-screen w-full flex flex-col items-center pt-20 bg-white dark:bg-black"
        >
            <div className="w-4/5 sm:w-[70%] sm:ml-20 sm:z-10">
                <div className="flex flex-row sm:flex-row items-center sm:items-start">
                    <div className="w-4/5 p-2">
                        <hr />
                    </div>
                    <motion.h2
                        className="text-black dark:text-white sm:text-[1.75rem] text-left m-0 p-0 w-max text-3xl font-bold"
                        initial={{ opacity: 0, x: 100 }}
                        animate={controlsProjectHeading}
                    >
                        Projects
                        <span className="text-green-400 dark:text-green-600">.</span>
                    </motion.h2>
                </div>

                <div className="flex flex-wrap justify-between mt-6 xs:flex-col">
                    {pd.map((item: any, index: number) => (
                        <ProjectCard key={index} project={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects

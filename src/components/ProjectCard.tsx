'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ProjectCardSchema } from './Projects'
import { Button } from './ui/button'
import { GithubIcon, NetworkIcon } from 'lucide-react'
// import ReactGA from 'react-ga4'

const ProjectCard = ({ project, variants }: ProjectCardSchema) =>
{
    // const handleProjectClick = (projectName) =>
    // {
    // ReactGA.event({
    //     category: 'User',
    //     action: `Clicked ${projectName} link`
    // })
    // }

    return (
        <motion.div className="m-2 sm:max-w-[27.5%] dark:bg-gray-900 dark:text-white rounded-lg shadow-md"
            variants={variants}>
            <div
                className="pt-6 px-6 pb-0 rounded-t-lg bg-gray-200 dark:bg-gray-900
          hover:pl-10 hover:pr-10 hover:pt-10
          transition-padding duration-250 ease-in-out"
            >
                <Link
                    href={`/project?projectTitle=${project.urlTitle}`}
                // onClick={() => handleProjectClick(project.name)}
                >
                    <div className="overflow-hidden rounded-t-lg">
                        <Image
                            width={100}
                            height={100}
                            src={project.image}
                            alt="project image"
                            className="w-full rounded-t-lg transform hover:rotate-6 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </Link>
            </div>

            <div className="flex flex-row items-center mt-2 mb-[-1] px-6 justify-between">
                <h2 className="text-black dark:text-white text-xl font-semibold w-[80%]">{project.name}</h2>

                <span className='w-20% flex gap-2'>
                    <Link href={project.githubLink} target='_blank'>
                        <GithubIcon size={14} />
                    </Link>
                    <div className='border-l-2' />
                    <Link href={project.url} target='_blank'>
                        <NetworkIcon size={14} />
                    </Link>
                </span>
            </div>
            <div className="flex flex-row items-center mt-2 mb-[-1] px-6 justify-between">
                <h5 className="text-primary text-md">{project.type}</h5>
            </div>

            <hr className="mx-6 my-2 border-gray-300 dark:border-gray-500" />

            <p className="text-contrast-color dark:text-primary px-6 text-xs mt-1 mb-2">
                {project.technologies.join(' - ')}
            </p>

            <p className="text-black dark:text-white px-6 text-justify mb-4 text-sm">
                {project.description}
            </p>
        </motion.div>
    )
}

export default ProjectCard

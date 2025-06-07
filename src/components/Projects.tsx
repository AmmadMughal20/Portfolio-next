'use client'
import React, { useRef, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useAnimation, useInView, Variants } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { ProjectSchema } from '@/app/project/page'


export interface ProjectCardSchema
{
    project: ProjectSchema,
    variants: Variants
}
const Projects = () =>
{
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.2 });
    const controls = useAnimation();

    const { projectsData: pd } = useSelector((state: RootState) => state.projects)


    useEffect(() =>
    {
        if (inView)
        {
            controls.start('visible');
        } else
        {
            controls.start('hidden');
        }
    }, [inView, controls]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.4,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const projectTitleVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div
            ref={ref}
            id="projects"
            className="dark:bg-black dark:text-white bg-white text-gray-800 w-full px-4 xs:px-10 xs:pt-[-100px]"
        >
            <div className="max-w-7xl mx-auto grid">
                <motion.div className="flex flex-row items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.div
                        className="flex-1 mr-4 h-px bg-gray-400"
                        variants={itemVariants}
                    />
                    <motion.h2
                        className="text-black dark:text-white sm:text-[1.75rem] text-right m-0 p-0 w-max text-3xl font-bold"
                        variants={projectTitleVariants}
                    >
                        Projects
                        <span className="text-primary">.</span>
                    </motion.h2>
                </motion.div>

                <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10 xs:grid-cols-1"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}>
                    {pd.map((item: ProjectSchema, index: number) => (
                        <ProjectCard key={index} project={item} variants={itemVariants} />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Projects

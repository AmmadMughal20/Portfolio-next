'use client'
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ExperienceSection from './ExperienceSection';
import React from 'react';
import { RootState } from '@/lib/store';


export interface ExperienceSchema
{
    companyName: string,
    cityName: string,
    position: string,
    duration: string,
    description:
    string,
    skills: Array<string>,
}
export interface ExperienceSectionProps
{
    experience: ExperienceSchema;
    variants: Variants;
}

const Experience = () =>
{
    const { data: experiences } = useSelector((state: RootState) => state.experiences);

    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.2 });
    const controls = useAnimation();

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

    const experienceTitleVariants = {
        hidden: { opacity: 0, x: -100 },
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
            id="experience"
            className="dark:bg-black dark:text-white bg-white text-gray-800 min-h-screen h-auto w-full py-32 px-4 xs:px-20"
        >
            <div className="max-w-7xl mx-auto grid">
                {/* Title Section */}
                <motion.div
                    className="flex flex-row items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.h2
                        variants={experienceTitleVariants}
                        className="text-black dark:text-white sm:text-[1.75rem] text-left m-0 p-0 w-max text-3xl font-bold"
                    >
                        Experience<span className="text-primary">.</span>
                    </motion.h2>
                    <motion.div
                        className="flex-1 ml-4 h-px bg-gray-400"
                        variants={itemVariants}
                    />
                </motion.div>

                {/* Experience Cards */}
                <motion.div
                    className="mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {experiences.map((item: ExperienceSchema, index: number) => (
                        <ExperienceSection key={index} experience={item} variants={itemVariants} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;

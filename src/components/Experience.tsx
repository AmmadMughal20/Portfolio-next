'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ExperienceSection from './ExperienceSection';

const Experience = () =>
{

    const { data: experiences } = useSelector((state: any) => state.experiences)

    const refExperience = useRef(null);
    const controlsExperienceHeading = useAnimation();

    const handleScroll = () =>
    {
        if (!refExperience.current) return;

        const experienceTop = refExperience.current.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > experienceTop)
        {
            controlsExperienceHeading.start({ opacity: 1, x: 0, transition: { duration: 0.35, delay: 0.35, ease: 'easeInOut' } });
        } else
        {
            controlsExperienceHeading.start({ opacity: 0, x: -50 });
        }
    };

    useEffect(() =>
    {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={refExperience}
            id="experience"
            className="min-h-screen pt-20 flex flex-col items-center w-auto h-auto bg-white dark:bg-gray-900"
        >
            <div className="w-4/5 max-sm:w-[70%] max-sm:ml-20 z-10">
                <div className="flex flex-row items-center">
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        animate={controlsExperienceHeading}
                        className="text-3xl max-sm:text-xl m-0 p-0 text-black dark:text-white"
                    >
                        Experience
                        <span className="text-green-500">.</span>
                    </motion.h2>
                    <p className="w-full p-1">
                        <hr />
                    </p>
                </div>

                {experiences.map((item, index) => (
                    <ExperienceSection key={index} experience={item} />
                ))}
            </div>
        </div>

    );
};

export default Experience;

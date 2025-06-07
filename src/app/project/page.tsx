'use client';

import { ImageCarousel } from '@/components/ImageCarousal';
import { RootState } from '@/lib/store';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export interface ProjectSchema
{
    name: string;
    type: string;
    urlTitle: string;
    githubLink: string;
    technologies: Array<string>;
    url: string;
    image: StaticImageData;
    images?: StaticImageData[];
    video: {
        src: string;
        type: string;
        controls: boolean;
    };
    description: string;
}

const ProjectPage = () =>
{
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const searchParams = useSearchParams();
    const projectTitle = searchParams.get('projectTitle');
    const { projectsData: pd } = useSelector((state: RootState) => state.projects);
    const projectToDisplay = pd.find((item: ProjectSchema) => item.urlTitle === projectTitle);

    useEffect(() =>
    {
        if (videoRef.current && projectToDisplay?.video?.src)
        {
            videoRef.current.play().catch(() => { });
        }
    }, [projectToDisplay]);

    if (!projectToDisplay)
    {
        return (
            <div className="flex items-center justify-center h-screen text-lg text-red-600">
                Project not found
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen w-auto ml-10 mt-10 bg-white dark:bg-[#111] text-black dark:text-white px-6 py-12"
        >
            {/* Optional Video Section */}
            {projectToDisplay.video.src && (
                <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-10 shadow-lg">
                    <video
                        ref={videoRef}
                        loop
                        muted
                        playsInline
                        controls={projectToDisplay.video.controls}
                        className="w-full h-full object-cover"
                    >
                        <source
                            src={projectToDisplay.video.src}
                            type={projectToDisplay.video.type || 'video/mp4'}
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            <div className="max-w-4xl mx-auto space-y-6">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-4xl font-bold">{projectToDisplay.name}</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{projectToDisplay.type}</p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-base leading-relaxed"
                >
                    {projectToDisplay.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-2 mt-4"
                >
                    {projectToDisplay.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>

                {/* Image Carousel */}
                {projectToDisplay.images && projectToDisplay.images.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6"
                    >
                        <ImageCarousel images={projectToDisplay.images} />
                    </motion.div>
                )}

                {/* Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 mt-6"
                >
                    <Link
                        href={projectToDisplay.githubLink}
                        target="_blank"
                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                    >
                        GitHub
                    </Link>
                    <Link
                        href={projectToDisplay.url}
                        target="_blank"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                        Live Site
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectPage;

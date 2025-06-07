'use client'

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { StaticImageData } from 'next/image';

export interface ProjectSchema
{
    name: string,
    type: string,
    urlTitle: string,
    githubLink: string,
    technologies: Array<string>,
    url: string,
    image: StaticImageData,
    video: {
        src: string,
        type: string,
        controls: boolean,
    },
    description: string
}

const ProjectPage = () =>
{
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const searchParams = useSearchParams();
    const projectTitle = searchParams.get('projectTitle');

    const { projectsData: pd } = useSelector((state: RootState) => state.projects)

    const projectToDisplay = pd.find((item: ProjectSchema) => item.urlTitle === projectTitle);

    useEffect(() =>
    {
        if (videoRef.current)
        {
            videoRef.current.play();
        }
    }, []);

    if (!projectToDisplay)
    {
        return (
            <div className="flex items-center justify-center h-screen text-lg text-red-600">
                Project not found
            </div>
        );
    }

    return (
        <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-[#111111] z-100">
            <video
                ref={videoRef}
                loop
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={projectToDisplay.video.src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    );
};

export default ProjectPage;

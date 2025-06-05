import Image from 'next/image'
import React from 'react'
// import ReactGA from 'react-ga4'

const ProjectCard = ({ project }) =>
{
    const handleProjectClick = (projectName) =>
    {
        // ReactGA.event({
        //     category: 'User',
        //     action: `Clicked ${projectName} link`
        // })
    }

    return (
        <div className="m-2 sm:max-w-[27.5%] dark:bg-gray-900 dark:text-white rounded-lg shadow-md">
            <div
                className="pt-6 px-6 pb-0 rounded-t-lg bg-gray-200 dark:bg-gray-900
          hover:pl-10 hover:pr-10 hover:pt-10
          transition-padding duration-250 ease-in-out"
            >
                <a
                    href={`/project?projectTitle=${project.urlTitle}`}
                    onClick={() => handleProjectClick(project.name)}
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
                </a>
            </div>

            <div className="flex flex-row items-center mt-2 mb-[-1] px-6 justify-between">
                <h3 className="text-black dark:text-white text-base font-semibold">{project.name}</h3>
                <h5 className="text-contrast-color dark:text-gray-600 text-sm">{project.type}</h5>
            </div>

            <hr className="mx-6 my-2 border-gray-300 dark:border-gray-500" />

            <p className="text-contrast-color dark:text-gray-600 px-6 text-xs mt-1 mb-2">
                {project.technologies.join(' - ')}
            </p>

            <p className="text-black dark:text-white px-6 text-justify mb-4 text-sm">
                {project.description}
            </p>
        </div>
    )
}

export default ProjectCard

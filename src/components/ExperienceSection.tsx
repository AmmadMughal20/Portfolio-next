'use client'

import React from 'react';

const ExperienceSection = (props) =>
{
    const { experience } = props;

    return (
        <div className="mt-10 mb-20 px-4 sm:px-6 md:px-8">
            <div className="flex justify-between mt-10">
                <h3 className="text-black dark:text-white m-0 p-0 text-lg sm:text-base">{experience.companyName}</h3>
                <p className="text-black dark:text-white m-0 p-0 text-lg sm:text-sm">{experience.cityName}</p>
            </div>

            <div className="flex justify-between mt-2">
                <p className="text-contrast-color m-0 p-0 text-lg sm:text-sm">{experience.position}</p>
                <p className="text-black dark:text-white m-0 p-0 text-lg sm:text-sm">{experience.duration}</p>
            </div>

            <p className="text-black dark:text-white mt-2 mb-0 p-0 text-base sm:text-sm text-justify">
                {experience.description}
            </p>

            <div className="flex flex-wrap mt-2 mb-20">
                {experience.skills.map((item, index) => (
                    <p
                        key={index}
                        className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white rounded-full px-3 py-1 mx-1 my-0.5 text-sm sm:text-xs"
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>

    );
};

export default ExperienceSection;

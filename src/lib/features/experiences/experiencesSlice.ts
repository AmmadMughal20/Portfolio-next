import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    data: [
        {
            companyName: 'Self-Employed',
            cityName: 'Lahore',
            position: 'Full-Stack Software Engineer',
            duration: 'June 2025 - Till date',
            description:
                'Designing and developing AI-powered SaaS applications and modern web solutions using Next.js, React, and Flask. Leading projects such as the AI Calling Assistant and BestCoverLetter, focusing on building scalable architectures, integrating OpenAI APIs, and crafting responsive, user-centered interfaces that deliver exceptional performance and usability.',
            skills: [
                'Next.js',
                'React',
                'TypeScript',
                'Tailwind CSS',
                'OpenAI API',
                'Python',
                'Flask',
                'Prisma',
                'PostgreSQL',
                'Github Actions'
            ],
        },
        {
            companyName: 'BroadPeak Technologies',
            cityName: 'Lahore',
            position: 'Front-end Engineer',
            duration: 'April 2025 - May 2025',
            description:
                'Lead the revamping of Naranga - a franchise and lead management platform by migrating from a monolithic architecture to a modern microservices-based system, while rebuilding the UI using React, Redux, and Tailwind for enhanced performance, scalability, and user experience.',
            skills: ['React', 'Redux Toolkit', 'RTL', 'Jest', 'Tailwind CSS', 'Typescript', 'JSON', 'Git', 'Material UI', 'NPM', 'Postman'],
        },
        {
            companyName: 'Energy & Security Group',
            cityName: 'Lahore',
            position: 'Front-end Engineer',
            duration: 'Nov 2022 - Dec 2024',
            description:
                'Senior Front-end developer for Power Sector Improvement activities. Leading a team of 4 developers developed e-Operations: a web portal providing interface to customer support centers and field officers. Built using React.js, Material UI and SCSS mainly.',
            skills: ['React', 'Redux Toolkit', 'Storybooks', 'SCSS', 'Typescript', 'JSON', 'Git', 'Material UI', 'Typescript', 'NPM', 'Postman'],
        },
        {
            companyName: 'Power Information Technology Company (PITC)',
            cityName: 'Lahore',
            position: 'Software Engineer',
            duration: 'Mar 2020 - Oct 2022',
            description:
                'I helped in developing Store Inventory System (SIS): a three tier app, using micro-services developed in Python/Flask and Oracle and front-end in PHP bootstrap and Javascript. It was a smart inventory management solution to handle the electricity stocks of 10 DISCOs across Pakistan.',
            skills: ['Flask', 'PHP', 'Bootstrap', 'Javascript', 'JSON', 'SVN', 'BIRT', 'Postman'],
        },
    ]
}

export const experiencesSlice = createSlice({
    name: 'experiences',
    initialState,
    reducers: {}
});
export default experiencesSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    data: [
        {
            companyName: 'BroadPeak Technologies',
            cityName: 'Lahore',
            position: 'Front-end Developer',
            duration: 'April 2025 - Till date',
            description:
                'Leading the revamp of Naranga’s franchise and lead management platform by migrating from a monolithic architecture to a modern microservices-based system, while rebuilding the UI using React, Redux, and Tailwind for enhanced performance, scalability, and user experience.',
            skills: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Javascript', 'JSON', 'Git', 'Material UI', 'NPM', 'Postman'],
        },
        {
            companyName: 'Energy & Security Group',
            cityName: 'Lahore',
            position: 'Front-end Developer',
            duration: 'Nov 2022 - Dec 2024',
            description:
                'Senior Front-end developer for Power Sector Improvement activities. Leading a team of 4 developers developed e-Operations: a web portal providing interface to customer support centers and field officers. Built using React.js, Material UI and SCSS mainly.',
            skills: ['React', 'Redux Toolkit', 'SCSS', 'Javascript', 'JSON', 'Git', 'Material UI', 'Typescript', 'NPM', 'Postman'],
        },
        {
            companyName: 'Cyberseeds',
            cityName: 'Lahore',
            position: 'Software Engineer (Requirement Gathering)',
            duration: 'Dec 2021 - Feb 2022',
            description:
                'Having experience in software engineer and development, I joined a fresh startup as software engineer and leading a team of 5 members did the requirement engineering and developed software requirement specification (SRS) for Pakistan Construction Network (PCN) a web portal containing  6 modules integrated using single sign-on.',
            skills: ['Mockplus', 'Adobe XD', 'Visual Paradigm', 'Microsoft Office', 'YWorks', 'Camunda Modeller', 'Microsoft Visio'],
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
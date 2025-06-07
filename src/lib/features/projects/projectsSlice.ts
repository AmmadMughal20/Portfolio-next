import { createSlice } from '@reduxjs/toolkit';
import eOps from '@/assets/images/eOps.png';
import eOps1 from '@/assets/images/eops/1.png';
import eOps2 from '@/assets/images/eops/2.png';
import eOps3 from '@/assets/images/eops/3.png';
import MecpoSmart from '@/assets/images/MEPCO Smart.jpeg';
import Codiniti from '@/assets/images/Codiniti.png';
import CitizenMonitor from '@/assets/images/Citizen Monitor.png';
import OptForSmartMeters from '@/assets/images/OptForSmartMeter.png'
import ExamReady from '@/assets/images/ExamReady.png'
import AntiTheft from '@/assets/images/AnitTheft.png'
import Kippax from '@/assets/images/kippax.png'
import Crappo from '@/assets/images/crappo.png'
import Spm from '@/assets/images/spm.png'
import Sis from '@/assets/images/sis.png'
import Chatiniti from '@/assets/images/chatiniti.png'

const initialState = {
    projectsData: [
        {
            name: 'Kippax',
            type: 'Single Page App',
            urlTitle: 'kippax',
            githubLink: 'https://github.com/AmmadMughal20/kippax-creative-canvas',
            technologies: ['React', 'Tailwind CSS', 'Shadcn', 'Typescript'],
            url: 'https://kippax-creative-canvas.vercel.app/',
            image: Kippax,
            images: [Kippax],
            video: {
                src: './',
                type: '',
                controls: true,
            },
            description: `Developed a sleek, modern, and responsive website for Kippax, a dynamic marketing agency. Built using React, Tailwind CSS and Loveable AI, the site reflects the agency's creative brand with a bold, clean design and smooth user experience. I implemented a custom color scheme, optimized performance, and ensured mobile-first responsiveness. The project showcases my skills in React, Tailwind CSS, Lovable AI and responsive UI/UX, and building brand-aligned digital experiences for creative industries.`
        },
        {
            name: 'Codiniti',
            type: 'Single Page App',
            urlTitle: 'Codiniti',
            githubLink: 'https://github.com/AmmadMughal20/Codiniti',
            technologies: ['React', 'Tailwind CSS', 'Shadcn', 'Javascript', 'Framer Motion'],
            url: 'http://www.codiniti.com',
            image: Codiniti,
            images: [Codiniti],
            video: {
                src: '',
                type: '',
                controls: true,
            },
            description: `I developed an interactive website for a tech startup, showcasing the company's profile in a visually appealing manner. Utilizing Lattefiles for animations and Framer Motion for smooth transitions, the website offered an engaging user experience. With captivating motion effects and seamless section navigation, the website effectively communicated the startup's offerings, achievements, team, and vision.`
        },
        {
            name: 'Crappo',
            type: 'Responsive Web App',
            urlTitle: 'crappo',
            githubLink: 'https://github.com/AmmadMughal20/crappo',
            technologies: ['Next.js', 'Tailwind CSS', 'Mongo Db', 'Typescript', 'Shadcn', 'Zod'],
            url: 'https://crappo-nine.vercel.app/',
            image: Crappo,
            images: [Crappo],
            video: {
                src: '',
                type: '',
                controls: true,
            },
            description: `CRAPPO is a responsive and visually engaging cryptocurrency website built with Next.js and Tailwind CSS. It features a modern landing page highlighting a blockchain project, with user registration/login, newsletter subscription utilizing MongoDB, and smooth animations using Framer Motion. The site is fully responsive and optimized for performance. My work helped the company establish a professional online presence, attract new users, and grow its subscriber base.`
        },
        {
            name: 'SPM',
            type: 'SAAS Web Application',
            urlTitle: 'spm',
            githubLink: 'https://github.com/AmmadMughal20/SPM',
            technologies: ['React', 'Flask', 'Tailwind', 'Typescript', 'Python'],
            url: '',
            image: Spm,
            images: [Spm],
            video: {
                src: '',
                type: '',
                controls: true,
            },
            description: `The Sabri Project Management (SPM) System is a responsive SaaS platform tailored for the flex signage and print media industry, enabling end-to-end management of advertising projects for clients like PEPSI, Coke, and telecom firms. Built using React, Flask (Python), SQLAlchemy, and REST APIs, it supports client, contact, and vendor management, detailed deliverable workflows (survey to execution), and multi-role access. The system ensures seamless project tracking, real-time updates, and efficient collaboration across teams in a scalable and secure environment.`
        },
        {
            name: 'Inventory Management',
            type: 'SAAS Web Application',
            urlTitle: 'sis',
            githubLink: 'https://github.com/AmmadMughal20/energy-flow-inventory-hub',
            technologies: ['Flask', 'Jinja2', 'PostgreSql', 'SQLAlchemy', 'Javascript'],
            url: '',
            image: Sis,
            images: [Sis],
            video: {
                src: '',
                type: '',
                controls: true,
            },
            description: `Store Inventory System: full-stack web app built with Flask, Python, JavaScript and Jinja2, supporting full process of a standard inventory management business flow along with CRUD for items, categories, and suppliers, hierarchical stores. I developed it with role-based access, user authentication, real-time stock updates, low-stock alerts, and data export (Excel/PDF). The responsive dashboard includes advanced search, filtering, date-wise stock tracking, and inventory movement logs. It ensures multi-store inventory management, centralized control, and improved operational efficiency.`
        },
        {
            name: 'Chatiniti',
            type: 'SAAS Web Application',
            urlTitle: 'chatiniti',
            githubLink: 'https://github.com/AmmadMughal20/Chatiniti',
            technologies: ['Flask', 'Jinja2', 'SocketIO', 'WebRTC', 'Javascript'],
            url: '',
            image: Chatiniti,
            images: [Chatiniti],
            video: {
                src: '',
                type: '',
                controls: true,
            },
            description: `Developed a full-featured real-time chat application using Flask, Flask-SocketIO, and PostgreSQL. Chatiniti supports one-to-one and group chat, along with audio/video calls using WebRTC. Designed REST and WebSocket endpoints with JWT-based auth. Built responsive UI with Jinja, HTML/CSS and Tailwind CSS. Features include live messaging, typing indicators, and media calls. Deployed using Docker with clean and scalable backend architecture.`
        },

        {
            name: 'e-Operations',
            type: 'SAAS Web Application',
            urlTitle: 'e-Operations',
            githubLink: 'https://www.github.com',
            technologies: ['React.js', 'Material UI', 'SCSS', 'Javascript', 'Js pdf'],
            url: 'https://eops.pitc.com.pk',
            image: eOps,
            images: [eOps, eOps1, eOps2, eOps3],
            video: {
                src: './eOps.mp4',
                type: 'video/mp4',
                controls: true,
            },
            description: `The e-Operations web portal, a component of the Power Sector Improvement Activities (PSIA), served as a role-based interface for field operations. It facilitated workflow processing for services initiated through MEPCO Smart. The portal integrated with other solutions, like CCMS and Billing, through APIs and featured an interactive dashboard with hierarchical statistics for MEPCO's divisions. Notably, it included the E-File, a comprehensive digital document tracking connection history and all services throughout its lifespan.`
        },
        {
            name: 'MEPCO Smart',
            type: 'Web & Mobile Application',
            urlTitle: 'MEPCOSmart',
            githubLink: 'https://www.github.com',
            technologies: ['React Native', 'React.js', 'Material UI', 'SCSS', 'Typescript'],
            url: 'http://117.20.28.178:8040',
            image: MecpoSmart,
            images: [MecpoSmart],
            video: {
                src: './mepco.mp4',
                type: 'video/mp4',
                controls: true,
            },
            description: 'The Mepco Smart is a cross platform mobile as well as web interface developed as part of the Power Sector Improvement Activities (PSIA). It provides power consumers with smart monitoring features such as load profile, power outage information, consumption trends, and payment trends. The portal utilizes Highcharts.js to display interactive graphs and incorporates Formik and Yup for requesting various power services like new connections, attribute changes, meter replacements, due date extensions, and more.'
        },

        {
            name: 'Opt for Smart Meter',
            type: 'Single Page Application',
            urlTitle: 'OptForSmartMeter',
            githubLink: 'https://www.github.com/',
            technologies: ['React.js', 'Material UI', 'SCSS', 'JsPdf', 'JsBarCode', 'Media Queries'],
            url: 'http://117.20.28.178:8042',
            image: OptForSmartMeters,
            images: [OptForSmartMeters],
            video: {
                src: './CFC.mp4',
                type: 'video/mp4',
                controls: true,
            },
            description: `A fully responsive online form for general public containing existing energy consumers as well as new consumers to submit their request to get their normal energy consumption meters replaced with the smart meters. According to the project requirements, on submission the user gets a concent form (a prefilled pdf document) which is then used in the process of meter replacement by the field staff.`
        },
        {
            name: 'ExamReady',
            type: 'Single Page App',
            urlTitle: 'Examready',
            githubLink: 'https://exam-ready.vercel.app/',
            technologies: ['React.js', 'Tailwind', 'Javascript', 'Styled Components', 'Framer Motion'],
            url: 'https://exam-ready.vercel.app/',
            image: ExamReady,
            images: [ExamReady],
            video: {
                src: './CFC.mp4',
                type: 'video/mp4',
                controls: true,
            },
            description: `A fully responsive single page application (SPA) designed for a mobile application depicting the features of mobile app along with download links for different application stores and a privacy policy page.`
        },
        {
            name: 'Anti-Theft Form',
            type: 'Single Page App',
            urlTitle: 'AntiTheft',
            githubLink: 'http://117.20.28.178:8047',
            technologies: ['React.js', 'SCSS', 'Javascript', 'Styled Components'],
            url: 'http://117.20.28.178:8047',
            image: AntiTheft,
            images: [AntiTheft],
            video: {
                src: './CFC.mp4',
                type: 'video/mp4',
                controls: true,
            },
            description: `A fully responsive single page application (SPA) designed for general public to report electricty theft across Pakistan.`
        },
        {
            name: 'Citizen Monitor',
            type: 'SAAS Web Application',
            urlTitle: 'CitizenMonitor',
            githubLink: 'https://www.github.com/',
            technologies: ['React.js', 'Tanstack Table', 'SCSS', 'Material UI'],
            url: 'http://117.20.28.178:8044',
            image: CitizenMonitor,
            images: [CitizenMonitor],
            video: {
                src: './CFC.mp4',
                type: 'video/mp4',
                controls: true,
            },
            description: `An admin portal to display hierarchical dashboard stats of theft case along with role based operations on the submitted electricity theft case developed during the anti-theft campaign launched by ministry of energy (MoE) power division of Pakistan.`
        },
    ]
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {}
});
export default projectsSlice.reducer;
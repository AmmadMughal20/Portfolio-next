import { createSlice } from '@reduxjs/toolkit';
import eOps from '../../../assets/images/eOps.png';
import MecpoSmart from '../../../assets/images/MEPCO Smart.jpeg';
import Codiniti from '../../../assets/images/Codiniti.png';
import CitizenMonitor from '../../../assets/images/Citizen Monitor.png';
import OptForSmartMeters from '../../../assets/images/OptForSmartMeter.png'
import ExamReady from '../../../assets/images/ExamReady.png'
import AntiTheft from '../../../assets/images/AnitTheft.png'

const initialState = {
    projectsData: [
        {
            name: 'e-Operations',
            type: 'SAAS Web Application',
            urlTitle: 'e-Operations',
            githubLink: 'https://www.github.com',
            technologies: ['React.js', 'Material UI', 'SCSS', 'Javascript', 'Js pdf'],
            url: 'https://eops.pitc.com.pk',
            image: eOps,
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
            video: {
                src: './mepco.mp4',
                type: 'video/mp4',
                controls: true,
            },
            description: 'The Mepco Smart is a cross platform mobile as well as web interface developed as part of the Power Sector Improvement Activities (PSIA). It provides power consumers with smart monitoring features such as load profile, power outage information, consumption trends, and payment trends. The portal utilizes Highcharts.js to display interactive graphs and incorporates Formik and Yup for requesting various power services like new connections, attribute changes, meter replacements, due date extensions, and more.'
        },
        {
            name: 'Codiniti',
            type: 'Single Page App',
            urlTitle: 'Codiniti',
            githubLink: 'https://www.codiniti.com',
            technologies: ['React.js', 'Material UI', 'SCSS', 'Javascript', 'Framer Motion'],
            url: 'http://www.codiniti.com',
            image: Codiniti,
            video: {
                src: './CFC.mp4',
                type: 'video/mp4',
                controls: true,
            },
            description: `I developed an interactive website for a tech startup, showcasing the company's profile in a visually appealing manner. Utilizing Lattefiles for animations and Framer Motion for smooth transitions, the website offered an engaging user experience. With captivating motion effects and seamless section navigation, the website effectively communicated the startup's offerings, achievements, team, and vision.`
        },
        {
            name: 'Opt for Smart Meter',
            type: 'Single Page Application',
            urlTitle: 'OptForSmartMeter',
            githubLink: 'https://www.github.com/',
            technologies: ['React.js', 'Material UI', 'SCSS', 'JsPdf', 'JsBarCode', 'Media Queries'],
            url: 'http://117.20.28.178:8042',
            image: OptForSmartMeters,
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
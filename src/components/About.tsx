'use client'
import { motion, useAnimation } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const About = () =>
{
    const { isDarkMode } = useSelector((state: any) => state.darkMode);

    const professionalSkills = ['React', 'Redux ToolKit', 'Tailwind CSS', 'Flask', 'Javascript', 'Python', 'RestAPI', 'SCSS', 'JSON', 'Postman', 'Material UI', 'Jspdf', 'Git', 'NPM', 'Heroku', 'SqlServer', 'Postgresql', 'OpenProject', 'Trillo', 'Microsoft Office'];
    const otherSkills = ['Figma', 'Photopea', 'Adobe XD', 'Adobe Illustrator', 'Numpy', 'Pandas', 'Tensor Flow', 'Web Scrapping', 'Arduino IDE', 'ESP8266', 'Yed Yworks', 'Camunda Modeller', 'SVN'];

    const refAbout = useRef(null);
    const controlsAboutHeading = useAnimation();

    const handleScroll = () =>
    {
        const aboutTop = refAbout.current.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > aboutTop)
        {
            controlsAboutHeading.start({ opacity: 1, x: 0, transition: { duration: 0.35, delay: 0.35, ease: 'easeInOut' } });
        } else
        {
            controlsAboutHeading.start({ opacity: 0, x: -50 });
        }
    };

    useEffect(() =>
    {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkedInClick = () =>
    {
        // ReactGA.event({ category: 'User', action: 'Clicked Linked In Profile' });
    };

    const handleGithubClick = () =>
    {
        // ReactGA.event({ category: 'User', action: 'Clicked Github Profile' });
    };

    return (
        <div
            ref={refAbout}
            id="about"
            className={`dark:bg-black dark:text-white bg-white text-gray-800 w-full py-16 px-4`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-row items-center">
                    <motion.h2
                        className="text-3xl font-bold"
                        initial={{ opacity: 0, x: -100 }}
                        animate={controlsAboutHeading}
                    >
                        About<span className="text-green-500">.</span>
                    </motion.h2>
                    <div className="flex-1 ml-4 h-px bg-gray-400" />
                </div>

                <div className="mt-6">
                    <p className="text-lg leading-relaxed mb-8">
                        Hi! I’m <strong>Ammad</strong>, and welcome to my portfolio website! I’m a passionate and results-driven <strong>Software Engineer</strong> specializing in <strong>web development</strong>, with over 4 years of experience building robust, scalable, and user-friendly applications. My expertise lies in crafting seamless digital experiences, from designing intuitive front-end interfaces to developing powerful back-end systems. I thrive on solving complex problems and delivering innovative solutions that make a real-world impact.
                        <br /><br />
                        With a strong foundation in <strong>Computer Science</strong> and a deep love for coding, I’ve honed my skills in <strong>React.js, Flask, RESTful APIs,</strong> and <strong>database integration</strong>. I’ve worked on diverse projects, from enterprise-level portals to inventory management systems, always prioritizing clean, efficient, and secure code. My attention to detail and commitment to excellence have allowed me to consistently deliver high-quality software products that exceed expectations.
                        <br /><br />
                        Here, you’ll find a curated collection of my work, showcasing my technical expertise, problem-solving abilities, and dedication to creating transformative solutions. Whether it’s building responsive web applications, integrating cutting-edge APIs, or optimizing system performance, I’m passionate about leveraging technology to drive innovation and efficiency.
                    </p>

                    <div className="mt-10">
                        <div className="flex items-center mb-2">
                            {/* <Icon icon="ant-design:code-filled" className="text-xl text-green-500" /> */}
                            <p className="text-xl font-semibold ml-2">Professional Skills</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {professionalSkills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center mt-8 mb-2">
                            {/* <Icon icon="ant-design:smile-filled" className="text-xl text-blue-500" /> */}
                            <p className="text-xl font-semibold ml-2">Other Skills</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {otherSkills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center mt-10">
                    <p className="text-lg font-medium mr-4">My Links:</p>
                    <a
                        href="https://github.com/AmmadMughal20"
                        target="_blank"
                        rel="noreferrer"
                        onClick={handleGithubClick}
                        className="text-2xl text-gray-800 dark:text-gray-200 hover:text-black mx-2"
                    >
                        <Github />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ammad-mughal/"
                        target="_blank"
                        rel="noreferrer"
                        onClick={handleLinkedInClick}
                        className="text-2xl text-blue-700 dark:text-blue-300 hover:text-blue-900 mx-2"
                    >
                        <Linkedin />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;

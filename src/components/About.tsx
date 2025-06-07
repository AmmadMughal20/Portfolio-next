'use client'
import { motion, useAnimation, useInView } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const About = () =>
{
    const professionalSkills = ['React', 'Redux ToolKit', 'Tailwind CSS', 'Flask', 'Javascript', 'Python', 'RestAPI', 'SCSS', 'JSON', 'Postman', 'Material UI', 'Jspdf', 'Git', 'NPM', 'Heroku', 'SqlServer', 'Postgresql', 'OpenProject', 'Trillo', 'Microsoft Office'];
    const otherSkills = ['Figma', 'Photopea', 'Adobe XD', 'Adobe Illustrator', 'Numpy', 'Pandas', 'Tensor Flow', 'Web Scrapping', 'Arduino IDE', 'ESP8266', 'Yed Yworks', 'Camunda Modeller', 'SVN'];

    const ref = useRef(null);
    const controls = useAnimation();
    const inView = useInView(ref, { once: false, amount: 0.2 });

    useEffect(() =>
    {
        if (inView)
        {
            controls.start('visible');
        } else
        {
            controls.start('hidden');
        }
    }, [inView, controls]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const aboutTitleVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div
            ref={ref}
            id="about"
            className="dark:bg-black dark:text-white bg-white text-gray-800 w-full py-16 px-4 flex items-center xs:px-10 "
        >
            <div className="max-w-7xl mx-auto grid">
                <motion.div
                    className="flex flex-row items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.h2
                        className="text-black dark:text-white sm:text-[1.75rem] text-left m-0 p-0 w-max text-3xl font-bold"
                        variants={aboutTitleVariants}
                    >
                        About<span className="text-primary">.</span>
                    </motion.h2>
                    <motion.div
                        className="flex-1 ml-4 h-px bg-gray-400"
                        variants={itemVariants}
                    />
                </motion.div>

                <div
                    className="mt-6 flex xs:flex-col"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}>
                        <motion.p className="text-lg leading-relaxed mb-8 text-justify" variants={itemVariants}>
                            Hi! I’m <strong>Ammad</strong>, and welcome to my portfolio website! I’m a passionate and results-driven <strong>Software Engineer</strong> specializing in <strong>web development</strong>, with over 4 years of experience building robust, scalable, and user-friendly applications. My expertise lies in crafting seamless digital experiences, from designing intuitive front-end interfaces to developing powerful back-end systems. I thrive on solving complex problems and delivering innovative solutions that make a real-world impact.
                        </motion.p>

                        <motion.p className="text-lg leading-relaxed mb-8 text-justify" variants={itemVariants}>
                            With a strong foundation in <strong>Computer Science</strong> and a deep love for coding, I’ve honed my skills in <strong>React.js, Flask, RESTful APIs,</strong> and <strong>database integration</strong>. I’ve worked on diverse projects, from enterprise-level portals to inventory management systems, always prioritizing clean, efficient, and secure code. My attention to detail and commitment to excellence have allowed me to consistently deliver high-quality software products that exceed expectations.
                        </motion.p>

                        <motion.p className="text-lg leading-relaxed mb-8 text-justify" variants={itemVariants}>
                            Here, you’ll find a curated collection of my work, showcasing my technical expertise, problem-solving abilities, and dedication to creating transformative solutions. Whether it’s building responsive web applications, integrating cutting-edge APIs, or optimizing system performance, I’m passionate about leveraging technology to drive innovation and efficiency.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}>

                        <motion.div variants={itemVariants}>
                            <div className="flex items-center mb-2">
                                <p className="text-xl font-semibold ml-2">Professional Skills</p>
                            </div>
                            <motion.div className="flex flex-wrap gap-3"
                                variants={containerVariants}
                                initial="hidden"
                                animate={controls}>
                                {professionalSkills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        variants={itemVariants}
                                        className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div className="mt-8" variants={itemVariants}>
                            <div className="flex items-center mb-2">
                                <p className="text-xl font-semibold ml-2">Other Skills</p>
                            </div>
                            <motion.div className="flex flex-wrap gap-3"
                                variants={containerVariants}
                                initial="hidden"
                                animate={controls}>
                                {otherSkills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        variants={itemVariants}
                                        className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div className="flex items-center mt-10 gap-2" variants={itemVariants}>
                            <p className="text-lg font-medium">My Links:</p>
                            <Button variant={'outline'}>
                                <Link
                                    href="https://github.com/AmmadMughal20"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <Github />
                                </Link>
                            </Button>
                            <Button variant={'outline'}>
                                <Link
                                    href="https://www.linkedin.com/in/ammad-mughal/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <Linkedin />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;

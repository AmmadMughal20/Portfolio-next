'use client';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Intro = () =>
{
    const { isDarkMode } = useSelector((state: any) => state.darkMode)

    const handleScrollToContact = () =>
    {
        const contactSection = document.getElementById('contact');
        if (contactSection)
        {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen flex items-center justify-center`} id="intro">
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="flex flex-col items-start space-y-6">
                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold"
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        initial="hidden"
                        animate="visible"
                    >
                        Hi, I am Ammad<span className="text-green-500">.</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl font-medium"
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5, delay: 0.1, ease: 'backIn' }}
                        initial="hidden"
                        animate="visible"
                    >
                        A talented <span className="text-green-500">Software Engineer</span>
                    </motion.p>

                    <motion.p
                        className="text-base max-w-2xl leading-relaxed"
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5, delay: 0.2, ease: 'backIn' }}
                        initial="hidden"
                        animate="visible"
                    >
                        I have spent last 4 years making good softwares for companies. My expertise are in web development and have a passion in Artificial Intelligence.
                    </motion.p>

                    <motion.button
                        onClick={handleScrollToContact}
                        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                        transition={{ duration: 1, delay: 0.25, ease: 'backIn' }}
                        initial="hidden"
                        animate="visible"
                    >
                        Contact Me
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default Intro

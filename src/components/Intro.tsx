'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Button } from './ui/button';

const Intro = () =>
{
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.3 });

    const handleScrollToContact = () =>
    {
        const contactSection = document.getElementById('contact');
        if (contactSection)
        {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

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

    return (
        <section
            id="intro"
            className={`min-h-screen flex items-center justify-center transition-colors duration-300 dark:bg-black dark:text-white bg-white text-black} px-4 sm:px-6 md:px-8`}
        >
            <div className="w-full max-w-5xl xs:px-10">
                <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10">
                    {/* Heading */}
                    <motion.h1
                        ref={ref}
                        className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        initial="hidden"
                        animate={controls}
                    >
                        Hi, I&apos;m <span className="text-primary">Ammad</span>.
                    </motion.h1>

                    {/* Title */}
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl font-semibold"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut' }}
                        initial="hidden"
                        animate={controls}
                    >
                        A passionate <span className="text-primary">Software Engineer</span>
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed text-justify"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
                        initial="hidden"
                        animate={controls}
                    >
                        With 4 years of experience building scalable web applications for companies, I specialize in full-stack development and have a deep interest in Artificial Intelligence.
                    </motion.p>

                    {/* Button */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
                        initial="hidden"
                        animate={controls}
                    >
                        <Button
                            onClick={handleScrollToContact}
                            className="text-base sm:text-lg px-6 py-3 rounded-md"
                        >
                            Contact Me
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Intro;

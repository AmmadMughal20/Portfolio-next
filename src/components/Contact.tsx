'use client'

import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import
{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion, useAnimation, useInView } from 'framer-motion'

const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof formSchema>

const Contact = () =>
{
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.2 });
    const controls = useAnimation();

    const formRef = useRef<HTMLFormElement>(null)
    const [showThankYouPopup, setShowThankYouPopup] = useState(false)

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
                staggerChildren: 0.3,
                delayChildren: 0.4,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const experienceTitleVariants = {
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


    const onSubmit = () =>
    {
        if (formRef.current)
        {
            emailjs
                .sendForm(
                    'service_bjepq2k',
                    'template_zo2059i',
                    formRef.current,
                    'EUJLyM97-kwE0VaEo'
                )
                .then(() =>
                {
                    // Reset form
                    form.reset()
                    setShowThankYouPopup(true)
                })
                .catch((error) =>
                {
                    alert('Failed to send message')
                    console.log(error)
                })
        }


        //     ReactGA.event({
        //         category: 'User',
        //         action: 'Click message submit button',
        //   })

    }



    return (
        <>
            <div className="max-w-xl mx-auto py-10 min-h-screen h-auto flex items-center justify-center" id="contact" ref={ref}>
                <motion.div className='min-w-100 xs:min-w-80'
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.h2 className="text-3xl font-bold mb-6" variants={experienceTitleVariants}>Contact Us
                        <span className="text-primary">.</span>
                    </motion.h2>
                    <motion.div
                        variants={itemVariants}
                    >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" ref={formRef}>
                                {/* Name */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Email */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="you@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Message */}
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Your message..." rows={5} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Submit */}
                                <Button type="submit">Send Message</Button>
                            </form>
                        </Form>
                    </motion.div>
                </motion.div>


            </div>
            {
                showThankYouPopup && (
                    <div className="mt-6 text-green-600 font-semibold">
                        Thank you! Your message has been sent.
                    </div>
                )
            }
        </>
    )
}

export default Contact

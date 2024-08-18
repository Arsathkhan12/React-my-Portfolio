import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/IMG_8472.png";
import { FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const container = (delay) => ({
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, delay: delay, ease: "easeOut" },
    },
});

const Hero = () => {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setHasAnimated(true);
    }, []);

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-5xl font-light tracking-tight lg:mt-16 lg:text-6xl">
                            Mohamed Arsathkhan
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-300 bg-clip-text text-3xl tracking-tight text-transparent">
                            FullStack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <motion.button
                                variants={container(1.2)}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95, rotate: -3 }}
                                className="flex items-center bg-gradient-to-r from-red-600 to-blue-700 text-white transform transition-transform duration-300 px-4 py-2 rounded-full">
                                <FaEnvelope className="mr-2" />
                                Contact Me
                            </motion.button>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            className="box"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1.2,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                },
                            }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            src={profilePic} 
                            alt="Profile of Mohamed Arsathkhan" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

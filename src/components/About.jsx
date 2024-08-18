import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { FaDownload } from 'react-icons/fa';
import cvFile from '../assets/Arsathkhan CV.pdf';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y:-100}}
        transition={{duration: 1.5, ease: "easeOut" }}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="bg-gradient-to-r from-blue-800 via-white to-blue-400 bg-clip-text text-transparent">
          {" "}
          Me
        </span>
      </motion.h1>
      
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{ opacity: 1, rotateY: 0 }}
          initial={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img 
              className="rounded-2xl" 
              src={aboutImg} 
              alt="about" 
              style={{ transformOrigin: "center" }}
            />
          </div>
        </motion.div>
        
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start">
            <p 
              className="my-2 max-w-xl py-6">
              {ABOUT_TEXT}
            </p>
            
            <div className="mt-8 flex justify-center lg:justify-start space-x-8">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -5, rotate: [0, 3, -3, 3, 0] }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h2 
                  className="text-4xl font-bold"
                  animate={{ color: ["#ffffff", "#00FF00", "#ffffff"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  01+
                </motion.h2>
                <p className="text-lg">Years<br />experience</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-4xl font-bold">05+</h2>
                <p className="text-lg">Completed<br />certifications</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-4xl font-bold">01+</h2>
                <p className="text-lg">Companies<br />worked</p>
              </motion.div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.2, rotate: -10, transition: { yoyo: Infinity, duration: 0.5 } }}
              whileTap={{ scale: 0.8 }}
              className="mt-8"
            >
              <a
                href={cvFile}
                download="Arsathkhan CV.pdf"
                className="flex items-center bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
              >
                <FaDownload className="mr-2" />
                Download CV
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

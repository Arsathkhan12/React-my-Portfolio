import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h1 
          className="my-20 text-center text-4xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Contact Me
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h3 
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white mb-4"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              Let's Talk
            </motion.h3>
            <p>Do you have a project in your mind, contact me here...</p>
            <motion.div 
              className="mb-4 mt-8"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="inline-block text-white mr-2" />
              <a href="mailto:mamarsathkhan456@gmail.com" className="hover:underline">
                mamarsathkhan456@gmail.com
              </a>
            </motion.div>
            <motion.div 
              className="mb-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="inline-block text-white mr-2" />
              <span>+94775547196</span>
            </motion.div>
            <motion.div 
              className="mb-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkedAlt className="inline-block text-white mr-2" />
              <span>Sainthamaruthu, Sri Lanka.</span>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <form className="space-y-4">
              <motion.div 
                whileFocus={{ boxShadow: "0px 0px 8px rgba(0, 255, 255, 0.8)", scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-purple-400"
                  placeholder="Enter Your Name" 
                />
              </motion.div>
              <motion.div 
                whileFocus={{ boxShadow: "0px 0px 8px rgba(255, 255, 0, 0.8)", scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="email" className="block mb-2">Email</label>
                <input 
                  type="text" 
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-purple-400"
                  placeholder="Enter Your Email" 
                />
              </motion.div>
              <motion.div 
                whileFocus={{ boxShadow: "0px 0px 8px rgba(0, 255, 0, 0.8)", scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea 
                  type="text" 
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-purple-400"
                  rows="5"
                  placeholder="Enter Your Message" 
                />
              </motion.div>
              <motion.button 
                whileHover={{ backgroundColor: "#ff0000", scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-red-800 to-blue-700 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

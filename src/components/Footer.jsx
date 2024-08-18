import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center">
        <motion.h2 
          className="text-2xl font-bold text-white mb-4"
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ duration: 0.3 }}
        >
          Mohamed Arsathkhan<span className="text-white">.</span>
        </motion.h2>
        <motion.div 
          className="flex space-x-6 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.a 
            href="http://www.linkedin.com/in/mohamed-arsathkhan" 
            className="text-white-700 hover:text-black text-xl"
            whileHover={{ y: -5, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="https://github.com/Arsathkhan12" 
            className="text-white-700 hover:text-black text-xl"
            whileHover={{ y: -5, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/mr_arsathkhan" 
            className="text-white-700 hover:text-black text-xl"
            whileHover={{ y: -5, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a 
            href="https://wa.me/94775547196" 
            className="text-white-700 hover:text-black text-xl"
            whileHover={{ y: -5, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaWhatsapp />
          </motion.a>
        </motion.div>
      </div>
      <motion.div 
        className="text-gray-400 text-sm flex justify-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <p className="text-center">
          Copyright © <span className="text-white">Mohamed Arsathkhan</span> - All rights reserved
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

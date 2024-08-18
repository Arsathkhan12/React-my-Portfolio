import logo from "../assets/A.M.Arsathkhan.png";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      className="mb-20 flex items-center justify-between py-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div 
        className="flex flex-shrink-0 items-center"
        whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <img className="mx-2 w-40" src={logo} alt="logo" />
      </motion.div>
      
      <motion.div 
        className="m-8 flex items-center justify-center gap-4 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.a 
          href="http://www.linkedin.com/in/mohamed-arsathkhan" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.2, rotate: [0, 15, -15, 0] }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaLinkedin />
        </motion.a>
        
        <motion.a 
          href="https://github.com/Arsathkhan12" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.2, rotate: [0, 15, -15, 0] }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGithub />
        </motion.a>
        
        <motion.a 
          href="https://www.instagram.com/mr_arsathkhan" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.2, rotate: [0, 15, -15, 0] }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaInstagram />
        </motion.a>
        
        <motion.a 
          href="https://wa.me/94775547196" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.2, rotate: [0, 15, -15, 0] }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaWhatsapp />
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

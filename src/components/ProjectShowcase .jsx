import { FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectShowcase = () => {
  const projects = [
    {
      title: "E-Learning Management System",
      iconColor: "text-blue-800",
      link: "https://github.com/your-repo-1"
    },
    {
      title: "City Taxi: A Web Based system for Taxi Service",
      iconColor: "text-blue-800",
      link: "https://github.com/your-repo-2"
    },
    {
      title: "Portfolio Website",
      iconColor: "text-blue-800",
      link: "https://github.com/your-repo-4"
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white-500"
      >
        Projects Showcase
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full mx-auto"
          >
            <div className="flex flex-col items-center">
              <motion.div 
                whileHover={{ rotate: 360 }} 
                transition={{ duration: 0.8 }}
              >
                <FaAward className={`text-5xl ${project.iconColor} mb-4`} />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">{project.title}</h3>
              <a href={project.link} className="text-gray-500 underline">Go to Github</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;

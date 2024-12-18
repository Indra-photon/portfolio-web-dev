import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg min-w-[280px] md:min-w-[320px] w-full md:w-[320px] mx-4 md:mr-8 md:last:mr-0 transform transition-all duration-300"
      whileHover={{ scale: 1.0 }}
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative group">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 md:h-56 object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <motion.span 
            className="bg-[#003049] text-white text-xs px-2 py-1 rounded"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.category}
          </motion.span>
        </div>
      </div>

      <motion.div 
        className="pt-6 px-6 pb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#669BBC] line-clamp-2">
          {project.title}
        </h3>
        <p className="text-[#FDF0D5] mb-4 text-sm h-20 overflow-hidden line-clamp-3">
          {project.description}
        </p>

        <div className="flex justify-between mt-auto">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-[#669BBC] text-white py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:translate-y-[-2px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Live Demo
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
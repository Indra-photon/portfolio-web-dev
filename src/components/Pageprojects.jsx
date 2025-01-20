import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import pic1 from "../assets/portfolio_pr_dubai.png";
import pic2 from "../assets/photographer-site.png"
import pic3 from "../assets/avoron.png"
import pic4 from '../assets/bakery.png'
import { useNavigate } from "react-router-dom";
const projects = [
  {
    id: 1,
    title: "Avoron, an E-commerce site",
    description: "An elegant website designed to showcase avoron's unique products and sell using whatsapp",
    techStack: ["React", "Tailwind CSS", "Node", "Express", "Framer Motion", "Appwrite"],
    liveLink: "https://www.avoron.in/",
    githubLink: "https://github.com/Dev-Sisyphus/Photography-Website",
    image: pic3,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Facility Management Services, Dubai",
    description: "A comprehensive web application for ABS Dreams, showcasing facility management services with modern design and functionality.",
    techStack: ["React", "Tailwind CSS", "Node", "Express", "Framer Motion"],
    liveLink: "https://www.absdreamsfacilities.com/",
    githubLink: "https://github.com/gohan-gb/Facility-Management-Site",
    image: pic1,
    category: "Frontend"
  },
  {
    id: 3,
    title: "A Bakery business site, USA",
    description: "An elegant website for a bakery business in USA, design was provided by the client himslef",
    techStack: ["React", "Tailwind CSS", "Node", "Express", "Framer Motion", "Appwrite"],
    liveLink: "https://eat-smile-bakery-swart.vercel.app/",
    githubLink: "https://github.com/Dev-Sisyphus/Photography-Website",
    image: pic4,
    category: "frontend"
  },
  {
    id: 4,
    title: "Portfolio Site, a Photographer Lens",
    description: "An elegant portfolio website designed to showcase photographic work with smooth animations and responsive design.",
    techStack: ["React", "Tailwind CSS", "Node", "Express", "Framer Motion"],
    liveLink: "https://photography-website-ruby.vercel.app/",
    githubLink: "https://github.com/Dev-Sisyphus/Photography-Website",
    image: pic2,
    category: "Full Stack"
  }
];

const Pageprojects = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const handleScroll = (e) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(newIndex);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="bg-gray-900 text-gray-400">
      <div>
      <nav className="relative mb-10 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm">
          <ul className="flex justify-center space-x-6 py-4">
            {['HOME'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => navigate("/")}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      </div>
      <div className="container mx-auto max-w-7xl pt-5">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-[#669BBC]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My Projects
        </motion.h1>

        <motion.h3
          className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 text-[#669BBC]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Freelance Projects
        </motion.h3>

        <div className="relative">
          <motion.div
            className="absolute -bottom-6 left-0 right-0 h-1 bg-gray-700 rounded-full overflow-hidden"
            style={{ scaleX: 1 }}
          >
            <motion.div
              className="h-full bg-[#669BBC]"
              style={{ 
                scaleX: scrollXProgress,
                transformOrigin: "left"
              }}
            />
          </motion.div>

          <div
            ref={containerRef}
            className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory touch-pan-x"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
            onScroll={handleScroll}
          >
            
            <div className="flex px-4 md:px-0 space-x-6 md:space-x-8">
              {projects.map((project, index) => (
                <div key={project.id} className="snap-center">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          className="flex justify-center mt-8 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {projects.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === activeIndex ? 'bg-[#669BBC]' : 'bg-gray-700'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </motion.div>

        <motion.p 
          className="text-center mt-6 text-gray-500 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          ← Swipe to explore more projects →
        </motion.p>
      </div>
    </div>
  );
};

export default Pageprojects;
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from "../assets/portfolio_pr_dubai.png";
import pic2 from "../assets/photographer-site.png"
import pic3 from "../assets/avoron.png"

const ProjectsCarousel = () => {
  const projects = [
    {
      id: 1,
      name: "Avoron, an E-commerce site",
      description: "An elegant website designed to showcase avoron's unique products and sell using whatsapp",
      techStack: ["React", "Tailwind CSS", "Node", "Express", "Framer Motion", "Appwrite"],
      liveLink: "https://www.avoron.in/",
      githubLink: "https://github.com/Dev-Sisyphus/Photography-Website",
      pic: pic3,
      category: "Full Stack"
    },
    { id: 2, name: "Facility Management Services, Dubai", description: "ABS Dreams, a facility management services based on Dubai", techStack: ["React", "Tailwind CSS","Node", "Express", "Framer Motion"], liveLink: "https://www.absdreamsfacilities.com/", githubLink: "https://github.com/gohan-gb/Facility-Management-Site", pic: pic1 },
    { id: 3, name: "Portfolio Site", description: "A Photographer Portfolio Site", techStack: ["React", "Tailwind CSS","Node", "Express", "Framer Motion"], liveLink: "https://photography-website-ruby.vercel.app/", githubLink: "https://github.com/Dev-Sisyphus/Photography-Website", pic: pic2 },
    
  ];

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-between items-center gap-8 px-8 sm:flex-col"
    >

      <div className="flex-1 space-y-8">
        {projects.slice(0, Math.ceil(projects.length / 2)).map((project) => (
          <motion.div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
            <div>
                <section>
                    <img src={project.pic} className="h-full"></img>
                </section>
                <section>
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex gap-2 mt-4">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="text-sm bg-blue-700 px-2 py-1 rounded-lg">{tech}</span>
                    ))}
                    </div>
                    <div className="flex justify-between mt-5">
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
                </section>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex-1 space-y-8">
        {projects.slice(Math.ceil(projects.length / 2)).map((project) => (
          <motion.div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <div>
              <section>
                  <img src={project.pic} className="h-full"></img>
              </section>
              <section>
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="flex gap-2 mt-4">
                  {project.techStack.map((tech, index) => (
                      <span key={index} className="text-sm bg-blue-700 px-2 py-1 rounded-lg">{tech}</span>
                  ))}
                  </div>
                  <div className="flex justify-between mt-5">
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
              </section>
          </div>
        </motion.div>
        ))}
      </div>
    </motion.div>
  );
};




export default ProjectsCarousel;



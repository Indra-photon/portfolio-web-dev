// import { motion } from "framer-motion";
// import { Carousel } from "react-responsive-carousel"; // You can install this with npm install react-responsive-carousel
 // Adjust this path to your actual image location

// const ProjectsCarousel = () => {
//   const projects = [
//     { id: 1, name: "Project 1", description: "Brief description of Project 1.", techStack: ["React", "Tailwind CSS", "Framer Motion"], liveLink: "https://live-project1.com", githubLink: "https://github.com/project1" },
//     { id: 2, name: "Project 2", description: "Brief description of Project 2.", techStack: ["React", "Node.js", "Express"], liveLink: "https://live-project2.com", githubLink: "https://github.com/project2" },
//     { id: 3, name: "Project 3", description: "Brief description of Project 3.", techStack: ["Vue", "Django"], liveLink: "https://live-project3.com", githubLink: "https://github.com/project3" },
//     // Add more projects as needed
//   ];

//   return (
//     <motion.div
//       initial={{ width: 0, opacity: 0 }}
//       whileInView={{ width: "100%", opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeIn" }}
//       viewport={{ once: true }}
//       className="max-w-6xl mx-auto px-4"
//     >
//       <h2 className="text-4xl font-bold mb-6 text-center text-[#669BBC]">My Projects</h2>
//       <Carousel
//         showThumbs={false}
//         infiniteLoop={true}
//         autoPlay={true}
//         interval={2000}
//         showStatus={false}
//       >
//         {projects.map((project) => (
//           <motion.div key={project.id} className="flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6">
//             <img src={pic17} alt={project.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
//             <h3 className="text-xl font-semibold mb-2 text-[#669BBC]">{project.name}</h3>
//             <p className="text-[#FDF0D5] mb-4 text-center">{project.description}</p>
//             <div className="flex gap-2 mb-4">
//               {project.techStack.map((tech, index) => (
//                 <span key={index} className="text-sm bg-[#669BBC] text-white px-2 py-1 rounded-full">{tech}</span>
//               ))}
//             </div>
//             <div className="flex gap-4">
//               <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#669BBC] text-white px-4 py-2 rounded hover:bg-[#577D99] transition duration-300">Go Live</a>
//               <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-[#FDF0D5] text-gray-800 px-4 py-2 rounded hover:bg-[#E9D7BC] transition duration-300">GitHub Repo</a>
//             </div>
//           </motion.div>
//         ))}
//       </Carousel>
//     </motion.div>
//   );
// };


// export default ProjectsCarousel;

import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from "../assets/portfolio_pr_dubai.png";
import pic2 from "../assets/photographer-site.png"
import pic3 from "../assets/tinderDog.jpg"

const ProjectsCarousel = () => {
  const projects = [
    { id: 1, name: "Facility Management Services, Dubai", description: "ABS Dreams, a facility management services based on Dubai", techStack: ["React", "Tailwind CSS","Node", "Express", "Framer Motion"], liveLink: "https://www.absdreamsfacilities.com/", githubLink: "https://github.com/gohan-gb/Facility-Management-Site", pic: pic1 },
    { id: 2, name: "Portfolio Site", description: "A Photographer Portfolio Site", techStack: ["React", "Tailwind CSS","Node", "Express", "Framer Motion"], liveLink: "https://photography-website-ruby.vercel.app/", githubLink: "https://github.com/Dev-Sisyphus/Photography-Website", pic: pic2 },
    { id: 3, name: "Tinder Website for Dogs", description: "A beautiful tinder website for dogs using bootstrap", techStack: ["HTML", "CSS", "Bootstrap"], liveLink: "https://indra-photon.github.io/Bootstrap--Tinder-Dog/", githubLink: "https://github.com/Indra-photon/Bootstrap--Tinder-Dog", pic: pic3 },
    
  ];

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-between items-center gap-8 px-8 sm:flex-col"
    >
      {/* Left Column for Project Cards */}
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
                    <div className="flex mt-4 gap-4">
                        <a href={project.liveLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Go Live</a>
                        <a href={project.githubLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                </section>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      {/* <div className="w-1 bg-gray-700 h-full"></div> */}

      {/* Right Column for Project Cards */}
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
                  <div className="flex mt-4 gap-4">
                      <a href={project.liveLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Go Live</a>
                      <a href={project.githubLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
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



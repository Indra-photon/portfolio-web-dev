import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, CodeBracketIcon, UserIcon } from '@heroicons/react/24/outline'
import pic6 from '../assets/Indranil_pic-modified.png'
import pic7 from '../assets/Bootstrap.svg'
import pic8 from '../assets/Express.svg'
import pic9 from '../assets/Git.svg'
import pic10 from '../assets/Github.svg'
import pic11 from '../assets/HTML.svg'
import pic12 from '../assets/MongoDB.svg'
import pic13 from '../assets/React-Dark.svg'
import pic14 from '../assets/Tailwind.svg'
import pic15 from '../assets/NodeJS.svg'
import pic16 from '../assets/JavaScript.svg'
import { ContactUs } from './Form/ContactEmailjs'
import Typewriter from 'typewriter-effect';
import ProjectsCarousel from './Projects'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/Github.svg'
import { useNavigate } from 'react-router-dom'

const skills = [
  { img: pic11, label: "HTML" },
  { img: pic13, label: "React" },
  { img: pic14, label: "Tailwind" },
  { img: pic7, label: "Bootstrap" },
  { img: pic16, label: "JavaScript" },
  { img: pic8, label: "Express" },
  { img: pic9, label: "Git" },
  { img: pic10, label: "GitHub" },
  { img: pic12, label: "MongoDB" },
  { img: pic15, label: "NodeJS" },
];

const paragraphText = "A skilled web developer, crafting and managing websites and web applications to ensure the success of the entire product with finesse.";
const words = paragraphText.split(" "); 



export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const gotoProjectpage = () => {
    navigate("/all-projects")
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScroll = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm">
        <ul className="flex justify-center space-x-6 py-4">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <button
                onClick={() => smoothScroll(section)}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  activeSection === section
                    ? 'text-blue-800'
                    : 'text-gray-400 hover:text-blue-500'
                }`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="pt-16">
        <AnimatePresence>
          <section id="home" className="min-h-screen flex items-center justify-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className='flex justify-center'>
                <img src={pic6} className="w-40 h-40 rounded-full shadow-lg mb-4 border-2 border-sky-700 p-2" alt="Profile" />
              </div>
              <h1 className="text-5xl font-bold mb-4"><span className='text-[#FDF0D5]'>HEY I'M</span> <span className='text-[#669BBC]'>INDRANIL MAITI</span></h1>
              <p className="text-2xl text-[#FDF0D5] mb-4">
                <Typewriter
                  options={{
                    strings: ['Full Stack Developer (MERN)'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
        
              <motion.p
                className="text-xl text-[#FDF0D5] mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-1"
                    initial={{ color: "#FDF0D5" }}
                    animate={{ color: ["#FDF0D5", "#669BBC"] }}// Color cycle
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: index * 0.3, // Delay each word
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
              <div className = 'flex gap-5 justify-center items-center mb-5'>
                <a href = 'https://github.com/Indra-photon'><img src= {github} className = 'h-8 w-8'></img></a>
                <a href = 'https://www.facebook.com/indranil.maiti.564/'><img src= {facebook} className = 'h-8 w-8'></img></a>
                <a href = 'https://www.linkedin.com/in/indranil-maiti-b56967228/'><img src= {linkedin} className = 'h-8 w-8'></img></a>
                <a href = 'https://www.instagram.com/indra_d_cogniz_clicker/'><img src= {instagram} className = 'h-8 w-8'></img></a>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#003049] text-white px-6 py-3 rounded-full text-lg font-semibold"
                onClick={() => smoothScroll('contact')}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </section>

          <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="text-4xl font-bold mb-8 text-[#669BBC]">ABOUT ME</h2>
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-[#FDF0D5]">
                  <p className="text-xl mb-6 text-[#FDF0D5] ">
                    I'm a passionate full stack developer with 5 years of experience in creating web applications. I
                    specialize in React, Node.js, and cloud technologies.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                      <UserIcon className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                      <p className="text-sm text-[#FDF0D5]">2 Years Experience</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                      <CodeBracketIcon className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                      <p className="text-sm text-[#FDF0D5]">10+ Projects Completed</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center sm:hidden"
            >
              <h2 className="text-4xl font-bold mb-8 text-[#669BBC] mt-8">SKILLS</h2>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-[#FDF0D5]">
                <div className="flex justify-center items-center gap-8">
                  {/* {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="relative group flex justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={skill.img}
                        className="h-auto w-auto transition-transform transform"
                        alt={skill.label}
                      />
                      <motion.span
                        className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 rounded-lg"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.label}
                      </motion.span>
                    </motion.div>
                  ))} */}

                <div className="flex justify-center items-center gap-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="relative group flex justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={skill.img}
                        className="h-auto w-auto transition-transform transform"
                        alt={skill.label}
                        aria-label={skill.label}
                      />
                      <motion.span
                        className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 rounded-lg"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.label}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                </div>
              </div>

            </motion.div>
            </div>
          </section>

          <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className='text-center'>
            <h2 className="text-4xl font-bold mb-4 text-[#669BBC]">PROJECTS</h2>
            <div className='pb-10'>
              <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#003049] text-white px-6 py-3 rounded-full text-lg font-semibold"
                    onClick={() => gotoProjectpage()}
                  >
                    View All Projects
              </motion.button>
            </div>
            <ProjectsCarousel />
            </div>
          </section>

          <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center px-4"
            >
              <h2 className="text-4xl font-bold mb-4 text-[#669BBC]">CONTACT ME</h2>
              <p className="text-xl text-[#FDF0D5] mb-2">
                  I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="bg-[#003049] p-8">
                <ContactUs />
              </div>
            </motion.div>
          </section>
        </AnimatePresence>

        <footer className="bg-gray-800 text-center py-6">
          <div className = 'flex gap-5 justify-center items-center mb-5'>
              <a href = 'https://github.com/Indra-photon'><img src= {github} className = 'h-8 w-8'></img></a>
              <a href = 'https://www.facebook.com/indranil.maiti.564/'><img src= {facebook} className = 'h-8 w-8'></img></a>
              <a href = 'https://www.linkedin.com/in/indranil-maiti-b56967228/'><img src= {linkedin} className = 'h-8 w-8'></img></a>
              <a href = 'https://www.instagram.com/indra_d_cogniz_clicker/'><img src= {instagram} className = 'h-8 w-8'></img></a>
          </div>
          <p className="text-gray-400">© 2024 Indranil Maiti. All rights reserved.</p>
        </footer>
      </main>

      <motion.button
        onClick={() => smoothScroll('home')}
        className="fixed bottom-8 right-8 bg-purple-600 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDownIcon className="h-6 w-6 transform rotate-180" />
      </motion.button>
    </div>
  )
}

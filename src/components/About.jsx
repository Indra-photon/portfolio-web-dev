import React, { useState } from 'react'
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
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './About.css'
import { motion } from 'framer-motion'
import Contact from './Form/Contact'
import { ContactUs } from './Form/ContactEmailjs'

const educationData = [
  { id: 1, title: 'Higher Secondary', institution: "PJI", percentage: '95%' },
  { id: 2, title: 'B.Sc. Physics', institution: "Visva Bharati, Santiniketan", percentage: '80%' },
  { id: 3, title: 'M.Sc. Physics', institution: "Visva Bharati, Santiniketan", percentage: '85%' },
];

const certificationData = [
  { id: 1, title: 'Web Development', institution: "Vidyastu", Year: "2024" },
  { id: 2, title: 'Internship', institution: "Sisyphus Infotech", Year: "May 14, 2024 - July 14, 2024" },
];

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


const About = () => {

  return (
    <div className="bg-amber-200 min-h-screen">
      <Navbar />
      <div className="py-12 px-6 lg:px-48 sm:px-0 sm:mx-0">
        <section className="flex flex-col items-center text-center sm:w-screen">
          <img src={pic6} className="w-40 h-40 rounded-full shadow-lg mb-6 border-2 border-orange-800 p-2" alt="Profile" />
          <h1 className="text-4xl font-bold text-orange-800">PHYSICIST</h1>
          <h2 className="text-2xl mb-2">by profession</h2>
          <h1 className="text-4xl font-bold text-orange-800">WEB-DEVELOPER</h1>
          <h2 className="text-2xl">by passion .....</h2>
          <p className="italic mt-4 text-lg">"Impossible is a word to be found in a fool's dictionary"... Napoleon</p>
        </section>

        <section className="flex flex-col lg:flex-row gap-10 pt-16">
          <div className="lg:w-1/2 sm:w-full sm:px-2 sm:mx-0">
            <section className="border-l-4 border-orange-800 pl-4 sm:pl-2">
              <h3 className="text-3xl font-semibold mb-6">Education</h3>
              {educationData.map((item) => (
                <motion.div
                  key={item.id}
                  className="w-full border-2 border-orange-800 rounded-lg p-5 mb-4 bg-amber-100 shadow-md sm:w-full"
                  whileHover={{ backgroundColor: 'rgb(245, 158, 11)' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-2xl font-bold">{item.title}</p>
                  <p className="text-xl font-bold">{item.institution}</p>
                  <p className="text-lg">Percentage: {item.percentage}</p>
                </motion.div>
              ))}
            </section>
          </div>
      
      

          <div className="lg:w-1/2 sm:px-2 sm:mx-0">
            <section className="border-l-4 border-orange-800 pl-4 sm:pl-2">
              <h3 className="text-3xl font-semibold mb-6">Certification</h3>
              {certificationData.map((item) => (
                <motion.div
                  key={item.id}
                  className="w-full border-2 border-orange-800 rounded-lg p-5 mb-4 bg-amber-100 shadow-md sm:w-full sm:mr-5"
                  whileHover={{ backgroundColor: 'rgb(245, 158, 11)' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-2xl font-bold">{item.title}</p>
                  <p className="text-xl font-bold">{item.institution}</p>
                  <p className="text-lg">Percentage: {item.percentage}</p>
                </motion.div>
              ))}
            </section>
          </div>
        </section>

        <section className=" sm:w-screen sm:px-2 sm:pl-0 text-center mt-16 border-2 pl-2 pr-2 rounded-2xl border-orange-800">
          <section className = 'sm:w-screen'>
            <h3 className="text-3xl font-semibold mt-5 mb-5">Coding Skills</h3>
            <div className="flex flex-wrap justify-center gap-6 mb-1">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={skill.img}
                    className="h-24 w-24 transition-transform transform"
                    alt={skill.label}
                  />
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.label}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </section>
        </section>

        <section className = 'mt-0 sm:w-screen sm:mt-0'>
          <ContactUs />
        </section>
        
      </div>
      
      <Footer />
    </div>
  )
}

export default About;
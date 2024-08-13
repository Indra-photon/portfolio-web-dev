import React from 'react';
import pic5 from '../assets/pic5.svg';
import pic6 from '../assets/sisyphus.jpg';
import pic7 from '../assets/tinderDog.jpg';
import pic8 from '../assets/shopping.jpg';
import pic9 from '../assets/photography-site.jpg'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-amber-200 px-10 lg:px-20 py-10">
        {/* Hero Section */}
        <motion.div 
          className="flex justify-center items-center flex-col"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={pic5} className="w-40 h-40 pt-10" alt="pic5" />
          <p className="text-orange-800 text-4xl mt-4">What I've been up to</p>
          <p className="text-xl mt-2 text-center">Here's a selection of some recent work.</p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12">
        {/*Photography site*/}
        <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover = {{scale: 1.1}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img src={pic9} className="w-full rounded-lg mb-6" alt="Photography site" />
            <h3 className="text-4xl text-orange-800 mb-4">Photography Site</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {['#react.js', '#express.js', '#node.js', '#mongoDB', '#mongoose', '#javascript'].map(tag => (
                <span key={tag} className="bg-amber-500 p-2 font-bold rounded-xl">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Indra-photon/E-commerce-Website" className="text-xl text-white bg-orange-500 rounded-2xl p-2">
                Github repo
              </a>
              <a href="https://photography-website-ruby.vercel.app/" className="text-xl text-white bg-orange-500 rounded-2xl p-2">
                Go Live
              </a>
            </div>
          </motion.div>

          {/* E-commerce Project */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover = {{scale: 1.1}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img src={pic8} className="w-full rounded-lg mb-6" alt="E-commerce website" />
            <h3 className="text-4xl text-orange-800 mb-4">E-commerce website</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {['#react.js', '#express.js', '#node.js', '#mongoDB', '#mongoose', '#javascript'].map(tag => (
                <span key={tag} className="bg-amber-500 p-2 font-bold rounded-xl">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Indra-photon/E-commerce-Website" className="text-xl text-white bg-orange-500 rounded-2xl p-2">
                Github repo
              </a>
            </div>
          </motion.div>

          {/* Digital Web-development Website */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover = {{scale: 1.1}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img src={pic6} className="w-full rounded-lg mb-6" alt="Digital Web-development Website" />
            <h3 className="text-4xl text-orange-800 mb-4">Digital Web-development Website</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {['#react.js', '#express.js', '#node.js', '#mongoDB', '#mongoose', '#javascript'].map(tag => (
                <span key={tag} className="bg-amber-500 p-2 font-bold rounded-xl">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Indra-photon/Cloning-Website---Sisyphus-Infotech" className="text-xl text-white bg-orange-500 rounded-2xl p-2">
                Github repo
              </a>
              <a href="https://indra-photon.github.io/Cloning-Website---Sisyphus-Infotech/" className="text-xl text-white bg-orange-500 rounded-2xl p-2">
                Go Live
              </a>
            </div>
          </motion.div>

          {/* Tinder Dog Project */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover = {{scale: 1.1}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img src={pic7} className="w-full rounded-lg mb-6" alt="Tinder Dog" />
            <h3 className="text-4xl text-orange-800 mb-4">Tinder Dog</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {['#HTML', '#CSS', '#Bootstrap'].map(tag => (
                <span key={tag} className="bg-amber-500 p-2 font-bold rounded-xl">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Indra-photon/E-commerce-Website" className="text-xl text-white bg-orange-500 rounded-2xl p-2">
                Github repo
              </a>
              <a href="https://indra-photon.github.io/Bootstrap--Tinder-Dog/" className="text-xl text-white bg-orange-500 rounded-2xl p-2">
                Go Live
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;

import React from 'react';
import indra from '../assets/Indra.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/Github.svg';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import Bubbles from '../components/3Ddesign/Bubble';

const HomepageTop = () => {
  return (
    <>
      <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${indra})` }}>
        
        {/* Bubbles Component - Positioned behind the main content */}
        <div className="absolute inset-0 z-0">
          <Bubbles />
        </div>

        {/* Overlay for Background Image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center mt-72">
          <button className="mt-8 px-8 py-4 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
            <Link to="/homepage">Explore my work</Link>
          </button>
          <p className="font-bold text-5xl md:text-7xl lg:text-8xl text-white" style={{ opacity: 0.8 }}>
            <Typewriter
              options={{
                strings: ['MERN stack developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>

        {/* Social Icons */}
        <div className="absolute right-0 top-1/2 mr-4 flex-col space-x-2">
          <a href='https://github.com/Indra-photon'>
            <img src={github} className='h-8 w-8' alt="GitHub" />
          </a>
          <a href="https://www.facebook.com/indranil.maiti.564/">
            <img src={facebook} className="h-8 w-8" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/indranil-maiti-b56967228/">
            <img src={linkedin} className="h-8 w-8" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/indra_lone_wolf/">
            <img src={instagram} className="h-8 w-8" alt="Instagram" />
          </a>
        </div>
      </div>
    </>
  );
};

export default HomepageTop;

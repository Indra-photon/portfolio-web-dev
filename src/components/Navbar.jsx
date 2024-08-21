import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import signature from '../assets/output-onlinegiftools.gif';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className='flex justify-between items-center bg-amber-600 text-white text-2xl p-4'>
        <div><img src={signature} alt="signature" className="h-10" /></div>
        <nav className="hidden md:block">
          <ul className='flex gap-10 cursor-pointer'>
            <li className={`font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${currentPath === "/home" ? "text-orange-200" : ""}`}>
              <Link to="/home">Welcome</Link>
            </li>
            <li className={`font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${currentPath === "/homepage" ? "text-orange-200" : ""}`}>
              <Link to="/homepage">Home</Link>
            </li>
            <li className={`font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${currentPath === "/project" ? "text-orange-200" : ""}`}>
              <Link to="/project">Project</Link>
            </li>
            <li className={`font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${currentPath === "/about" ? "text-orange-200" : ""}`}>
              <Link to="/about">About me</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-amber-600 text-white p-4">
          <ul className='flex flex-col gap-5'>
            <li className={`font-bold ${currentPath === "/home" ? "text-orange-200" : ""}`}>
              <Link to="/home" onClick={toggleMenu}>Welcome</Link>
            </li>
            <li className={`font-bold ${currentPath === "/homepage" ? "text-orange-200" : ""}`}>
              <Link to="/homepage" onClick={toggleMenu}>Home</Link>
            </li>
            <li className={`font-bold ${currentPath === "/project" ? "text-orange-200" : ""}`}>
              <Link to="/project" onClick={toggleMenu}>Project</Link>
            </li>
            <li className={`font-bold ${currentPath === "/about" ? "text-orange-200" : ""}`}>
              <Link to="/about" onClick={toggleMenu}>About me</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;

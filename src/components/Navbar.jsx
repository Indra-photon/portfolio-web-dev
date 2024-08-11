import React from 'react';
import { Link, useLocation } from "react-router-dom";
import signature from '../assets/output-onlinegiftools.gif';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <div className='flex justify-between bg-amber-600 text-white text-2xl'>
        <div><img src={signature} alt="signature" /></div>
        <nav>
          <ul className='flex gap-10 cursor-pointer pl-20 pr-10 py-10'>
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
      </div>
    </div>
  );
};

export default Navbar;


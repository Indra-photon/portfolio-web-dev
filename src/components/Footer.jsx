import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/Github.svg'


const Footer = () => {
  return (
    <div className = 'bg-amber-600 flex-col gap-10 h-24'>

        <div className = 'flex gap-5 justify-center items-center pb-3 pt-3 text-xl text-white'>
            Connect me 
        </div>
        <div className = 'flex gap-5 justify-center items-center'>
            <a href = 'https://github.com/Indra-photon'><img src= {github} className = 'h-8 w-8'></img></a>
            <a href = 'https://www.facebook.com/indranil.maiti.564/'><img src= {facebook} className = 'h-8 w-8'></img></a>
            <a href = 'https://www.linkedin.com/in/indranil-maiti-b56967228/'><img src= {linkedin} className = 'h-8 w-8'></img></a>
            <a href = 'https://www.instagram.com/indra_lone_wolf/'><img src= {instagram} className = 'h-8 w-8'></img></a>
        </div>
    </div>
  )
}

export default Footer

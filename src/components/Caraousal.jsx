import React from 'react'
import { useState, useEffect } from 'react';

const Carousal = ({data}) => {
    const [slides, setSlides] = useState(0)
    const nextSlide = () => {
        setSlides(slides === data.length -1 ? 0 : slides+1)
      }

    // const prevSlide = () => {
    // setSlides(slides === 0 ? data.length-1 : slides-1)
    // }

    useEffect(() => {
      const slideTimer = setInterval(nextSlide, 2000);
      return () => clearInterval(slideTimer); 
    }, [slides]);
    


    const slideStyle = {
      borderRadius: '0.5rem',
      boxShadow: '0px 0px 7px #666',
      width: '100%',
      height: '100%',
      
      
    };
    const slideHidden = {
      borderRadius: '0.5rem',
      boxShadow: '0px 0px 7px #666',
      width: '100%',
      height: '100%',
      display: 'none',
      
    }
    const indicator =  {
      backgroundColor: 'white',
      height: '0.5rem',
      width: '0.5rem',
      borderRadius: '100%',
      border: 'none',
      outline: 'none',
      boxShadow: '0px 0px 5px #555',
      margin: '0 0.2rem'
    }

    const indicatorInactive = {
      backgroundColor: 'grey',
      height: '0.5rem',
      width: '0.5rem',
      borderRadius: '100%',
      border: 'none',
      outline: 'none',
      boxShadow: '0px 0px 5px #555',
      margin: '0 0.2rem'
    }
  

  return (
    <div className='relative flex justify-center  w-fit h-fit md:w-[100%]'>

        {/* <BsArrowLeftCircleFill className='absolute w-8 h-8 text-white left-4' onClick={prevSlide} /> */}
        <div>
          {data.map((item, index) => {
              return <img src={item.src} alt = {item.alt}  key = {index}
              className={'rounded-lg shadow-md'}
              style =  {slides === index ? slideStyle : slideHidden}
              />     
          })}
        </div>
        {/* {data.map((item, index) => {
            return <img src={item.src} alt = {item.alt}  key = {index}
            className={'rounded-lg shadow-md w-full'}
            style =  {slides === index ? slideStyle : slideHidden}
             />     
        })} */}

        {/* <BsArrowRightCircleFill className='absolute w-8 h-8 text-white right-4' onClick={nextSlide} /> */}

        <span className='flex absolute bottom-4'>
        {data.map((_,idx) => {
          return <button key = {idx} onClick={null} 
          className='bg-white h-2 w-2 rounded-full border-none outline-none shadow-md mx-1'
          style = {slides === idx ? indicator : indicatorInactive} >
          </button>
        })}
        </span>


    </div>
  )
}

export default Carousal
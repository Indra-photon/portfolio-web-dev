/*Old code*/
import { useState } from 'react'
import '../components/Homepage.css'
import pic1 from '../assets/pic1_homepage.svg'
import pic2 from '../assets/pic2.svg'
import pic3 from '../assets/pic3.svg'
import { motion } from "framer-motion"
import HoverCard from './HoverCard/HoverCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const text = "Welcome to WebWorks Gallery".split(" ");

const Homepage = () => {

    const [isTextComplete, setIsTextComplete] = useState(true);

    const handleTypewriterComplete = () => {
        setIsTextComplete(true);
    };

  return (
    <div>
    <Navbar />
    <div className = 'h-max bg-amber-200'>
        <div className = 'h-auto bg-amber-200 flex py-10'>
            <section>
                <div className = {`text-3xl font-serif flex gap-10 items-center ${isTextComplete ? 'opacity-100 transition-all duration-500' : 'opacity-0'}`}>
                    <section>
                        <section className = 'md:px-5 sm:px-5'>
                            <p className = 'pt-1 sm:w-screen sm:px-5 sm:pl-5'> With a blend of creativity and technical expertise, I bring ideas to life through 
                            elegant <span className = 'text-orange-800 font-bold'>front end designs</span> and robust <span className = 'text-orange-800 font-bold'>
                            back-end solutions</span></p>
                        </section>
                        <section className='flex justify-center mt-5 mx-10'>
                            <div
                                className={`
                                    w-full md:w-3/4 text-orange-800 lg:w-2/3 bg-[rgb(245, 158, 11)] rounded-2xl transition-all duration-1000 ease-linear flex flex-col md:flex-row justify-center items-center py-5 ${isTextComplete ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <div className='flex md:flex-row gap-20 md:gap-10 px-5 md:px-0 sm:flex-col sm:gap-2'>
                                    <section className='flex flex-col gap-4 sm:flex-col'>
                                        <div className='flex items-center gap-2'>
                                            <img src='https://sisyphusinfotech.com/assets/our-strength/cost.png' className='h-8 w-8' alt='UI/UX Design' />
                                            <p className='text-2xl md:text-2xl lg:text-3xl text-orange-800'>Best UI/UX Design</p>
                                        </div>
                                        <hr className='h-1 bg-slate-400' />
                                        <div className='flex items-center gap-2'>
                                            <img src='https://sisyphusinfotech.com/assets/our-strength/cost.png' className='h-8 w-8' alt='Device Friendly Design' />
                                            <p className='text-2xl md:text-2xl lg:text-3xl text-orange-800'>Device friendly design</p>
                                        </div>
                                        <hr className='h-1 bg-slate-400' />
                                    </section>
                                    <section className='flex flex-col gap-4 sm:flex-col'>
                                        <div className='flex items-center gap-2'>
                                            <img src='https://sisyphusinfotech.com/assets/our-strength/service.png' className='h-8 w-8' alt='Service Oriented' />
                                            <p className='text-2xl md:text-2xl lg:text-3xl text-orange-800'>Service Oriented</p>
                                        </div>
                                        <hr className='h-1 bg-slate-400' />
                                        <div className='flex items-center gap-2'>
                                            <img src='https://sisyphusinfotech.com/assets/our-strength/detail.png' className='h-8 w-8' alt='Detail Oriented' />
                                            <p className='text-2xl md:text-2xl lg:text-3xl text-orange-800'>Detail Oriented</p>
                                        </div>
                                        <hr className='h-1 bg-slate-400' />
                                    </section>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>  
            </section>      
        </div>

        <section>
            <section className = 'py-0 px-48 bg-amber-200 md:px-10 sm:px-0'>
                <div className = 'flex justify-center text-4xl'>
                    <p className = 'pb-4'> What I can do </p>
                </div>
                <section className = 'md:flex md:justify-center'>
                    <HoverCard index={0}>
                        <div className = 'flex gap-5 pb-8 md:flex md:justify-center sm:flex-col sm:w-screen'>
                            <section className = 'sm:flex sm:justify-center'>
                                <img src={pic2} className = 'w-28 h-28'></img>
                            </section>
                            <section>
                                <div className = 'sm:flex sm:justify-center'>
                                <p className = 'text-orange-800 text-3xl pb-5'>Design what you want</p>
                                </div>
                                <div className = 'sm:flex sm:justify-center sm:px-5'>
                                <p className = 'text-xl md:text-2xl'>I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.</p>
                                </div>
                            </section>           
                        </div>
                    </HoverCard>
                </section>
                <section className = 'md:flex md:justify-center'>
                    <HoverCard index={1}>
                        <div className = 'flex gap-5 sm:flex-col-reverse'>
                            <section>
                                <div className = 'sm:flex sm:justify-center'>
                                <p className = 'text-orange-800 text-3xl pb-5'>Develop what you need</p>
                                </div>
                                <div className = 'sm:flex sm:justify-center sm:px-5'>
                                <p className = 'text-xl md:text-2xl'>I am a developer, so I know how to create your website to run across devices using the latest technologies available.</p>
                                </div>
                            </section>
                            <section className = 'sm:flex sm:justify-center'>
                                <img src={pic3} className = 'w-28 h-28'></img>
                            </section>         
                        </div>
                    </HoverCard>
                </section>
            </section>

            <section className = 'py-10 px-48 bg-amber-200 md:px-10 sm:px-0'>
                <div className = 'flex justify-center text-4xl'>
                    <p className = 'pb-0'> I can help </p>
                </div>
                <section className = 'md:flex md:justify-center'>
                    <HoverCard index={0}>
                    <div>
                        <section className='flex justify-center items-center sm:flex sm:justify-center sm:px-5'>
                            <p className = 'text-orange-800 text-3xl pb-5'>I’m currently available for freelance work.</p>
                        </section>
                        <section className='flex justify-center items-center sm:px-5'>
                        <p className = 'text-xl md:text-2xl'>If you have a project that you want to get started, 
                        think you need my help with something or just fancy saying hey, then get in touch.</p>
                        </section>
                    </div>
                    </HoverCard>
                </section>
            </section>
        </section>
    </div>
    <Footer />
    </div>
  )
}

export default Homepage

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

    const [isTextComplete, setIsTextComplete] = useState(false);

    const handleTypewriterComplete = () => {
        setIsTextComplete(true);
    };

  return (
    <div>
    <Navbar />
    <div className = 'h-max bg-amber-200'>
        <div className = 'h-[550px] bg-amber-200 flex px-10 py-10'>
            
            <section>
                <section className = 'text-6xl font-serif flex items-center justify-center'>
                
                <div>
                {text.map((el, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.25,
                            delay: i / 5
                        }}
                        key={i}
                        onAnimationComplete={i === text.length - 1 ? handleTypewriterComplete : undefined}
                        className = 'm-2'
                    >
                        {el}{}
                    </motion.span>
                ))}
                </div>
                </section>
                <div className = {`text-3xl font-serif flex gap-10 mt-10 items-center ${isTextComplete ? 'opacity-100 transition-all duration-500' : 'opacity-0'}`}>
                    <section>
                        <img src = {pic1}/>
                    </section>
                    <section>
                        <section>
                            <p className = 'pt-10'> With a blend of creativity and technical expertise, I bring ideas to life through 
                            elegant <span className = 'text-orange-800 font-bold'>front end designs</span> and robust <span className = 'text-orange-800 font-bold'>
                            back-end solutions</span></p>
                        </section>
                        <section className='flex justify-center mt-5 mx-10'>
                            <div
                                className={`w-64 h-fit bg-black rounded-2xl transition-all duration-1000 ease-linear flex justify-center items-center py-5 ${isTextComplete ? 'opacity-30 w-full' : 'opacity-0'}`}
                            >
                                <div className='flex gap-10'>
                                    <section>
                                    <div className = 'flex gap-2'>
                                        <img src = 'https://sisyphusinfotech.com/assets/our-strength/cost.png' className = 'h-8 w-8' />
                                        <p className='text-3xl text-white'>Best UI/UX Design</p>
                                    </div>
                                    <hr className='h-1 bg-slate-400 mb-5' />
                                    <div className = 'flex gap-2'>
                                        <img src = 'https://sisyphusinfotech.com/assets/our-strength/cost.png' className = 'h-8 w-8' />
                                        <p className='text-3xl text-white'>Device friendly design</p>
                                    </div>
                                    <hr className='h-1 bg-slate-400 mb-5' />
                                    </section>
                                    <section>
                                    <div className = 'flex gap-2'>
                                        <img src = 'https://sisyphusinfotech.com/assets/our-strength/service.png' className = 'h-8 w-8' />
                                        <p className='text-3xl text-white'>Service Oriented</p>
                                    </div>
                                    <hr className='h-1 bg-slate-400 mb-5' />
                                    <div className = 'flex gap-2'>
                                        <img src = 'https://sisyphusinfotech.com/assets/our-strength/detail.png' className = 'h-8 w-8' />
                                        <p className='text-3xl text-white'>Detail Oriented</p>
                                    </div>
                                    <hr className='h-1 bg-slate-400 mb-5' />
                                    </section>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
                
                    
            </section>

                   
        </div>
        <section className = 'py-0 px-48 bg-amber-200'>
            <div className = 'flex justify-center text-4xl'>
                <p className = 'pb-4'> What I can do </p>
            </div>
            <HoverCard index={0}>
                <div className = 'flex gap-5 pb-8'>
                    <img src={pic2} className = 'w-28 h-28'></img>
                    <section>
                        <p className = 'text-orange-800 text-3xl pb-5'>Design what you want</p>
                        <p className = 'text-xl'>I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.</p>
                    </section>           
                </div>
            </HoverCard>
            <HoverCard index={1}>
                <div className = 'flex gap-5'>
                    <section>
                        <p className = 'text-orange-800 text-3xl pb-5'>Develop what you need</p>
                        <p className = 'text-xl'>I am a developer, so I know how to create your website to run across devices using the latest technologies available.</p>
                    </section>
                    <img src={pic3} className = 'w-28 h-28'></img>          
                </div>
            </HoverCard>
        </section>

        <section className = 'py-10 px-48 bg-amber-200'>
            <div className = 'flex justify-center text-4xl'>
                <p className = 'pb-0'> I can help </p>
            </div>

            <HoverCard index={0}>
            <div>
                <section className='flex justify-center items-center'>
                    <p className = 'text-orange-800 text-3xl pb-5'>I’m currently available for freelance work.</p>
                </section>
                <section className='flex justify-center items-center'>
                <p className = 'text-xl'>If you have a project that you want to get started, 
                think you need my help with something or just fancy saying hey, then get in touch.</p>
                </section>
            </div>
            </HoverCard>
        </section>
    </div>
    <Footer />
    </div>
  )
}

export default Homepage

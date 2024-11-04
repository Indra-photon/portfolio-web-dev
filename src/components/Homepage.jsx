/*Old code*/
import '../components/Homepage.css'
import pic2 from '../assets/pic2.svg'
import pic3 from '../assets/pic3.svg'
import { motion } from "framer-motion"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const text = "Welcome to WebWorks Gallery".split(" ");

const Homepage = () => {
    const hoverAnimation = {
        rest: { scale: 1, opacity: 1 },
        hover: { scale: 1.05, opacity: 1.1, transition: { duration: 0.3 } },
      };

  return (
    <div>
        <Navbar />
        <div className = ' bg-amber-200 w-full'>
            <div className="bg-amber-200 w-full">
                <motion.div 
                className="h-auto bg-amber-200 flex py-10 md:w-full sm:w-full" 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                <section>
                    <motion.div 
                    className={`sm:w-full text-3xl font-serif flex gap-10 items-center ${isTextComplete ? 'opacity-100 transition-all duration-500' : 'opacity-0'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isTextComplete ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    >
                    <section>
                        <motion.section 
                        className="md:w-full sm:text-left md:text-left md:px-5 sm:px-5 sm:w-full sm:flex sm:justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        >
                        <p className="pt-1">
                            With a blend of creativity and technical expertise, I bring ideas to life through
                            elegant <span className="text-orange-800 font-bold">front-end designs</span> and robust
                            <span className="text-orange-800 font-bold"> back-end solutions</span>.
                        </p>
                        </motion.section>

                        <section className="flex justify-center mt-5">
                        <motion.div
                            className={`w-full md:w-3/4 text-orange-800 lg:w-2/3 bg-[rgb(245,158,11)] rounded-2xl flex flex-col md:flex-row justify-center items-center py-5 ${isTextComplete ? 'opacity-100' : 'opacity-0'}`}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        >
                            <div className="flex md:flex-row gap-20 md:gap-10 px-5 md:px-0 sm:flex-col sm:gap-2">
                            <section className="flex flex-col gap-4 sm:flex-col">
                                <div className="flex items-center gap-2">
                                <img src="https://sisyphusinfotech.com/assets/our-strength/cost.png" className="h-8 w-8" alt="UI/UX Design" />
                                <p className="text-2xl md:text-2xl lg:text-3xl text-orange-800">Best UI/UX Design</p>
                                </div>
                                <hr className="h-1 bg-slate-400" />
                                <div className="flex items-center gap-2">
                                <img src="https://sisyphusinfotech.com/assets/our-strength/cost.png" className="h-8 w-8" alt="Device Friendly Design" />
                                <p className="text-2xl md:text-2xl lg:text-3xl text-orange-800">Device Friendly Design</p>
                                </div>
                                <hr className="h-1 bg-slate-400" />
                            </section>
                            <section className="flex flex-col gap-4 sm:flex-col">
                                <div className="flex items-center gap-2">
                                <img src="https://sisyphusinfotech.com/assets/our-strength/service.png" className="h-8 w-8" alt="Service Oriented" />
                                <p className="text-2xl md:text-2xl lg:text-3xl text-orange-800">Service Oriented</p>
                                </div>
                                <hr className="h-1 bg-slate-400" />
                                <div className="flex items-center gap-2">
                                <img src="https://sisyphusinfotech.com/assets/our-strength/detail.png" className="h-8 w-8" alt="Detail Oriented" />
                                <p className="text-2xl md:text-2xl lg:text-3xl text-orange-800">Detail Oriented</p>
                                </div>
                                <hr className="h-1 bg-slate-400" />
                            </section>
                            </div>
                        </motion.div>
                        </section>
                    </section>
                    </motion.div>
                </section>
                </motion.div>
            </div>

            <section className="bg-amber-200 py-10 md:px-10 sm:px-5 px-48">
            <motion.div
              className="flex justify-center text-4xl mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p>What I can do</p>
            </motion.div>
      
            <section className="md:flex md:justify-center gap-5">
              {/* Design what you want */}
              <motion.div
                className="hover:shadow-lg hover:shadow-amber-400 rounded-lg"
                variants={hoverAnimation}
                initial="rest"
                whileHover="hover"
              >
                <div className="flex gap-5 pb-8 md:flex md:justify-center sm:flex-col sm:w-full items-center">
                  <motion.img
                    src={pic2}
                    className="w-28 h-28"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div>
                    <p className="text-orange-800 text-3xl pb-5 text-center">Design what you want</p>
                    <p className="text-xl md:text-2xl text-center px-5">
                      I like to keep it simple. My goals are to focus on typography, content, and conveying the message that you want to send.
                    </p>
                  </div>
                </div>
              </motion.div>
      
              {/* Develop what you need */}
              <motion.div
                className="hover:shadow-lg hover:shadow-amber-400 rounded-lg"
                variants={hoverAnimation}
                initial="rest"
                whileHover="hover"
              >
                <div className="flex gap-5 pb-8 md:flex md:justify-center sm:flex-col-reverse sm:w-full items-center">
                  <div>
                    <p className="text-orange-800 text-3xl pb-5 text-center">Develop what you need</p>
                    <p className="text-xl md:text-2xl text-center px-5">
                      I am a developer, so I know how to create your website to run across devices using the latest technologies available.
                    </p>
                  </div>
                  <motion.img
                    src={pic3}
                    className="w-28 h-28"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            </section>
      
            {/* I can help section */}
            <section className="py-10">
              <motion.div
                className="flex justify-center text-4xl mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
              </motion.div>
      
              <motion.div
                className="hover:shadow-lg hover:shadow-amber-400 rounded-lg"
                variants={hoverAnimation}
                initial="rest"
                whileHover="hover"
              >
                <div className="flex flex-col items-center pb-8">
                  <p className="text-orange-800 text-3xl pb-5 text-center">I’m currently available for freelance work.</p>
                  <p className="text-xl md:text-2xl text-center px-5">
                    If you have a project that you want to get started, need my help with something, or just fancy saying hey, then get in touch.
                  </p>
                </div>
              </motion.div>
            </section>
          </section>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage

'use client'



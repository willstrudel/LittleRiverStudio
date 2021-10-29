import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { GrLinkedin, GrYoutube, GrGithub, GrInstagram, } from 'react-icons/gr';
import { IoMdCheckmark } from 'react-icons/io';


const Contact = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'gmail_template', e.target, 'user_vV2E4mjM9xhFdPV9RS0dP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

return (
    <>
        <IconContext.Provider value= {{ color: "white", size: "2em",}}>
            <div>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <motion.div className="bg-coolGray-800 h-full" 
                        initial={{
                            
                            opacity: 0,
                            scale: 0,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                        exit={{
                            opacity: 0,
                        }}>
                    <div className="bg-coolGray-700 h-full">  
                    <h2 className="bg-coolGray-700 font-dosis text-5xl lg:text-7xl xl:text-8xl text-white uppercase flex justify-center font-bold pt-40 pb-6">Thank You!
                    </h2>
                        <p className=" relative text-center text-white xs:top-28 xs:px-12 sm:top-28 md:px-32 text-xl md:text-2xl xl:text-3xl px-20 md:top-40">Your message has been sent, we will get back to you as soon as possible. -LRS
                        </p>
                            <div className=" relative xs:top-36 sm:top-36 md:top-60 lg:top-72 flex justify-center pt-20 lg:pt-8">
                                <button className="border-black border bg-indigo-600 hover:bg-green-500 rounded-full p-1 md:p-2 md:text-lg" onClick={() => setModalIsOpen(false)}><IoMdCheckmark size="2.5em" />
                                </button>
                            </div>
                            </div>
                        </motion.div>
                 </Modal>
            </div>
       

        <div className="min-h-screen justify-center grid items-center bg-gradient-to-bl from-coolGray-900 via-coolGray-600 to-trueGray-900">
            <h1 className="flex justify-center uppercase font-black text-white text-6xl mt-20 border-b-4 border-white pb-2
                lg:text-7xl 
                md:text-7xl">Contact
            </h1>
        

            <div className="border-b-4 pb-16 border-white">
                <div className="flex justify-center">
                    <form onSubmit={sendEmail}>
                        <div className="row mx-auto">

                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control border-4 border-trueGray-200 rounded w-60" placeholder=" Name" name="name"/>
                            </div>
                            <div className="col-8 form-group pt-3 mx-auto">
                                <input type="email" className="form-control border-4 border-trueGray-200 rounded w-60" placeholder=" Email" name="email"/>
                            </div>
                            <div className="col-8 form-group pt-3 mx-auto">
                                <input type="text" className="form-control border-4 border-trueGray-200 rounded w-60" placeholder=" Subject" name="subject"/>
                            </div>
                            <div className="col-8 form-group pt-3 mx-auto">
                                <textarea className="form-control border-4 border-trueGray-200 resize rounded w-72" id="" cols="30" rows="8" placeholder=" Your Message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input onClick={() => setModalIsOpen(true)} type="submit" className="uppercase font-semibold btn btn-info p-1.5 px-2.5 rounded text-white bg-sky-500" value="Submit"></input>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <div className="flex justify-center mb-8">
                    <ul className="flex space-x-12">
                    <a className=" text-black visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.linkedin.com/in/will-struder" target="_blank" rel="noopener noreferrer"><li><GrLinkedin /></li></a>
                    <a className=" text-black visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.github.com/willstrudel" target="_blank" rel="noopener noreferrer"><li><GrGithub /></li></a>
                    <a className=" text-black visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.youtube.com/channel/UCeEj5ctVxGU0cf8bDFX_KSA" target="_blank" rel="noopener noreferrer"><li><GrYoutube /></li></a>
                    <a className=" text-black visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.instagram.com/willstruder/" target="_blank" rel="noopener noreferrer"><li><GrInstagram /></li></a>
                </ul>
            </div>   
        </div>
        </IconContext.Provider>
        <footer className="w-full bottom-0 fixed inset-x-0 p-2 flex justify-center bg-coolGray-900">
                <p className="text-white xs:text-xs text-sm md:text-lg">
                    Copyright © 2021 Little River Studio LLC. Design by  
                </p> 
                 <p className="font-poiret flex text-white xs:text-xs text-sm md:text-xl pl-2">
                Will Struder
                </p> 
            </footer>
    </>
    )
}

export default Contact;
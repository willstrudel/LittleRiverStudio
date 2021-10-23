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
                    <motion.div 
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
                        }}
                        >
                            
                    <h2 className="font-dosis text-5xl flex justify-center font-bold pt-40 pb-6">Thank You!
                    </h2>
                        <p className="relative text-center xs:top-28 xs:px-12 sm:top-28 md:px-32 text-xl md:text-2xl px-20 md:top-80">Your message has been sent, we will get back to you as soon as possible. -LRS
                        </p>
                            <div className="relative xs:top-36 sm:top-36 md:top-96 flex justify-center pt-20">
                                <button className="border-black border bg-indigo-600 hover:bg-green-500 rounded-full p-1 md:p-2 md:text-lg" onClick={() => setModalIsOpen(false)}><IoMdCheckmark size="2.5em" />
                                </button>
                            </div>
                        </motion.div>
                 </Modal>
            </div>
       

        <div className="min-h-screen justify-center grid items-center bg-gradient-to-b from-amber-400 via-sky-700 to-emerald-800">
            <h1 className="flex justify-center uppercase font-black text-black text-6xl mt-20 border-b-4 border-emerald-600 pb-16
                lg:text-7xl 
                md:text-7xl">Contact
            </h1>
        

            <div className="border-b-4 pb-10 border-amber-400">
                <div className="flex justify-center">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">

                            <div className="col-8 form-group mx-auto border-t-2 pt-24">
                                <input type="text" className="form-control border-4 border-trueGray-200 rounded w-60" placeholder=" Name" name="name"/>
                            </div>
                            <div className="col-8 form-group pt-3 mx-auto">
                                <input type="email" className="form-control border-4 border-trueGray-200 rounded w-60" placeholder=" Email Address" name="email"/>
                            </div>
                            <div className="col-8 form-group pt-3 mx-auto">
                                <input type="text" className="form-control border-4 border-trueGray-200 rounded w-60" placeholder=" Subject" name="subject"/>
                            </div>
                            <div className="col-8 form-group pt-3 mx-auto">
                                <textarea className="form-control border-4 border-trueGray-200 resize rounded w-72" id="" cols="30" rows="8" placeholder=" Your Message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto border-b-2 pb-14">
                                <input onClick={() => setModalIsOpen(true)} type="submit" className="uppercase font-semibold btn btn-info p-1.5 px-2.5 rounded text-white bg-sky-500" value="Submit"></input>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <div className="flex justify-center mb-8">
                    <ul className="flex space-x-16">
                    <a className=" text-black visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.linkedin.com/in/will-struder" target="_blank" rel="noopener noreferrer"><li><GrLinkedin /></li></a>
                    <a className=" text-black visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.github.com/willstrudel" target="_blank" rel="noopener noreferrer"><li><GrGithub /></li></a>
                    <a className=" text-black visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.youtube.com/channel/UCeEj5ctVxGU0cf8bDFX_KSA" target="_blank" rel="noopener noreferrer"><li><GrYoutube /></li></a>
                    <a className=" text-black visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.instagram.com/willstruder/" target="_blank" rel="noopener noreferrer"><li><GrInstagram /></li></a>
                </ul>
            </div>   
        </div>
        </IconContext.Provider>
    </>
    )
}

export default Contact;
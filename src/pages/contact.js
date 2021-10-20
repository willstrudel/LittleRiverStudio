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
            <IconContext.Provider value= {{ color: "skyblue", size: "1.5em",}}>
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
                            
                    <h2 className="relative xs:top-28 8plus:text-4xl sm:top-28 md:top-64 md:text-5xl font-dosis text-3xl flex justify-center font-bold pt-8 pb-16">Thank You!</h2>
                    <p className="relative text-center xs:top-28 xs:px-12 sm:top-28 md:px-32 md:text-2xl px-20 md:top-80">Your message has been sent, we will get back to you as soon as possible. -LRS</p>
                    <div className="relative xs:top-36 sm:top-36 md:top-96 flex justify-center pt-20">
                        <button className="border-black border bg-gray-600 rounded-3xl p-1 md:p-2 md:text-lg" onClick={() => setModalIsOpen(false)}><IoMdCheckmark  size="2em" /></button>
                    </div>
                    </motion.div>
                </Modal>
            </div>
       

        <div className="h-screen w-screen flex justify-center items-center bg-gray-500">
            <h1 className="
                absolute top-24 underline flex object-center-top uppercase font-black
                xl:text-8xl 
                lg:text-7xl 
                md:text-7xl md:top-36
                sm:text-4xl sm:top-28
                8plus:text-4xl 8plus:top-20
                xs:text-4xl 
                text-4xl">Contact
            </h1>
        

        <div className="absolute top-52 xs:top-36 8plus:top-32 sm:top-48 md:top-96">
            <div className="relative flex justify-center container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">

                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control rounded" placeholder=" Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control rounded" placeholder=" Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control rounded" placeholder=" Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control resize rounded" id="" cols="30" rows="8" placeholder=" Your Message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input onClick={() => setModalIsOpen(true)} type="submit" className="btn btn-info p-1.5 px-2.5 rounded border-1 border bg-white border-black" value="Submit"></input>
                        </div>

                    </div>
                </form>
            </div>
        </div>

        <div className="font-dosis relative top-72 text-lg xs:top-64 sm:top-62 md:top-80">
                <ul className="inline-flex space-x-10">
                    <a className=" text-black visited:text-blue-300 App-link" href="https://www.linkedin.com/in/will-struder" target="_blank" rel="noopener noreferrer"><li><GrLinkedin /></li></a>
                    <a className=" text-black visited:text-blue-300 App-link" href="https://www.github.com/willstrudel" target="_blank" rel="noopener noreferrer"><li><GrGithub /></li></a>
                    <a className=" text-black visited:text-blue-300 App-link" href="https://www.youtube.com/channel/UCeEj5ctVxGU0cf8bDFX_KSA" target="_blank" rel="noopener noreferrer"><li><GrYoutube /></li></a>
                    <a className=" text-black visited:text-blue-300 App-link" href="https://www.instagram.com/willstruder/" target="_blank" rel="noopener noreferrer"><li><GrInstagram /></li></a>
                </ul>
            </div>   
        </div>
        </IconContext.Provider>
        


        </>
    )
}

export default Contact;
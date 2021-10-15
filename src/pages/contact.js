import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Modal from 'react-modal';


const Contact = () => {
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

        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h2>Thank You!</h2>
                <p>Modal Body</p>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>

        <div className="h-screen flex justify-center items-center bg-gray-500">
            <h1 className="
                absolute top-28 flex object-center-top uppercase font-black
                xl:text-8xl 
                lg:text-7xl 
                md:text-7xl 
                sm:text-5xl 
                xs:text-4xl
                text-5xl">Contact
            </h1>
        

        <div className="absolute top-52">
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
                            <input onClick={() => setModalIsOpen(true)} type="submit" className="btn btn-info p-1.5 px-2.5 rounded" value="Submit"></input>
                        </div>

                    </div>
                </form>
            </div>
        </div>

        <div className="font-dosis relative top-72 text-lg">
                <ul className="inline-flex space-x-4">
                    <a className="App-link" href="https://www.linkedin.com/in/will-struder" target="_blank" rel="noopener noreferrer"><li>LinkedIn</li></a>
                    <a className="App-link" href="https://www.github.com/willstrudel" target="_blank" rel="noopener noreferrer"><li>GitHub</li></a>
                    <a className="App-link" href="https://www.youtube.com/channel/UCeEj5ctVxGU0cf8bDFX_KSA" target="_blank" rel="noopener noreferrer"><li>YouTube</li></a>
                    <a className="App-link" href="https://www.instagram.com/willstruder/" target="_blank" rel="noopener noreferrer"><li>Instagram</li></a>
                </ul>
            </div>   
        </div>



        </>
    )
}

export default Contact;
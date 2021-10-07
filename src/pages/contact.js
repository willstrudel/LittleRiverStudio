import React from 'react'

const Contact = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-500">
            <h1 className="absolute flex object-center-top xl:text-8xl lg:text-6xl md:text-4xl sm:text-3xl text-2xl uppercase font-black">Contact</h1>
            <div className="relative text-center text-2xl top-52">
             <ul>
                 <li>Email</li>
                 <li>LinkedIn</li>
                 <li>GitHub</li>
                 <li>YouTube</li>
                 <li>Instagram</li>
             </ul>
            </div>            
        </div>
    )
}

export default Contact;
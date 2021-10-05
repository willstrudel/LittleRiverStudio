import React from 'react'
import Headshot from '../images/headshot.JPG'

const About = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-500">
            <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl  uppercase font-black flex relative">About Me</h1>  
            <img src={Headshot} alt="headshot" className="justify-center flex absolute items-center box-content lg:h-96 lg:w-84 p-4 border-2 rounded shadow-2xl"/>          
        </div>
    )
}

export default About;
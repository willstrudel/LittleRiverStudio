import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">Welcome</h1>
            <Link className="py-6 px-8 bg-blue-400 rounded-full text-3xl hover:bg-blue-300 transition duration-300 ease-in-out flex items-center animate-bounce">Projects</Link>
        </div>
    )
}

export default Hero;

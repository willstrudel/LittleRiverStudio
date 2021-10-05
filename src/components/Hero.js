import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="bg-gray-800 h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl uppercase font-black mb-14 text-white">Welcome</h1>
            <Link to="/projects" className="mt-12 py-5 px-8 bg-black rounded-full text-3xl hover:bg-gray-600 transition duration-300 ease-in-out flex items-center animate-bounce text-white">Projects</Link>
        </div>
    )
}

export default Hero;
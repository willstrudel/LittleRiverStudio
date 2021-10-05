import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="bg-gray-800 h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl uppercase font-black mb-14 text-white">Welcome</h1>
            <Link to="/projects" className="mt-12 py-4 px-6 bg-black rounded-full sm:text-1xl md:text-2xl lg:text-3xl hover:bg-gray-600 lg:transition lg:duration-300 lg:ease-in-out flex items-center animate-bounce text-white font-quicksand">Projects</Link>
        </div>
    )
}

export default Hero;

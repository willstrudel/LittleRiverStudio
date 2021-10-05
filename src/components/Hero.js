import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="bg-gray-700 h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl uppercase font-black mb-14 text-white">Welcome</h1>
            <Link to="/projects" className="uppercase mt-12 py-4 px-6 bg-black rounded-full sm:text-lg md:text-1xl lg:text-2xl hover:bg-gray-600 lg:transition lg:duration-300 lg:ease-in-out flex items-center animate-bounce text-white font-quicksand">Projects</Link>
        </div>
    )
}

export default Hero;

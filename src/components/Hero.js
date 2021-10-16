import React from 'react';
import { Link } from 'react-router-dom';
import River from '../images/river.jpg';

const Hero = () => {
    return (
        <div className="bg-gray-700 h-screen flex flex-col justify-center items-center">
            <h1 className="relative uppercase font-black top-20 text-white
                lg:text-8xl 
                md:text-7xl 
                sm:text-5xl sm:top-0
                xs:top-2 
                text-5xl">Welcome</h1>

            <p className="text-white font-dosis 
                xs:text-xl xs:pt-6
                sm:pt-7">to</p>

            <p className="text-white font-dosis  
                xs:text-3xl xs:p-3
                sm:p-3 sm:pb-6">Little River Studio</p>

            <img className="w-full bg-cover" src={River} alt="river-img" />
                <Link to="/contact" className="uppercase mt-12 py-4 px-6 bg-black rounded-full flex items-center animate-bounce text-white font-quicksand hover:bg-gray-600 
                sm:text-lg 
                md:text-1xl  
                lg:text-2xl 
                lg:transition lg:duration-300 lg:ease-in-out">Contact</Link>
        </div>
    )
}

export default Hero;

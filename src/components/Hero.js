import React from 'react';
import { Link } from 'react-router-dom';
import River from '../images/river.jpg';

const Hero = () => {
    return (
        <div className="min-h-screen p-4 bg-gray-600 grid grid-cols-1">
            
            <h1 className="justify-center flex uppercase font-black mt-20 text-white
                lg:text-8xl 
                md:text-7xl 
                sm:text-5xl
                text-5xl">Welcome
            </h1>

            <p className="text-white justify-center flex font-dosis 
                text-xl
                md:text-3xl
                lg:text-5xl">to
            </p>

            <p className="text-white font-dosis justify-center flex 
                text-3xl 
                md:text-4xl
                lg:text-5xl">Little River Studio
            </p>

        <div className="flex justify-center">
            <img className="w-full max-w-7xl rounded-xl" src={River} alt="river-img" />
        </div>
             <Link className="flex justify-center p-16" to="/about">
                <div className="uppercase mt-4 px-3 h-12 text-center items-center bg-black rounded-lg flex justify-center animate-bounce text-white font-quicksand hover:bg-green-700 
                text-sm md:hidden
                md:text-1xl  
                lg:text-2xl 
                transition duration-300 ease-in-out">About Me
                </div>
            </Link>
        </div>
    )
}

export default Hero;

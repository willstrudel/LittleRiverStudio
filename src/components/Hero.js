import React from 'react';
import { Link } from 'react-router-dom';
import River from '../images/river.jpg';

const Hero = () => {
    return (
        <div className="min-h-screen p-4 bg-gray-600 grid grid-cols-1">
            <h1 className="flex justify-center text-5xl uppercase font-black mt-20 text-white
                lg:text-8xl 
                md:text-7xl 
                sm:text-5xl">Welcome
            </h1>
            <p className="flex justify-center text-xl text-white font-dosis 
                md:text-3xl
                lg:text-5xl">to
            </p>
            <p className="flex justify-center text-3xl text-white font-dosis 
                md:text-4xl
                lg:text-5xl">Little River Studio
            </p>
        <div className="flex justify-center">
            <img className="w-full max-w-7xl rounded-xl" src={River} alt="river-img" />
        </div>
             <Link className="flex justify-center p-12" to="/about">
                <div className="flex justify-center uppercase px-4 h-12 text-sm text-center items-center bg-black rounded-lg animate-bounce text-white font-quicksand hover:bg-green-700 transition duration-300 ease-in-out 
                md:hidden
                md:text-1xl  
                lg:text-2xl">About Me
                </div>
            </Link>
        </div>
    )
}

export default Hero;

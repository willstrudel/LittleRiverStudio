import React from 'react';
import { Link } from 'react-router-dom';
import River from '../images/river.jpg';

const Hero = () => {
    return (
        <div className="min-h-screen p-12 space-y-6 md:space-y-8 bg-gradient-to-b from-sky-300 via-emerald-700 to-trueGray-600 grid grid-cols-1">
            <h1 className="flex justify-center text-5xl uppercase font-black mt-6 text-black
                lg:text-7xl 
                md:text-6xl">Welcome
            </h1>
            <p className="flex justify-center text-lg text-black font-dosis 
                md:text-xl
                lg:text-3xl">to
            </p>
            <p className="flex justify-center text-4xl text-black font-dosis underline
                md:text-5xl
                lg:text-6xl">Little River Studio
            </p>
        <div className="flex justify-center">
            <img className="w-full xl:max-w-7xl lg:h-2/3 shadow-3xl rounded-xl md:mb-32 lg:mb-20 xl:mb-10" src={River} alt="river-img" />
        </div>
             <Link className="flex justify-center p-20" to="/about">
                <div className="flex justify-center uppercase px-4 h-12 text-sm text-center items-center bg-black rounded-lg animate-bounce text-white font-quicksand hover:bg-trueGray-800 transition duration-300 ease-in-out 
                md:hidden
                md:text-1xl  
                lg:text-2xl">About Me
                </div>
            </Link>
        </div>
    )
}

export default Hero;

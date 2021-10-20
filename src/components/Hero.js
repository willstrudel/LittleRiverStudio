import React from 'react';
import { Link } from 'react-router-dom';
import River from '../images/river.jpg';

const Hero = () => {
    return (
        <div className="min-h-screen p-8 bg-gray-600 sm:grid sm:grid-cols-1 justify-center">
            <h1 className="justify-center flex uppercase font-black mt-14 text-white
                lg:text-8xl 
                md:text-7xl 
                sm:text-5xl
                text-5xl">Welcome</h1>

            <p className="text-white justify-center flex font-dosis 
                text-xl mt-6
                md:text-3xl
                lg:text-5xl">to</p>

            <p className="text-white font-dosis justify-center flex 
                text-3xl 
                md:text-4xl m-3 mb-6
                lg:text-5xl">Little River Studio</p>

            <img className=" bg-cover rounded-xl" src={River} alt="river-img" />
                <Link className="flex justify-center" to="/about">
                <div className="uppercase mt-12 px-4 py-4 text-center items-center bg-black rounded-full flex justify-center animate-bounce text-white font-quicksand hover:bg-blue-500 
                text-sm sm:hidden
                md:text-1xl  
                lg:text-2xl 
                transition duration-300 ease-in-out">About Me</div>
                </Link>
        </div>
    )
}

export default Hero;

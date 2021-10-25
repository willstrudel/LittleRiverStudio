import React from 'react';
import { Link } from 'react-router-dom';
import Clubhouse from '../images/clubhouse.jpg';

const Hero = () => {
    return (
        <>
        <div className="min-h-screen p-12 space-y-6 md:space-y-8 bg-gradient-to-b from-trueGray-900 via-teal-900 to-trueGray-900 grid grid-cols-1">
            <h1 className="flex justify-center text-5xl uppercase font-black mt-6 text-warmGray-300
                lg:text-7xl 
                md:text-6xl">Welcome
            </h1>
            <p className="flex justify-center text-lg text-warmGray-300 font-dosis 
                md:text-xl
                lg:text-3xl">to
            </p>
            <p className="flex justify-center text-4xl text-warmGray-300 font-dosis underline
                md:text-5xl
                lg:text-6xl">Little River Studio
            </p>
            <div className="flex justify-center">
                <img className="rounded-xl" src={Clubhouse} alt="clubhouse" />
            </div>
             <Link className="flex justify-center p-20" to="/about">
                <div className="flex justify-center uppercase px-4 h-12 text-sm text-center items-center bg-black rounded-lg animate-bounce text-white font-quicksand hover:bg-trueGray-800 transition duration-300 ease-in-out 
                md:hidden
                md:text-1xl  
                lg:text-2xl">About Me
                </div>
            </Link>
        </div>

        {/* <div class="w-full relative mt-32">
  <div class="absolute w-full h-full opacity-70 top-0 left-0 z-10 bg-gradient-to-r from-red-800 via-amber-500"></div>
  <div class="absolute z-20 flex flex-col items-left w-full justify-center h-full pl-10">
    <div class="text-white font-bold text-6xl">Above the Clouds</div>
    <div class="text-white text-2xl mt-2 font-medium">
      Experience like never before<br />
      Hot Air Ballon for just 99 USD.
    </div>
  </div>
  <img src={Clubhouse} alt="clubhouse" />
</div> */}
      </>
    )
}

export default Hero;


import React from 'react';
import { Link } from 'react-router-dom';
import Clubhouse from '../images/clubhouse.jpg';

const Hero = () => {
    return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-coolGray-900 via-coolGray-900 to-coolGray-600">
        <div className="justify-center md:space-y-8 grid grid-cols-1">
           

            <div className="grid w-full justify-center p-4 xl:p-0">
                <img className="rounded-sm" src={Clubhouse} alt="clubhouse" />
            </div>
            
            <div className="absolute grid justify-center left-1/2 right-1/2">
                <div className="grid justify-center">
                    <h1 className="text-5xl uppercase font-black mt-28 text-warmGray-300
                        lg:text-7xl 
                        md:text-6xl">Welcome
                    </h1>
                </div>
                <div className="grid justify-center p-4">
                        <p className="text-lg grid justify-center text-warmGray-300 font-dosis 
                            md:text-xl
                            lg:text-3xl">to
                        </p>
                    <div className="grid justify-center pt-4">
                        <p className="text-3xl text-warmGray-300 font-dosis 
                        md:text-4xl
                        lg:text-5xl">Little River Studio
                        </p>
                    </div>
                </div>
            </div>
            <p className="grid justify-center p-8 text-center text-white">
                I am proud to present the newly revised website for Little River Studio!  
            </p>
            <Link className="flex justify-center p-20" to="/about">
                <div className="flex justify-center uppercase px-4 h-12 text-sm text-center items-center bg-black rounded-lg animate-bounce text-white font-quicksand hover:bg-trueGray-800 transition duration-300 ease-in-out 
                md:hidden
                md:text-1xl  
                lg:text-2xl">About Me
                </div>
            </Link>

        </div>
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


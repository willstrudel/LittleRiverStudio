import React from 'react';
import { Link } from 'react-router-dom';
import Clubhouse from '../images/clubhouse.jpg';

const Hero = () => {
    return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-coolGray-900 via-coolGray-900 to-coolGray-600">
        <div className="justify-center lg:pt-20 md:space-y-8 grid grid-cols-1 lg:grid-cols-1">
           

            <div className="grid justify-center bg-cover">
                <img className="rounded-sm shadow-3xl" src={Clubhouse} alt="clubhouse" />
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
                        lg:text-5xl">Little River Studio!
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex mt-12 justify-center">
                <p className="w-3/4 md:w-2/3 xl:w-1/3 text-center text-white text-xl md:text-2xl">
                I am proud to present the newly revised website for Little River Studio! Here at LRS, we combine passion for web development and photography to bring you a wide variety of services. Below are a few examples, make sure to check out the Contact page if you have any questions!
                </p>
            </div>
            <div className="grid justify-center text-center pt-12 pb-20">
                <ol className="text-white grid justify-center text-lg p-4 border-t-4 border-b-4">
                    <li>- Web Design</li>
                    <li>- Headshots/Portraits</li>
                    <li>- Videography</li>
                    <li>- Social Media Marketing</li>
                </ol>
            </div>

            <Link className="flex justify-center mt-20" to="/about">
                <div className="flex justify-center uppercase px-4 h-12 text-sm text-center items-center bg-black rounded-lg animate-bounce text-white font-quicksand hover:bg-trueGray-800 transition duration-300 ease-in-out 
                md:hidden
                md:text-1xl  
                lg:text-2xl">About Me
                </div>
            </Link>

        </div>
    </div>
    <footer className="w-full bottom-0 fixed p-2 flex justify-center bg-coolGray-900">
                <p className="text-white text-sm md:text-lg">
                    Copyright © 2021 Little River Studio. Designed by  
                </p> 
                 <p className="font-poiret flex text-white text-sm md:text-xl pl-2">
                Will Struder
                </p> 
            </footer>
      </>
    )
}

export default Hero;


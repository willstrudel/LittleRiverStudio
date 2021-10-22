import React from 'react';
import { Link } from 'react-router-dom';
import enCapsulate from '../images/enCapsulate.jpg';
import YTtacos from '../images/YTtacos.jpg';
import Vans from '../images/vans.jpg';

const Projects = () => {
    return (
        <div className="min-h-screen grid justify-center items-center bg-indigo-900">
             
            <div className="flex justify-center sm:mt-0 md:mt-10 lg:mt-20 mt-20 border-b-2 border-white xl:mb-2 sm:border-none">
                <h1 className="xl:mt-20 mb-8 flex justify-center uppercase font-black text-white text-6xl shadow-2xl md:text-7xl lg:text-7xl">Projects</h1>
            </div>


            <div className="m-20 grid sm:gap-x-6 gap-7 sm:grid-cols-3 lg:grid-cols-3 grid-rows-1 sm:grid-rows-2 sm:grid-flow-col">

                <img className="rounded-xl shadow-xl" src={YTtacos} alt="Taco video" />
                <div className="flex items-center justify-center text-white hover:scale-125 hover:-translate-y-2 transform-gpu uppercase font-black text-2xl md:text-3xl lg:text-4xl">
                    <Link className="flex justify-center" to="/videos">
                        <p>Videos</p>
                    </Link> 
                </div>
                <img className="rounded-xl shadow-xl" src={Vans} alt="Vans shoes" />
                <div className="flex items-center justify-center text-white hover:scale-125 hover:-translate-y-2 transform-gpu uppercase font-black text-2xl md:text-3xl lg:text-4xl">
                    <Link className="flex justify-center" to="/photography">
                        <p>Photography</p>
                    </Link> 
                </div>
                <img className="rounded-xl shadow-xl" src={enCapsulate} alt="enCapsulate" />
                <div className="flex items-center justify-center text-white hover:scale-125 hover:-translate-y-2 transform-gpu uppercase font-black text-2xl md:text-3xl lg:text-4xl">
                    <Link className="flex justify-center" to="/coding"> 
                        <p>Coding</p>
                    </Link> 
                </div>

            </div>          
        </div>
    )
}

export default Projects;


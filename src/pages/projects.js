import React from 'react';
import { Link } from 'react-router-dom';
import enCapsulate from '../images/enCapsulate.jpg';
import YTtacos from '../images/YTtacos.jpg';
import Vans from '../images/vans.jpg';

const Projects = () => {
    return (
        <div className="min-h-screen grid justify-center items-center bg-gradient-to-b from-sky-300 via-emerald-700 to-trueGray-600">
             
            <div className="flex justify-center sm:mt-20 md:mt-10 lg:mt-20 mt-20 border-b-2 border-black xl:mb-10 lg:border-none">
                <h1 className="md:mt-10 mb-8 lg:mb-0 flex justify-center uppercase font-black text-black text-6xl md:text-7xl lg:text-7xl">Projects</h1>
            </div>


            <div className="items-center m-14 md:m-12 grid grid-rows-1 gap-y-10 sm:gap-y-8 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 xl:gap-x-16 sm:grid-rows-1 lg:grid-rows-2 lg:grid-flow-col lg:grid-cols-3">

                <img className="rounded-xl shadow-2xl" src={YTtacos} alt="Taco video" />
                <div className="flex items-center justify-center">
                    <Link className="flex justify-center" to="/videos">
                        <p className="text-black uppercase font-black text-2xl md:text-3xl lg:text-4xl hover:scale-125 hover:-translate-y-2 transform-gpu">Videos</p>
                    </Link> 
                </div>
                <img className="rounded-xl shadow-2xl" src={Vans} alt="Vans shoes" />
                <div className="flex items-center justify-center">
                    <Link className="flex justify-center" to="/photography">
                        <p className="text-black uppercase font-black text-2xl md:text-3xl lg:text-4xl hover:scale-125 hover:-translate-y-2 transform-gpu">Photography</p>
                    </Link> 
                </div>
                <img className="rounded-xl shadow-2xl" src={enCapsulate} alt="enCapsulate" />
                <div className="flex items-center justify-center">
                    <Link className="flex justify-center" to="/coding"> 
                        <p className="text-black uppercase font-black text-2xl md:text-3xl lg:text-4xl hover:scale-125 hover:-translate-y-2 transform-gpu">Coding</p>
                    </Link> 
                </div>

            </div>          
        </div>
    )
}

export default Projects;


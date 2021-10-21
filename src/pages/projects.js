import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="min-h-screen grid justify-center items-center bg-indigo-900 ">
               <div className="flex justify-center">
                    <h1 className="flex justify-center uppercase font-black text-white text-6xl shadow-2xl
                lg:text-7xl 
                md:text-7xl">Projects</h1>
                </div>
            <div className=" justify-center grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
             
                        
                <div className="flex items-center justify-center text-white hover:scale-125 hover:-translate-y-2 transform-gpu uppercase font-black text-2xl lg:text-4xl">
                    <Link className="flex justify-center" to="/videos">
                        <p>Videos</p>
                    </Link> 
                </div>
                <div className="flex items-center justify-center text-white hover:scale-125 hover:-translate-y-2 transform-gpu uppercase font-black text-2xl lg:text-4xl">
                    <Link className="flex justify-center" to="/photography">
                        <p>Photography</p>
                    </Link> 
                </div>
                <div className="flex items-center justify-center text-white hover:scale-125 hover:-translate-y-2 transform-gpu uppercase font-black text-2xl lg:text-4xl">
                    <Link className="flex justify-center" to="/coding">
                        <p>Coding</p>
                    </Link> 
                </div>
            </div>          
        </div>
    )
}

export default Projects;
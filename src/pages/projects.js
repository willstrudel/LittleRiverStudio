import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="min-h-screen justify-center items-center bg-indigo-900 grid grid-col">
            <div className="flex justify-center">
                <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-6xl uppercase text-white font-black">Projects</h1>
            </div>

            <div className="bg-gray-300 lg:grid lg:grid-cols-3 lg:space-x-6 justify-center">
                
                    <div className="bg-green-300 flex justify-center uppercase text-2xl lg:text-4xl">
                        <Link className="flex justify-center" to="/videos">
                            <p>Videos</p>
                        </Link> 
                    </div>
                    <div className="bg-red-300 flex justify-center uppercase text-2xl lg:text-4xl">
                        <Link className="flex justify-center" to="/photography">
                            <p>Photography</p>
                        </Link> 
                    </div>
                    <div className="bg-yellow-300 flex justify-center uppercase text-2xl lg:text-4xl">
                        <Link className="flex justify-center" to="/coding">
                            <p>Coding</p>
                        </Link> 
                    </div>
            </div>          
        </div>
    )
}

export default Projects;
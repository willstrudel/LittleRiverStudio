import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center h-14 bg-black text-white fixed w-full shadow-md text-lg font-quicksand" role="navigation">
            <Link to="/" className="pl-8">Will Struder</Link>
                <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                    <svg className="w-6 h-6" 
                    fill="none"
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
                <div className="pr-8 md:block hidden text-sm">
                    <Link className="p-4 lg:hover:bg-gray-600 rounded lg:transition lg:duration-200 lg:ease-in-out" to="/">Home</Link>
                    <Link className="p-4 lg:hover:bg-gray-600 rounded lg:transition lg:duration-200 lg:ease-in-out" to="/projects">Projects</Link>
                    <Link className="p-4 lg:hover:bg-gray-600 rounded lg:transition lg:duration-200 lg:ease-in-out" to="/about">About</Link>
                    <Link className="p-4 lg:hover:bg-gray-600 rounded lg:transition lg:duration-200 lg:ease-in-out" to="/contact">Contact</Link>
                </div>
        </nav>
    )
}

export default Navbar;

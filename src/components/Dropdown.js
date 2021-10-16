import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className= {isOpen ? "grid grid-rows-4 text-center divide-y divide-white divide-opacity-25 items-center bg-black text-white" : "hidden"} onClick={toggle}>
        <Link className="p-4 hover:bg-gray-600 rounded transition duration-200 ease-in-out" to="/projects">Projects</Link>
        <Link className="p-4 hover:bg-gray-600 rounded transition duration-200 ease-in-out" to="/about">About</Link>
        <Link className="p-4 hover:bg-gray-600 rounded transition duration-200 ease-in-out" to="/contact">Contact</Link>
    </div>
    )
}

export default Dropdown;

import React from 'react'
import Headshot from '../images/headshot.JPG'

const About = () => {
    return (
        <div className="h-screen lg:grid bg-gray-500">
            <div className="relative h-64 w-26">
                <h1 className="absolute flex xl:left-56 xl:top-28 lg:top-16 lg:left-56 md:left-56 md:top-16 sm:left-56 sm:top-16  top-16 text-center  inset-x-0 inset-y-4 xl:text-8xl md:text-7xl sm:text-6xl text-4xl uppercase font-black">About Me</h1>  
            </div>
            <p className="relative font-quicksand md:inset-x-64 text-center text-xl lg:text-2xl w-96">Hey, my name is Will Struder. I am a recent graduate of the Georgia Tech Full-Stack Coding Bootcamp. My strengths lie in Front End design and architecture. When I'm not building React websites and finding new challenges in tech, I shoot videos for local businesses to increase exposure. My personal hobbies include playing music, cooking, and hanging out with my dog. </p>
                <img className="absolute inset-y-36 xl:right-12 sm:h-3/4 w-auto rounded-2xl border-white border-2 shadow-2xl p-2" src={Headshot} alt="headshot" />          
            
        </div>
    )
}

export default About;

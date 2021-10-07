import React from 'react'
import Headshot from '../images/headshot.JPG'

const About = () => {
    return (
        <div className="xs:h-screen xs:w-screen bg-gray-500 grid grid-flow ">
            <div>
                <h1 className="
                    relative 
                    grid underline left-0 top-20 items-center justify-center text-4xl uppercase font-black
                    xs:-left-1
                    sm:left-40 sm:top-24 sm:text-6xl
                    md:left-56 md:top-24 md:text-7xl
                    lg:top-24 lg:left-56
                    xl:w-96 xl:left-56 xl:top-28 xl:text-8xl"
                        >About Me</h1>  
            </div>
                <p className="
                absolute grid
                left-12 bottom-16 font-quicksand w-96 text-black text-center text-lg
                xs:h-60 xs:w-72 xs:text-base xs:break-words xs:bottom-24 xs:left-10
                sm:left-36
                md:inset-x-64  
                lg:text-2xl"
                >Hey, my name is Will Struder. I am a recent graduate of the Georgia Tech Full-Stack Coding Bootcamp. My strengths lie in Front End design and architecture. When I'm not building React websites and finding new challenges in tech, I shoot videos for local businesses to increase exposure. My personal hobbies include playing music, cooking, and hanging out with my dog.
                </p>
                    <img className="
                    relative grid
                    h-80 inset-y-56 inset-x-14 w-auto rounded-2xl border-white border-2 shadow-2xl p-2
                    xs:h-56 xs:-top-36 xs:left-14
                    sm:flex sm:absolute sm:h-1/2 sm:left-12 sm:right-36 
                    md:flex md:absolute 
                    lg:flex lg:right-96 
                    xl:inset-y-56 xl:inset-x-96" 
                    src={Headshot} 
                    alt="headshot" />          
             </div>
    )
}

export default About;

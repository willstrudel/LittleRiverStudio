import React from 'react'
import ReactModal from 'react-modal'
import Headshot from '../images/headshot.JPG'

ReactModal.setAppElement('#root');

const About = () => {
    return (
        <>
            <main className="min-h-screen p-8 bg-gray-400 sm:grid sm:grid-cols-2 justify-center">
                
                <div className="justify-center xl:justify-start pt-16 lg:mt-0 lg:pt-10">
                    <h1 className="justify-center mb-10 flex text-5xl md:text-7xl uppercase font-black">About Me</h1>
                        <div className="flex justify">
                        <p className="font-quicksand text-black text-center text-sm flex font-bold
                            mb-10 flex-col  
                            md:text-xl sm:mt-0 sm:mb-0 justify-center
                            lg:text-2xl
                            xl:justify-start">
                         Hey there, my name is Will Struder. I am a recent graduate of the Georgia Tech Full-Stack Coding Bootcamp, specializing in Front End design and site architecture using Tailwind CSS and React. When I'm not building projects and finding new challenges in tech, I shoot videos for local businesses to increase brand awareness. My personal hobbies include playing music, cooking, and hanging out with my dog.
                        </p>
                        </div> 
                       
                </div>

                <div className="flex">
                    <div className="flex flex-col justify-center"> 
                        <img className="rounded-xl border-gray-300 border-4 shadow-2xl" src={Headshot} alt="headshot" />
                    </div> 
                </div>     

            </main>
        </>
    )
}

export default About;

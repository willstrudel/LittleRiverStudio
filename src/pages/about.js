import React from 'react'
import ReactModal from 'react-modal'
import Headshot from '../images/headshot.JPG'

ReactModal.setAppElement('#root');

const About = () => {
    return (
        <>
            <main className="min-h-screen p-10 bg-gray-200 md:flex sm:justify-center">
                
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:justify-center">

                <div className="flex-col flex justify-center xl:justify-start pt-10 lg:pt-14">
                    <h1 className="justify-center xl:justify-start flex sm:pb-16 text-5xl md:text-7xl md:pb-28 uppercase font-black">About Me
                    </h1>
                        <p className="h-36 pt-20 pb-64 sm:pb-32 flex sm:flex-col justify-center sm:justify-center xl:justify-start font-quicksand text-black text-center text-lg md:text-xl lg:text-2xl font-bold">
                            Hey there, my name is Will Struder. I am a recent graduate of the Georgia Tech Full-Stack Coding Bootcamp, specializing in Front End design and site architecture using Tailwind CSS and React. When I'm not building projects and finding new challenges in tech, I shoot videos for local businesses to increase brand awareness. My personal hobbies include playing music, cooking, and hanging out with my dog.
                        </p> 
                </div>
                
                <div className="sm:flex sm:flex-col sm:justify-center lg:p-24"> 
                    <img className="rounded-md border-yellow-50 border-2 shadow-2xl p-2" src={Headshot} alt="headshot" />
                </div>

                
                
                  
                           
            </div> 

            </main>
        </>
    )
}

export default About;

import React from 'react'
import ReactModal from 'react-modal'
import Headshot from '../images/headshot.JPG'

ReactModal.setAppElement('#root');

const About = () => {
    return (
        <>
            <main className="min-h-screen p-10 bg-gray-200 md:flex md:justify-center">
                
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:justify-center">

                <div className="flex-col flex justify-center lg:justify-start lg:pt-14">
                    <h1 className="justify-center md:justify-start flex pt-12 text-5xl md:text-7xl uppercase font-black">About Me</h1>
                    <p className="md:h-96 h-36 pt-20 flex md:flex-col justify-center md:justify-end font-quicksand text-black text-center text-lg md:text-xl lg:text-2xl font-bold">
                        Hey there, my name is Will Struder. I am a recent graduate of the Georgia Tech Full-Stack Coding Bootcamp, specializing in Front End design and site architecture using Tailwind CSS and React. When I'm not building projects and finding new challenges in tech, I shoot videos for local businesses to increase brand awareness. My personal hobbies include playing music, cooking, and hanging out with my dog.
                    </p> 
                </div>
                
                <div className="md:flex md:flex-col md:justify-center pt-48 lg:p-24"> 
                    <img className="rounded-md border-yellow-50 border-2 shadow-2xl p-2" src={Headshot} alt="headshot" />
                </div>

                
                
                  
                           
            </div> 

            </main>
        </>
    )
}

export default About;

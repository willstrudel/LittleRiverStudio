import React from 'react'
import ReactModal from 'react-modal'
import Headshot from '../images/headshot.JPG'

ReactModal.setAppElement('#root');

const About = () => {
    return (
        <>
            <main className="h-screen w-screen p-10 justify-center bg-gray-200">
                
            <div className="space-y-10 md:grid md:grid-cols-2 ">

                <div className="flex md:flex-col justify-center pt-12 text-5xl md:text-7xl uppercase font-black">
                    <h1>About Me</h1> 
                </div>
                
                <div className="flex justify-center md:flex-col"> 
                    <img className="rounded-md border-yellow-50 border-2 shadow-2xl p-2" src={Headshot} alt="headshot" />
                </div>

                <div className=" flex justify-center md:flex-col">
                    <p className="w-96 font-quicksand text-black text-center text-lg font-bold">
                        Hey there, my name is Will Struder. I am a recent graduate of the Georgia Tech Full-Stack Coding Bootcamp, specializing in Front End design and site architecture using Tailwind CSS and React. When I'm not building projects and finding new challenges in tech, I shoot videos for local businesses to increase brand awareness. My personal hobbies include playing music, cooking, and hanging out with my dog.
                    </p>
                </div>   
                           
            </div> 

            </main>
        </>
    )
}

export default About;

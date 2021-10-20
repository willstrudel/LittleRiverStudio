import React from 'react'
import ReactModal from 'react-modal'
import Headshot from '../images/headshot.JPG'

ReactModal.setAppElement('#root');

const About = () => {
    return (
        <>
            <main className="min-h-screen p-10 bg-gray-200 md:flex justify-center">
                
            

                <div className="bg-red-300 md:pr-12 md:grid md:grid-cols-1 justify-center xl:justify-start mt-10 lg:mt-0 lg:pt-10">
                    <h1 className="justify-center xl:justify-center flex text-5xl md:text-7xl uppercase font-black">About Me
                    </h1>
                        <p className="bg-blue-300 mt-12 mb-10 font-quicksand text-black text-center text-lg flex font-bold
                        sm:mb-10 sm:flex-col  
                        md:text-xl md:mt-0 md:mb-0
                        lg:text-2xl
                        xl:justify-start">
                            Hey there, my name is Will Struder. I am a recent graduate of the Georgia Tech Full-Stack Coding Bootcamp, specializing in Front End design and site architecture using Tailwind CSS and React. When I'm not building projects and finding new challenges in tech, I shoot videos for local businesses to increase brand awareness. My personal hobbies include playing music, cooking, and hanging out with my dog.
                        </p> 
                </div>
                
                <div className="bg-yellow-300 md:flex md:flex-col md:justify-center"> 
                    <img className="rounded-md border-yellow-50 border-2 shadow-2xl p-2" src={Headshot} alt="headshot" />
                </div>

                
                
                  
                           
        

            </main>
        </>
    )
}

export default About;

import React from 'react'
import ReactModal from 'react-modal'
import Headshot from '../images/headshot.JPG'

ReactModal.setAppElement('#root');

const About = () => {
    return (
        <>
            <main className="min-h-screen p-8 bg-gray-300 grid sm:grid-cols-2 justify-center items-center">
                
                <div className="gap-24 grid justify-center mt-14">
                    <h1 className="justify-center flex text-5xl md:text-7xl uppercase font-black">About Me
                    </h1>
                        <div className="grid">
                            <p className="font-quicksand text-black text-center text-sm font-bold
                                flex-col leading-loose
                                sm:text-lg  
                                md:text-xl
                                lg:text-2xl lg:leading-8
                                xl:leading-10">
                            Hey there, my name is Will Struder. I am a recent graduate of the Georgia Tech Full-Stack Coding Bootcamp, specializing in Front End design and site architecture using Tailwind CSS and React. When I'm not building projects and finding new challenges in tech, I shoot videos for local businesses to increase brand awareness. My personal hobbies include playing music, cooking, and hanging out with my dog.
                            </p>
                        </div>     
                </div>
                <div className="p-12">
                    <div className="flex flex-col justify-center"> 
                        <img className="rounded-xl border-indigo-500 border-4 shadow-3xl" src={Headshot} alt="headshot" />
                    </div> 
                </div>     

            </main>
        </>
    )
}

export default About;

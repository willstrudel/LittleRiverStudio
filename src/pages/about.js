import React from 'react'
import ReactModal from 'react-modal'
import Headshot from '../images/headshot.JPG'

ReactModal.setAppElement('#root');

const About = () => {
    return (
            <>
            <main className="px-12 h-screen w-screen bg-gray-500 ">

                <div className="flex flex-wrap justify-center relative">
                    <div className="top-32 absolute underline text-4xl uppercase font-black">
                        <h1>About Me</h1> 
                    </div>

                    <div className="relative flex justify-center">
                        
                    <img className="absolute top-60 max-w-lg w-60 h-52 rounded-sm border-white border-2 shadow-2xl p-2" src={Headshot} alt="headshot" />
                       
                    </div>
                </div>
            </main>
            
            <div className="relative flex flex-wrap justify-center">
                <p className="absolute bottom-14 w-72 font-quicksand text-black text-center text-md">Hey, my name is Will Struder. I am a recent graduate of the Georgia Tech Full-Stack Coding Bootcamp. My strengths lie in Front End design and site architecture. When I'm not building React websites and finding new challenges in tech, I shoot videos for local businesses to increase brand awareness. My personal hobbies include playing music, cooking, and hanging out with my dog.
                </p>
            </div>
            </>
    )
}

export default About;

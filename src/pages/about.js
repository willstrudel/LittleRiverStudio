import React from 'react'
import ReactModal from 'react-modal'
import Headshot from '../images/headshot.JPG'

ReactModal.setAppElement('#root');

const About = () => {
    return (
        <>
            <main className="h-screen w-screen flex flex-col items-center justify-center bg-gray-500
             md:flex-row-reverse md:justify-evenly">
                
                <div className="pt-12 flex justify-center order-2 md:order-1"> 
                        <img className="h-auto w-72 rounded-md border-white border-2 shadow-2xl p-2" src={Headshot} alt="headshot" />
                    </div>

                    <div className="flex p-2 underline text-4xl uppercase font-black
                     md:self-start md:order-1 md:pt-36">
                            <h1>About Me</h1> 
                    </div>

                    <div className="flex pt-12 order-2 md:order-1">
                        <p className="w-80 font-quicksand text-black text-center text-md"
                        >Hey, my name is Will Struder. I am a recent graduate of the Georgia Tech Full-Stack Coding Bootcamp. My strengths are Front End design and site architecture. When I'm not building React websites and finding new challenges in tech, I shoot videos for local businesses to increase brand awareness. My personal hobbies include playing music, cooking, and hanging out with my dog.</p>
                    </div>

             

                
              
            </main>
        </>
    )
}

export default About;

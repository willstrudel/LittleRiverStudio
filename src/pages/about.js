import React from 'react'
import ReactModal from 'react-modal'
import Headshot from '../images/headshot.JPG'

ReactModal.setAppElement('#root');

const About = () => {
    return (
        <>
            <main className="min-h-screen p-8 bg-gradient-to-bl from-coolGray-900 via-coolGray-600 to-coolGray-900 grid lg:grid-cols-2 justify-center items-center">
                
                <section className="lg:gap-24 gap-12 grid justify-center mt-14">
                    <h1 className="justify-center flex text-5xl md:text-7xl uppercase font-black text-white">About Me
                    </h1>
                        <div className="grid">
                            <p className="font-quicksand text-white text-center text-sm
                                flex-col leading-loose
                                sm:text-lg sm:pr-8
                                md:text-xl md:pr-12 pb-8 
                                lg:text-2xl lg:leading-8
                                xl:leading-10">
                            Hey there, my name is Will Struder. I am a recent graduate of the Georgia Tech Full-Stack Coding Bootcamp, specializing in Front End design and site architecture using Tailwind CSS and React. When I'm not building projects and finding new challenges, I shoot videos for local businesses to generate brand awareness. My goal was to create this website using the knowledge and experience I gained for the purpose of starting a business, combining my passion for web development and photography.
                            </p>
                        </div>     
                </section>
                <div className=" flex justify-center p-8 sm:p-12 md:p-4 lg:p-6 xl:p-10 lg:mb-0 mb-14 xl:mt-12">
                    <div className="flex justify-center"> 
                        <img className=" rounded-full shadow-3xl" src={Headshot} alt="headshot" />
                    </div> 
                </div>     

            </main>
            <footer className="w-full bottom-0 fixed inset-x-0 p-2 flex justify-center bg-coolGray-900">
                <p className="text-white xs:text-xs text-sm md:text-lg">
                    Copyright © 2021 Little River Studio LLC. Design by  
                </p> 
                 <p className="font-poiret flex text-white xs:text-xs text-sm md:text-xl pl-2">
                Will Struder
                </p> 
            </footer>
        </>
    )
}

export default About;

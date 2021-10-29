import React, { useEffect, useState } from 'react';



const Hero = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <>
        <main className="relative grid bg-coolGray-800 justify-center h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat bg-river-img" style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
            <section className="justify-center lg:pt-96 grid grid-cols-1">
                <div className="lg:align-top lg:items-center lg:flex grid justify-center pt-28 lg:pt-36">
                    <h1 className="text-5xl uppercase font-black text-warmGray-300 lg:text-7xl md:text-6xl">Welcome</h1>
                    <div className="grid lg:pl-8 lg:pr-8 lg:flex text-center justify-center">
                        <p className="text-lg text-warmGray-300 font-dosis md:text-xl lg:text-3xl">to</p>
                    </div>
                    <div className="grid lg:flex justify-center">
                        <p className="text-3xl text-warmGray-300 font-dosis md:text-4xl lg:text-5xl">Little River Studio!</p>
                    </div>     
                </div>
                    
                <div className="h-0 flex flex-col pt-96"></div>
        
                <section className="bg-coolGray-800">
                    <div className="flex lg:mt-28 mt-12 justify-center">
                        <p className="w-3/4 xl:w-2/3 2xl:w-1/3 leading-relaxed md:leading-relaxed text-center text-white text-xl md:text-2xl">
                            I am proud to present the newly revised website for Little River Studio! Here at LRS, we combine passion for web development and photography to bring you a wide variety of services. Below are a few examples, make sure to check out the Contact page if you have any questions!
                        </p>
                    </div>
                    <div className="grid justify-center text-center pt-12 mb-20">
                        <ol className="text-white grid justify-center leading-relaxed text-lg md:text-xl p-4 border-t-4 border-b-4">
                            <li>- Web Design</li>
                            <li>- Headshots/Portraits</li>
                            <li>- Videography</li>
                            <li>- Social Media Marketing</li>
                        </ol>
                    </div>
                </section>
            </section>
        </main>

        <footer className="flex-grow bottom-0 fixed inset-x-0 p-1 flex justify-center bg-coolGray-900">
            <p className="text-white text-sm xs:text-xs md:text-lg">
                Copyright © 2021 Little River Studio LLC. Design by  
            </p> 
            <p className="font-poiret flex text-white xs:text-xs text-sm md:text-xl pl-2">
                Will Struder
            </p> 
        </footer>
</>
    )
}

export default Hero;


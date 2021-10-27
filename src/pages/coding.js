import React from 'react';
import Carousel from 'react-elastic-carousel';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
  ];

const Coding = () => {
    return (
        <>
            <main className="min-h-screen p-6 bg-gradient-to-bl from-coolGray-900 via-coolGray-600 to-coolGray-900 grid grid-cols-1">
                <div className="pt-20">
                    <h1 className="justify-center flex text-white text-5xl md:text-6xl lg:text-7xl uppercase font-black">Coding Projects</h1>
                </div>
                
                    <div className="pt-20 pb-20">
                        <Carousel breakPoints={breakPoints}>
                        <div className="bg-gray-100 flex justify-center align-middle ">
                            <img src="../images/enCapsulate.jpg" alt="pic"></img>
                        </div>
                        <div className="bg-gray-100 flex justify-center align-middle ">
                            <img src="../images/enCapsulate2.jpg" alt="pic"></img>
                        </div>
                        <div className="bg-gray-100 flex justify-center align-middle ">
                            <img src="../images/enCapsulate3.jpg" alt="pic"></img>
                        </div>
                        </Carousel>
                        <h1 className="pt-8  flex justify-center text-white text-xl md:text-2xl xl:text-3xl font-quicksand">"enCapsulate: Sustainable Capsule Clothing."</h1>
                        <a className="justify-center flex text-white pt-4" href="https://encapsulate.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                        <a className="justify-center flex text-white pt-4" href="https://github.com/willstrudel/enCapsulate" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                       
                    </div>

                    <div className="pb-12">
                        <Carousel breakPoints={breakPoints}>
                        <div className="bg-gray-100 flex justify-center align-middle ">
                            <img src="../images/EmptyPantry.jpg" alt="pic"></img>
                        </div>
                        <div className="bg-gray-100 flex justify-center align-middle ">
                            <img src="../images/EmptyPantry2.jpg" alt="pic"></img>
                        </div>
                        <div className="bg-gray-100 flex justify-center align-middle ">
                            <img src="../images/EmptyPantry3.jpg" alt="pic"></img>
                        </div>
                        </Carousel>
                        <h1 className="pt-8 flex justify-center text-white text-xl md:text-2xl xl:text-3xl font-quicksand">"Empty Pantry: Homemade Recipe Generator."</h1>
                        <a className="justify-center flex text-white pt-4" href="https://willstrudel.github.io/Empty-Pantry/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                        <a className="justify-center flex text-white pt-4" href="https://github.com/willstrudel/Empty-Pantry/" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
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

export default Coding;
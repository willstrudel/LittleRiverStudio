import React from 'react'

const Videos = () => {
    return (
        <>
            <main className="min-h-screen justify-center items-center bg-gradient-to-b from-coolGray-600 via-coolGray-700 to-coolGray-700">
                <div className="flex justify-center">
                     <h1 className="mt-24 mb-10 flex justify-center uppercase font-black text-white text-6xl md:text-7xl lg:text-7xl">Videos</h1>
                </div>


                <div className="bg-gradient-to-t from-coolGray-700 via-coolGray-600 to-coolGray-800  items-center grid grid-rows-1 md:grid-row-1 lg:grid-cols-2 pb-12">

                  
                    <div className="grid md:pt-0 pt-10 sm:pt-0">
                        <div className="flex items-center justify-center m-8 md:m-12 lg:m-16 xl:m-20 aspect-w-16 aspect-h-10">
                            <iframe title="Corner Street Tacos" src="https://www.youtube.com/embed/jYvXHDoa_3g" className="flex rounded-lg border-2 shadow-xl" allowFullScreen></iframe>
                        </div>
                        <h4 className="flex justify-start lg:justify-center text-white ml-8 md:ml-12 lg:ml-0 uppercase font-black text-3xl md:text-4xl lg:text-5xl">Corner Street
                        </h4>
                        <p className="m-8 md:m-12 lg:m-16 xl:m-20 text-center text-white text-xl md:text-2xl font-dosis">First video shoot for local restaurant <a className=" text-indigo-300 visited:text-indigo-300 hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.ordercornerstreet.com/" target="_blank" rel="noopener noreferrer">The Corner Street Taco Bar</a>, such a wonderful experience with incredible employees taking care of us!
                        </p>
                    </div>

                    <div className="grid md:pt-0 pt-10 sm:pt-0">
                        <div class="flex items-center justify-center m-8 md:m-12 lg:m-16 xl:m-20 aspect-w-16 aspect-h-10">
                            <iframe title="DJI Mini 2 at Amicalola Falls" src="https://www.youtube.com/embed/Se6yHHQLsDc" className="flex rounded-lg border-2 shadow-xl" allowFullScreen></iframe>
                        </div>
                        <h4 className="flex justify-end lg:justify-center text-white mr-8 md:mr-12 lg:mr-0 uppercase font-black text-3xl md:text-4xl lg:text-5xl">Amicalola Falls
                        </h4>
                        <p className="m-8 md:m-12 lg:m-16 xl:m-20 text-center text-white text-xl md:text-2xl font-dosis">Went on a little trip to <a className=" text-indigo-300 visited:text-indigo-300 hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.amicalolafallslodge.com/" target="_blank" rel="noopener noreferrer">Amicalola Falls</a> in North Georgia for some drone footage, couldn't have asked for a better view with the leaves changing for Fall!
                        </p>
                    </div>

                    <div className="grid md:pt-0 pt-10 sm:pt-0">
                        <div class="flex items-center justify-center m-8 md:m-12 lg:m-16 xl:m-20 aspect-w-16 aspect-h-10">
                            <iframe title="Corner Street Tacos" src="https://www.youtube.com/embed/skSXAAl0rgY" className="flex rounded-lg border-2 shadow-xl" allowFullScreen></iframe>
                        </div>
                        <h4 className="flex justify-end lg:justify-center text-white mr-8 md:mr-12 lg:mr-0 uppercase font-black text-3xl md:text-4xl lg:text-5xl">Fall Festival
                        </h4>
                        <p className="m-8 md:m-12 lg:m-16 xl:m-20 text-center text-white text-xl md:text-2xl font-dosis">This video was made while visiting the <a className=" text-indigo-300 visited:text-indigo-300 hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://visitwoodstockga.com/landing-page/autumn-in-woodstock-ga/" target="_blank" rel="noopener noreferrer">Woodstock Georgia Fall Festival</a> in late September, looking forward to many more this year!
                        </p>
                    </div>
                    
                </div>
            </main>
            <footer className="w-full bottom-0 inset-x-0 fixed p-2 flex justify-center bg-coolGray-900">
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

export default Videos;

import React from 'react'

const Videos = () => {
    return (
        <>
            <main className="min-h-screen justify-center items-center bg-blue-300">
                <div className="flex justify-center border-b-4 border-indigo-500 xl:mb-2 sm:border-none">
                     <h1 className="mb-8 mt-28 flex justify-center uppercase font-black text-black text-6xl md:text-7xl lg:text-7xl">Videos</h1>
                </div>


                <div className=" bg-blue-300 items-center grid grid-rows-1 md:grid-row-1 lg:grid-cols-2">

                  
                    <div className="grid md:pt-0 pt-10 sm:pt-0">
                        <div className="flex items-center justify-center m-8 md:m-12 lg:m-16 xl:m-20 aspect-w-16 aspect-h-10">
                            <iframe title="Corner Street Tacos" src="https://www.youtube.com/embed/jYvXHDoa_3g" className="flex rounded-lg border-2 shadow-xl" allowFullScreen></iframe>
                        </div>
                        <h4 className="flex justify-start lg:justify-center text-black ml-8 md:ml-12 lg:ml-0 uppercase font-black text-3xl md:text-4xl lg:text-5xl">Corner Street
                        </h4>
                        <p className="m-8 md:m-12 lg:m-16 xl:m-20 text-center text-black text-xl md:text-2xl font-dosis">First video shoot for local restaurant <a className=" text-indigo-800 visited:text-indigo-800 hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.ordercornerstreet.com/" target="_blank" rel="noopener noreferrer">The Corner Street Taco Bar</a>, such a wonderful experience with incredible employees taking care of us!
                        </p>
                    </div>

                    <div className="grid">
                        <div class="flex items-center justify-center m-8 md:m-12 lg:m-16 xl:m-20 aspect-w-16 aspect-h-10">
                            <iframe title="Corner Street Tacos" src="https://www.youtube.com/embed/skSXAAl0rgY" className="flex rounded-lg border-2 shadow-xl" allowFullScreen></iframe>
                        </div>
                        <h4 className="flex justify-end lg:justify-center text-black mr-8 md:mr-12 lg:mr-0 uppercase font-black text-3xl md:text-4xl lg:text-5xl">Fall Festival
                        </h4>
                        <p className="m-8 md:m-12 lg:m-16 xl:m-20 text-center text-xl md:text-2xl font-dosis">This video was made while visiting the <a className=" text-indigo-800 visited:text-indigo-800 hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://visitwoodstockga.com/landing-page/autumn-in-woodstock-ga/" target="_blank" rel="noopener noreferrer">Woodstock Georgia Fall Festival</a> in late September, looking forward to many more this year!
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Videos;

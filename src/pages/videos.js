import React from 'react'

const Videos = () => {
    return (
        <>
            <main className="min-h-screen justify-center grid grid-cols-1 bg-gray-500">
                <div className="bg-red-300 pt-28">
                        <h1 className="justify-center grid text-5xl md:text-7xl uppercase font-black">Videos</h1>
                    <div className="bg-blue-300 grid  pt-28">
                        <div class="grid aspect-w-16 aspect-h-12 m-8 ">
                            <iframe title="Corner Street Tacos" src="https://www.youtube.com/embed/UBOj6rqRUME" frameBorder="0" className="grid" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

               

            </main>
        </>
    )
}

export default Videos;

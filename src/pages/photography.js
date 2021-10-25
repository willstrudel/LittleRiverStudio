import React from 'react'

const images = [
    { id: '1', imageName: 'img1.jpg', tag: 'car'}, 
    { id: '2', imageName: 'img2.jpg', tag: 'car'},
    { id: '3', imageName: 'img3.jpg', tag: 'car'}, 
    { id: '4', imageName: 'img4.jpg', tag: 'car'},
    { id: '5', imageName: 'img5.jpg', tag: 'car'}, 
    { id: '6', imageName: 'img6.jpg', tag: 'motorcycle'}, 
    { id: '7', imageName: 'img7.jpg', tag: 'motorcycle'}, 
    { id: '8', imageName: 'img8.jpg', tag: 'people'}, 
    { id: '9', imageName: 'img9.jpg', tag: 'people'}, 
    { id: '10', imageName: 'img10.jpg', tag: 'people'}, 
    { id: '11', imageName: 'img11.jpg', tag: 'people'}, 
    { id: '12', imageName: 'img12.jpg', tag: 'dogs'}, 
    { id: '13', imageName: 'img13.jpg', tag: 'dogs'}, 
    { id: '14', imageName: 'img14.jpg', tag: 'dogs'}, 
    { id: '15', imageName: 'img15.jpg', tag: 'car'}, 
];

const Photography = () => {
    return (
        <>
            <main className="min-h-screen justify-center grid items-start bg-gray-500">
                <div className="pt-28">
                    <h1 className="justify-center mb-10 flex text-5xl md:text-7xl uppercase font-black">Photography</h1>
                </div>
            </main>
        </>
    )
}

export default Photography;
import React, { useEffect, useState } from 'react';
import '../App.css';



const images = [
    { id: '1', imageName: 'img1.jpg', tag: 'cars'}, 
    { id: '2', imageName: 'img2.jpg', tag: 'cars'},
    { id: '3', imageName: 'img3.jpg', tag: 'cars'}, 
    { id: '4', imageName: 'img4.jpg', tag: 'cars'},
    { id: '5', imageName: 'img5.jpg', tag: 'cars'}, 
    { id: '6', imageName: 'img6.jpg', tag: 'motorcycle'}, 
    { id: '7', imageName: 'img7.jpg', tag: 'motorcycle'}, 
    { id: '8', imageName: 'img8.jpg', tag: 'people'}, 
    { id: '9', imageName: 'img9.jpg', tag: 'people'}, 
    { id: '10', imageName: 'img10.jpg', tag: 'people'}, 
    { id: '11', imageName: 'img11.jpg', tag: 'people'}, 
    { id: '12', imageName: 'img12.jpg', tag: 'dogs'}, 
    { id: '13', imageName: 'img13.jpg', tag: 'dogs'}, 
    { id: '14', imageName: 'img14.jpg', tag: 'dogs'}, 
    { id: '15', imageName: 'img15.jpg', tag: 'cars'}, 
];


function App() {
    const [tag, setTag] = useState('all');
    const [ filteredImages, setFilteredImages ] = useState([]);


    useEffect(
        () => { 
            tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag ));
        }, 
        [tag]
        
    ); 


    return (
        <>
        <div className="bg-coolGray-600 pt-24 min-w-screen">
                        <h1 className="font-black text-white text-center uppercase text-4xl xl:text-7xl">Photography</h1>
                    </div>
        <div className="bg-gradient-to-b bg-coolGray-600 to-coolGray-400 min-h-screen pt-12">
                <div className="tags">
                    <TagButton name="all" handleSetTag={setTag} tagActive={ tag === 'all' ? true : false }/>
                    <TagButton name="cars" handleSetTag={setTag} tagActive={ tag === 'cars' ? true : false }/>
                    <TagButton name="people" handleSetTag={setTag} tagActive={ tag === 'people' ? true : false }/>
                    <TagButton name="motorcycle" handleSetTag={setTag} tagActive={ tag === 'motorcycle' ? true : false }/>
                    <TagButton name="dogs" handleSetTag={setTag} tagActive={ tag === 'dogs' ? true : false }/>
                </div>

                <div className="container w-4/5 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6 mt-10 pb-10">
                        { filteredImages.map( image => (
                            <div key={image.id} className="border-2 rounded-lg">
                                <img className="w-full rounded-md" src={`../images/${image.imageName}`} alt="images"/>
                            </div>))}
                </div>
        </div>
        </>      
    );
};

const TagButton = ( {name, handleSetTag, tagActive} ) => {
    return ( 
        <button className= {` tag ${ tagActive ? 'active': null} `} onClick={ () => handleSetTag(name)}>{name.toUpperCase()}
        {' '}</button>
    );
};


export default App;
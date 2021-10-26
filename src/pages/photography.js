import React, { useEffect, useState } from 'react';
import '../App.css';



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
        
        <div className="App">
            <div className="">
                <h1>Photography</h1>
            </div>
                <div className="pt-32 text-center pb-10 bg-coolGray-300">
                    <TagButton name="all" handleSetTag={setTag}/>
                    <TagButton name="car" handleSetTag={setTag}/>
                    <TagButton name="people" handleSetTag={setTag}/>
                    <TagButton name="motorcycle" handleSetTag={setTag}/>
                    <TagButton name="dogs" handleSetTag={setTag}/>
                </div>

                <div className="container w-4/5 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6 mt-10 mb-10">
                        { filteredImages.map( image => (
                            <div key={image.id} className="border-2 rounded-lg">
                                <img className="w-full" src={`../images/${image.imageName}`} alt="images"/>
                            </div>))}
                </div>
        </div>
                
    );
};

const TagButton = ( {name, handleSetTag} ) => {
    return ( 
        <button onClick={ () => handleSetTag(name)} className="border-2 rounded-md p-1 font-black font-dosis ml-5 mr-5 cursor-pointer">{name.toUpperCase()}</button>
    );
};


export default App;
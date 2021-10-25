import React, { useEffect, useState } from 'react';


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
    const [tag, setTag] = useState('all');
    const [ filteredImages, setFilteredImages ] = useState([]);


    useEffect(
        () => 
            { tag === 'all' ? setFilteredImages(images) : setFilteredImages( images.filter(image => image.tag === tag ));}, 
        [tag]); 


    return (
        
            <div className="App" handleSetTag={setTag}>
                <div className="pt-52">
                    <TagButton name='all' handleSetTag={setTag}/>
                    <TagButton name='car' handleSetTag={setTag}/>
                    <TagButton name='people' handleSetTag={setTag}/>
                    <TagButton name='motorcycle' handleSetTag={setTag}/>
                    <TagButton name='dogs' handleSetTag={setTag}/>
                    { filteredImages.map( image => <div>{ image.imageName }</div>)}
                </div>
            </div>
            
        
    )
}

const TagButton = ( {name, handleSetTag} ) => {
    return <button onClick={ () => handleSetTag(name)} className="border-2 rounded-md">{name.toUpperCase()}</button>;
};

export default Photography;
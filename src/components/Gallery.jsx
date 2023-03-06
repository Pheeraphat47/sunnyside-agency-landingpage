import React from 'react';
import imgMilk from '../assets/images/desktop/image-gallery-milkbottles.jpg';
import imgOrange from '../assets/images/desktop/image-gallery-orange.jpg';
import imgCone from '../assets/images/desktop/image-gallery-cone.jpg';
import imgSugarCubes from '../assets/images/desktop/image-gallery-sugarcubes.jpg';


function Gallery(){
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4' id='projects'>

            <img src={imgMilk} alt="milk"/>
            <img src={imgOrange} alt="orange"/>
            <img src={imgCone} alt="cone"/>
            <img src={imgSugarCubes} alt="sugar"/>

        </div>
    )
}

export default Gallery;
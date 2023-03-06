import React from 'react';
import Nav from './Nav';
import Arrow from '../assets/images/icon-arrow-down.svg';


function Header(){
    return(
        <div className='h-[60rem] bg-header bg-cover bg-center text-center'>
            <Nav/>
           <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase text-center text-white mt-10 md:mt-14 tracking-widest " style={{fontFamily: 'Fraunces'}}>We are creatives</h1>
           <div className='flex justify-center mt-16 md:mt-24'>
           <img src={Arrow} alt="arrow" className='mt-[5rem] max-w-sm' />
           </div>
        </div>
    )
}

export default Header;

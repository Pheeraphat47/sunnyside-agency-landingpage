import React from 'react';
import Nav from './Nav';
import { FaLongArrowAltDown} from 'react-icons/fa';

function Header(){
    return(
        <div className='h-[60rem] bg-header bg-cover bg-center text-center'>
            <Nav/>
           <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase text-center text-white mt-10 md:mt-14">We are creatives</h1>
           <div className='flex justify-center mt-16 md:mt-24'>
           <FaLongArrowAltDown className='text-white text-6xl md:text-8xl lg:text-9xl'/>
           </div>
        </div>
    )
}

export default Header;

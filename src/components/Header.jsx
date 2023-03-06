import React from 'react';
import Nav from './Nav';
import { FaLongArrowAltDown} from 'react-icons/fa';

function Header(){
    return(
        <div className='h-[60rem]  bg-header bg-cover bg-center text-center'>
            <Nav/>
           <h1 className="text-7xl uppercase text-center text-white mt-14">We are creatives</h1>
           <div className='flex justify-center mt-24'>
           <FaLongArrowAltDown className='text-white text-9xl'/>
           </div>
        </div>
    )
}

export default Header;
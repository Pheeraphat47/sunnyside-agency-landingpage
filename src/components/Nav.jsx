import React from "react";


function Nav(){
    return(
        <div className="flex flex-col md:flex-row lg:flex-row justify-between px-[1rem] py-[3rem]">
            <div className="logo mt-2">
                <a href="#" className="text-white font-bold text-4xl">sunnyside</a>
            </div>
            <ul className="menu flex flex-col md:flex-row lg:flex-row items-center text-white">
                <li><a href="#" className="mx-[30px] my-[10px] text-lg">About</a></li>
                <li><a href="#" className="mx-[30px] my-[10px] text-lg">Services</a></li>
                <li><a href="#" className="mx-[30px] my-[10px] text-lg">Projects</a></li>
                <li><a href="#" className="mx-[30px] my-[10px] flex justify-center items-center bg-white w-[100px] h-[45px] text-black rounded-full font-bold px-16 uppercase text-lg">Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav;
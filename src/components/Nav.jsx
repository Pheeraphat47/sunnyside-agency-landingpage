import React from "react";


function Nav(){
    return(
        <div className="flex flex-col md:flex-row lg:flex-row justify-between px-[2rem] py-[3rem]">
            <div className="logo mt-3">
                <a href="#" className="text-white font-bold text-3xl">sunnyside</a>
            </div>
            <ul className="menu flex flex-col md:flex-row lg:flex-row items-center text-white">
                <li><a href="#" className="mx-[40px] my-[10px]">About</a></li>
                <li><a href="#" className="mx-[40px] my-[10px]">Services</a></li>
                <li><a href="#" className="mx-[40px] my-[10px]">Projects</a></li>
                <li><a href="#" className="mx-[40px] my-[10px] flex justify-center items-center bg-white w-[100px] h-[45px] text-black rounded-full font-bold">Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav;
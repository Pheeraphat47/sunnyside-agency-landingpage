import React from "react";
import "../App.css";

function Nav() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between px-[0.5rem] py-[3rem]">
      <div className="logo mt-2">
        <a
          href="#"
          className="text-white font-bold text-4xl"
          style={{ fontFamily: "Fraunces" }}
        >
          sunnyside
        </a>
      </div>
      <div className="togmenu">
        <ul
          className="menu flex flex-col md:flex-row lg:flex-row items-center text-white"
          style={{ fontFamily: "Barlow" }}
        >
          <li>
            <a href="#about" className="mx-[20px] my-[10px] text-lg">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="mx-[20px] my-[10px] text-lg">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="mx-[20px] my-[10px] text-lg">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="mx-[30px] my-[10px] flex justify-center items-center bg-white hover:bg-opacity-50 w-[100px] h-[45px] text-black rounded-full font-bold px-20 uppercase text-lg contact hover:text-white"
              style={{ fontFamily: "Fraunces" }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

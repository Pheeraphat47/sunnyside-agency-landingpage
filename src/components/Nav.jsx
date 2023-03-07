import React, { useState, useEffect } from "react";
import "../App.css";
import Hamburger from "../assets/images/icon-hamburger.svg";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setscreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between px-[0.5rem] py-[3rem]">
      <div className="logo mt-3 flex ">
        <a
          href="#"
          className="text-white font-bold text-4xl pl-4 lg:pl-8"
          style={{ fontFamily: "Fraunces" }}
        >
          sunnyside
        </a>

        <div
          onClick={toggleNav}
          className="Hamburger ml-auto order-last mt-3 md:hidden"
        >
          <img src={Hamburger} alt="togglebutton" />
        </div>
      </div>
      {(toggleMenu || screenWidth > 767) && (
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
      )}
    </div>
  );
}

export default Nav;

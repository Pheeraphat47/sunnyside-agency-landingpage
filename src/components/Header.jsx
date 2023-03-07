import React from "react";
import Nav from "./Nav";
import Arrow from "../assets/images/icon-arrow-down.svg";
import "../App.css";

function Header() {
  return (
    <div className="h-[60rem] bg-header bg-cover bg-center text-center">
      <Nav />
      <h1
        className="text-5xl mt-32  md:text-6xl lg:text-7xl uppercase text-center text-white"
        style={{ fontFamily: "Fraunces" }} id="heading"
      >
        We are creatives
      </h1>
      <div className="flex justify-center md:mt-24">
        <a href="#about"><img
          src={Arrow}
          alt="arrow"
          className="mt-[15rem] max-w-sm animate-bounce"
        /></a>
        
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import imgTransform from "../assets/images/desktop/image-transform.jpg";

function SectionOne() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2" id="about">
      <div className="left flex justify-center items-center p-4 lg:p-10">
        <div>
          <h3 className="text-5xl lg:text-6xl" style={{fontFamily: 'Fraunces'}}>Transfrom your brand</h3>
          <p className="text-gray-500 my-4 lg:my-8 lg:text-xl" style={{fontFamily: 'Barlow'}}>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#" className="border-b-4 border-b-yellow-500 text-xl font-bold uppercase" style={{fontFamily: 'Fraunces'}}>
            Learn more
          </a>
        </div>
      </div>
      <div className="right">
        <img className="w-full h-full object-cover" src={imgTransform} alt="transform brand" />
      </div>
    </div>
  );
}

export default SectionOne;


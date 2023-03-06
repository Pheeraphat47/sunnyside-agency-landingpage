import React from "react";
import fbicon from "../assets/images/icon-facebook.svg";
import igicon from "../assets/images/icon-instagram.svg";
import twicon from "../assets/images/icon-twitter.svg";
import pinicon from "../assets/images/icon-pinterest.svg";

function Footer() {


  return (
    <footer className="bg-[#76BCAE]  flex text-center justify-center p-[3rem]">
      <div>
        <h3 className="font-bold text-[#25564B] text-3xl">sunnyside</h3>
        <ul className="flex my-[2rem]">
          <li className="mx-[1rem]  text-[#25564B] text-lg">
            <a href="#">About</a>
          </li>
          <li className="mx-[1rem]  text-[#25564B] text-lg">
            <a href="#">Services</a>
          </li>
          <li className="mx-[1rem]  text-[#25564B] text-lg">
            <a href="#">Projects</a>
          </li>
        </ul>

        <ul className="flex justify-evenly">
          <li>
            <a href="#">
              <img src={fbicon} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={igicon} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twicon} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={pinicon} alt="pinterest"/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

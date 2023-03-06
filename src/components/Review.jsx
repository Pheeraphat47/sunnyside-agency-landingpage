import React from "react";
import imgEmily from "../assets/images/image-emily.jpg";
import imgThomas from "../assets/images/image-thomas.jpg";
import imgJennie from "../assets/images/image-jennie.jpg";

const userData = [
  {
    img: imgEmily,
    content:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    position: "Marketing Director",
  },

  {
    img: imgThomas,
    content:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    position: "Chief Operating Officer",
  },

  {
    img: imgJennie,
    content:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    position: "Business Owner",
  },
];

function Review() {
  return (
    <div className="text-center py-[10rem] px-[3rem] lg:px-[5rem]">
      <h3 className="uppercase text-2xl font-bold md:text-3xl text-[#5A636C]  tracking-widest" style={{fontFamily: 'Fraunces'}}>
        Client testimonials
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[5rem] md:gap-[2rem]">
        {userData.map((data, key) => (
          <div key={data.name} className="py-[2rem] lg:py-[5rem] ">
            <img
              src={data.img}
              alt={data.name}
              className="inline-block rounded-full"
            />
            <p className="py-[2rem] lg:py-[5rem] text-[#5A636C]" style={{fontFamily: 'Barlow'}}>{data.content}</p>
            <h4 className="font-bold " style={{fontFamily: 'Fraunces'}}>{data.name}</h4>
            <p className="text-[#A7ABAE] pt-3" style={{fontFamily: 'Barlow'}}>{data.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;

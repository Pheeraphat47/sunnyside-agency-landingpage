import React from "react";

function SectionThree() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen lg:h-[700px]">
      <div className="left flex justify-center items-end p-4 lg:px-10 lg:pb-20 text-center bg-sec-three-left bg-cover bg-center">
        <div>
          <h3 className="text-3xl mb-4 text-[#25564B]" style={{fontFamily: 'Fraunces'}}>Graphic Design</h3>
          <p  className=" text-[#25564B] text-sm lg:text-base " style={{fontFamily: 'Barlow'}}>
            Great design makes you memorable. We deliver <br/> artwork that
            underscores your brand message <br/> and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="right flex justify-center items-end p-4 lg:px-10 lg:pb-20 text-center bg-sec-three-right bg-cover bg-center">
        <div>
          <h3 className="text-3xl mb-4 text-[#19536B]" style={{fontFamily: 'Fraunces'}}>Photography</h3>
          <p className="text-sm lg:text-base text-[#19536B]" style={{fontFamily: 'Barlow'}} >
            Increase your credibility by getting the most <br/>stunning, high-quality
            photos that improve <br/> your business image.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;



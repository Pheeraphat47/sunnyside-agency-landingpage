import React from "react";

function SectionThree() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen lg:h-[700px]">
      <div className="left flex justify-center items-end p-4 lg:px-10 lg:pb-20 text-center bg-sec-three-left bg-cover bg-center">
        <div>
          <h3 className="text-3xl mb-4">Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="right flex justify-center items-end p-4 lg:px-10 lg:pb-20 text-center bg-sec-three-right bg-cover bg-center">
        <div>
          <h3 className="text-3xl mb-4">Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;



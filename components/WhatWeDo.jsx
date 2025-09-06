import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="w-screen h-[120vh]   bg-[#0000001f] overflow-hidden backdrop-blur-3xl  ">
      <section className="section relative  ">
        <header className="text-[4rem] heading ">
          What we <span className="text-gd">do</span>
        </header>

        <div className="leftImage w-[459px] h-[380px] absolute top-[22vh] -left-10">
          <Image
            src="/whatleft.png"
            alt="Left Decorative"
            // width={}
            fill
            // height={400}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col justify-center h-full items-center mt-7">
          <div className="text-center  font-teachers flex flex-col z-20  justify-center items-center gap-2 mt-3 w-full">
            <h1>Design, Tech, Branding</h1>
            <p className="max-w-[58vw] z-20 leading-4.5 text-[.8rem]  ">
              We're not just another digital agency. We're your end-to-end
              innovation partner. Fyiris blends strategic creativity with robust
              engineering and sharp growth marketing to shape digital
              experiences that matter.
            </p>
          </div>

          <div className="w-[66vw] h-[28vw] mt-15 z-20  flex justify-center items-center gap-4 ">
            <div
              className="h-full border-[.1px] w-1/3 rounded-lg flex justify-center items-center"
              style={{
                background: "url('/designbox.png') center/cover no-repeat",
              }}
            >
              Design.
            </div>
            <div
              className="h-full border-[.1px] w-1/3 rounded-lg flex justify-center items-center"
              style={{
                background: "url('/techbox.png') center/cover no-repeat",
              }}
            >
              {" "}
              Tech.
            </div>
            <div
              className="h-full border-[.1px] w-1/3 rounded-lg flex justify-center items-center"
              style={{
                background: "url('/brandingbox.png') center/cover no-repeat",
              }}
            >
              {" "}
              Branding. 
            </div>
          </div>
        </div>

        <div className="leftImage w-[500px] h-[500px] absolute -bottom-[15vw] -right-[1vw] ">
          <Image
            src="/whatright.png"
            alt="Left Decorative"
            // width={}
            fill
            // height={400}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;

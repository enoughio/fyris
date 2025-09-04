import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="Hero ">
      <div className=" fixed top-10 right-0 w-[56%] h-[89.5vh] py-0 -z-10">
        <Image
          src="/hero.png"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div>
        <div className="flex flex-col justify-center pt-[13vw] items-end w-full pr-[45%] h-full ">
          <header className="-[15vw] -[15vw] pr-5 ">
            <div className="leading-none">
              <h1>
                <span className=" text-[1.3rem] ">We </span>
                <span className=" text-[2rem]">Create </span>
                <span className=" text-[3rem] text-gd">Experience</span>
              </h1>

              <h1>
                <span className="text-[1.3rem]">That </span>
                <span className="text-[3rem]">Solves </span>
                <span className="text-[1.3rem]">Your </span>
                <span className="text-[3rem]">Problem.</span>
              </h1>
            </div>
          </header>

          <p className="w-[38%] mt-4 text-[0.8rem] leading-tight font-extralight">
            Develops unique concepts for the system architecture by creating
            highlevel representations, identifying key components, and
            establishing interaction mechanisms. Visualizes and presents
            architectural designs for stakeholder review.
          </p>
        </div>

        <div className="px-20 flex justify-between items-end w-full">
          {/* box */}
          <div className="w-[24%] h-[270px] flex justify-center items-center gap-2 font-teachers">
            <div className="  p-3 flex flex-col justify-center items-center gap-3 border-[.1px] border-gd rounded-md w-[50px] h-full ">
              <h1 className="[writing-mode:vertical-rl] rotate-180 text-[18px]">
                Ready to <span>get started?</span>
              </h1>

              <button className="btn bg-white text-center font-extralight ">
                b
              </button>
            </div>

            <div className="w-full h-[100%] bg-black flex flex-col justify-center items-center gap-2">
              <div className="w-full h-1/2 overflow-hidden border-[.1px] rounded-md relative flex items-center justify-center">
                <div className="absolute text-white  top-3 left-4 font-extralight text-[15px]">
                  Completed <br /> Projects
                </div>
                <div
                  className="absolute left-1/2 top-1/2 w-[140%] h-[.1px] bg-white"
                  style={{
                    transform: "translate(-50%, -50%) rotate(-29deg)",
                  }}
                />

                <div className="absolute text-white bottom-5 leading-none right-5 text-[22px] ">
                  247
                </div>
              </div>
              <div className="w-full h-1/2 overflow-hidden  border-[.1px] rounded-md relative flex items-center justify-center">
                <div className="absolute text-white top-4 left-5 font-extralight">
                  338K
                </div>
                <div
                  className="absolute left-1/2 top-1/2 w-[140%] h-[.1px] bg-white"
                  style={{
                    transform: "translate(-50%, -50%) rotate(-29deg)",
                  }}
                />

                <div className="absolute text-white bottom-4 text-right right-5 leading-tight  text-[15px]">
                  Engaged <br /> Users
                </div>
              </div>
            </div>
          </div>

          {/* viewProjects */}
          <div className=" flex h-[7vw] w-[50vw] shadow-blue-200  backdrop-blur-3xl p-2 rounded-lg mb-3 justify-between items-center gap-5">
            <div className=" w-[350px] h-[80%] flex gap-2  translate-x-[-50px] hover:translate-x-[20px] transition-all duration-500">
              <div className="gradient-button rounded-lg h-full w-1/3"></div>
              <div className="gradient-button rounded-lg h-full w-1/3"></div>
              <div className="gradient-button rounded-lg h-full w-1/3"></div>
            </div>

            <div className="gradient-button rounded-lg  w h-[80%] flex justify-center items-center gap-2 px-2">
              <h1>View Projects</h1>
              <div className="w-5 h-5 border-2 border-gd rounded-full flex justify-center items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

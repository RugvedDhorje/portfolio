"use client";
import React from "react";
import StarsCanvas from "./StarCanvas";
import { Element } from "react-scroll";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const About = () => {
  return (
    <>
      <Element name="about">
        <BackgroundBeamsWithCollision fromColor="#1a1a1a" toColor="#0a0a0a">
          {/* Background Stars Layer */}
          <div className="absolute inset-0 z-0">
            <StarsCanvas />
          </div>
          <div className="h-screen w-full ">
            <div className="max-w-screen-2xl mx-auto">
              <h1 className="text-center text-white text-[44px] font-bold mt-12">
                <span className="relative inline-block">
                  <span className="relative z-10">About Me</span>
                  <span className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r   rounded-full z-0"></span>
                </span>
              </h1>
              <div className="w-full my-10 p-[1px] rounded-lg bg-gradient-to-r from-cyan-600 to-teal-400">
                <div className="w-full text-white bg-[#09090B] border-[0.5px] border-transparent p-5 rounded-lg text-center">
                  <h2 className="text-[36px] font-semibold pb-4">Education</h2>
                  <p className="text-[24px] font-light">
                    Pune Vidyarthi Griha’s College of Engineering and Technology
                    BE in Electronics & Telecommunication Engineering
                    Pune,Maharashtra,India
                  </p>
                  <p className="text-[24px] font-light">
                    2020-2024 - CGPA : 8.66{" "}
                  </p>
                </div>
              </div>
              <div className="w-full my-10 p-[1px] rounded-lg bg-gradient-to-r from-cyan-600 to-teal-400">
                <div className="w-full text-white bg-[#09090B] border-[0.5px] border-transparent p-5 rounded-lg text-center">
                  <h2 className="text-[36px] font-semibold text-center pb-2">
                    Experience
                  </h2>
                  <h4 className="text-[30px] font-medium pb-2">
                    {" "}
                    MyVendex – Full Stack Developer Intern
                  </h4>
                  <ul className="text-[20px] list-disc pl-6 space-y-2 font-light leading-snug">
                    <li>
                      Developed a responsive vendor management platform using
                      Next.js, React.js, Node.js, Express.js, and MongoDB (MERN
                      stack).
                    </li>
                    <li>
                      Implemented auto-location detection and role-based
                      authentication (user, vendor, admin).
                    </li>
                    <li>
                      Built interactive dashboards to enhance functionality and
                      user control.
                    </li>
                    <li>
                      Designed and styled dynamic user interfaces using
                      TailwindCSS.
                    </li>
                    <li>
                      Integrated Framer Motion for animations, increasing user
                      engagement by 30%.
                    </li>
                    <li>
                      Optimized API handling with Axios for smoother data
                      interactions.
                    </li>
                    <li>
                      Ensured cross-device compatibility, resulting in a 25%
                      reduction in user drop-off.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </Element>
    </>
  );
};

export default About;

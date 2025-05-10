import React from "react";
import StarsCanvas from "./StarCanvas";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const About = () => {
  return (
    <>
      <BackgroundBeamsWithCollision>
        {/* Background Stars Layer */}
        <div className="absolute inset-0 z-0">
          <StarsCanvas />
        </div>
        <div className="h-screen w-full ">
          <div className="max-w-screen-2xl mx-auto">
            <h1 className="text-[44px] my-7 text-center text-white font-bold">
              About Me
            </h1>
            <div className="w-full text-white border-[0.5px] p-5 rounded-lg text-center my-10">
              <h2 className="text-[36px] font-semibold pb-4">Education</h2>
              <p className="text-[24px]">
                Pune Vidyarthi Griha’s College of Engineering and Technology BE
                in Electronics & Telecommunication Engineering
                Pune,Maharashtra,India
              </p>
              <p className="text-[24px]">2020-2024 - CGPA:8.66 </p>
            </div>
            <div className="w-full  text-white border-[0.5px] p-5 rounded-lg">
              <h2 className="text-[36px] font-semibold text-center pb-4">
                Experience
              </h2>
              <h4 className="text-[30px]">
                {" "}
                MyVendex – Full Stack Developer Intern
              </h4>
              <ul className="text-[20px] list-disc pl-6 space-y-2">
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
                  Built interactive dashboards to enhance functionality and user
                  control.
                </li>
                <li>
                  Designed and styled dynamic user interfaces using TailwindCSS.
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
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default About;

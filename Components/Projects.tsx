import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import StarsCanvas from "./StarCanvas";

const Projects = () => {
  return (
    <>
      <BackgroundBeamsWithCollision>
        {/* Background Stars Layer */}
        <div className="absolute inset-0 z-0">
          <StarsCanvas />
        </div>
        <div className="h-screen w-full">
          <div className="max-w-screen-2xl mx-auto">
            <h1 className="text-center text-white text-[44px] font-bold">
              Projects
            </h1>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default Projects;
